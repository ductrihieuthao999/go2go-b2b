'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'

interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  quote: string
  social?: {
    linkedin?: string
    instagram?: string
  }
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

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: TeamMember
  className: string
  hoveredId: string | null
  onHover: (id: string | null) => void
}) {
  const isActive = hoveredId === member.id
  const isDimmed = hoveredId !== null && !isActive

  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-opacity duration-400',
        className,
        isDimmed ? 'opacity-60' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-top transition-[filter] duration-500"
        style={{
          filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.77)',
        }}
      />
    </div>
  )
}

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember
  hoveredId: string | null
  onHover: (id: string | null) => void
}) {
  const isActive = hoveredId === member.id
  const isDimmed = hoveredId !== null && !isActive

  return (
    <div
      className={cn(
        'cursor-pointer transition-opacity duration-300',
        isDimmed ? 'opacity-50' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            'h-3 rounded-[5px] flex-shrink-0 transition-all duration-300',
            isActive ? 'bg-foreground w-5' : 'bg-foreground/25 w-4',
          )}
        />
        <span
          className={cn(
            'text-base md:text-[18px] font-semibold leading-none tracking-tight transition-colors duration-300',
            isActive ? 'text-foreground' : 'text-foreground/80',
          )}
        >
          {member.name}
        </span>

        {(member.social?.linkedin || member.social?.instagram) && (
          <div
            className={cn(
              'flex items-center gap-1.5 ml-0.5 transition-all duration-200',
              isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none',
            )}
          >
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
              >
                <FaLinkedinIn size={10} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
              >
                <FaInstagram size={10} />
              </a>
            )}
          </div>
        )}
      </div>

      <p className="mt-1 pl-[27px] text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {member.role}
      </p>

      <p
        className={cn(
          'mt-2 pl-[27px] text-sm text-muted-foreground italic leading-relaxed max-w-xs transition-all duration-300',
          isActive ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden',
        )}
      >
        &ldquo;{member.quote}&rdquo;
      </p>
    </div>
  )
}

function TeamShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const col1 = team.filter((_, i) => i % 3 === 0)
  const col2 = team.filter((_, i) => i % 3 === 1)
  const col3 = team.filter((_, i) => i % 3 === 2)

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-14 select-none w-full max-w-5xl mx-auto py-8 px-4 md:px-6">
      {/* Photo grid */}
      <div className="flex gap-2 md:gap-3 flex-shrink-0 overflow-x-auto pb-1 md:pb-0">
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[110px] h-[120px] sm:w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2 md:gap-3 mt-[48px] sm:mt-[56px] md:mt-[68px]">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[122px] h-[132px] sm:w-[145px] sm:h-[155px] md:w-[172px] md:h-[182px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2 md:gap-3 mt-[22px] sm:mt-[26px] md:mt-[32px]">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[115px] h-[125px] sm:w-[136px] sm:h-[146px] md:w-[162px] md:h-[172px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* Member list */}
      <div className="flex flex-col gap-6 md:gap-7 pt-0 md:pt-2 flex-1 w-full">
        {team.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Story */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Story</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl max-w-2xl">
            Crafting Bespoke Furniture Since 2004
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            go2go began in a small workshop in Kuala Lumpur with a single belief — that beautifully
            crafted wooden furniture should be accessible to businesses of all sizes. Two decades
            later, we supply interior designers, hotel groups, restaurants, and corporate offices
            across Malaysia and beyond.
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
            Every piece we make carries the grain, warmth, and character of natural timber. We work
            with teak, oak, walnut, mahogany, and reclaimed wood — each selected for its beauty and
            durability.
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
      </section>

      {/* Metrics */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-xl border bg-card p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-primary">{m.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">The People Behind the Craft</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Meet the Team</h2>
          </div>
          <TeamShowcase />
        </div>
      </section>
    </main>
  )
}
