'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { siteConfig } from '@/config/site'

export default function CTA() {
  const { sectionLabel, title, titleAccent, subtitle, primaryCta, secondaryCta, trialNote } = siteConfig.cta

  return (
    <section className="border-b border-braun-200 bg-braun-900">
      <div className="max-w-7xl mx-auto px-6 py-32">
        {/* Section label */}
        <FadeIn>
          <div className="text-[10px] font-mono uppercase tracking-widest text-braun-500 mb-10">
            {sectionLabel}
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end">
          {/* Left: headline */}
          <FadeIn delay={100}>
            <div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[0.95] mb-6">
                {title.map((line, i) => (
                  <span key={i}>{line}{i < title.length - 1 && <br />}</span>
                ))}
                <br />
                <span className="text-braun-orange">{titleAccent}</span>
              </h2>
              <p className="text-braun-500 text-base font-light leading-relaxed max-w-md">
                {subtitle}
              </p>
            </div>
          </FadeIn>

          {/* Right: actions */}
          <FadeIn delay={200} direction="left">
            <div className="flex flex-col gap-3">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white text-braun-900 border border-white hover:bg-braun-100 transition-colors text-[11px] font-mono font-bold uppercase tracking-widest whitespace-nowrap"
              >
                {primaryCta.label}
                <ArrowRight size={13} />
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-braun-500 border border-braun-800 hover:border-braun-600 hover:text-braun-300 transition-colors text-[11px] font-mono font-bold uppercase tracking-widest"
              >
                {secondaryCta.label}
              </Link>
              <p className="text-[10px] font-mono text-braun-500 uppercase tracking-widest text-center mt-1">
                {trialNote}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
