import React from 'react'

export default function ShippingPage() {
  return (
    <div className="main-layout">
      <section className="hero-section" style={{ minHeight: '40vh', backgroundColor: 'var(--color-secondary-bg)', padding: '6rem 2rem' }}>
        <h1 className="hero-title" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>Shipping & Returns</h1>
        <p className="hero-subtitle">Fast, reliable shipping and hassle-free returns.</p>
      </section>
      
      <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem', minHeight: '50vh', color: 'var(--color-secondary-text)', lineHeight: 1.8 }}>
        <h2 style={{ fontSize: '24px', color: 'var(--color-primary-text)', marginBottom: '1.5rem', fontWeight: 400 }}>Shipping Options</h2>
        <p style={{ marginBottom: '2rem' }}>We offer fast and reliable shipping options to get your jewelry to you as quickly as possible. All orders are processed within 1-2 business days.</p>
        <ul style={{ listStylePosition: 'inside', marginBottom: '3rem' }}>
          <li><strong>Standard Shipping:</strong> 3-5 business days (Free on orders over $100)</li>
          <li><strong>Expedited Shipping:</strong> 2-3 business days</li>
          <li><strong>International Shipping:</strong> 7-14 business days (Rates calculated at checkout)</li>
        </ul>

        <h2 style={{ fontSize: '24px', color: 'var(--color-primary-text)', marginBottom: '1.5rem', fontWeight: 400 }}>14-Day Money-Back Guarantee</h2>
        <p style={{ marginBottom: '2rem' }}>Not perfectly in love with your new piece? No problem. We offer a 14-day money-back guarantee. Simply send it back within 14 days from when the order was received for a full refund.</p>
        
        <h2 style={{ fontSize: '24px', color: 'var(--color-primary-text)', marginBottom: '1.5rem', fontWeight: 400 }}>How to Initiate a Return</h2>
        <p>To initiate a return, please visit our Contact page or email our support team with your order number. We will provide you with a return shipping label and instructions. Please ensure the jewelry is returned in its original packaging without signs of wear.</p>
      </div>
    </div>
  )
}
