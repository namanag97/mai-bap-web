'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel, SectionTitle, Container, MetaLabel, ButtonLink, ToggleGroup } from '@/components/ui'
import { siteConfig } from '@/config/site'

const billingOptions = ['Monthly', 'Annual'] as const

export default function Pricing() {
  const { sectionLabel, title, footnote, tiers } = siteConfig.pricing
  const [billing, setBilling] = useState<'Monthly' | 'Annual'>('Monthly')
  const annual = billing === 'Annual'

  return (
    <section id="pricing" className="section">
      <Container className="py-24">

        {/* Header */}
        <FadeIn>
          <div className="mb-12 pb-8 border-b border-border-default">
            <SectionLabel label={sectionLabel} className="mb-5" />
            <SectionTitle>
              {title}
            </SectionTitle>
          </div>
        </FadeIn>

        {/* Billing toggle */}
        <FadeIn>
          <div className="flex items-center justify-center gap-1 mb-10">
            <ToggleGroup
              options={billingOptions}
              value={billing}
              onChange={setBilling}
              size="md"
            />
            {annual && (
              <MetaLabel size="xxs" className="ml-2 text-ink-accent">
                Save 20%
              </MetaLabel>
            )}
          </div>
        </FadeIn>

        {/* Tier grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier, i) => {
            const price = annual ? tier.annualPrice : tier.monthlyPrice
            const period = annual ? tier.annualPeriod : tier.period

            return (
              <FadeIn key={tier.name} delay={i * 120} direction="up">
                <div
                  className={`flex flex-col p-8 h-full hover-lift ${tier.featured ? 'card-featured' : 'card'}`}
                >
                  {tier.featured && (
                    <MetaLabel as="div" size="xxs" className="border border-border-default px-2 py-0.5 self-start mb-5">
                      Most popular
                    </MetaLabel>
                  )}

                  {/* Name */}
                  <MetaLabel as="div" color="dim" className="mb-2">
                    {tier.name}
                  </MetaLabel>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-mono font-light tabular-nums text-ink-primary">
                      {price}
                    </span>
                    {period && (
                      <span className="text-xs font-mono text-ink-muted">
                        {period}
                      </span>
                    )}
                  </div>

                  <p className="text-xs leading-relaxed mb-7 text-ink-muted">
                    {tier.description}
                  </p>

                  <ButtonLink
                    href={tier.cta.href}
                    variant="primary"
                    size="md"
                    className="mb-8 text-center block"
                  >
                    {tier.cta.label}
                  </ButtonLink>

                  {/* Features */}
                  <ul className="flex flex-col gap-2.5 mt-auto">
                    {tier.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check
                          size={12}
                          className="mt-0.5 shrink-0 text-ink-primary"
                        />
                        <span className="text-xs leading-relaxed text-ink-secondary">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            )
          })}
        </div>

        <MetaLabel as="p" color="dim" className="mt-6 text-center">
          {footnote}
        </MetaLabel>
      </Container>
    </section>
  )
}
