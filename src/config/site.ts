/**
 * Centralized site configuration.
 *
 * Edit THIS FILE to rebrand the entire template.
 * Every component imports from here — no hardcoded brand strings elsewhere.
 */

export const siteConfig = {
  // ── Brand ──────────────────────────────────────────────
  name: 'Meridian',
  tagline: 'Process Intelligence for Modern Teams',
  description:
    'Understand how your business processes actually run. Real-time conformance checking, automated root cause analysis, and no-code automation — without the consulting engagement.',
  url: 'https://namanag97.github.io/meridian-web',
  email: 'hello@meridian.io',
  salesEmail: 'sales@meridian.io',
  privacyEmail: 'privacy@meridian.io',
  legalEmail: 'legal@meridian.io',

  // ── Navigation ─────────────────────────────────────────
  navLinks: [
    { label: 'Features', href: '/#features' },
    { label: 'Docs', href: '/docs/introduction' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/#pricing' },
  ],
  ctaLinks: {
    signIn: { label: 'Sign in', href: '/docs/quick-start' },
    getStarted: { label: 'Get started', href: '/docs/quick-start' },
  },

  // ── Footer ─────────────────────────────────────────────
  footerTagline: 'Process intelligence for teams that operate at scale.',
  footerBadges: 'SOC 2 Type II · GDPR',
  footerColumns: [
    {
      heading: 'Product',
      links: [
        { label: 'Features', href: '/#features' },
        { label: 'Pricing', href: '/#pricing' },
        { label: 'Changelog', href: '/changelog' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      heading: 'Docs',
      links: [
        { label: 'Introduction', href: '/docs/introduction' },
        { label: 'Quick Start', href: '/docs/quick-start' },
        { label: 'REST API', href: '/docs/api/rest' },
        { label: 'Webhooks', href: '/docs/api/webhooks' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ],
    },
  ],
  copyrightYear: 2026,
  systemStatus: 'Operational',

  // ── Hero ───────────────────────────────────────────────
  hero: {
    sectionLabel: 'Process Intelligence Platform',
    title: ['Process', 'intelligence,'],
    titleAccent: 'finally.',
    subtitle:
      'Understand how your business processes actually execute — not how you think they do. Real-time conformance, automated root-cause analysis, and no-code automation. Connected.',
    primaryCta: { label: 'Get started free', href: '/docs/quick-start' },
    secondaryCta: { label: 'Read the docs', href: '/docs/introduction' },
    trustSignals: [
      { label: 'SOC 2 Type II' },
      { label: '<50ms p99 latency' },
      { label: '99.9% uptime SLA' },
    ],
    statsStrip: [
      { value: '500+', label: 'Operations teams' },
      { value: '40M+', label: 'Events per day' },
      { value: '94.7%', label: 'Avg conformance' },
      { value: '<50ms', label: 'Ingest latency' },
    ],
  },

  // ── Features ───────────────────────────────────────────
  features: {
    sectionIndex: '02',
    sectionLabel: 'Capabilities',
    title: 'Everything you need\nto operate with clarity.',
    subtitle:
      'From raw event data to automated exception handling — without stitching together six different tools or waiting on a consulting engagement.',
    items: [
      {
        title: 'Real-time monitoring',
        description:
          'Every case evaluated as it runs. Deviations surface in milliseconds — not in the next batch report. Intervene while the case is still open.',
      },
      {
        title: 'Conformance checking',
        description:
          'Measure how closely each execution aligns with your reference model. Set thresholds per process; get alerts the moment a case crosses them.',
      },
      {
        title: 'Root cause analysis',
        description:
          'When a case deviates, the cause is identified automatically — using variant analysis and ML attribution. No manual drill-down required.',
      },
      {
        title: 'Custom dashboards',
        description:
          'Compose views from our chart library: process maps, conformance timelines, variant tables, KPI grids. Embed anywhere via signed iframe.',
      },
      {
        title: 'Team collaboration',
        description:
          'Annotate cases, assign investigations, share dashboards. Process intelligence is a team sport — tooling should reflect that.',
      },
      {
        title: 'Enterprise security',
        description:
          'SOC 2 Type II certified. Single-tenant deployment available. SSO, RBAC, and full audit logs on all paid plans.',
      },
    ],
  },

  // ── Testimonials ───────────────────────────────────────
  testimonials: {
    sectionIndex: '03',
    sectionLabel: 'Testimonials',
    title: 'Hear from teams\nwho switched.',
    logoStripLabel: 'Trusted by operations teams at',
    logos: ['TechCorp', 'Axiom', 'Veritas', 'Arcline', 'Novus', 'Stratos'],
    items: [
      {
        quote:
          'We went from quarterly conformance audits to real-time monitoring in a week. The impact on our SLA compliance was immediate.',
        name: 'Sarah Chen',
        role: 'VP Operations',
        company: 'TechCorp',
      },
      {
        quote:
          'The automation studio alone saved us 120 analyst-hours per month. We finally stopped doing the same triage manually every day.',
        name: 'Marcus Webb',
        role: 'Head of Process Excellence',
        company: 'Axiom Financial',
      },
      {
        quote:
          'Clean, fast, no consulting required. We had our first process map live within 30 minutes of connecting our ERP.',
        name: 'Elena Kovacs',
        role: 'COO',
        company: 'Veritas Health',
      },
    ],
  },

  // ── Stats ──────────────────────────────────────────────
  stats: [
    { value: '2.4B', label: 'Events processed', sub: 'total since launch' },
    { value: '47%', label: 'Avg time saved', sub: 'on exception handling' },
    { value: '99.97%', label: 'Platform uptime', sub: 'trailing 12 months' },
    { value: '8min', label: 'Median time to value', sub: 'from first data source' },
  ],

  // ── Pricing ────────────────────────────────────────────
  pricing: {
    sectionIndex: '04',
    sectionLabel: 'Pricing',
    title: 'Simple, transparent pricing.',
    footnote:
      'All plans include SSL encryption, automatic backups, and GDPR-compliant processing.',
    tiers: [
      {
        name: 'Free',
        monthlyPrice: '$0',
        annualPrice: '$0',
        period: 'forever',
        annualPeriod: 'forever',
        description:
          'For individual analysts and small teams getting their first look at process intelligence.',
        cta: { label: 'Start free', href: '/docs/quick-start' },
        featured: false,
        features: [
          '10,000 events / month',
          '1 process model',
          '7-day event history',
          'Process discovery',
          'Basic conformance dashboard',
          'Community support',
        ],
      },
      {
        name: 'Pro',
        monthlyPrice: '$49',
        annualPrice: '$39',
        period: '/seat/month',
        annualPeriod: '/seat/month',
        description:
          'For operations teams that need real-time monitoring, automation, and deeper analytics.',
        cta: { label: 'Start 14-day trial', href: '/docs/quick-start' },
        featured: true,
        features: [
          'Unlimited events',
          'Up to 20 process models',
          '90-day event history',
          'Real-time conformance checking',
          'Root cause analysis',
          'Automation Studio',
          'Custom dashboards',
          'REST API + webhooks',
          'Email & Slack support',
        ],
      },
      {
        name: 'Enterprise',
        monthlyPrice: 'Custom',
        annualPrice: 'Custom',
        period: '',
        annualPeriod: '',
        description:
          'For large organizations with compliance requirements, custom deployment, and SLA needs.',
        cta: { label: 'Talk to sales', href: '/contact' },
        featured: false,
        features: [
          'Everything in Pro',
          'Unlimited models & history',
          'Single-tenant deployment',
          'SSO / SAML',
          'RBAC & full audit logs',
          'Custom data retention',
          'Dedicated Slack channel',
          '99.9% SLA guarantee',
          'Custom integrations',
        ],
      },
    ],
  },

  // ── FAQ ────────────────────────────────────────────────
  faq: {
    sectionIndex: '05',
    sectionLabel: 'FAQ',
    title: 'Common\nquestions.',
    subtitle:
      "Can't find what you're looking for? Reach out to our team — we respond within 24 hours.",
    items: [
      {
        q: 'How long does setup take?',
        a: 'Most teams connect their first data source and see a live process map within 30 minutes. No consulting engagement or multi-month implementation required.',
      },
      {
        q: 'What data sources do you support?',
        a: 'Any system that produces event logs — SAP, Salesforce, ServiceNow, Jira, custom databases, and CSV/Parquet uploads. We provide pre-built connectors for the most common platforms and a REST API for everything else.',
      },
      {
        q: 'Is my data secure?',
        a: 'Yes. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC 2 Type II certified, GDPR compliant, and offer single-tenant deployment for Enterprise customers.',
      },
      {
        q: 'Can I try it before committing?',
        a: "Absolutely. The Free tier is free forever with 10,000 events per month. Pro plans include a 14-day trial with full access to all features. No credit card required to start.",
      },
      {
        q: 'What happens when I exceed my event limit?',
        a: "We never drop your data. Events beyond your plan limit are queued and processed when capacity frees up, or you can upgrade instantly from the dashboard.",
      },
      {
        q: 'Do you offer custom integrations?',
        a: 'Enterprise plans include custom integration development with our engineering team. We also provide webhooks and a comprehensive REST API for self-service integration on all paid plans.',
      },
    ],
  },

  // ── CTA ────────────────────────────────────────────────
  cta: {
    sectionLabel: '06 — Get started',
    title: ['Start understanding', 'your processes.'],
    titleAccent: 'Today.',
    subtitle:
      'Connect your first data source in minutes. No consultants, no lengthy onboarding, no annual contract required.',
    primaryCta: { label: 'Start free — no credit card', href: '/docs/quick-start' },
    secondaryCta: { label: 'Read the docs', href: '/docs/introduction' },
    trialNote: '14-day trial on Pro · Cancel anytime',
  },

  // ── Docs ───────────────────────────────────────────────
  docsVersion: 'v2.0',

  // ── Blog ───────────────────────────────────────────────
  blog: {
    title: 'Product, design & engineering.',
    subtitle: 'Updates, thinking, and stories from the team building Meridian.',
    sectionLabel: 'Journal',
    categories: ['All', 'Product', 'Design', 'Case Study', 'Engineering'],
  },
} as const

export type SiteConfig = typeof siteConfig
