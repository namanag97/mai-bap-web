import { cn } from '@/lib/utils'

type BadgeVariant =
  | 'neutral'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'violet'
  | 'orange'

const variantCls: Record<BadgeVariant, string> = {
  neutral: 'text-ink-secondary bg-surface-inset border-border-default',
  primary: 'text-ink-inverse bg-surface-inverse border-border-strong',
  success: 'text-data-positive bg-data-positive-bg border-data-positive-border',
  warning: 'text-data-warning bg-data-warning-bg border-data-warning-border',
  error:   'text-data-negative bg-data-negative-bg border-data-negative-border',
  violet:  'text-data-violet bg-data-violet-bg border-data-violet-border',
  orange:  'text-ink-accent bg-data-accent-bg border-data-accent-border',
}

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

export function Badge({ variant = 'neutral', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center border rounded-sm px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest',
        variantCls[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
