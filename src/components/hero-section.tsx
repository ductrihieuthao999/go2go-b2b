'use client'

import React from 'react'
import Link from 'next/link'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { Hammer, Truck, Ruler, Leaf } from 'lucide-react'

const features = [
  { icon: Hammer, title: 'Handcrafted Quality', description: 'Every piece is crafted by skilled artisans using traditional joinery techniques passed down through generations.' },
  { icon: Ruler, title: 'Custom Sizes & Finishes', description: 'Bespoke dimensions, timber species, stain colours, and hardware options to match any interior specification.' },
  { icon: Truck, title: 'White Glove Delivery', description: 'Full-service delivery and installation for hospitality and commercial fit-outs, nationwide.' },
  { icon: Leaf, title: 'Sustainably Sourced', description: 'All timber sourced from FSC-certified forests. We are committed to responsible, traceable supply chains.' },
]

export function HeroSection() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col">
        {/* Video background */}
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover" src="/videos/hero.mp4" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content — bottom left like Go2Go */}
        <div className="relative z-10 flex-1 flex flex-col justify-end px-8 pb-12 max-w-2xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-5 w-fit">
            <span className="text-white/90 text-xs font-light tracking-wide">✦ Trusted by 150+ designers & hospitality brands</span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            <span className="italic">Artisan furniture</span>
            <br />
            <span className="font-light tracking-tight">for trade.</span>
          </h1>

          <p className="text-sm font-light text-white/70 mb-8 leading-relaxed max-w-sm">
            Premium wholesale timber furniture, custom woodcraft, and bespoke joinery —
            crafted for interior designers, architects, and hospitality businesses.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/catalog"
              className="px-8 py-3 rounded-full bg-white text-[#3E2C1C] font-normal text-xs tracking-widest uppercase transition-all duration-200 hover:bg-white/90"
            >
              View Collections
            </Link>
            <Link
              href="/quotation"
              className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs tracking-widest uppercase transition-all duration-200 hover:bg-white/10 hover:border-white/50"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Features carousel */}
      <section className="py-20 bg-[#F8F4EE]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 mb-12 text-center">
          <p className="text-[#C9A66B] text-[10px] tracking-[0.3em] uppercase mb-4">Why go2go</p>
          <h2
            className="text-4xl font-light text-[#3E2C1C]"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            The go<span className="text-[#C9A66B]">2</span>go Difference
          </h2>
        </div>
        <InfiniteSlider gap={24} duration={40} durationOnHover={80}>
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="w-72 shrink-0 border border-[#3E2C1C]/10 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center bg-[#3E2C1C]/5 mb-4">
                  <Icon className="size-5 text-[#C9A66B]" />
                </div>
                <h3
                  className="text-xl font-light text-[#3E2C1C] mb-2"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {feature.title}
                </h3>
                <p className="text-xs text-[#3E2C1C]/60 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </InfiniteSlider>
      </section>

      {/* About section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div>
              <p className="text-[#C9A66B] text-[10px] tracking-[0.3em] uppercase mb-4">Our Story</p>
              <h2
                className="text-4xl sm:text-5xl font-light text-[#3E2C1C] mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Crafting Bespoke Furniture<br />
                <em>Since 2004</em>
              </h2>
              <p className="text-sm text-[#3E2C1C]/70 leading-relaxed mb-4">
                go2go began in a small workshop in Ho Chi Minh City with a single belief — that beautifully
                crafted wooden furniture should be accessible to businesses of all sizes. Two decades later,
                we supply interior designers, hotel groups, restaurants, and corporate offices worldwide.
              </p>
              <p className="text-sm text-[#3E2C1C]/70 leading-relaxed mb-8">
                Every piece carries the grain, warmth, and character of natural timber — teak, oak,
                walnut, mahogany, and reclaimed wood, each selected for beauty and durability.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/projects"
                  className="px-8 py-3 rounded-full bg-[#3E2C1C] text-white text-xs tracking-widest uppercase hover:bg-[#3E2C1C]/90 transition-colors"
                >
                  View Our Work
                </Link>
                <Link
                  href="/quotation"
                  className="px-8 py-3 rounded-full border border-[#3E2C1C]/30 text-[#3E2C1C] text-xs tracking-widest uppercase hover:bg-[#3E2C1C]/5 transition-colors"
                >
                  Custom Order
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'On-Time Delivery', value: '97%' },
                { label: 'Trade Client Retention', value: '91%' },
                { label: 'Custom Orders Completed', value: '2,400+' },
                { label: 'Wood Species Available', value: '8+' },
              ].map((metric) => (
                <div key={metric.label} className="border border-[#3E2C1C]/10 p-8 text-center">
                  <div
                    className="text-4xl font-light text-[#3E2C1C] mb-2"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-xs text-[#3E2C1C]/50 tracking-wide">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#3E2C1C]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <p className="text-[#C9A66B] text-[10px] tracking-[0.3em] uppercase mb-4">Trade Enquiries Welcome</p>
          <h2
            className="text-4xl sm:text-5xl font-light text-white mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Ready to furnish your<br />
            <em>next project?</em>
          </h2>
          <p className="text-sm text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Share your brief and we will craft a tailored quote within 48 hours —
            whether it is a single statement piece or an entire hotel fit-out.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/quotation"
              className="px-10 py-3 rounded-full bg-white text-[#3E2C1C] text-xs tracking-widest uppercase hover:bg-white/90 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/catalog"
              className="px-10 py-3 rounded-full border border-white/30 text-white text-xs tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Browse Collections
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
