import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Container, MetaLabel } from '@/components/ui'

export default function Footer() {
  return (
    <footer className="border-t border-border-default bg-surface-raised">
      <Container className="pt-16 pb-10">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-mono font-bold text-xs tracking-[0.2em] uppercase text-ink-primary hover:text-ink-accent transition-colors"
            >
              {siteConfig.name.toUpperCase()}
            </Link>
            <p className="mt-4 text-xs text-braun-500 leading-relaxed max-w-[180px]">
              {siteConfig.footerTagline}
            </p>
            <MetaLabel as="div" size="xxs" className="mt-5">
              {siteConfig.footerBadges}
            </MetaLabel>
          </div>

          {/* Link columns */}
          {siteConfig.footerColumns.map(col => (
            <div key={col.heading}>
              <MetaLabel as="h3" size="xxs" className="mb-4">
                {col.heading}
              </MetaLabel>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-xs text-braun-500 hover:text-braun-900 transition-colors duration-200"
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
