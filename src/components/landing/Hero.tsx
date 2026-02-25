'use client'

import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react'
import { ButtonLink, SectionLabel, Container, MetaLabel } from '@/components/ui'
import { FadeIn } from '@/components/ui/FadeIn'
import { siteConfig } from '@/config/site'

const trustIcons = [ShieldCheck, Zap, Globe]

const aiActions = [
  { id: 'WF-0041', activity: 'Weekly ops report — sent to team',   type: 'done',    time: '1m ago' },
  { id: 'WF-0040', activity: 'Onboarding checklist — auto-assigned', type: 'done',  time: '4m ago' },
  { id: 'WF-0039', activity: 'Invoice approval — escalated to CFO', type: 'action', time: '7m ago' },
]

function AppMockup() {
  return (
    <div
      className="border border-border-default overflow-hidden bg-surface-raised w-full"
      role="img"
      aria-label="mai-bap dashboard showing automated business workflows"
    >
      {/* Title bar */}
      <div className="h-9 bg-surface-inverse flex items-center px-3 gap-2 shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 bg-surface-inverse" />
          <div className="w-2.5 h-2.5 bg-surface-inverse" />
          <div className="w-2.5 h-2.5 bg-surface-inverse" />
        </div>
        <span className="flex-1 text-center text-[9px] font-mono text-ink-muted uppercase tracking-widest">
          mai-bap — Automation Control
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-data-positive inline-block animate-pulse" />
          <span className="text-[8px] font-mono text-ink-muted uppercase tracking-widest">Live</span>
        </div>
      </div>

      {/* App body */}
      <div className="flex">
        {/* Micro sidebar */}
        <div className="w-8 bg-surface-inverse flex-col items-center py-3 gap-2.5 shrink-0 border-r border-border-strong hidden sm:flex">
          {[true, false, false, false].map((active, i) => (
            <div key={i} className={`w-3 h-3 ${active ? 'bg-ink-accent' : 'bg-surface-inverse'}`} />
          ))}
        </div>

        <div className="flex-1 min-w-0">
          {/* KPI strip */}
          <div className="grid grid-cols-3 border-b border-border-default divide-x divide-border-default">
            {[
              { label: 'Tasks automated', value: '1,247', delta: '+18%',  up: true },
              { label: 'Hours saved',     value: '83h',   delta: '↑ 11h', up: true },
              { label: 'Workflows live',  value: '24',    delta: '+3',     up: true },
            ].map(k => (
              <div key={k.label} className="px-2 sm:px-3 py-2.5">
                <div className="text-[7px] sm:text-[7.5px] font-mono uppercase tracking-widest text-ink-muted mb-1">{k.label}</div>
                <div className="text-[13px] sm:text-[15px] font-mono text-ink-primary leading-none tabular-nums">{k.value}</div>
                <div className={`text-[7px] sm:text-[7.5px] font-mono mt-1 ${k.up ? 'text-data-positive' : 'text-data-negative'}`}>
                  {k.delta}
                </div>
              </div>
            ))}
          </div>

          {/* Automation pipeline */}
          <div className="bg-surface-ground border-b border-border-default px-2 sm:px-3 pt-3 pb-2">
            <div className="text-[7.5px] font-mono uppercase tracking-widest text-ink-muted mb-2">
              Automation Pipeline
            </div>
            <svg viewBox="0 0 350 58" className="w-full" style={{ height: 52 }}>
              {[
                { x: 0,   label: 'Trigger',  count: '1,247', dark: true  },
                { x: 93,  label: 'AI triage', count: '1,247', dark: false },
                { x: 186, label: 'Action',   count: '1,201', dark: false },
                { x: 279, label: 'Done',     count: '1,189', dark: false },
              ].map((n, i) => (
                <g key={i}>
                  <rect x={n.x} y={4} width={70} height={30}
                    fill={n.dark ? 'var(--color-surface-inverse)' : 'var(--color-surface-raised)'}
                    stroke={n.dark ? 'var(--color-surface-inverse)' : 'var(--color-border-default)'}
                    strokeWidth="1" />
                  <text x={n.x + 35} y={15} textAnchor="middle" fontSize="6"
                    fill="var(--color-ink-muted)" fontFamily="monospace">
                    {n.label}
                  </text>
                  <text x={n.x + 35} y={27} textAnchor="middle" fontSize="8"
                    fill={n.dark ? 'var(--color-ink-inverse)' : 'var(--color-ink-primary)'} fontFamily="monospace" fontWeight="600">
                    {n.count}
                  </text>
                </g>
              ))}
              {[70, 163, 256].map((x, i) => (
                <g key={i}>
                  <line x1={x} y1={19} x2={x + 21} y2={19} stroke="var(--color-ink-dim)" strokeWidth="1" />
                  <polygon points={`${x + 21},16 ${x + 25},19 ${x + 21},22`} fill="var(--color-ink-dim)" />
                </g>
              ))}
              <path d="M 133 34 Q 186 52 239 34" fill="none" stroke="var(--color-ink-accent)"
                strokeWidth="0.9" strokeDasharray="2,1.5" />
              <text x="186" y="58" textAnchor="middle" fontSize="5.5"
                fill="var(--color-ink-accent)" fontFamily="monospace">46 escalated to human</text>
            </svg>
          </div>

          {/* AI actions feed */}
          <div>
            <div className="px-2 sm:px-3 py-1.5 bg-surface-ground border-b border-border-subtle">
              <span className="text-[7.5px] font-mono uppercase tracking-widest text-ink-muted">
                AI Actions — Today
              </span>
            </div>
            {aiActions.map((d, i) => (
              <div key={i} className="flex items-center gap-2 px-2 sm:px-3 py-2 border-b border-border-subtle last:border-0">
                <div className={`w-1.5 h-1.5 shrink-0 ${d.type === 'done' ? 'bg-data-positive' : 'bg-data-warning'}`} />
                <span className="text-[7px] sm:text-[8px] font-mono text-ink-muted shrink-0 w-12 sm:w-16">{d.id}</span>
                <span className="text-[8px] sm:text-[8.5px] font-mono text-ink-secondary flex-1 truncate">{d.activity}</span>
                <span className="text-[7px] font-mono text-ink-muted shrink-0 hidden sm:block">{d.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative pt-14 section overflow-hidden">
      {/* Engineering grid — subtle, fades before content */}
      <div className="absolute inset-0 pointer-events-none bg-engineering-grid opacity-50" />

      <Container className="relative">
        <div className="grid lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_520px] gap-xl xl:gap-20 py-2xl lg:py-3xl xl:py-40 items-center">

          {/* Left — typography */}
          <div>
            <FadeIn delay={0}>
              <div className="flex items-center gap-xs mb-lg">
                <SectionLabel label={siteConfig.hero.sectionLabel} />
                <div className="flex-1 divider" />
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-[clamp(3rem,7vw,6rem)] font-light tracking-tight leading-[0.92] text-ink-primary mb-8">
                {siteConfig.hero.title.map((line, i) => (
                  <span key={i}>{line}{i < siteConfig.hero.title.length - 1 && <br />}</span>
                ))}
                <br />
                <span className="text-ink-accent">{siteConfig.hero.titleAccent}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-[1.0625rem] text-ink-secondary font-light leading-[1.7] max-w-[420px] mb-10">
                {siteConfig.hero.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex flex-wrap gap-3 mb-14">
                <ButtonLink href={siteConfig.hero.primaryCta.href} size="lg">
                  {siteConfig.hero.primaryCta.label} <ArrowRight size={13} />
                </ButtonLink>
                <ButtonLink href={siteConfig.hero.secondaryCta.href} variant="secondary" size="lg">
                  {siteConfig.hero.secondaryCta.label}
                </ButtonLink>
              </div>
            </FadeIn>

            {/* Trust signals */}
            <FadeIn delay={400}>
              <div className="flex flex-wrap gap-6 pt-6 border-t border-border-default">
                {siteConfig.hero.trustSignals.map((signal, i) => {
                  const Icon = trustIcons[i] ?? ShieldCheck
                  return (
                    <div key={signal.label} className="flex items-center gap-2">
                      <Icon size={11} className="text-ink-muted" />
                      <MetaLabel>{signal.label}</MetaLabel>
                    </div>
                  )
                })}
              </div>
            </FadeIn>
          </div>

          {/* Right — product mockup */}
          <FadeIn delay={200} direction="left">
            <div>
              <AppMockup />
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Stats strip */}
      <div className="relative border-t border-border-default bg-surface-ground">
        <Container className="card-grid grid grid-cols-2 lg:grid-cols-4 gap-px">
          {siteConfig.hero.statsStrip.map((s) => (
            <div key={s.label} className="card-grid-cell py-5 px-6">
              <div className="text-2xl lg:text-3xl font-mono font-light text-ink-primary tabular-nums">
                {s.value}
              </div>
              <MetaLabel as="div" className="mt-1">
                {s.label}
              </MetaLabel>
            </div>
          ))}
        </Container>
      </div>
    </section>
  )
}
