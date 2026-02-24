'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel, SectionTitle, Container } from '@/components/ui'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { sectionIndex, sectionLabel, title, subtitle, items } = siteConfig.faq
  const [titleLine1, titleLine2] = title.split('\n')

  return (
    <section className="border-b border-border-default bg-surface-raised">
      <Container className="py-24">

        <FadeIn>
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            {/* Left: header */}
            <div>
              <SectionLabel index={sectionIndex} label={sectionLabel} className="mb-5" />
              <SectionTitle>
                {titleLine1}<br />{titleLine2}
              </SectionTitle>
              <p className="text-sm text-ink-muted leading-relaxed mt-4 max-w-sm">
                {subtitle}
              </p>
            </div>

            {/* Right: accordion */}
            <div className="divide-y divide-border-default border-t border-b border-border-default">
              {items.map((faq, i) => (
                <FadeIn key={i} delay={i * 60}>
                  <div>
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                      aria-expanded={openIndex === i}
                      aria-controls={`faq-answer-${i}`}
                      id={`faq-question-${i}`}
                    >
                      <span className="text-sm font-medium text-ink-primary group-hover:text-ink-accent transition-colors duration-200">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={14}
                        className={cn(
                          'shrink-0 mt-1 text-ink-muted transition-all duration-500 ease-out',
                          openIndex === i && 'rotate-180 text-ink-accent'
                        )}
                      />
                    </button>
                    <div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        openIndex === i ? 'max-h-[500px] pb-5' : 'max-h-0'
                      )}
                    >
                      <p className="text-xs text-braun-500 leading-relaxed pr-8">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
