/**
 * Shared content block type used by both blog posts and docs pages.
 * Single source of truth — ProseRenderer handles all variants.
 *
 * Block types:
 *   lead        — large intro paragraph (first para of article)
 *   p           — standard body paragraph
 *   h2          — major section heading (with rule underline)
 *   h3          — sub-section heading
 *   h4          — minor heading (no border, lighter weight)
 *   code        — syntax-highlighted code block (dark terminal)
 *   diagram     — ASCII diagram block (warm paper, monospace, no jank)
 *   list        — em-dash bulleted list
 *   blockquote  — editorial pull quote with optional attribution
 *   note        — informational callout (neutral)
 *   warning     — warning callout (red border)
 *   tip         — positive callout (green border)
 *   divider     — horizontal section break
 */
export interface ContentBlock {
  type:
    | 'lead'
    | 'p'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'code'
    | 'diagram'
    | 'list'
    | 'blockquote'
    | 'note'
    | 'warning'
    | 'tip'
    | 'divider'
  text?: string
  items?: string[]
  lang?: string
  caption?: string       // diagram: caption below the box
  attribution?: string   // blockquote: attribution line
}
