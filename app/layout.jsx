import './globals.css'
import { Outfit } from 'next/font/google'
import Navigation from '../components/Navigation'

const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata = {
  title: 'Ice & Gold | Premium Luxury Jewelry',
  description: 'Luxury-inspired jewelry designed to elevate everyday confidence.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
