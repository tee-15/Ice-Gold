import React from 'react';
import { Star } from 'lucide-react';
import Link from 'next/link';

const REVIEWS = [
  {
    id: 1,
    name: "Sarah M.",
    product: "Gold Twisted Herringbone Necklace",
    text: "Absolutely stunning piece. It has the weight and feel of solid gold without the crazy price tag. I wear it everyday and it hasn't tarnished at all.",
    rating: 5
  },
  {
    id: 2,
    name: "Jessica T.",
    product: "Gemstone Dome Ring",
    text: "I get compliments on this ring everywhere I go. The quality is incredible and it looks exactly like the photos. Customer service was also fantastic.",
    rating: 5
  },
  {
    id: 3,
    name: "Amanda L.",
    product: "Gold Link Set",
    text: "This set completely elevated my everyday look. The gold fill is thick and durable. I've showered with it multiple times and it still shines like new.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-secondary-bg)', textAlign: 'center' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ textAlign: 'left' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Loved by You</h2>
            <p style={{ color: 'var(--color-secondary-text)', fontSize: '18px' }}>
              Discover what our community has to say about their Ice & Gold pieces.
            </p>
          </div>
          <Link href="/reviews" className="link-underlined" style={{ fontWeight: 500, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Read All Reviews →
          </Link>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {REVIEWS.map((review) => (
            <div key={review.id} style={{
              backgroundColor: 'var(--color-primary-bg)',
              padding: '3rem 2rem',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="var(--color-gold)" color="var(--color-gold)" />
                  ))}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 400, marginBottom: '1rem', lineHeight: '1.4' }}>
                  "{review.text}"
                </h3>
              </div>
              
              <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1.5rem' }}>
                <p style={{ fontWeight: 600, fontSize: '14px', marginBottom: '0.25rem' }}>{review.name}</p>
                <p style={{ color: 'var(--color-secondary-text)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Purchased {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
