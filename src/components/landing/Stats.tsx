const stats = [
  { value: '500+',  label: 'Teams worldwide',    sub: 'across 40+ countries' },
  { value: '40M+',  label: 'Events ingested / day', sub: 'at peak throughput' },
  { value: '94.7%', label: 'Avg conformance score', sub: 'across all customers' },
  { value: '<50ms', label: 'Ingest latency',     sub: 'p99, all regions' },
]

export default function Stats() {
  return (
    <section className="border-b border-braun-200 bg-braun-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-braun-800">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-14 ${i === 0 ? 'pr-8' : 'px-8'} ${i === stats.length - 1 ? 'lg:pl-8 lg:pr-0' : ''}`}
            >
              {/* Large mono number — font-light per DS MetricCard spec */}
              <div className="text-4xl lg:text-5xl font-mono font-light text-white tabular-nums mb-2">
                {s.value}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-braun-400 mb-1">
                {s.label}
              </div>
              <div className="text-[10px] font-mono text-braun-600">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
