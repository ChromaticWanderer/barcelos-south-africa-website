"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  TrendingUp,
  Users,
  Globe2,
  Award,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { StaggerChildren, StaggerItem } from "@/components/ui/stagger-children"
import { CountUp } from "@/components/ui/count-up"

/**
 * FranchiseCTA Component
 *
 * A prominent call-to-action section for franchise inquiries.
 * Features:
 * - Enhanced gradient background with animated overlays
 * - Portuguese tile pattern decoration
 * - Social proof stats grid
 * - Redesigned benefit cards with hover effects
 * - PopoverForm for quick franchise inquiry
 * - Link to full franchise page
 */

interface FranchiseCTAProps {
  className?: string
}

const benefits = [
  {
    icon: Building2,
    title: "PROVEN MODEL",
    description: "30+ years of operational excellence across 17+ countries with a replicable franchise system",
  },
  {
    icon: TrendingUp,
    title: "GROWING MARKET",
    description: "Premium QSR segment expanding rapidly in India with strong consumer demand",
  },
  {
    icon: Users,
    title: "FULL SUPPORT",
    description: "Comprehensive training, marketing resources, and ongoing operational guidance",
  },
]

const stats = [
  { value: "30+", label: "Years Heritage" },
  { value: "17+", label: "Countries" },
  { value: "120+", label: "Restaurants" },
  { value: "1993", label: "Est." },
]

export function FranchiseCTA({ className }: FranchiseCTAProps) {
  return (
    <section id="franchise" className={cn("section-padding scroll-mt-20", className)}>
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-barcelos-red via-barcelos-red-dark to-barcelos-red p-8 md:p-12 lg:p-16">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-flame-yellow/20 via-transparent to-transparent animate-pulse" />

          {/* Secondary animated gradient */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"
            style={{ animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
          />

          {/* Portuguese tile pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Enhanced decorative blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-flame-yellow/15 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-barcelos-red-light/20 rounded-full blur-[60px] -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10">
            {/* Header with ScrollReveal */}
            <ScrollReveal direction="up" duration={0.5}>
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-sm font-semibold text-flame-yellow bg-flame-yellow/10 rounded-full backdrop-blur-sm uppercase tracking-wide border border-flame-yellow/20">
                  <Building2 className="size-4" />
                  FRANCHISE OPPORTUNITY
                </span>
                <h2
                  className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-5 uppercase"
                  style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
                >
                  JOIN THE BARCELOS FAMILY
                </h2>
                <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                  Join the growing Barcelos family and bring authentic Portuguese
                  flame-grilled chicken to your city. Limited territories
                  available across India.
                </p>
              </div>
            </ScrollReveal>

            {/* Social Proof Stats with CountUp and Stagger */}
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto" staggerDelay={0.08}>
              <StaggerItem>
                <div className="group relative overflow-hidden rounded-2xl p-6 md:p-8 text-center border border-white/20 hover:border-flame-yellow/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                  }}
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-flame-yellow/20 to-transparent rounded-bl-3xl" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-3xl" />
                  <p className="font-display font-bold text-4xl md:text-5xl text-white mb-2 relative z-10 group-hover:text-flame-yellow transition-colors duration-300">
                    <CountUp end={30} duration={1.5} suffix="+" />
                  </p>
                  <p className="text-xs md:text-sm text-white/80 uppercase tracking-widest font-medium relative z-10">Years Heritage</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="group relative overflow-hidden rounded-2xl p-6 md:p-8 text-center border border-white/20 hover:border-flame-yellow/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                  }}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-flame-yellow/20 to-transparent rounded-bl-3xl" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-3xl" />
                  <p className="font-display font-bold text-4xl md:text-5xl text-white mb-2 relative z-10 group-hover:text-flame-yellow transition-colors duration-300">
                    <CountUp end={17} duration={1.8} suffix="+" />
                  </p>
                  <p className="text-xs md:text-sm text-white/80 uppercase tracking-widest font-medium relative z-10">Countries</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="group relative overflow-hidden rounded-2xl p-6 md:p-8 text-center border border-white/20 hover:border-flame-yellow/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                  }}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-flame-yellow/20 to-transparent rounded-bl-3xl" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-3xl" />
                  <p className="font-display font-bold text-4xl md:text-5xl text-white mb-2 relative z-10 group-hover:text-flame-yellow transition-colors duration-300">
                    <CountUp end={120} duration={2} suffix="+" />
                  </p>
                  <p className="text-xs md:text-sm text-white/80 uppercase tracking-widest font-medium relative z-10">Restaurants</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="group relative overflow-hidden rounded-2xl p-6 md:p-8 text-center border border-white/20 hover:border-flame-yellow/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                  }}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-flame-yellow/20 to-transparent rounded-bl-3xl" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-3xl" />
                  <p className="font-display font-bold text-4xl md:text-5xl text-white mb-2 relative z-10 group-hover:text-flame-yellow transition-colors duration-300">
                    <CountUp end={1993} duration={2.5} />
                  </p>
                  <p className="text-xs md:text-sm text-white/80 uppercase tracking-widest font-medium relative z-10">Est.</p>
                </div>
              </StaggerItem>
            </StaggerChildren>

            {/* Benefits Grid - Enhanced with Stagger */}
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" staggerDelay={0.12}>
              {benefits.map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <div className="group bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/25 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10 h-full">
                    {/* Icon container - larger and with gradient */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <benefit.icon className="size-8 text-white" />
                    </div>

                    <h3 className="font-display font-bold text-white text-xl mb-3 text-center">
                      {benefit.title}
                    </h3>
                    <p className="text-white/90 text-base leading-relaxed text-center">
                      {benefit.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Franchise Inquiry Link - Goes to Contact Page */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-barcelos-red text-white font-semibold rounded-xl hover:bg-barcelos-red/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px] h-12 text-base"
              >
                START YOUR INQUIRY
              </Link>

              {/* Learn More Link - Enhanced */}
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-white text-white hover:bg-white hover:text-barcelos-red min-w-[200px] h-12 px-8 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
              >
                <Link href="/franchise">
                  LEARN MORE
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Globe2 className="size-4" />
                <span>Global Brand</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Award className="size-4" />
                <span>Award-Winning Concept</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Users className="size-4" />
                <span>Dedicated Support Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FranchiseCTA
