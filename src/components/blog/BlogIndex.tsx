import type { PostMeta } from '@/lib/mdx'
import { siteConfig } from '@/config/site'
import PostCard from '@/components/blog/PostCard'
import { Container, MetaLabel } from '@/components/ui'

interface Props {
  posts: PostMeta[]
}

export function BlogIndex({ posts }: Props) {
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  // Group remaining posts by category, preserving date-sorted order within each lane
  const seenCategories = Array.from(new Set(rest.map(p => p.category)))
  const lanes = seenCategories.map(category => ({
    category,
    posts: rest.filter(p => p.category === category),
  }))

  const gridCols =
    lanes.length <= 1 ? 'md:grid-cols-1' :
    lanes.length === 2 ? 'md:grid-cols-2' :
    'md:grid-cols-3'

  return (
    <div className="min-h-screen pt-14 bg-surface-ground">

      {/* ── Page header ────────────────────────────────────────── */}
      <div className="border-b border-border-default">
        <Container className="pt-16 pb-12">
          <MetaLabel as="div" color="dim" className="mb-5">
            {siteConfig.blog.sectionLabel}
          </MetaLabel>
          <h1 className="article-title mb-5">{siteConfig.blog.title}</h1>
          <p className="article-deck max-w-md">{siteConfig.blog.subtitle}</p>
        </Container>
      </div>

      {/* ── Editorial hero — latest featured post ──────────────── */}
      {featured && (
        <div className="border-b border-border-default">
          <Container className="py-12">
            <div className="flex items-center gap-3 mb-6">
              <MetaLabel size="xxs" color="dim">Latest</MetaLabel>
              <span className="section-label-rule" />
            </div>
            <PostCard post={featured} featured />
          </Container>
        </div>
      )}

      {/* ── Category lanes ─────────────────────────────────────── */}
      {lanes.length > 0 && (
        <Container className="py-14">
          <div
            className={`grid grid-cols-1 ${gridCols} divide-y divide-border-default md:divide-y-0 md:divide-x`}
          >
            {lanes.map(({ category, posts: lanePosts }, i) => (
              <div
                key={category}
                className={[
                  'flex flex-col gap-8 py-10 md:py-0',
                  i === 0 ? 'md:pr-10' :
                  i === lanes.length - 1 ? 'md:pl-10' :
                  'md:px-10',
                ].join(' ')}
              >
                {/* Lane header */}
                <div className="flex items-center gap-3">
                  <MetaLabel as="div" color="dim">{category}</MetaLabel>
                  <div className="flex-1 divider" />
                </div>

                {/* Lane posts */}
                <div className="flex flex-col gap-5">
                  {lanePosts.map(post => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      )}

    </div>
  )
}
