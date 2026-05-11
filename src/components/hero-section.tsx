'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { ChevronRight, Hammer, Truck, Ruler, Leaf } from 'lucide-react'

const partnerLogos = [
  { src: 'https://html.tailus.io/blocks/customers/nvidia.svg', alt: 'Nvidia', h: 'h-5' },
  { src: 'https://html.tailus.io/blocks/customers/github.svg', alt: 'GitHub', h: 'h-4' },
  { src: 'https://html.tailus.io/blocks/customers/nike.svg', alt: 'Nike', h: 'h-5' },
  { src: 'https://html.tailus.io/blocks/customers/openai.svg', alt: 'OpenAI', h: 'h-6' },
  { src: 'https://html.tailus.io/blocks/customers/laravel.svg', alt: 'Laravel', h: 'h-4' },
  { src: 'https://html.tailus.io/blocks/customers/lilly.svg', alt: 'Lilly', h: 'h-7' },
  { src: 'https://html.tailus.io/blocks/customers/lemonsqueezy.svg', alt: 'LemonSqueezy', h: 'h-5' },
  { src: 'https://html.tailus.io/blocks/customers/column.svg', alt: 'Column', h: 'h-4' },
]

const stats = [
  { value: '300+', label: 'Furniture Pieces' },
  { value: '150+', label: 'Trade Clients' },
  { value: '20+', label: 'Years Craftsmanship' },
  { value: '8+', label: 'Wood Species' },
]

const features = [
  {
    icon: Hammer,
    title: 'Handcrafted Quality',
    description:
      'Every piece is crafted by skilled artisans using traditional joinery techniques passed down through generations.',
  },
  {
    icon: Ruler,
    title: 'Custom Sizes & Finishes',
    description:
      'Bespoke dimensions, timber species, stain colours, and hardware options to match any interior specification.',
  },
  {
    icon: Truck,
    title: 'White Glove Delivery',
    description:
      'Full-service delivery and installation for hospitality and commercial fit-outs, nationwide.',
  },
  {
    icon: Leaf,
    title: 'Sustainably Sourced',
    description:
      'All timber sourced from FSC-certified forests. We are committed to responsible, traceable supply chains.',
  },
]

export function HeroSection() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative">
        <div className="py-32 md:pb-40 lg:pb-48 lg:pt-80">
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-amber-400" />
                Trusted by 150+ designers & hospitality brands
              </div>
              <h1 className="mt-6 max-w-2xl text-balance text-5xl font-bold text-white md:text-6xl lg:mt-8 xl:text-7xl leading-tight">
                Artisan Wooden Furniture for Trade
              </h1>
              <p className="mt-6 max-w-xl text-balance text-lg text-white/80">
                Premium wholesale timber furniture, custom woodcraft, and bespoke joinery —
                crafted for interior designers, architects, and hospitality businesses.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Button asChild size="lg" className="h-12 rounded-full pl-5 pr-3 text-base bg-white text-primary hover:bg-white/90">
                  <Link href="/catalog">
                    <span className="text-nowrap">View Collections</span>
                    <ChevronRight className="ml-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-12 rounded-full px-5 text-base text-white border border-white/30 hover:bg-white/10">
                  <Link href="/quotation">
                    <span className="text-nowrap">Request a Quote</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Hero video */}
          <div className="aspect-[2/3] absolute inset-0 overflow-hidden sm:aspect-video">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="size-full object-cover"
              src="/videos/hero.mp4"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Trade clients slider */}
      <section className="bg-background pb-2">
        <div className="group relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:pr-6">
              <p className="text-end text-sm text-muted-foreground">Supplying leading brands</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                {partnerLogos.map((logo) => (
                  <div key={logo.alt} className="flex">
                    <img
                      className={`mx-auto ${logo.h} w-fit opacity-50 dark:invert`}
                      src={logo.src}
                      alt={logo.alt}
                      height="20"
                      width="auto"
                    />
                  </div>
                ))}
              </InfiniteSlider>
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background" />
              <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left" blurIntensity={1} />
              <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary" style={{ fontFamily: 'var(--font-playfair), serif' }}>{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="solutions" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">The go2go Difference</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern trade efficiency — delivering
              furniture your clients will treasure for decades.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-base">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Story</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Crafting Bespoke Furniture Since 2004
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                go2go began in a small workshop in Kuala Lumpur with a single belief — that
                beautifully crafted wooden furniture should be accessible to businesses of
                all sizes. Two decades later, we supply interior designers, hotel groups,
                restaurants, and corporate offices across Malaysia and beyond.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every piece we make carries the grain, warmth, and character of natural timber.
                We work with teak, oak, walnut, mahogany, and reclaimed wood — each selected
                for its beauty and durability.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild>
                  <Link href="/projects">View Our Work</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/quotation">Start a Custom Order</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'On-Time Delivery', value: '97%' },
                { label: 'Trade Client Retention', value: '91%' },
                { label: 'Custom Orders Completed', value: '2,400+' },
                { label: 'Wood Species Available', value: '8+' },
              ].map((metric) => (
                <div key={metric.label} className="rounded-xl border bg-card p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-playfair), serif' }}>{metric.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground">
            <p className="text-sm font-semibold uppercase tracking-widest opacity-70">Trade Enquiries Welcome</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ready to Furnish Your Next Project?</h2>
            <p className="mt-4 text-lg opacity-80 max-w-xl mx-auto">
              Share your brief and we will craft a tailored quote within 48 hours —
              whether it is a single statement piece or an entire hotel fit-out.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 h-12 rounded-full px-8">
                <Link href="/quotation">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-primary-foreground hover:bg-white/10 h-12 rounded-full px-8">
                <Link href="/catalog">Browse Collections</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
