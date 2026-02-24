import { cn } from '@/lib/utils'

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  className?: string
}

export function FormLabel({ children, className, ...props }: FormLabelProps) {
  return (
    <label
      className={cn(
        'text-xs font-medium text-ink-primary uppercase tracking-wide mb-1.5 block',
        className
      )}
      {...props}
    >
      {children}
    </label>
  )
}
