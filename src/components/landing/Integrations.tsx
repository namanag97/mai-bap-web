import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { Container, SectionLabel, SectionTitle } from '@/components/ui'

export default function Integrations() {
  const { integrations } = siteConfig

  return (
    <section className="section">
      <Container className="py-20">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-14 pb-10 border-b border-border-default">
          <div>
            <SectionLabel label={integrations.sectionLabel} className="mb-5" />
            <SectionTitle>
              {integrations.title.split('\n')[0]}<br />{integrations.title.split('\n')[1]}
            </SectionTitle>
          </div>
          <div className="flex items-end">
            <p className="text-sm text-ink-secondary leading-relaxed">
              {integrations.subtitle}
            </p>
          </div>
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
