'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Package, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Category = 'all' | 'dining' | 'living' | 'bedroom' | 'office' | 'outdoor' | 'materials'

interface Product {
  id: string
  name: string
  sku: string
  category: Exclude<Category, 'all'>
  description: string
  minOrder: number
  unit: string
  wood: string
  color: string
}

const products: Product[] = [
  // Dining
  {
    id: 'd001',
    name: 'Solid Teak Dining Table (6-Seater)',
    sku: 'DIN-TBL-001',
    category: 'dining',
    description: 'Rectangular solid teak dining table with hand-rubbed oil finish. 180×90cm. Seats 6 comfortably.',
    minOrder: 2,
    unit: 'pcs',
    wood: 'Teak',
    color: 'bg-amber-50',
  },
  {
    id: 'd002',
    name: 'White Oak Dining Chair',
    sku: 'DIN-CHR-002',
    category: 'dining',
    description: 'Solid white oak chair with mortise-and-tenon joinery. Available in natural, walnut, or ebony stain.',
    minOrder: 10,
    unit: 'pcs',
    wood: 'White Oak',
    color: 'bg-amber-50',
  },
  {
    id: 'd003',
    name: 'Reclaimed Wood Dining Bench',
    sku: 'DIN-BNC-003',
    category: 'dining',
    description: 'Rustic bench crafted from reclaimed timber. Each piece is unique. 160cm length, seats 3.',
    minOrder: 4,
    unit: 'pcs',
    wood: 'Reclaimed',
    color: 'bg-amber-50',
  },
  // Living Room
  {
    id: 'l001',
    name: 'Walnut Coffee Table',
    sku: 'LVR-COF-001',
    category: 'living',
    description: 'Live-edge walnut slab coffee table on hand-forged iron legs. 120×60cm. Each slab is one of a kind.',
    minOrder: 2,
    unit: 'pcs',
    wood: 'Walnut',
    color: 'bg-stone-50',
  },
  {
    id: 'l002',
    name: 'Oak Sideboard (3-Door)',
    sku: 'LVR-SDB-002',
    category: 'living',
    description: 'Solid oak sideboard with soft-close doors and adjustable shelving. 150×45×75cm.',
    minOrder: 2,
    unit: 'pcs',
    wood: 'Oak',
    color: 'bg-stone-50',
  },
  {
    id: 'l003',
    name: 'Pine Display Shelf (5-Tier)',
    sku: 'LVR-SHF-003',
    category: 'living',
    description: 'Freestanding solid pine shelving unit. 90×30×180cm. Ready-to-assemble, natural or painted finish.',
    minOrder: 5,
    unit: 'pcs',
    wood: 'Pine',
    color: 'bg-stone-50',
  },
  // Bedroom
  {
    id: 'b001',
    name: 'Mahogany Bed Frame (Queen)',
    sku: 'BED-FRM-001',
    category: 'bedroom',
    description: 'Solid mahogany platform bed with upholstered headboard option. Fits 160×200cm mattress.',
    minOrder: 2,
    unit: 'pcs',
    wood: 'Mahogany',
    color: 'bg-rose-50',
  },
  {
    id: 'b002',
    name: 'Teak Bedside Nightstand',
    sku: 'BED-NST-002',
    category: 'bedroom',
    description: 'Compact teak nightstand with single drawer and open shelf. 45×40×55cm.',
    minOrder: 4,
    unit: 'pcs',
    wood: 'Teak',
    color: 'bg-rose-50',
  },
  {
    id: 'b003',
    name: 'Solid Oak Wardrobe (3-Door)',
    sku: 'BED-WRD-003',
    category: 'bedroom',
    description: 'Freestanding solid oak wardrobe with hanging rail, shelves, and mirrored centre panel. 150×60×210cm.',
    minOrder: 1,
    unit: 'pcs',
    wood: 'Oak',
    color: 'bg-rose-50',
  },
  // Office
  {
    id: 'o001',
    name: 'Executive Oak Writing Desk',
    sku: 'OFF-DSK-001',
    category: 'office',
    description: 'Solid oak executive desk with cable management and two lockable drawers. 160×80cm.',
    minOrder: 2,
    unit: 'pcs',
    wood: 'Oak',
    color: 'bg-slate-50',
  },
  {
    id: 'o002',
    name: 'Walnut Bookshelf (5-Tier)',
    sku: 'OFF-SHF-002',
    category: 'office',
    description: 'Open walnut bookshelf with adjustable shelves. Ideal for offices and libraries. 100×30×200cm.',
    minOrder: 3,
    unit: 'pcs',
    wood: 'Walnut',
    color: 'bg-slate-50',
  },
  // Outdoor
  {
    id: 'out001',
    name: 'Teak Sun Lounger',
    sku: 'OUT-LNG-001',
    category: 'outdoor',
    description: 'Grade A teak reclining sun lounger. Weather-resistant, folds flat for storage. Hotel grade.',
    minOrder: 6,
    unit: 'pcs',
    wood: 'Grade A Teak',
    color: 'bg-green-50',
  },
  {
    id: 'out002',
    name: 'Teak Garden Dining Set (4-Seater)',
    sku: 'OUT-SET-002',
    category: 'outdoor',
    description: 'Round teak garden table (Ø120cm) with 4 stacking arm chairs. FSC-certified teak.',
    minOrder: 2,
    unit: 'sets',
    wood: 'Grade A Teak',
    color: 'bg-green-50',
  },
  // Raw Materials
  {
    id: 'r001',
    name: 'Solid Oak Timber Board',
    sku: 'RAW-OAK-001',
    category: 'materials',
    description: 'Kiln-dried solid oak boards. 25mm thickness, random widths 100–250mm, 1.8–3.6m lengths.',
    minOrder: 10,
    unit: 'm²',
    wood: 'Oak',
    color: 'bg-yellow-50',
  },
  {
    id: 'r002',
    name: 'Teak Wood Panel (Finger-Jointed)',
    sku: 'RAW-TEK-002',
    category: 'materials',
    description: 'Finger-jointed teak panels for cabinetry and joinery. 18mm × 1220×2440mm sheets.',
    minOrder: 20,
    unit: 'sheets',
    wood: 'Teak',
    color: 'bg-yellow-50',
  },
  {
    id: 'r003',
    name: 'Mahogany Plank',
    sku: 'RAW-MHG-003',
    category: 'materials',
    description: 'Honduran mahogany planks, air-dried. 50mm × 150mm, available in 2.4m and 3m lengths.',
    minOrder: 50,
    unit: 'linear m',
    wood: 'Mahogany',
    color: 'bg-yellow-50',
  },
]

