import { ReactNode } from 'react'
import { FieldError } from 'react-hook-form'
import { cn } from '../../utils/tailwind-merge'

type FieldWrapperProps = {
	children: ReactNode
	label?: string
	error?: FieldError | undefined
	className?: string
}

export type FieldWrapperPassThroughProps = Pick<FieldWrapperProps, 'label' | 'error'>

export const FieldWrapper = (props: FieldWrapperProps) => {
	const { children, label, error, className } = props

	return (
		<label className={cn('block', className)}>
			{label}
			<div className="mt-1">{children}</div>
			{error && <div className="text-sm text-red-500">{error?.message}</div>}
		</label>
	)
}
