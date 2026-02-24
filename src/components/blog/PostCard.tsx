import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { PostMeta } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { Badge, MetaLabel } from '@/components/ui'

type BadgeVariant = 'neutral' | 'violet' | 'success' | 'orange'

const categoryBadge: Record<string, BadgeVariant> = {
  Product:      'neutral',
  Design:       'violet',
  'Case Study': 'success',
  Engineering:  'orange',
}

interface Props {
  post: PostMeta
  featured?: boolean
}

export default function PostCard({ post, featured = false }: Props) {
  const variant = categoryBadge[post.category] ?? 'neutral'

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group block card hover:border-border-strong transition-colors duration-300 hover-lift"
      >
        <div className="grid md:grid-cols-[1fr_280px] divide-y md:divide-y-0 md:divide-x divide-border-default">

          {/* Main content */}
          <div className="p-10 md:p-12 flex flex-col justify-between gap-10">
            <div>
              <div className="flex items-center gap-3 mb-7">
                <Badge variant={variant}>{post.category}</Badge>
                <MetaLabel as="span" size="xxs" color="dim">
                  {formatDate(post.date)}
                </MetaLabel>
              </div>

              <h2
                className="font-light tracking-tight text-ink-primary leading-tight mb-5 group-hover:text-ink-accent transition-colors duration-300"
                style={{ fontSize: 'clamp(1.375rem, 2.75vw, 2rem)' }}
              >
                {post.title}
              </h2>

              <p className="text-sm text-ink-muted leading-relaxed max-w-md">
                {post.excerpt}
              </p>
            </div>

            {/* Read more */}
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-mono uppercase tracking-widest text-ink-muted group-hover:text-ink-primary transition-colors duration-200">
                Read article
              </span>
              <ArrowRight
                size={11}
                className="text-ink-dim group-hover:text-ink-primary group-hover:translate-x-1 transition-all duration-300"
              />
            </div>
          </div>

          {/* Meta sidebar */}
          <div className="p-10 bg-surface-ground flex flex-col justify-between gap-8">
            <div>
              <MetaLabel as="div" size="xxs" color="dim" className="mb-5">Author</MetaLabel>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-surface-inverse text-ink-inverse flex items-center justify-center font-mono font-bold text-xs shrink-0 select-none">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-semibold text-ink-primary leading-none mb-1">
                    {post.author.name}
                  </div>
                  <MetaLabel as="div" size="xxs" color="dim">
                    {post.author.role}
                  </MetaLabel>
                </div>
              </div>
            </div>

            <div className="border-t border-border-subtle pt-6 space-y-2">
              <MetaLabel size="xxs" color="dim" as="div">
                {formatDate(post.date)}
              </MetaLabel>
              <MetaLabel size="xxs" as="div">
                {post.readTime} min read
              </MetaLabel>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  /* Regular card */
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col card hover:border-border-strong transition-colors duration-300 hover-lift"
    >
      <div className="p-7 flex flex-col flex-1 gap-5">
        <div className="flex items-start justify-between gap-3">
          <Badge variant={variant}>{post.category}</Badge>
          <MetaLabel size="xxs" color="dim" as="span">{post.readTime} min</MetaLabel>
        </div>

        <div className="flex-1">
          <h3
            className="font-semibold tracking-tight text-ink-primary leading-snug mb-3 group-hover:text-ink-accent transition-colors duration-300"
            style={{ fontSize: 'clamp(0.9375rem, 1.25vw, 1.0625rem)' }}
          >
            {post.title}
          </h3>
          <p className="text-xs text-ink-muted leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="border-t border-border-subtle px-7 py-4 flex items-center justify-between">
        <MetaLabel size="xxs" color="dim">
          {formatDate(post.date)}
        </MetaLabel>
        <div className="flex items-center gap-1.5 text-ink-dim group-hover:text-ink-primary transition-colors duration-200">
          <span className="text-[8px] font-mono uppercase tracking-widest">Read</span>
          <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </div>
      </div>
    </Link>
  )
}
