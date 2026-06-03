import React from 'react'

export default function ContactPage() {
  return (
    <div className="main-layout">
      <section className="hero-section" style={{ minHeight: '40vh', backgroundColor: 'var(--color-secondary-bg)', padding: '6rem 2rem' }}>
        <h1 className="hero-title" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>Contact Us</h1>
        <p className="hero-subtitle">We're here to help.</p>
      </section>
      
      <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem', minHeight: '50vh', color: 'var(--color-secondary-text)', lineHeight: 1.8 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '24px', color: 'var(--color-primary-text)', marginBottom: '1rem', fontWeight: 400 }}>Customer Support</h2>
            <p>For questions about your order, returns, or our jewelry, our support team is available Monday to Friday, 9am - 5pm EST.</p>
            <p style={{ marginTop: '0.5rem', fontWeight: 500, color: 'var(--color-primary-text)' }}>Email: support@iceandgold.com</p>
          </div>

          <div>
            <h2 style={{ fontSize: '24px', color: 'var(--color-primary-text)', marginBottom: '1rem', fontWeight: 400 }}>Press & Collaborations</h2>
            <p>For press inquiries, influencer partnerships, or wholesale opportunities, please reach out to our PR team.</p>
            <p style={{ marginTop: '0.5rem', fontWeight: 500, color: 'var(--color-primary-text)' }}>Email: pr@iceandgold.com</p>
          </div>

          <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: 'var(--color-primary-bg)', border: '1px solid #eaeaea' }}>
            <h3 style={{ fontSize: '18px', color: 'var(--color-primary-text)', marginBottom: '1rem', fontWeight: 400 }}>Send us a message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input type="text" placeholder="Name" style={{ padding: '1rem', border: '1px solid #eaeaea', fontFamily: 'inherit' }} />
              <input type="email" placeholder="Email" style={{ padding: '1rem', border: '1px solid #eaeaea', fontFamily: 'inherit' }} />
              <textarea placeholder="Message" rows="5" style={{ padding: '1rem', border: '1px solid #eaeaea', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
              <button type="button" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
