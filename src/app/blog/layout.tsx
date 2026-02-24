import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Product updates, design thinking, engineering deep-dives, and customer stories from the mai-bap team.',
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
