'use client';

import React, { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';
import SearchModal from './SearchModal';

export default function Navigation() {
  const { cartItems, openCart } = useCartStore();
  const { wishlistItems } = useWishlistStore();
  // Calculate total items (sum of quantities)
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn md-hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>

        {/* Desktop Links (Left) */}
        <nav className="nav-links desktop-only">
          <Link href="/shop" className="nav-link">Shop</Link>
          <Link href="/collections" className="nav-link">Collections</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/lookbook" className="nav-link">Lookbook</Link>
        </nav>

        {/* Logo (Center) */}
        <Link href="/" className="nav-logo">
          <img src="/logo.webp" alt="Ice & Gold Logo" style={{ height: '40px', objectFit: 'contain' }} />
        </Link>

        {/* Icons (Right) */}
        <div className="nav-icons">
          <button onClick={() => setIsSearchOpen(true)} aria-label="Search" className="icon-btn desktop-only">
            <Search size={22} strokeWidth={1.5} />
          </button>
          <Link href="/account" aria-label="Account" className="icon-btn desktop-only"><User size={22} strokeWidth={1.5} /></Link>
          <Link href="/wishlist" aria-label="Wishlist" className="icon-btn relative">
            <Heart size={22} strokeWidth={1.5} />
            {wishlistItems.length > 0 && <span className="cart-badge">{wishlistItems.length}</span>}
          </Link>
          <button 
            aria-label="Cart" 
            className="icon-btn relative"
            onClick={openCart}
          >
            <ShoppingBag size={22} strokeWidth={1.5} />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-header">
            <Link href="/" className="nav-logo" onClick={() => setMobileMenuOpen(false)}>ICE & GOLD</Link>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" className="icon-btn">
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="mobile-nav-links">
            <Link href="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
            <Link href="/collections" onClick={() => setMobileMenuOpen(false)}>Collections</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link href="/lookbook" onClick={() => setMobileMenuOpen(false)}>Lookbook</Link>
            <div className="mobile-nav-divider"></div>
            <Link href="/account" onClick={() => setMobileMenuOpen(false)}>Account</Link>
          </nav>
        </div>
      )}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}
