import {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
	NextPage,
} from 'next'
import nookies from 'nookies'
import { Button, Text } from '@chakra-ui/react'
import firebaseAdmin from '../../src/shared/firebase/admin'
import useAuth, { getExists } from '../../src/shared/auth/hooks'

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	try {
		const cookies = nookies.get(ctx)

		const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)

		const { uid, email } = token

		if (await getExists(cookies.token, uid)) {
			return {
				props: { message: `Your email is ${email} and your UID is ${uid}.` },
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
>> = ({ message }) => {
	const { signOut } = useAuth()

	return (
		<>
			<Text>{message}</Text>
			<Button onClick={signOut}>Sign Out</Button>
		</>
	)
}

export default Dashboard
