'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Go2GoLogo } from '@/components/nav-header'

export default function SignupPage() {
  const [isLoading, setIsLoading] = React.useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left panel — branding */}
      <div className="hidden lg:flex flex-col justify-between bg-primary p-12 text-primary-foreground">
        <Go2GoLogo scrolled={false} />
        <div>
          <blockquote className="text-2xl font-semibold leading-snug">
            &ldquo;Quality you can see, craftsmanship you can feel — go2go has been our furniture
            partner for every hotel fit-out since 2018.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm opacity-70">— Rafidah Aziz, F&B Director, Majestic Hotel KL</p>
        </div>
        <p className="text-sm opacity-50">
          &copy; {new Date().getFullYear()} go2go Woodcraft
        </p>
      </div>

      {/* Right panel — form */}
      <div className="flex flex-col items-center justify-center px-6 py-16 sm:px-12">
        <div className="w-full max-w-sm">
          <div className="lg:hidden mb-8">
            <Go2GoLogo scrolled={true} />
          </div>

          <h1 className="text-2xl font-bold">Create your trade account</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Access exclusive trade pricing, custom order tracking, and dedicated support.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" placeholder="Ahmad" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" placeholder="Razali" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company name</Label>
              <Input id="company" placeholder="Arkitek Studio Sdn Bhd" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Work email</Label>
              <Input id="email" type="email" placeholder="ahmad@arkitek.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>

            <Button type="submit" className="w-full rounded-full" disabled={isLoading}>
              {isLoading ? 'Creating account…' : 'Create account'}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-foreground hover:underline">
              Log in
            </Link>
          </p>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            By creating an account you agree to our{' '}
            <Link href="#" className="underline underline-offset-4 hover:text-foreground">Terms</Link>
            {' '}and{' '}
            <Link href="#" className="underline underline-offset-4 hover:text-foreground">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
