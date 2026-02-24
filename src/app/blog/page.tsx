import { getAllPosts } from '@/lib/mdx'
import { BlogIndex } from '@/components/blog/BlogIndex'

export default async function BlogPage() {
  const posts = getAllPosts()
  return <BlogIndex posts={posts} />
}
