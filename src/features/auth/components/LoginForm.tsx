import { Input, Button, Form } from '@/components/ui'
import { RegisterDTO } from '@/types'
import { Link } from 'react-router-dom'
import { login, loginInputSchema } from '../api/login'

type LoginFormProps = {
	onSuccess?: () => void
	onError?: () => void
}

export const LoginForm = ({ onSuccess, onError }: LoginFormProps) => {
	const onSubmit = async (values: RegisterDTO) => {
		try {
			await login(values)
			console.log('Successfully logged in ✅✅✅✅')
			onSuccess && onSuccess()
		} catch (error) {
			console.error(error)
			onError && onError()
		}
	}

	return (
		<div className="w-100 min-h-screen p-4 flex items-center justify-center">
			<Form
				className="py-4 px-6 max-w-96 w-full bg-white rounded-lg shadow-lg"
				schema={loginInputSchema}
				onSubmit={onSubmit}
			>
				{({ register, formState }) => (
					<>
						<h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
						<Input
							label="Email"
							placeholder="example@gmail.com"
							type="email"
							className="mb-3"
							error={formState.errors.email}
							registration={register('email')}
						/>
						<Input
							label="Password"
							placeholder="Password"
							type="password"
							className="mb-3"
							error={formState.errors.password}
							registration={register('password')}
						/>
						<Button type="submit" className="w-full">
							Login
						</Button>

						<div className="text-center text-sm mt-4">
							Don't have an account yet?{' '}
							<Link to="/auth/register" className="font-medium text-emerald-500">
								Register now
							</Link>
						</div>
					</>
				)}
			</Form>
		</div>
	)
}
