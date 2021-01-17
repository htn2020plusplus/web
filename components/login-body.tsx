import {
	Container,
	Box,
	Button,
	Flex,
	Text,
	HStack,
	Heading,
} from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import useAuth from '../src/shared/auth/hooks'
import { styles } from './styles'
import Image from 'next/image'

export default function IndexBody() {
	const { signInWithGoogle, signOut, loggedIn } = useAuth()
	return (
		<Container maxW="m" style={styles.containerLogin}>
			<Flex direction="row">
				<HStack>
					<Flex
						align="flex-start"
						justify="space-between"
						wrap="wrap"
						w="100%"
						mb={8}
						p={8}
						direction="column">
						<Heading style={styles.h1}>
							Putting the gist {'\n'} in legist-lation
						</Heading>
						<Text style={styles.p}>Putting the gist in legist-lation</Text>
						{!loggedIn ? (
							<Link href="/onboarding">
								<Button
									style={styles.purpleButtonBig}
									onClick={signInWithGoogle}>
									Sign in with Google
								</Button>
							</Link>
						) : (
							<Button
								style={styles.purpleButtonBig}
								colorScheme="lightBeige"
								onClick={signOut}>
								Sign Out
							</Button>
						)}
					</Flex>
				</HStack>
				<Box>
					<Image
						src="/splash-image.png"
						alt="Parliament building"
						width="500"
						height="500"
					/>
				</Box>
			</Flex>
		</Container>
	)
}
