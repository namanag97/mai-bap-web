import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { Container, MetaLabel, SectionLabel } from '@/components/ui'

export const metadata = {
  title: `Integrations — ${siteConfig.name}`,
  description: siteConfig.integrations.allPageSubtitle,
}

export default function IntegrationsPage() {
  const { integrations } = siteConfig

  return (
    <div className="min-h-screen pt-14 bg-surface-ground">

      {/* ── Page header ────────────────────────────────────────── */}
      <div className="border-b border-border-default">
        <Container className="pt-16 pb-14">
          <SectionLabel label={integrations.sectionLabel} className="mb-5" />
          <h1 className="article-title mb-5 whitespace-pre-line">
            {integrations.allPageTitle}
          </h1>
          <p className="article-deck max-w-lg">{integrations.allPageSubtitle}</p>
        </Container>
      </div>

      {/* ── Integration categories ──────────────────────────────── */}
      <Container className="py-16">
        <div className="flex flex-col gap-16">
          {integrations.categories.map(cat => (
            <div key={cat.name}>

              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <MetaLabel as="div" color="dim">{cat.name}</MetaLabel>
                <div className="flex-1 divider" />
              </div>

              {/* Integration cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map(item => (
                  <div key={item.name} className="card p-6 hover-lift">
                    <div className="text-sm font-semibold text-ink-primary mb-2">
                      {item.name}
                    </div>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* ── Bottom CTA ─────────────────────────────────────────── */}
        <div className="mt-16 pt-12 border-t border-border-default">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
            <div>
              <MetaLabel as="div" color="dim" className="mb-2">Need something custom?</MetaLabel>
              <p className="text-sm text-ink-secondary max-w-md leading-relaxed">
                Don't see your tool? Connect anything using our REST API or webhooks.
                Zapier support means 5,000+ apps are one click away.
              </p>
            </div>
            <Link
              href="/docs/api/rest"
              className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-ink-muted hover:text-ink-primary transition-colors duration-200 shrink-0 group"
            >
              View API docs
              <ArrowRight
                size={11}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </Link>
          </div>
        </div>

      </Container>
    </div>
  )
}
