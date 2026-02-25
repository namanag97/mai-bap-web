'use client'

import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { Container, MetaLabel, ButtonLink } from '@/components/ui'
import { siteConfig } from '@/config/site'

export default function CTA() {
  const { sectionLabel, title, titleAccent, subtitle, primaryCta, secondaryCta, trialNote } = siteConfig.cta

  return (
    <section className="section-deep">
      <Container>
        {/* Section label */}
        <FadeIn>
          <div className="flex items-center gap-xs mb-lg">
            <MetaLabel as="div" color="dim">{sectionLabel}</MetaLabel>
            <div className="flex-1 divider" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_auto] gap-xl items-end">
          {/* Left: headline */}
          <FadeIn delay={100}>
            <div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-display text-ink-primary leading-display mb-6">
                {title.map((line, i) => (
                  <span key={i}>{line}{i < title.length - 1 && <br />}</span>
                ))}
                <br />
                <span className="text-ink-accent">{titleAccent}</span>
              </h2>
              <p className="text-ink-muted text-base font-light leading-relaxed max-w-md">
                {subtitle}
              </p>
            </div>
          </FadeIn>

          {/* Right: actions */}
          <FadeIn delay={200} direction="left">
            <div className="flex flex-col gap-xs">
              <ButtonLink href={primaryCta.href} variant="primary" size="lg" className="whitespace-nowrap">
                {primaryCta.label}
                <ArrowRight size={13} />
              </ButtonLink>
              <ButtonLink href={secondaryCta.href} variant="secondary" size="lg">
                {secondaryCta.label}
              </ButtonLink>
              <MetaLabel as="p" color="dim" className="text-center mt-1">
                {trialNote}
              </MetaLabel>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
