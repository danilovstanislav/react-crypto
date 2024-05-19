export type RegisterDTO = {
	email: string
	password: string
	firstName: string
	lastName: string
}

export type User = {
	id: string
	email: string
	firstName: string
	lastName: string
	role: 'USER' | 'ADMIN'
}

export type UserResponse = {
	jwt: string
	user: User
}
