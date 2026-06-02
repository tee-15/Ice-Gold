'use client';
import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export default function CartDrawer() {
  const { cartItems, isCartOpen, closeCart, updateQuantity, removeFromCart } = useCartStore();

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={closeCart}></div>
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart ({cartItems.length})</h2>
          <button onClick={closeCart} className="icon-btn">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div className="cart-item-actions">
                  <div className="qty-selector">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    <Trash2 size={16} strokeWidth={1.5}/>
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {cartItems.length === 0 && (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-secondary-text)' }}>
              Your cart is empty.
            </div>
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-subtotal">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <p className="cart-shipping-note">Taxes and shipping calculated at checkout</p>
          <button className="checkout-btn" disabled={cartItems.length === 0}>Checkout</button>
        </div>
      </div>
    </>
  );
}
