"use client"

import * as React from "react"
import { GraduationCap, Factory, Hammer, Building2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { VimeoEmbed } from "@/components/ui/vimeo-embed"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { CountUp } from "@/components/ui/count-up"

/**
 * InfrastructureShowcase Component
 *
 * Showcases Barcelos SA's operational infrastructure:
 * - Training Academy
 * - Central Kitchen
 * - Shopfitting Department
 * - Corporate Video Section
 */

interface InfrastructureShowcaseProps {
  className?: string
  videoId?: string // Optional Vimeo video ID
}

const infrastructureItems = [
  {
    icon: GraduationCap,
    title: "Training Academy",
    description:
      "Our purpose-built training facility ensures every team member masters the Barcelos way. Standardised operational excellence delivered through comprehensive programmes.",
    stat: "1000+",
    statLabel: "Staff Trained Annually",
    color: "barcelos-red",
  },
  {
    icon: Factory,
    title: "Central Kitchen",
    description:
      "State-of-the-art production facility where our proprietary marinades are crafted. Every blend follows recipes perfected over three decades.",
    stat: "30+",
    statLabel: "Years Perfected Recipes",
    color: "flame-yellow",
  },
  {
    icon: Hammer,
    title: "Shopfitting Department",
    description:
      "Our in-house design and build-out team delivers turnkey solutions for franchisees. Consistent brand experience, every location, every time.",
    stat: "120+",
    statLabel: "Stores Built",
    color: "barcelos-green",
  },
  {
    icon: Building2,
    title: "Head Office Support",
    description:
      "Dedicated teams for marketing, operations, supply chain, and franchise development. Your success is backed by South Africa's leading QSR infrastructure.",
    stat: "17+",
    statLabel: "Countries Supported",
    color: "primary",
  },
]

export function InfrastructureShowcase({ className, videoId }: InfrastructureShowcaseProps) {
  return (
    <div className={cn("section-padding bg-charcoal", className)}>
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-flame-yellow bg-flame-yellow/10 rounded-full uppercase tracking-wide">
            OUR INFRASTRUCTURE
          </span>
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-4 uppercase">
            Built for
            <span className="text-flame-yellow"> Excellence</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            From training to production to store build-out, Barcelos has invested in
            world-class infrastructure that sets our franchisees up for success.
          </p>
        </div>

        {/* Infrastructure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {infrastructureItems.map((item) => (
            <BackgroundGradient
              key={item.title}
              className="rounded-2xl bg-white/5 p-1"
              containerClassName="h-full"
            >
              <div className="relative h-full rounded-xl bg-charcoal p-8 overflow-hidden group">
                {/* Decorative corner */}
                <div
                  className={cn(
                    "absolute top-0 right-0 w-24 h-24 rounded-bl-[4rem] opacity-20 transition-opacity group-hover:opacity-40",
                    item.color === "barcelos-red" && "bg-barcelos-red",
                    item.color === "flame-yellow" && "bg-flame-yellow",
                    item.color === "barcelos-green" && "bg-barcelos-green",
                    item.color === "primary" && "bg-primary"
                  )}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                      item.color === "barcelos-red" && "bg-barcelos-red/20",
                      item.color === "flame-yellow" && "bg-flame-yellow/20",
                      item.color === "barcelos-green" && "bg-barcelos-green/20",
                      item.color === "primary" && "bg-primary/20"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "size-7",
                        item.color === "barcelos-red" && "text-barcelos-red",
                        item.color === "flame-yellow" && "text-flame-yellow",
                        item.color === "barcelos-green" && "text-barcelos-green",
                        item.color === "primary" && "text-primary"
                      )}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Stat */}
                  <div className="flex items-baseline gap-2">
                    <span
                      className={cn(
                        "font-display font-bold text-3xl md:text-4xl",
                        item.color === "barcelos-red" && "text-barcelos-red",
                        item.color === "flame-yellow" && "text-flame-yellow",
                        item.color === "barcelos-green" && "text-barcelos-green",
                        item.color === "primary" && "text-primary"
                      )}
                    >
                      <CountUp
                        end={parseInt(item.stat.replace(/\D/g, ""))}
                        suffix={item.stat.includes("+") ? "+" : ""}
                        duration={2}
                      />
                    </span>
                    <span className="text-white/60 text-sm uppercase tracking-wide">
                      {item.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>

        {/* Video Section (if videoId provided) */}
        {videoId && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-3 uppercase">
                See Our Operations in Action
              </h3>
              <p className="text-white/70 max-w-xl mx-auto">
                Take a behind-the-scenes look at the infrastructure that powers every Barcelos restaurant.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <VimeoEmbed
                videoId={videoId}
                title="Barcelos Operations Overview"
                className="shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default InfrastructureShowcase
