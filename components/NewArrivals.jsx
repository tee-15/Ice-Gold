'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';

import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';

function ProductCard({ product }) {
  const { addToCart } = useCartStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const isWishlisted = isInWishlist(product.id);

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <Link href={`/products/${product.handle}`} className="product-image-link">
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
        <Link href={`/products/${product.handle}`} className="product-title-link">
          <h3>{product.title}</h3>
        </Link>
        <p className="product-price">{product.price}</p>
      </div>
    </article>
  );
}

export default function NewArrivals() {
  const [newArrivals, setNewArrivals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        if (data.products) {
          setNewArrivals(data.products.slice(0, 4));
        }
      } catch (err) {
        console.error('Failed to fetch new arrivals', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNewArrivals();
  }, []);

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
          {isLoading ? (
            <div style={{ color: 'var(--color-secondary-text)' }}>Loading new arrivals...</div>
          ) : (
            newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
