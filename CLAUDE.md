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

**Data/Status:**
| Token | Tailwind Class | Use For |
|-------|---------------|---------|
| `--color-data-positive` | `text-data-positive` | Success states |
| `--color-data-warning` | `text-data-warning` | Warning states |
| `--color-data-negative` | `text-data-negative` | Error states |

### BANNED — Will Fail Build

These patterns are banned in ALL files under `src/` (except `globals.css`):

- `text-braun-*`, `bg-braun-*`, `border-braun-*`, `divide-braun-*`, `ring-braun-*`
- `text-white`, `bg-white`, `text-black`, `bg-black`
- `bg-[#...]`, `text-[#...]`, `border-[#...]` (arbitrary hex values)
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

- Background: neutral `#fafafa` (clean, no warm tint)
- Text: `#09090b` primary, zinc-based greyscale
- Borders: solid `#e4e4e7`
- Accent: `#ea580c` (orange, surgical use only)
- Border radius: 4px everywhere (`--radius`)
- Spacing: 4px base grid, all values multiples of 4
- Animation: one curve `cubic-bezier(0.25, 0.1, 0.25, 1)`, three durations (120/200/350ms)
- Fonts: Geist Sans + Geist Mono

**DO NOT change these values without explicit user approval.** The design language discussion happened but the warm paper palette (#F5F3EF) was rejected. These are the approved values.

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
