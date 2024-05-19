import { z } from 'zod'
import { UserResponse } from '@/types'

export const loginInputSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginInput = z.infer<typeof loginInputSchema>

export function login(data: LoginInput): Promise<UserResponse> {
	const { email, password } = data

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (email === 'test@gmail.com' && password === '123123') {
				resolve({
					jwt: 'token123',
					user: {
						id: '123',
						email,
						firstName: 'Test',
						lastName: 'User',
						role: 'USER',
					},
				})
			} else {
				reject(new Error('User not found'))
			}
		}, 1000)
	})
}
