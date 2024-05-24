import { UseFormRegisterReturn } from 'react-hook-form'
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper'
import { cn } from '@/utils/tailwind-merge'
import { InputHTMLAttributes } from 'react'

const sizes = {
	sm: 'py-2 px-2 text-sm',
	md: 'py-2 px-4 text-md',
	lg: 'py-3 px-6 text-lg',
}

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
	FieldWrapperPassThroughProps & {
		placeholder?: string
		size?: keyof typeof sizes
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
				className={cn(
					'w-full appearance-none border-2 border-gray-300 rounded-md outline-emerald-400',
					sizes[size],
					error && 'border-red-500',
				)}
				{...registration}
			/>
		</FieldWrapper>
	)
}
