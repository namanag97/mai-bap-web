'use client'

import { useState } from 'react'
import type { PostMeta } from '@/lib/mdx'
import { siteConfig } from '@/config/site'
import PostCard from '@/components/blog/PostCard'
import { Container, MetaLabel, Divider, ToggleGroup } from '@/components/ui'

interface Props {
  posts: PostMeta[]
}

export function BlogIndex({ posts }: Props) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? posts
      : posts.filter(p => p.category === activeCategory)
  const featured = filtered.find(p => p.featured)
  const rest = filtered.filter(p => !p.featured)

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

      {/* ── Category filter bar ────────────────────────────────── */}
      <div className="border-b border-border-subtle">
        <Container className="h-12 flex items-center gap-6">
          <MetaLabel as="span" size="xxs" color="dim">Filter</MetaLabel>
          <ToggleGroup
            options={siteConfig.blog.categories}
            value={activeCategory}
            onChange={setActiveCategory}
          />
        </Container>
      </div>

      {/* ── Posts ──────────────────────────────────────────────── */}
      <Container className="py-14">
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-sm text-ink-muted">No posts in this category yet.</p>
          </div>
        ) : (
          <>
            {featured && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <MetaLabel size="xxs" color="dim">Featured</MetaLabel>
                  <span className="section-label-rule" />
                </div>
                <PostCard post={featured} featured />
              </div>
            )}

            {rest.length > 0 && (
              <>
                <Divider label="All posts" className="mb-10" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {rest.map(post => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </Container>

    </div>
  )
}
