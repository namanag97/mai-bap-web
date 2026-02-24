import './prototype.css'

export const metadata = { title: 'Design Language Prototype' }

export default function PrototypeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Hide root layout's nav/footer for prototype isolation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            header, footer, .scroll-to-top { display: none !important; }
            main { padding: 0 !important; }
          `,
        }}
      />
      {/* SVG noise filter — referenced by CSS */}
      <svg
        style={{ position: 'absolute', width: 0, height: 0 }}
        aria-hidden="true"
      >
        <filter id="paper-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      {children}
    </>
  )
}
