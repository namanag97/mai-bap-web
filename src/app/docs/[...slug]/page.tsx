import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react'
import { getDocPage, getAllDocSlugs, navigation } from '@/content/docs'
import { ProseRenderer, SectionLabel, MetaLabel, Divider } from '@/components/ui'

interface Props {
  params: Promise<{ slug: string[] }>
}

export async function generateStaticParams() {
  return getAllDocSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getDocPage(slug)
  if (!page) return {}
  return { title: page.title, description: page.description }
}

function getPrevNext(slugParts: string[]) {
  const flat = navigation.flatMap(s => s.pages)
  const idx  = flat.findIndex(
    p => p.slug.length === slugParts.length && p.slug.every((s, i) => s === slugParts[i])
  )
  return {
    prev:    idx > 0              ? flat[idx - 1] : null,
    next:    idx < flat.length - 1 ? flat[idx + 1] : null,
    section: navigation.find(s =>
      s.pages.some(p => p.slug.length === slugParts.length && p.slug.every((s2, i) => s2 === slugParts[i]))
    ),
  }
}

/**
 * DocPage — Swiss design reading layout.
 *
 * Structure:
 *   [Breadcrumb]
 *   [Section label — "Getting Started"]
 *   [H1 — font-light, large]
 *   [Description — font-light, braun-500]
 *   [Divider]
 *   [Content — ProseRenderer with CodeBlock, Callout, list]
 *   [Divider]
 *   [Prev / Next navigation]
 *
 * Max reading width: max-w-2xl (≈ 672px) — optimal for 66-char lines at 14px.
 * Outer padding: px-10 py-12 — generous, consistent with landing page rhythm.
 */
export default async function DocPage({ params }: Props) {
  const { slug } = await params
  const page = getDocPage(slug)
  if (!page) notFound()

  const { prev, next, section } = getPrevNext(slug)

  return (
    <article className="max-w-2xl px-10 py-12">

      {/* Breadcrumb — same pattern as Hero section label */}
      <nav
        className="flex items-center gap-1.5 mb-8"
        aria-label="Breadcrumb"
      >
        <Link
          href="/docs/introduction"
          className="text-[9px] font-mono uppercase tracking-widest text-ink-muted hover:text-ink-primary transition-colors"
        >
          Docs
        </Link>
        <ChevronRight size={9} className="text-ink-dim" />
        {section && (
          <>
            <MetaLabel size="xxs">
              {section.title}
            </MetaLabel>
            <ChevronRight size={9} className="text-ink-dim" />
          </>
        )}
        <MetaLabel size="xxs">
          {page.title}
        </MetaLabel>
      </nav>

      {/* Section label — same component as landing page sections */}
      {section && (
        <SectionLabel label={section.title} className="mb-4" />
      )}

      {/* Page title — font-light, tracking-tight. Same typographic rule as all h1s. */}
      <h1 className="text-3xl font-light tracking-tight text-ink-primary leading-tight mb-3">
        {page.title}
      </h1>

      {/* Description */}
      <p className="text-base text-ink-secondary font-light leading-relaxed mb-8">
        {page.description}
      </p>

      {/* Separator */}
      <Divider className="mb-10" />

      {/* Content — rendered via ProseRenderer, which uses CodeBlock, Callout, etc. */}
      <ProseRenderer blocks={page.content} />

      {/* Bottom separator */}
      <Divider className="mt-14 mb-8" />

      {/* Prev / Next navigation */}
      <div className="grid grid-cols-2 gap-4">
        {prev ? (
          <Link
            href={`/docs/${prev.slug.join('/')}`}
            className="group flex flex-col gap-1.5 p-4 border border-border-default hover:border-border-strong transition-colors duration-200"
          >
            <MetaLabel as="span" size="xxs" color="dim" className="flex items-center gap-1.5">
              <ArrowLeft size={9} /> Previous
            </MetaLabel>
            <span className="text-xs font-medium text-ink-secondary group-hover:text-ink-primary transition-colors leading-snug">
              {prev.title}
            </span>
          </Link>
        ) : <div />}

        {next ? (
          <Link
            href={`/docs/${next.slug.join('/')}`}
            className="group flex flex-col gap-1.5 p-4 border border-border-default hover:border-border-strong transition-colors duration-200 text-right"
          >
            <MetaLabel as="span" size="xxs" color="dim" className="flex items-center justify-end gap-1.5">
              Next <ArrowRight size={9} />
            </MetaLabel>
            <span className="text-xs font-medium text-ink-secondary group-hover:text-ink-primary transition-colors leading-snug">
              {next.title}
            </span>
          </Link>
        ) : <div />}
      </div>
    </article>
  )
}
