'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, Truck, MapPin, Lock, CreditCard, Archive, Heart, MessageCircle, LogOut } from 'lucide-react'
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

  // Orders state
  const [orders, setOrders] = useState([]);
  const [isLoadingOrders, setIsLoadingOrders] = useState(true);

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/orders')
        .then(res => res.json())
        .then(data => {
          if (data.orders) setOrders(data.orders);
          setIsLoadingOrders(false);
        })
        .catch(err => {
          console.error(err);
          setIsLoadingOrders(false);
        });
    }
  }, [status]);

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
      <>
        <div className="main-layout" style={{ paddingTop: '80px', backgroundColor: '#fff', minHeight: '100vh', paddingBottom: '4rem', fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem' }} className="account-container">
          
          <div style={{ marginBottom: '2.5rem' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 600, color: '#111', marginBottom: '0.25rem' }}>Your Account</h1>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>
              {session?.user?.name || 'User'}, Email: {session?.user?.email}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '3rem' }} className="account-grid">
            {/* Sidebar Navigation */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} className="account-sidebar">
              <button 
                onClick={() => setActiveTab('orders')}
                className={`sidebar-tab ${activeTab === 'orders' ? 'active' : ''}`}
              >
                <Truck size={20} color="#3b82f6" /> <span>My orders</span>
              </button>
              <button 
                onClick={() => setActiveTab('addresses')}
                className={`sidebar-tab ${activeTab === 'addresses' ? 'active' : ''}`}
              >
                <MapPin size={20} color="#3b82f6" /> <span>Your addresses</span>
              </button>
              <button 
                onClick={() => setActiveTab('details')}
                className={`sidebar-tab ${activeTab === 'details' ? 'active' : ''}`}
              >
                <Lock size={20} color="#3b82f6" /> <span>Login & security</span>
              </button>
              <button className="sidebar-tab">
                <CreditCard size={20} color="#3b82f6" /> <span>Payments</span>
              </button>
              <button className="sidebar-tab">
                <Archive size={20} color="#3b82f6" /> <span>Archived orders</span>
              </button>
              <button className="sidebar-tab">
                <Heart size={20} color="#3b82f6" /> <span>Saved items</span>
              </button>
              
              <div style={{ margin: '1rem 0' }}></div>
              
              <button className="sidebar-tab">
                <MessageCircle size={20} color="#3b82f6" /> <span>Customer support</span>
              </button>
              <button 
                onClick={() => signOut()}
                className="sidebar-tab"
              >
                <LogOut size={20} color="#3b82f6" /> <span>Log out</span>
              </button>
            </aside>

            {/* Main Content Area */}
            <main>
              {activeTab === 'orders' && (
                <div className="fade-in">
                  <div style={{ display: 'flex', backgroundColor: '#f3f4f6', borderRadius: '8px', padding: '0.25rem', marginBottom: '2rem', width: 'fit-content' }}>
                    <button style={{ padding: '0.6rem 2.5rem', backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '14px', fontWeight: 500, color: '#111', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>Current</button>
                    <button style={{ padding: '0.6rem 2.5rem', backgroundColor: 'transparent', border: 'none', fontSize: '14px', color: '#4b5563', cursor: 'pointer' }}>Unpaid</button>
                    <button style={{ padding: '0.6rem 2.5rem', backgroundColor: 'transparent', border: 'none', fontSize: '14px', color: '#4b5563', cursor: 'pointer' }}>All orders</button>
                  </div>
                  
                  {isLoadingOrders ? (
                    <div style={{ padding: '4rem 1.5rem', textAlign: 'center', color: '#6b7280' }}>Loading your orders...</div>
                  ) : orders.length === 0 ? (
                    <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '4rem 1.5rem', textAlign: 'center' }}>
                      <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '1.5rem' }}>You haven't placed any orders yet.</p>
                      <Link href="/shop" style={{ display: 'inline-block', padding: '0.6rem 1.5rem', backgroundColor: '#fff', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', fontWeight: 500, color: '#374151', cursor: 'pointer', textDecoration: 'none' }}>
                        Start Shopping
                      </Link>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      {orders.map(order => (
                        <div key={order.id} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem', marginBottom: '1rem' }}>
                            <div>
                              <p style={{ fontSize: '16px', fontWeight: 600, color: '#111' }}>Order #{order.id.slice(-6).toUpperCase()}</p>
                              <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '0.25rem' }}>{new Date(order.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                              <p style={{ fontSize: '16px', fontWeight: 600, color: '#111' }}>${order.total.toFixed(2)}</p>
                              <p style={{ fontSize: '13px', color: '#10b981', marginTop: '0.25rem', textTransform: 'capitalize' }}>{order.status}</p>
                            </div>
                          </div>
                          <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto' }}>
                            {order.items.map(item => (
                              <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: '200px' }}>
                                <img src={item.product?.image} alt={item.product?.title} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px', backgroundColor: '#f3f4f6' }} />
                                <div>
                                  <p style={{ fontSize: '14px', fontWeight: 500, color: '#111' }}>{item.product?.title}</p>
                                  <p style={{ fontSize: '13px', color: '#6b7280' }}>Qty: {item.quantity}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'details' && (
                <div className="fade-in" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#111', marginBottom: '1.5rem' }}>Login & security</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}>
                    <div>
                      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '0.25rem' }}>Name</p>
                      <p style={{ fontSize: '15px', color: '#111', fontWeight: 500 }}>{session?.user?.name || 'Not provided'}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '0.25rem' }}>Email</p>
                      <p style={{ fontSize: '15px', color: '#111', fontWeight: 500 }}>{session?.user?.email}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '0.25rem' }}>Password</p>
                      <p style={{ fontSize: '15px', color: '#111', fontWeight: 500 }}>••••••••</p>
                    </div>
                    <button style={{ alignSelf: 'flex-start', padding: '0.6rem 1.5rem', backgroundColor: '#fff', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', fontWeight: 500, color: '#374151', cursor: 'pointer' }}>
                      Update Password
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'addresses' && (
                <div className="fade-in" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#111', marginBottom: '1.5rem' }}>Your addresses</h2>
                  <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                    <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '1.5rem' }}>No addresses saved yet.</p>
                    <button style={{ padding: '0.6rem 1.5rem', backgroundColor: '#fff', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', fontWeight: 500, color: '#374151', cursor: 'pointer' }}>
                      Add New Address
                    </button>
                  </div>
                </div>
              )}
            </main>
          </div>
          </div>
        </div>
        <style jsx>{`
          .sidebar-tab {
            display: flex;
            align-items: center;
            gap: 1rem;
            width: 100%;
            padding: 0.75rem 1rem;
            border-radius: 8px;
            background: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            color: #4b5563;
            text-align: left;
            transition: all 0.2s ease;
          }
          .sidebar-tab:hover {
            background-color: #f3f4f6;
          }
          .sidebar-tab.active {
            background-color: #e0e7ff;
            color: #2563eb;
          }
          .sidebar-tab.active svg {
            color: #2563eb !important;
          }

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

          .fade-in {
            animation: fadeIn 0.3s ease forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </>
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

        .sidebar-tab {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 15px;
          font-weight: 500;
          color: #111;
          text-align: left;
          transition: all 0.2s ease;
        }
        .sidebar-tab:hover {
          background-color: #f3f4f6;
        }
        .sidebar-tab.active {
          background-color: #e0e7ff;
          color: #2563eb;
        }
        .sidebar-tab.active svg {
          color: #2563eb !important;
        }

        .fade-in {
          animation: fadeIn 0.3s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
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
