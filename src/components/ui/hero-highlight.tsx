"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * HeroHighlight Components - Aceternity UI inspired
 *
 * Creates an animated highlight effect for text, perfect for hero sections.
 * The highlight animates in with a gradient background.
 */

// HeroHighlight - Container with optional radial gradient background
interface HeroHighlightProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export function HeroHighlight({
  children,
  className,
  containerClassName,
}: HeroHighlightProps) {
  return (
    <div className={cn("relative", containerClassName)}>
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}

// Highlight - The animated highlight text wrapper
interface HighlightProps {
  children: React.ReactNode
  className?: string
}

export function Highlight({ children, className }: HighlightProps) {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block pb-1 px-1",
        "bg-gradient-to-r from-barcelos-red via-flame-yellow to-barcelos-red",
        "bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </motion.span>
  )
}

// Alternative highlight with background color instead of text gradient
export function HighlightBackground({ children, className }: HighlightProps) {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      whileInView={{ backgroundSize: "100% 100%" }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: "easeOut",
        delay: 0.3,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
      }}
      className={cn(
        "relative inline-block",
        "bg-gradient-to-r from-flame-yellow/30 to-flame-yellow/30",
        className
      )}
    >
      {children}
    </motion.span>
  )
}

export default HeroHighlight
