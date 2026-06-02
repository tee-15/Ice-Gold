import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="main-layout" style={{ paddingTop: '80px', backgroundColor: 'var(--color-primary-bg)' }}>
      
      {/* Hero Section */}
      <section style={{ 
        position: 'relative',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(https://cdn.shopify.com/s/files/1/0524/9325/4812/files/screw-on-gem-bracelet-3479784.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#fff',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: 'clamp(40px, 5vw, 80px)', fontWeight: 300, marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Elevating the Everyday
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, letterSpacing: '0.02em', opacity: 0.9 }}>
            Luxury is no longer defined by the price tag, but by the confidence it inspires.
          </p>
        </div>
      </section>

      {/* Our Philosophy (Split Section) */}
      <section style={{ padding: '8rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div style={{ paddingRight: '2rem' }}>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Our Philosophy</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--color-secondary-text)', marginBottom: '1.5rem' }}>
              At Ice & Gold, we believe that you shouldn't have to choose between high-quality jewelry and affordability. Founded with a passion for timeless design and modern craftsmanship, our pieces are created to be more than just accessories—they are an extension of your personal style.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--color-secondary-text)' }}>
              We design for the modern individual: someone who values elegance but demands versatility. Our jewelry transitions seamlessly from morning coffee runs to elegant evening galas.
            </p>
          </div>
          <div style={{ position: 'relative', paddingBottom: '125%', overflow: 'hidden' }}>
            <img 
              src="https://cdn.shopify.com/s/files/1/0524/9325/4812/files/e2e13d1007c4df0b6b54560700bee115.jpg" 
              alt="Model wearing Ice & Gold earrings"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* The Craft (Split Section Reversed) */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-secondary-bg)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ position: 'relative', paddingBottom: '125%', overflow: 'hidden', order: -1 }}>
            <img 
              src="https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gemstone-dome-ring-2002793.jpg" 
              alt="Close up of Ice & Gold rings"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ paddingLeft: '2rem' }}>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>The Craft</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--color-secondary-text)', marginBottom: '1.5rem' }}>
              Every piece in our collection is meticulously crafted using thick layers of 18K gold-filled materials and premium simulated diamonds. This ensures a brilliant, tarnish-resistant finish that stands up to your everyday life.
            </p>
            <ul style={{ listStyle: 'none', marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-gold)', borderRadius: '50%' }}></span>
                Water Resistant
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-gold)', borderRadius: '50%' }}></span>
                Hypoallergenic
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-gold)', borderRadius: '50%' }}></span>
                Tarnish Free Guarantee
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '8rem 2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 300, marginBottom: '2rem' }}>Ready to Elevate Your Style?</h2>
        <p style={{ fontSize: '16px', color: 'var(--color-secondary-text)', marginBottom: '3rem' }}>
          Explore our curated collections of rings, necklaces, bracelets, and earrings.
        </p>
        <Link href="/shop" className="btn-primary">
          Shop the Collection
        </Link>
      </section>

    </div>
  )
}
