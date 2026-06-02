import FeaturedCategories from '../components/FeaturedCategories'
import BestSellers from '../components/BestSellers'
import HeroCarousel from '../components/HeroCarousel'
import BrandStory from '../components/BrandStory'

export default function HomePage() {
  return (
    <main className="main-layout">
      {/* Cinematic Hero Carousel */}
      <HeroCarousel />

      {/* Trust Indicators */}
      <section className="trust-section">
        <div className="trust-grid">
          <span>Free Shipping</span>
          <span>30-Day Returns</span>
          <span>Water Resistant</span>
          <span>Premium Materials</span>
          <span>Lifetime Support</span>
        </div>
      </section>

      {/* Featured Categories */}
      <FeaturedCategories />

      {/* Best Sellers */}
      <BestSellers />

      {/* Brand Story Split Screen */}
      <BrandStory />
    </main>
  )
}
