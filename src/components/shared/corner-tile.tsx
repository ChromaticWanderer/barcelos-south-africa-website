"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface CornerTileProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

/**
 * Decorative Corner Tile
 *
 * Portuguese-inspired corner decoration using the azulejo pattern.
 * Per brand guidelines, adds authentic visual interest to sections and cards.
 */
export function CornerTile({
  position = 'top-right',
  size = 'md',
  className
}: CornerTileProps) {
  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24 md:w-32 md:h-32',
    lg: 'w-32 h-32 md:w-48 md:h-48',
    xl: 'w-48 h-48 md:w-64 md:h-64'
  }

  const positions = {
    'top-left': 'top-0 left-0 rounded-br-3xl',
    'top-right': 'top-0 right-0 rounded-bl-3xl',
    'bottom-left': 'bottom-0 left-0 rounded-tr-3xl',
    'bottom-right': 'bottom-0 right-0 rounded-tl-3xl'
  }

  return (
    <div
      className={cn(
        "absolute overflow-hidden pointer-events-none",
        positions[position],
        sizes[size],
        className
      )}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/patterns/azulejo-pattern.png)',
          backgroundSize: '150px',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      {/* Gradient fade for smooth edge */}
      <div
        className={cn(
          "absolute inset-0",
          position === 'top-left' && "bg-gradient-to-br from-transparent via-transparent to-background",
          position === 'top-right' && "bg-gradient-to-bl from-transparent via-transparent to-background",
          position === 'bottom-left' && "bg-gradient-to-tr from-transparent via-transparent to-background",
          position === 'bottom-right' && "bg-gradient-to-tl from-transparent via-transparent to-background"
        )}
      />
    </div>
  )
}

export default CornerTile
