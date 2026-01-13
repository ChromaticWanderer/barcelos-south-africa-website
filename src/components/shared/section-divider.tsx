"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { PatternOverlay } from "./pattern-overlay"

interface SectionDividerProps {
  variant?: 'pattern' | 'simple' | 'flame' | 'heritage'
  className?: string
}

/**
 * Section Divider with Portuguese Tile Pattern
 *
 * Visual separator between major sections, using the azulejo pattern
 * to maintain brand heritage throughout the page flow.
 */
export function SectionDivider({
  variant = 'pattern',
  className
}: SectionDividerProps) {
  if (variant === 'simple') {
    return (
      <div className={cn("w-full h-px bg-gradient-to-r from-transparent via-border to-transparent", className)} />
    )
  }

  if (variant === 'flame') {
    return (
      <div className={cn("w-full py-8 flex items-center justify-center", className)}>
        <div className="w-24 h-1 gradient-flame rounded-full" />
      </div>
    )
  }

  if (variant === 'heritage') {
    return (
      <div className={cn("w-full py-6 flex items-center justify-center gap-4", className)}>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-heritage-teal/30" />
        <div className="w-8 h-8 rounded-full bg-heritage-teal/10 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-heritage-teal/40" />
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-heritage-teal/30" />
      </div>
    )
  }

  // Pattern variant (default)
  return (
    <div className={cn("relative w-full h-16 overflow-hidden", className)}>
      <PatternOverlay variant="divider" opacity={0.06} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  )
}

export default SectionDivider
