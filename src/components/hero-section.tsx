'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { ChevronRight, Package, Truck, ShieldCheck, Clock } from 'lucide-react'

const partnerLogos = [
  { src: 'https://html.tailus.io/blocks/customers/nvidia.svg', alt: 'Nvidia', h: 'h-5' },
  { src: 'https://html.tailus.io/blocks/customers/github.svg', alt: 'GitHub', h: 'h-4' },
  { src: 'https://html.tailus.io/blocks/customers/nike.svg', alt: 'Nike', h: 'h-5' },
  { src: 'https://html.tailus.io/blocks/customers/openai.svg', alt: 'OpenAI', h: 'h-6' },
  { src: 'https://html.tailus.io/blocks/customers/laravel.svg', alt: 'Laravel', h: 'h-4' },
  { src: 'https://html.tailus.io/blocks/customers/lilly.svg', alt: 'Lilly', h: 'h-7' },
  { src: 'https://html.tailus.io/blocks/customers/lemonsqueezy.svg', alt: 'LemonSqueezy', h: 'h-5' },
  { src: 'https://html.tailus.io/blocks/customers/column.svg', alt: 'Column', h: 'h-4' },
]

const stats = [
  { value: '500+', label: 'Products' },
  { value: '200+', label: 'Business Clients' },
  { value: '15+', label: 'Years Experience' },
  { value: '50+', label: 'Supplier Partners' },
]

const features = [
  {
    icon: Clock,
    title: '24-Hour Quote Turnaround',
    description:
      'Submit your requirements and receive a detailed, competitive quote within one business day.',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description:
      'Reliable logistics network covering all major cities and industrial zones across the country.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    description:
      'All products sourced from ISO-certified suppliers with full documentation and warranty support.',
  },
  {
    icon: Package,
    title: 'Bulk & Custom Orders',
    description:
      'Flexible minimum order quantities with custom packaging and labelling options for your brand.',
  },
]

export function HeroSection() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative">
        <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-green-500" />
                Trusted by 200+ businesses nationwide
              </div>
              <h1 className="mt-6 max-w-2xl text-balance text-5xl font-bold md:text-6xl lg:mt-8 xl:text-7xl">
                B2B Supply Solutions You Can Count On
              </h1>
              <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground">
                Streamline your procurement with go2go — fast quotes, reliable delivery, and
                500+ quality products your business needs to grow.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Button asChild size="lg" className="h-12 rounded-full pl-5 pr-3 text-base">
                  <Link href="/catalog">
                    <span className="text-nowrap">Browse Products</span>
                    <ChevronRight className="ml-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                  <Link href="/quotation">
                    <span className="text-nowrap">Request a Quote</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Hero video / visual */}
          <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl border border-black/10 sm:aspect-video lg:rounded-[3rem] dark:border-white/5">
            {/*
              VIDEO SETUP:
              Resolution: 1920×1080 (Full HD) at 16:9 ratio — compress to H.264 MP4, target < 5 MB.
              Option A — Local file: Place your video at /public/videos/hero.mp4 and change src to "/videos/hero.mp4"
              Option B — CDN: Upload to ImageKit, Cloudflare Stream, or Bunny.net and paste the URL below.
            */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="size-full object-cover opacity-40 dark:opacity-30"
              src="/videos/hero.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Partners slider */}
      <section className="bg-background pb-2">
        <div className="group relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:pr-6">
              <p className="text-end text-sm text-muted-foreground">Trusted by leading companies</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                {partnerLogos.map((logo) => (
                  <div key={logo.alt} className="flex">
                    <img
                      className={`mx-auto ${logo.h} w-fit dark:invert`}
                      src={logo.src}
                      alt={logo.alt}
                      height="20"
                      width="auto"
                    />
                  </div>
                ))}
              </InfiniteSlider>
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background" />
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="solutions" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Businesses Choose go2go</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle the complexity of B2B procurement so you can focus on growing your
              business.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Simplifying B2B Procurement Since 2009
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                go2go was founded to solve the inefficiencies of traditional B2B supply chains.
                We connect businesses with quality-verified suppliers, streamline the quotation
                process, and ensure products arrive on time — every time.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our team of procurement specialists works closely with each client to understand
                their unique needs and deliver solutions that reduce cost, save time, and improve
                operational reliability.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild>
                  <Link href="/projects">See Our Work</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/quotation">Get Started</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'On-Time Delivery', value: '98%' },
                { label: 'Client Retention', value: '94%' },
                { label: 'Cost Savings Avg.', value: '22%' },
                { label: 'Quote Accuracy', value: '99%' },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border bg-card p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-primary">{metric.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Streamline Your Supply?</h2>
            <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">
              Join 200+ businesses already benefiting from go2go's procurement solutions. Get
              your first quote within 24 hours.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 h-12 rounded-full px-8">
                <Link href="/quotation">Request a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-primary-foreground hover:bg-white/10 h-12 rounded-full px-8">
                <Link href="/catalog">Browse Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
