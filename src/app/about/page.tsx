'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
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
  {
    id: '1',
    name: 'Tri Nguyen',
    role: 'CEO & Founder',
    image: '/members/tri.png',
    quote: 'Wood is a living material — every piece we make tells a story of the forest it came from.',
    social: { linkedin: '#' },
  },
  {
    id: '2',
    name: 'Hue Luong',
    role: 'Head of Ops & Finance',
    image: '/members/hue.png',
    quote: 'Precision in craft demands precision in operations. We deliver on time, every time.',
    social: { linkedin: '#' },
  },
  {
    id: '3',
    name: 'Marco Dao',
    role: 'Head of Marketing',
    image: '/members/nghia.png',
    quote: 'Great furniture doesn\'t need to be sold — it just needs to be seen.',
    social: { linkedin: '#', instagram: '#' },
  },
  {
    id: '4',
    name: 'Nhat Nguyen',
    role: 'Lead Interior Designer',
    image: '/members/nhat.png',
    quote: 'I design with the wood, not against it. Nature already knows the right form.',
    social: { linkedin: '#', instagram: '#' },
  },
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
      className="relative overflow-hidden rounded-2xl cursor-pointer group"
      style={{ aspectRatio: '3/4' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo */}
      <img
        src={member.image}
        alt={member.name}
        className={cn(
          'absolute inset-0 h-full w-full object-cover object-top transition-all duration-700',
          hovered ? 'scale-105 brightness-50' : 'scale-100 brightness-75'
        )}
      />

      {/* Always-visible bottom label */}
      <div
        className={cn(
          'absolute inset-x-0 bottom-0 p-6 transition-all duration-500',
          hovered ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
        )}
      >
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="relative">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">{member.role}</p>
          <h3 className="mt-1 text-xl font-bold text-white">{member.name}</h3>
        </div>
      </div>

      {/* Hover overlay */}
      <div
        className={cn(
          'absolute inset-0 flex flex-col justify-center p-8 transition-all duration-500',
          hovered ? 'opacity-100' : 'opacity-0'
        )}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">{member.role}</p>
        <h3 className="mt-2 text-2xl font-bold text-white">{member.name}</h3>
        <p className="mt-4 text-sm text-white/80 leading-relaxed italic">
          &ldquo;{member.quote}&rdquo;
        </p>
        <div className="mt-6 flex gap-3">
          {member.social?.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
            >
              <FaLinkedinIn size={13} />
            </a>
          )}
          {member.social?.instagram && (
            <a
              href={member.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
            >
              <FaInstagram size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Story</p>
              <h1 className="mt-3 text-4xl font-bold sm:text-5xl leading-tight">
                Crafting Bespoke Furniture Since 2004
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                go2go began in a small workshop in Kuala Lumpur with a single belief — that
                beautifully crafted wooden furniture should be accessible to businesses of all sizes.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Two decades later, we supply interior designers, hotel groups, restaurants, and
                corporate offices across Malaysia and beyond. Every piece carries the grain, warmth,
                and character of natural timber — teak, oak, walnut, mahogany, and reclaimed wood,
                each selected for beauty and durability.
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

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border bg-card p-8 shadow-sm">
                  <div className="text-4xl font-bold text-primary">{m.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">The People Behind the Craft</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Meet the Team</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Hover over each portrait to hear from the people who bring go2go to life.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {team.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
