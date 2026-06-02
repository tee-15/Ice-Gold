'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { ALL_PRODUCTS, CATEGORIES, MATERIALS } from '../../lib/data'
import { useCartStore } from '../../store/cartStore'
import { useWishlistStore } from '../../store/wishlistStore'

export default function ShopPage() {
  const { addToCart } = useCartStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  // Toggle category
  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  // Toggle material
  const handleMaterialToggle = (material) => {
    setSelectedMaterials(prev => 
      prev.includes(material) ? prev.filter(m => m !== material) : [...prev, material]
    );
  };

  // Filter products
  const filteredProducts = ALL_PRODUCTS.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const materialMatch = selectedMaterials.length === 0 || selectedMaterials.includes(product.material);
    return categoryMatch && materialMatch;
  });

  return (
    <div className="shop-layout">
      {/* Shop Hero */}
      <section className="shop-hero">
        <div className="shop-hero-content">
          <h1>All Jewelry</h1>
          <p>Discover our complete collection of luxury, water-resistant pieces designed for everyday elegance.</p>
        </div>
      </section>

      {/* Shop Main Container */}
      <div className="shop-container">
        
        {/* Left Sidebar (Filters) */}
        <aside className="shop-sidebar">
          <div className="filter-group">
            <h3>Category</h3>
            <ul>
              {CATEGORIES.map(category => (
                <li key={category}>
                  <label>
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryToggle(category)}
                    /> 
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-group">
            <h3>Material</h3>
            <ul>
              {MATERIALS.map(material => (
                <li key={material}>
                  <label>
                    <input 
                      type="checkbox" 
                      checked={selectedMaterials.includes(material)}
                      onChange={() => handleMaterialToggle(material)}
                    /> 
                    {material}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid Area */}
        <main className="shop-main">
          {/* Top Bar Sorting */}
          <div className="shop-toolbar">
            <span className="product-count">{filteredProducts.length} Products</span>
            <div className="sort-by">
              <label htmlFor="sort">Sort by:</label>
              <select id="sort">
                <option>Featured</option>
                <option>Best Selling</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="shop-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
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
                No products match the selected filters.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
