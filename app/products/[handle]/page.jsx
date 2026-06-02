import React from 'react'
import ProductGallery from '../../../components/ProductGallery'
import ProductInfo from '../../../components/ProductInfo'

export default function ProductPage({ params }) {
  // Mock product data for the demo
  const product = {
    title: 'Gemstone Dome Ring',
    price: '$89.00',
    description: 'Our Gemstone Dome Ring is designed to stand out with its smooth dome silhouette and vibrant gemstone-inspired centerpiece. Crafted with 18K gold-filled, it’s tarnish-resistant, hypoallergenic, and comfortable for everyday wear.',
    images: [
      'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gemstone-dome-ring-2002793.jpg',
      'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gemstone-dome-ring-9979469.png',
      'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gemstone-dome-ring-5431099.jpg'
    ]
  }

  return (
    <div className="pdp-container">
      <div className="pdp-gallery-column">
        <ProductGallery images={product.images} />
      </div>
      <div className="pdp-info-column">
        <ProductInfo product={product} />
      </div>
    </div>
  )
}
