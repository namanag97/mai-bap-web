import { ButtonLink, MetaLabel } from '@/components/ui'

export default function NotFound() {
  return (
    <div className="pt-14 min-h-screen bg-braun-50 flex items-center justify-center">
      <div className="text-center px-6">
        <MetaLabel as="div" className="mb-6">
          Error 404
        </MetaLabel>
        <h1 className="text-6xl lg:text-8xl font-mono font-light text-braun-900 mb-4">
          404
        </h1>
        <p className="text-sm text-braun-500 font-light mb-10 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <ButtonLink href="/" size="md">
            Back to home
          </ButtonLink>
          <ButtonLink href="/docs/introduction" variant="secondary" size="md">
            Read the docs
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}
