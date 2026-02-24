'use client'

import { useEffect, useRef } from 'react'

/**
 * ReadingProgressBar — fixed 3px accent bar at the top of the viewport.
 *
 * Uses CSS scroll-timeline where supported (@supports block in globals.css).
 * Falls back to a scroll-event listener that drives transform: scaleX().
 * Positioned above the Navbar (z-sticky + 1) so it's always visible.
 */
export function ReadingProgressBar() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only attach JS listener if CSS scroll-timeline is NOT supported
    // (the @supports block in globals.css handles the CSS-native case)
    if (CSS.supports('animation-timeline', 'scroll()')) return

    function onScroll() {
      const el = barRef.current
      if (!el) return
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      el.style.transform = `scaleX(${progress})`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={barRef}
      className="reading-progress"
      aria-hidden="true"
      style={{ willChange: 'transform', pointerEvents: 'none' }}
    />
  )
}
