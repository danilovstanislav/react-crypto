import { UserResponse } from '@/types'
import { z } from 'zod'

export const registerInputSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 characters'),
	firstName: z.string().min(1, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
})

export type RegisterInput = z.infer<typeof registerInputSchema>

export function register(data: RegisterInput): Promise<UserResponse> {
	const { email, password, firstName, lastName } = data

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (email === 'existingUser') {
				reject(new Error('Username already taken'))
			} else {
				resolve({
					jwt: 'token123',
					user: {
						id: '123',
						email,
						firstName,
						lastName,
						role: 'USER',
					},
				})
			}
		}, 1000)
	})
}
