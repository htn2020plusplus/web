import nookies from 'nookies'
import React, { useEffect, useState } from 'react'
import { GraphQLClient, gql } from 'graphql-request'
import firebase from '../firebase/client'

type UserOr = firebase.User | null

export const AuthContext = React.createContext<{
	user: UserOr
	loggedIn: boolean
	exists: boolean
	signInWithGoogle: () => Promise<firebase.auth.UserCredential>
	signUp: (categories: string[]) => Promise<firebase.auth.UserCredential>
	signOut: () => Promise<void>
}>(null)

const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<UserOr>(null)
	const [exists, setExists] = useState(false)

	useEffect(
		() =>
			firebase.auth().onIdTokenChanged(async (user) => {
				console.log('👤 New Login')

				if (!user) {
					console.log('❌ NO USER')
					setUser(null)

					nookies.set(undefined, 'token', '', {})
					return
				}

				console.log('✅ USER')
				const token = await user.getIdToken()
				const client = new GraphQLClient(process.env.api as string, {
					headers: {
						token,
					},
				})

				const exists = await client
					.request(
						gql`
							query User($id: String!) {
								user(id: $id) {
									id
								}
							}
						`,
						{
							id: user.uid,
						}
					)
					.then(() => true)
					.catch(() => false)

				setExists(exists)

				setUser(user)
				console.log(token)
				console.log(user.uid)
				nookies.set(undefined, 'token', token, {})
			}),
		[]
	)

	return (
		<AuthContext.Provider
			value={{
				user,
				loggedIn: !!user,
				exists,
				signInWithGoogle: () =>
					firebase
						.auth()
						.signInWithPopup(new firebase.auth.GoogleAuthProvider()),
				signUp: async (categories: string[]) => {
					const user = await firebase
						.auth()
						.signInWithPopup(new firebase.auth.GoogleAuthProvider())

					const client = new GraphQLClient(process.env.api as string, {
						headers: {
							token: await user.user.getIdToken(),
						},
					})

					await client.request(
						gql`
							mutation CreateUser($uid: String!, $categories: [String!]!) {
								createUser(data: { uid: $uid, categories: $categories }) {
									id
									subscribedCategories {
										id
									}
								}
							}
						`,
						{
							uid: user.user.uid,
							categories,
						}
					)

					return user
				},
				signOut: async () => {
					await firebase.auth().signOut()
					window.location.href = '/'
				},
			}}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
