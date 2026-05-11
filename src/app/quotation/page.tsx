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
      <div className="min-h-screen pt-36 flex items-center justify-center px-6 bg-[#F8F4EE]">
        <div className="max-w-md text-center">
          <CheckCircle2 className="size-14 text-[#C9A66B] mx-auto mb-6" />
          <h1 className="text-4xl font-light text-[#3E2C1C] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Quote Request Received
          </h1>
          <p className="text-sm text-[#3E2C1C]/60 leading-relaxed mb-2">
            Thank you for reaching out. Our team will review your requirements and
            send you a detailed quote within{' '}
            <span className="font-medium text-[#3E2C1C]">24 business hours</span>.
          </p>
          <p className="text-xs text-[#3E2C1C]/40 mb-10">A confirmation has been sent to your email.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/catalog" className="px-8 py-3 rounded-full bg-[#3E2C1C] text-white text-xs tracking-widest uppercase hover:bg-[#3E2C1C]/90 transition-colors">
              Continue Browsing
            </Link>
            <Link href="/" className="px-8 py-3 rounded-full border border-[#3E2C1C]/30 text-[#3E2C1C] text-xs tracking-widest uppercase hover:bg-[#3E2C1C]/5 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F4EE]">
      {/* Header */}
      <div className="bg-[#3E2C1C] text-white pt-36 pb-16 px-6">
        <div className="max-w-7xl mx-auto lg:px-6">
          <p className="text-[#C9A66B] text-[10px] tracking-[0.3em] uppercase mb-4">Trade Enquiries</p>
          <h1 className="text-5xl font-light leading-tight mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Request a Quote
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
            Fill in your requirements and we&apos;ll get back to you with a competitive, itemised
            quote within 24 hours.
          </p>
        </div>
      </div>
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          {/* Progress indicator */}
          <div className="mb-10 hidden md:flex items-center justify-between">
            {sections.map((section, i) => {
              const Icon = section.icon
              return (
                <React.Fragment key={section.id}>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="flex h-9 w-9 items-center justify-center bg-[#3E2C1C]/8 text-[#3E2C1C]">
                      <Icon className="size-4" />
                    </div>
                    <span className="text-[10px] text-[#3E2C1C]/50 text-center tracking-wide">{section.label}</span>
                  </div>
                  {i < sections.length - 1 && (
                    <div className="h-px flex-1 bg-[#3E2C1C]/10 mx-2 mt-[-14px]" />
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
            <div className="border border-[#3E2C1C]/10 bg-[#3E2C1C]/3 p-4 text-xs text-[#3E2C1C]/50 leading-relaxed">
              By submitting this form, you agree to be contacted by go2go regarding your quote request.
              Your information will be handled in accordance with our Privacy Policy and will not be shared with third parties.
            </div>

            {/* Submit */}
            {submitError && (
              <div className="border border-red-200 bg-red-50 p-4 text-sm text-red-600">
                {submitError}
              </div>
            )}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-end">
              <p className="text-xs text-[#3E2C1C]/40">
                We&apos;ll respond within <span className="font-medium text-[#3E2C1C]">24 hours</span>
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-3 bg-[#3E2C1C] text-white text-xs tracking-widest uppercase hover:bg-[#3E2C1C]/90 transition-colors disabled:opacity-50 min-w-48"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </button>
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
    <div className="border border-[#3E2C1C]/10 bg-white p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-7 w-7 items-center justify-center bg-[#3E2C1C] text-white text-xs font-light">
          {number}
        </div>
        <div className="flex items-center gap-2">
          <Icon className="size-4 text-[#3E2C1C]/40" />
          <h2
            className="text-xl font-light text-[#3E2C1C]"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            {title}
          </h2>
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
      <Label className="text-xs tracking-wide text-[#3E2C1C]/70">
        {label}
        {required && <span className="ml-1 text-red-400">*</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
