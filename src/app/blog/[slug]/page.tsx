import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import { posts, getPost, formatDate } from '@/content/blog'
import { Badge, ProseRenderer, Container, MetaLabel } from '@/components/ui'

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
    <div className="bg-surface-ground min-h-screen pt-14">

      {/* ── Breadcrumb nav ─────────────────────────────────────── */}
      <div className="border-b border-border-subtle bg-surface-ground">
        <Container maxWidth="2xl" className="py-4 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest text-ink-muted hover:text-ink-primary transition-colors duration-200"
          >
            <ArrowLeft size={9} />
            Journal
          </Link>
          <Badge variant={badgeVariant}>{post.category}</Badge>
        </Container>
      </div>

      {/* ── Article header ─────────────────────────────────────── */}
      <header className="section">
        <Container maxWidth="2xl" className="pt-16 pb-12">

          {/* Title */}
          <h1 className="article-title mb-7 max-w-xl">
            {post.title}
          </h1>

          {/* Excerpt / deck */}
          <p className="article-deck max-w-lg mb-12">
            {post.excerpt}
          </p>

          {/* Author + meta row */}
          <div className="flex items-center justify-between pt-7 border-t border-border-default">
            <div className="flex items-center gap-3">
              {/* Initial avatar */}
              <div className="w-9 h-9 bg-surface-inverse text-ink-inverse flex items-center justify-center font-mono font-bold text-xs shrink-0 select-none">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-medium text-ink-primary leading-none mb-1">
                  {post.author.name}
                </div>
                <MetaLabel as="div" size="xxs" color="dim">
                  {post.author.role}
                </MetaLabel>
              </div>
            </div>

            <div className="text-right space-y-1">
              <div className="text-xs text-ink-muted">{formatDate(post.date)}</div>
              <div className="flex items-center justify-end gap-1.5">
                <Clock size={9} className="text-ink-dim" />
                <MetaLabel as="span" size="xxs" color="dim">
                  {post.readTime} min read
                </MetaLabel>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* ── Article body — text directly on warm ground ─────────── */}
      <Container maxWidth="2xl" as="article" className="py-14">
        <ProseRenderer blocks={post.content} />
      </Container>

      {/* ── Article footer ──────────────────────────────────────── */}
      <div className="border-t border-border-default bg-surface-ground">
        <Container maxWidth="2xl" className="py-8 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest text-ink-muted hover:text-ink-primary transition-colors duration-200"
          >
            <ArrowLeft size={9} />
            All posts
          </Link>
          <div className="flex items-center gap-4">
            <MetaLabel size="xxs" color="dim">
              mai-bap Journal
            </MetaLabel>
            <ArrowRight size={10} className="text-ink-dim" />
          </div>
        </Container>
      </div>

    </div>
  )
}
