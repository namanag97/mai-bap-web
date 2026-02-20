'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui'

const logos = [
  'TechCorp',
  'Axiom',
  'Veritas',
  'Arcline',
  'Novus',
  'Stratos',
]

const testimonials = [
  {
    quote:
      'We went from quarterly conformance audits to real-time monitoring in a week. The impact on our SLA compliance was immediate.',
    name: 'Sarah Chen',
    role: 'VP Operations',
    company: 'TechCorp',
  },
  {
    quote:
      'The automation studio alone saved us 120 analyst-hours per month. We finally stopped doing the same triage manually every day.',
    name: 'Marcus Webb',
    role: 'Head of Process Excellence',
    company: 'Axiom Financial',
  },
  {
    quote:
      'Clean, fast, no consulting required. We had our first process map live within 30 minutes of connecting our ERP.',
    name: 'Elena Kovacs',
    role: 'COO',
    company: 'Veritas Health',
  },
]

export default function Testimonials() {
  return (
    <section className="border-b border-braun-200 bg-braun-50">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Logo strip */}
        <FadeIn>
          <div className="mb-16 pb-10 border-b border-braun-200">
            <div className="text-[10px] font-mono uppercase tracking-widest text-braun-400 mb-8 text-center">
              Trusted by operations teams at
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {logos.map(name => (
                <span
                  key={name}
                  className="text-sm font-mono font-bold uppercase tracking-widest text-braun-400 hover:text-braun-600 transition-colors duration-300"
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
            <SectionLabel index="03" label="Testimonials" className="mb-5" />
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-braun-900">
              Hear from teams<br />who switched.
            </h2>
          </div>
        </FadeIn>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-braun-200">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 120} direction="up">
              <div className="bg-white p-8 flex flex-col h-full">
                <blockquote className="text-sm text-braun-600 leading-relaxed flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="pt-5 border-t border-braun-100">
                  <div className="text-xs font-semibold text-braun-900">{t.name}</div>
                  <div className="text-[10px] font-mono text-braun-400 uppercase tracking-widest mt-0.5">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
