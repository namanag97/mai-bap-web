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
    <Tag
      className={cn(
        'text-3xl lg:text-4xl font-light tracking-tight text-ink-primary leading-tight',
        className
      )}
    >
      {children}
    </Tag>
  )
}
