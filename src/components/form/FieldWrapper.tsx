import { ReactNode } from 'react'
import { FieldError } from 'react-hook-form'

type TFieldWrapperProps = {
	children: ReactNode
	label?: string
	error?: FieldError | undefined
	className?: string
}

export type FieldWrapperPassThroughProps = Pick<TFieldWrapperProps, 'label' | 'error'>

export const FieldWrapper = (props: TFieldWrapperProps) => {
	const { children, label, error, className } = props

	return (
		<label className={`block ${className}`}>
			{label}
			<div className="mt-1">{children}</div>
			{error && <div className="text-sm">{error?.message}</div>}
		</label>
	)
}
