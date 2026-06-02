import React from 'react'

export default function ProductGallery({ images }) {
  return (
    <>
      {images.map((src, idx) => (
        <div key={idx} className="pdp-image-wrapper">
          <img src={src} alt={`Product Image ${idx + 1}`} />
        </div>
      ))}
    </>
  )
}
