'use client'

import { useState } from 'react'
import './prototype.css'

export default function PrototypePage() {
  const [showGrid, setShowGrid] = useState(false)

  return (
    <div className="paper min-h-screen">
      {showGrid && <div className="grid-overlay" />}

      {/* ═══ TOOLBAR ═══════════════════════════════════════ */}
      <div
        className="fixed top-0 inset-x-0 z-[10001] flex items-center justify-between px-6"
        style={{
          height: 40,
          background: 'var(--surface-overlay)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
          fontFamily: 'var(--font-geist-mono), monospace',
          fontSize: 10,
          textTransform: 'uppercase' as const,
          letterSpacing: '0.08em',
          color: 'var(--ink-muted)',
        }}
      >
        <span>Design Language Prototype</span>
        <button
          onClick={() => setShowGrid(!showGrid)}
          style={{
            padding: '4px 12px',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--border-strong)',
            background: showGrid ? 'var(--ink-primary)' : 'transparent',
            color: showGrid ? 'var(--ink-inverse)' : 'var(--ink-secondary)',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            textTransform: 'inherit' as const,
            letterSpacing: 'inherit',
          }}
        >
          {showGrid ? '4px Grid: On' : '4px Grid: Off'}
        </button>
      </div>

      <div style={{ paddingTop: 40 }}>
        {/* ═══ SPECIMEN 1: PAPER BACKGROUND ═══════════════ */}
        <Specimen
          number="01"
          title="Paper Background"
          description="Warm greige (#F5F3EF) with fixed fractal noise at 4% opacity. The noise doesn't scroll — the screen IS the paper."
        >
          <div className="flex gap-6 items-start flex-wrap">
            <Swatch color="#F5F3EF" label="Ground" sub="Default page bg" />
            <Swatch color="#FFFFFF" label="Raised" sub="Cards, dropdowns" />
            <Swatch color="#ECEAE5" label="Inset" sub="Alt sections, wells" />
            <Swatch
              color="rgba(255,255,255,0.72)"
              label="Overlay"
              sub="Nav, modals"
              blur
            />
          </div>
          <div
            style={{
              marginTop: 32,
              padding: 24,
              borderRadius: 'var(--radius)',
              border: '1px solid var(--border)',
              background: 'var(--surface-ground)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-geist-mono)',
                fontSize: 10,
                color: 'var(--ink-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 12,
              }}
            >
              Why this works
            </p>
            <p
              style={{
                fontFamily: 'var(--font-geist-sans)',
                fontSize: 15,
                lineHeight: 1.65,
                color: 'var(--ink-secondary)',
              }}
            >
              Pure white (#FFFFFF) is a screen color — it emits light and fatigues
              the eye. #F5F3EF absorbs light like paper. The warm undertone
              (shifted toward yellow-brown, not pink) creates a surface that
              feels material rather than digital. The noise adds the micro-texture
              that the brain reads as &ldquo;real surface&rdquo; even
              subconsciously.
            </p>
          </div>
        </Specimen>

        <div className="hairline" />

        {/* ═══ SPECIMEN 2: TEXT HIERARCHY ═════════════════ */}
        <Specimen
          number="02"
          title="Typography on Paper"
          description="Geist Sans for all text. Geist Mono for labels and code. Warm ink tones that belong to the paper surface."
        >
          {/* Display */}
          <TypeRow
            label="Display"
            size="clamp(48px, 7vw, 72px)"
            weight={500}
            leading={0.92}
            tracking="-0.02em"
            color="var(--ink-primary)"
            sample="Design with intent"
          />
          {/* Title */}
          <TypeRow
            label="Title"
            size="clamp(28px, 3vw, 36px)"
            weight={500}
            leading={1.15}
            tracking="-0.01em"
            color="var(--ink-primary)"
            sample="Section heading that anchors the eye"
          />
          {/* Heading */}
          <TypeRow
            label="Heading"
            size="18px"
            weight={500}
            leading={1.35}
            tracking="-0.01em"
            color="var(--ink-primary)"
            sample="Card or block heading"
          />
          {/* Body */}
          <TypeRow
            label="Body"
            size="15px"
            weight={400}
            leading={1.65}
            tracking="-0.005em"
            color="var(--ink-secondary)"
            sample="Body text set at 15px with 1.65 line height. This is the workhorse — readable on paper, not too light, not too heavy. Geist at weight 400 gives the right density for extended reading."
          />
          {/* Small */}
          <TypeRow
            label="Small"
            size="13px"
            weight={400}
            leading={1.6}
            tracking="0"
            color="var(--ink-muted)"
            sample="Smaller text for captions, secondary info, and supporting details that recede naturally."
          />
          {/* Mono label */}
          <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
            <div className="flex items-center gap-3" style={{ marginBottom: 16 }}>
              <div className="specimen-label">Mono Labels</div>
              <div
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontSize: 10,
                  color: 'var(--ink-dim)',
                }}
              >
                Geist Mono — 10px / uppercase / tracking 0.08em
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <MonoLabel text="01 — Features" color="var(--ink-muted)" />
              <MonoLabel text="Documentation" color="var(--ink-dim)" />
              <MonoLabel text="v2.1.0" color="var(--accent)" />
              <MonoLabel text="Feb 2026" color="var(--ink-dim)" />
            </div>
          </div>
        </Specimen>

        <div className="hairline" />

        {/* ═══ SPECIMEN 3: SURFACE HIERARCHY ══════════════ */}
        <Specimen
          number="03"
          title="Surface Hierarchy"
          description="Three levels create depth without shadows. Ground is the default. Raised sits on top. Inset recedes."
        >
          {/* Ground section */}
          <SurfaceDemo
            label="Ground Section"
            background="var(--surface-ground)"
            description="Default page surface. Most content sits here. No border needed — it IS the background."
          >
            {/* Raised card on ground */}
            <div className="flex gap-4">
              <CardDemo label="Raised Card" />
              <CardDemo label="Raised Card" />
              <CardDemo label="Raised Card" />
            </div>
          </SurfaceDemo>

          {/* Inset section */}
          <SurfaceDemo
            label="Inset Section"
            background="var(--surface-inset)"
            description="Alternate sections use this. Creates rhythm without lines. Also for code blocks, wells, sidebars."
            inset
          >
            <div className="flex gap-4">
              <CardDemo label="Raised Card" />
              <CardDemo label="Raised Card" />
              <CardDemo label="Raised Card" />
            </div>
          </SurfaceDemo>

          {/* Overlay demonstration */}
          <div style={{ marginTop: 32 }}>
            <div className="specimen-label" style={{ marginBottom: 12 }}>
              Overlay (Glassmorphic)
            </div>
            <div
              style={{
                position: 'relative',
                height: 120,
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                border: '1px solid var(--border)',
              }}
            >
              {/* Fake content behind */}
              <div style={{ padding: 24 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-geist-sans)',
                    fontSize: 24,
                    fontWeight: 500,
                    color: 'var(--ink-primary)',
                  }}
                >
                  Content behind the overlay
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-geist-sans)',
                    fontSize: 15,
                    color: 'var(--ink-secondary)',
                    marginTop: 8,
                  }}
                >
                  This text sits beneath the glassmorphic HUD layer, showing
                  how content reads through frosted glass.
                </p>
              </div>
              {/* Overlay bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 48,
                  background: 'var(--surface-overlay)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 16px',
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-geist-mono)',
                    fontSize: 10,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--ink-secondary)',
                  }}
                >
                  Navigation HUD
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background: 'var(--border)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-geist-mono)',
                    fontSize: 10,
                    color: 'var(--ink-dim)',
                  }}
                >
                  rgba(255,255,255,0.72) + blur(12px)
                </span>
              </div>
            </div>
          </div>
        </Specimen>

        <div className="hairline" />

        {/* ═══ SPECIMEN 4: SECTION ANATOMY ════════════════ */}
        <Specimen
          number="04"
          title="Section Anatomy"
          description="Every section follows the same skeleton. Here's the full hierarchy with real spacing values."
        >
          <div
            style={{
              fontFamily: 'var(--font-geist-mono)',
              fontSize: 11,
              color: 'var(--ink-dim)',
              lineHeight: 2.4,
              whiteSpace: 'pre',
            }}
          >
{`section                    full-width block
├── surface                ground | inset (alternating)
├── padding-y              96px standard | 128px hero | 64px compact
│
├── container              max-w-1280px, px-24/32
│   ├── section-header
│   │   ├── meta-label     GEIST MONO 10px uppercase
│   │   │   └── mb         16px (--space-4)
│   │   ├── title          GEIST 28-36px weight-500
│   │   │   └── mb         12px (--space-3)
│   │   ├── subtitle       GEIST 15px weight-400
│   │   │   └── mb         32px (--space-8)
│   │   └── hairline       1px border bottom
│   │       └── mb         32px (--space-8)
│   │
│   └── content-grid       1/2/3 columns
│       ├── gap            24px (--space-6) standard
│       └── card
│           ├── surface    raised (#FFF)
│           ├── border     1px var(--border)
│           ├── radius     4px
│           ├── padding    24px (--space-6)
│           └── content
│               ├── heading  18px weight-500
│               ├── body     15px weight-400
│               └── meta     10px mono uppercase
│
└── separator              hairline (full-bleed) OR bg-shift`}
          </div>
        </Specimen>

        <div className="hairline" />

        {/* ═══ SPECIMEN 5: LIVE SECTION ═══════════════════ */}
        <Specimen
          number="05"
          title="Live Section — Ground Surface"
          description="A real section rendered with the proposed design language. This is what a Features section looks like."
          fullWidth
        >
          <LiveSection surface="ground" />
        </Specimen>

        {/* No hairline — bg shift is the separator */}

        <Specimen
          number="06"
          title="Live Section — Inset Surface"
          description="Same anatomy, inset background. Notice how the surface shift alone creates separation — no border needed."
          fullWidth
          inset
        >
          <LiveSection surface="inset" />
        </Specimen>

        <div className="hairline" />

        {/* ═══ SPECIMEN 7: SPACING GRID ═══════════════════ */}
        <Specimen
          number="07"
          title="The 4px Grid"
          description="Every dimension is a multiple of 4. Component heights snap to 8. Toggle the grid overlay (top-right) to verify alignment."
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
              gap: 16,
            }}
          >
            {[4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128].map(
              (px) => (
                <div key={px} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '100%',
                      height: px,
                      maxHeight: 80,
                      background: 'var(--accent-muted)',
                      borderRadius: 'var(--radius)',
                      border: '1px solid rgba(234, 88, 12, 0.2)',
                      marginBottom: 8,
                    }}
                  />
                  <div
                    style={{
                      fontFamily: 'var(--font-geist-mono)',
                      fontSize: 11,
                      fontWeight: 500,
                      color: 'var(--ink-primary)',
                    }}
                  >
                    {px}px
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-geist-mono)',
                      fontSize: 9,
                      color: 'var(--ink-dim)',
                    }}
                  >
                    {px / 4}×4
                  </div>
                </div>
              )
            )}
          </div>

          <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
            <div className="specimen-label" style={{ marginBottom: 16 }}>
              Component Heights (8px snap)
            </div>
            <div className="flex flex-wrap items-end gap-4">
              <ComponentHeight label="Badge" height={24} />
              <ComponentHeight label="Button SM" height={32} />
              <ComponentHeight label="Input" height={40} />
              <ComponentHeight label="Button MD" height={40} />
              <ComponentHeight label="Button LG" height={48} />
              <ComponentHeight label="Nav" height={48} />
              <ComponentHeight label="Card Header" height={56} />
            </div>
          </div>
        </Specimen>

        <div className="hairline" />

        {/* ═══ SPECIMEN 8: ANIMATION ═════════════════════ */}
        <Specimen
          number="08"
          title="Animation Spec"
          description="One curve. Three durations. Translate-Y + opacity entrance. No bouncing, no springs."
        >
          <div
            style={{
              fontFamily: 'var(--font-geist-mono)',
              fontSize: 12,
              color: 'var(--ink-secondary)',
              lineHeight: 2.2,
              whiteSpace: 'pre',
            }}
          >
{`Curve     cubic-bezier(0.25, 0.1, 0.25, 1)

Duration  120ms    hover, focus, color shifts
          200ms    element transitions, fades
          350ms    layout shifts, page enters

Entrance  translateY(12px) → 0, opacity 0 → 1
Stagger   50ms between siblings
Hover     color only, never transform
Motion    respect prefers-reduced-motion`}
          </div>
        </Specimen>

        {/* ═══ FOOTER ════════════════════════════════════ */}
        <div
          style={{
            padding: '32px 24px',
            textAlign: 'center',
            fontFamily: 'var(--font-geist-mono)',
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--ink-dim)',
          }}
        >
          End of prototype — toggle 4px grid to verify alignment
        </div>
      </div>
    </div>
  )
}

