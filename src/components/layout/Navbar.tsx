'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback, useRef } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { useTheme } from '@/components/ui/ThemeProvider'
import { Container, ButtonLink, MetaLabel } from '@/components/ui'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()
  const ticking = useRef(false)

  const onScroll = useCallback(() => {
    if (ticking.current) return
    ticking.current = true
    requestAnimationFrame(() => {
      setScrolled(window.scrollY > 20)
      ticking.current = false
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  function isActive(href: string) {
    if (href.startsWith('/#')) return false
    return pathname === href || pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-[background-color,border-color] duration-300',
        scrolled
          ? 'bg-surface-raised border-b border-border-default'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <Container className="h-14 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-mono font-bold text-xs tracking-[0.2em] uppercase text-ink-primary hover:text-ink-accent transition-colors duration-300"
        >
          {siteConfig.name.toUpperCase()}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {siteConfig.navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'text-[10px] font-mono uppercase tracking-widest transition-colors duration-200',
                isActive(l.href)
                  ? 'text-ink-primary'
                  : 'text-ink-muted hover:text-ink-primary'
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-5">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 border border-border-default hover:border-border-strong transition-colors duration-200 text-ink-muted hover:text-ink-primary"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <Link
            href={siteConfig.ctaLinks.signIn.href}
            className="text-[10px] font-mono uppercase tracking-widest text-ink-muted hover:text-ink-primary transition-colors duration-200"
          >
            {siteConfig.ctaLinks.signIn.label}
          </Link>
          <ButtonLink href={siteConfig.ctaLinks.getStarted.href} size="sm">
            {siteConfig.ctaLinks.getStarted.label}
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1 text-braun-500 hover:text-braun-900 transition-colors"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden border-t border-border-default bg-surface-raised overflow-hidden transition-[max-height,opacity] duration-300',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 py-5 flex flex-col gap-4">
          {siteConfig.navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[10px] font-mono uppercase tracking-widest text-braun-500 hover:text-braun-900 transition-colors py-1"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-border-subtle flex flex-col gap-3">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2 border border-border-default hover:border-braun-900 transition-colors text-braun-500 hover:text-braun-900 self-start"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <MetaLabel as="span" color="dim">
              <Link href={siteConfig.ctaLinks.signIn.href}>
                {siteConfig.ctaLinks.signIn.label}
              </Link>
            </MetaLabel>
            <ButtonLink href={siteConfig.ctaLinks.getStarted.href} size="sm" className="text-center">
              {siteConfig.ctaLinks.getStarted.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  )
}
