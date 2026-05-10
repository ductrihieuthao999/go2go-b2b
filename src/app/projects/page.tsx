import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, TrendingDown, Clock, ShieldCheck, Package } from 'lucide-react'

interface Project {
  id: string
  client: string
  industry: string
  title: string
  challenge: string
  solution: string
  results: { label: string; value: string }[]
  icon: React.ElementType
  color: string
  accent: string
}

const projects: Project[] = [
  {
    id: '1',
    client: 'MegaFab Industries',
    industry: 'Manufacturing',
    title: 'Centralized Procurement for 3 Production Plants',
    challenge:
      'Managing consumables across 3 facilities led to duplicate orders, stockouts, and 18% cost overruns each quarter.',
    solution:
      'go2go implemented a centralized ordering portal, standardized SKUs, and weekly consolidated deliveries across all three plants.',
    results: [
      { label: 'Cost Reduction', value: '31%' },
      { label: 'Stockout incidents', value: '0' },
      { label: 'Order processing time', value: '−65%' },
    ],
    icon: TrendingDown,
    color: 'bg-blue-50',
    accent: 'text-blue-600',
  },
  {
    id: '2',
    client: 'SunMart Retail Group',
    industry: 'Retail',
    title: 'Nationwide Packaging Standardization for 47 Outlets',
    challenge:
      'Each outlet sourced packaging independently, creating inconsistency in brand presentation and escalating per-unit costs.',
    solution:
      'Designed a custom branded packaging suite and set up a hub-and-spoke delivery model from our central warehouse to all 47 locations.',
    results: [
      { label: 'Brand consistency', value: '100%' },
      { label: 'Per-unit cost saving', value: '28%' },
      { label: 'Supplier reduction', value: '12 → 1' },
    ],
    icon: Package,
    color: 'bg-orange-50',
    accent: 'text-orange-600',
  },
  {
    id: '3',
    client: 'BuildRight Construction',
    industry: 'Construction',
    title: 'Site Safety Compliance Across 8 Active Projects',
    challenge:
      'Failed DOSH audits due to inconsistent PPE supply and missing safety documentation across project sites.',
    solution:
      'Supplied SIRIM and DOSH-certified safety equipment with full documentation, monthly replenishment schedules, and on-site safety audits.',
    results: [
      { label: 'Audit pass rate', value: '100%' },
      { label: 'PPE compliance', value: '98%' },
      { label: 'Incident reduction', value: '40%' },
    ],
    icon: ShieldCheck,
    color: 'bg-yellow-50',
    accent: 'text-yellow-600',
  },
  {
    id: '4',
    client: 'FreshBev F&B',
    industry: 'Food & Beverage',
    title: 'Cold-Chain Packaging Solution for Export Market',
    challenge:
      'Perishable products were failing overseas inspection due to inadequate insulated packaging for 36-hour transit.',
    solution:
      'Engineered a custom EPS + PCM (phase change material) packaging system tested to maintain 4°C for 48 hours. Passed export certification on first attempt.',
    results: [
      { label: 'Export rejection rate', value: '0%' },
      { label: 'Transit temp accuracy', value: '±0.5°C' },
      { label: 'New export markets', value: '4' },
    ],
    icon: Package,
    color: 'bg-green-50',
    accent: 'text-green-600',
  },
  {
    id: '5',
    client: 'KL Medical Centre',
    industry: 'Healthcare',
    title: 'Critical Supply Chain for Clinical Consumables',
    challenge:
      'Unpredictable lead times from existing suppliers caused last-minute procurement at premium prices for clinical operations.',
    solution:
      'Established a managed inventory program with guaranteed 48-hour emergency delivery and dedicated clinical procurement advisor.',
    results: [
      { label: 'Emergency orders', value: '−88%' },
      { label: 'Cost per item avg.', value: '−19%' },
      { label: 'Delivery SLA met', value: '99.6%' },
    ],
    icon: Clock,
    color: 'bg-red-50',
    accent: 'text-red-600',
  },
  {
    id: '6',
    client: 'PrimeStay Hotels',
    industry: 'Hospitality',
    title: 'End-to-End Housekeeping Supply Management for 12 Properties',
    challenge:
      'Housekeeping costs were 34% above industry benchmark due to wastage, theft, and untracked consumption across properties.',
    solution:
      'Implemented a RFID-tracked dispensing system for cleaning chemicals and linens, with monthly consumption analytics per property.',
    results: [
      { label: 'Housekeeping cost', value: '−27%' },
      { label: 'Chemical wastage', value: '−55%' },
      { label: 'Guest satisfaction', value: '+12pts' },
    ],
    icon: TrendingDown,
    color: 'bg-purple-50',
    accent: 'text-purple-600',
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="bg-secondary/30 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="size-3" />
              <span className="text-foreground">Projects</span>
            </div>
            <h1 className="text-4xl font-bold">Our Work</h1>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
              Real results for real businesses. See how go2go has helped companies across
              industries reduce costs, improve compliance, and streamline their supply chains.
            </p>
          </div>

          {/* Industry filter pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {['All Industries', 'Manufacturing', 'Retail', 'Construction', 'F&B', 'Healthcare', 'Hospitality'].map(
              (ind) => (
                <span
                  key={ind}
                  className="rounded-full border bg-background px-4 py-1.5 text-sm text-muted-foreground cursor-default">
                  {ind}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Projects grid */}
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
      <section className="py-16 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold">Let&apos;s Build Your Success Story</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Every business has unique procurement challenges. Tell us yours — we&apos;ll design a
            solution that delivers measurable results.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/quotation">Start a Conversation</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/catalog">View Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon
  return (
    <div className="flex flex-col rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className={`flex items-center gap-4 p-6 ${project.color}`}>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/80 shadow-sm">
          <Icon className={`size-6 ${project.accent}`} />
        </div>
        <div className="min-w-0">
          <Badge variant="outline" className="mb-1 text-xs">
            {project.industry}
          </Badge>
          <p className="text-xs font-semibold text-muted-foreground">{project.client}</p>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>

        <div className="mt-4 space-y-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Challenge
            </p>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              {project.challenge}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Solution
            </p>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 border-t pt-6">
          {project.results.map((result) => (
            <div key={result.label} className="text-center">
              <div className={`text-xl font-bold ${project.accent}`}>{result.value}</div>
              <div className="mt-0.5 text-xs text-muted-foreground leading-tight">{result.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
