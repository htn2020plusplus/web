import { Box, Button, Flex, Link as NavLink } from '@chakra-ui/react'
import Link from 'next/link'
import { styles } from './styles'

export default function IndexNav() {
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			mb={8}
			p={8}
			style={styles.navFlex}
			flexDirection="row">
			<Link href="/">
				<NavLink style={styles.purpleLinkText}>About</NavLink>
			</Link>
			<Link href="/">
				<NavLink style={styles.purpleLinkText}>Collections</NavLink>
			</Link>
			<Link href="/login">
				<Button style={styles.purpleButton}>Join Legist</Button>
			</Link>
		</Flex>
	)
}
