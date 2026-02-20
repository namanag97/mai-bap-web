import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { getDocPage, getAllDocSlugs, navigation, type ContentBlock } from '@/content/docs'

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

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case 'h2':   return <h2 key={i}>{block.text}</h2>
    case 'h3':   return <h3 key={i}>{block.text}</h3>
    case 'p':    return <p key={i}>{block.text}</p>
    case 'list':
      return (
        <ul key={i}>
          {block.items?.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      )
    case 'code':
      return <pre key={i}><code>{block.text}</code></pre>
    case 'note':
      return <div key={i} className="note">{block.text}</div>
    case 'warning':
      return <div key={i} className="note warning">⚠ {block.text}</div>
    default:
      return null
  }
}

function getPrevNext(slugParts: string[]) {
  const flat = navigation.flatMap(s => s.pages)
  const idx = flat.findIndex(
    p => p.slug.length === slugParts.length && p.slug.every((s, i) => s === slugParts[i])
  )
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx < flat.length - 1 ? flat[idx + 1] : null,
  }
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params
  const page = getDocPage(slug)
  if (!page) notFound()

  const { prev, next } = getPrevNext(slug)

  const section = navigation.find(s =>
    s.pages.some(p => p.slug.length === slug.length && p.slug.every((s2, i) => s2 === slug[i]))
  )

  return (
    <div className="max-w-2xl mx-auto px-10 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-braun-400 mb-8">
        <Link href="/docs/introduction" className="hover:text-braun-900 transition-colors">Docs</Link>
        <ChevronRight size={9} />
        {section && <span>{section.title}</span>}
        <ChevronRight size={9} />
        <span className="text-braun-600">{page.title}</span>
      </nav>

      {/* Page header */}
      <h1 className="text-2xl lg:text-3xl font-light tracking-tight text-braun-900 mb-2 leading-tight">
        {page.title}
      </h1>
      <p className="text-sm text-braun-500 leading-relaxed mb-8 pb-8 border-b border-braun-200 font-light">
        {page.description}
      </p>

      {/* Content */}
      <article className="prose">
        {page.content.map((block, i) => renderBlock(block, i))}
      </article>

      {/* Prev / Next */}
      <div className="mt-14 pt-6 border-t border-braun-200 grid grid-cols-2 gap-4">
        {prev ? (
          <Link
            href={`/docs/${prev.slug.join('/')}`}
            className="group flex flex-col gap-1.5 p-4 border border-braun-200 hover:border-braun-900 transition-colors duration-200"
          >
            <span className="text-[9px] font-mono uppercase tracking-widest text-braun-400">
              ← Previous
            </span>
            <span className="text-xs font-semibold text-braun-700 group-hover:text-braun-900 transition-colors">
              {prev.title}
            </span>
          </Link>
        ) : <div />}

        {next ? (
          <Link
            href={`/docs/${next.slug.join('/')}`}
            className="group flex flex-col gap-1.5 p-4 border border-braun-200 hover:border-braun-900 transition-colors duration-200 text-right"
          >
            <span className="text-[9px] font-mono uppercase tracking-widest text-braun-400">
              Next →
            </span>
            <span className="text-xs font-semibold text-braun-700 group-hover:text-braun-900 transition-colors">
              {next.title}
            </span>
          </Link>
        ) : <div />}
      </div>
    </div>
  )
}
