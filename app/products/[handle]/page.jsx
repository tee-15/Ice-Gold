import React from 'react'
import ProductGallery from '../../../components/ProductGallery'
import ProductInfo from '../../../components/ProductInfo'
import { notFound } from 'next/navigation'
import { ALL_PRODUCTS } from '../../../lib/data'

export default async function ProductPage({ params }) {
  try {
    const handle = params.handle;
    // Fallback to checking id if handle is numeric
    const product = ALL_PRODUCTS.find(p => p.handle === handle || p.id.toString() === handle);

    if (!product) {
      notFound()
    }

    // Formatting for the existing gallery component since db only stores one main image right now
    const productWithImages = {
      ...product,
      images: [product.image]
    };

    return (
      <div className="pdp-container">
        <div className="pdp-gallery-column">
          <ProductGallery images={productWithImages.images} />
        </div>
        <div className="pdp-info-column">
          <ProductInfo product={productWithImages} />
        </div>
      </div>
    )
  } catch (err) {
    return <div>Error: {err.message}</div>
  }
}
