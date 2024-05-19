import { Input, Button, Form } from '@/components/ui'
import { RegisterDTO } from '@/types'
import { z } from 'zod'
import { register, registerInputSchema } from '../api/register'
import { Link } from 'react-router-dom'

type RegisterFormProps = {
	onSuccess?: () => void
	onError?: () => void
}

export const RegisterForm = ({ onSuccess, onError }: RegisterFormProps) => {
	const onSubmit = async (values: RegisterDTO) => {
		try {
			await register(values)
			console.log('Successfully registered ✅✅✅✅')
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
				schema={registerInputSchema}
				onSubmit={onSubmit}
			>
				{({ register, formState }) => (
					<>
						<h1 className="text-2xl font-bold mb-4 text-center">Registration</h1>
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
						<Input
							label="First name"
							placeholder="John"
							className="mb-3"
							error={formState.errors.firstName}
							registration={register('firstName')}
						/>
						<Input
							label="Last name"
							placeholder="Doe"
							className="mb-6"
							error={formState.errors.lastName}
							registration={register('lastName')}
						/>
						<Button type="submit" className="w-full">
							Submit
						</Button>

						<div className="text-center text-sm mt-4">
							Already have an account?{' '}
							<Link to="/auth/login" className="font-medium text-emerald-500">
								Login
							</Link>
						</div>
					</>
				)}
			</Form>
		</div>
	)
}
