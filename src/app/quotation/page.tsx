'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ChevronRight, CheckCircle2, Building2, User, Package, Truck, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'

const schema = z.object({
  // Company
  companyName: z.string().min(2, 'Company name is required'),
  regNo: z.string().optional(),
  industry: z.string().min(1, 'Please select an industry'),
  website: z.string().url('Enter a valid URL').optional().or(z.literal('')),
  // Contact
  contactName: z.string().min(2, 'Contact name is required'),
  jobTitle: z.string().min(2, 'Job title is required'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(8, 'Enter a valid phone number'),
  whatsapp: z.string().optional(),
  // Product
  productCategory: z.string().min(1, 'Please select a category'),
  productDescription: z.string().min(10, 'Please describe the product(s) required'),
  quantity: z.string().min(1, 'Quantity is required'),
  unit: z.string().min(1, 'Unit is required'),
  specifications: z.string().optional(),
  // Delivery
  deliveryAddress: z.string().min(10, 'Delivery address is required'),
  requiredByDate: z.string().min(1, 'Required by date is required'),
  frequency: z.string().min(1, 'Please select delivery frequency'),
  // Extra
  budgetRange: z.string().optional(),
  additionalNotes: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const industries = [
  'Manufacturing',
  'Retail & Distribution',
  'Construction',
  'Food & Beverage',
  'Healthcare & Medical',
  'Hospitality',
  'Education',
  'Oil & Gas',
  'Logistics & Warehousing',
  'Government / GLC',
  'Other',
]

const productCategories = [
  'Packaging Solutions',
  'Industrial Supplies',
  'Safety Equipment',
  'Office & Admin',
  'Cleaning Solutions',
  'Custom / Other',
]

const frequencies = ['One-time order', 'Weekly', 'Bi-weekly', 'Monthly', 'Quarterly', 'Ad-hoc']

const budgetRanges = [
  'Under RM 5,000',
  'RM 5,000 – RM 20,000',
  'RM 20,000 – RM 50,000',
  'RM 50,000 – RM 100,000',
  'Above RM 100,000',
  'Prefer not to say',
]

const sections = [
  { id: 'company', label: 'Company Info', icon: Building2 },
  { id: 'contact', label: 'Contact Person', icon: User },
  { id: 'product', label: 'Product Requirements', icon: Package },
  { id: 'delivery', label: 'Delivery Info', icon: Truck },
  { id: 'notes', label: 'Additional Info', icon: MessageSquare },
]

export default function QuotationPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormValues) {
    setSubmitError('')
    const res = await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) {
      setSubmitError('Something went wrong. Please try again or email us directly.')
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="flex justify-center">
            <CheckCircle2 className="size-16 text-green-500" />
          </div>
          <h1 className="mt-6 text-3xl font-bold">Quote Request Received!</h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Thank you for reaching out. Our procurement team will review your requirements and
            send you a detailed quote within{' '}
            <span className="font-semibold text-foreground">24 business hours</span>.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Check your inbox — a confirmation has been sent to your email.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link href="/catalog">Continue Browsing</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

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
              <span className="text-foreground">Request a Quote</span>
            </div>
            <h1 className="text-4xl font-bold">Request a Quote</h1>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
              Fill in your requirements and we&apos;ll get back to you with a competitive, itemised
              quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          {/* Progress indicator */}
          <div className="mb-10 hidden md:flex items-center justify-between">
            {sections.map((section, i) => {
              const Icon = section.icon
              return (
                <React.Fragment key={section.id}>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-4" />
                    </div>
                    <span className="text-xs text-muted-foreground text-center">{section.label}</span>
                  </div>
                  {i < sections.length - 1 && (
                    <div className="h-px flex-1 bg-border mx-2 mt-[-14px]" />
                  )}
                </React.Fragment>
              )
            })}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            {/* Company Information */}
            <FormSection title="Company Information" icon={Building2} number={1}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Company Name" required error={errors.companyName?.message}>
                  <Input {...register('companyName')} placeholder="Acme Sdn. Bhd." />
                </Field>
                <Field label="Business Registration No." error={errors.regNo?.message}>
                  <Input {...register('regNo')} placeholder="e.g. 202301012345" />
                </Field>
                <Field label="Industry / Sector" required error={errors.industry?.message}>
                  <select
                    {...register('industry')}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Select industry...</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                  {errors.industry && (
                    <p className="text-xs text-destructive mt-1">{errors.industry.message}</p>
                  )}
                </Field>
                <Field label="Company Website" error={errors.website?.message}>
                  <Input {...register('website')} placeholder="https://example.com" type="url" />
                </Field>
              </div>
            </FormSection>

            {/* Contact Person */}
            <FormSection title="Contact Person" icon={User} number={2}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Full Name" required error={errors.contactName?.message}>
                  <Input {...register('contactName')} placeholder="Ahmad bin Abdullah" />
                </Field>
                <Field label="Job Title" required error={errors.jobTitle?.message}>
                  <Input {...register('jobTitle')} placeholder="Procurement Manager" />
                </Field>
                <Field label="Email Address" required error={errors.email?.message}>
                  <Input {...register('email')} placeholder="ahmad@company.com" type="email" />
                </Field>
                <Field label="Phone Number" required error={errors.phone?.message}>
                  <Input {...register('phone')} placeholder="+60 12-345 6789" type="tel" />
                </Field>
                <Field label="WhatsApp Number" error={errors.whatsapp?.message}>
                  <Input {...register('whatsapp')} placeholder="+60 12-345 6789 (if different)" type="tel" />
                </Field>
              </div>
            </FormSection>

            {/* Product Requirements */}
            <FormSection title="Product Requirements" icon={Package} number={3}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Product Category" required error={errors.productCategory?.message}>
                  <select
                    {...register('productCategory')}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                    <option value="">Select category...</option>
                    {productCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.productCategory && (
                    <p className="text-xs text-destructive mt-1">{errors.productCategory.message}</p>
                  )}
                </Field>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Quantity" required error={errors.quantity?.message}>
                    <Input {...register('quantity')} placeholder="e.g. 500" type="number" min="1" />
                  </Field>
                  <Field label="Unit" required error={errors.unit?.message}>
                    <Input {...register('unit')} placeholder="pcs / kg / m" />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field
                    label="Product Description"
                    required
                    error={errors.productDescription?.message}>
                    <Textarea
                      {...register('productDescription')}
                      placeholder="Describe the product(s) you need — include brand preferences, dimensions, material, colour, grade, or any other specifications..."
                      rows={4}
                    />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field label="Technical Specifications / Attachments Notes" error={errors.specifications?.message}>
                    <Textarea
                      {...register('specifications')}
                      placeholder="Any technical specs, standards (ISO, SIRIM, DOSH), certifications required, or drawing references..."
                      rows={3}
                    />
                  </Field>
                </div>
              </div>
            </FormSection>

            {/* Delivery Information */}
            <FormSection title="Delivery Information" icon={Truck} number={4}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Field label="Delivery Address" required error={errors.deliveryAddress?.message}>
                    <Textarea
                      {...register('deliveryAddress')}
                      placeholder="Full delivery address including postcode and state..."
                      rows={3}
                    />
                  </Field>
                </div>
                <Field label="Required By Date" required error={errors.requiredByDate?.message}>
                  <Input {...register('requiredByDate')} type="date" />
                </Field>
                <Field label="Order Frequency" required error={errors.frequency?.message}>
                  <select
                    {...register('frequency')}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                    <option value="">Select frequency...</option>
                    {frequencies.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                  {errors.frequency && (
                    <p className="text-xs text-destructive mt-1">{errors.frequency.message}</p>
                  )}
                </Field>
              </div>
            </FormSection>

            {/* Additional Info */}
            <FormSection title="Additional Information" icon={MessageSquare} number={5}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Estimated Budget Range" error={errors.budgetRange?.message}>
                  <select
                    {...register('budgetRange')}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                    <option value="">Select range (optional)...</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Additional Notes" error={errors.additionalNotes?.message}>
                    <Textarea
                      {...register('additionalNotes')}
                      placeholder="Anything else we should know — payment terms preference, packing requirements, preferred suppliers, etc..."
                      rows={4}
                    />
                  </Field>
                </div>
              </div>
            </FormSection>

            {/* Disclaimer */}
            <div className="rounded-lg border bg-secondary/40 p-4 text-sm text-muted-foreground">
              By submitting this form, you agree to be contacted by go2go B2B regarding your
              quote request. Your information will be handled in accordance with our Privacy
              Policy and will not be shared with third parties.
            </div>

            {/* Submit */}
            {submitError && (
              <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
                {submitError}
              </div>
            )}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-end">
              <p className="text-sm text-muted-foreground">
                We&apos;ll respond within <span className="font-semibold text-foreground">24 hours</span>
              </p>
              <Button type="submit" size="lg" disabled={isSubmitting} className="min-w-48">
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

function FormSection({
  title,
  icon: Icon,
  number,
  children,
}: {
  title: string
  icon: React.ElementType
  number: number
  children: React.ReactNode
}) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
          {number}
        </div>
        <div className="flex items-center gap-2">
          <Icon className="size-4 text-muted-foreground" />
          <h2 className="font-semibold text-lg">{title}</h2>
        </div>
      </div>
      {children}
    </div>
  )
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label>
        {label}
        {required && <span className="ml-1 text-destructive">*</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
