import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { posts, getPost, formatDate, type ContentBlock } from '@/content/blog'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

const categoryStyle: Record<string, string> = {
  Product:      'text-braun-900 border-braun-900 bg-braun-50',
  Design:       'text-data-violet border-data-violet bg-violet-50',
  'Case Study': 'text-data-positive border-data-positive bg-emerald-50',
  Engineering:  'text-braun-orange border-braun-orange bg-orange-50',
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case 'h2':   return <h2 key={i}>{block.text}</h2>
    case 'h3':   return <h3 key={i}>{block.text}</h3>
    case 'p':    return <p key={i}>{block.text}</p>
    case 'list':
      return (
        <ul key={i}>
          {block.items?.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      )
    case 'code':
      return (
        <pre key={i}><code>{block.text}</code></pre>
      )
    case 'note':
      return <div key={i} className="note">{block.text}</div>
    default:
      return null
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const catCls = categoryStyle[post.category] ?? 'text-braun-500 border-braun-200 bg-braun-50'

  return (
    <div className="bg-braun-50 min-h-screen pt-14">
      {/* Header */}
      <div className="border-b border-braun-200 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-14">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-braun-400 hover:text-braun-900 transition-colors mb-10"
          >
            <ArrowLeft size={10} />
            Journal
          </Link>

          <div className={`inline-block text-[9px] font-mono uppercase tracking-widest border px-2 py-0.5 mb-5 ${catCls}`}>
            {post.category}
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-braun-900 leading-tight mb-5">
            {post.title}
          </h1>

          <p className="text-base text-braun-500 font-light leading-relaxed mb-10 max-w-2xl">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between border-t border-braun-100 pt-6">
            <div className="flex items-center gap-3">
              {/* Author initial avatar */}
              <div className="w-8 h-8 bg-braun-900 text-white flex items-center justify-center text-xs font-mono font-bold">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <div className="text-xs font-semibold text-braun-800">{post.author.name}</div>
                <div className="text-[9px] font-mono text-braun-400 uppercase tracking-widest">
                  {post.author.role}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-braun-500">{formatDate(post.date)}</div>
              <div className="text-[9px] font-mono text-braun-400 uppercase tracking-widest">
                {post.readTime} min read
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-6 py-14">
        <article className="prose bg-white border border-braun-200 px-8 md:px-14 py-12">
          {post.content.map((block, i) => renderBlock(block, i))}
        </article>

        {/* Footer nav */}
        <div className="mt-10 pt-6 border-t border-braun-200 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-braun-400 hover:text-braun-900 transition-colors"
          >
            <ArrowLeft size={10} />
            All posts
          </Link>
          <div className="text-[10px] font-mono text-braun-300 uppercase tracking-widest">
            Meridian Journal
          </div>
        </div>
      </div>
    </div>
  )
}
