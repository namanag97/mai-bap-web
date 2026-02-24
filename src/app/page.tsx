// TEMP DEBUG: minimal static page to isolate white screen issue
// import Hero from '@/components/landing/Hero'
// import Features from '@/components/landing/Features'
// import Testimonials from '@/components/landing/Testimonials'
// import Stats from '@/components/landing/Stats'
// import Pricing from '@/components/landing/Pricing'
// import FAQ from '@/components/landing/FAQ'
// import CTA from '@/components/landing/CTA'

export default function HomePage() {
  return (
    <div style={{ padding: '100px 40px', fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: 48, marginBottom: 16 }}>Debug Test</h1>
      <p style={{ fontSize: 18, color: '#666' }}>
        If you can see this text, the layout and framework work fine.
        The issue is in one of the landing components.
      </p>
      <p style={{ fontSize: 14, color: '#999', marginTop: 8 }}>
        Timestamp: {new Date().toISOString()}
      </p>
    </div>
  )
}
