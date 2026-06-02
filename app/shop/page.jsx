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
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 24;

  // Toggle category
  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
    setCurrentPage(1); // Reset to first page on filter
  };

  // Toggle material
  const handleMaterialToggle = (material) => {
    setSelectedMaterials(prev => 
      prev.includes(material) ? prev.filter(m => m !== material) : [...prev, material]
    );
    setCurrentPage(1); // Reset to first page on filter
  };

  // Filter products
  const filteredProducts = ALL_PRODUCTS.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const materialMatch = selectedMaterials.length === 0 || selectedMaterials.includes(product.material);
    return categoryMatch && materialMatch;
  });

  // Calculate Pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="shop-layout">
      {/* Shop Hero */}
      <section 
        className="shop-hero"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(https://cdn.shopify.com/s/files/1/0524/9325/4812/files/screw-on-gem-bracelet-3479784.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          borderBottom: 'none'
        }}
      >
        <div className="shop-hero-content" style={{ zIndex: 2 }}>
          <h1 style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>All Jewelry</h1>
          <p style={{ color: '#eaeaea', letterSpacing: '0.02em', fontSize: '18px' }}>
            Discover our complete collection of luxury, water-resistant pieces designed for everyday elegance.
          </p>
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
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
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

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '4rem' }}>
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={{ 
                  padding: '0.5rem 1rem', 
                  border: '1px solid #eaeaea', 
                  backgroundColor: 'transparent', 
                  cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                  opacity: currentPage === 1 ? 0.5 : 1
                }}
              >
                Previous
              </button>
              
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    style={{
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: page === currentPage ? '1px solid var(--color-primary-text)' : '1px solid transparent',
                      backgroundColor: page === currentPage ? 'var(--color-primary-bg)' : 'transparent',
                      cursor: 'pointer',
                      borderRadius: '50%'
                    }}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{ 
                  padding: '0.5rem 1rem', 
                  border: '1px solid #eaeaea', 
                  backgroundColor: 'transparent', 
                  cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                  opacity: currentPage === totalPages ? 0.5 : 1
                }}
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
