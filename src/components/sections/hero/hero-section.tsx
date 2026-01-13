"use client"

import * as React from "react"
import { motion } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { brandMessages } from "@/lib/constants/site"
import { Highlight } from "@/components/ui/hero-highlight"
import { Button as MovingBorderButton } from "@/components/ui/moving-border"

/**
 * HeroSection Component
 *
 * Full-screen immersive hero with background food imagery.
 * Aceternity-inspired design with:
 * - Full background image with gradient fade
 * - Centered content with motion animations
 * - Heritage messaging and CTAs
 * - Scroll indicator
 */

interface HeroSectionProps {
  className?: string
  headline?: string
  subheadline?: string
  gradientFade?: boolean
}

export function HeroSection({
  className,
  headline = brandMessages.hero.headline,
  subheadline = brandMessages.hero.subheadline,
  gradientFade = true,
}: HeroSectionProps) {
  const scrollToContent = () => {
    const nextSection = document.getElementById("why-barcelos")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-20",
        className
      )}
    >
      {/* Dark base layer */}
      <div className="absolute inset-0 h-full w-full bg-charcoal" />

      {/* Background Image with Motion */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.5] }}
        transition={{ duration: 2 }}
        className="absolute inset-0 h-full w-full"
      >
        <Image
          src="/images/food/quarter-chicken-chips.jpg"
          alt="Barcelos flame-grilled chicken"
          fill
          priority
          sizes="100vw"
          className={cn(
            "pointer-events-none object-cover select-none",
            gradientFade &&
              "[mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"
          )}
        />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 h-60 w-full bg-gradient-to-t from-charcoal to-transparent" />
        {/* Top gradient fade */}
        <div className="absolute top-0 h-40 w-full bg-gradient-to-b from-charcoal/80 to-transparent" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Share Delicious Lockup */}
        <Image
          src="/images/lockups/share-delicious.png"
          alt="Share Delicious"
          width={400}
          height={100}
          className="mb-6 object-contain w-[180px] sm:w-[220px] md:w-[280px] lg:w-[340px] xl:w-[400px] h-auto"
        />

        {/* Headline */}
        <h1 className="max-w-5xl text-center text-3xl font-bold tracking-tight text-balance md:text-5xl lg:text-7xl md:leading-tight font-display">
          <span className="bg-gradient-to-b from-neutral-200 via-white to-white bg-clip-text text-transparent">
            AUTHENTIC AFRO-PORTUGUESE
          </span>{" "}
          <Highlight>FLAME GRILLED CHICKEN</Highlight>
        </h1>

        {/* Subheadline */}
        <p className="mt-4 max-w-2xl text-center text-neutral-300 md:mt-6 md:text-xl text-pretty">
          {subheadline}
        </p>

        {/* USP Pills */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["FLAME-GRILLED", "24-HOUR MARINADE", "PERI-PERI PERFECTION"].map(
            (usp) => (
              <span
                key={usp}
                className="inline-flex items-center px-3 py-1.5 text-xs font-semibold tracking-wide uppercase text-white/90 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                {usp}
              </span>
            )
          )}
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <MovingBorderButton
            as={Link}
            href="/menu"
            borderRadius="1.75rem"
            className="bg-primary/90 text-white font-semibold px-8 py-3"
            containerClassName="min-w-[180px] h-12"
          >
            EXPLORE MENU
          </MovingBorderButton>
          <HeroButton as={Link} href="/locations" variant="secondary">
            FIND A LOCATION
            <MapPin className="size-4 ml-2" />
          </HeroButton>
        </div>
      </motion.div>

    </div>
  )
}

/**
 * Hero Button Component
 * Styled buttons for the hero section
 */
const HeroButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary"
} & React.ComponentPropsWithoutRef<"a">) => {
  const baseStyles =
    "no-underline flex items-center justify-center cursor-pointer transition duration-200 rounded-lg px-6 py-3 text-sm font-semibold leading-6 min-w-[180px] h-12"

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary/90 hover:-translate-y-0.5 shadow-lg shadow-primary/25",
    secondary:
      "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:-translate-y-0.5",
  }

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default HeroSection
