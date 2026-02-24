/**
 * Figure — wraps SVG or image files with brand caption styling.
 * Matches the bleed margin of .prose pre (-1.5rem sides).
 *
 * Usage:
 *   <Figure src="/diagrams/tco-chart.svg" caption="Exhibit 1 — TCO comparison" label="Exhibit 1" />
 */

interface FigureProps {
  src: string
  caption?: string
  label?: string
  alt?: string
  className?: string
}

export function Figure({ src, caption, label, alt, className }: FigureProps) {
  const isSvg = src.endsWith('.svg')

  return (
    <figure
      className={`my-8 -mx-6 border border-border-subtle bg-surface-raised ${className ?? ''}`}
    >
      <div className="p-6">
        {isSvg ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt ?? caption ?? label ?? ''}
            className="w-full h-auto"
            loading="lazy"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt ?? caption ?? label ?? ''}
            className="w-full h-auto"
            loading="lazy"
          />
        )}
      </div>
      {(label || caption) && (
        <div className="border-t border-border-subtle px-6 py-3 flex items-baseline gap-3">
          {label && (
            <span className="font-mono text-[0.625rem] uppercase tracking-widest text-ink-accent shrink-0">
              {label}
            </span>
          )}
          {caption && (
            <span className="font-mono text-[0.6875rem] uppercase tracking-widest text-ink-muted">
              {caption}
            </span>
          )}
        </div>
      )}
    </figure>
  )
}
