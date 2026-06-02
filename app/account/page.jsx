'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'

export default function AccountPage() {
  // 'login', 'register', or 'forgot'
  const [view, setView] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('orders');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (view === 'login' || view === 'register') {
      setIsAuthenticated(true);
    }
  };

  if (isAuthenticated) {
    return (
      <div className="main-layout" style={{ paddingTop: '80px', backgroundColor: 'var(--color-primary-bg)', minHeight: '100vh' }}>
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', borderBottom: '1px solid #eee', paddingBottom: '2rem' }}>
            <h1 className="section-title" style={{ fontSize: '32px' }}>My Account</h1>
            <button 
              onClick={() => setIsAuthenticated(false)} 
              className="link-underlined"
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Sign Out
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '4rem' }}>
            {/* Sidebar Navigation */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button 
                onClick={() => setActiveTab('orders')}
                style={{ textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem 0', fontSize: '16px', color: activeTab === 'orders' ? 'var(--color-primary-text)' : 'var(--color-secondary-text)', fontWeight: activeTab === 'orders' ? 500 : 400, borderBottom: activeTab === 'orders' ? '1px solid var(--color-primary-text)' : '1px solid transparent' }}
              >
                Order History
              </button>
              <button 
                onClick={() => setActiveTab('details')}
                style={{ textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem 0', fontSize: '16px', color: activeTab === 'details' ? 'var(--color-primary-text)' : 'var(--color-secondary-text)', fontWeight: activeTab === 'details' ? 500 : 400, borderBottom: activeTab === 'details' ? '1px solid var(--color-primary-text)' : '1px solid transparent' }}
              >
                Account Details
              </button>
              <button 
                onClick={() => setActiveTab('addresses')}
                style={{ textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem 0', fontSize: '16px', color: activeTab === 'addresses' ? 'var(--color-primary-text)' : 'var(--color-secondary-text)', fontWeight: activeTab === 'addresses' ? 500 : 400, borderBottom: activeTab === 'addresses' ? '1px solid var(--color-primary-text)' : '1px solid transparent' }}
              >
                Addresses
              </button>
            </aside>

            {/* Main Content Area */}
            <main>
              {activeTab === 'orders' && (
                <div>
                  <h2 style={{ fontSize: '24px', marginBottom: '2rem', fontWeight: 400 }}>Order History</h2>
                  <div style={{ padding: '3rem', border: '1px dashed #ccc', textAlign: 'center' }}>
                    <p style={{ color: 'var(--color-secondary-text)' }}>You haven't placed any orders yet.</p>
                    <Link href="/shop" className="btn-primary" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.8rem 2rem' }}>
                      Start Shopping
                    </Link>
                  </div>
                </div>
              )}

              {activeTab === 'details' && (
                <div>
                  <h2 style={{ fontSize: '24px', marginBottom: '2rem', fontWeight: 400 }}>Account Details</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-secondary-text)', marginBottom: '0.5rem' }}>Name</label>
                      <p style={{ fontSize: '16px' }}>Sarah Doe</p>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-secondary-text)', marginBottom: '0.5rem' }}>Email</label>
                      <p style={{ fontSize: '16px' }}>sarah@example.com</p>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-secondary-text)', marginBottom: '0.5rem' }}>Password</label>
                      <p style={{ fontSize: '16px' }}>••••••••</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'addresses' && (
                <div>
                  <h2 style={{ fontSize: '24px', marginBottom: '2rem', fontWeight: 400 }}>Addresses</h2>
                  <p style={{ color: 'var(--color-secondary-text)' }}>No addresses saved yet.</p>
                  <button className="btn-secondary" style={{ marginTop: '2rem' }}>Add New Address</button>
                </div>
              )}
            </main>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-primary-bg)' }}>
      {/* Left Side - Image Container (Hidden on Mobile) */}
      <div 
        className="desktop-only"
        style={{ 
          flex: 1, 
          position: 'relative', 
          backgroundColor: 'var(--color-secondary-bg)',
          overflow: 'hidden'
        }}
      >
        <img 
          src="https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gold-link-set-6166572.png?v=1775241367" 
          alt="Luxury Jewelry"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            filter: 'brightness(0.9)'
          }}
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)' 
        }}></div>
      </div>

      {/* Right Side - Form Container */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '2rem',
        paddingTop: '80px' // offset for fixed header
      }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 className="section-title" style={{ fontSize: '28px', marginBottom: '0.5rem' }}>
              {view === 'login' ? 'Welcome Back' : view === 'register' ? 'Join Ice & Gold' : 'Reset Password'}
            </h1>
            <p style={{ color: 'var(--color-secondary-text)', fontSize: '14px', letterSpacing: '0.05em' }}>
              {view === 'login' ? 'Sign in to access your account' : view === 'register' ? 'Create an account for exclusive access' : 'Enter your email to receive a reset link'}
            </p>
          </div>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={handleSubmit}>
            {view === 'register' && (
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="input-group" style={{ flex: 1 }}>
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="form-input"
                    required
                  />
                </div>
                <div className="input-group" style={{ flex: 1 }}>
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="form-input"
                    required
                  />
                </div>
              </div>
            )}
            
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="form-input"
                required
              />
            </div>
            
            {view !== 'forgot' && (
              <div className="input-group" style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password" 
                  className="form-input"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ 
                    position: 'absolute', 
                    right: '0', 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--color-secondary-text)',
                    padding: '0.5rem'
                  }}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} strokeWidth={1.5} /> : <Eye size={18} strokeWidth={1.5} />}
                </button>
              </div>
            )}
            
            {view === 'login' && (
              <div style={{ textAlign: 'right', marginTop: '-0.5rem' }}>
                <button 
                  type="button"
                  onClick={() => setView('forgot')} 
                  className="link-underlined" 
                  style={{ fontSize: '12px', color: 'var(--color-secondary-text)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  Forgot password?
                </button>
              </div>
            )}
            
            <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
              {view === 'login' ? 'Sign In' : view === 'register' ? 'Create Account' : 'Send Reset Link'}
            </button>
          </form>
          
          <div style={{ marginTop: '3rem', textAlign: 'center', position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: 0, 
              right: 0, 
              borderTop: '1px solid #eaeaea', 
              zIndex: 1 
            }}></div>
            <span style={{ 
              position: 'relative', 
              zIndex: 2, 
              backgroundColor: 'var(--color-primary-bg)', 
              padding: '0 1rem', 
              color: 'var(--color-secondary-text)',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              Or
            </span>
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            {view === 'login' ? (
              <button 
                onClick={() => setView('register')} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', color: 'var(--color-primary-text)' }}
                className="link-underlined"
              >
                Create an account
              </button>
            ) : (
              <button 
                onClick={() => setView('login')} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px', color: 'var(--color-primary-text)' }}
                className="link-underlined"
              >
                Back to Sign in
              </button>
            )}
          </div>

        </div>
      </div>

      <style jsx>{`
        .form-input {
          width: 100%;
          padding: 1rem 0;
          border: none;
          border-bottom: 1px solid #ccc;
          background-color: transparent;
          font-family: inherit;
          font-size: 14px;
          color: var(--color-primary-text);
          transition: border-color 0.3s ease;
          outline: none;
        }
        .form-input:focus {
          border-bottom-color: var(--color-primary-text);
        }
        .form-input::placeholder {
          color: #999;
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  )
}
