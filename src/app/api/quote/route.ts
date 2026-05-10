import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: NextRequest) {
  const body = await request.json()

  const { error } = await supabase.from('quote_requests').insert([
    {
      company_name: body.companyName,
      reg_no: body.regNo || null,
      industry: body.industry,
      website: body.website || null,
      contact_name: body.contactName,
      job_title: body.jobTitle,
      email: body.email,
      phone: body.phone,
      whatsapp: body.whatsapp || null,
      product_category: body.productCategory,
      product_description: body.productDescription,
      quantity: body.quantity,
      unit: body.unit,
      specifications: body.specifications || null,
      delivery_address: body.deliveryAddress,
      required_by_date: body.requiredByDate,
      frequency: body.frequency,
      budget_range: body.budgetRange || null,
      additional_notes: body.additionalNotes || null,
      status: 'new',
    },
  ])

  if (error) {
    console.error('Supabase insert error:', error)
    return NextResponse.json({ error: 'Failed to submit quote request.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
