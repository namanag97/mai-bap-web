import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer className="border-t border-braun-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-mono font-bold text-xs tracking-[0.2em] uppercase text-braun-900 hover:text-braun-orange transition-colors"
            >
              {siteConfig.name.toUpperCase()}
            </Link>
            <p className="mt-4 text-xs text-braun-500 leading-relaxed max-w-[180px]">
              {siteConfig.footerTagline}
            </p>
            <div className="mt-5 text-[9px] font-mono text-braun-500 uppercase tracking-widest">
              {siteConfig.footerBadges}
            </div>
          </div>

          {/* Link columns */}
          {siteConfig.footerColumns.map(col => (
            <div key={col.heading}>
              <h3 className="text-[9px] font-mono uppercase tracking-widest text-braun-500 mb-4">
                {col.heading}
              </h3>
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

        <div className="pt-6 border-t border-braun-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-[9px] font-mono text-braun-500 uppercase tracking-widest">
            &copy; {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-[9px] font-mono text-braun-500 uppercase tracking-widest">
            System status: {siteConfig.systemStatus}
          </p>
        </div>
      </div>
    </footer>
  )
}
