import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import useAuth from '../src/shared/auth/hooks'

export default function Home() {
	const { signInWithGoogle, signOut, loggedIn } = useAuth()
	return (
		<Box>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Flex direction="column">
				<Text>Hi there! Welcome to Legist!</Text>
				{!loggedIn ? (
					<Button onClick={signInWithGoogle}>Hello</Button>
				) : (
					<Button colorScheme="lightBeige" onClick={signOut}>
						Sign Out
					</Button>
				)}
			</Flex>
		</Box>
	)
}