/* ═══ HELPER COMPONENTS ══════════════════════════════════ */

function Specimen({
  number,
  title,
  description,
  children,
  fullWidth,
  inset,
}: {
  number: string
  title: string
  description: string
  children: React.ReactNode
  fullWidth?: boolean
  inset?: boolean
}) {
  return (
    <section
      style={{
        padding: fullWidth ? '96px 0' : '96px 24px',
        maxWidth: fullWidth ? 'none' : 1280,
        margin: '0 auto',
        background: inset ? 'var(--surface-inset)' : 'transparent',
      }}
    >
      <div
        style={{
          maxWidth: fullWidth ? 1280 : 'none',
          margin: fullWidth ? '0 auto' : undefined,
          padding: fullWidth ? '0 24px' : undefined,
        }}
      >
        <div className="flex items-center gap-3" style={{ marginBottom: 16 }}>
          <span
            style={{
              fontFamily: 'var(--font-geist-mono)',
              fontSize: 10,
              color: 'var(--ink-dim)',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {number}
          </span>
          <span
            style={{
              height: 1,
              width: 24,
              background: 'var(--border-strong)',
              display: 'inline-block',
            }}
          />
          <span className="specimen-label">{title}</span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-geist-sans)',
            fontSize: 'clamp(28px, 3vw, 36px)',
            fontWeight: 500,
            color: 'var(--ink-primary)',
            letterSpacing: '-0.01em',
            lineHeight: 1.15,
            marginBottom: 12,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-geist-sans)',
            fontSize: 15,
            lineHeight: 1.65,
            color: 'var(--ink-muted)',
            maxWidth: 600,
            marginBottom: 48,
          }}
        >
          {description}
        </p>
      </div>
      <div
        style={{
          maxWidth: fullWidth ? 1280 : 'none',
          margin: fullWidth ? '0 auto' : undefined,
          padding: fullWidth ? '0 24px' : undefined,
        }}
      >
        {children}
      </div>
    </section>
  )
}

