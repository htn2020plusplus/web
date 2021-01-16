import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import IndexBody from '../components/login-body'
import IndexNav from '../components/nav'

export default function Home() {
	return (
		<Box>
			<Head>
				<title>🏛 Legist</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<IndexNav />
			<IndexBody />
		</Box>
	)
}
