import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import LoginBody from '../components/login-body'
import LoginNav from '../components/nav'

export default function Home() {
	return (
		<Box>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<LoginNav />
			<LoginBody />
		</Box>
	)
}
