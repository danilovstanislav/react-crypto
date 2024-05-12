import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

type TAppProvider = {
	children: ReactNode
}

export const AppProvider = ({ children }: TAppProvider) => {
	return <BrowserRouter>{children}</BrowserRouter>
}
