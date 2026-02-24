/**
 * AsciiDiagram — two modes:
 *
 * variant="block" (default)
 *   For complex diagrams: bordered box on surface-inset.
 *   Looks like a figure in a technical document.
 *
 * variant="inline"
 *   For simple diagrams (an arrow, a short flow): no box, no background.
 *   Just mono text in the prose column, anchored by a hairline left rule.
 *   Feels like part of the text — because it IS part of the text.
 *
 * The key to eliminating ASCII jank: letter-spacing: 0.
 * Geist Mono is monospace, so all chars are equal-width once you
 * kill any inherited letter-spacing. The .prose-diagram* classes handle this.
 */
import { cn } from '@/lib/utils'

interface AsciiDiagramProps {
  code: string
  caption?: string
  variant?: 'block' | 'inline'
  className?: string
}

export function AsciiDiagram({
  code,
  caption,
  variant = 'block',
  className,
}: AsciiDiagramProps) {
  const trimmed = code.replace(/^\n+|\n+$/g, '')

  if (variant === 'inline') {
    return (
      <figure className={cn('my-0', className)}>
        <div className="border-l-2 border-border-subtle pl-5 py-1">
          <pre className="m-0 overflow-x-auto">
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
      <div className="border border-border-default bg-surface-inset overflow-x-auto">
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
