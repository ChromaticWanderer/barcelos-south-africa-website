"use client"

import * as React from "react"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { StaggerChildren, StaggerItem } from "@/components/ui/stagger-children"
import { CountUp } from "@/components/ui/count-up"

/**
 * TestimonialsSection Component
 *
 * Displays customer testimonials in an attractive grid layout.
 * Features:
 * - Star ratings
 * - Customer photos (placeholder for now)
 * - Quote styling
 * - Responsive grid
 */

interface TestimonialsSectionProps {
  className?: string
}

// Testimonial data from homepage.json
const testimonials = [
  {
    id: 1,
    name: "Priya M.",
    city: "Mumbai",
    quote:
      "Finally, authentic flame-grilled chicken in India! The peri-peri flavour is unlike anything else I have tried.",
    rating: 5,
    initials: "PM",
  },
  {
    id: 2,
    name: "Rahul K.",
    city: "Bangalore",
    quote:
      "Love that they have veg options too. The paneer grills are amazing! Perfect for when dining out with family.",
    rating: 5,
    initials: "RK",
  },
  {
    id: 3,
    name: "Anjali S.",
    city: "Delhi",
    quote:
      "Perfect for family dinners. Great value and the kids love it. The heat levels mean everyone finds something they enjoy.",
    rating: 5,
    initials: "AS",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i < rating
              ? "fill-flame-yellow text-flame-yellow"
              : "text-neutral-300"
          )}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection({ className }: TestimonialsSectionProps) {
  return (
    <section className={cn("section-padding bg-neutral-50", className)}>
      <div className="container-wide">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" duration={0.5}>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
              Customer Love
            </span>
            <h2 className="font-display font-bold text-charcoal uppercase">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-charcoal-medium max-w-xl mx-auto">
              Join thousands of satisfied customers who have discovered the
              Barcelos difference.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid with Stagger Animation */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.12}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <Card
                variant="ghost"
                className={cn(
                  "bg-white p-6 md:p-8 rounded-2xl shadow-sm h-full",
                  "hover:shadow-md transition-shadow duration-300"
                )}
              >
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="size-8 text-primary/20" />
                  </div>

                  {/* Rating */}
                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Quote */}
                  <blockquote className="text-charcoal-medium leading-relaxed mb-6 flex-grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    {/* Avatar placeholder */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-flame-yellow/20 flex items-center justify-center">
                      <span className="font-semibold text-primary">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-charcoal-light">
                        {testimonial.city}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Social Proof Stats with CountUp */}
        <StaggerChildren className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" staggerDelay={0.1}>
          <StaggerItem>
            <div className="text-center">
              <p className="font-display font-bold text-3xl md:text-4xl text-primary mb-1">
                <CountUp end={12} duration={1.5} suffix="+" />
              </p>
              <p className="text-sm text-charcoal-medium">Countries Worldwide</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="text-center">
              <p className="font-display font-bold text-3xl md:text-4xl text-primary mb-1">
                <CountUp end={30} duration={1.8} suffix="+" />
              </p>
              <p className="text-sm text-charcoal-medium">Years of Excellence</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="text-center">
              <p className="font-display font-bold text-3xl md:text-4xl text-primary mb-1">
                <CountUp end={1000} duration={2} suffix="+" />
              </p>
              <p className="text-sm text-charcoal-medium">Happy Customers Daily</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="text-center">
              <p className="font-display font-bold text-3xl md:text-4xl text-primary mb-1">
                <CountUp end={5} duration={1} />
              </p>
              <p className="text-sm text-charcoal-medium">Peri-Peri Heat Levels</p>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  )
}

export default TestimonialsSection
