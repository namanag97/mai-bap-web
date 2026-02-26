/**
 * AsciiDiagram — two variants:
 *
 * variant="inline" (default for simple diagrams)
 *   No box, no background, no border. Indented mono text that sits in the
 *   prose column as if it's part of the sentence — because it is.
 *   Use for: arrows, short flows, simple A → B relationships.
 *
 * variant="block"
 *   Subtle bordered box on surface-inset. Use for: complex diagrams with
 *   many rows, ASCII tables, pipeline charts.
 *
 * The jank fix: letter-spacing: 0. Geist Mono is monospace but inheriting
 * a non-zero letter-spacing from a parent breaks the column alignment.
 *
 * MDX note: blank lines inside a JSX block make MDX wrap content in <p>
 * elements rather than passing a plain string. childrenToText() handles both.
 */
import { isValidElement, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

// MDX sometimes compiles children as React elements (<p> wrapping text) rather
// than a plain string when the block contains blank lines. This walks the tree
// and extracts the raw text, preserving newlines within paragraphs.
function childrenToText(node: ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (!node) return ''
  if (Array.isArray(node)) return node.map(childrenToText).join('')
  if (isValidElement(node)) {
    const { children: c } = node.props as { children?: ReactNode }
    return childrenToText(c)
  }
  return ''
}

interface AsciiDiagramProps {
  code?: string
  caption?: string
  variant?: 'block' | 'inline'
  className?: string
  children?: ReactNode
}

export function AsciiDiagram({
  code,
  caption,
  variant = 'block',
  className,
  children,
}: AsciiDiagramProps) {
  const source = code ?? childrenToText(children)
  const trimmed = source.replace(/^\n+|\n+$/g, '')

  if (variant === 'inline') {
    return (
      <figure className={cn('my-0', className)}>
        <div className="pl-5">
          <pre className="m-0 w-full overflow-x-auto">
            <code className="prose-diagram-inline">{trimmed}</code>
          </pre>
        </div>
        {caption && (
          <figcaption className="mt-2 pl-5">
            <span className="meta-label meta-label-xxs meta-label-dim">{caption}</span>
          </figcaption>
        )}
      </figure>
    )
  }

  return (
    <figure className={cn('my-0', className)}>
      <div className="w-full border border-border-default bg-surface-inset overflow-x-auto">
        <pre className="px-6 py-5 m-0">
          <code className="prose-diagram">{trimmed}</code>
        </pre>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center">
          <span className="meta-label meta-label-xxs meta-label-dim">{caption}</span>
        </figcaption>
      )}
    </figure>
  )
}
