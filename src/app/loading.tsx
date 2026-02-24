export default function Loading() {
  return (
    <div className="pt-14 min-h-screen bg-surface-ground flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-5 h-5 border border-border-strong relative">
          <div className="absolute inset-0 bg-surface-inverse origin-bottom animate-pulse" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted">
          Loading
        </span>
      </div>
    </div>
  )
}
