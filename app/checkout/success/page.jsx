'use client';
import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useCartStore } from '../../../store/cartStore';
import { CheckCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

function CheckoutSuccessContent() {
  const { clearCart } = useCartStore();
  const searchParams = useSearchParams();
  const session_id = searchParams.get('session_id');
  const [verifying, setVerifying] = useState(true);
  const [verifyError, setVerifyError] = useState(null);

  useEffect(() => {
    // Clear the cart on successful checkout
    clearCart();

    // Verify session to create order (useful for local testing without webhooks)
    if (session_id) {
      fetch('/api/checkout/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id }),
      })
      .then(res => res.json().then(data => ({ status: res.status, data })))
      .then(({ status, data }) => {
        if (status !== 200) {
          setVerifyError(data.error || 'Verification failed');
        }
      })
      .catch(err => setVerifyError(err.message))
      .finally(() => setVerifying(false));
    } else {
      setVerifying(false);
    }
  }, [clearCart, session_id]);

  if (verifying) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#fafafa',
      padding: '2rem'
    }}>
      <div style={{ 
        maxWidth: '500px', 
        width: '100%', 
        backgroundColor: '#fff', 
        padding: '3rem 2rem', 
        borderRadius: '8px', 
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        textAlign: 'center'
      }}>
        <CheckCircle size={64} color="#10b981" style={{ margin: '0 auto 1.5rem auto' }} />
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#111', marginBottom: '1rem' }}>Payment Successful!</h1>
        <p style={{ color: '#6b7280', fontSize: '15px', marginBottom: '2rem', lineHeight: '1.5' }}>
          Thank you for your order. Your transaction has been completed and a receipt has been emailed to you.
        </p>
        
        {verifyError && (
          <div style={{ padding: '1rem', backgroundColor: '#fee2e2', color: '#991b1b', fontSize: '14px', borderRadius: '4px', marginBottom: '2rem' }}>
            Debug: Order capture failed: {verifyError}
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Link 
            href="/account"
            style={{
              padding: '0.75rem',
              backgroundColor: '#111',
              color: '#fff',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '14px'
            }}
          >
            View Your Orders
          </Link>
          <Link 
            href="/shop"
            style={{
              padding: '0.75rem',
              backgroundColor: 'transparent',
              color: '#374151',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '14px'
            }}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
      <CheckoutSuccessContent />
    </Suspense>
  );
}
