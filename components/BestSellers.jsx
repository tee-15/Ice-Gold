'use client';
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import Link from 'next/link';

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
          <img src={product.image} alt={product.title} loading="lazy" />
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
          <button 
            className="quick-add-btn"
            onClick={() => addToCart(product)}
          >
            Quick Add +
          </button>
        </div>
      </div>

      <div className="product-info">
        <h3><Link href={`/products/${product.handle}`}>{product.title}</Link></h3>
        <p>{product.price}</p>
      </div>
    </article>
  );
}

export default function BestSellers() {
  const [bestSellers, setBestSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        if (data.products) {
          // Sort or slice differently to differentiate from New Arrivals
          setBestSellers(data.products.slice(4, 8));
        }
      } catch (err) {
        console.error('Failed to fetch best sellers', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBestSellers();
  }, []);

  return (
    <section className="best-sellers-section" style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-primary-bg)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ textAlign: 'left' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Best Sellers</h2>
            <p style={{ color: 'var(--color-secondary-text)', fontSize: '18px' }}>
              Discover our most loved pieces, chosen by you.
            </p>
          </div>
          <Link href="/shop" className="link-underlined" style={{ fontWeight: 500, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Shop All Best Sellers →
          </Link>
        </div>

        <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {isLoading ? (
            <div style={{ color: 'var(--color-secondary-text)' }}>Loading best sellers...</div>
          ) : (
            bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
