/**
 * CodeBlock — matches the DS terminal/processing view pattern exactly.
 * Dark bg-surface-inverse, header bar with language label, monospace body.
 */
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  code: string
  lang?: string
  className?: string
}

export function CodeBlock({ code, lang = 'code', className }: CodeBlockProps) {
  // Normalise: trim leading/trailing blank lines
  const trimmed = code.replace(/^\n+|\n+$/g, '')

  return (
    <div className={cn('border border-border-default overflow-hidden', className)}>
      {/* Header bar — bg-surface-inverse matches DS terminal header */}
      <div className="flex items-center justify-between px-4 py-2 bg-surface-inverse border-b border-border-default">
        <span className="text-[9px] font-mono uppercase tracking-widest text-ink-muted">
          {lang}
        </span>
        {/* Decorative dots — matches DS window chrome */}
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-sm bg-surface-inverse" />
          <span className="w-1.5 h-1.5 rounded-sm bg-surface-inverse" />
          <span className="w-1.5 h-1.5 rounded-sm bg-surface-inverse" />
        </div>
      </div>

      {/* Code body — bg-surface-inverse, JetBrains Mono */}
      <pre className="bg-surface-inverse px-5 py-4 overflow-x-auto m-0">
        <code
          className="text-ink-dim font-mono text-[0.8125rem] leading-[1.75]"
          style={{ fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)' }}
        >
          {trimmed}
        </code>
      </pre>
    </div>
  )
}
