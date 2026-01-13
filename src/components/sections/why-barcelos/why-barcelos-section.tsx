"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { Flame, Clock, Award, Heart, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LampContainer } from "@/components/ui/lamp"

/**
 * WhyBarcelosSection Component
 *
 * Showcases the key differentiators of Barcelos:
 * - Flame-grilled preparation
 * - 24-hour marinade
 * - Quality ingredients
 * - Healthier choice
 *
 * Features the Lamp effect with animated gradient beams
 * and feature cards with hover effects.
 */

interface WhyBarcelosProps {
  className?: string
}

const features = [
  {
    icon: Flame,
    title: "FLAME-GRILLED CRAFT",
    description:
      "Traditional Portuguese technique that locks in moisture and creates that signature char you won't find anywhere else.",
    highlight: "NOT FRIED. FLAME-GRILLED.",
  },
  {
    icon: Clock,
    title: "24-HOUR MARINADE",
    description:
      "Every piece is marinated for a full 24 hours in our secret peri-peri blend for maximum flavour penetration.",
    highlight: "PATIENCE MAKES PERFECT.",
  },
  {
    icon: Award,
    title: "PREMIUM QUALITY",
    description:
      "We source only the finest ingredients. Farm-fresh chicken, centrally prepared for consistent quality at every location.",
    highlight: "QUALITY YOU CAN TASTE.",
  },
  {
    icon: Heart,
    title: "HEALTHIER CHOICE",
    description:
      "Flame-grilling means less oil and more flavour. A better-for-you option that doesn't compromise on taste.",
    highlight: "LESS OIL. MORE FLAVOUR.",
  },
]

export function WhyBarcelosSection({ className }: WhyBarcelosProps) {
  return (
    <section
      id="why-barcelos"
      className={cn("py-0", className)}
    >
      <LampContainer className="min-h-[800px] pt-20 pb-32">
        {/* Section Header - Inside Lamp */}
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-flame-yellow bg-flame-yellow/10 rounded-full uppercase tracking-wide">
            WHY CHOOSE US
          </span>
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl text-balance">
            WHY FLAME-GRILLED?
          </h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto text-pretty">
            Not fried. Not boiled. Grilled over real flames. Our traditional
            Portuguese flame-grilling technique creates a taste experience like
            no other.
          </p>
        </motion.div>

        {/* Features Grid - Inside Lamp */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto px-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6 + index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <Card
                variant="ghost"
                className={cn(
                  "group text-center p-6 rounded-2xl h-full",
                  "bg-charcoal-medium/50 hover:bg-charcoal-medium/70",
                  "border border-neutral-700/50 hover:border-flame-yellow/30",
                  "transition-all duration-300 hover:shadow-lg hover:shadow-barcelos-red/10",
                  "backdrop-blur-sm"
                )}
              >
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Icon Container */}
                  <div
                    className={cn(
                      "mx-auto mb-6 w-16 h-16 rounded-2xl",
                      "bg-gradient-to-br from-barcelos-red/20 to-flame-yellow/20",
                      "flex items-center justify-center",
                      "transition-transform duration-300 group-hover:scale-110"
                    )}
                  >
                    <feature.icon className="size-8 text-flame-yellow" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-xl text-white mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>

                  {/* Highlight - pushed to bottom */}
                  <span className="inline-block text-sm font-semibold text-flame-yellow mt-4">
                    {feature.highlight}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-flame-yellow/50 text-flame-yellow hover:bg-flame-yellow/10 hover:border-flame-yellow"
          >
            <Link href="/our-story">
              DISCOVER OUR STORY
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </motion.div>
      </LampContainer>
    </section>
  )
}

export default WhyBarcelosSection
