import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Terms of Service' }

export default function TermsPage() {
  return (
    <div className="pt-14 min-h-screen bg-braun-50">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-[10px] font-mono uppercase tracking-widest text-braun-400 mb-6">
          Legal
        </div>
        <h1 className="text-3xl lg:text-4xl font-light tracking-tight text-braun-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-[10px] font-mono text-braun-400 uppercase tracking-widest mb-12">
          Last updated: February 1, 2026
        </p>
        <div className="bg-white border border-braun-200 p-8 lg:p-12 space-y-8 text-sm text-braun-600 leading-relaxed">
          <section>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-braun-900 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using Meridian&apos;s services, you agree to be bound by these terms. If you are using the service on behalf of an organization, you represent that you have the authority to bind that organization.</p>
          </section>
          <section>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-braun-900 mb-3">2. Service Description</h2>
            <p>Meridian provides a process intelligence platform including process discovery, conformance checking, root cause analysis, and workflow automation. Service availability and features vary by plan tier.</p>
          </section>
          <section>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-braun-900 mb-3">3. Your Data</h2>
            <p>You retain all rights to data uploaded to Meridian. We process your data solely to provide the service. Upon account termination, your data will be deleted within 30 days unless legally required to retain it.</p>
          </section>
          <section>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-braun-900 mb-3">4. Acceptable Use</h2>
            <p>You agree not to use Meridian to process data that violates applicable laws, attempt to reverse-engineer the platform, or circumvent usage limits. We reserve the right to suspend accounts that violate these terms.</p>
          </section>
          <section>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-braun-900 mb-3">5. SLA & Uptime</h2>
            <p>Pro plans include a 99.5% uptime guarantee. Enterprise plans include a 99.9% SLA with financial credits for downtime. Scheduled maintenance windows are communicated 72 hours in advance.</p>
          </section>
          <section>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-braun-900 mb-3">6. Contact</h2>
            <p>For questions about these terms, contact <a href="mailto:legal@meridian.io" className="text-braun-900 underline hover:text-braun-orange transition-colors">legal@meridian.io</a>.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
