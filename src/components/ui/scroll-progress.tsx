"use client"

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react"

/**
 * ScrollProgress Component
 *
 * Fixed progress bar at the top of the page that shows scroll progress.
 * Uses Barcelos brand gradient colors.
 * Respects prefers-reduced-motion for accessibility.
 *
 * @example
 * // Add to layout.tsx or page component
 * <ScrollProgress />
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const prefersReducedMotion = useReducedMotion()

  // Apply spring physics for smooth animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Hide if user prefers reduced motion
  if (prefersReducedMotion) {
    return null
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-barcelos-red via-flame-yellow to-barcelos-red origin-left z-50"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}

export default ScrollProgress
