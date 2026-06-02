import React from 'react';
import Link from 'next/link';

export default function BrandStory() {
  return (
    <section className="brand-story">
      <div className="brand-story-image">
        <img 
          src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop" 
          alt="Model wearing Ice & Gold jewelry" 
        />
      </div>
      <div className="brand-story-content">
        <h2 className="story-title">Redefining Affordable Luxury</h2>
        <p className="story-text">
          At Ice & Gold, we believe that timeless elegance shouldn't come with a compromise. 
          Designed and shipped from Atlanta, GA, our collections are meticulously crafted 
          using 18K Gold-Filled and Gold PVD materials paired with the luxurious look of 
          simulated diamonds.
        </p>
        <p className="story-text">
          Our mission is simple: to make premium, tarnish-resistant jewelry accessible to all, 
          without sacrificing durability or style. Luxury you can afford. Confidence you can wear.
        </p>
        <Link href="/about" className="link-underlined">Discover Our Story</Link>
      </div>
    </section>
  );
}
