"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: 'full' | 'shield' | 'icon'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  priority?: boolean
}

/**
 * Barcelos Logo Component
 *
 * Official Barcelos rooster logo with multiple variants.
 * Uses Next.js Image for optimization.
 *
 * Variants:
 * - full: Full color logo with rooster + "Barcelos - Flame Grilled Chicken"
 * - shield: Shield/tag version on red background (for compact spaces)
 * - icon: Rooster only (for favicon-like usage)
 */
export function Logo({
  variant = 'full',
  size = 'md',
  className,
  priority = false
}: LogoProps) {
  const sizes = {
    xs: { width: 80, height: 32 },
    sm: { width: 120, height: 48 },
    md: { width: 160, height: 64 },
    lg: { width: 200, height: 80 },
    xl: { width: 280, height: 112 }
  }

  const shieldSizes = {
    xs: { width: 32, height: 40 },
    sm: { width: 48, height: 60 },
    md: { width: 64, height: 80 },
    lg: { width: 80, height: 100 },
    xl: { width: 100, height: 125 }
  }

  const logoSrc = {
    full: '/images/logos/barcelos-logo-full.png',
    shield: '/images/logos/barcelos-shield.png',
    icon: '/images/logos/barcelos-logo-full.png'
  }

  const dimensions = variant === 'shield' ? shieldSizes[size] : sizes[size]

  return (
    <Image
      src={logoSrc[variant]}
      alt="Barcelos - Flame Grilled Chicken"
      width={dimensions.width}
      height={dimensions.height}
      className={cn("object-contain", className)}
      priority={priority}
    />
  )
}

export default Logo
