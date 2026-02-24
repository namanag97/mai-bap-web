import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { posts, getPost, formatDate } from '@/content/blog'
import { Badge, ProseRenderer, Container } from '@/components/ui'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

const categoryVariant = {
  Product:      'neutral',
  Design:       'violet',
  'Case Study': 'success',
  Engineering:  'orange',
} as const

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const badgeVariant =
    categoryVariant[post.category as keyof typeof categoryVariant] ?? 'neutral'

  return (
    <div className="min-h-screen pt-14 bg-surface-ground">

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
          <Badge variant={badgeVariant}>{post.category}</Badge>
        </Container>
      </div>

      {/* ── Article header ─────────────────────────────────────── */}
      <header className="border-b border-border-default">
        <Container maxWidth="2xl" className="pt-14 pb-12">

          <h1 className="article-title mb-6">{post.title}</h1>

          <p className="article-deck mb-10 max-w-lg">{post.excerpt}</p>

          {/* Byline — all meta in one line, no inline styles */}
          <div className="article-byline">
            <span className="article-byline-mark" aria-hidden="true">
              {post.author.name.charAt(0)}
            </span>
            <span className="article-byline-name">{post.author.name}</span>
            <span className="article-byline-sep">·</span>
            <span>{post.author.role}</span>
            <span className="article-byline-sep">·</span>
            <span>{formatDate(post.date)}</span>
            <span className="article-byline-sep">·</span>
            <span>{post.readTime} min read</span>
          </div>
        </Container>
      </header>

      {/* ── Article body ───────────────────────────────────────── */}
      <Container maxWidth="2xl" as="article" className="py-16">
        <ProseRenderer blocks={post.content} />
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
