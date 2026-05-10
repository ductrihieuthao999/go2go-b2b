import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronRight } from 'lucide-react'

interface Project {
  id: string
  client: string
  industry: string
  title: string
  scope: string
  approach: string
  results: { label: string; value: string }[]
  color: string
  accent: string
}

const projects: Project[] = [
  {
    id: '1',
    client: 'The Majestic Hotel',
    industry: 'Hospitality',
    title: 'Heritage Lobby & Dining Room Restoration',
    scope: 'Full furniture fit-out for a 5-star colonial heritage hotel restoration. 120 dining chairs, 20 tables, bespoke reception desk, and lounge seating across lobby and 3 dining spaces.',
    approach: 'Sourced period-appropriate solid mahogany and teak, hand-finished to match the hotel\'s 1930s architectural character. All joinery details referenced original archive photographs.',
    results: [
      { label: 'Pieces crafted', value: '340+' },
      { label: 'Lead time', value: '14 wks' },
      { label: 'Design revisions', value: '0' },
    ],
    color: 'bg-amber-50',
    accent: 'text-amber-700',
  },
  {
    id: '2',
    client: 'Nona\'s Kitchen Group',
    industry: 'F&B',
    title: 'Custom Dining Furniture for 8-Outlet Restaurant Chain',
    scope: 'Standardised dining set across 8 outlets — solid rubber wood tables, rattan-back chairs, and reclaimed wood wall panelling for a warm, rustic dining atmosphere.',
    approach: 'Developed a modular furniture system that fits varying floor plans across all outlets while maintaining a consistent brand identity. Production batched to reduce per-unit cost by 34%.',
    results: [
      { label: 'Outlets furnished', value: '8' },
      { label: 'Cost saving vs. retail', value: '34%' },
      { label: 'Delivery on schedule', value: '100%' },
    ],
    color: 'bg-orange-50',
    accent: 'text-orange-700',
  },
  {
    id: '3',
    client: 'Alila Villas Resort',
    industry: 'Hospitality',
    title: 'Grade A Teak Outdoor Furniture for 50 Private Villas',
    scope: 'Supply of outdoor loungers, dining sets, and daybeds in Grade A teak for 50 private pool villas. All pieces built to withstand tropical climate and poolside conditions.',
    approach: 'Specified kiln-dried Grade A teak with stainless steel hardware throughout. Supplied with a 10-year structural warranty and annual oiling service agreement.',
    results: [
      { label: 'Villas furnished', value: '50' },
      { label: 'Pieces delivered', value: '600+' },
      { label: 'Warranty period', value: '10 yrs' },
    ],
    color: 'bg-green-50',
    accent: 'text-green-700',
  },
  {
    id: '4',
    client: 'TowerOne Corporate HQ',
    industry: 'Corporate',
    title: 'Executive Office Furniture for 12-Floor Headquarters',
    scope: 'Bespoke solid walnut executive desks, meeting tables, and credenzas for C-suite and meeting rooms across a 12-floor corporate headquarters in KL City Centre.',
    approach: 'Collaborated with the interior designer on custom dimensions and integrated cable management systems. All pieces hand-finished in a matching espresso walnut stain.',
    results: [
      { label: 'Floors furnished', value: '12' },
      { label: 'Bespoke pieces', value: '180+' },
      { label: 'Install time', value: '3 days' },
    ],
    color: 'bg-slate-50',
    accent: 'text-slate-700',
  },
  {
    id: '5',
    client: 'Atas Boutique Hotel',
    industry: 'Hospitality',
    title: 'Full Room Furniture Package for 40-Room Boutique Hotel',
    scope: 'Complete bedroom furniture package for a 40-room boutique hotel — bed frames, nightstands, wardrobes, writing desks, and luggage racks — all in solid rubber wood with a whitewashed finish.',
    approach: 'Designed a cohesive furniture collection exclusive to the property. Flat-pack assembly format enabled installation by the hotel\'s own team within a tight pre-opening schedule.',
    results: [
      { label: 'Rooms furnished', value: '40' },
      { label: 'Pieces supplied', value: '280+' },
      { label: 'Pre-opening delivered', value: '✓' },
    ],
    color: 'bg-rose-50',
    accent: 'text-rose-700',
  },
  {
    id: '6',
    client: 'Arkitek Studio',
    industry: 'Interior Design',
    title: 'Ongoing Trade Supply for Architecture & Design Practice',
    scope: 'Preferred trade supplier to a leading KL architecture firm — supplying custom and standard timber furniture for residential and commercial projects on an ongoing basis.',
    approach: 'Dedicated account manager, priority production scheduling, and 30-day trade payment terms. Sample room with 40+ finishes available for client presentations.',
    results: [
      { label: 'Projects supplied', value: '35+' },
      { label: 'Trade discount', value: '25%' },
      { label: 'Partnership since', value: '2018' },
    ],
    color: 'bg-purple-50',
    accent: 'text-purple-700',
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="bg-secondary/50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-foreground">Projects</span>
          </div>
          <h1 className="text-4xl font-bold">Our Work</h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            From boutique hotels to corporate headquarters — a selection of projects where
            go2go woodcraft brought spaces to life.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {['All', 'Hospitality', 'F&B', 'Corporate', 'Interior Design'].map((ind) => (
              <span key={ind} className="rounded-full border bg-background px-4 py-1.5 text-sm text-muted-foreground">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Work With Us</p>
          <h2 className="mt-3 text-3xl font-bold">Your Project, Our Craft</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Every great interior starts with the right furniture partner. Share your brief
            and let us show you what go2go can create for your next project.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/quotation">Start a Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/catalog">Browse Collections</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className={`p-6 ${project.color}`}>
        <Badge variant="outline" className="mb-2 text-xs">{project.industry}</Badge>
        <p className="text-xs font-semibold text-muted-foreground">{project.client}</p>
        <h3 className="mt-1 text-lg font-bold leading-snug">{project.title}</h3>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Scope</p>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{project.scope}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Approach</p>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{project.approach}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 border-t pt-6">
          {project.results.map((result) => (
            <div key={result.label} className="text-center">
              <div className={`text-xl font-bold ${project.accent}`} style={{ fontFamily: 'var(--font-playfair), serif' }}>{result.value}</div>
              <div className="mt-0.5 text-xs text-muted-foreground leading-tight">{result.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