const categories: { value: Category; label: string; count: number }[] = [
  { value: 'all', label: 'All Collections', count: products.length },
  { value: 'dining', label: 'Dining', count: products.filter((p) => p.category === 'dining').length },
  { value: 'living', label: 'Living Room', count: products.filter((p) => p.category === 'living').length },
  { value: 'bedroom', label: 'Bedroom', count: products.filter((p) => p.category === 'bedroom').length },
  { value: 'office', label: 'Office', count: products.filter((p) => p.category === 'office').length },
  { value: 'outdoor', label: 'Outdoor', count: products.filter((p) => p.category === 'outdoor').length },
  { value: 'materials', label: 'Raw Materials', count: products.filter((p) => p.category === 'materials').length },
]

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [search, setSearch] = useState('')

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory
    const matchSearch =
      search === '' ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase()) ||
      p.wood.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="bg-secondary/50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-foreground">Collections</span>
          </div>
          <h1 className="text-4xl font-bold">Our Collections</h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            Handcrafted timber furniture and raw materials for trade. All pieces available for
            wholesale ordering with custom sizing and finish options.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            {/* Sidebar */}
            <aside className="w-full lg:w-56 shrink-0">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Search pieces..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
              <nav className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={cn(
                      'w-full flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors text-left',
                      activeCategory === cat.value
                        ? 'bg-primary text-primary-foreground font-medium'
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                    )}>
                    <span>{cat.label}</span>
                    <span className={cn(
                      'rounded-full px-2 py-0.5 text-xs',
                      activeCategory === cat.value
                        ? 'bg-primary-foreground/20 text-primary-foreground'
                        : 'bg-secondary text-muted-foreground'
                    )}>{cat.count}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-8 rounded-xl border bg-secondary/50 p-4">
                <p className="text-sm font-semibold">Need a custom size?</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  All pieces can be made to measure. Contact us with your specifications.
                </p>
                <Button asChild size="sm" className="mt-3 w-full">
                  <Link href="/quotation">Custom Order</Link>
                </Button>
              </div>
            </aside>

            {/* Grid */}
            <div className="flex-1">
              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <Package className="size-12 text-muted-foreground/40" />
                  <p className="mt-4 text-muted-foreground">No pieces found. Try a different search.</p>
                </div>
              ) : (
                <>
                  <p className="mb-6 text-sm text-muted-foreground">
                    Showing {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
                  </p>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filtered.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col rounded-xl border bg-card shadow-sm hover:shadow-md transition-all overflow-hidden">
      <div className={cn('flex items-center justify-center h-40 relative', product.color)}>
        <Package className="size-14 text-foreground/10" />
        <span className="absolute top-3 right-3 rounded-full bg-white/80 px-2.5 py-0.5 text-xs font-medium text-foreground/70 backdrop-blur-sm">
          {product.wood}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-semibold leading-snug text-sm">{product.name}</h3>
        <p className="mt-0.5 text-xs text-muted-foreground font-mono">{product.sku}</p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 text-sm text-muted-foreground">
          Min. order: <span className="font-medium text-foreground">{product.minOrder} {product.unit}</span>
        </div>
        <Button asChild size="sm" className="mt-4 w-full">
          <Link href={`/quotation?product=${product.sku}`}>Request Quote</Link>
        </Button>
      </div>
    </div>
  )
}
