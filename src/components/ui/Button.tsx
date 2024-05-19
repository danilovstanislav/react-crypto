import { ButtonHTMLAttributes } from 'react'
import { Spinner } from './Spinner'
import { cn } from '../../utils/tailwind-merge'

const sizes = {
	sm: 'py-2 px-2 text-sm',
	md: 'py-2 px-4 text-md',
	lg: 'py-3 px-6 text-lg',
}

const variants = {
	primary: 'bg-emerald-500 text-white rounded-md',
	danger: 'bg-red-500 text-white rounded-md',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	size?: keyof typeof sizes
	variant?: keyof typeof variants
	className?: string
	isLoading?: boolean
}

export const Button = ({
	children,
	size = 'md',
	variant = 'primary',
	className,
	isLoading,
}: ButtonProps) => {
	return (
		<button className={cn(className, sizes[size], variants[variant])}>
			{isLoading && <Spinner size={size} />}
			{children}
		</button>
	)
}
