import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const formControlBase =
  'w-full bg-braun-50 border border-braun-200 px-4 py-3 text-sm text-braun-900 placeholder:text-braun-400 focus:border-braun-900 focus:ring-0 focus:outline-none font-sans'

export const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(formControlBase, className)}
    {...props}
  />
))
Input.displayName = 'Input'

export const Select = forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, style, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(formControlBase, 'appearance-none', className)}
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 1rem center',
      ...style,
    }}
    {...props}
  />
))
Select.displayName = 'Select'

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(formControlBase, 'resize-none', className)}
    {...props}
  />
))
Textarea.displayName = 'Textarea'
