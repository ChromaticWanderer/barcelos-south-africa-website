"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

/**
 * BentoGrid Components - Magic UI inspired
 *
 * A flexible grid layout for showcasing features/products in
 * varying sizes with hover interactions.
 */

// BentoGrid - The grid container
interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  )
}

// BentoCard - Individual card within the grid
interface BentoCardProps {
  name: string
  className?: string
  background?: React.ReactNode
  Icon?: React.ElementType
  description?: string
  href?: string
  cta?: string
  children?: React.ReactNode
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  children,
}: BentoCardProps) {
  return (
    <div
      key={name}
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
        // Base styles
        "bg-white border border-neutral-200",
        // Hover effects
        "transform-gpu transition-all duration-300",
        "hover:shadow-xl hover:shadow-black/5",
        "hover:border-barcelos-red/20",
        className
      )}
    >
      {/* Background layer */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {background}
      </div>

      {/* Content layer */}
      <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-2">
        {Icon && (
          <Icon className="h-12 w-12 origin-left text-barcelos-red transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" />
        )}
        <h3 className="text-xl font-semibold text-charcoal font-display">
          {name}
        </h3>
        {description && (
          <p className="max-w-lg text-charcoal-medium">{description}</p>
        )}
      </div>

      {/* Custom children content */}
      {children}

      {/* CTA layer */}
      {href && cta && (
        <div
          className={cn(
            "pointer-events-none absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          )}
        >
          <Button
            variant="ghost"
            asChild
            size="sm"
            className="pointer-events-auto text-barcelos-red hover:text-barcelos-red hover:bg-barcelos-red/5"
          >
            <a href={href}>
              {cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      )}

      {/* Hover gradient overlay */}
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.02]" />
    </div>
  )
}

export default BentoGrid
