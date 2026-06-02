import React from 'react'
import ProductGallery from '../../../components/ProductGallery'
import ProductInfo from '../../../components/ProductInfo'
import { ALL_PRODUCTS } from '../../../lib/data'
import { notFound } from 'next/navigation'

export default function ProductPage({ params }) {
  const productId = parseInt(params.handle, 10)
  const product = ALL_PRODUCTS.find(p => p.id === productId)

  if (!product) {
    notFound()
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
