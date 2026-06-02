'use client'
import React from 'react'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useWishlistStore } from '../../store/wishlistStore'
import { useCartStore } from '../../store/cartStore'

export default function WishlistPage() {
  const { wishlistItems, toggleWishlist } = useWishlistStore()
  const { addToCart } = useCartStore()

  return (
    <div className="main-layout" style={{ paddingTop: '80px', backgroundColor: 'var(--color-primary-bg)', minHeight: '100vh' }}>
      <section style={{ padding: '6rem 2rem', maxWidth: '1600px', margin: '0 auto' }}>
        <h1 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Your Wishlist</h1>
        
        {wishlistItems.length === 0 ? (
          <div style={{ padding: '4rem', border: '1px dashed #ccc', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: 'var(--color-secondary-text)', marginBottom: '2rem' }}>
              You haven't added anything to your wishlist yet.
            </p>
            <Link href="/shop" className="btn-secondary">Explore Products</Link>
          </div>
        ) : (
          <div className="shop-grid">
            {wishlistItems.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <Link href={`/products/${product.id}`} className="product-image-link">
                    <img src={product.image} alt={product.title} loading="lazy" className="primary-image" />
                  </Link>
                  <button 
                    className="wishlist-btn" 
                    onClick={() => toggleWishlist(product)}
                    aria-label="Remove from Wishlist"
                  >
                    <Heart 
                      size={20} 
                      strokeWidth={1.5} 
                      color="var(--color-gold)" 
                      fill="var(--color-gold)" 
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
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
