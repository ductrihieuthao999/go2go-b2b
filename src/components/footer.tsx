import React from 'react'
import Link from 'next/link'
import { Go2GoLogo } from '@/components/nav-header'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa'

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

const socialLinks = [
  { icon: FaFacebook, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaPinterest, href: '#', label: 'Pinterest' },
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
            <div className="mt-6 flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-muted-foreground hover:text-foreground transition-colors">
                  <Icon className="size-5" />
                </a>
              ))}
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
