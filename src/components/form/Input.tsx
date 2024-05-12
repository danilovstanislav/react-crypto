import { UseFormRegisterReturn } from 'react-hook-form'
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper'

const sizes = {
	sm: 'py-2 px-4 text-sm',
	md: 'py-2 px-6 text-md',
	lg: 'py-3 px-8 text-lg',
}

type TInput = FieldWrapperPassThroughProps & {
	type?: 'text' | 'email' | 'password'
	placeholder?: string
	size?: 'sm' | 'md' | 'lg'
	className?: string
	registration: Partial<UseFormRegisterReturn>
}

export const Input = (props: TInput) => {
	const { type = 'text', label, error, placeholder, size = 'md', className, registration } = props

	return (
		<FieldWrapper label={label} error={error} className={className}>
			<input
				type={type}
				placeholder={placeholder}
				className={`appearance-none ${sizes[size]}`}
				{...registration}
			/>
		</FieldWrapper>
	)
}
