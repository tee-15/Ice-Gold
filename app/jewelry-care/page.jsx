import React from 'react'

export default function JewelryCarePage() {
  return (
    <div className="main-layout">
      <section className="hero-section" style={{ minHeight: '40vh', backgroundColor: 'var(--color-primary-bg)', padding: '6rem 2rem' }}>
        <h1 className="hero-title" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>Jewelry Care</h1>
        <p className="hero-subtitle">How to keep your Ice & Gold pieces looking flawless.</p>
      </section>
      
      <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem', minHeight: '50vh', color: 'var(--color-secondary-text)', lineHeight: 1.8 }}>
        <h2 style={{ fontSize: '24px', color: 'var(--color-primary-text)', marginBottom: '1.5rem', fontWeight: 400 }}>Made to be Lived In</h2>
        <p style={{ marginBottom: '2rem' }}>Our pieces are crafted with premium 18K gold-filled materials, meaning they are tarnish-resistant, hypoallergenic, and highly durable. You can confidently wear them while showering, exercising, and swimming.</p>
        
        <h2 style={{ fontSize: '24px', color: 'var(--color-primary-text)', marginBottom: '1.5rem', fontWeight: 400 }}>Maximizing Shine</h2>
        <p style={{ marginBottom: '2rem' }}>While your jewelry won't tarnish from water exposure, lotions, perfumes, and harsh chemicals can cause residue buildup that dulls the shine over time. To keep your pieces looking brand new:</p>
        <ul style={{ listStylePosition: 'inside', marginBottom: '3rem' }}>
          <li>Wipe down your jewelry with a soft cloth after exposure to harsh chemicals.</li>
          <li>Clean periodically with mild soap and warm water, then dry thoroughly.</li>
          <li>Store your pieces in the provided Ice & Gold pouch when not in use to prevent scratching.</li>
        </ul>

        <h2 style={{ fontSize: '24px', color: 'var(--color-primary-text)', marginBottom: '1.5rem', fontWeight: 400 }}>Our Warranty</h2>
        <p>We are proud of the quality of our jewelry. That's why every piece comes with a 1-year warranty against manufacturing defects, including clasp failures and tarnishing. Treat your jewelry well, and it will last you for years to come.</p>
      </div>
    </div>
  )
}
