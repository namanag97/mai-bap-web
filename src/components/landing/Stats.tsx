'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { Container, MetaLabel } from '@/components/ui'
import { siteConfig } from '@/config/site'

export default function Stats() {
  const stats = siteConfig.stats

  return (
    <section className="section-inverse">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border-default">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 100} direction="up">
              <div
                className={`py-14 ${i === 0 ? 'pr-8' : 'px-8'} ${i === stats.length - 1 ? 'lg:pl-8 lg:pr-0' : ''}`}
              >
                <div className="text-4xl lg:text-5xl font-mono font-light text-ink-inverse tabular-nums mb-2">
                  {s.value}
                </div>
                <MetaLabel as="div" color="dim" className="mb-1">
                  {s.label}
                </MetaLabel>
                <div className="text-[10px] font-mono text-ink-muted">{s.sub}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
