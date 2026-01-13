"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react"

import { cn } from "@/lib/utils"
import { primaryNavItems } from "@/lib/constants/navigation"

/**
 * FloatingNavbar Component
 *
 * A floating navigation bar that appears within the header area when scrolling.
 * Positioned between the logo and Order Now button.
 * Works across all pages with proper navigation.
 *
 * Features:
 * - Appears after scrolling past threshold
 * - Positions vertically centered in the sticky header
 * - Smooth slide-in animation
 * - Works on both home page (anchor links) and subpages (page navigation)
 * - Active page highlighting based on current route
 */

interface FloatingNavbarProps {
  className?: string
}

export function FloatingNavbar({ className }: FloatingNavbarProps) {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [visible, setVisible] = React.useState(false)
  const [headerHeight, setHeaderHeight] = React.useState(96) // Default h-24

  // Get header height on mount and resize
  React.useEffect(() => {
    const updateHeaderHeight = () => {
      // Header heights: h-24 (96px) mobile, sm:h-28 (112px), md:h-32 (128px), lg:h-36 (144px), xl:h-44 (176px)
      const width = window.innerWidth
      if (width >= 1280) setHeaderHeight(176) // xl
      else if (width >= 1024) setHeaderHeight(144) // lg
      else if (width >= 768) setHeaderHeight(128) // md
      else if (width >= 640) setHeaderHeight(112) // sm
      else setHeaderHeight(96) // mobile
    }

    updateHeaderHeight()
    window.addEventListener("resize", updateHeaderHeight)
    return () => window.removeEventListener("resize", updateHeaderHeight)
  }, [])

  // Track scroll position for visibility
  // Show navbar once user scrolls past threshold, stay visible until back at top
  useMotionValueEvent(scrollY, "change", (current) => {
    if (current > 100) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  // Check if a nav item is active based on current pathname
  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      // For anchor links on homepage
      return pathname === "/" && false // Don't highlight anchors in floating nav
    }
    // For page routes, check if pathname matches or starts with the href
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.nav
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          style={{ top: headerHeight / 2 }} // Vertically centered in header
          className={cn(
            "fixed left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60]", // Centered horizontally and vertically, above header's z-50
            "hidden md:block", // Hide on mobile, show on tablet and up
            className
          )}
        >
          {/* Warm cream/white pill with subtle shadow */}
          <div
            className={cn(
              "rounded-full overflow-hidden",
              "bg-white/95 backdrop-blur-md",
              "shadow-lg shadow-black/10",
              "border border-stone-200/50"
            )}
          >
            {/* Nav Items */}
            <div className="flex items-center gap-1 px-2 py-2">
              {primaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all cursor-pointer",
                    "text-charcoal-medium hover:text-barcelos-red hover:bg-barcelos-red/5",
                    isActive(item.href) &&
                      "text-barcelos-red bg-barcelos-red/10"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default FloatingNavbar
