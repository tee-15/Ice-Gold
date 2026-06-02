import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="global-footer">
      <div className="footer-top">
        <div className="footer-column brand-column">
          <h2 className="footer-logo">ICE & GOLD</h2>
          <p>Redefining affordable luxury with premium, tarnish-resistant jewelry designed in Atlanta, GA.</p>
        </div>
        <div className="footer-column">
          <h3>Shop</h3>
          <Link href="/collections/rings">Rings</Link>
          <Link href="/collections/bracelets">Bracelets</Link>
          <Link href="/collections/necklaces">Necklaces</Link>
          <Link href="/collections/earrings">Earrings</Link>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <Link href="/faq">FAQ</Link>
          <Link href="/shipping">Shipping & Returns</Link>
          <Link href="/jewelry-care">Jewelry Care</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className="footer-column newsletter-column">
          <h3>Stay in the loop</h3>
          <p>Subscribe for exclusive access to new drops and private sales.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="button">→</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ice & Gold. All rights reserved.</p>
        <div className="footer-legal">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
