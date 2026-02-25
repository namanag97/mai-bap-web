'use client'

import { useState } from 'react'
import { Activity, Zap, Shield, GitBranch } from 'lucide-react'
import {
  Button,
  Badge,
  Callout,
  CodeBlock,
  AsciiDiagram,
  SectionLabel,
  SectionTitle,
  Container,
  MetaLabel,
  Divider,
  Input,
  Select,
  Textarea,
  FormLabel,
  IconBox,
  PageHeader,
  ToggleGroup,
  ProcessFlow,
  FadeIn,
} from '@/components/ui'

// ── Helpers ────────────────────────────────────────────────────

function SubHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-phi-xs mb-phi-md mt-phi-lg first:mt-0">
      <MetaLabel as="div" size="xxs" color="dim">{label}</MetaLabel>
      <div className="flex-1 divider" />
    </div>
  )
}

// ── Toggle state ───────────────────────────────────────────────

const TOGGLE_OPTIONS = ['All', 'Active', 'Archived', 'Draft'] as const
type ToggleOption = typeof TOGGLE_OPTIONS[number]

// ── Page ───────────────────────────────────────────────────────

export default function UIKitPage() {
  const [toggleVal, setToggleVal] = useState<ToggleOption>('All')

  return (
    <>
      {/* Hero */}
      <PageHeader
        label="Design System"
        title="Component Library"
        subtitle="Single source of truth for all design tokens, component APIs, and usage patterns. Every specimen renders from real code."
      />

      {/* Jump nav */}
      <div className="section-deep sticky top-[--navbar-height] z-[--z-sticky]">
        <Container>
          <nav className="flex items-center gap-phi-lg py-phi-xs overflow-x-auto">
            {[
              ['colors', 'Colors'],
              ['typography', 'Typography'],
              ['spacing', 'Spacing'],
              ['components', 'Components'],
              ['patterns', 'Patterns'],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="meta-label meta-label-xxs text-ink-muted hover:text-ink-primary transition-colors whitespace-nowrap"
              >
                {label}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {/* ═══════════════════════════════════════════════════════
          01 — Colors & Tokens
          ═══════════════════════════════════════════════════════ */}
      <section id="colors" className="section">
        <Container className="py-phi-2xl">
          <div className="flex items-center gap-phi-xs mb-phi-xl">
            <SectionLabel index="01" label="Colors & Tokens" />
            <div className="flex-1 divider" />
          </div>

          <SubHeader label="Surface Tokens" />
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-phi-sm mb-phi-xl">
            <div className="flex flex-col gap-1">
              <div className="h-16 bg-surface-ground border border-border-default" />
              <MetaLabel size="xxs" color="dim" as="div">ground</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">surface-ground</code>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-16 bg-surface-raised border border-border-default" />
              <MetaLabel size="xxs" color="dim" as="div">raised</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">surface-raised</code>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-16 bg-surface-inset border border-border-default" />
              <MetaLabel size="xxs" color="dim" as="div">inset</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">surface-inset</code>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-16 bg-surface-deep border border-border-default" />
              <MetaLabel size="xxs" color="dim" as="div">deep</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">surface-deep</code>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-16 bg-surface-overlay border border-border-default" />
              <MetaLabel size="xxs" color="dim" as="div">overlay</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">surface-overlay</code>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-16 bg-surface-inverse border border-border-strong" />
              <MetaLabel size="xxs" color="dim" as="div">inverse</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">surface-inverse</code>
            </div>
          </div>

          <SubHeader label="Ink Tokens" />
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-phi-sm mb-phi-xl">
            <div className="flex flex-col gap-1">
              <div className="h-16 bg-surface-raised border border-border-default flex items-center justify-center">
                <span className="text-ink-primary text-xl font-semibold">Aa</span>
              </div>
              <MetaLabel size="xxs" color="dim" as="div">primary</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">ink-primary</code>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-16 bg-surface-raised border border-border-default flex items-center justify-center">
                <span className="text-ink-secondary text-xl font-semibold">Aa</span>
              </div>
              <MetaLabel size="xxs" color="dim" as="div">secondary</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">ink-secondary</code>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-16 bg-surface-raised border border-border-default flex items-center justify-center">
                <span className="text-ink-muted text-xl font-semibold">Aa</span>
              </div>
              <MetaLabel size="xxs" color="dim" as="div">muted</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">ink-muted</code>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-16 bg-surface-raised border border-border-default flex items-center justify-center">
                <span className="text-ink-dim text-xl font-semibold">Aa</span>
              </div>
              <MetaLabel size="xxs" color="dim" as="div">dim</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">ink-dim</code>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-16 bg-surface-inverse border border-border-strong flex items-center justify-center">
                <span className="text-ink-inverse text-xl font-semibold">Aa</span>
              </div>
              <MetaLabel size="xxs" color="dim" as="div">inverse</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">ink-inverse</code>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-16 bg-surface-raised border border-border-default flex items-center justify-center">
                <span className="text-ink-accent text-xl font-semibold">Aa</span>
              </div>
              <MetaLabel size="xxs" color="dim" as="div">accent</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">ink-accent</code>
            </div>
          </div>

          <SubHeader label="Border Tokens" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-phi-sm mb-phi-xl">
            <div className="flex flex-col gap-1">
              <div className="h-16 bg-surface-raised border-2 border-border-subtle" />
              <MetaLabel size="xxs" color="dim" as="div">subtle (5%)</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">border-subtle</code>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-16 bg-surface-raised border-2 border-border-default" />
              <MetaLabel size="xxs" color="dim" as="div">default (10%)</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">border-default</code>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-16 bg-surface-raised border-2 border-border-strong" />
              <MetaLabel size="xxs" color="dim" as="div">strong (20%)</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">border-strong</code>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-16 bg-surface-raised border-2 border-border-heavy" />
              <MetaLabel size="xxs" color="dim" as="div">heavy (35%)</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">border-heavy</code>
            </div>
          </div>

          <SubHeader label="Data / Status Tokens" />
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-phi-sm">
            <div className="card p-phi-sm flex flex-col gap-phi-xs">
              <div className="bg-data-positive-bg border border-data-positive-border px-3 py-2">
                <span className="text-data-positive meta-label">Positive</span>
              </div>
              <code className="font-mono text-[8px] text-ink-dim">data-positive</code>
            </div>
            <div className="card p-phi-sm flex flex-col gap-phi-xs">
              <div className="bg-data-warning-bg border border-data-warning-border px-3 py-2">
                <span className="text-data-warning meta-label">Warning</span>
              </div>
              <code className="font-mono text-[8px] text-ink-dim">data-warning</code>
            </div>
            <div className="card p-phi-sm flex flex-col gap-phi-xs">
              <div className="bg-data-negative-bg border border-data-negative-border px-3 py-2">
                <span className="text-data-negative meta-label">Negative</span>
              </div>
              <code className="font-mono text-[8px] text-ink-dim">data-negative</code>
            </div>
            <div className="card p-phi-sm flex flex-col gap-phi-xs">
              <div className="bg-data-violet-bg border border-data-violet-border px-3 py-2">
                <span className="text-data-violet meta-label">Violet</span>
              </div>
              <code className="font-mono text-[8px] text-ink-dim">data-violet</code>
            </div>
            <div className="card p-phi-sm flex flex-col gap-phi-xs">
              <div className="bg-data-accent-bg border border-data-accent-border px-3 py-2">
                <span className="text-ink-accent meta-label">Accent</span>
              </div>
              <code className="font-mono text-[8px] text-ink-dim">data-accent</code>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          02 — Typography
          ═══════════════════════════════════════════════════════ */}
      <section id="typography" className="section">
        <Container className="py-phi-2xl">
          <div className="flex items-center gap-phi-xs mb-phi-xl">
            <SectionLabel index="02" label="Typography" />
            <div className="flex-1 divider" />
          </div>

          <SubHeader label="φ-Scale Type Specimens" />
          <div className="card p-phi-md mb-phi-xl">
            <div className="flex items-baseline gap-phi-md border-b border-border-subtle pb-phi-md mb-phi-md">
              <code className="meta-label meta-label-xxs meta-label-dim w-20 shrink-0">display</code>
              <span
                className="text-ink-primary font-light"
                style={{
                  fontSize: 'var(--text-display)',
                  lineHeight: 'var(--leading-display)',
                  letterSpacing: 'var(--tracking-display)',
                }}
              >
                The quick fox
              </span>
            </div>
            <div className="flex items-baseline gap-phi-md border-b border-border-subtle pb-phi-md mb-phi-md">
              <code className="meta-label meta-label-xxs meta-label-dim w-20 shrink-0">title1</code>
              <span
                className="text-ink-primary font-light"
                style={{ fontSize: 'var(--text-title1)', lineHeight: 'var(--leading-heading)' }}
              >
                Process Intelligence
              </span>
            </div>
            <div className="flex items-baseline gap-phi-md border-b border-border-subtle pb-phi-md mb-phi-md">
              <code className="meta-label meta-label-xxs meta-label-dim w-20 shrink-0">title2</code>
              <span
                className="text-ink-primary font-light"
                style={{ fontSize: 'var(--text-title2)', lineHeight: 'var(--leading-heading)' }}
              >
                Data-driven decisions
              </span>
            </div>
            <div className="flex items-baseline gap-phi-md border-b border-border-subtle pb-phi-md mb-phi-md">
              <code className="meta-label meta-label-xxs meta-label-dim w-20 shrink-0">heading</code>
              <span
                className="text-ink-primary font-semibold"
                style={{
                  fontSize: 'var(--text-heading)',
                  lineHeight: 'var(--leading-heading)',
                  letterSpacing: 'var(--tracking-heading)',
                }}
              >
                Section Heading
              </span>
            </div>
            <div className="flex items-baseline gap-phi-md border-b border-border-subtle pb-phi-md mb-phi-md">
              <code className="meta-label meta-label-xxs meta-label-dim w-20 shrink-0">body</code>
              <span
                className="text-ink-secondary"
                style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)' }}
              >
                Body text — readable, warm, intentional φ-scale spacing throughout
              </span>
            </div>
            <div className="flex items-baseline gap-phi-md border-b border-border-subtle pb-phi-md mb-phi-md">
              <code className="meta-label meta-label-xxs meta-label-dim w-20 shrink-0">caption</code>
              <span
                className="text-ink-muted"
                style={{ fontSize: 'var(--text-caption)', lineHeight: 'var(--leading-body)' }}
              >
                Figure captions, secondary descriptions, image credits, auxiliary info
              </span>
            </div>
            <div className="flex items-baseline gap-phi-md">
              <code className="meta-label meta-label-xxs meta-label-dim w-20 shrink-0">meta</code>
              <span
                className="text-ink-dim font-mono uppercase"
                style={{
                  fontSize: 'var(--text-meta)',
                  letterSpacing: 'var(--tracking-label)',
                }}
              >
                Mono label — status — category
              </span>
            </div>
          </div>

          <SubHeader label="Component Typography Classes" />
          <div className="card p-phi-md mb-phi-xl">
            <div className="mb-phi-md">
              <MetaLabel size="xxs" color="dim" as="div" className="mb-2">.section-title</MetaLabel>
              <SectionTitle>This is a section title</SectionTitle>
            </div>
            <div className="divider mb-phi-md" />
            <div className="mb-phi-md">
              <MetaLabel size="xxs" color="dim" as="div" className="mb-2">.article-title</MetaLabel>
              <h2 className="article-title">This is an article title</h2>
            </div>
            <div className="divider mb-phi-md" />
            <div>
              <MetaLabel size="xxs" color="dim" as="div" className="mb-2">.article-deck</MetaLabel>
              <p className="article-deck">A clear, concise subtitle that sets context before the reader dives in.</p>
            </div>
          </div>

          <SubHeader label="MetaLabel Variants" />
          <div className="card p-phi-md flex flex-wrap gap-phi-xl items-start">
            <div className="flex flex-col gap-2 items-start">
              <MetaLabel>Default</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">xs + muted</code>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <MetaLabel size="xxs">Smaller</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">xxs + muted</code>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <MetaLabel color="dim">Dim</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">xs + dim</code>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <MetaLabel size="xxs" color="dim">Smallest + Dim</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">xxs + dim</code>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          03 — Spacing & Shadows
          ═══════════════════════════════════════════════════════ */}
      <section id="spacing" className="section">
        <Container className="py-phi-2xl">
          <div className="flex items-center gap-phi-xs mb-phi-xl">
            <SectionLabel index="03" label="Spacing & Shadows" />
            <div className="flex-1 divider" />
          </div>

          <SubHeader label="φ-Scale Spacing" />
          <div className="card p-phi-md mb-phi-xl">
            {[
              { name: 'phi-2xs', rem: '0.382rem', px: '6px' },
              { name: 'phi-xs', rem: '0.618rem', px: '10px' },
              { name: 'phi-sm', rem: '1rem', px: '16px' },
              { name: 'phi-md', rem: '1.618rem', px: '26px' },
              { name: 'phi-lg', rem: '2.618rem', px: '42px' },
              { name: 'phi-xl', rem: '4.236rem', px: '68px' },
              { name: 'phi-2xl', rem: '6.854rem', px: '110px' },
              { name: 'phi-3xl', rem: '11.09rem', px: '177px' },
            ].map(({ name, rem, px }, i) => (
              <div key={name} className={`flex items-center gap-phi-sm ${i > 0 ? 'mt-phi-xs' : ''}`}>
                <code className="meta-label meta-label-xxs meta-label-dim w-20 shrink-0">{name}</code>
                <div className="h-5 bg-surface-inverse shrink-0" style={{ width: rem }} />
                <span className="text-xs text-ink-muted font-mono">{rem} / {px}</span>
              </div>
            ))}
          </div>

          <SubHeader label="Shadow Levels" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-phi-md mb-phi-xl">
            <div className="card shadow-xs p-phi-md flex flex-col items-center gap-phi-xs">
              <MetaLabel size="xxs" color="dim" as="div">shadow-xs</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">--shadow-xs</code>
            </div>
            <div className="card shadow-sm p-phi-md flex flex-col items-center gap-phi-xs">
              <MetaLabel size="xxs" color="dim" as="div">shadow-sm</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">--shadow-sm</code>
            </div>
            <div className="card shadow-md p-phi-md flex flex-col items-center gap-phi-xs">
              <MetaLabel size="xxs" color="dim" as="div">shadow-md</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">--shadow-md</code>
            </div>
            <div className="card shadow-lg p-phi-md flex flex-col items-center gap-phi-xs">
              <MetaLabel size="xxs" color="dim" as="div">shadow-lg</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">--shadow-lg</code>
            </div>
          </div>

          <SubHeader label="Border Radius" />
          <div className="flex flex-wrap gap-phi-xl items-end">
            <div className="flex flex-col items-center gap-phi-xs">
              <div
                className="w-16 h-16 bg-surface-inset border border-border-default"
                style={{ borderRadius: 'var(--radius-sm)' }}
              />
              <MetaLabel size="xxs" color="dim" as="div">radius-sm</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">2px</code>
            </div>
            <div className="flex flex-col items-center gap-phi-xs">
              <div
                className="w-16 h-16 bg-surface-inset border border-border-default"
                style={{ borderRadius: 'var(--radius)' }}
              />
              <MetaLabel size="xxs" color="dim" as="div">radius</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">4px</code>
            </div>
            <div className="flex flex-col items-center gap-phi-xs">
              <div
                className="w-16 h-16 bg-surface-inset border border-border-default"
                style={{ borderRadius: 'var(--radius-lg)' }}
              />
              <MetaLabel size="xxs" color="dim" as="div">radius-lg</MetaLabel>
              <code className="font-mono text-[8px] text-ink-dim">8px</code>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          04 — Components
          ═══════════════════════════════════════════════════════ */}
      <section id="components" className="section">
        <Container className="py-phi-2xl">
          <div className="flex items-center gap-phi-xs mb-phi-xl">
            <SectionLabel index="04" label="Components" />
            <div className="flex-1 divider" />
          </div>

          {/* Button */}
          <SubHeader label="Button" />
          <div className="card p-phi-md mb-phi-lg">
            <MetaLabel size="xxs" color="dim" as="div" className="mb-phi-sm">Variants</MetaLabel>
            <div className="flex flex-wrap gap-phi-sm mb-phi-md">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="dark">Dark</Button>
              <Button variant="dark-secondary">Dark Secondary</Button>
            </div>
            <div className="divider my-phi-md" />
            <MetaLabel size="xxs" color="dim" as="div" className="mb-phi-sm">Sizes</MetaLabel>
            <div className="flex flex-wrap items-center gap-phi-sm">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* Badge */}
          <SubHeader label="Badge" />
          <div className="card p-phi-md mb-phi-lg">
            <div className="flex flex-wrap gap-phi-sm">
              <Badge variant="neutral">Neutral</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="violet">Violet</Badge>
              <Badge variant="orange">Orange</Badge>
            </div>
          </div>

          {/* Form controls */}
          <SubHeader label="Form Controls" />
          <div className="card p-phi-md mb-phi-lg">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-phi-md">
              <div>
                <FormLabel htmlFor="demo-input">Input</FormLabel>
                <Input id="demo-input" placeholder="Placeholder text..." />
              </div>
              <div>
                <FormLabel htmlFor="demo-select">Select</FormLabel>
                <Select id="demo-select">
                  <option>Option Alpha</option>
                  <option>Option Beta</option>
                  <option>Option Gamma</option>
                </Select>
              </div>
              <div>
                <FormLabel htmlFor="demo-textarea">Textarea</FormLabel>
                <Textarea id="demo-textarea" rows={3} placeholder="Multiline input..." />
              </div>
            </div>
          </div>

          {/* Callout */}
          <SubHeader label="Callout" />
          <div className="card p-phi-md mb-phi-lg flex flex-col gap-phi-sm">
            <Callout type="note">A note callout for informational content that supplements the main text.</Callout>
            <Callout type="tip" title="Pro Tip">A helpful tip for users who want to go beyond the basics.</Callout>
            <Callout type="warning">This action may have unintended side effects — proceed with care.</Callout>
            <Callout type="error" title="Error">Something went wrong. Check your configuration and try again.</Callout>
          </div>

          {/* CodeBlock */}
          <SubHeader label="CodeBlock" />
          <div className="mb-phi-lg">
            <CodeBlock
              lang="typescript"
              code={`import { Button } from '@/components/ui'

function Demo() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  )
}`}
            />
          </div>

          {/* AsciiDiagram */}
          <SubHeader label="AsciiDiagram" />
          <div className="card p-phi-md mb-phi-lg flex flex-col gap-phi-md">
            <div>
              <MetaLabel size="xxs" color="dim" as="div" className="mb-phi-sm">block variant</MetaLabel>
              <AsciiDiagram variant="block" caption="Fig. 1 — Data pipeline">
                {`\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 Input \u2502\u2500\u2500\u2500\u25b6\u2502Process\u2502\u2500\u2500\u2500\u25b6\u2502Output \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518`}
              </AsciiDiagram>
            </div>
            <div>
              <MetaLabel size="xxs" color="dim" as="div" className="mb-phi-sm">inline variant</MetaLabel>
              <p className="text-sm text-ink-secondary mb-1">The data flows as follows:</p>
              <AsciiDiagram variant="inline">
                {`A \u2192 B \u2192 C \u2192 D`}
              </AsciiDiagram>
            </div>
          </div>

          {/* IconBox */}
          <SubHeader label="IconBox" />
          <div className="card p-phi-md mb-phi-lg flex items-center gap-phi-xl">
            <div className="group cursor-pointer flex flex-col items-center gap-phi-xs">
              <IconBox icon={Activity} interactive />
              <MetaLabel size="xxs" color="dim" as="div">interactive (hover)</MetaLabel>
            </div>
            <div className="flex flex-col items-center gap-phi-xs">
              <IconBox icon={Shield} interactive={false} />
              <MetaLabel size="xxs" color="dim" as="div">static</MetaLabel>
            </div>
            <div className="flex flex-col items-center gap-phi-xs">
              <IconBox icon={GitBranch} interactive={false} size={18} />
              <MetaLabel size="xxs" color="dim" as="div">size=18</MetaLabel>
            </div>
          </div>

          {/* ToggleGroup */}
          <SubHeader label="ToggleGroup" />
          <div className="card p-phi-md mb-phi-lg">
            <MetaLabel size="xxs" color="dim" as="div" className="mb-phi-md">Interactive demo</MetaLabel>
            <ToggleGroup
              options={TOGGLE_OPTIONS}
              value={toggleVal}
              onChange={setToggleVal}
            />
            <p className="mt-phi-sm text-xs text-ink-muted font-mono">
              Selected: <span className="text-ink-primary">{toggleVal}</span>
            </p>
          </div>

          {/* Divider */}
          <SubHeader label="Divider" />
          <div className="card p-phi-md mb-phi-lg flex flex-col gap-phi-md">
            <div>
              <MetaLabel size="xxs" color="dim" as="div" className="mb-phi-sm">Bare</MetaLabel>
              <Divider />
            </div>
            <div>
              <MetaLabel size="xxs" color="dim" as="div" className="mb-phi-sm">Labelled</MetaLabel>
              <Divider label="or" />
            </div>
          </div>

          {/* ProcessFlow */}
          <SubHeader label="ProcessFlow" />
          <div className="card p-phi-md mb-phi-lg flex flex-col gap-phi-md">
            <div>
              <MetaLabel size="xxs" color="dim" as="div" className="mb-phi-sm">Sequential</MetaLabel>
              <ProcessFlow
                steps="Receive --> Validate --> Approve --> Close"
                caption="Fig. 2 — Approval pipeline"
              />
            </div>
            <div>
              <MetaLabel size="xxs" color="dim" as="div" className="mb-phi-sm">Branch</MetaLabel>
              <ProcessFlow
                steps="Submit --> Review --> {Approve | Reject}"
                caption="Fig. 3 — Review flow"
              />
            </div>
          </div>

          {/* FadeIn */}
          <SubHeader label="FadeIn" />
          <div className="card p-phi-md">
            <MetaLabel size="xxs" color="dim" as="div" className="mb-phi-md">
              Scroll into view to trigger — direction / delay variants
            </MetaLabel>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-phi-md">
              <FadeIn direction="up" delay={0}>
                <div className="card p-phi-md flex flex-col items-center gap-phi-xs">
                  <Zap size={16} className="text-ink-muted" />
                  <MetaLabel size="xxs" color="dim" as="div">direction=&quot;up&quot;</MetaLabel>
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={100}>
                <div className="card p-phi-md flex flex-col items-center gap-phi-xs">
                  <Zap size={16} className="text-ink-muted" />
                  <MetaLabel size="xxs" color="dim" as="div">direction=&quot;left&quot;</MetaLabel>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={200}>
                <div className="card p-phi-md flex flex-col items-center gap-phi-xs">
                  <Zap size={16} className="text-ink-muted" />
                  <MetaLabel size="xxs" color="dim" as="div">direction=&quot;right&quot;</MetaLabel>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          05 — Patterns & Compositions
          ═══════════════════════════════════════════════════════ */}
      <section id="patterns" className="section">
        <Container className="py-phi-2xl">
          <div className="flex items-center gap-phi-xs mb-phi-xl">
            <SectionLabel index="05" label="Patterns & Compositions" />
            <div className="flex-1 divider" />
          </div>

          {/* Hairline label pattern */}
          <SubHeader label="Hairline Label Pattern" />
          <div className="card p-phi-md mb-phi-lg flex flex-col gap-phi-md">
            <div>
              <MetaLabel size="xxs" color="dim" as="div" className="mb-phi-xs">SectionLabel + divider (landing sections)</MetaLabel>
              <div className="flex items-center gap-phi-xs">
                <SectionLabel index="01" label="Capabilities" />
                <div className="flex-1 divider" />
              </div>
            </div>
            <div>
              <MetaLabel size="xxs" color="dim" as="div" className="mb-phi-xs">MetaLabel + divider (sub-headers within sections)</MetaLabel>
              <div className="flex items-center gap-phi-xs">
                <MetaLabel as="div" color="dim" size="xxs">Surface Tokens</MetaLabel>
                <div className="flex-1 divider" />
              </div>
            </div>
            <div>
              <MetaLabel size="xxs" color="dim" as="div" className="mb-phi-xs">Section header grid (label + title + subtitle)</MetaLabel>
              <div className="grid lg:grid-cols-2 gap-phi-lg pt-phi-sm border-t border-border-default">
                <div>
                  <div className="flex items-center gap-phi-xs mb-phi-md">
                    <SectionLabel label="Features" />
                    <div className="flex-1 divider" />
                  </div>
                  <SectionTitle>Built for scale,<br />not for show</SectionTitle>
                </div>
                <div className="flex items-end">
                  <p className="text-sm text-ink-muted leading-relaxed max-w-sm">
                    Every decision in this design system is intentional, traceable, and grounded in a φ-derived scale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card variants */}
          <SubHeader label="Card Variants" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-phi-md mb-phi-lg">
            <div className="card p-phi-md">
              <MetaLabel size="xxs" color="dim" as="div" className="mb-phi-sm">.card</MetaLabel>
              <p className="text-sm text-ink-secondary">
                Standard elevated block. surface-raised + border-default + shadow-sm.
              </p>
            </div>
            <div className="card-featured p-phi-md">
              <MetaLabel size="xxs" color="dim" as="div" className="mb-phi-sm">.card-featured</MetaLabel>
              <p className="text-sm text-ink-secondary">
                Pricing highlight. surface-inset + border-strong + 2px ink top border.
              </p>
            </div>
            <div className="card hover-lift p-phi-md cursor-default">
              <MetaLabel size="xxs" color="dim" as="div" className="mb-phi-sm">.hover-lift</MetaLabel>
              <p className="text-sm text-ink-secondary">
                Hover to see the spring-like translateY(-2px) + shadow expansion.
              </p>
            </div>
          </div>

          {/* Card grid */}
          <SubHeader label="Card Grid" />
          <div className="card-grid grid grid-cols-4 gap-px mb-phi-lg">
            <div className="card-grid-cell p-phi-md">
              <MetaLabel size="xxs" color="dim" as="div">Ingested</MetaLabel>
              <p className="text-2xl font-light text-ink-primary mt-2">2.4M</p>
            </div>
            <div className="card-grid-cell p-phi-md">
              <MetaLabel size="xxs" color="dim" as="div">Processed</MetaLabel>
              <p className="text-2xl font-light text-ink-primary mt-2">1.8M</p>
            </div>
            <div className="card-grid-cell p-phi-md">
              <MetaLabel size="xxs" color="dim" as="div">Exported</MetaLabel>
              <p className="text-2xl font-light text-ink-primary mt-2">1.2M</p>
            </div>
            <div className="card-grid-cell p-phi-md">
              <MetaLabel size="xxs" color="dim" as="div">Errors</MetaLabel>
              <p className="text-2xl font-light text-data-negative mt-2">0.04%</p>
            </div>
          </div>

          {/* Stack utilities */}
          <SubHeader label="Stack Utilities (φ Vertical Rhythm)" />
          <div className="grid grid-cols-5 gap-phi-sm mb-phi-lg">
            <div className="card p-phi-sm">
              <div className="stack-xs">
                <div className="bg-surface-inset border border-border-default py-1 text-center"><MetaLabel size="xxs" color="dim" as="div">A</MetaLabel></div>
                <div className="bg-surface-inset border border-border-default py-1 text-center"><MetaLabel size="xxs" color="dim" as="div">B</MetaLabel></div>
                <div className="bg-surface-inset border border-border-default py-1 text-center"><MetaLabel size="xxs" color="dim" as="div">C</MetaLabel></div>
              </div>
              <MetaLabel size="xxs" color="dim" as="div" className="mt-phi-xs">.stack-xs</MetaLabel>
            </div>
            <div className="card p-phi-sm">
              <div className="stack-sm">
                <div className="bg-surface-inset border border-border-default py-1 text-center"><MetaLabel size="xxs" color="dim" as="div">A</MetaLabel></div>
                <div className="bg-surface-inset border border-border-default py-1 text-center"><MetaLabel size="xxs" color="dim" as="div">B</MetaLabel></div>
                <div className="bg-surface-inset border border-border-default py-1 text-center"><MetaLabel size="xxs" color="dim" as="div">C</MetaLabel></div>
              </div>
              <MetaLabel size="xxs" color="dim" as="div" className="mt-phi-xs">.stack-sm</MetaLabel>
            </div>
            <div className="card p-phi-sm">
              <div className="stack-md">
                <div className="bg-surface-inset border border-border-default py-1 text-center"><MetaLabel size="xxs" color="dim" as="div">A</MetaLabel></div>
                <div className="bg-surface-inset border border-border-default py-1 text-center"><MetaLabel size="xxs" color="dim" as="div">B</MetaLabel></div>
                <div className="bg-surface-inset border border-border-default py-1 text-center"><MetaLabel size="xxs" color="dim" as="div">C</MetaLabel></div>
              </div>
              <MetaLabel size="xxs" color="dim" as="div" className="mt-phi-xs">.stack-md</MetaLabel>
            </div>
            <div className="card p-phi-sm">
              <div className="stack-lg">
                <div className="bg-surface-inset border border-border-default py-1 text-center"><MetaLabel size="xxs" color="dim" as="div">A</MetaLabel></div>
                <div className="bg-surface-inset border border-border-default py-1 text-center"><MetaLabel size="xxs" color="dim" as="div">B</MetaLabel></div>
                <div className="bg-surface-inset border border-border-default py-1 text-center"><MetaLabel size="xxs" color="dim" as="div">C</MetaLabel></div>
              </div>
              <MetaLabel size="xxs" color="dim" as="div" className="mt-phi-xs">.stack-lg</MetaLabel>
            </div>
            <div className="card p-phi-sm">
              <div className="stack-xl">
                <div className="bg-surface-inset border border-border-default py-1 text-center"><MetaLabel size="xxs" color="dim" as="div">A</MetaLabel></div>
                <div className="bg-surface-inset border border-border-default py-1 text-center"><MetaLabel size="xxs" color="dim" as="div">B</MetaLabel></div>
                <div className="bg-surface-inset border border-border-default py-1 text-center"><MetaLabel size="xxs" color="dim" as="div">C</MetaLabel></div>
              </div>
              <MetaLabel size="xxs" color="dim" as="div" className="mt-phi-xs">.stack-xl</MetaLabel>
            </div>
          </div>

          {/* Engineering grid */}
          <SubHeader label="Engineering Grid" />
          <div className="bg-engineering-grid border border-border-default p-phi-xl flex items-center justify-center mb-phi-lg">
            <MetaLabel as="div">.bg-engineering-grid</MetaLabel>
          </div>

          {/* Section classes */}
          <SubHeader label="Section Classes" />
          <div className="flex flex-col gap-phi-sm">
            <div className="section px-phi-md py-phi-sm">
              <MetaLabel as="div">.section — bg-surface-ground + border-bottom</MetaLabel>
            </div>
            <div className="section-deep px-phi-md py-phi-sm">
              <MetaLabel as="div">.section-deep — bg-surface-deep + weighted borders</MetaLabel>
            </div>
            <div className="section-inverse px-phi-md py-phi-sm">
              <MetaLabel as="div" className="text-ink-inverse">.section-inverse — bg-surface-inverse</MetaLabel>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
