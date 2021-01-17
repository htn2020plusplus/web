import {
	Container,
	Box,
	Button,
	Flex,
	Text,
	Image,
	HStack,
	Heading,
} from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import useAuth from '../src/shared/auth/hooks'
import { styles } from './styles'

export default function IndexBody() {
	const { signInWithGoogle, signOut, loggedIn } = useAuth()
	return (
		<Container maxW="m">
			<Box>
				<HStack>
					<Flex style={styles.flex} direction="column">
						<Heading>Putting the gist in legist-lation</Heading>
						<Text>Putting the gist in legist-lation</Text>
						{!loggedIn ? (
							<Link href="/onboarding">
								<Button style={styles.purpleButton} onClick={signInWithGoogle}>
									Sign in with Google
								</Button>
							</Link>
						) : (
							<Button
								style={styles.purpleButton}
								colorScheme="lightBeige"
								onClick={signOut}>
								Sign Out
							</Button>
						)}
					</Flex>
				</HStack>
				<Box boxSize="m">
					<Image
						// src={require('../public/splash-image.png')}
						alt="Parliament building"
					/>
				</Box>
			</Box>
		</Container>
	)
}
