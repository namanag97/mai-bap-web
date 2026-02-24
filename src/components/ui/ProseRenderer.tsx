/**
 * ProseRenderer — renders ContentBlock[] using proper DS components.
 * Used by both blog posts and docs pages to guarantee visual consistency.
 *
 * Block type → visual treatment:
 *   lead        Large intro paragraph (slightly larger, lighter)
 *   p           Standard body (text-sm, ink-secondary, 1.75 leading)
 *   h2          Major section heading + rule underline
 *   h3          Sub-section heading, no rule
 *   h4          Minor heading, smaller, dimmer
 *   code        Dark terminal block (CodeBlock)
 *   diagram     ASCII art on warm paper (AsciiDiagram) — letter-spacing:0 kills jank
 *   list        Em-dash bullets (Bauhaus/Swiss pattern)
 *   blockquote  Editorial pull quote with left border + optional attribution
 *   note        Informational callout (neutral)
 *   warning     Warning callout (red)
 *   tip         Positive callout (green)
 *   divider     Horizontal section break
 */
import { CodeBlock } from './CodeBlock'
import { Callout } from './Callout'
import { AsciiDiagram } from './AsciiDiagram'
import type { ContentBlock } from '@/content/types'

interface ProseRendererProps {
  blocks: ContentBlock[]
}

export function ProseRenderer({ blocks }: ProseRendererProps) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {

          /* ── Lead paragraph — large intro ──────────────────────────── */
          case 'lead':
            return (
              <p
                key={i}
                className="text-base text-ink-secondary font-light leading-[1.8]"
              >
                {block.text}
              </p>
            )

          /* ── Headings ──────────────────────────────────────────────── */
          case 'h2':
            return (
              <h2
                key={i}
                className="text-base font-semibold text-ink-primary tracking-tight border-b border-border-default pb-2.5 pt-8 mt-10 first:mt-0 leading-snug"
              >
                {block.text}
              </h2>
            )

          case 'h3':
            return (
              <h3
                key={i}
                className="text-sm font-semibold text-ink-primary pt-2 mt-7 first:mt-0 leading-snug"
              >
                {block.text}
              </h3>
            )

          case 'h4':
            return (
              <h4
                key={i}
                className="text-xs font-semibold uppercase tracking-widest text-ink-muted mt-5 first:mt-0"
              >
                {block.text}
              </h4>
            )

          /* ── Body paragraph ─────────────────────────────────────────── */
          case 'p':
            return (
              <p
                key={i}
                className="text-sm text-ink-secondary leading-[1.75]"
              >
                {block.text}
              </p>
            )

          /* ── List — em-dash bullets (DS pattern) ───────────────────── */
          case 'list':
            return (
              <ul key={i} className="space-y-2">
                {block.items?.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="font-mono text-ink-dim shrink-0 select-none mt-[0.1em]">—</span>
                    <span className="text-sm text-ink-secondary leading-[1.75]">{item}</span>
                  </li>
                ))}
              </ul>
            )

          /* ── Blockquote — editorial pull quote ──────────────────────── */
          case 'blockquote':
            return (
              <blockquote
                key={i}
                className="border-l-2 border-border-strong pl-5 py-1"
              >
                <p className="text-sm text-ink-secondary leading-[1.75] italic">
                  &ldquo;{block.text}&rdquo;
                </p>
                {block.attribution && (
                  <footer className="mt-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted not-italic">
                      — {block.attribution}
                    </span>
                  </footer>
                )}
              </blockquote>
            )

          /* ── Code — DS terminal component ──────────────────────────── */
          case 'code':
            return (
              <CodeBlock
                key={i}
                code={block.text ?? ''}
                lang={block.lang ?? 'code'}
              />
            )

          /* ── ASCII Diagram — warm paper monospace block ─────────────── */
          case 'diagram':
            return (
              <AsciiDiagram
                key={i}
                code={block.text ?? ''}
                caption={block.caption}
              />
            )

          /* ── Callouts ──────────────────────────────────────────────── */
          case 'note':
            return <Callout key={i} type="note">{block.text}</Callout>

          case 'warning':
            return <Callout key={i} type="warning">{block.text}</Callout>

          case 'tip':
            return <Callout key={i} type="tip">{block.text}</Callout>

          /* ── Divider — section break ────────────────────────────────── */
          case 'divider':
            return <div key={i} className="divider my-8" />

          default:
            return null
        }
      })}
    </div>
  )
}
