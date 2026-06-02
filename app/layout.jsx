import './globals.css'
import { Outfit } from 'next/font/google'
import Navigation from '../components/Navigation'
import CartDrawer from '../components/CartDrawer'
import Footer from '../components/Footer'
import Providers from '../components/Providers'

const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata = {
  title: 'Ice & Gold | Luxury You Can Afford',
  description: 'Premium, water-resistant 18K gold filled jewelry designed for your everyday.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <Providers>
          <Navigation />
          <CartDrawer />
          <main style={{ minHeight: '100vh' }}>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
