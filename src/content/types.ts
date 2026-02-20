/**
 * Shared content block type used by both blog posts and docs pages.
 * Single source of truth — ProseRenderer handles all variants.
 */
export interface ContentBlock {
  type: 'p' | 'h2' | 'h3' | 'code' | 'list' | 'note' | 'warning'
  text?: string
  items?: string[]
  lang?: string
}
