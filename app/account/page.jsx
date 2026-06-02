'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, Package, User, MapPin, LogOut } from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function AccountPage() {
  const { data: session, status } = useSession();
  
  // 'login', 'register', or 'forgot'
  const [view, setView] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('orders');

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (view === 'login') {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password
      });
      if (res?.error) {
        setError(res.error);
      }
    } else if (view === 'register') {
      try {
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
        });
        const data = await res.json();
        
        if (!res.ok) {
          setError(data.error || 'Failed to register');
        } else {
          // Auto sign in after registration
          await signIn('credentials', { redirect: false, email, password });
        }
      } catch (err) {
        setError('Something went wrong. Please try again.');
      }
    }
    setIsLoading(false);
  };

  if (status === 'loading') {
    return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;
  }

  const isAuthenticated = status === 'authenticated';

  if (isAuthenticated) {
    return (
      <div className="main-layout" style={{ paddingTop: '80px', backgroundColor: '#faf9f6', minHeight: '100vh', color: '#4a4a4a' }}>
        <section style={{ padding: '4rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h1 className="soft-serif" style={{ fontSize: '38px', color: '#333', fontWeight: 400, letterSpacing: '0.01em', marginBottom: '0.5rem' }}>My Account</h1>
            <p style={{ color: '#888', fontSize: '14px', letterSpacing: '0.05em' }}>Welcome back, {session?.user?.name?.split(' ')[0] || 'beautiful'}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '4rem' }} className="account-grid">
            {/* Sidebar Navigation */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} className="account-sidebar">
              <button 
                onClick={() => setActiveTab('orders')}
                className={`soft-tab ${activeTab === 'orders' ? 'active' : ''}`}
              >
                Order History
              </button>
              <button 
                onClick={() => setActiveTab('details')}
                className={`soft-tab ${activeTab === 'details' ? 'active' : ''}`}
              >
                Account Details
              </button>
              <button 
                onClick={() => setActiveTab('addresses')}
                className={`soft-tab ${activeTab === 'addresses' ? 'active' : ''}`}
              >
                Addresses
              </button>
              <div style={{ marginTop: '2rem' }}>
                <button 
                  onClick={() => signOut()}
                  className="soft-tab sign-out-tab"
                >
                  Sign Out
                </button>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="account-main">
              {activeTab === 'orders' && (
                <div className="fade-in">
                  <h2 className="soft-serif" style={{ fontSize: '26px', color: '#333', marginBottom: '2rem', fontWeight: 400 }}>Order History</h2>
                  <div className="soft-card empty-state">
                    <p>You haven't placed any orders yet.</p>
                    <Link href="/shop" className="soft-btn" style={{ display: 'inline-block', marginTop: '1.5rem' }}>
                      Start Shopping
                    </Link>
                  </div>
                </div>
              )}

              {activeTab === 'details' && (
                <div className="fade-in">
                  <h2 className="soft-serif" style={{ fontSize: '26px', color: '#333', marginBottom: '2rem', fontWeight: 400 }}>Account Details</h2>
                  <div className="soft-card">
                    <div className="detail-row">
                      <span className="detail-label">Name</span>
                      <span className="detail-value">{session?.user?.name || 'Not provided'}</span>
                    </div>
                    
                    <div className="detail-row">
                      <span className="detail-label">Email</span>
                      <span className="detail-value">{session?.user?.email}</span>
                    </div>

                    <div className="detail-row" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
                      <span className="detail-label">Password</span>
                      <span className="detail-value">••••••••</span>
                    </div>
                  </div>
                  
                  <button className="soft-link" style={{ marginTop: '2rem', marginLeft: '1rem' }}>
                    Update Password
                  </button>
                </div>
              )}

              {activeTab === 'addresses' && (
                <div className="fade-in">
                  <h2 className="soft-serif" style={{ fontSize: '26px', color: '#333', marginBottom: '2rem', fontWeight: 400 }}>Addresses</h2>
                  <div className="soft-card empty-state">
                    <p>No addresses saved yet.</p>
                    <button className="soft-btn" style={{ marginTop: '1.5rem' }}>
                      Add New Address
                    </button>
                  </div>
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
            {error && (
              <div style={{ padding: '1rem', backgroundColor: '#fee2e2', color: '#991b1b', fontSize: '14px', borderRadius: '4px' }}>
                {error}
              </div>
            )}
            
            {view === 'register' && (
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="input-group" style={{ flex: 1 }}>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="form-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            {view !== 'forgot' && (
              <div className="input-group" style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password" 
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            
            <button type="submit" className="btn-primary" disabled={isLoading} style={{ marginTop: '1rem', width: '100%', opacity: isLoading ? 0.7 : 1 }}>
              {isLoading ? 'Processing...' : view === 'login' ? 'Sign In' : view === 'register' ? 'Create Account' : 'Send Reset Link'}
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

        /* Dashboard Styles */
        @media (max-width: 768px) {
          .account-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .account-sidebar {
            flex-direction: row !important;
            flex-wrap: wrap;
            margin-bottom: 1rem;
          }
        }
        
        .soft-serif {
          font-family: 'Playfair Display', serif;
        }

        .soft-tab {
          text-align: left;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 15px;
          color: #888;
          transition: all 0.4s ease;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          font-family: inherit;
        }
        .soft-tab:hover {
          color: #4a4a4a;
          background-color: rgba(0,0,0,0.02);
        }
        .soft-tab.active {
          color: #4a4a4a;
          background-color: #fff;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          font-weight: 500;
        }
        
        .sign-out-tab {
          color: #999;
        }
        .sign-out-tab:hover {
          color: #d97777;
          background-color: #fff5f5;
        }

        .soft-card {
          background-color: #fff;
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.02);
        }

        .detail-row {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-bottom: 1.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid #f0f0f0;
        }
        .detail-label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #aaa;
        }
        .detail-value {
          font-size: 16px;
          color: #333;
        }

        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
        }
        .empty-state p {
          color: #888;
          font-size: 15px;
          font-family: 'Playfair Display', serif;
          font-style: italic;
        }

        .soft-btn {
          background-color: #f7f3ed;
          color: #5a4b41;
          border: none;
          border-radius: 30px;
          padding: 0.8rem 2.5rem;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .soft-btn:hover {
          background-color: #efeae2;
          transform: translateY(-2px);
        }

        .soft-link {
          background: none;
          border: none;
          color: #888;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          padding: 0;
          position: relative;
          transition: color 0.3s ease;
        }
        .soft-link:hover {
          color: #4a4a4a;
        }
        .soft-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #ccc;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .soft-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .fade-in {
          animation: fadeIn 0.4s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
