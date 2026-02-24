'use client'

import { useEffect, useRef, useState } from 'react'

interface TocItem {
  id: string
  text: string
}

/**
 * TocTickers — fixed left-side dots for article h2 sections.
 * Signature UX: tiny 3px dots connected by a 1px vertical line.
 * Active dot bounces and brightens. Hidden below xl breakpoint.
 * Fades in after 350px of scroll. Clicking scrolls to the section.
 */
export function TocTickers() {
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [visible, setVisible] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Collect h2 headings from the article on mount
  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll<HTMLHeadingElement>('article h2[id]')
    )
    if (headings.length < 2) return

    const collected: TocItem[] = headings.map(h => ({
      id: h.id,
      text: h.textContent ?? '',
    }))
    setItems(collected)

    // Set first as default active
    setActiveId(collected[0]?.id ?? '')
  }, [])

  // Scroll-based visibility toggle
  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 350)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // IntersectionObserver: track which h2 is in view
  useEffect(() => {
    if (items.length < 2) return

    observerRef.current?.disconnect()

    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    )

    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current!.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [items])

  if (items.length < 2) return null

  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      className="toc-tickers"
      aria-label="Article sections"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div className="toc-tickers-line" aria-hidden="true" />
      {items.map(item => (
        <button
          key={item.id}
          className={`toc-ticker-dot ${activeId === item.id ? 'toc-ticker-dot--active' : ''}`}
          onClick={() => scrollTo(item.id)}
          aria-label={`Jump to: ${item.text}`}
          title={item.text}
          type="button"
        />
      ))}
    </nav>
  )
}
