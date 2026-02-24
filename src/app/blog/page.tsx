'use client'

import { useState } from 'react'
import { posts } from '@/content/blog'
import { siteConfig } from '@/config/site'
import PostCard from '@/components/blog/PostCard'
import { Container, MetaLabel, Divider, ToggleGroup } from '@/components/ui'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? posts
      : posts.filter(p => p.category === activeCategory)
  const featured = filtered.find(p => p.featured)
  const rest = filtered.filter(p => !p.featured)

  return (
    <div className="bg-surface-ground min-h-screen pt-14">

      {/* ── Page header ────────────────────────────────────────── */}
      <div className="section">
        <Container className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <MetaLabel as="div" color="dim" className="mb-5">
                {siteConfig.blog.sectionLabel}
              </MetaLabel>
              <h1
                className="font-light tracking-tight text-ink-primary leading-tight"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
              >
                {siteConfig.blog.title}
              </h1>
              <p className="article-deck mt-5 max-w-md">
                {siteConfig.blog.subtitle}
              </p>
            </div>

            {/* Category filter — right-aligned on desktop */}
            <div className="lg:pb-1">
              <MetaLabel as="div" size="xxs" color="dim" className="mb-3 hidden lg:block">
                Filter by
              </MetaLabel>
              <ToggleGroup
                options={siteConfig.blog.categories}
                value={activeCategory}
                onChange={setActiveCategory}
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile category filter */}
      <div className="lg:hidden border-b border-border-default bg-surface-ground">
        <Container className="py-4">
          <ToggleGroup
            options={siteConfig.blog.categories}
            value={activeCategory}
            onChange={setActiveCategory}
          />
        </Container>
      </div>

      <Container className="py-14">
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-sm text-ink-muted">No posts in this category yet.</p>
          </div>
        ) : (
          <>
            {/* Featured */}
            {featured && (
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <MetaLabel as="span" size="xxs" color="dim">Featured</MetaLabel>
                  <span className="section-label-rule" />
                </div>
                <PostCard post={featured} featured />
              </div>
            )}

            {/* All posts */}
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
