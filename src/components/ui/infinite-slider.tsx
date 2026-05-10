'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface InfiniteSliderProps {
  children: React.ReactNode
  speed?: number
  speedOnHover?: number
  gap?: number
  className?: string
  direction?: 'left' | 'right'
}

export function InfiniteSlider({
  children,
  speed = 40,
  speedOnHover,
  gap = 40,
  className,
  direction = 'left',
}: InfiniteSliderProps) {
  return (
    <div className={cn('overflow-hidden', className)}>
      <div
        className="flex w-max"
        style={{
          gap: `${gap}px`,
          animation: `infinite-scroll ${speed}s linear infinite`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
        onMouseEnter={(e) => {
          if (speedOnHover) {
            ;(e.currentTarget as HTMLDivElement).style.animationDuration = `${speedOnHover}s`
          }
        }}
        onMouseLeave={(e) => {
          if (speedOnHover) {
            ;(e.currentTarget as HTMLDivElement).style.animationDuration = `${speed}s`
          }
        }}>
        {children}
        {children}
      </div>
    </div>
  )
}
