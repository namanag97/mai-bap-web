'use client'

import { Activity, CheckCircle, GitBranch, LayoutDashboard, Users, Lock } from 'lucide-react'
import { SectionLabel, SectionTitle, Container, IconBox } from '@/components/ui'
import { FadeIn } from '@/components/ui/FadeIn'
import { siteConfig } from '@/config/site'

const featureIcons = [Activity, CheckCircle, GitBranch, LayoutDashboard, Users, Lock]

export default function Features() {
  const { sectionLabel, title, subtitle, items } = siteConfig.features
  const [titleLine1, titleLine2] = title.split('\n')

  return (
    <section id="features" className="section">
      <Container className="py-24">

        {/* Section header */}
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-8 mb-16 pb-10 border-b border-border-default">
            <div>
              <SectionLabel index={sectionIndex} label={sectionLabel} className="mb-5" />
              <SectionTitle>
                {titleLine1}<br />{titleLine2}
              </SectionTitle>
            </div>
            <div className="flex items-end">
              <p className="text-sm text-ink-muted leading-relaxed max-w-sm lg:ml-auto">
                {subtitle}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Feature grid */}
        <div className="card-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
          {items.map((feature, i) => {
            const Icon = featureIcons[i] ?? Activity
            return (
              <FadeIn key={feature.title} delay={i * 80} direction="up">
                <div className="card-grid-cell p-8 group cursor-default h-full hover-lift">
                  <IconBox icon={Icon} className="mb-6" />
                  <h3 className="text-sm font-semibold text-ink-primary mb-2 tracking-tight">{feature.title}</h3>
                  <p className="text-xs text-ink-muted leading-relaxed">{feature.description}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
