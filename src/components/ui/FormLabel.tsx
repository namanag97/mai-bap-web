import { cn } from '@/lib/utils'

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  className?: string
}

export function FormLabel({ children, className, ...props }: FormLabelProps) {
  return (
    <label
      className={cn('form-label', className)}
      {...props}
    >
      {children}
    </label>
  )
}
