'use client';

import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import Link from 'next/link';

import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';
import { ALL_PRODUCTS } from '../lib/data';

// Get 4 products for best sellers display
const BEST_SELLERS = ALL_PRODUCTS.slice(0, 4);

function ProductCard({ product }) {
  const { addToCart } = useCartStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const isWishlisted = isInWishlist(product.id);

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <Link href={`/products/${product.id}`} className="product-image-link">
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
        <h3><Link href={`/products/${product.id}`}>{product.title}</Link></h3>
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
        <Link href="/collections/best-sellers" className="link-underlined">Shop All Best Sellers</Link>
      </div>

      <div className="products-grid">
        {BEST_SELLERS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
