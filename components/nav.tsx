import { Box, Button, Flex, Link as NavLink } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
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
			<Box boxSize="m">
				<Image
					src="/logo.png"
					alt="Parliament building"
					width="50"
					height="50"
				/>
			</Box>
			<Box>
				<Link href="/">
					<NavLink style={styles.navItemLink}>About</NavLink>
				</Link>
				<Link href="/">
					<NavLink style={styles.navItemLink}>Collections</NavLink>
				</Link>
				<Link href="/">
					<NavLink style={styles.navItemLink}>Contribute</NavLink>
				</Link>
				<Link href="/login">
					<Button style={styles.navItemButton}>Join Legist</Button>
				</Link>
			</Box>
		</Flex>
	)
}
