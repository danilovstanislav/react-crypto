import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import { SubmitHandler, UseFormReturn, useForm } from 'react-hook-form'
import { ZodType, ZodTypeDef } from 'zod'

type FormProps<FormValues extends Record<string, unknown>, Schema> = {
	className?: string
	children: (methods: UseFormReturn<FormValues>) => ReactNode
	onSubmit: SubmitHandler<FormValues>
	schema: Schema
}

export const Form = <
	FormValues extends Record<string, unknown> = Record<string, unknown>,
	Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>,
>({
	className,
	children,
	onSubmit,
	schema,
}: FormProps<FormValues, Schema>) => {
	const methods = useForm<FormValues>({
		resolver: schema && zodResolver(schema),
	})

	return (
		<form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
			{children(methods)}
		</form>
	)
}
