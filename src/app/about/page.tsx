'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { cn } from '@/lib/utils'

interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  quote: string
  social?: { linkedin?: string; instagram?: string }
}

const team: TeamMember[] = [
  { id: '1', name: 'Tri Nguyen', role: 'CEO & Founder', image: '/members/tri.png', quote: 'We didn\'t start a woodwork business — we started a conversation about what it means to make something that lasts.', social: { linkedin: '#', instagram: '#' } },
  { id: '2', name: 'Hue Luong', role: 'Head of Operations & Finance', image: '/members/hue.png', quote: 'Good craft deserves good structure behind it. My job is to make sure the business is as solid as the wood we use.', social: { linkedin: '#' } },
  { id: '3', name: 'Marco Dao', role: 'Head of Marketing', image: '/members/nghia.png', quote: 'Every piece has a story — my job is to make sure the right people get to hear it.', social: { linkedin: '#', instagram: '#' } },
  { id: '4', name: 'Nhat Nguyen', role: 'Lead Interior Designer', image: '/members/nhat.png', quote: 'A beautiful object should belong to its space naturally. That\'s the standard I hold every design to.', social: { linkedin: '#', instagram: '#' } },
]

const metrics = [
  { label: 'On-Time Delivery', value: '97%' },
  { label: 'Trade Client Retention', value: '91%' },
  { label: 'Custom Orders Completed', value: '2,400+' },
  { label: 'Wood Species Available', value: '8+' },
]

function MemberCard({ member }: { member: TeamMember }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="flex flex-col cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          style={{
            filter: hovered ? 'grayscale(0) brightness(1)' : 'grayscale(0.5) brightness(0.9)',
            transition: 'filter 0.5s ease, transform 0.7s ease',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="text-[9px] font-light uppercase tracking-[0.25em] text-white/70">{member.role}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 border border-t-0 border-[#3E2C1C]/10 flex flex-col gap-3 bg-white">
        <div className="flex items-center justify-between">
          <h3
            className="text-xl font-light text-[#3E2C1C]"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            {member.name}
          </h3>
          {(member.social?.linkedin || member.social?.instagram) && (
            <div className="flex items-center gap-1.5">
              {member.social?.linkedin && (
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                  className="w-6 h-6 rounded-full border border-[#3E2C1C]/20 flex items-center justify-center text-[#3E2C1C]/40 hover:text-[#3E2C1C] hover:border-[#3E2C1C]/50 transition-all">
                  <FaLinkedinIn size={9} />
                </a>
              )}
              {member.social?.instagram && (
                <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                  className="w-6 h-6 rounded-full border border-[#3E2C1C]/20 flex items-center justify-center text-[#3E2C1C]/40 hover:text-[#3E2C1C] hover:border-[#3E2C1C]/50 transition-all">
                  <FaInstagram size={9} />
                </a>
              )}
            </div>
          )}
        </div>
        <div className="h-px bg-[#3E2C1C]/8 w-full" />
        <blockquote
          className="text-sm font-light italic text-[#3E2C1C]/55 leading-relaxed"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          &ldquo;{member.quote}&rdquo;
        </blockquote>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <div className="bg-[#3E2C1C] text-white pt-36 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C9A66B] text-[10px] tracking-[0.3em] uppercase mb-6">Our Story</p>
          <h1
            className="text-5xl md:text-6xl font-light leading-tight mb-8"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Made slow,<br />
            <em>made to last.</em>
          </h1>
        </div>
      </div>

      {/* Story + metrics */}
      <section className="py-24 bg-[#F8F4EE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div>
              <p className="text-[#C9A66B] text-[10px] tracking-[0.3em] uppercase mb-4">The Beginning</p>
              <h2
                className="text-4xl font-light text-[#3E2C1C] mb-6"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Crafting Bespoke Furniture<br /><em>Since 2004</em>
              </h2>
              <p className="text-sm text-[#3E2C1C]/70 leading-relaxed mb-4">
                go2go began in a small workshop in Ho Chi Minh City with a single belief — that
                beautifully crafted wooden furniture should be accessible to businesses of all sizes.
              </p>
              <p className="text-sm text-[#3E2C1C]/70 leading-relaxed mb-8">
                Two decades later, we supply interior designers, hotel groups, restaurants, and
                corporate offices across Asia and beyond. Every piece carries the grain, warmth,
                and character of natural timber.
              </p>
              <div className="flex gap-4">
                <Link href="/projects" className="px-8 py-3 rounded-full bg-[#3E2C1C] text-white text-xs tracking-widest uppercase hover:bg-[#3E2C1C]/90 transition-colors">
                  View Our Work
                </Link>
                <Link href="/quotation" className="px-8 py-3 rounded-full border border-[#3E2C1C]/30 text-[#3E2C1C] text-xs tracking-widest uppercase hover:bg-[#3E2C1C]/5 transition-colors">
                  Custom Order
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-[#3E2C1C]/10 border border-[#3E2C1C]/10">
              {metrics.map((m) => (
                <div key={m.label} className="bg-white p-8 text-center">
                  <div
                    className="text-4xl font-light text-[#3E2C1C] mb-2"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                  >
                    {m.value}
                  </div>
                  <div className="text-xs text-[#3E2C1C]/50 tracking-wide">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="text-[#C9A66B] text-[10px] tracking-[0.3em] uppercase mb-4">The People Behind the Craft</p>
            <h2
              className="text-4xl font-light text-[#3E2C1C]"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Meet the Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#3E2C1C]/10 border border-[#3E2C1C]/10">
            {team.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
