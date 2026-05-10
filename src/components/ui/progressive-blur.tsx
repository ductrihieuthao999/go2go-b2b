import React from 'react'
import { cn } from '@/lib/utils'

interface ProgressiveBlurProps {
  className?: string
  direction?: 'left' | 'right' | 'top' | 'bottom'
  blurIntensity?: number
}

export function ProgressiveBlur({ className }: ProgressiveBlurProps) {
  return <div className={cn('pointer-events-none', className)} />
}
