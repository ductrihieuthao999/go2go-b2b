'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useScroll, motion } from 'motion/react'

const menuItems = [
  { name: 'Collections', href: '/catalog' },
  { name: 'Projects', href: '/projects' },
  { name: 'Custom Orders', href: '/quotation' },
  { name: 'About', href: '/#about' },
]

export function NavHeader() {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollYProgress } = useScroll()
  const pathname = usePathname()

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
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border/60 shadow-sm'
            : 'bg-transparent'
        )}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className={cn(
              'relative flex flex-wrap items-center justify-between gap-6 duration-200 lg:gap-0',
              scrolled ? 'py-4' : 'py-6'
            )}>
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link href="/" aria-label="go2go home">
                <Go2GoLogo scrolled={scrolled} />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className={cn(
                  'relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden',
                  scrolled ? 'text-foreground' : 'text-white'
                )}>
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm font-medium">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={cn(
                          'block duration-150 hover:opacity-100',
                          pathname === item.href ? 'opacity-100 font-semibold' : 'opacity-70',
                          scrolled ? 'text-foreground' : 'text-white'
                        )}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-2xl border p-6 shadow-xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className="text-muted-foreground hover:text-foreground block duration-150 font-medium">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className={cn(
                    'rounded-full border font-semibold transition-all',
                    !scrolled && 'border-white/50 text-white bg-transparent hover:bg-white/10 lg:flex hidden'
                  )}>
                  <Link href="/catalog">View Collections</Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className={cn(
                    'rounded-full font-semibold',
                    !scrolled && 'bg-white text-primary hover:bg-white/90'
                  )}>
                  <Link href="/quotation">Request Quote</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  )
}

export function Go2GoLogo({ className, scrolled }: { className?: string; scrolled?: boolean }) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="15" stroke={scrolled ? 'hsl(22 55% 25%)' : 'white'} strokeWidth="2" fill="none" />
        <circle cx="16" cy="16" r="10" stroke={scrolled ? 'hsl(22 55% 25%)' : 'white'} strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="16" r="5" stroke={scrolled ? 'hsl(22 55% 25%)' : 'white'} strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="16" r="1.5" fill={scrolled ? 'hsl(22 55% 25%)' : 'white'} />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={cn('text-lg font-bold tracking-tight', scrolled ? 'text-foreground' : 'text-white')}>
          go2go
        </span>
        <span className={cn('text-[9px] font-semibold uppercase tracking-[0.15em]', scrolled ? 'text-muted-foreground' : 'text-white/60')}>
          Woodcraft
        </span>
      </div>
    </div>
  )
}
