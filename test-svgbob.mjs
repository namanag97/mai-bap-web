/**
 * Test: ASCII → SVG via svgbob-wasm and bob-wasm
 * Run: node test-svgbob.mjs
 * Then open test-svgbob.html in a browser.
 */

import { readFileSync, writeFileSync } from 'fs'

const ASCII = `
  TCO ($)
  |
  |                         / <-- BI (Exponential ETL/Data Eng Cost)
  |                        /
  |                       /
  |                      /
  |                     /
  |                    /
  |                   /
  | PM Base =========*===============================> (Linear Scaling)
  | Premium         /|
  | Cost           / |  <-- CROSSOVER POINT
  |               /  |
  |              /   |
  |             /    |
  0.0 +--------/-----+------------------------> Complexity (S, V, Q)
`

const ASCII2 = `
  +--------------------------------------------------+
  |  Delta NBV = NBV_PM - NBV_BI                     |
  |                                                  |
  |  = L * [ (D_PM * A_PM) - (D_BI * A_BI) ]        |
  |       -  [ TCO_PM - TCO_BI ]                     |
  |           \_________________/   \_____________/  |
  |           The Value PM Recovers  Premium PM Costs|
  +--------------------------------------------------+
`

// --- test svgbob-wasm (API: render(ascii)) ---
let svg1 = '(failed to load)'
let svg2 = '(failed to load)'
let svg3 = '(failed to load)'
let svg4 = '(failed to load)'

try {
  const mod = await import('./node_modules/svgbob-wasm/svgbob_wasm.js')
  svg1 = mod.render(ASCII)
  svg2 = mod.render(ASCII2)
  console.log('✓ svgbob-wasm: ok')
} catch (e) {
  console.log('✗ svgbob-wasm:', e.message)
}

// --- test bob-wasm (API: Bob.loadWASM() then Bob.render(ascii)) ---
try {
  const { default: Bob } = await import('./node_modules/bob-wasm/dist/index.js')
  await Bob.loadWASM()
  svg3 = Bob.render(ASCII)
  svg4 = Bob.render(ASCII2)
  console.log('✓ bob-wasm: ok')
} catch (e) {
  console.log('✗ bob-wasm:', e.message)
}

// --- generate preview HTML ---
// Style the raw SVG output to use brand colors
function styleSvg(svg) {
  return svg
    // Container background: warm paper
    .replace(/style="[^"]*background[^"]*"/g, '')
    // Stroke = ink-primary (#1a1918)
    .replace(/stroke="[^"]*"/g, 'stroke="#1a1918"')
    // Fill on rects/paths = surface-raised (#faf9f7)
    .replace(/<rect([^/]*?)fill="[^"]*"/g, '<rect$1fill="#faf9f7"')
    // Text color
    .replace(/fill="[^"]*"(?=[^<]*<\/text>)/g, 'fill="#1a1918"')
    // Arrow markers: use accent orange
    .replace(/marker-end="url\(#[^"]+\)"/g, (m) => m)
}

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>svgbob test — mai-bap design tokens</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Geist', ui-sans-serif, system-ui, sans-serif;
      background: #f5f3ef;
      color: #1a1918;
      padding: 3rem 2rem;
      max-width: 960px;
      margin: 0 auto;
    }
    h1 {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: .12em;
      color: #8a8580;
      margin-bottom: 3rem;
    }
    .row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1px;
      background: #1a19181a;
      border: 1px solid #1a19181a;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 3rem;
    }
    .cell {
      background: #faf9f7;
      padding: 1.5rem;
    }
    .cell-label {
      font-size: 9px;
      text-transform: uppercase;
      letter-spacing: .1em;
      color: #b5b0aa;
      margin-bottom: 1rem;
      font-family: 'Geist Mono', ui-monospace, monospace;
    }
    pre {
      font-family: 'Geist Mono', ui-monospace, monospace;
      font-size: 10px;
      line-height: 1.5;
      color: #4a4744;
      white-space: pre;
      overflow-x: auto;
    }
    svg {
      max-width: 100%;
      height: auto;
      display: block;
    }
    /* Override svgbob default styles for brand feel */
    svg text { font-family: 'Geist Mono', ui-monospace, monospace !important; font-size: 14px !important; fill: #1a1918 !important; }
    svg line, svg path, svg polyline { stroke: #1a1918 !important; stroke-width: 1.5 !important; }
    svg rect { fill: #faf9f7 !important; stroke: #1a1918 !important; }
    svg polygon { fill: #1a1918 !important; stroke: #1a1918 !important; }
    svg circle { fill: #1a1918 !important; stroke: #1a1918 !important; }
    /* Axis lines slightly muted */
    svg { background: transparent !important; }
    h3 { font-size: 12px; font-weight: 600; color: #1a1918; margin-bottom: 2rem; letter-spacing: -.01em; }
  </style>
</head>
<body>

<h1>svgbob rendering test — mai-bap design system</h1>

<h3>Diagram A — TCO vs Complexity Chart</h3>
<div class="row">
  <div class="cell">
    <div class="cell-label">Raw ASCII input</div>
    <pre>${ASCII.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre>
  </div>
  <div class="cell">
    <div class="cell-label">svgbob-wasm render</div>
    ${svg1}
  </div>
  <div class="cell">
    <div class="cell-label">bob-wasm render</div>
    ${svg3}
  </div>
</div>

<h3>Diagram B — Delta NBV Formula Box</h3>
<div class="row">
  <div class="cell">
    <div class="cell-label">Raw ASCII input</div>
    <pre>${ASCII2.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre>
  </div>
  <div class="cell">
    <div class="cell-label">svgbob-wasm render</div>
    ${svg2}
  </div>
  <div class="cell">
    <div class="cell-label">bob-wasm render</div>
    ${svg4}
  </div>
</div>

</body>
</html>`

writeFileSync('test-svgbob.html', html)
console.log('\n→ open test-svgbob.html in your browser')