function Swatch({
  color,
  label,
  sub,
  blur,
}: {
  color: string
  label: string
  sub: string
  blur?: boolean
}) {
  return (
    <div>
      <div
        style={{
          width: 120,
          height: 80,
          borderRadius: 'var(--radius)',
          background: color,
          border: '1px solid var(--border)',
          ...(blur
            ? { backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }
            : {}),
          marginBottom: 8,
        }}
      />
      <div className="specimen-title">{label}</div>
      <div
        style={{
          fontFamily: 'var(--font-geist-mono)',
          fontSize: 10,
          color: 'var(--ink-dim)',
          marginTop: 2,
        }}
      >
        {sub}
      </div>
    </div>
  )
}

function TypeRow({
  label,
  size,
  weight,
  leading,
  tracking,
  color,
  sample,
}: {
  label: string
  size: string
  weight: number
  leading: number
  tracking: string
  color: string
  sample: string
}) {
  return (
    <div
      style={{
        paddingBottom: 24,
        marginBottom: 24,
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="flex items-center gap-4" style={{ marginBottom: 12 }}>
        <span className="specimen-label">{label}</span>
        <span
          style={{
            fontFamily: 'var(--font-geist-mono)',
            fontSize: 10,
            color: 'var(--ink-dim)',
          }}
        >
          {size} / {weight} / {leading} / {tracking}
        </span>
      </div>
      <div
        style={{
          fontFamily: 'var(--font-geist-sans)',
          fontSize: size,
          fontWeight: weight,
          lineHeight: leading,
          letterSpacing: tracking,
          color,
        }}
      >
        {sample}
      </div>
    </div>
  )
}

function MonoLabel({ text, color }: { text: string; color: string }) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-geist-mono)',
        fontSize: 10,
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color,
      }}
    >
      {text}
    </span>
  )
}

