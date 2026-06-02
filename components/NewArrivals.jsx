'use client'
import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';

import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';
import { ALL_PRODUCTS } from '../lib/data';

// Get the last 4 products to simulate "New Arrivals"
const newArrivals = ALL_PRODUCTS.slice(-4).reverse();

function ProductCard({ product }) {
  const { addToCart } = useCartStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const isWishlisted = isInWishlist(product.id);

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <Link href={`/products/${product.id}`} className="product-image-link">
          <img src={product.image} alt={product.title} loading="lazy" decoding="async" className="primary-image" />
        </Link>
        
        <button 
          className="wishlist-btn" 
          onClick={() => toggleWishlist(product)}
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
          <button className="quick-add-btn" onClick={() => addToCart(product)}>
            Quick Add +
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <Link href={`/products/${product.id}`} className="product-title-link">
          <h3>{product.title}</h3>
        </Link>
        <p className="product-price">{product.price}</p>
      </div>
    </article>
  );
}

export default function NewArrivals() {
  return (
    <section className="best-sellers-section" style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-primary-bg)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ textAlign: 'left' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>New Arrivals</h2>
            <p style={{ color: 'var(--color-secondary-text)', fontSize: '18px' }}>
              Fresh pieces to elevate your everyday collection.
            </p>
          </div>
          <Link href="/shop" className="link-underlined" style={{ fontWeight: 500, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Shop New Arrivals →
          </Link>
        </div>

        <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
