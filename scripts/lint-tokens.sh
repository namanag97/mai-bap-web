#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════
# Design Token Linter
#
# Fails the build if component files use raw palette colors
# instead of semantic design tokens.
#
# ALLOWED (semantic tokens):
#   bg-surface-{ground,raised,inset,overlay,inverse}
#   text-ink-{primary,secondary,muted,dim,inverse,accent}
#   border-border-{default,subtle,strong}
#   text-data-{positive,warning,negative,violet}
#   bg-data-{positive,warning,negative,violet,accent}-bg
#   border-data-{positive,warning,negative,violet,accent}-border
#
# BANNED in component files (src/components/**, src/app/**):
#   text-braun-*    bg-braun-*    border-braun-*    divide-braun-*
#   text-white      bg-white      text-black        bg-black
#   ring-braun-*
#   Raw status: (text|bg|border)-(emerald|rose|amber|violet|orange)-*
#   Hardcoded hex: text-[#...] bg-[#...] border-[#...]
#
# EXEMPT:
#   src/app/globals.css (defines the tokens themselves)
#   SVG fill/stroke attributes (decorative, not semantic)
# ═══════════════════════════════════════════════════════════════

set -euo pipefail

SEARCH_DIR="src"
EXCLUDE_FILE="src/app/globals.css"
EXIT_CODE=0
VIOLATIONS=0

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color
BOLD='\033[1m'

echo ""
echo "═══════════════════════════════════════════════════"
echo "  Design Token Linter"
echo "═══════════════════════════════════════════════════"
echo ""

# ── Check functions ──────────────────────────────────────────

check_pattern() {
  local pattern="$1"
  local label="$2"
  local replacement="$3"

  # Search for the pattern, exclude globals.css
  local results
  results=$(grep -rn --include='*.tsx' --include='*.ts' --include='*.css' \
    -E "$pattern" "$SEARCH_DIR" \
    | grep -v "$EXCLUDE_FILE" \
    | grep -v 'node_modules' \
    | grep -v '.next' \
    || true)

  if [ -n "$results" ]; then
    local count
    count=$(echo "$results" | wc -l | tr -d ' ')
    echo -e "${RED}✗${NC} ${BOLD}$label${NC} — ${RED}$count violation(s)${NC}"
    echo -e "  ${YELLOW}Use instead:${NC} $replacement"
    echo "$results" | head -10 | while IFS= read -r line; do
      echo -e "    ${line}"
    done
    if [ "$count" -gt 10 ]; then
      echo -e "    ... and $((count - 10)) more"
    fi
    echo ""
    VIOLATIONS=$((VIOLATIONS + count))
    EXIT_CODE=1
  fi
}

# ── Run checks ───────────────────────────────────────────────

# Raw palette — backgrounds
check_pattern \
  'bg-braun-' \
  'bg-braun-* (raw palette background)' \
  'bg-surface-{ground,raised,inset,inverse} or bg-ink-accent'

# Raw palette — text
check_pattern \
  'text-braun-' \
  'text-braun-* (raw palette text)' \
  'text-ink-{primary,secondary,muted,dim,inverse,accent}'

# Raw palette — borders
check_pattern \
  'border-braun-' \
  'border-braun-* (raw palette border)' \
  'border-border-{default,subtle,strong}'

# Raw palette — dividers
check_pattern \
  'divide-braun-' \
  'divide-braun-* (raw palette divider)' \
  'divide-border-{default,subtle}'

# Raw palette — rings
check_pattern \
  'ring-braun-' \
  'ring-braun-* (raw palette ring)' \
  'ring-border-strong or ring-ink-accent'

# Hardcoded white/black
check_pattern \
  '(^|[" ])text-white([" ]|$)' \
  'text-white (hardcoded)' \
  'text-ink-inverse'

check_pattern \
  '(^|[" ])bg-white([" ]|$)' \
  'bg-white (hardcoded)' \
  'bg-surface-raised'

check_pattern \
  '(^|[" ])text-black([" ]|$)' \
  'text-black (hardcoded)' \
  'text-ink-primary'

check_pattern \
  '(^|[" ])bg-black([" ]|$)' \
  'bg-black (hardcoded)' \
  'bg-surface-inverse'

# Arbitrary hex values in Tailwind classes
check_pattern \
  '(text|bg|border)-\[#[0-9a-fA-F]' \
  'Arbitrary hex in Tailwind class' \
  'Use a semantic token from globals.css @theme block'

# Old semantic tokens that were replaced
check_pattern \
  '(surface-primary|surface-secondary|text-primary|text-secondary|text-muted|text-dim|text-inverse|text-accent)' \
  'Old semantic tokens (replaced by ink-*/surface-*)' \
  'surface-{ground,raised,inset} or ink-{primary,secondary,muted,dim}'

# Raw Tailwind status colors — must use semantic data tokens
check_pattern \
  '(text|bg|border)-(emerald|rose|amber|violet|orange)-[0-9]' \
  'Raw Tailwind status color' \
  'text-data-{positive,warning,negative,violet} bg-data-*-bg border-data-*-border'

# ── Report ───────────────────────────────────────────────────

echo "───────────────────────────────────────────────────"
if [ $EXIT_CODE -eq 0 ]; then
  echo -e "${GREEN}✓ All clear — no token violations found.${NC}"
else
  echo -e "${RED}✗ Found $VIOLATIONS token violation(s).${NC}"
  echo ""
  echo "  Fix these before committing. Reference:"
  echo ""
  echo "  BACKGROUNDS:"
  echo "    bg-surface-ground   — page bg, default sections"
  echo "    bg-surface-raised   — cards, elevated content"
  echo "    bg-surface-inset    — alternate sections, wells"
  echo "    bg-surface-inverse  — dark sections (CTA, stats)"
  echo ""
  echo "  TEXT:"
  echo "    text-ink-primary    — headings, strong text"
  echo "    text-ink-secondary  — body paragraphs"
  echo "    text-ink-muted      — captions, secondary"
  echo "    text-ink-dim        — placeholders, disabled"
  echo "    text-ink-inverse    — text on dark surfaces"
  echo "    text-ink-accent     — links, interactive"
  echo ""
  echo "  BORDERS:"
  echo "    border-border-default — standard borders"
  echo "    border-border-subtle  — light separators"
  echo "    border-border-strong  — emphasis, focus"
  echo ""
fi
echo ""

exit $EXIT_CODE
