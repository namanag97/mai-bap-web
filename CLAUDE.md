# mai-bap-web — Project Rules

## CRITICAL: Design Token Contract

**Every color in component files MUST use semantic tokens. No exceptions.**

The build will FAIL if you use raw palette colors. Run `npm run lint:tokens` to check.

### Allowed Tokens (the ONLY colors you may use in components)

**Backgrounds:**
| Token | Tailwind Class | Use For |
|-------|---------------|---------|
| `--color-surface-ground` | `bg-surface-ground` | Page background, default sections |
| `--color-surface-raised` | `bg-surface-raised` | Cards, dropdowns, elevated content |
| `--color-surface-inset` | `bg-surface-inset` | Alternate sections, code blocks, wells |
| `--color-surface-overlay` | `bg-surface-overlay` | Glassmorphic nav, modals (+ backdrop-blur) |
| `--color-surface-inverse` | `bg-surface-inverse` | Dark sections (Stats, CTA, code blocks) |

**Text:**
| Token | Tailwind Class | Use For |
|-------|---------------|---------|
| `--color-ink-primary` | `text-ink-primary` | Headings, strong text |
| `--color-ink-secondary` | `text-ink-secondary` | Body paragraphs |
| `--color-ink-muted` | `text-ink-muted` | Captions, secondary info |
| `--color-ink-dim` | `text-ink-dim` | Placeholders, disabled text |
| `--color-ink-inverse` | `text-ink-inverse` | Text on dark/inverse surfaces |
| `--color-ink-accent` | `text-ink-accent` | Interactive highlights, links |

**Borders:**
| Token | Tailwind Class | Use For |
|-------|---------------|---------|
| `--color-border-default` | `border-border-default` | Standard borders |
| `--color-border-subtle` | `border-border-subtle` | Very light separators |
| `--color-border-strong` | `border-border-strong` | Emphasis borders, focus rings |

**Data/Status (text):**
| Token | Tailwind Class | Use For |
|-------|---------------|---------|
| `--color-data-positive` | `text-data-positive` | Success states |
| `--color-data-warning` | `text-data-warning` | Warning states |
| `--color-data-negative` | `text-data-negative` | Error states |
| `--color-data-violet` | `text-data-violet` | Violet/info states |

**Data/Status (backgrounds & borders):**
| Token | Tailwind Class | Use For |
|-------|---------------|---------|
| `--color-data-positive-bg` | `bg-data-positive-bg` | Success background |
| `--color-data-positive-border` | `border-data-positive-border` | Success border |
| `--color-data-warning-bg` | `bg-data-warning-bg` | Warning background |
| `--color-data-warning-border` | `border-data-warning-border` | Warning border |
| `--color-data-negative-bg` | `bg-data-negative-bg` | Error background |
| `--color-data-negative-border` | `border-data-negative-border` | Error border |
| `--color-data-violet-bg` | `bg-data-violet-bg` | Violet background |
| `--color-data-violet-border` | `border-data-violet-border` | Violet border |
| `--color-data-accent-bg` | `bg-data-accent-bg` | Accent background |
| `--color-data-accent-border` | `border-data-accent-border` | Accent border |

**Shadows:**
| Token | Tailwind Class | Use For |
|-------|---------------|---------|
| `--shadow-xs` | `shadow-xs` | Subtle card elevation |
| `--shadow-sm` | `shadow-sm` | Hover states, hover-lift |
| `--shadow-md` | `shadow-md` | Dropdowns, popovers |
| `--shadow-lg` | `shadow-lg` | Modals, overlays |

**Z-index:**
| Token | Value | Use For |
|-------|-------|---------|
| `--z-base` | `0` | Default stacking |
| `--z-raised` | `1` | Slightly elevated |
| `--z-dropdown` | `100` | Dropdowns |
| `--z-sticky` | `200` | Sticky navbar |
| `--z-overlay` | `300` | Overlays |
| `--z-modal` | `400` | Modals |
| `--z-toast` | `500` | Toasts |

**Layout:**
| Token | Value | Use For |
|-------|-------|---------|
| `--navbar-height` | `3.5rem` | Navbar height |
| `--sidebar-width` | `16rem` | Sidebar width |

### BANNED — Will Fail Build

These patterns are banned in ALL files under `src/` (except `globals.css`):

