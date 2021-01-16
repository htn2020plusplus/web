import {
	Container,
	Box,
	Button,
	Flex,
	Text,
	Image,
	Stack,
} from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import useAuth from '../src/shared/auth/hooks'
import { styles } from './styles'

export default function IndexBody() {
	const { signInWithGoogle, signOut, loggedIn } = useAuth()
	return (
		<Container maxW="m">
			<Stack>
				<Flex style={styles.flex} direction="column">
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
			</Stack>
			<Box boxSize="m">
				<Image src="../public/splash-image.png" alt="Parliament building" />
			</Box>
		</Container>
	)
}
