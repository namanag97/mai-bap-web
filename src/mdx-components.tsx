/**
 * MDX component map — passed to compileMDX in article pages.
 * Centralises all custom MDX component wiring in one place.
 */
import type { MDXComponents } from 'mdx/types'
import { Callout } from '@/components/ui/Callout'
import { ProcessFlow } from '@/components/ui/ProcessFlow'
import { Figure } from '@/components/ui/Figure'

export const mdxComponents: MDXComponents = {
  // ── Headings — rehype-slug adds id attributes
  h2: ({ children, id, ...props }) => (
    <h2 id={id} {...props}>
      {children}
    </h2>
  ),

  // ── Images — lazy loading + optional figcaption from alt text
  img: ({ src, alt }) => (
    <figure className="my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt ?? ''} loading="lazy" className="w-full" />
      {alt && (
        <figcaption className="mt-2 text-center font-mono text-[0.6875rem] uppercase tracking-widest text-ink-muted">
          {alt}
        </figcaption>
      )}
    </figure>
  ),

  // ── Custom shortcodes
  Callout,
  ProcessFlow,
  Figure,
}
