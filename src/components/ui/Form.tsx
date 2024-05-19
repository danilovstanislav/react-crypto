import { cn } from '@/utils/tailwind-merge'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import {
	FieldValues,
	FormProvider,
	SubmitHandler,
	UseFormProps,
	UseFormReturn,
	useForm,
} from 'react-hook-form'
import { ZodType, z } from 'zod'

type FormProps<TFormValues extends FieldValues, Schema> = {
	onSubmit: SubmitHandler<TFormValues>
	schema: Schema
	className?: string
	children: (methods: UseFormReturn<TFormValues>) => ReactNode
	options?: UseFormProps<TFormValues>
	id?: string
}

export const Form = <
	Schema extends ZodType<any, any, any>,
	TFormValues extends FieldValues = z.infer<Schema>,
>({
	onSubmit,
	children,
	className,
	options,
	id,
	schema,
}: FormProps<TFormValues, Schema>) => {
	const form = useForm({ ...options, resolver: zodResolver(schema) })
	return (
		<FormProvider {...form}>
			<form className={cn('space-y-6', className)} onSubmit={form.handleSubmit(onSubmit)} id={id}>
				{children(form)}
			</form>
		</FormProvider>
	)
}
