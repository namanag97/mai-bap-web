'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel, SectionTitle, Container, MetaLabel, ButtonLink, ToggleGroup } from '@/components/ui'
import { siteConfig } from '@/config/site'

const billingOptions = ['Monthly', 'Annual'] as const

export default function Pricing() {
  const { sectionIndex, sectionLabel, title, footnote, tiers } = siteConfig.pricing
  const [billing, setBilling] = useState<'Monthly' | 'Annual'>('Monthly')
  const annual = billing === 'Annual'

  return (
    <section id="pricing" className="border-b border-border-default bg-surface-ground">
      <Container className="py-24">

        {/* Header */}
        <FadeIn>
          <div className="mb-12 pb-8 border-b border-border-default">
            <SectionLabel index={sectionIndex} label={sectionLabel} className="mb-5" />
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
        <div className="grid grid-cols-1 md:grid-cols-3 border border-border-default divide-y md:divide-y-0 md:divide-x divide-border-default">
          {tiers.map((tier, i) => {
            const price = annual ? tier.annualPrice : tier.monthlyPrice
            const period = annual ? tier.annualPeriod : tier.period

            return (
              <FadeIn key={tier.name} delay={i * 120} direction="up">
                <div
                  className={`flex flex-col p-8 h-full hover-lift ${tier.featured ? 'bg-braun-900' : 'bg-surface-raised'}`}
                >
                  {tier.featured && (
                    <MetaLabel as="div" size="xxs" className="text-braun-orange border border-braun-orange/40 px-2 py-0.5 self-start mb-5">
                      Most popular
                    </MetaLabel>
                  )}

                  {/* Name */}
                  <MetaLabel as="div" className={`mb-2 ${tier.featured ? 'text-braun-500' : 'text-braun-400'}`}>
                    {tier.name}
                  </MetaLabel>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`text-4xl font-mono font-light tabular-nums ${tier.featured ? 'text-white' : 'text-braun-900'}`}>
                      {price}
                    </span>
                    {period && (
                      <span className={`text-xs font-mono ${tier.featured ? 'text-braun-500' : 'text-braun-400'}`}>
                        {period}
                      </span>
                    )}
                  </div>

                  <p className={`text-xs leading-relaxed mb-7 ${tier.featured ? 'text-braun-400' : 'text-braun-500'}`}>
                    {tier.description}
                  </p>

                  <ButtonLink
                    href={tier.cta.href}
                    variant={tier.featured ? 'dark' : 'primary'}
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
                          className={`mt-0.5 shrink-0 ${tier.featured ? 'text-braun-orange' : 'text-braun-900'}`}
                        />
                        <span className={`text-xs leading-relaxed ${tier.featured ? 'text-braun-400' : 'text-braun-600'}`}>
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
