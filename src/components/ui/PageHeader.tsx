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
    <div className={cn('border-b border-braun-200 bg-white', className)}>
      <Container maxWidth={maxWidth} className="py-16">
        <MetaLabel as="div" color="dim" className="mb-4">
          {label}
        </MetaLabel>
        <SectionTitle as="h1" className="mb-3">
          {title}
        </SectionTitle>
        {subtitle && (
          <p className="text-sm text-braun-500 max-w-sm leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </Container>
    </div>
  )
}
