import { FC } from 'react'
import { AppRoutes } from './router'
import { AppProvider } from './providers/app'

export const App: FC = () => {
	return (
		<AppProvider>
			<AppRoutes />
		</AppProvider>
	)
}
