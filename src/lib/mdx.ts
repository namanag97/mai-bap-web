import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
export { formatDate } from '@/lib/utils'

const POSTS_DIR = path.join(process.cwd(), 'src/content/posts')

export interface PostMeta {
  slug: string
  title: string
  category: string
  excerpt: string
  date: string
  author: { name: string; role: string }
  readTime: number
  featured?: boolean
}

export interface PostFrontmatter {
  title: string
  category: string
  excerpt: string
  date: string | Date
  author: { name: string; role: string }
  readTime: number
  featured?: boolean
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return []

  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.mdx'))

  const posts: PostMeta[] = files.map(file => {
    const slug = file.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8')
    const { data } = matter(raw)
    const fm = data as PostFrontmatter

    return {
      slug,
      title: fm.title,
      category: fm.category,
      excerpt: fm.excerpt,
      date: fm.date instanceof Date ? fm.date.toISOString().split('T')[0] : fm.date,
      author: fm.author,
      readTime: fm.readTime,
      featured: fm.featured ?? false,
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostSource(slug: string): { frontmatter: PostMeta; source: string } | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const fm = data as PostFrontmatter

  return {
    frontmatter: {
      slug,
      title: fm.title,
      category: fm.category,
      excerpt: fm.excerpt,
      date: fm.date instanceof Date ? fm.date.toISOString().split('T')[0] : fm.date,
      author: fm.author,
      readTime: fm.readTime,
      featured: fm.featured ?? false,
    },
    source: content,
  }
}

