'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Search, Package } from 'lucide-react'
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
  { id: 'd001', name: 'Solid Teak Dining Table (6-Seater)', sku: 'DIN-TBL-001', category: 'dining', description: 'Rectangular solid teak dining table with hand-rubbed oil finish. 180×90cm. Seats 6 comfortably.', minOrder: 2, unit: 'pcs', wood: 'Teak', color: '' },
  { id: 'd002', name: 'White Oak Dining Chair', sku: 'DIN-CHR-002', category: 'dining', description: 'Solid white oak chair with mortise-and-tenon joinery. Available in natural, walnut, or ebony stain.', minOrder: 10, unit: 'pcs', wood: 'White Oak', color: '' },
  { id: 'd003', name: 'Reclaimed Wood Dining Bench', sku: 'DIN-BNC-003', category: 'dining', description: 'Rustic bench crafted from reclaimed timber. Each piece is unique. 160cm length, seats 3.', minOrder: 4, unit: 'pcs', wood: 'Reclaimed', color: '' },
  { id: 'l001', name: 'Walnut Coffee Table', sku: 'LVR-COF-001', category: 'living', description: 'Live-edge walnut slab coffee table on hand-forged iron legs. 120×60cm. Each slab is one of a kind.', minOrder: 2, unit: 'pcs', wood: 'Walnut', color: '' },
  { id: 'l002', name: 'Oak Sideboard (3-Door)', sku: 'LVR-SDB-002', category: 'living', description: 'Solid oak sideboard with soft-close doors and adjustable shelving. 150×45×75cm.', minOrder: 2, unit: 'pcs', wood: 'Oak', color: '' },
  { id: 'l003', name: 'Pine Display Shelf (5-Tier)', sku: 'LVR-SHF-003', category: 'living', description: 'Freestanding solid pine shelving unit. 90×30×180cm. Ready-to-assemble, natural or painted finish.', minOrder: 5, unit: 'pcs', wood: 'Pine', color: '' },
  { id: 'b001', name: 'Mahogany Bed Frame (Queen)', sku: 'BED-FRM-001', category: 'bedroom', description: 'Solid mahogany platform bed with upholstered headboard option. Fits 160×200cm mattress.', minOrder: 2, unit: 'pcs', wood: 'Mahogany', color: '' },
  { id: 'b002', name: 'Teak Bedside Nightstand', sku: 'BED-NST-002', category: 'bedroom', description: 'Compact teak nightstand with single drawer and open shelf. 45×40×55cm.', minOrder: 4, unit: 'pcs', wood: 'Teak', color: '' },
  { id: 'b003', name: 'Solid Oak Wardrobe (3-Door)', sku: 'BED-WRD-003', category: 'bedroom', description: 'Freestanding solid oak wardrobe with hanging rail, shelves, and mirrored centre panel. 150×60×210cm.', minOrder: 1, unit: 'pcs', wood: 'Oak', color: '' },
  { id: 'o001', name: 'Executive Oak Writing Desk', sku: 'OFF-DSK-001', category: 'office', description: 'Solid oak executive desk with cable management and two lockable drawers. 160×80cm.', minOrder: 2, unit: 'pcs', wood: 'Oak', color: '' },
  { id: 'o002', name: 'Walnut Bookshelf (5-Tier)', sku: 'OFF-SHF-002', category: 'office', description: 'Open walnut bookshelf with adjustable shelves. Ideal for offices and libraries. 100×30×200cm.', minOrder: 3, unit: 'pcs', wood: 'Walnut', color: '' },
  { id: 'out001', name: 'Teak Sun Lounger', sku: 'OUT-LNG-001', category: 'outdoor', description: 'Grade A teak reclining sun lounger. Weather-resistant, folds flat for storage. Hotel grade.', minOrder: 6, unit: 'pcs', wood: 'Grade A Teak', color: '' },
  { id: 'out002', name: 'Teak Garden Dining Set (4-Seater)', sku: 'OUT-SET-002', category: 'outdoor', description: 'Round teak garden table (Ø120cm) with 4 stacking arm chairs. FSC-certified teak.', minOrder: 2, unit: 'sets', wood: 'Grade A Teak', color: '' },
  { id: 'r001', name: 'Solid Oak Timber Board', sku: 'RAW-OAK-001', category: 'materials', description: 'Kiln-dried solid oak boards. 25mm thickness, random widths 100–250mm, 1.8–3.6m lengths.', minOrder: 10, unit: 'm²', wood: 'Oak', color: '' },
  { id: 'r002', name: 'Teak Wood Panel (Finger-Jointed)', sku: 'RAW-TEK-002', category: 'materials', description: 'Finger-jointed teak panels for cabinetry and joinery. 18mm × 1220×2440mm sheets.', minOrder: 20, unit: 'sheets', wood: 'Teak', color: '' },
  { id: 'r003', name: 'Mahogany Plank', sku: 'RAW-MHG-003', category: 'materials', description: 'Honduran mahogany planks, air-dried. 50mm × 150mm, available in 2.4m and 3m lengths.', minOrder: 50, unit: 'linear m', wood: 'Mahogany', color: '' },
]

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All Collections' },
  { value: 'dining', label: 'Dining' },
  { value: 'living', label: 'Living Room' },
  { value: 'bedroom', label: 'Bedroom' },
  { value: 'office', label: 'Office' },
  { value: 'outdoor', label: 'Outdoor' },
  { value: 'materials', label: 'Raw Materials' },
]

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [search, setSearch] = useState('')

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory
    const matchSearch = search === '' || p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase()) || p.wood.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#3E2C1C] text-white pt-36 pb-16 px-6">
        <div className="max-w-7xl mx-auto lg:px-6">
          <p className="text-[#C9A66B] text-[10px] tracking-[0.3em] uppercase mb-4">Trade Catalogue</p>
          <h1
            className="text-5xl font-light leading-tight mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Our Collections
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
            Handcrafted timber furniture and raw materials for trade. All pieces available for
            wholesale ordering with custom sizing and finish options.
          </p>
        </div>
      </div>

      <section className="py-12 bg-[#F8F4EE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            {/* Sidebar */}
            <aside className="w-full lg:w-52 shrink-0">
              <div className="relative mb-5">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-[#3E2C1C]/40" />
                <Input
                  placeholder="Search pieces..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 bg-white border-[#3E2C1C]/20 text-sm text-[#3E2C1C] placeholder:text-[#3E2C1C]/30 focus-visible:ring-[#C9A66B]"
                />
              </div>
              <nav className="space-y-0.5">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={cn(
                      'w-full text-left px-3 py-2.5 text-xs tracking-wide transition-colors rounded-sm',
                      activeCategory === cat.value
                        ? 'bg-[#3E2C1C] text-white'
                        : 'text-[#3E2C1C]/60 hover:text-[#3E2C1C] hover:bg-[#3E2C1C]/5'
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </nav>

              <div className="mt-8 border border-[#3E2C1C]/10 p-5 bg-white">
                <p className="text-sm font-light text-[#3E2C1C] mb-1" style={{ fontFamily: 'var(--font-cormorant)' }}>Need a custom size?</p>
                <p className="text-xs text-[#3E2C1C]/50 leading-relaxed mb-4">All pieces can be made to measure. Contact us with your specifications.</p>
                <Link href="/quotation" className="block text-center text-xs tracking-widest uppercase py-2 bg-[#3E2C1C] text-white hover:bg-[#3E2C1C]/90 transition-colors">
                  Custom Order
                </Link>
              </div>
            </aside>

            {/* Grid */}
            <div className="flex-1">
              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <Package className="size-12 text-[#3E2C1C]/20" />
                  <p className="mt-4 text-sm text-[#3E2C1C]/40">No pieces found. Try a different search.</p>
                </div>
              ) : (
                <>
                  <p className="mb-6 text-xs text-[#3E2C1C]/40 tracking-wide">
                    Showing {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
                  </p>
                  <div className="grid grid-cols-1 gap-px bg-[#3E2C1C]/10 sm:grid-cols-2 xl:grid-cols-3">
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
    <div className="flex flex-col bg-white group hover:shadow-md transition-shadow">
      <div className="flex items-center justify-center h-44 bg-[#F8F4EE] relative overflow-hidden">
        <Package className="size-14 text-[#3E2C1C]/8 group-hover:scale-110 transition-transform duration-500" />
        <span className="absolute top-3 right-3 text-[9px] font-medium tracking-[0.2em] uppercase text-[#3E2C1C]/50 bg-white/80 px-2 py-0.5">
          {product.wood}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="text-lg font-light text-[#3E2C1C] leading-snug mb-0.5"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          {product.name}
        </h3>
        <p className="text-[10px] text-[#3E2C1C]/35 font-mono mb-3">{product.sku}</p>
        <p className="text-xs text-[#3E2C1C]/60 leading-relaxed line-clamp-2 mb-4">{product.description}</p>
        <p className="text-xs text-[#3E2C1C]/50 mb-4">
          Min. order: <span className="font-medium text-[#3E2C1C]">{product.minOrder} {product.unit}</span>
        </p>
        <Link
          href={`/quotation?product=${product.sku}`}
          className="block text-center text-xs tracking-widest uppercase py-2.5 border border-[#3E2C1C]/20 text-[#3E2C1C] hover:bg-[#3E2C1C] hover:text-white transition-all duration-200"
        >
          Request Quote
        </Link>
      </div>
    </div>
  )
}
