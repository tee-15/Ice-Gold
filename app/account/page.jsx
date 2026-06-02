import React from 'react'

export default function AccountPage() {
  return (
    <div className="main-layout" style={{ paddingTop: '80px', backgroundColor: 'var(--color-primary-bg)' }}>
      <section style={{ padding: '6rem 2rem', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
        <h1 className="section-title" style={{ marginBottom: '2rem' }}>Sign In</h1>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input 
            type="email" 
            placeholder="Email Address" 
            style={{ padding: '1rem', border: '1px solid #ccc', fontFamily: 'inherit' }}
          />
          <input 
            type="password" 
            placeholder="Password" 
            style={{ padding: '1rem', border: '1px solid #ccc', fontFamily: 'inherit' }}
          />
          <button type="button" className="btn-primary" style={{ marginTop: '1rem' }}>
            Sign In
          </button>
        </form>
        <p style={{ marginTop: '2rem', fontSize: '14px' }}>
          <a href="#" className="link-underlined">Create an account</a>
        </p>
      </section>
    </div>
  )
}
