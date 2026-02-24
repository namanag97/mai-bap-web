import { cn } from '@/lib/utils'

type Size = 'xs' | 'xxs'
type Color = 'muted' | 'dim'

interface MetaLabelProps {
  children: React.ReactNode
  size?: Size
  color?: Color
  className?: string
  as?: 'span' | 'div' | 'p' | 'time' | 'h3'
}

export function MetaLabel({
  children,
  size = 'xs',
  color = 'muted',
  className,
  as: Tag = 'span',
}: MetaLabelProps) {
  return (
    <Tag
      className={cn(
        'meta-label',
        size === 'xxs' && 'meta-label-xxs',
        color === 'dim' && 'meta-label-dim',
        className
      )}
    >
      {children}
    </Tag>
  )
}
