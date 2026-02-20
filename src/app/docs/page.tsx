import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Documentation' }

export default function DocsIndexPage() {
  return (
    <div className="px-8 lg:px-16 py-16">
      <h1 className="text-2xl font-light tracking-tight text-braun-900 mb-4">Documentation</h1>
      <p className="text-sm text-braun-500 font-light leading-relaxed mb-8 max-w-lg">
        Everything you need to get started with Meridian — from installation to building custom dashboards.
      </p>
      <Link
        href="/docs/introduction"
        className="px-5 py-2.5 text-[11px] font-mono font-bold uppercase tracking-widest bg-braun-900 text-white border border-braun-900 hover:bg-braun-800 transition-colors inline-block"
      >
        Start with Introduction
      </Link>
    </div>
  )
}
