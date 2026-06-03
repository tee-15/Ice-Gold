import React from 'react'
import ProductGallery from '../../../components/ProductGallery'
import ProductInfo from '../../../components/ProductInfo'
import { notFound } from 'next/navigation'
import { ALL_PRODUCTS } from '../../../lib/data'

export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }) {
  const rawHandle = params?.handle || '';
  const handle = decodeURIComponent(rawHandle);
  
  // Fallback to checking id if handle is numeric
  const product = ALL_PRODUCTS.find(p => p.handle === handle || p.id?.toString() === handle);

  if (!product) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <h1>Product Not Found</h1>
        <p>We couldn't find the product: {handle}</p>
      </div>
    )
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
}
