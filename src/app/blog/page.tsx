'use client'

import { useState } from 'react'
import { posts } from '@/content/blog'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import PostCard from '@/components/blog/PostCard'

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
      {/* Page header */}
      <div className="border-b border-braun-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-[10px] font-mono uppercase tracking-widest text-braun-400 mb-4">
            Journal
          </div>
          <h1 className="text-3xl lg:text-4xl font-light tracking-tight text-braun-900 mb-3 leading-tight">
            Product, design &amp; engineering.
          </h1>
          <p className="text-sm text-braun-500 max-w-sm leading-relaxed">
            Updates, thinking, and stories from the team building Meridian.
          </p>
        </div>
      </div>

      {/* Category filters */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="flex flex-wrap gap-2">
          {siteConfig.blog.categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest border transition-colors duration-200',
                activeCategory === cat
                  ? 'bg-braun-900 text-white border-braun-900'
                  : 'bg-transparent text-braun-500 border-braun-200 hover:border-braun-900 hover:text-braun-900'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {filtered.length === 0 ? (
          <p className="text-sm text-braun-500 py-12 text-center">
            No posts in this category yet.
          </p>
        ) : (
          <>
            {/* Featured */}
            {featured && (
              <div className="mb-10">
                <div className="text-[9px] font-mono uppercase tracking-widest text-braun-400 mb-4">
                  Featured
                </div>
                <PostCard post={featured} featured />
              </div>
            )}

            {/* Divider */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-braun-200" />
              <span className="text-[9px] font-mono uppercase tracking-widest text-braun-500 px-2">
                All posts
              </span>
              <div className="flex-1 h-px bg-braun-200" />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map(post => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
