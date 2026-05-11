import React from 'react'
import Link from 'next/link'
import { Go2GoLogo } from '@/components/nav-header'
import { Mail, Phone, MapPin } from 'lucide-react'

const collectionLinks = [
  { name: 'Dining Furniture', href: '/catalog?category=dining' },
  { name: 'Living Room', href: '/catalog?category=living' },
  { name: 'Bedroom', href: '/catalog?category=bedroom' },
  { name: 'Office Furniture', href: '/catalog?category=office' },
  { name: 'Outdoor Teak', href: '/catalog?category=outdoor' },
  { name: 'Raw Materials', href: '/catalog?category=materials' },
]

const companyLinks = [
  { name: 'About Us', href: '/#about' },
  { name: 'Our Projects', href: '/projects' },
  { name: 'Custom Orders', href: '/quotation' },
  { name: 'Trade Programme', href: '/quotation' },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Go2GoLogo scrolled={true} />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Artisan wooden furniture and woodcraft for trade. Supplying interior designers,
              architects, and hospitality businesses since 2004.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" />
                <a href="mailto:trade@go2go.com" className="hover:text-foreground transition-colors">
                  trade@go2go.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" />
                <a href="tel:+60312345678" className="hover:text-foreground transition-colors">
                  +603 1234 5678
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="size-4 shrink-0 mt-0.5" />
                <span>Kuala Lumpur, Malaysia</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Collections</h3>
            <ul className="mt-4 space-y-3">
              {collectionLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Trade Programme</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Exclusive trade pricing</li>
              <li>Dedicated account manager</li>
              <li>Sample room access</li>
              <li>Priority production scheduling</li>
              <li>30-day payment terms</li>
              <li>White glove delivery</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} go2go Woodcraft. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
