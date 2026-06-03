'use client'
import React, { useState } from 'react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="pdp-accordions" style={{ marginTop: 0, borderTop: 'none' }}>
      {items.map((item, i) => (
        <div key={i} className={`accordion-item ${openIndex === i ? 'is-open' : ''}`}>
          <button 
            className="accordion-header" 
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{ fontSize: '16px', padding: '2rem 0' }}
          >
            {item.title}
            <span style={{ transform: openIndex === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>▼</span>
          </button>
          <div className="accordion-content" style={{ fontSize: '16px' }}>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
