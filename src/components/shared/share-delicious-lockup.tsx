"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ShareDeliciousLockupProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

/**
 * "Share Delicious" Brand Lockup
 *
 * Official Barcelos tagline lockup for promotional panels.
 * Per brand guidelines, should appear on key promotional sections.
 * Features "SHARE" in red, "DELICIOUS" in black, with heart-flame icon.
 */
export function ShareDeliciousLockup({
  size = 'md',
  className
}: ShareDeliciousLockupProps) {
  const sizes = {
    sm: { width: 160, height: 40 },
    md: { width: 240, height: 60 },
    lg: { width: 320, height: 80 },
    xl: { width: 400, height: 100 }
  }

  const dimensions = sizes[size]

  return (
    <Image
      src="/images/lockups/share-delicious.png"
      alt="Share Delicious"
      width={dimensions.width}
      height={dimensions.height}
      className={cn("object-contain", className)}
    />
  )
}

export default ShareDeliciousLockup
