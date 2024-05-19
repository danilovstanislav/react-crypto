import { ReactNode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

type AppProviderProps = {
	children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<Suspense>
			<BrowserRouter>{children}</BrowserRouter>
		</Suspense>
	)
}
