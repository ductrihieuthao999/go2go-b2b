import React from 'react'
import Link from 'next/link'

interface Project {
  id: string
  client: string
  industry: string
  title: string
  scope: string
  approach: string
  results: { label: string; value: string }[]
}

const projects: Project[] = [
  { id: '1', client: 'The Majestic Hotel', industry: 'Hospitality', title: 'Heritage Lobby & Dining Room Restoration', scope: 'Full furniture fit-out for a 5-star colonial heritage hotel restoration. 120 dining chairs, 20 tables, bespoke reception desk, and lounge seating across lobby and 3 dining spaces.', approach: 'Sourced period-appropriate solid mahogany and teak, hand-finished to match the hotel\'s 1930s architectural character. All joinery details referenced original archive photographs.', results: [{ label: 'Pieces crafted', value: '340+' }, { label: 'Lead time', value: '14 wks' }, { label: 'Design revisions', value: '0' }] },
  { id: '2', client: 'Nona\'s Kitchen Group', industry: 'F&B', title: 'Custom Dining Furniture for 8-Outlet Restaurant Chain', scope: 'Standardised dining set across 8 outlets — solid rubber wood tables, rattan-back chairs, and reclaimed wood wall panelling for a warm, rustic dining atmosphere.', approach: 'Developed a modular furniture system that fits varying floor plans across all outlets while maintaining a consistent brand identity. Production batched to reduce per-unit cost by 34%.', results: [{ label: 'Outlets furnished', value: '8' }, { label: 'Cost saving vs. retail', value: '34%' }, { label: 'Delivery on schedule', value: '100%' }] },
  { id: '3', client: 'Alila Villas Resort', industry: 'Hospitality', title: 'Grade A Teak Outdoor Furniture for 50 Private Villas', scope: 'Supply of outdoor loungers, dining sets, and daybeds in Grade A teak for 50 private pool villas. All pieces built to withstand tropical climate and poolside conditions.', approach: 'Specified kiln-dried Grade A teak with stainless steel hardware throughout. Supplied with a 10-year structural warranty and annual oiling service agreement.', results: [{ label: 'Villas furnished', value: '50' }, { label: 'Pieces delivered', value: '600+' }, { label: 'Warranty period', value: '10 yrs' }] },
  { id: '4', client: 'TowerOne Corporate HQ', industry: 'Corporate', title: 'Executive Office Furniture for 12-Floor Headquarters', scope: 'Bespoke solid walnut executive desks, meeting tables, and credenzas for C-suite and meeting rooms across a 12-floor corporate headquarters.', approach: 'Collaborated with the interior designer on custom dimensions and integrated cable management systems. All pieces hand-finished in a matching espresso walnut stain.', results: [{ label: 'Floors furnished', value: '12' }, { label: 'Bespoke pieces', value: '180+' }, { label: 'Install time', value: '3 days' }] },
  { id: '5', client: 'Atas Boutique Hotel', industry: 'Hospitality', title: 'Full Room Furniture Package for 40-Room Boutique Hotel', scope: 'Complete bedroom furniture package for a 40-room boutique hotel — bed frames, nightstands, wardrobes, writing desks, and luggage racks — all in solid rubber wood with a whitewashed finish.', approach: 'Designed a cohesive furniture collection exclusive to the property. Flat-pack assembly format enabled installation by the hotel\'s own team within a tight pre-opening schedule.', results: [{ label: 'Rooms furnished', value: '40' }, { label: 'Pieces supplied', value: '280+' }, { label: 'Pre-opening delivered', value: '✓' }] },
  { id: '6', client: 'Arkitek Studio', industry: 'Interior Design', title: 'Ongoing Trade Supply for Architecture & Design Practice', scope: 'Preferred trade supplier to a leading architecture firm — supplying custom and standard timber furniture for residential and commercial projects on an ongoing basis.', approach: 'Dedicated account manager, priority production scheduling, and 30-day trade payment terms. Sample room with 40+ finishes available for client presentations.', results: [{ label: 'Projects supplied', value: '35+' }, { label: 'Trade discount', value: '25%' }, { label: 'Partnership since', value: '2018' }] },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#3E2C1C] text-white pt-36 pb-16 px-6">
        <div className="max-w-7xl mx-auto lg:px-6">
          <p className="text-[#C9A66B] text-[10px] tracking-[0.3em] uppercase mb-4">Case Studies</p>
          <h1
            className="text-5xl font-light leading-tight mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Our Work
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
            From boutique hotels to corporate headquarters — a selection of projects where
            go2go woodcraft brought spaces to life.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {['All', 'Hospitality', 'F&B', 'Corporate', 'Interior Design'].map((ind) => (
              <span key={ind} className="rounded-full border border-white/20 px-4 py-1.5 text-xs text-white/50">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <section className="py-16 bg-[#F8F4EE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-px bg-[#3E2C1C]/10 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#3E2C1C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[#C9A66B] text-[10px] tracking-[0.3em] uppercase mb-4">Work With Us</p>
          <h2
            className="text-4xl font-light text-white mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Your project, <em>our craft.</em>
          </h2>
          <p className="text-sm text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Every great interior starts with the right furniture partner. Share your brief
            and let us show you what go2go can create for your next project.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/quotation" className="px-10 py-3 rounded-full bg-white text-[#3E2C1C] text-xs tracking-widest uppercase hover:bg-white/90 transition-colors">
              Start a Project
            </Link>
            <Link href="/catalog" className="px-10 py-3 rounded-full border border-white/30 text-white text-xs tracking-widest uppercase hover:bg-white/10 transition-colors">
              Browse Collections
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col bg-white group hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="p-6 bg-[#3E2C1C]/3 border-b border-[#3E2C1C]/8">
        <p className="text-[9px] font-medium tracking-[0.2em] uppercase text-[#C9A66B] mb-1">{project.industry}</p>
        <p className="text-xs text-[#3E2C1C]/50 mb-1">{project.client}</p>
        <h3
          className="text-xl font-light text-[#3E2C1C] leading-snug"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          {project.title}
        </h3>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="space-y-4 mb-6">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#3E2C1C]/40 mb-1">Scope</p>
            <p className="text-xs text-[#3E2C1C]/60 leading-relaxed">{project.scope}</p>
          </div>
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#3E2C1C]/40 mb-1">Approach</p>
            <p className="text-xs text-[#3E2C1C]/60 leading-relaxed">{project.approach}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 border-t border-[#3E2C1C]/8 pt-5">
          {project.results.map((result) => (
            <div key={result.label} className="text-center">
              <div
                className="text-xl font-light text-[#C9A66B]"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {result.value}
              </div>
              <div className="mt-0.5 text-[9px] text-[#3E2C1C]/40 leading-tight">{result.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
