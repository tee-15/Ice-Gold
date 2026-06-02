import React from 'react';

const CATEGORIES = [
  {
    title: 'Necklaces',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/screw-on-gem-bracelet-3479784.png',
    link: '/collections/necklaces'
  },
  {
    title: 'Bracelets',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/screw-on-gem-bracelet-1240777.png',
    link: '/collections/bracelets'
  },
  {
    title: 'Rings',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gemstone-dome-ring-2002793.jpg',
    link: '/collections/rings'
  },
  {
    title: 'Earrings',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gemstone-dome-ring-9979469.png',
    link: '/collections/earrings'
  },
  {
    title: 'Chains',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/screw-on-gem-bracelet-7928243.png',
    link: '/collections/chains'
  },
  {
    title: 'Sets',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gemstone-dome-ring-5431099.jpg',
    link: '/collections/sets'
  }
];

export default function FeaturedCategories() {
  return (
    <section className="featured-categories">
      <div className="section-header">
        <h2 className="section-title">Shop by Category</h2>
        <a href="/collections" className="link-underlined">View All Categories</a>
      </div>

      <div className="categories-grid">
        {CATEGORIES.map((category) => (
          <a key={category.title} href={category.link} className="category-card">
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
          </a>
        ))}
      </div>
    </section>
  );
}
