import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

type TAppProvider = {
	children: ReactNode
}

export const AppProvider = ({ children }: TAppProvider) => {
	return (
		<ChakraProvider>
			<BrowserRouter>{children}</BrowserRouter>
		</ChakraProvider>
	)
}
