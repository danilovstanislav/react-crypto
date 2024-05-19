import { UseFormRegisterReturn } from 'react-hook-form'
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper'
import { cn } from '../../utils/tailwind-merge'

const sizes = {
	sm: 'py-2 px-2 text-sm',
	md: 'py-2 px-4 text-md',
	lg: 'py-3 px-6 text-lg',
}

type InputProps = FieldWrapperPassThroughProps & {
	type?: 'text' | 'email' | 'password'
	placeholder?: string
	size?: 'sm' | 'md' | 'lg'
	className?: string
	registration: Partial<UseFormRegisterReturn>
}

export const Input = ({
	type = 'text',
	label,
	error,
	placeholder,
	size = 'md',
	className,
	registration,
}: InputProps) => {
	return (
		<FieldWrapper label={label} error={error} className={className}>
			<input
				type={type}
				placeholder={placeholder}
				className={cn('w-full appearance-none border-2 border-gray-300 rounded-md', sizes[size])}
				{...registration}
			/>
		</FieldWrapper>
	)
}
