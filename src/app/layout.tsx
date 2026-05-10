import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import { NavHeader } from '@/components/nav-header'
import { Footer } from '@/components/footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
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
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <NavHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
