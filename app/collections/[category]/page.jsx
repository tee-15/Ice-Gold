'use client'
import React from 'react'
import Link from 'next/link'
import { ALL_PRODUCTS, COLLECTIONS } from '../../../lib/data'
import { notFound } from 'next/navigation'
import { Heart } from 'lucide-react'
import { useCartStore } from '../../../store/cartStore'
import { useWishlistStore } from '../../../store/wishlistStore'

export default function CategoryPage({ params }) {
  const { addToCart } = useCartStore()
  const { toggleWishlist, isInWishlist } = useWishlistStore()
  
  try {
    const categorySlug = params.category
    const collection = COLLECTIONS.find(c => c.handle === categorySlug)
    
    if (!collection) {
      notFound()
    }

    // Filter products by category title (case insensitive)
    const categoryProducts = ALL_PRODUCTS.filter(
      p => p.category && p.category.toLowerCase() === collection.title.toLowerCase()
    )

    return (
    <div className="shop-layout">
      {/* Category Hero */}
      <section className="shop-hero" style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${collection.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <div className="shop-hero-content">
          <h1 style={{ color: 'white' }}>{collection.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
            Discover our complete collection of {collection.title.toLowerCase()}.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="shop-container" style={{ display: 'block', maxWidth: '1600px', margin: '0 auto', padding: '0 2rem' }}>
        
        <main className="shop-main" style={{ width: '100%', marginTop: '4rem' }}>
          <div className="shop-toolbar">
            <span className="product-count">{categoryProducts.length} Products</span>
          </div>

          <div className="shop-grid">
            {categoryProducts.length > 0 ? (
              categoryProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image-wrapper">
                    <Link href={`/products/${product.id}`} className="product-image-link">
                      <img src={product.image} alt={product.title} loading="lazy" className="primary-image" />
                    </Link>
                    <button 
                      className="wishlist-btn" 
                      onClick={() => toggleWishlist(product)}
                      aria-label="Toggle Wishlist"
                    >
                      <Heart 
                        size={20} 
                        strokeWidth={1.5} 
                        color={isInWishlist(product.id) ? 'var(--color-gold)' : 'var(--color-primary-text)'} 
                        fill={isInWishlist(product.id) ? 'var(--color-gold)' : 'none'} 
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
              ))
            ) : (
              <div style={{ padding: '2rem 0', color: 'var(--color-secondary-text)' }}>
                We're currently sold out of {collection.title.toLowerCase()}. Check back soon!
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
    )
  } catch (error) {
    console.error(error)
    return <div>Error loading category: {error.message}</div>
  }
}
