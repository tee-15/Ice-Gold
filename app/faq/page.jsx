import React from 'react'
import Accordion from '../../components/Accordion'

export default function FAQPage() {
  const faqs = [
    { title: 'What materials do you use?', content: 'We use premium 18K gold-filled materials. This ensures our jewelry is tarnish-resistant, hypoallergenic, and perfect for everyday wear.' },
    { title: 'Is your jewelry water-resistant?', content: 'Yes! Our pieces are designed to be lived in. You can wear them in the shower, pool, or ocean without worrying about tarnishing.' },
    { title: 'Do you offer a warranty?', content: 'Yes, we stand by the quality of our jewelry with a 1-year warranty covering any manufacturing defects, including clasp failures and tarnishing.' },
    { title: 'How do I care for my jewelry?', content: 'While our jewelry is water-resistant, we recommend wiping it down with a soft cloth after exposure to harsh chemicals or salt water to maintain its maximum shine.' },
    { title: 'What is your return policy?', content: 'We offer a 14-day money-back guarantee. If you are not completely satisfied with your purchase, you can return it for a full refund within 14 days of receipt.' }
  ]

  return (
    <div className="main-layout">
      <section className="hero-section" style={{ minHeight: '40vh', backgroundColor: 'var(--color-dark)', color: '#fff', padding: '6rem 2rem' }}>
        <h1 className="hero-title" style={{ color: '#fff', fontSize: 'clamp(40px, 5vw, 64px)' }}>Frequently Asked Questions</h1>
        <p className="hero-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Everything you need to know about Ice & Gold.</p>
      </section>
      <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem', minHeight: '50vh' }}>
        <Accordion items={faqs} />
      </div>
    </div>
  )
}
