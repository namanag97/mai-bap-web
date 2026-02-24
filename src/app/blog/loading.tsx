export default function BlogLoading() {
  return (
    <div className="pt-14 min-h-screen bg-surface-ground">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Skeleton header */}
        <div className="h-3 w-32 bg-border-default animate-pulse mb-8" />
        <div className="h-8 w-3/4 bg-border-default animate-pulse mb-4" />
        <div className="h-4 w-1/2 bg-surface-inset animate-pulse mb-12" />

        {/* Skeleton cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-default">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-surface-raised p-8">
              <div className="h-3 w-16 bg-surface-inset animate-pulse mb-4" />
              <div className="h-5 w-full bg-border-default animate-pulse mb-3" />
              <div className="h-3 w-3/4 bg-surface-inset animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
