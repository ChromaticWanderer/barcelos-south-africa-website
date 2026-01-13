"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * AuroraBackground Component
 *
 * A CSS-based aurora gradient effect for the hero section.
 * Uses CSS animations for smooth color transitions that evoke
 * the warmth of flame-grilling without being heavy on performance.
 *
 * Progressive enhancement: Degrades gracefully to a subtle gradient
 * when prefers-reduced-motion is enabled.
 */

interface AuroraBackgroundProps {
  className?: string
  children?: React.ReactNode
  /**
   * Whether to show the aurora animation
   * Set to false for a static gradient fallback
   */
  animate?: boolean
}

export function AuroraBackground({
  className,
  children,
  animate = true,
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-neutral-50",
        className
      )}
    >
      {/* Base gradient layer */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(358 84% 52% / 0.15), transparent)",
        }}
      />

      {/* Aurora layers */}
      <div
        className={cn(
          "absolute inset-0 overflow-hidden",
          animate && "aurora-animate"
        )}
        aria-hidden="true"
      >
        {/* Primary aurora blob - Barcelos Red */}
        <div
          className={cn(
            "aurora-blob aurora-blob-1",
            !animate && "opacity-20"
          )}
          style={{
            background:
              "radial-gradient(circle at center, hsl(358 84% 52% / 0.4) 0%, transparent 50%)",
          }}
        />

        {/* Secondary aurora blob - Flame Yellow */}
        <div
          className={cn(
            "aurora-blob aurora-blob-2",
            !animate && "opacity-15"
          )}
          style={{
            background:
              "radial-gradient(circle at center, hsl(45 93% 58% / 0.35) 0%, transparent 50%)",
          }}
        />

        {/* Tertiary aurora blob - Flame Orange */}
        <div
          className={cn(
            "aurora-blob aurora-blob-3",
            !animate && "opacity-10"
          )}
          style={{
            background:
              "radial-gradient(circle at center, hsl(30 100% 50% / 0.3) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default AuroraBackground
