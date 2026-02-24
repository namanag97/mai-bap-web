'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel, SectionTitle, Container, MetaLabel } from '@/components/ui'
import { siteConfig } from '@/config/site'

export default function Testimonials() {
  const { sectionLabel, title, logoStripLabel, logos, items } = siteConfig.testimonials
  const [titleLine1, titleLine2] = title.split('\n')

  return (
    <section className="section">
      <Container className="py-24">

        {/* Logo strip */}
        <FadeIn>
          <div className="mb-16 pb-10 border-b border-border-default">
            <div className="flex items-center gap-3 mb-8">
              <MetaLabel as="div" color="dim">{logoStripLabel}</MetaLabel>
              <div className="flex-1 divider" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {logos.map(name => (
                <span
                  key={name}
                  className="text-sm font-mono font-bold uppercase tracking-widest text-ink-muted hover:text-ink-secondary transition-colors duration-300"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Section header */}
        <FadeIn>
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <SectionLabel label={sectionLabel} />
              <div className="flex-1 divider" />
            </div>
            <SectionTitle>
              {titleLine1}<br />{titleLine2}
            </SectionTitle>
          </div>
        </FadeIn>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <FadeIn key={t.name} delay={i * 120} direction="up">
              <div className="card p-8 flex flex-col h-full hover-lift">
                <blockquote className="text-sm text-ink-secondary leading-relaxed flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="pt-5 border-t border-border-subtle">
                  <div className="text-xs font-semibold text-ink-primary">{t.name}</div>
                  <MetaLabel as="div" color="dim" className="mt-0.5">
                    {t.role} · {t.company}
                  </MetaLabel>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
