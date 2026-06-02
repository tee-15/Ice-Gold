'use client';
import React, { useState, useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';
import Link from 'next/link';
import { ALL_PRODUCTS } from '../lib/data';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length > 1) {
      const lowerQuery = query.toLowerCase();
      const filtered = ALL_PRODUCTS.filter(product => 
        product.title.toLowerCase().includes(lowerQuery) || 
        product.category.toLowerCase().includes(lowerQuery)
      );
      setResults(filtered.slice(0, 6)); // Limit to top 6 results
    } else {
      setResults([]);
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="search-overlay" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div className="search-container" style={{
        backgroundColor: 'var(--color-primary-bg)',
        padding: '2rem',
        borderBottom: '1px solid #eee'
      }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>
        
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          <Search size={20} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-secondary-text)' }} />
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Search products, categories..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1rem 1rem 3rem',
              fontSize: '18px',
              border: 'none',
              borderBottom: '2px solid var(--color-primary-text)',
              backgroundColor: 'transparent',
              outline: 'none',
              fontFamily: 'inherit'
            }}
          />
        </div>
      </div>

      {results.length > 0 && (
        <div className="search-results" style={{
          backgroundColor: 'var(--color-primary-bg)',
          flex: 1,
          padding: '2rem',
          overflowY: 'auto'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h3 style={{ marginBottom: '2rem', color: 'var(--color-secondary-text)' }}>Products</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
              {results.map(product => (
                <Link href={`/products/${product.id}`} key={product.id} onClick={onClose} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <img src={product.image} alt={product.title} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '14px', fontWeight: 400, marginBottom: '0.5rem' }}>{product.title}</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)' }}>{product.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
