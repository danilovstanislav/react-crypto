import { Routes, Route } from 'react-router-dom'
import { Register } from '../../components/auth/Register'
import { Login } from '../../components/auth/Login'

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="register" element={<Register />} />
			<Route path="login" element={<Login />} />
		</Routes>
	)
}
