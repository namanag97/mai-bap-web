/**
 * AsciiDiagram — renders ASCII art / diagrams on warm paper.
 *
 * Why this exists instead of using <code>:
 *   ASCII art requires ALL characters to be exactly equal-width.
 *   Geist Mono is already monospace — the jank comes from letter-spacing
 *   inherited from parent styles. The .prose-diagram class sets
 *   letter-spacing:0 explicitly, which eliminates misalignment entirely.
 *
 * Warm paper (surface-inset) instead of dark (surface-inverse) keeps
 * diagrams feeling like part of a technical document rather than a
 * code snippet. The distinction matters for design language consistency.
 */
import { cn } from '@/lib/utils'

interface AsciiDiagramProps {
  code: string
  caption?: string
  className?: string
}

export function AsciiDiagram({ code, caption, className }: AsciiDiagramProps) {
  const trimmed = code.replace(/^\n+|\n+$/g, '')

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
