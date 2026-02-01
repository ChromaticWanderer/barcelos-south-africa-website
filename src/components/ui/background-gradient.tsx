"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * BackgroundGradient Component
 *
 * A decorative wrapper that adds a subtle gradient border effect
 * around its children. Inspired by Aceternity UI patterns.
 */

interface BackgroundGradientProps {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}

export function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true,
}: BackgroundGradientProps) {
  return (
    <div className={cn("relative p-[2px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-2xl z-[1] opacity-60 group-hover:opacity-100 blur-sm transition duration-500",
          animate && "bg-gradient-to-r from-barcelos-red via-flame-yellow to-barcelos-green bg-[length:400%_400%] animate-gradient"
        )}
        style={{
          backgroundSize: "400% 400%",
        }}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-2xl z-[1]",
          animate && "bg-gradient-to-r from-barcelos-red via-flame-yellow to-barcelos-green bg-[length:400%_400%] animate-gradient"
        )}
        style={{
          backgroundSize: "400% 400%",
        }}
      />
      <div className={cn("relative z-10", className)}>
        {children}
      </div>
    </div>
  )
}

export default BackgroundGradient
