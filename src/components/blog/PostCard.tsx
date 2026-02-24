import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { type BlogPost, formatDate } from '@/content/blog'
import { Badge, MetaLabel } from '@/components/ui'

type BadgeVariant = 'neutral' | 'violet' | 'success' | 'orange'

const categoryBadge: Record<string, BadgeVariant> = {
  Product:      'neutral',
  Design:       'violet',
  'Case Study': 'success',
  Engineering:  'orange',
}

interface Props {
  post: BlogPost
  featured?: boolean
}

export default function PostCard({ post, featured = false }: Props) {
  const variant = categoryBadge[post.category] ?? 'neutral'

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group block bg-surface-raised border border-border-default hover:border-braun-900 transition-colors duration-300 hover-lift"
      >
        <div className="grid md:grid-cols-[1fr_320px] gap-0 divide-y md:divide-y-0 md:divide-x divide-border-default">
          {/* Main content */}
          <div className="p-8 md:p-10">
            <Badge variant={variant} className="mb-5">
              {post.category}
            </Badge>
            <h2 className="text-xl lg:text-2xl font-light tracking-tight text-braun-900 leading-snug mb-4 group-hover:text-braun-orange transition-colors duration-300">
              {post.title}
            </h2>
            <p className="text-sm text-braun-500 leading-relaxed">{post.excerpt}</p>
          </div>

          {/* Meta */}
          <div className="p-8 md:p-10 flex flex-col justify-between bg-surface-ground">
            <MetaLabel as="div" color="dim">
              {formatDate(post.date)}
            </MetaLabel>
            <div className="mt-6 space-y-4">
              <div>
                <div className="text-xs font-semibold text-braun-800">{post.author.name}</div>
                <MetaLabel as="div" color="dim" className="mt-0.5">
                  {post.author.role}
                </MetaLabel>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border-default">
                <MetaLabel color="dim">
                  {post.readTime} min read
                </MetaLabel>
                <ArrowRight
                  size={13}
                  className="text-braun-300 group-hover:text-braun-900 group-hover:translate-x-1 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white border border-braun-200 hover:border-braun-900 transition-colors duration-300 hover-lift"
    >
      <div className="p-6 flex flex-col flex-1">
        <Badge variant={variant} className="mb-4 self-start">
          {post.category}
        </Badge>
        <h3 className="text-sm font-semibold tracking-tight text-braun-900 leading-snug mb-3 flex-1 group-hover:text-braun-orange transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-xs text-braun-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
      </div>
      <div className="border-t border-braun-100 px-6 py-3 flex items-center justify-between">
        <MetaLabel size="xxs" color="dim">
          {formatDate(post.date)}
        </MetaLabel>
        <MetaLabel size="xxs">
          {post.readTime} min
        </MetaLabel>
      </div>
    </Link>
  )
}
