'use client';

import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const MOCK_PRODUCTS = [
  {
    id: '1',
    title: 'Gemstone Dome Ring',
    price: '$89.00',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gemstone-dome-ring-2002793.jpg',
  },
  {
    id: '2',
    title: 'Screw-On Gem Bracelet (Pink)',
    price: '$89.00',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/screw-on-gem-bracelet-3479784.png',
  },
  {
    id: '3',
    title: 'Screw-On Gem Bracelet (Blue)',
    price: '$89.00',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/screw-on-gem-bracelet-1238419.png',
  },
  {
    id: '4',
    title: 'Screw-On Gem Bracelet (Purple)',
    price: '$89.00',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/screw-on-gem-bracelet-6597881.png',
  }
];

function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <a href={`/products/${product.id}`} className="product-image-link">
          <img src={product.image} alt={product.title} loading="lazy" />
        </a>
        
        <button 
          className="wishlist-btn" 
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label="Toggle Wishlist"
        >
          <Heart 
            size={20} 
            strokeWidth={1.5} 
            color={isWishlisted ? 'var(--color-gold)' : 'var(--color-primary-text)'} 
            fill={isWishlisted ? 'var(--color-gold)' : 'none'} 
          />
        </button>

        <div className="quick-actions">
          <button className="quick-add-btn">Quick Add +</button>
        </div>
      </div>

      <div className="product-info">
        <h3><a href={`/products/${product.id}`}>{product.title}</a></h3>
        <p>{product.price}</p>
      </div>
    </article>
  );
}

export default function BestSellers() {
  return (
    <section className="best-sellers-section">
      <div className="section-header">
        <h2 className="section-title">Best Sellers</h2>
        <a href="/collections/best-sellers" className="link-underlined">Shop All Best Sellers</a>
      </div>

      <div className="products-grid">
        {MOCK_PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