function CardDemo({ label }: { label: string }) {
  return (
    <div
      style={{
        flex: 1,
        padding: 24,
        background: 'var(--surface-raised)',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--border)',
        minWidth: 160,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-geist-mono)',
          fontSize: 10,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--ink-dim)',
          marginBottom: 12,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-geist-sans)',
          fontSize: 18,
          fontWeight: 500,
          color: 'var(--ink-primary)',
          marginBottom: 8,
        }}
      >
        Card heading
      </div>
      <div
        style={{
          fontFamily: 'var(--font-geist-sans)',
          fontSize: 14,
          lineHeight: 1.6,
          color: 'var(--ink-muted)',
        }}
      >
        Supporting text that explains the card&apos;s purpose.
      </div>
    </div>
  )
}

function SurfaceDemo({
  label,
  background,
  description,
  children,
  inset,
}: {
  label: string
  background: string
  description: string
  children: React.ReactNode
  inset?: boolean
}) {
  return (
    <div
      style={{
        padding: 32,
        background,
        borderRadius: 'var(--radius)',
        border: inset ? 'none' : '1px solid var(--border)',
        marginBottom: 24,
      }}
    >
      <div className="flex items-center gap-3" style={{ marginBottom: 8 }}>
        <div className="specimen-label">{label}</div>
        <div
          style={{
            fontFamily: 'var(--font-geist-mono)',
            fontSize: 10,
            color: 'var(--ink-dim)',
          }}
        >
          {background}
        </div>
      </div>
      <p
        style={{
          fontFamily: 'var(--font-geist-sans)',
          fontSize: 13,
          color: 'var(--ink-muted)',
          marginBottom: 24,
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
      {children}
    </div>
  )
}

function LiveSection({ surface }: { surface: 'ground' | 'inset' }) {
  return (
    <div>
      {/* Section Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 16,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-geist-mono)',
            fontSize: 10,
            color: 'var(--ink-dim)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          01
        </span>
        <span
          style={{
            height: 1,
            width: 24,
            background: 'var(--border-strong)',
            display: 'inline-block',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-geist-mono)',
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--ink-muted)',
          }}
        >
          Capabilities
        </span>
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-geist-sans)',
          fontSize: 'clamp(28px, 3vw, 36px)',
          fontWeight: 500,
          color: 'var(--ink-primary)',
          letterSpacing: '-0.01em',
          lineHeight: 1.15,
          marginBottom: 12,
        }}
      >
        Everything you need, nothing you don&apos;t
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-geist-sans)',
          fontSize: 15,
          lineHeight: 1.65,
          color: 'var(--ink-muted)',
          maxWidth: 480,
          marginBottom: 32,
        }}
      >
        Built for teams that value clarity over complexity. Each feature solves
        one problem well.
      </p>
      <div
        style={{
          height: 1,
          background: 'var(--border)',
          marginBottom: 32,
        }}
      />

      {/* Feature Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}
      >
        {[
          {
            title: 'Instant Deploy',
            body: 'Push to main and your changes are live. Zero config, zero downtime.',
          },
          {
            title: 'Edge Functions',
            body: 'Run server logic at the edge. Sub-50ms response times globally.',
          },
          {
            title: 'Analytics Built In',
            body: 'Privacy-first analytics without third-party scripts or cookie banners.',
          },
        ].map((feature) => (
          <div
            key={feature.title}
            style={{
              padding: 24,
              background:
                surface === 'ground'
                  ? 'var(--surface-raised)'
                  : 'var(--surface-raised)',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--border)',
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border-strong)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
                fontFamily: 'var(--font-geist-mono)',
                fontSize: 11,
                color: 'var(--ink-muted)',
              }}
            >
              +
            </div>
            <h4
              style={{
                fontFamily: 'var(--font-geist-sans)',
                fontSize: 16,
                fontWeight: 500,
                color: 'var(--ink-primary)',
                marginBottom: 8,
              }}
            >
              {feature.title}
            </h4>
            <p
              style={{
                fontFamily: 'var(--font-geist-sans)',
                fontSize: 14,
                lineHeight: 1.6,
                color: 'var(--ink-muted)',
              }}
            >
              {feature.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ComponentHeight({
  label,
  height,
}: {
  label: string
  height: number
}) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          width: 80,
          height,
          borderRadius: 'var(--radius)',
          border: '1px solid var(--border-strong)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-geist-mono)',
          fontSize: 10,
          color: 'var(--ink-secondary)',
          marginBottom: 8,
        }}
      >
        {height}px
      </div>
      <div
        style={{
          fontFamily: 'var(--font-geist-mono)',
          fontSize: 9,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: 'var(--ink-dim)',
        }}
      >
        {label}
      </div>
    </div>
  )
}
