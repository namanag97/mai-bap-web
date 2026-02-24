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
        <div className="flex-1 divider" />
        <MetaLabel size="xxs">{label}</MetaLabel>
        <div className="flex-1 divider" />
      </div>
    )
  }

  return <div className={cn('divider', className)} />
}
