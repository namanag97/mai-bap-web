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
        <div className="pl-5">
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
