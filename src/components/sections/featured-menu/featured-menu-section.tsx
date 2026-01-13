"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, ChefHat, Flame } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button as MovingBorderButton } from "@/components/ui/moving-border"
import { LayoutGrid } from "@/components/ui/layout-grid"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { StaggerChildren, StaggerItem } from "@/components/ui/stagger-children"

/**
 * FeaturedMenuSection Component
 *
 * Showcases signature menu items in a bento grid layout.
 * Clean image-only display with interactive hover effects.
 */

interface FeaturedMenuSectionProps {
  className?: string
}

// Food cards for bento grid - images only, no text overlay
const foodCards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: "/images/food/quarter-chicken-chips.jpg",
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail: "/images/food/half-pack.jpg",
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail: "/images/food/chicken-burger-chips.jpg",
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail: "/images/food/family-pack.jpg",
  },
]

// Peri-peri heat levels matching actual sauce bottles
const heatLevels = [
  { name: "TANGY LEMON", heat: 0, description: "Zesty & Fresh" },
  { name: "MILD PERI", heat: 2, description: "Gentle Heat" },
  { name: "VERI PERI", heat: 4, description: "Medium Kick" },
  { name: "SUPA PERI", heat: 6, description: "Serious Heat" },
  { name: "FLAMING PERI", heat: 8.5, description: "Extreme Fire" },
]

export function FeaturedMenuSection({ className }: FeaturedMenuSectionProps) {
  return (
    <section className={cn("section-padding bg-neutral-50", className)}>
      <div className="container-wide">
        {/* Section Intro with ScrollReveal */}
        <ScrollReveal direction="up" duration={0.5}>
          <div className="mb-10 md:mb-12">
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="size-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                OUR MENU
              </span>
            </div>
            <p className="text-charcoal-medium max-w-xl">
              Discover what makes Barcelos special. Each dish is flame-grilled
              to perfection and served with our signature peri-peri flair.
            </p>
          </div>
        </ScrollReveal>

        {/* Peri-Peri Heat Levels Banner with Bottles */}
        <ScrollReveal direction="up" delay={0.1} duration={0.6}>
        <div className="mb-12 p-6 md:p-10 bg-black rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            {/* Left side - Text content */}
            <div className="lg:w-1/3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-barcelos-red/20 flex items-center justify-center shrink-0">
                  <Flame className="size-6 text-barcelos-red" />
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
                  SELECT YOUR PERI ZONE
                </h3>
              </div>
              <p className="text-neutral-300 text-base leading-relaxed">
                From zesty lemon to fiery heat — choose your perfect peri-peri intensity.
                Each sauce is crafted with authentic Portuguese spices.
              </p>
            </div>

            {/* Right side - Bottle image */}
            <div className="lg:w-2/3 flex justify-center">
              <img
                src="/images/sauces/peri-bottles.png"
                alt="Barcelos Peri-Peri Sauce Collection - Tangy Lemon, Mild Peri, Veri Peri, Supa Peri, and Flaming Peri"
                className="w-full max-w-2xl h-auto object-contain"
              />
            </div>
          </div>

          {/* Heat level indicators below with Stagger Animation */}
          <div className="mt-8 pt-6 border-t border-neutral-800">
            <StaggerChildren className="flex flex-wrap justify-center gap-4 md:gap-6" staggerDelay={0.08}>
              {heatLevels.map((level, index) => (
                <StaggerItem key={level.name}>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <div className="flex items-center gap-1">
                      {[...Array(Math.min(5, Math.ceil(level.heat / 2) + 1))].map((_, i) => (
                        <Flame
                          key={i}
                          className={cn(
                            "size-4",
                            index === 0 ? "text-lime-400" :
                            index === 1 ? "text-yellow-400" :
                            index === 2 ? "text-orange-400" :
                            index === 3 ? "text-red-500" :
                            "text-red-600"
                          )}
                        />
                      ))}
                    </div>
                    <span className={cn(
                      "text-xs font-bold tracking-wider",
                      index === 0 ? "text-lime-400" :
                      index === 1 ? "text-yellow-400" :
                      index === 2 ? "text-orange-400" :
                      index === 3 ? "text-red-500" :
                      "text-red-600"
                    )}>
                      {level.name}
                    </span>
                    <span className="text-neutral-400 text-xs">
                      {level.description}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
        </ScrollReveal>

        {/* Signature Favourites Header with ScrollReveal */}
        <ScrollReveal direction="up" delay={0.2} duration={0.5}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
            <h2 className="font-display font-bold text-charcoal text-3xl md:text-4xl">
              SIGNATURE FAVOURITES
            </h2>
            <MovingBorderButton
              as={Link}
              href="/menu"
              borderRadius="1.75rem"
              className="bg-white text-charcoal font-semibold px-6 py-3"
              containerClassName="shrink-0 self-start md:self-auto h-11"
            >
              VIEW FULL MENU
              <ArrowRight className="size-4 ml-2" />
            </MovingBorderButton>
          </div>
        </ScrollReveal>

        {/* Bento Grid - Images Only with ScrollReveal */}
        <ScrollReveal direction="up" delay={0.3} duration={0.6}>
          <div className="min-h-[800px] md:h-[700px]">
            <LayoutGrid cards={foodCards} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default FeaturedMenuSection
