import { cn } from '@/lib/utils'

interface SectionTitleProps {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

export function SectionTitle({
  children,
  as: Tag = 'h2',
  className,
}: SectionTitleProps) {
  return (
    <Tag className={cn('section-title', className)}>
      {children}
    </Tag>
  )
}
