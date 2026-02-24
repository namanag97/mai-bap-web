import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { Container, MetaLabel, SectionLabel } from '@/components/ui'

export default function Integrations() {
  const { integrations } = siteConfig

  return (
    <section className="section">
      <Container className="py-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <SectionLabel index="03" label="Integrations" className="mb-6" />
            <h2 className="section-title whitespace-pre-line max-w-sm">
              {integrations.title}
            </h2>
          </div>
          <p className="text-sm text-ink-secondary leading-relaxed max-w-xs md:text-right">
            {integrations.subtitle}
          </p>
        </div>

        {/* Integration grid */}
        <div className="card-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px mb-8">
          {integrations.featuredNames.map(name => (
            <div key={name} className="card-grid-cell px-5 py-4">
              <span className="text-sm font-medium text-ink-primary">{name}</span>
            </div>
          ))}
          {/* "and more" cell */}
          <div className="card-grid-cell px-5 py-4 flex items-center gap-1.5">
            <span className="text-sm text-ink-muted">+30 more</span>
          </div>
        </div>

        {/* Footer link */}
        <div className="flex items-center justify-end">
          <Link
            href={integrations.ctaHref}
            className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-ink-muted hover:text-ink-primary transition-colors duration-200 group"
          >
            {integrations.ctaLabel}
            <ArrowRight
              size={11}
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </Link>
        </div>

      </Container>
    </section>
  )
}
