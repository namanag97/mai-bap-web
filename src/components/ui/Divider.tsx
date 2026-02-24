import { cn } from '@/lib/utils'
import { MetaLabel } from './MetaLabel'

interface DividerProps {
  className?: string
  label?: string
}

export function Divider({ className, label }: DividerProps) {
  if (label) {
    return (
      <div className={cn('flex items-center gap-4', className)}>
        <div className="flex-1 h-px bg-braun-200" />
        <MetaLabel size="xxs">{label}</MetaLabel>
        <div className="flex-1 h-px bg-braun-200" />
      </div>
    )
  }

  return <div className={cn('h-px bg-braun-200', className)} />
}
