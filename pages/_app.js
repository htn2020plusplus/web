import { ChakraProvider } from '@chakra-ui/react'
import AuthProvider from '../src/shared/auth/context'

const App = ({ Component, pageProps }) => (
	<AuthProvider>
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	</AuthProvider>
)

export default App
