'use client'
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
            Ice & Gold
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, letterSpacing: '0.02em', opacity: 0.9 }}>
            Luxury You Can Afford
          </p>
        </div>
      </section>

      {/* Our Story (Split Section) */}
      <section style={{ padding: '8rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>
          <div style={{ paddingRight: '2rem' }}>
            <h2 className="section-title" style={{ marginBottom: '2rem', fontSize: '32px' }}>Our Story</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--color-secondary-text)', marginBottom: '1rem' }}>
              Growing up, I was inspired by my mom, Lola, who sold Gold jewelry to some of the wealthiest people in Nigeria.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--color-secondary-text)', marginBottom: '1rem' }}>
              My love for styling jewelry goes beyond just wearing it. I want to inspire creativity, helping customers see how versatile and expressive jewelry can be.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--color-secondary-text)', marginBottom: '1rem' }}>
              With Ice & Gold, luxury isn't just affordable—it's a canvas for you to explore your style, mix pieces, and make every outfit shine.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--color-secondary-text)', marginBottom: '1rem' }}>
              I invite you to explore the world of Ice and Gold and discover pieces that resonate with your own unique story. Every creation is a reflection of my passion and my mother's enduring inspiration.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--color-secondary-text)', marginBottom: '1rem' }}>
              Together, let's celebrate the beauty of life, one exquisite piece at a time.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--color-secondary-text)', marginBottom: '1rem' }}>
              Thank you for being a part of my journey.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--color-secondary-text)', fontStyle: 'italic', fontWeight: 500 }}>
              Love and Elegance,<br/>Fela
            </p>
            <div style={{ marginTop: '3rem' }}>
              <img src="/logo.webp" alt="Ice & Gold Logo" style={{ height: '30px', opacity: 0.8 }} />
            </div>
          </div>
          <div style={{ position: 'relative', paddingBottom: '130%', overflow: 'hidden' }}>
            <img 
              src="/founder.webp" 
              alt="Ice & Gold Founder"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>
        </div>
      </section>

      {/* The Craft (Split Section Reversed) */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-secondary-bg)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ position: 'relative', paddingBottom: '130%', overflow: 'hidden', order: -1 }}>
            <img 
              src="https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gemstone-dome-ring-2002793.jpg" 
              alt="Close up of Ice & Gold rings"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ paddingLeft: '2rem' }}>
            <h2 className="section-title" style={{ marginBottom: '2rem', fontSize: '32px' }}>The Craft</h2>
            <p style={{ fontSize: '16px', lineHeight: '2', color: 'var(--color-secondary-text)', marginBottom: '1.5rem' }}>
              Every piece in our collection is meticulously crafted to give you the weight and feel of solid gold without the crazy price tag. We use thick layers of premium materials to ensure a brilliant finish that stands up to your everyday life.
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

      {/* Our Metals Section */}
      <section style={{ 
        position: 'relative',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(https://iceandgold.com/cdn/shop/files/SocialMedia_PR2_cd686ce5-3f66-4062-824e-0f0d05f481ff.png?v=1699904816)', // using the rich 3D gold logo texture as a dark moody background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#fff',
        textAlign: 'center',
        padding: '4rem 2rem',
        marginTop: '4rem'
      }}>
        <div style={{ maxWidth: '600px', zIndex: 2 }}>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Our Metals
          </h2>
          <p style={{ fontSize: '18px', fontWeight: 300, letterSpacing: '0.02em', opacity: 0.9, lineHeight: '1.8', marginBottom: '3rem' }}>
            Crafted in recycled Gold Filled with Simulated diamonds.
          </p>
          <Link 
            href="/shop" 
            style={{ 
              display: 'inline-block', 
              padding: '1rem 3rem', 
              backgroundColor: '#fff', 
              color: '#000', 
              textDecoration: 'none', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em', 
              fontSize: '14px',
              transition: 'all 0.3s ease',
              borderRadius: '4px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.border = '1px solid #fff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.color = '#000';
              e.currentTarget.style.border = '1px solid transparent';
            }}
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '8rem 2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 300, marginBottom: '2rem' }}>Ready to Elevate Your Everyday?</h2>
        <p style={{ fontSize: '16px', color: 'var(--color-secondary-text)', marginBottom: '3rem' }}>
          Explore our curated collections and find the perfect pieces to add to your rotation.
        </p>
        <Link href="/shop" className="btn-primary">
          Shop the Collection
        </Link>
      </section>

    </div>
  )
}