- `text-braun-*`, `bg-braun-*`, `border-braun-*`, `divide-braun-*`, `ring-braun-*`
- `text-white`, `bg-white`, `text-black`, `bg-black`
- `bg-[#...]`, `text-[#...]`, `border-[#...]` (arbitrary hex values)
- Raw Tailwind status: `(text|bg|border)-(emerald|rose|amber|violet|orange)-*`
- Old tokens: `surface-primary`, `surface-secondary`, `text-primary`, `text-secondary`

### Migration Cheat Sheet

| Old (BANNED) | New (REQUIRED) |
|---|---|
| `text-braun-900` | `text-ink-primary` |
| `text-braun-600`, `text-braun-500` | `text-ink-secondary` |
| `text-braun-400` | `text-ink-muted` |
| `text-braun-300` | `text-ink-dim` |
| `text-white` | `text-ink-inverse` |
| `text-braun-orange` | `text-ink-accent` |
| `bg-braun-900` | `bg-surface-inverse` |
| `bg-braun-50`, `bg-braun-100` | `bg-surface-ground` or `bg-surface-inset` |
| `bg-white` | `bg-surface-raised` |
| `border-braun-200` | `border-border-default` |
| `border-braun-100` | `border-border-subtle` |
| `border-braun-900` | `border-border-strong` |
| `text-emerald-700` | `text-data-positive` |
| `bg-emerald-50` | `bg-data-positive-bg` |
| `border-emerald-200` | `border-data-positive-border` |
| `text-amber-700` | `text-data-warning` |
| `bg-amber-50` | `bg-data-warning-bg` |
| `border-amber-200` | `border-data-warning-border` |
| `text-rose-700` | `text-data-negative` |
| `bg-rose-50` | `bg-data-negative-bg` |
| `border-rose-200` | `border-data-negative-border` |
| `text-violet-700` | `text-data-violet` |
| `bg-violet-50` | `bg-data-violet-bg` |
| `border-violet-200` | `border-data-violet-border` |
| `bg-orange-50` | `bg-data-accent-bg` |
| `border-orange-200` | `border-data-accent-border` |

### How to Verify

```bash
npm run lint:tokens    # Check for violations
npm run build          # Lint runs automatically before build
```

## Stack

- Next.js 16, React 19, TypeScript, Tailwind CSS v4
- Fonts: Geist Sans + Geist Mono (via `geist` package)
- Icons: lucide-react
- Utilities: clsx + tailwind-merge via `cn()` in `src/lib/utils.ts`
- All content in `src/config/site.ts`

## Design Language

- Background: warm paper `#F5F3EF` with subtle SVG noise texture (on ground surfaces only)
- Text: `#1A1918` primary, warm greyscale (`#4A4744` secondary, `#8A8580` muted, `#B5B0AA` dim)
- Borders: translucent `rgba(26,25,24, 0.10/0.05/0.20)` (default/subtle/strong)
- Accent: `#ea580c` (orange, surgical use only)
- Shadows: warm-tinted `#1A1918` base, 4 levels (xs/sm/md/lg)
- Engineering grid: dual-scale (80px major + 16px minor) using `bg-engineering-grid` utility class
- Navbar: glassmorphic HUD — `bg-surface-overlay` + `backdrop-blur-lg` when scrolled
- Border radius: 4px everywhere (`--radius`)
- Spacing: 4px base grid, all values multiples of 4
- Animation: one curve `cubic-bezier(0.25, 0.1, 0.25, 1)`, three durations (120/200/350ms)
- Fonts: Geist Sans + Geist Mono
- Hover-lift: `hover-lift` utility class for card hover states (translateY + shadow)

**DO NOT change these values without explicit user approval.**

## Architecture

- Atomic design: atoms in `src/components/ui/`, molecules compose atoms
- All reusable UI in `src/components/ui/index.ts` barrel export
- Landing sections in `src/components/landing/`
- Layout shell (Navbar, Footer) in `src/components/layout/`
- Pages in `src/app/` (Next.js App Router)

## Rules

- NEVER create prototype/test pages or routes — work on the real site
- NEVER define `<html>` or `<body>` in nested layouts (only root layout)
- ALWAYS read a file before editing it
- ALWAYS run `npm run lint:tokens` after changing any component
- If the token linter fails, fix the violations — do NOT modify the linter
