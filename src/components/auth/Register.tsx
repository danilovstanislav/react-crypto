import { z } from 'zod'
import { Input, Form } from '../form'
import { register } from '../../lib/auth'
import { RegisterDTO } from '../../types'

type RegisterFormProps = {
	onSuccess?: () => void
	onError?: () => void
}

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
	firstName: z.string().min(1),
	lastName: z.string().min(1),
})

export const Register = ({ onSuccess, onError }: RegisterFormProps) => {
	const onSubmit = async (values: RegisterDTO) => {
		try {
			await register(values)
			console.log('User registered')
			onSuccess && onSuccess()
		} catch (error) {
			console.error(error)
			onError && onError()
		}
	}

	return (
		<div className="w-100 h-screen">
			<Form<RegisterDTO, typeof schema> schema={schema} onSubmit={onSubmit}>
				{({ register, formState }) => (
					<>
						<Input
							placeholder="Email"
							type="email"
							className="mb-2"
							error={formState.errors.email}
							registration={register('email')}
						/>
						<Input
							placeholder="Password"
							type="password"
							className="mb-2"
							error={formState.errors.password}
							registration={register('password')}
						/>
						<Input
							placeholder="First name"
							className="mb-2"
							error={formState.errors.firstName}
							registration={register('firstName')}
						/>
						<Input
							placeholder="Last name"
							className="mb-2"
							error={formState.errors.lastName}
							registration={register('lastName')}
						/>
						<button type="submit">Submit</button>
					</>
				)}
			</Form>
		</div>
	)
}
