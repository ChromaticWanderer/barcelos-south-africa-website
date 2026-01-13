"use client"

import { useEffect, useState, useRef } from "react"
import { useInView, useReducedMotion } from "motion/react"

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  decimals?: number
}

/**
 * CountUp Component
 *
 * Animates a number from 0 to target value when scrolled into view.
 * Respects prefers-reduced-motion for accessibility.
 *
 * @example
 * <CountUp end={120} suffix="+" className="text-4xl font-bold" />
 * // Renders: 120+
 *
 * @example
 * <CountUp end={99.5} decimals={1} suffix="%" />
 * // Renders: 99.5%
 */
export function CountUp({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  className,
  decimals = 0
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const hasAnimated = useRef(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // If user prefers reduced motion, show final value immediately
    if (prefersReducedMotion) {
      setCount(end)
      return
    }

    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      let startTime: number | null = null

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

        // Use easeOutExpo for a satisfying deceleration
        const easeOutExpo = 1 - Math.pow(2, -10 * progress)
        const currentValue = easeOutExpo * end

        setCount(currentValue)

        if (progress < 1) {
          requestAnimationFrame(step)
        } else {
          setCount(end) // Ensure we end exactly at the target
        }
      }

      requestAnimationFrame(step)
    }
  }, [isInView, end, duration, prefersReducedMotion])

  // Format the display value
  const displayValue = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count)

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}

export default CountUp
