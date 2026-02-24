import type { Metadata } from 'next'
import Link from 'next/link'
import { navigation } from '@/content/docs'
import { BookOpen, Cpu, Code2, Compass } from 'lucide-react'
import { MetaLabel, IconBox } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Everything you need to get started with Meridian — installation, core concepts, API reference, and guides.',
}

const sectionIcons = [BookOpen, Cpu, Code2, Compass]

const sectionDescriptions: Record<string, string> = {
  'Getting Started': 'Set up your account, install the collector SDK, and emit your first process event in under 5 minutes.',
  'Core Concepts': 'Understand process mining, conformance checking, and case management — the foundations of process intelligence.',
  'API Reference': 'Complete reference for the REST API and webhook integrations. Authenticate, ingest events, and query cases.',
  'Guides': 'Step-by-step walkthroughs for integrations, custom dashboards, and advanced configuration.',
}

export default function DocsIndexPage() {
  return (
    <div className="px-8 lg:px-16 py-16">
      {/* Header */}
      <div className="mb-12 pb-8 border-b border-border-default">
        <MetaLabel as="div" color="dim" className="mb-4">
          Reference
        </MetaLabel>
        <h1 className="text-2xl lg:text-3xl font-light tracking-tight text-ink-primary mb-3">
          Documentation
        </h1>
        <p className="text-sm text-braun-500 font-light leading-relaxed max-w-lg">
          Everything you need to get started with Meridian — from installation to building custom dashboards and automation workflows.
        </p>
      </div>

      {/* Section cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border-default">
        {navigation.map((section, i) => {
          const Icon = sectionIcons[i]
          const firstPage = section.pages[0]
          const href = `/docs/${firstPage.slug.join('/')}`

          return (
            <div key={section.title} className="bg-surface-raised p-8 group">
              <IconBox icon={Icon} className="mb-5" />

              {/* Section title */}
              <h2 className="text-sm font-semibold text-ink-primary tracking-tight mb-2">
                {section.title}
              </h2>

              {/* Description */}
              <p className="text-xs text-braun-500 leading-relaxed mb-5">
                {sectionDescriptions[section.title]}
              </p>

              {/* Page links */}
              <ul className="space-y-1.5 mb-6">
                {section.pages.map(page => (
                  <li key={page.slug.join('/')}>
                    <Link
                      href={`/docs/${page.slug.join('/')}`}
                      className="text-xs text-braun-400 hover:text-ink-primary transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-border-default shrink-0" />
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Section CTA */}
              <Link
                href={href}
                className="text-[10px] font-mono font-bold uppercase tracking-widest text-braun-500 hover:text-ink-primary transition-colors duration-200"
              >
                Start reading &rarr;
              </Link>
            </div>
          )
        })}
      </div>

      {/* Quick links footer */}
      <div className="mt-8 pt-6 border-t border-border-default flex flex-wrap gap-6">
        <MetaLabel color="dim">
          Quick links
        </MetaLabel>
        <Link
          href="/docs/quick-start"
          className="text-[10px] font-mono uppercase tracking-widest text-braun-500 hover:text-ink-primary transition-colors"
        >
          Quick Start
        </Link>
        <Link
          href="/docs/api/rest"
          className="text-[10px] font-mono uppercase tracking-widest text-braun-500 hover:text-ink-primary transition-colors"
        >
          REST API
        </Link>
        <Link
          href="/docs/guides/integrations"
          className="text-[10px] font-mono uppercase tracking-widest text-braun-500 hover:text-ink-primary transition-colors"
        >
          Integrations
        </Link>
      </div>
    </div>
  )
}
