import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavHeader } from '@/components/nav-header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'go2go B2B — Supply Solutions for Growing Businesses',
  description:
    'go2go B2B provides fast procurement, custom quotes, and reliable delivery for businesses of all sizes. Browse 500+ products and get a quote in 24 hours.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
