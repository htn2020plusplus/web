import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Nav from './nav'


const categories = [
    {
      id: 1,
      name: "Leanne Graham",
      description: "Bret",
      imageURL: "https://bit.ly/2Z4KKcF",
    },
    {
        id: 2,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
    },
    {
      id: 3,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 5,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },


}




export default function OnboardingTitle() {
	return (
		<Box>
			<Text>Customize Your Feed</Text>
			<Text>
				Select the top 5 categories you’re most interested in. You can add more
				later!
			</Text>
		</Box>
	)
}
