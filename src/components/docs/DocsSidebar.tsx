'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation } from '@/content/docs'
import { cn } from '@/lib/utils'

export default function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-60 shrink-0 border-r border-braun-200 overflow-y-auto bg-white">
      {/* Docs label */}
      <div className="px-5 pt-8 pb-4 border-b border-braun-100">
        <span className="text-[9px] font-mono uppercase tracking-widest text-braun-300">
          Documentation
        </span>
      </div>

      <nav className="px-3 py-5 space-y-6" aria-label="Docs navigation">
        {navigation.map(section => (
          <div key={section.title}>
            <div className="px-2 mb-1.5 text-[9px] font-mono uppercase tracking-widest text-braun-300">
              {section.title}
            </div>
            <ul className="space-y-0.5">
              {section.pages.map(page => {
                const href = `/docs/${page.slug.join('/')}`
                const active = pathname === href
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn(
                        'block px-2 py-1.5 text-xs transition-colors duration-150',
                        active
                          ? 'bg-braun-900 text-white font-medium'
                          : 'text-braun-500 hover:text-braun-900 hover:bg-braun-50'
                      )}
                    >
                      {page.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
