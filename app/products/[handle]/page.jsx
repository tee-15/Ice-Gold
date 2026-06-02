import React from 'react'
import ProductGallery from '../../../components/ProductGallery'
import ProductInfo from '../../../components/ProductInfo'
import { notFound } from 'next/navigation'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function ProductPage({ params }) {
  const handle = params.handle;
  const product = await prisma.product.findUnique({
    where: { handle }
  });

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
}
