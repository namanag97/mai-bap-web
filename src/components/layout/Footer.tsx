import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Container, MetaLabel } from '@/components/ui'

export default function Footer() {
  return (
    <footer className="section border-t border-b-0">
      <Container>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-lg mb-xl">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-mono font-bold text-xs tracking-[0.2em] uppercase text-ink-primary hover:text-ink-accent transition-colors"
            >
              {siteConfig.name.toUpperCase()}
            </Link>
            <p className="mt-4 text-xs text-ink-muted leading-relaxed max-w-[180px]">
              {siteConfig.footerTagline}
            </p>
            <MetaLabel as="div" size="xxs" className="mt-5">
              {siteConfig.footerBadges}
            </MetaLabel>
          </div>

          {/* Link columns */}
          {siteConfig.footerColumns.map(col => (
            <div key={col.heading}>
              <div className="flex items-center gap-xs mb-sm">
                <MetaLabel as="h3" size="xxs">{col.heading}</MetaLabel>
                <div className="flex-1 divider" />
              </div>
              <ul className="flex flex-col gap-xs">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-xs text-ink-muted hover:text-ink-primary transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <MetaLabel as="p" size="xxs">
            &copy; {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </MetaLabel>
          <MetaLabel as="p" size="xxs">
            System status: {siteConfig.systemStatus}
          </MetaLabel>
        </div>
      </Container>
    </footer>
  )
}
