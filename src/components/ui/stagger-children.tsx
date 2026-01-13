"use client"

import { motion, useInView, useReducedMotion } from "motion/react"
import { useRef, ReactNode } from "react"

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

/**
 * StaggerChildren Component
 *
 * Container that staggers the animation of its children as they scroll into view.
 * Use with StaggerItem components for coordinated reveal effects.
 * Respects prefers-reduced-motion for accessibility.
 *
 * @example
 * <StaggerChildren className="grid grid-cols-3 gap-4">
 *   {items.map(item => (
 *     <StaggerItem key={item.id}>
 *       <Card>{item.content}</Card>
 *     </StaggerItem>
 *   ))}
 * </StaggerChildren>
 */
export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
  once = true
}: StaggerChildrenProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-50px" })
  const prefersReducedMotion = useReducedMotion()

  // If user prefers reduced motion, render without animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
}

/**
 * StaggerItem Component
 *
 * Child component to use inside StaggerChildren.
 * Each StaggerItem will animate in sequence based on parent's staggerDelay.
 */
export function StaggerItem({
  children,
  className,
  direction = 'up'
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion()

  // Direction-based initial position
  const directionVariants = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 }
  }

  // If user prefers reduced motion, render without animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...directionVariants[direction] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default StaggerChildren
