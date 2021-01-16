import { Button } from '@chakra-ui/react'
import Head from 'next/head'
import useAuth from '../src/shared/auth/hooks'

export default function Home() {
	const { signInWithGoogle, signOut, loggedIn } = useAuth()
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			Hi there!
			{!loggedIn ? (
				<Button onClick={signInWithGoogle}>Hello</Button>
			) : (
				<Button onClick={signOut}>Sign Out</Button>
			)}
		</div>
	)
}
