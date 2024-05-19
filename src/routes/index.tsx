import { lazyImport } from '@/utils/lazyImport'
import { Routes, Route } from 'react-router-dom'

const { RegisterRoute } = lazyImport(() => import('@/features/auth'), 'RegisterRoute')
const { LoginRoute } = lazyImport(() => import('@/features/auth'), 'LoginRoute')

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/auth/register" element={<RegisterRoute />} />
			<Route path="/auth/login" element={<LoginRoute />} />
		</Routes>
	)
}
