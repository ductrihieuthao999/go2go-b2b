import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa'

const collectionLinks = [
  { name: 'Dining Furniture', href: '/catalog?category=dining' },
  { name: 'Living Room', href: '/catalog?category=living' },
  { name: 'Bedroom', href: '/catalog?category=bedroom' },
  { name: 'Office Furniture', href: '/catalog?category=office' },
  { name: 'Outdoor Teak', href: '/catalog?category=outdoor' },
  { name: 'Raw Materials', href: '/catalog?category=materials' },
]

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Projects', href: '/projects' },
  { name: 'Custom Orders', href: '/quotation' },
  { name: 'Trade Programme', href: '/signup' },
]

export function Footer() {
  return (
    <footer className="bg-[#3E2C1C] text-white/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-px leading-none mb-4">
              <span className="text-3xl font-light italic tracking-wide text-white" style={{ fontFamily: 'var(--font-cormorant)' }}>Go</span>
              <span className="text-3xl font-light not-italic text-[#C9A66B]" style={{ fontFamily: 'var(--font-cormorant)' }}>2</span>
              <span className="text-3xl font-light italic tracking-wide text-white" style={{ fontFamily: 'var(--font-cormorant)' }}>Go</span>
            </div>
            <p className="text-xs leading-relaxed text-white/40 mb-6">
              Artisan wooden furniture and woodcraft for trade. Supplying interior designers,
              architects, and hospitality businesses worldwide.
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaInstagram, href: '#', label: 'Instagram' },
                { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                { icon: FaPinterest, href: '#', label: 'Pinterest' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white/30 hover:text-[#C9A66B] transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <p className="text-white text-[10px] tracking-widest uppercase mb-5">Collections</p>
            <ul className="space-y-3">
              {collectionLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white text-[10px] tracking-widest uppercase mb-5">Company</p>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trade */}
          <div>
            <p className="text-white text-[10px] tracking-widest uppercase mb-5">Trade Programme</p>
            <ul className="space-y-3 text-xs">
              {['Exclusive trade pricing', 'Dedicated account manager', 'Sample room access', 'Priority production scheduling', '30-day payment terms', 'White glove delivery'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-white/25 tracking-wide">© {new Date().getFullYear()} Go2Go. All rights reserved.</p>
          <div className="flex items-center gap-5 text-white/25 text-[10px] tracking-widest uppercase">
            <Link href="#" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/50 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
