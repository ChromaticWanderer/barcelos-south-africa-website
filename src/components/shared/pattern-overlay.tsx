"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface PatternOverlayProps {
  variant?: 'hero' | 'section' | 'corner' | 'divider' | 'card'
  opacity?: number
  className?: string
}

/**
 * Portuguese Azulejo Pattern Overlay
 *
 * Applies the authentic Barcelos tile pattern as a background overlay.
 * Used throughout the site to maintain brand heritage presence.
 */
export function PatternOverlay({
  variant = 'hero',
  opacity,
  className
}: PatternOverlayProps) {
  const variantStyles = {
    hero: { defaultOpacity: 0.08, size: '300px' },
    section: { defaultOpacity: 0.05, size: '200px' },
    corner: { defaultOpacity: 0.12, size: '150px' },
    divider: { defaultOpacity: 0.06, size: '100px' },
    card: { defaultOpacity: 0.04, size: '150px' }
  }

  const { defaultOpacity, size } = variantStyles[variant]
  const finalOpacity = opacity ?? defaultOpacity

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none",
        className
      )}
      style={{
        backgroundImage: 'url(/images/patterns/azulejo-pattern.png)',
        backgroundRepeat: 'repeat',
        backgroundSize: size,
        opacity: finalOpacity,
        mixBlendMode: 'multiply'
      }}
      aria-hidden="true"
    />
  )
}

export default PatternOverlay
