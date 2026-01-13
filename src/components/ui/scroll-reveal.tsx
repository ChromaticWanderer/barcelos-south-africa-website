"use client"

import { motion, useInView, useReducedMotion } from "motion/react"
import { useRef, ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  once?: boolean // Only animate once
}

/**
 * ScrollReveal Component
 *
 * Wraps content with scroll-triggered reveal animations.
 * Respects prefers-reduced-motion for accessibility.
 *
 * @example
 * <ScrollReveal direction="up" delay={0.2}>
 *   <h2>Section Title</h2>
 * </ScrollReveal>
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  once = true
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  // Direction-based initial offsets
  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {}
  }

  // If user prefers reduced motion, skip animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionOffset[direction] }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
