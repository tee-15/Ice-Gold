import React from 'react'
import { COLLECTIONS } from '../../lib/data'
import Link from 'next/link'

export default function CollectionsPage() {
  return (
    <div className="main-layout" style={{ paddingTop: '80px' }}>
      <section className="featured-categories" style={{ paddingTop: '4rem' }}>
        <div className="section-header">
          <h1 className="section-title">All Collections</h1>
          <p style={{ maxWidth: '600px', marginTop: '1rem', color: 'var(--color-secondary-text)' }}>
            Explore our meticulously curated collections, designed to elevate your everyday style.
          </p>
        </div>

        <div className="categories-grid">
          {COLLECTIONS.map((category) => (
            <Link key={category.slug} href={category.link} className="category-card">
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
    </div>
  )
}
