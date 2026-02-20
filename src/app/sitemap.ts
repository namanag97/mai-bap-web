import type { MetadataRoute } from 'next'
import { posts } from '@/content/blog'
import { navigation } from '@/content/docs'

const BASE_URL = 'https://namanag97.github.io/meridian-web'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  const blogPages = posts.map(post => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const docPages = navigation.flatMap(section =>
    section.pages.map(page => ({
      url: `${BASE_URL}/docs/${page.slug.join('/')}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  return [...staticPages, ...blogPages, ...docPages]
}
