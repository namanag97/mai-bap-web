/**
 * ProcessFlow — McKinsey-quality SVG process diagram.
 * Server component: pure SVG, zero JS.
 *
 * Usage:
 *   <ProcessFlow steps="Receive --> Validate --> Approve --> Close" caption="Fig. 1" />
 *   <ProcessFlow steps="Receive --> Validate --> {Approve | Reject}" />
 *
 * Syntax:
 *   "A --> B --> C"       — sequential steps
 *   "{A | B}"             — branch (rendered as split paths)
 */

interface ProcessFlowProps {
  steps: string
  caption?: string
  className?: string
}

interface Step {
  label: string
  isBranch?: boolean
  branches?: string[]
}

function parseSteps(input: string): Step[] {
  return input.split(/\s*-->\s*/).map(token => {
    const branchMatch = token.trim().match(/^\{(.+)\}$/)
    if (branchMatch) {
      const branches = branchMatch[1].split(/\s*\|\s*/)
      return { label: branches.join(' | '), isBranch: true, branches }
    }
    return { label: token.trim() }
  })
}

const BOX_W = 110
const BOX_H = 36
const ARROW_W = 32
const GAP = BOX_W + ARROW_W
const BRANCH_OFFSET = 28

export function ProcessFlow({ steps, caption, className }: ProcessFlowProps) {
  const parsed = parseSteps(steps)
  const totalSteps = parsed.length
  const svgWidth = totalSteps * BOX_W + (totalSteps - 1) * ARROW_W + 16
  const hasBranch = parsed.some(s => s.isBranch)
  const svgHeight = hasBranch ? BOX_H + BRANCH_OFFSET * 2 + 16 : BOX_H + 16
  const cy = svgHeight / 2

  const elements: React.ReactNode[] = []

  parsed.forEach((step, i) => {
    const x = 8 + i * GAP

    if (step.isBranch && step.branches && step.branches.length >= 2) {
      // Draw two branch boxes vertically offset
      const branchBoxW = BOX_W
      const offsets = [-BRANCH_OFFSET, BRANCH_OFFSET]

      // Incoming connector to branch point
      elements.push(
        <line
          key={`branch-in-${i}`}
          x1={x - ARROW_W + 6}
          y1={cy}
          x2={x + branchBoxW / 2 - 1}
          y2={cy - offsets[0]}
          stroke="var(--color-border-strong)"
          strokeWidth="1"
        />,
        <line
          key={`branch-in2-${i}`}
          x1={x - ARROW_W + 6}
          y1={cy}
          x2={x + branchBoxW / 2 - 1}
          y2={cy - offsets[1]}
          stroke="var(--color-border-strong)"
          strokeWidth="1"
        />
      )

      step.branches.forEach((label, bi) => {
        const by = cy - offsets[bi]
        elements.push(
          <rect
            key={`branch-box-${i}-${bi}`}
            x={x}
            y={by - BOX_H / 2}
            width={branchBoxW}
            height={BOX_H}
            fill="var(--color-surface-inset)"
            stroke="var(--color-border-default)"
            strokeWidth="1"
          />,
          <text
            key={`branch-text-${i}-${bi}`}
            x={x + branchBoxW / 2}
            y={by + 5}
            textAnchor="middle"
            fontSize="10"
            fontFamily="var(--font-mono)"
            fill="var(--color-ink-secondary)"
          >
            {label}
          </text>
        )
      })
    } else {
      // Standard sequential box
      elements.push(
        <rect
          key={`box-${i}`}
          x={x}
          y={cy - BOX_H / 2}
          width={BOX_W}
          height={BOX_H}
          fill="var(--color-surface-inset)"
          stroke="var(--color-border-default)"
          strokeWidth="1"
        />,
        <text
          key={`text-${i}`}
          x={x + BOX_W / 2}
          y={cy + 4}
          textAnchor="middle"
          fontSize="10"
          fontFamily="var(--font-mono)"
          fill="var(--color-ink-secondary)"
        >
          {step.label}
        </text>
      )
    }

    // Arrow between steps
    if (i < totalSteps - 1) {
      const arrowX = x + BOX_W
      elements.push(
        <line
          key={`arrow-line-${i}`}
          x1={arrowX}
          y1={cy}
          x2={arrowX + ARROW_W - 6}
          y2={cy}
          stroke="var(--color-border-strong)"
          strokeWidth="1"
        />,
        <polygon
          key={`arrow-head-${i}`}
          points={`${arrowX + ARROW_W - 6},${cy - 4} ${arrowX + ARROW_W},${cy} ${arrowX + ARROW_W - 6},${cy + 4}`}
          fill="var(--color-border-strong)"
        />
      )
    }
  })

  return (
    <figure className={`my-8 ${className ?? ''}`}>
      <div className="overflow-x-auto">
        <svg
          width={svgWidth}
          height={svgHeight}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          xmlns="http://www.w3.org/2000/svg"
          aria-label={caption ?? steps}
          role="img"
          style={{ display: 'block', maxWidth: '100%' }}
        >
          {elements}
        </svg>
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-[0.6875rem] uppercase tracking-widest text-ink-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
