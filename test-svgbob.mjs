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

// --- test svgbob-wasm ---
let svg1 = '(failed to load)'
let svg2 = '(failed to load)'
let svg3 = '(failed to load)'
let svg4 = '(failed to load)'

try {
  const mod = await import('./node_modules/svgbob-wasm/svgbob_wasm.js')
  await mod.default()
  svg1 = mod.convert(ASCII)
  svg2 = mod.convert(ASCII2)
  console.log('✓ svgbob-wasm: ok')
} catch (e) {
  console.log('✗ svgbob-wasm:', e.message)
}

// --- test bob-wasm ---
try {
  const { Svgbob } = await import('bob-wasm')
  const bob = await Svgbob.initialize()
  svg3 = bob.convert(ASCII)
  svg4 = bob.convert(ASCII2)
  console.log('✓ bob-wasm: ok')
} catch (e) {
  console.log('✗ bob-wasm:', e.message)
}

// --- generate preview HTML ---
const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>svgbob test</title>
  <style>
    body { font-family: monospace; background: #f5f3ef; padding: 2rem; }
    h2 { font-size: 11px; text-transform: uppercase; letter-spacing: .1em; color: #8a8580; margin-top: 3rem; }
    .box { background: #faf9f7; border: 1px solid #1a19181a; padding: 1.5rem; margin-top: 1rem; border-radius: 4px; }
    svg { max-width: 100%; }
    pre { font-size: 12px; color: #4a4744; white-space: pre-wrap; }
  </style>
</head>
<body>

<h2>INPUT ASCII — Chart</h2>
<div class="box"><pre>${ASCII.replace(/</g,'&lt;')}</pre></div>

<h2>svgbob-wasm → Chart</h2>
<div class="box">${svg1}</div>

<h2>bob-wasm → Chart</h2>
<div class="box">${svg3}</div>

<h2>INPUT ASCII — Formula Box</h2>
<div class="box"><pre>${ASCII2.replace(/</g,'&lt;')}</pre></div>

<h2>svgbob-wasm → Formula Box</h2>
<div class="box">${svg2}</div>

<h2>bob-wasm → Formula Box</h2>
<div class="box">${svg4}</div>

</body>
</html>`

writeFileSync('test-svgbob.html', html)
console.log('\n→ open test-svgbob.html in your browser')
