/**
 * ProseRenderer — pure semantic HTML structure.
 * ALL visual styling lives in the .prose class in globals.css (Layer 3).
 * This component is just a structured switch over ContentBlock types.
 *
 * To change how prose looks: edit .prose in globals.css.
 * To add a new block type: add to ContentBlock in types.ts + add a case here.
 */
import { CodeBlock } from './CodeBlock'
import { Callout } from './Callout'
import type { ContentBlock } from '@/content/types'

interface ProseRendererProps {
  blocks: ContentBlock[]
}

export function ProseRenderer({ blocks }: ProseRendererProps) {
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        switch (block.type) {

          case 'lead':
            return <p key={i} className="prose-lead">{block.text}</p>

          case 'h2':
            return <h2 key={i}>{block.text}</h2>

          case 'h3':
            return <h3 key={i}>{block.text}</h3>

          case 'h4':
            return <h4 key={i}>{block.text}</h4>

          case 'p':
            return <p key={i}>{block.text}</p>

          case 'list':
            return (
              <ul key={i}>
                {block.items?.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )

          case 'blockquote':
            return (
              <blockquote key={i}>
                <p>&ldquo;{block.text}&rdquo;</p>
                {block.attribution && (
                  <footer>{block.attribution}</footer>
                )}
              </blockquote>
            )

          case 'code':
            return (
              <CodeBlock
                key={i}
                code={block.text ?? ''}
                lang={block.lang ?? 'code'}
              />
            )

          case 'diagram':
            return (
              <pre key={i}>
                <code>{block.text ?? ''}</code>
              </pre>
            )

          case 'note':
            return <Callout key={i} type="note">{block.text}</Callout>

          case 'warning':
            return <Callout key={i} type="warning">{block.text}</Callout>

          case 'tip':
            return <Callout key={i} type="tip">{block.text}</Callout>

          case 'divider':
            return <hr key={i} />

          default:
            return null
        }
      })}
    </div>
  )
}
