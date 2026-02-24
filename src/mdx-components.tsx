import type { MDXComponents } from 'mdx/types'
import { Callout } from '@/components/ui/Callout'
import { ProcessFlow } from '@/components/ui/ProcessFlow'
import { Figure } from '@/components/ui/Figure'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // ── Headings — rehype-slug adds id attributes automatically
    h2: ({ children, id, ...props }) => (
      <h2 id={id} {...props}>
        {children}
      </h2>
    ),

    // ── Links — prose styles applied via .prose a in globals.css
    a: ({ children, href, ...props }) => (
      <a href={href} {...props}>
        {children}
      </a>
    ),

    // ── Images — lazy loading + figure wrapper
    img: ({ src, alt }) => (
      <figure className="my-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? ''}
          loading="lazy"
          className="w-full"
        />
        {alt && (
          <figcaption className="mt-2 text-center font-mono text-[0.6875rem] uppercase tracking-widest text-ink-muted">
            {alt}
          </figcaption>
        )}
      </figure>
    ),

    // ── Custom components available in every MDX file
    Callout,
    ProcessFlow,
    Figure,

    // ── Spread any components passed by compileMDX caller
    ...components,
  }
}
