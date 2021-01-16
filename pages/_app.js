import { Center, ChakraProvider, Box, extendTheme } from '@chakra-ui/react'
import AuthProvider from '../src/shared/auth/context'

const App = ({ Component, pageProps }) => (
	<AuthProvider>
		<ChakraProvider
			theme={extendTheme({
				colors: {
					purple: '#3F3E5E',
					green: '#81B199',
					lightBeige: '#F5F2DF',
					peach: '#F2CB92',
					orange: '#DF7A5E',
				},
				fonts: {
					body: 'system-ui, sans-serif',
					heading: 'Andada, serif',
				},
				fontSizes: {
					xs: '12px',
					sm: '14px',
					md: '16px',
					lg: '18px',
					xl: '20px',
					'2xl': '24px',
					'3xl': '28px',
					'4xl': '36px',
					'5xl': '48px',
					'6xl': '64px',
				},
				fontWeights: {
					normal: 400,
					medium: 500,
					bold: 700,
				},
				lineHeights: {
					normal: 'normal',
					none: '1',
					shorter: '1.25',
					short: '1.375',
					base: '1.5',
					tall: '1.625',
					taller: '2',
				},
				letterSpacings: {
					tighter: '-0.05em',
					tight: '-0.025em',
					normal: '0',
					wide: '0.025em',
					wider: '0.05em',
					widest: '0.1em',
				},

				styles: {
					global: {
						'.chakra-button': {
							color: 'purple',
							_hover: {
								opacity: 0.5,
							},
							bgColor: 'purple',
							colorScheme: 'purple',
						},
						body: {
							color: 'purple',
							bg: 'lightBeige',
						},
					},
				},
			})}>
			<Center>
				<Box>
					<Component {...pageProps} />
				</Box>
			</Center>
		</ChakraProvider>
	</AuthProvider>
)

export default App
