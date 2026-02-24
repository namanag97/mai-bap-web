/**
 * Centralized site configuration.
 *
 * Edit THIS FILE to rebrand the entire template.
 * Every component imports from here — no hardcoded brand strings elsewhere.
 */

export const siteConfig = {
  // ── Brand ──────────────────────────────────────────────
  name: 'mai-bap',
  tagline: 'The AI that runs your business. You run your vision.',
  description:
    'mai-bap is your management AI — it handles workflows, ops, reporting, and coordination so your team can focus on building. No consultants. No 6-month rollout. Just done.',
  url: 'https://mai-bap.com',
  email: 'hello@mai-bap.com',
  salesEmail: 'sales@mai-bap.com',
  privacyEmail: 'privacy@mai-bap.com',
  legalEmail: 'legal@mai-bap.com',

  // ── Navigation ─────────────────────────────────────────
  navLinks: [
    { label: 'Features', href: '/#features' },
    { label: 'How it works', href: '/docs/introduction' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/#pricing' },
  ],
  ctaLinks: {
    signIn: { label: 'Sign in', href: '/docs/quick-start' },
    getStarted: { label: 'Get started', href: '/docs/quick-start' },
    bookDemo: { label: 'Book a demo', href: '/contact' },
  },

  // ── Footer ─────────────────────────────────────────────
  footerTagline: 'Management AI for founders who have better things to do.',
  footerBadges: 'SOC 2 Type II · GDPR',
  footerColumns: [
    {
      heading: 'Product',
      links: [
        { label: 'Features', href: '/#features' },
        { label: 'Integrations', href: '/integrations' },
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
    sectionLabel: 'Management AI Platform',
    title: ['Your business,'],
    titleAccent: 'handled.',
    subtitle:
      'mai-bap is Hindi for "the one who takes care of everything." That\'s exactly what it does — automates your ops, surfaces what matters, and keeps your team moving. No BS, no setup hell.',
    primaryCta: { label: 'Get started free', href: '/docs/quick-start' },
    secondaryCta: { label: 'See how it works', href: '/docs/introduction' },
    trustSignals: [
      { label: 'No credit card required' },
      { label: 'Live in under 10 minutes' },
      { label: '99.9% uptime SLA' },
    ],
    statsStrip: [
      { value: '12K+', label: 'Founders using mai-bap' },
      { value: '3.2M+', label: 'Tasks automated weekly' },
      { value: '11h', label: 'Avg hours saved per week' },
      { value: '< 10min', label: 'Time to first automation' },
    ],
  },

  // ── Features ───────────────────────────────────────────
  features: {
    sectionLabel: 'Capabilities',
    title: 'Everything your ops team\ndoes. Automated.',
    subtitle:
      'From daily standups to quarterly reports — mai-bap handles the coordination, chasing, and busywork so your team can do actual work.',
    items: [
      {
        title: 'Workflow automation',
        description:
          'Map any recurring process once — approvals, onboarding, reporting, handoffs. mai-bap runs it on autopilot from there. If something breaks, it tells you.',
      },
      {
        title: 'Process intelligence',
        description:
          'See how work actually flows through your business, not how you think it does. Spot bottlenecks, deviations, and hidden delays before they become fires.',
      },
      {
        title: 'AI reporting',
        description:
          'Weekly ops summaries, team performance snapshots, and board-ready decks — generated automatically from your connected tools. No analyst required.',
      },
      {
        title: 'Smart task routing',
        description:
          'AI assigns tasks to the right person based on workload, skills, and context. No more "who owns this?" Slack threads that go nowhere.',
      },
      {
        title: 'Meeting intelligence',
        description:
          'Connects to your calendar. Summarises meetings, extracts action items, and follows up automatically. Your meetings finally mean something.',
      },
      {
        title: 'Enterprise-grade security',
        description:
          'SOC 2 Type II certified. All data encrypted at rest and in transit. SSO, RBAC, and full audit logs available. Your data stays yours.',
      },
    ],
  },

  // ── Testimonials ───────────────────────────────────────
  testimonials: {
    sectionLabel: 'Testimonials',
    title: 'Founders who stopped\ndoing ops manually.',
    logoStripLabel: 'Trusted by teams at',
    logos: ['Arcline', 'Novus', 'Stratos', 'Axiom', 'Veritas', 'TechCorp'],
    items: [
      {
        quote:
          'I used to spend 3 hours every Monday on status updates and follow-ups. mai-bap does all of it automatically now. I genuinely forgot what I used to do with those 3 hours.',
        name: 'Priya Mehta',
        role: 'Founder & CEO',
        company: 'Arcline',
      },
      {
        quote:
          'We tried Monday, Asana, Notion, and three other tools. None of them removed work — they just moved it around. mai-bap actually removes it.',
        name: 'James Okafor',
        role: 'COO',
        company: 'Novus',
      },
      {
        quote:
          '"mai-bap" literally means everything to me in Hindi, and honestly, for our ops it kind of is. Best product name in the space too.',
        name: 'Riya Sharma',
        role: 'Head of Operations',
        company: 'Stratos',
      },
    ],
  },

  // ── Stats ──────────────────────────────────────────────
  stats: [
    { value: '3.2M', label: 'Tasks automated', sub: 'every week across all teams' },
    { value: '11h', label: 'Avg saved per user', sub: 'on repetitive ops work' },
    { value: '99.97%', label: 'Platform uptime', sub: 'trailing 12 months' },
    { value: '9min', label: 'Median setup time', sub: 'from signup to first automation' },
  ],

  // ── Pricing ────────────────────────────────────────────
  pricing: {
    sectionLabel: 'Pricing',
    title: 'Simple pricing.\nNo surprises.',
    footnote:
      'All plans include SSL encryption, automatic backups, and GDPR-compliant processing.',
    tiers: [
      {
        name: 'Starter',
        monthlyPrice: '$0',
        annualPrice: '$0',
        period: 'forever',
        annualPeriod: 'forever',
        description:
          'For solo founders and small teams who want to see what automated ops actually feels like.',
        cta: { label: 'Start free', href: '/docs/quick-start' },
        featured: false,
        features: [
          '5 active workflows',
          'Up to 500 tasks/month',
          '3 connected integrations',
          'AI task routing',
          'Weekly summary report',
          'Community support',
        ],
      },
      {
        name: 'Growth',
        monthlyPrice: '$49',
        annualPrice: '$39',
        period: '/seat/month',
        annualPeriod: '/seat/month',
        description:
          'For growing teams that need real automation, process intelligence, and AI reporting.',
        cta: { label: 'Start 14-day trial', href: '/docs/quick-start' },
        featured: true,
        features: [
          'Unlimited workflows',
          'Unlimited tasks',
          'Unlimited integrations',
          'Process intelligence dashboard',
          'AI-generated reports',
          'Meeting intelligence',
          'Custom dashboards',
          'REST API + webhooks',
          'Email & Slack support',
        ],
      },
      {
        name: 'Scale',
        monthlyPrice: 'Custom',
        annualPrice: 'Custom',
        period: '',
        annualPeriod: '',
        description:
          'For larger organisations with compliance requirements, custom deployments, and SLA guarantees.',
        cta: { label: 'Talk to us', href: '/contact' },
        featured: false,
        features: [
          'Everything in Growth',
          'Single-tenant deployment',
          'SSO / SAML',
          'RBAC & full audit logs',
          'Custom data retention',
          'Dedicated Slack channel',
          '99.9% SLA guarantee',
          'Custom integrations',
          'Dedicated success manager',
        ],
      },
    ],
  },

  // ── FAQ ────────────────────────────────────────────────
  faq: {
    sectionLabel: 'FAQ',
    title: 'Common\nquestions.',
    subtitle:
      "Can't find what you're looking for? Reach out — we respond within 24 hours.",
    items: [
      {
        q: 'How long does setup actually take?',
        a: 'Under 10 minutes for most teams. Connect your tools (Slack, Jira, Notion, Google Workspace, etc.), define one workflow, and mai-bap starts running it. No consultants, no implementation sprints.',
      },
      {
        q: 'What tools does it connect to?',
        a: 'Slack, Google Workspace, Notion, Jira, Linear, Salesforce, HubSpot, GitHub, and 40+ more. We also provide a REST API and webhooks for anything custom.',
      },
      {
        q: 'Is my data secure?',
        a: 'Yes. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC 2 Type II certified and GDPR compliant. Enterprise plans get single-tenant deployment.',
      },
      {
        q: 'What does "mai-bap" mean?',
        a: '"Mai-bap" is a Hindi phrase meaning "the one who takes care of everything for you" — literally mother-father. It\'s used when someone handles all your problems. That\'s what this product does for your business operations.',
      },
      {
        q: 'Is this just another project management tool?',
        a: 'No. Project management tools move work around. mai-bap removes it. The goal is zero manual coordination — AI handles routing, follow-ups, reporting, and escalation automatically.',
      },
      {
        q: 'Can I try before committing?',
        a: 'The Starter plan is free forever with real features, not a crippled demo. Growth plans get a 14-day full trial. No credit card required to start either.',
      },
    ],
  },

  // ── CTA ────────────────────────────────────────────────
  cta: {
    sectionLabel: 'Get started',
    title: ['Stop managing.', 'Start building.'],
    titleAccent: 'Let mai-bap handle it.',
    subtitle:
      'Connect your first tool in minutes. Your first automation runs the same day. No setup fee, no annual lock-in, no consultants.',
    primaryCta: { label: 'Start free — no credit card', href: '/docs/quick-start' },
    secondaryCta: { label: 'See how it works', href: '/docs/introduction' },
    trialNote: '14-day trial on Growth · Cancel anytime',
  },

  // ── Docs ───────────────────────────────────────────────
  docsVersion: 'v1.0',

  // ── Blog ───────────────────────────────────────────────
  blog: {
    title: 'Ops, AI & building in public.',
    subtitle: 'Thinking from the team building mai-bap. Honest, practical, no fluff.',
    sectionLabel: 'Journal',
    categories: ['All', 'Product', 'Ops', 'Case Study', 'Engineering'],
  },

  // ── Integrations ───────────────────────────────────────
  integrations: {
    sectionLabel: 'Integrations',
    title: 'Works with the tools\nyour team already uses.',
    subtitle:
      'Connect Slack, Jira, Salesforce, and 40+ more tools out of the box. Two-way sync, no ETL required.',
    allPageTitle: 'Every integration,\nout of the box.',
    allPageSubtitle:
      'mai-bap connects to 40+ tools your team already uses. Two-way sync, no ETL, no custom scripts.',
    ctaLabel: 'See all integrations',
    ctaHref: '/integrations',
    featuredNames: [
      'Slack', 'Jira', 'Salesforce', 'Notion',
      'GitHub', 'HubSpot', 'Google Calendar', 'Linear',
      'Stripe', 'Zapier', 'Datadog', 'Confluence',
    ],
    categories: [
      {
        name: 'Communication',
        items: [
          { name: 'Slack', description: 'Post summaries, alerts, and action items directly to channels.' },
          { name: 'Microsoft Teams', description: 'Sync standups and approvals into team channels.' },
          { name: 'Email', description: 'Send automated digests and escalation notices.' },
        ],
      },
      {
        name: 'Project Management',
        items: [
          { name: 'Jira', description: 'Create, update, and close tickets based on workflow triggers.' },
          { name: 'Linear', description: 'Track issues and cycles alongside your automated workflows.' },
          { name: 'Asana', description: 'Sync task assignments and due dates automatically.' },
          { name: 'Notion', description: 'Write summaries, logs, and reports to your workspace.' },
          { name: 'Monday.com', description: 'Update boards and automate status changes.' },
        ],
      },
      {
        name: 'CRM',
        items: [
          { name: 'Salesforce', description: 'Update deals, contacts, and pipeline stages automatically.' },
          { name: 'HubSpot', description: 'Sync contacts, log activity, and trigger sequences.' },
          { name: 'Pipedrive', description: 'Keep your pipeline current without manual entry.' },
          { name: 'Intercom', description: 'Route customer signals to the right workflows.' },
        ],
      },
      {
        name: 'Engineering',
        items: [
          { name: 'GitHub', description: 'Track PRs, deployments, and incidents in your workflows.' },
          { name: 'GitLab', description: 'Connect CI/CD events to operational processes.' },
          { name: 'PagerDuty', description: 'Route incidents and escalations through your on-call process.' },
          { name: 'Datadog', description: 'Trigger automation based on monitoring alerts.' },
        ],
      },
      {
        name: 'Google Workspace',
        items: [
          { name: 'Google Calendar', description: 'Read meetings and generate summaries and action items.' },
          { name: 'Google Drive', description: 'Attach reports and documents to workflow outputs.' },
          { name: 'Google Sheets', description: 'Write structured data outputs to spreadsheets.' },
          { name: 'Gmail', description: 'Send automated follow-ups and digests.' },
        ],
      },
      {
        name: 'Finance',
        items: [
          { name: 'Stripe', description: 'Trigger workflows from payment and subscription events.' },
          { name: 'QuickBooks', description: 'Automate invoice and expense approval flows.' },
          { name: 'Xero', description: 'Connect financial events to operations workflows.' },
          { name: 'Chargebee', description: 'Sync subscription lifecycle events to your team.' },
        ],
      },
      {
        name: 'HR & People',
        items: [
          { name: 'BambooHR', description: 'Automate onboarding and offboarding processes.' },
          { name: 'Rippling', description: 'Trigger HR events through structured workflows.' },
          { name: 'Workday', description: 'Connect people ops to your business processes.' },
        ],
      },
      {
        name: 'Custom',
        items: [
          { name: 'REST API', description: "Connect any service using mai-bap's REST API." },
          { name: 'Webhooks', description: 'Trigger and receive events from any system.' },
          { name: 'Zapier', description: 'Connect 5,000+ apps via Zapier automations.' },
        ],
      },
    ],
  },
} as const

export type SiteConfig = typeof siteConfig
