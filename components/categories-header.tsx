import { Box, Heading, Text, Button } from '@chakra-ui/react'
import Head from 'next/head'
import Nav from './nav'

export default function OnboardingTitle() {
	return (
		<Box>
			<Heading>Customize Your Feed</Heading>
			<Text>
				Select the top 5 categories you’re most interested in. You can add more
				later!
			</Text>
			<Button>Follow</Button>
		</Box>
	)
}
