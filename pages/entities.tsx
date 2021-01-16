import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Nav from '../components/nav'
import OnboardingTitle from '../components/categories-header'

export default function Onboarding() {
	return (
		<Box>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
			<OnboardingTitle />
		</Box>
	)
}
