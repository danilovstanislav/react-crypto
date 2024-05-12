import { RegisterDTO } from '../types'

export function register(data: RegisterDTO): Promise<boolean> {
	const { email, password, firstName, lastName } = data

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (email === 'existingUser') {
				reject(new Error('Username already taken'))
			} else {
				resolve(true)
			}
		}, 1000)
	})
}
