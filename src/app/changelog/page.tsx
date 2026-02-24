import type { Metadata } from 'next'
import { PageHeader, Container, Badge, MetaLabel } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'New features, improvements, and fixes shipped to Meridian. Track every release.',
}

type Change = { label: string; items: string[]; color: string }
type Release = {
  version: string
  date: string
  title: string
  featured?: boolean
  changes: Change[]
}

const releases: Release[] = [
  {
    version: 'v2.1.0',
    date: 'February 15, 2026',
    title: 'Webhook filters, PDF export & Python SDK v2',
    featured: true,
    changes: [
      {
        label: 'Added',
        color: 'text-data-positive',
        items: [
          'Custom webhook filters',
          'Dashboard PDF export',
          'Python SDK v2 with async support',
        ],
      },
      {
        label: 'Changed',
        color: 'text-data-warning',
        items: [
          'Improved conformance scoring algorithm (15% faster)',
          'Updated dashboard widget library',
        ],
      },
      {
        label: 'Fixed',
        color: 'text-data-negative',
        items: [
          'Event deduplication edge case in high-throughput streams',
          'Timezone handling in SLA calculations',
        ],
      },
    ],
  },
  {
    version: 'v2.0.0',
    date: 'February 1, 2026',
    title: 'Real-time conformance, Automation Studio v2 & new UI',
    changes: [
      {
        label: 'Added',
        color: 'text-data-positive',
        items: [
          'Real-time conformance checking',
          'Automated root cause analysis',
          'Automation Studio v2',
          'Custom dashboards with drag-and-drop',
        ],
      },
      {
        label: 'Changed',
        color: 'text-data-warning',
        items: [
          'Complete UI redesign with Bauhaus design language',
          'REST API v2 with pagination and filtering',
        ],
      },
      {
        label: 'Fixed',
        color: 'text-data-negative',
        items: ['Memory leak in long-running process monitors'],
      },
    ],
  },
  {
    version: 'v1.5.0',
    date: 'December 10, 2025',
    title: 'Variant analysis, collaboration & Slack integration',
    changes: [
      {
        label: 'Added',
        color: 'text-data-positive',
        items: [
          'Variant analysis with frequency heatmaps',
          'Team collaboration (annotations, shared views)',
          'Slack integration for alerts',
        ],
      },
      {
        label: 'Changed',
        color: 'text-data-warning',
        items: [
          '3x improvement in event ingestion throughput',
          'Simplified onboarding wizard',
        ],
      },
      {
        label: 'Fixed',
        color: 'text-data-negative',
        items: [
          'Process map rendering for processes with 50+ activities',
        ],
      },
    ],
  },
  {
    version: 'v1.2.0',
    date: 'October 1, 2025',
    title: 'SAP connector, bulk import & webhook verification',
    changes: [
      {
        label: 'Added',
        color: 'text-data-positive',
        items: [
          'SAP S/4HANA native connector',
          'CSV/Parquet bulk import',
          'Webhook payload verification',
        ],
      },
      {
        label: 'Changed',
        color: 'text-data-warning',
        items: ['Upgraded to TLS 1.3 across all endpoints'],
      },
      {
        label: 'Fixed',
        color: 'text-data-negative',
        items: [
          'Dashboard filter state not persisting across page reloads',
        ],
      },
    ],
  },
  {
    version: 'v1.0.0',
    date: 'August 1, 2025',
    title: 'Initial release',
    changes: [
      {
        label: 'Added',
        color: 'text-data-positive',
        items: [
          'Process discovery from event logs',
          'Basic conformance checking',
          'REST API v1',
          'JavaScript and Go SDKs',
          'Free tier with 10,000 events/month',
        ],
      },
    ],
  },
]

export default function ChangelogPage() {
  return (
    <div className="pt-14 min-h-screen bg-surface-ground">
      <PageHeader
        label="Releases"
        title="Changelog"
        subtitle="New features, improvements, and fixes shipped to Meridian."
      />

      {/* Timeline */}
      <Container maxWidth="3xl" className="py-12">
        <div className="border-l border-border-default pl-8 space-y-10">
          {releases.map((release) => (
            <div key={release.version} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[calc(2rem+4.5px)] top-8 w-[9px] h-[9px] border border-border-default bg-surface-raised rounded-full" />

              <div className="bg-surface-raised border border-border-default p-8 hover-lift">
                {/* Version + date row */}
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant={release.featured ? 'primary' : 'neutral'} className="font-bold">
                    {release.version}
                  </Badge>
                  <MetaLabel>
                    {release.date}
                  </MetaLabel>
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-ink-primary tracking-tight mb-6">
                  {release.title}
                </h2>

                {/* Change categories */}
                <div className="space-y-5">
                  {release.changes.map((group) => (
                    <div key={group.label}>
                      <MetaLabel as="div" size="xxs" className={`${group.color} mb-2`}>
                        {group.label}
                      </MetaLabel>
                      <ul className="space-y-1.5">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-ink-secondary leading-relaxed"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
