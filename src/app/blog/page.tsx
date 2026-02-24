'use client'

import { useState } from 'react'
import { posts } from '@/content/blog'
import { siteConfig } from '@/config/site'
import PostCard from '@/components/blog/PostCard'
import { PageHeader, Container, MetaLabel, Divider, ToggleGroup } from '@/components/ui'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? posts
      : posts.filter(p => p.category === activeCategory)
  const featured = filtered.find(p => p.featured)
  const rest = filtered.filter(p => !p.featured)

  return (
    <div className="bg-braun-50 min-h-screen pt-14">
      <PageHeader
        label="Journal"
        title={<>Product, design &amp; engineering.</>}
        subtitle="Updates, thinking, and stories from the team building Meridian."
      />

      {/* Category filters */}
      <Container className="pt-8">
        <ToggleGroup
          options={siteConfig.blog.categories}
          value={activeCategory}
          onChange={setActiveCategory}
          className="gap-2"
        />
      </Container>

      <Container className="py-12">
        {filtered.length === 0 ? (
          <p className="text-sm text-braun-500 py-12 text-center">
            No posts in this category yet.
          </p>
        ) : (
          <>
            {/* Featured */}
            {featured && (
              <div className="mb-10">
                <MetaLabel as="div" size="xxs" color="dim" className="mb-4">
                  Featured
                </MetaLabel>
                <PostCard post={featured} featured />
              </div>
            )}

            {/* Divider */}
            <Divider label="All posts" className="mb-10" />

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map(post => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}
      </Container>
    </div>
  )
}
