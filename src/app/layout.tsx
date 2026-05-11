import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { NavHeader } from '@/components/nav-header'
import { Footer } from '@/components/footer'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'go2go — Artisan Wooden Furniture & Craft for Trade',
  description:
    'Premium wholesale timber furniture, custom woodcraft, and bespoke joinery for interior designers, architects, and hospitality businesses.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${cormorant.variable}`}>
        <NavHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
