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
      <Container className="py-2xl">

        {/* Section header */}
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-lg mb-xl pb-lg border-b border-border-default">
            <div>
              <div className="flex items-center gap-xs mb-md">
                <SectionLabel label={sectionLabel} />
                <div className="flex-1 divider" />
              </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
          {items.map((feature, i) => {
            const Icon = featureIcons[i] ?? Activity
            return (
              <FadeIn key={feature.title} delay={i * 80} direction="up">
                <div className="card group cursor-default h-full hover-lift">
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
