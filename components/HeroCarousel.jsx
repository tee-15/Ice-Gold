'use client';

import React, { useState, useEffect } from 'react';

const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop',
    title: 'Crafted To Shine Beyond Trends',
    subtitle: 'Luxury-inspired jewelry designed to elevate everyday confidence.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1200&auto=format&fit=crop',
    title: 'Elegance in Every Detail',
    subtitle: 'Discover our new collection of meticulously crafted diamond bracelets.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
    title: 'Timeless Pearls',
    subtitle: 'Classic beauty redefined for the modern aesthetic.',
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-carousel">
      {/* Background Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>
        </div>
      ))}

      {/* Static Foreground Content */}
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">Crafted To Shine Beyond Trends</h1>
          <p className="hero-subtitle">Luxury-inspired jewelry designed to elevate everyday confidence.</p>
          <div className="hero-actions">
            <button className="btn-primary">Shop Collection</button>
            <button className="btn-secondary-light">Explore New Arrivals</button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="hero-indicators">
          {HERO_SLIDES.map((_, index) => (
            <button 
              key={index} 
              className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
