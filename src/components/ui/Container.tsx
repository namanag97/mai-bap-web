import { cn } from '@/lib/utils'

type MaxWidth = '7xl' | '3xl'

const maxWidthCls: Record<MaxWidth, string> = {
  '7xl': 'max-w-7xl',
  '3xl': 'max-w-3xl',
}

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'article'
  maxWidth?: MaxWidth
}

export function Container({
  children,
  className,
  as: Tag = 'div',
  maxWidth = '7xl',
}: ContainerProps) {
  return (
    <Tag className={cn('mx-auto px-6', maxWidthCls[maxWidth], className)}>
      {children}
    </Tag>
  )
}
