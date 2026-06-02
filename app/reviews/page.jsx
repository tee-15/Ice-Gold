import React from 'react';
import { Star } from 'lucide-react';

// Extended list of reviews
const ALL_REVIEWS = [
  {
    id: 1,
    name: "Sarah M.",
    product: "Gold Twisted Herringbone Necklace",
    text: "Absolutely stunning piece. It has the weight and feel of solid gold without the crazy price tag. I wear it everyday and it hasn't tarnished at all.",
    rating: 5,
    date: "May 12, 2026"
  },
  {
    id: 2,
    name: "Jessica T.",
    product: "Gemstone Dome Ring",
    text: "I get compliments on this ring everywhere I go. The quality is incredible and it looks exactly like the photos. Customer service was also fantastic.",
    rating: 5,
    date: "April 28, 2026"
  },
  {
    id: 3,
    name: "Amanda L.",
    product: "Gold Link Set",
    text: "This set completely elevated my everyday look. The gold fill is thick and durable. I've showered with it multiple times and it still shines like new.",
    rating: 5,
    date: "April 15, 2026"
  },
  {
    id: 4,
    name: "Chloe R.",
    product: "Double Mixed Metal Ring",
    text: "Love the mixed metals! It matches literally everything in my wardrobe. True to size and very comfortable.",
    rating: 4,
    date: "March 30, 2026"
  },
  {
    id: 5,
    name: "Emily W.",
    product: "Gold Tassel Earrings",
    text: "Wore these to a wedding and felt so glamorous. They are surprisingly lightweight for how big they are. Highly recommend!",
    rating: 5,
    date: "March 18, 2026"
  },
  {
    id: 6,
    name: "Michelle K.",
    product: "Water Drop Earring and Necklace Set",
    text: "Beautiful set. The packaging was lovely too, making it a perfect gift. Very happy with this purchase.",
    rating: 5,
    date: "February 22, 2026"
  }
];

export default function ReviewsPage() {
  return (
    <div className="main-layout" style={{ paddingTop: '80px', backgroundColor: 'var(--color-primary-bg)' }}>
      <section style={{ padding: '6rem 2rem', maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
        <h1 className="hero-title" style={{ marginBottom: '1rem' }}>Customer Reviews</h1>
        <p style={{ color: 'var(--color-secondary-text)', marginBottom: '4rem', fontSize: '18px' }}>
          Real feedback from our amazing community.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '2rem' 
        }}>
          {ALL_REVIEWS.map((review) => (
            <div key={review.id} style={{
              backgroundColor: '#fff',
              padding: '3rem 2rem',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              borderRadius: '8px'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < review.rating ? "var(--color-gold)" : "none"} color="var(--color-gold)" />
                    ))}
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--color-secondary-text)' }}>{review.date}</span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 400, marginBottom: '1rem', lineHeight: '1.6' }}>
                  "{review.text}"
                </h3>
              </div>
              
              <div style={{ marginTop: '2rem', borderTop: '1px solid #f0f0f0', paddingTop: '1.5rem' }}>
                <p style={{ fontWeight: 600, fontSize: '14px', marginBottom: '0.25rem' }}>{review.name}</p>
                <p style={{ color: 'var(--color-secondary-text)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Purchased {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
