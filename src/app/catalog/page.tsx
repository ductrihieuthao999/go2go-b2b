'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Search, Package, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Category = 'all' | 'packaging' | 'industrial' | 'safety' | 'office' | 'cleaning'

interface Product {
  id: string
  name: string
  sku: string
  category: Exclude<Category, 'all'>
  description: string
  minOrder: number
  unit: string
  color: string
}

const products: Product[] = [
  // Packaging
  {
    id: 'p001',
    name: 'Heavy-Duty Corrugated Box',
    sku: 'PKG-CRG-001',
    category: 'packaging',
    description: 'Double-wall corrugated boxes for secure shipping. Stackable up to 500kg.',
    minOrder: 100,
    unit: 'pcs',
    color: 'bg-amber-50',
  },
  {
    id: 'p002',
    name: 'Industrial Stretch Wrap',
    sku: 'PKG-STW-002',
    category: 'packaging',
    description: '20-micron pre-stretched pallet wrap. High cling, UV-resistant.',
    minOrder: 50,
    unit: 'rolls',
    color: 'bg-amber-50',
  },
  {
    id: 'p003',
    name: 'Bubble Wrap Roll',
    sku: 'PKG-BWR-003',
    category: 'packaging',
    description: '10mm bubble roll for fragile item protection. 50m per roll.',
    minOrder: 20,
    unit: 'rolls',
    color: 'bg-amber-50',
  },
  {
    id: 'p004',
    name: 'Packing Tape (Brown)',
    sku: 'PKG-TAP-004',
    category: 'packaging',
    description: 'Heavy-duty acrylic adhesive tape. 48mm × 100m per roll.',
    minOrder: 200,
    unit: 'rolls',
    color: 'bg-amber-50',
  },
  // Industrial
  {
    id: 'i001',
    name: 'Stainless Hex Bolt Set (M8)',
    sku: 'IND-BLT-001',
    category: 'industrial',
    description: 'Grade 316 stainless steel hex bolts, nuts, and washers. Full pack.',
    minOrder: 500,
    unit: 'sets',
    color: 'bg-slate-50',
  },
  {
    id: 'i002',
    name: 'Multi-Purpose Lubricant',
    sku: 'IND-LUB-002',
    category: 'industrial',
    description: 'Penetrating oil for machinery maintenance. 500ml spray can.',
    minOrder: 48,
    unit: 'cans',
    color: 'bg-slate-50',
  },
  {
    id: 'i003',
    name: 'Cutting Disc (4.5")',
    sku: 'IND-CUT-003',
    category: 'industrial',
    description: 'Thin cut-off wheel for metal and stainless. 115mm × 1.0mm.',
    minOrder: 100,
    unit: 'pcs',
    color: 'bg-slate-50',
  },
  {
    id: 'i004',
    name: 'Heavy-Duty Work Gloves',
    sku: 'IND-GLV-004',
    category: 'industrial',
    description: 'Leather palm with knit wrist. Cut-resistant level 3.',
    minOrder: 50,
    unit: 'pairs',
    color: 'bg-slate-50',
  },
  // Safety
  {
    id: 's001',
    name: 'Safety Helmet (HDPE)',
    sku: 'SAF-HLM-001',
    category: 'safety',
    description: 'SIRIM-certified Class E hard hat. Adjustable ratchet suspension.',
    minOrder: 20,
    unit: 'pcs',
    color: 'bg-yellow-50',
  },
  {
    id: 's002',
    name: 'Hi-Vis Safety Vest',
    sku: 'SAF-VST-002',
    category: 'safety',
    description: 'EN ISO 20471 Class 2 reflective vest. Orange/yellow, sizes S-3XL.',
    minOrder: 30,
    unit: 'pcs',
    color: 'bg-yellow-50',
  },
  {
    id: 's003',
    name: 'ABC Dry Powder Extinguisher 6kg',
    sku: 'SAF-EXT-003',
    category: 'safety',
    description: 'Multi-purpose fire extinguisher. BOMBA-compliant with wall bracket.',
    minOrder: 5,
    unit: 'units',
    color: 'bg-yellow-50',
  },
  {
    id: 's004',
    name: 'First Aid Kit (50-Person)',
    sku: 'SAF-FAK-004',
    category: 'safety',
    description: 'Factory-grade kit. 150+ items, DOSH compliant. Wall-mounted cabinet.',
    minOrder: 2,
    unit: 'kits',
    color: 'bg-yellow-50',
  },
  // Office
  {
    id: 'o001',
    name: 'A4 Copier Paper 80gsm',
    sku: 'OFF-PAP-001',
    category: 'office',
    description: 'Premium white copy paper. 500 sheets/ream, 5 reams/box. FSC certified.',
    minOrder: 10,
    unit: 'boxes',
    color: 'bg-blue-50',
  },
  {
    id: 'o002',
    name: 'Thermal Receipt Roll 80mm',
    sku: 'OFF-TRR-002',
    category: 'office',
    description: '80mm × 80m thermal paper. BPA-free. Compatible with major POS printers.',
    minOrder: 100,
    unit: 'rolls',
    color: 'bg-blue-50',
  },
  {
    id: 'o003',
    name: 'Ring Binder A4 (4-ring)',
    sku: 'OFF-BND-003',
    category: 'office',
    description: '4D-ring mechanism, 40mm capacity. Polypropylene cover, assorted colours.',
    minOrder: 50,
    unit: 'pcs',
    color: 'bg-blue-50',
  },
  // Cleaning
  {
    id: 'c001',
    name: 'Industrial Degreaser 5L',
    sku: 'CLN-DGR-001',
    category: 'cleaning',
    description: 'Heavy-duty solvent degreaser for machinery and floors. Biodegradable.',
    minOrder: 20,
    unit: 'bottles',
    color: 'bg-green-50',
  },
  {
    id: 'c002',
    name: 'Microfibre Mop Set',
    sku: 'CLN-MOP-002',
    category: 'cleaning',
    description: '60cm microfibre flat mop with telescopic handle and 2 replacement pads.',
    minOrder: 10,
    unit: 'sets',
    color: 'bg-green-50',
  },
  {
    id: 'c003',
    name: 'Hand Sanitiser 5L Refill',
    sku: 'CLN-SAN-003',
    category: 'cleaning',
    description: '70% ethanol hand sanitiser. MOH-registered. For dispenser refill.',
    minOrder: 24,
    unit: 'bottles',
    color: 'bg-green-50',
  },
]

