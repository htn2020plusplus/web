import {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
	NextPage,
} from 'next'
import nookies from 'nookies'
import { Button, Text } from '@chakra-ui/react'
import { gql, GraphQLClient } from 'graphql-request'
import firebaseAdmin from '../src/shared/firebase/admin'
import useAuth, { getExists } from '../src/shared/auth/hooks'
import { useQuery } from '../src/shared/data/hooks'

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	try {
		const cookies = nookies.get(ctx)

		const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)

		const { uid } = token

		if (await getExists(cookies.token, uid)) {
			const client = new GraphQLClient(process.env.api as string, {
				headers: { token: cookies.token },
			})

			const { user } = await client.request(
				gql`
					query User($id: String!) {
						user(id: $id) {
							id

							subscribedCategories {
								id
								title
								description
								entities {
									id
								}
							}
						}
					}
				`,
				{
					id: uid,
				}
			)

			return {
				props: {
					user,
					token: cookies.token,
				},
			}
		}

		return {
			redirect: {
				permanent: false,
				destination: '/onboarding',
			},
			// `as never` is required for correct type inference
			// by InferGetServerSidePropsType below
			props: {} as never,
		}
	} catch (err) {
		// either the `token` cookie didn't exist
		// or token verification failed
		// either way: redirect to the login page
		// either the `token` cookie didn't exist
		// or token verification failed
		// either way: redirect to the login page

		return {
			redirect: {
				permanent: false,
				destination: '/login',
			},
			// `as never` is required for correct type inference
			// by InferGetServerSidePropsType below
			props: {} as never,
		}
	}
}

const Dashboard: NextPage<InferGetServerSidePropsType<
	typeof getServerSideProps
>> = ({ user: _user, token }) => {
	const { signOut } = useAuth()

	const { data: user, error } = useQuery(
		`
    query User($id: String!) {
        user(id: $id) {
            id

            subscribedCategories {
                id
                title
                description
                entities {
                    id
                }
            }
        }
    }
`,
		{
			id: _user.id,
		},
		{
			token,
		},
		{
			initialData: _user,
			refreshInterval: 3000,
		}
	)

	return (
		<>
			<Text>
				Hello there! Subscribed categories:{' '}
				{user.subscribedCategories.map((x) => x.title)}{' '}
			</Text>
			<Button onClick={signOut}>Sign Out</Button>
		</>
	)
}

export default Dashboard
