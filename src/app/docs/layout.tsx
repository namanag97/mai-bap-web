import type { Metadata } from 'next'
import DocsSidebar from '@/components/docs/DocsSidebar'

export const metadata: Metadata = {
  title: { default: 'Documentation', template: '%s · Meridian Docs' },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-14 min-h-screen bg-braun-50">
      <div className="max-w-screen-xl mx-auto flex" style={{ height: 'calc(100vh - 56px)' }}>
        {/* Sidebar — hidden on mobile */}
        <div className="hidden lg:block">
          <DocsSidebar />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-white border-r border-braun-200">
          {children}
        </div>

        {/* Right gutter */}
        <div className="hidden xl:block w-64 shrink-0 bg-braun-50" />
      </div>
    </div>
  )
}
