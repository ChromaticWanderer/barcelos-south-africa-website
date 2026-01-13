"use client"

import { ScrollProgress } from "@/components/ui/scroll-progress"

/**
 * ScrollProgressWrapper Component
 *
 * Client-side wrapper for the ScrollProgress component.
 * This allows the ScrollProgress to be used in the server-side layout.
 */
export function ScrollProgressWrapper() {
  return <ScrollProgress />
}

export default ScrollProgressWrapper
