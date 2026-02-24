import { Container } from './Container'
import { MetaLabel } from './MetaLabel'
import { SectionTitle } from './SectionTitle'
import { cn } from '@/lib/utils'

interface PageHeaderProps {
  label: string
  title: string | React.ReactNode
  subtitle?: string
  children?: React.ReactNode
  maxWidth?: '7xl' | '3xl'
  className?: string
}

export function PageHeader({
  label,
  title,
  subtitle,
  children,
  maxWidth = '7xl',
  className,
}: PageHeaderProps) {
  return (
    <div className={cn('section', className)}>
      <Container maxWidth={maxWidth} className="py-16">
        <div className="flex items-center gap-3 mb-4">
          <MetaLabel as="div" color="dim">{label}</MetaLabel>
          <div className="flex-1 divider" />
        </div>
        <SectionTitle as="h1" className="mb-3">
          {title}
        </SectionTitle>
        {subtitle && (
          <p className="text-sm text-ink-muted max-w-sm leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </Container>
    </div>
  )
}
