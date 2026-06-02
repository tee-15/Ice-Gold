import React from 'react';
import { COLLECTIONS } from '../lib/data';
import Link from 'next/link';

export default function FeaturedCategories() {
  return (
    <section className="featured-categories">
      <div className="section-header">
        <h2 className="section-title">Shop by Category</h2>
        <a href="/collections" className="link-underlined">View All Categories</a>
      </div>

      <div className="categories-grid">
        {COLLECTIONS.map((category) => (
          <Link key={category.id} href={`/shop`} className="category-card">
            <div className="category-image-wrapper">
              <img 
                src={category.image} 
                alt={`${category.title} Category`} 
                loading="lazy" 
                decoding="async" 
              />
            </div>
            <div className="category-content">
              <h3>{category.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
