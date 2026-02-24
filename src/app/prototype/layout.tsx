import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import '../globals.css'

export const metadata = { title: 'Design Language Prototype' }

export default function PrototypeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
        style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
      >
        {/* SVG noise filter — referenced by CSS */}
        <svg className="hidden" aria-hidden="true">
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
      </body>
    </html>
  )
}
