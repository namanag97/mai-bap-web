import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import { getAllPosts, getPostSource, formatDate } from '@/lib/mdx'
import { Badge, Container } from '@/components/ui'
import { ReadingProgressBar } from '@/components/ui/ReadingProgressBar'
import { TocTickers } from '@/components/blog/TocTickers'
import { mdxComponents } from '@/mdx-components'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostSource(slug)
  if (!post) return {}
  return { title: post.frontmatter.title, description: post.frontmatter.excerpt }
}

const categoryVariant = {
  Product:      'neutral',
  Design:       'violet',
  'Case Study': 'success',
  Engineering:  'orange',
} as const

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostSource(slug)
  if (!post) notFound()

  const { frontmatter, source } = post

  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypeSlug],
      },
    },
  })

  const badgeVariant =
    categoryVariant[frontmatter.category as keyof typeof categoryVariant] ?? 'neutral'

  return (
    <div className="min-h-screen pt-14 bg-surface-ground">

      {/* ── Reading progress bar — fixed above everything ──────── */}
      <ReadingProgressBar />

      {/* ── Left-side TOC tickers — fixed, xl+ only ────────────── */}
      <TocTickers />

      {/* ── Slim breadcrumb ────────────────────────────────────── */}
      <div className="border-b border-border-subtle">
        <Container maxWidth="2xl" className="h-11 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-ink-muted hover:text-ink-primary transition-colors duration-200"
          >
            <ArrowLeft size={9} />
            Journal
          </Link>
          <Badge variant={badgeVariant}>{frontmatter.category}</Badge>
        </Container>
      </div>

      {/* ── Article header ─────────────────────────────────────── */}
      <header className="border-b border-border-default">
        <Container maxWidth="2xl" className="pt-14 pb-12">

          <h1 className="article-title mb-6" style={{ maxWidth: '20ch' }}>
            {frontmatter.title}
          </h1>

          <p className="article-deck mb-10 max-w-lg">{frontmatter.excerpt}</p>

          {/* Byline */}
          <div className="article-byline">
            <span className="article-byline-mark" aria-hidden="true">
              {frontmatter.author.name.charAt(0)}
            </span>
            <span className="article-byline-name">{frontmatter.author.name}</span>
            <span className="article-byline-sep">·</span>
            <span>{frontmatter.author.role}</span>
            <span className="article-byline-sep">·</span>
            <span>{formatDate(frontmatter.date)}</span>
            <span className="article-byline-sep">·</span>
            <span>{frontmatter.readTime} min read</span>
          </div>
        </Container>
      </header>

      {/* ── Article body ───────────────────────────────────────── */}
      <Container maxWidth="2xl" as="article" className="py-16">
        <div className="prose">
          {content}
        </div>
      </Container>

      {/* ── Footer nav ─────────────────────────────────────────── */}
      <div className="border-t border-border-subtle">
        <Container maxWidth="2xl" className="h-12 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-ink-muted hover:text-ink-primary transition-colors duration-200"
          >
            <ArrowLeft size={9} />
            All posts
          </Link>
          <span className="text-[9px] font-mono uppercase tracking-widest text-ink-dim">
            mai-bap Journal
          </span>
        </Container>
      </div>

    </div>
  )
}
