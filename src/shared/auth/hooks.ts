import { useContext } from 'react'
import { GraphQLClient, gql } from 'graphql-request'
import { AuthContext } from './context'

const useAuth = () => useContext(AuthContext)

export const getExists = async (token: string, uid: string) => {
	const client = new GraphQLClient(process.env.api, {
		headers: {
			token,
		},
	})

	return client
		.request(
			gql`
				query UserExists($id: String!) {
					user(id: $id) {
						id
					}
				}
			`,
			{
				id: uid,
			}
		)
		.then(() => true)
		.catch(() => false)
}

export default useAuth
