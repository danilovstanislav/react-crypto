import { HomeRoute } from './routes/Home'
import { lazyImport } from '../utils/lazyImport'

const { AuthRoute } = lazyImport(() => import('./routes/Auth'), 'AuthRoute')

export const publicRoutes = [
	{
		path: '/',
		element: <HomeRoute />,
	},
	{
		path: '/auth/*',
		element: <AuthRoute />,
	},
]
