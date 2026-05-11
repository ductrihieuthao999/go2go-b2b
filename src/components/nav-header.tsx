'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { useScroll, motion } from 'motion/react'

const menuItems = [
  { name: 'Collections', href: '/catalog' },
  { name: 'Projects', href: '/projects' },
  { name: 'Custom Orders', href: '/quotation' },
  { name: 'About', href: '/about' },
]

export function NavHeader() {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollYProgress } = useScroll()
  const pathname = usePathname()
  const isHome = pathname === '/'
  const effectiveScrolled = scrolled || !isHome

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrolled(latest > 0.02)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  React.useEffect(() => {
    setMenuState(false)
  }, [pathname])

  return (
    <header>
      <nav
        data-state={menuState ? 'active' : undefined}
        className={cn(
          'group fixed z-20 w-full transition-all duration-300',
          effectiveScrolled
            ? 'bg-[#F8F4EE]/95 backdrop-blur-md border-b border-[#3E2C1C]/10'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className={cn(
              'w-full flex items-center justify-between transition-all duration-200',
              effectiveScrolled ? 'py-4' : 'py-6'
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-baseline gap-px leading-none">
              <span
                className={cn(
                  'text-3xl font-light italic tracking-wide transition-colors duration-300',
                  effectiveScrolled ? 'text-[#3E2C1C]' : 'text-white'
                )}
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Go
              </span>
              <span
                className="text-3xl font-light not-italic text-[#C9A66B] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                2
              </span>
              <span
                className={cn(
                  'text-3xl font-light italic tracking-wide transition-colors duration-300',
                  effectiveScrolled ? 'text-[#3E2C1C]' : 'text-white'
                )}
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Go
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-[10px] tracking-widest uppercase font-light px-3 py-1.5 rounded-full transition-all duration-200',
                    pathname === item.href
                      ? effectiveScrolled
                        ? 'text-[#3E2C1C] bg-[#3E2C1C]/8'
                        : 'text-white bg-white/10'
                      : effectiveScrolled
                      ? 'text-[#3E2C1C]/60 hover:text-[#3E2C1C] hover:bg-[#3E2C1C]/5'
                      : 'text-white/65 hover:text-white hover:bg-white/10'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Link
                href="/signup"
                className={cn(
                  'hidden lg:block text-[10px] tracking-widest uppercase font-light px-5 py-2 rounded-full border transition-all duration-200',
                  effectiveScrolled
                    ? 'border-[#3E2C1C]/30 text-[#3E2C1C] hover:bg-[#3E2C1C]/5'
                    : 'border-white/30 text-white hover:bg-white/10'
                )}
              >
                Sign Up
              </Link>
              <Link
                href="/quotation"
                className={cn(
                  'hidden lg:block text-[10px] tracking-widest uppercase font-light px-5 py-2 rounded-full transition-all duration-200',
                  effectiveScrolled
                    ? 'bg-[#3E2C1C] text-white hover:bg-[#3E2C1C]/90'
                    : 'bg-white text-[#3E2C1C] hover:bg-white/90'
                )}
              >
                Get a Quote
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className={cn(
                  'lg:hidden p-2 transition-colors',
                  effectiveScrolled ? 'text-[#3E2C1C]' : 'text-white'
                )}
              >
                {menuState ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Mobile drawer */}
        {menuState && (
          <div className="lg:hidden bg-[#F8F4EE] border-b border-[#3E2C1C]/10 px-6 py-6 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuState(false)}
                className="block text-xs tracking-widest uppercase text-[#3E2C1C]/70 hover:text-[#3E2C1C] py-3 border-b border-[#3E2C1C]/5 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex gap-3 pt-4">
              <Link
                href="/signup"
                onClick={() => setMenuState(false)}
                className="flex-1 text-center text-xs tracking-widest uppercase py-2.5 border border-[#3E2C1C]/30 text-[#3E2C1C] rounded-full"
              >
                Sign Up
              </Link>
              <Link
                href="/quotation"
                onClick={() => setMenuState(false)}
                className="flex-1 text-center text-xs tracking-widest uppercase py-2.5 bg-[#3E2C1C] text-white rounded-full"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export function Go2GoLogo({ className, scrolled }: { className?: string; scrolled?: boolean }) {
  return (
    <div className={cn('flex items-baseline gap-px leading-none', className)}>
      <span className={cn('text-3xl font-light italic tracking-wide', scrolled ? 'text-[#3E2C1C]' : 'text-white')} style={{ fontFamily: 'var(--font-cormorant)' }}>Go</span>
      <span className="text-3xl font-light not-italic text-[#C9A66B]" style={{ fontFamily: 'var(--font-cormorant)' }}>2</span>
      <span className={cn('text-3xl font-light italic tracking-wide', scrolled ? 'text-[#3E2C1C]' : 'text-white')} style={{ fontFamily: 'var(--font-cormorant)' }}>Go</span>
    </div>
  )
}
