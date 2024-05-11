import { AuthRoutes } from './routes/Auth'
import { Home } from './routes/Home'

export const publicRoutes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/auth/*',
		element: <AuthRoutes />,
	},
]