const categories: { value: Category; label: string; count: number }[] = [
  { value: 'all', label: 'All Products', count: products.length },
  { value: 'packaging', label: 'Packaging', count: products.filter((p) => p.category === 'packaging').length },
  { value: 'industrial', label: 'Industrial', count: products.filter((p) => p.category === 'industrial').length },
  { value: 'safety', label: 'Safety', count: products.filter((p) => p.category === 'safety').length },
  { value: 'office', label: 'Office & Admin', count: products.filter((p) => p.category === 'office').length },
  { value: 'cleaning', label: 'Cleaning', count: products.filter((p) => p.category === 'cleaning').length },
]

const categoryColors: Record<Exclude<Category, 'all'>, string> = {
  packaging: 'bg-amber-100 text-amber-800',
  industrial: 'bg-slate-100 text-slate-800',
  safety: 'bg-yellow-100 text-yellow-800',
  office: 'bg-blue-100 text-blue-800',
  cleaning: 'bg-green-100 text-green-800',
}

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [search, setSearch] = useState('')

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory
    const matchSearch =
      search === '' ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

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
              <span className="text-foreground">Product Catalog</span>
            </div>
            <h1 className="text-4xl font-bold">Product Catalog</h1>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
              Browse our 500+ products across packaging, industrial, safety, office, and cleaning
              categories. Add items to your quote request.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Search & Filter */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            {/* Category sidebar */}
            <aside className="w-full lg:w-56 shrink-0">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
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
                    <span
                      className={cn(
                        'rounded-full px-2 py-0.5 text-xs',
                        activeCategory === cat.value
                          ? 'bg-primary-foreground/20 text-primary-foreground'
                          : 'bg-secondary text-muted-foreground'
                      )}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </nav>
            </aside>

            {/* Product grid */}
            <div className="flex-1">
              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <Package className="size-12 text-muted-foreground/40" />
                  <p className="mt-4 text-muted-foreground">No products found. Try a different search.</p>
                </div>
              ) : (
                <>
                  <p className="mb-6 text-sm text-muted-foreground">
                    Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
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

          {/* CTA */}
          <div className="mt-16 rounded-2xl border bg-secondary/30 p-8 text-center">
            <h3 className="text-xl font-semibold">Can&apos;t find what you need?</h3>
            <p className="mt-2 text-muted-foreground">
              Our procurement team can source virtually any B2B product. Send us your
              requirements and we&apos;ll get back to you within 24 hours.
            </p>
            <Button asChild className="mt-6">
              <Link href="/quotation">Submit Custom Request</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className={cn('flex items-center justify-center h-36', product.color)}>
        <Package className="size-14 text-foreground/20" />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-snug">{product.name}</h3>
          <span
            className={cn(
              'shrink-0 rounded-full px-2 py-0.5 text-xs font-medium capitalize',
              categoryColors[product.category]
            )}>
            {product.category}
          </span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground font-mono">{product.sku}</p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Min. order:{' '}
            <span className="font-medium text-foreground">
              {product.minOrder} {product.unit}
            </span>
          </span>
        </div>
        <Button asChild size="sm" className="mt-4 w-full">
          <Link href={`/quotation?product=${product.sku}`}>Add to Quote</Link>
        </Button>
      </div>
    </div>
  )
}
