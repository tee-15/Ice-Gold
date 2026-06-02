'use client'
import React, { useState } from 'react'

export default function ProductInfo({ product }) {
  const [activeAccordion, setActiveAccordion] = useState(0) // First open by default

  const toggleAccordion = (idx) => {
    setActiveAccordion(activeAccordion === idx ? null : idx)
  }

  const accordions = [
    { title: 'Details & Materials', content: 'Crafted with 18K gold-filled materials and simulated diamonds. Tarnish-resistant and hypoallergenic.' },
    { title: 'Shipping & Returns', content: 'Free standard shipping on all orders. 14-day money-back guarantee if you are not completely satisfied.' },
    { title: 'Warranty', content: 'We stand by our quality with a 1-year warranty covering any manufacturing defects.' }
  ]

  return (
    <div className="pdp-info-wrapper">
      <h1 className="pdp-title">{product.title}</h1>
      <div className="pdp-price">{product.price}</div>
      <p className="pdp-description">{product.description}</p>
      
      <div className="pdp-actions">
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>

      <div className="pdp-accordions">
        {accordions.map((acc, idx) => (
          <div key={idx} className={`accordion-item ${activeAccordion === idx ? 'active' : ''}`}>
            <button className="accordion-header" onClick={() => toggleAccordion(idx)}>
              <span>{acc.title}</span>
              <span>{activeAccordion === idx ? '−' : '+'}</span>
            </button>
            <div className="accordion-content">
              {acc.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
