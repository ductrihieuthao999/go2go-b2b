import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const team = [
  { name: 'Tri Nguyen', role: 'CEO & Founder', img: '/members/tri.png' },
  { name: 'Hue Luong', role: 'Head of Ops & Finance', img: '/members/hue.png' },
  { name: 'Marco Dao', role: 'Head of Marketing', img: '/members/nghia.png' },
  { name: 'Nhat Nguyen', role: 'Lead Interior Designer', img: '/members/nhat.png' },
]

const metrics = [
  { label: 'On-Time Delivery', value: '97%' },
  { label: 'Trade Client Retention', value: '91%' },
  { label: 'Custom Orders Completed', value: '2,400+' },
  { label: 'Wood Species Available', value: '8+' },
]

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Story</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl max-w-2xl">
            Crafting Bespoke Furniture Since 2004
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            go2go began in a small workshop in Kuala Lumpur with a single belief — that
            beautifully crafted wooden furniture should be accessible to businesses of all sizes.
            Two decades later, we supply interior designers, hotel groups, restaurants, and
            corporate offices across Malaysia and beyond.
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
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
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">The People Behind the Craft</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Meet the Team</h2>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-10 sm:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-2 border-border bg-secondary">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <h3 className="mt-4 font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
