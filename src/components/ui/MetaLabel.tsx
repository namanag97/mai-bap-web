import { cn } from '@/lib/utils'

type Size = 'xs' | 'xxs'
type Color = 'muted' | 'dim'

const sizeCls: Record<Size, string> = {
  xs:  'text-[10px]',
  xxs: 'text-[9px]',
}

const colorCls: Record<Color, string> = {
  muted: 'text-ink-muted',
  dim:   'text-ink-dim',
}

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
        'font-mono uppercase tracking-widest',
        sizeCls[size],
        colorCls[color],
        className
      )}
    >
      {children}
    </Tag>
  )
}
