"use client"

import * as React from "react"
import Image from "next/image"
import { Flame, Heart, Globe2, Award, Users, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { GlobalExpansionGlobe } from "./global-expansion-globe"

/**
 * HeritageSection Component
 *
 * Comprehensive heritage/story section for the single-page homepage.
 * Features:
 * - Hero banner with rooster imagery
 * - The Legend of the Barcelos Rooster (full story)
 * - Humble origins in South Africa
 * - Family vision and flame-grilled passion
 * - Global expansion journey
 * - Key values
 * - Timeline with milestones
 */

interface HeritageSectionProps {
  className?: string
}

const values = [
  {
    icon: Flame,
    title: "Flame-Grilled Excellence",
    description: "Authentic Portuguese peri-peri recipes perfected over a century",
  },
  {
    icon: Heart,
    title: "Family Heritage",
    description: "From the Mazzis family to yours since 1993",
  },
  {
    icon: Globe2,
    title: "Global Family",
    description: "120+ restaurants across 17 countries",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "Premium ingredients, no shortcuts, ever",
  },
  {
    icon: Users,
    title: "Warm Hospitality",
    description: "Treating every guest like part of the family",
  },
  {
    icon: Sparkles,
    title: "Living Tradition",
    description: "Honouring heritage while embracing innovation",
  },
]

const milestones = [
  { year: "1993", event: "Costa Mazzis opens the first Barcelos in Pretoria, South Africa", highlight: true },
  { year: "Late 90s", event: "Franchising begins, spreading across Southern Africa" },
  { year: "2000s", event: "Expansion to Europe, Asia, and North America" },
  { year: "2010s", event: "Global presence reaches 100+ restaurants" },
  { year: "Today", event: "120+ restaurants in 17+ countries, now in India", highlight: true },
]

export function HeritageSection({ className }: HeritageSectionProps) {
  return (
    <section
      id="our-story"
      className={cn("scroll-mt-20", className)}
    >
      {/* Hero Banner */}
      <div className="relative bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/brand/barcelos-village.png"
            alt="The historic village of Barcelos, Portugal"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        </div>

        <div className="container-wide relative z-10 py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-flame-yellow bg-flame-yellow/10 rounded-full uppercase tracking-wide">
              OUR HERITAGE
            </span>
            <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-6 uppercase">
              From Legend
              <span className="text-barcelos-red"> to Legacy</span>
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              A story of faith, family, and flame-grilled passion that spans continents
              and generations.
            </p>
          </div>
        </div>
      </div>

      {/* The Legend Section */}
      <div className="section-padding bg-stone-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Decorative background */}
                <div className="absolute inset-4 bg-barcelos-red/5 rounded-3xl rotate-3" />
                <div className="absolute inset-4 bg-flame-yellow/5 rounded-3xl -rotate-3" />

                {/* Main image container */}
                <div className="absolute inset-4 bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <Image
                    src="/images/brand/barcelos-cockerel-night.jpg"
                    alt="The Barcelos Rooster - Symbol of faith, justice, and determination"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 md:bottom-4 md:-right-6 bg-barcelos-red text-white rounded-2xl shadow-xl p-5">
                  <p className="text-xs font-medium opacity-80">Est.</p>
                  <p className="font-display font-bold text-3xl">1993</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <h2 className="font-display font-bold text-charcoal text-3xl md:text-4xl lg:text-5xl mb-6 uppercase">
                The Legend of the
                <span className="text-barcelos-red"> Barcelos Rooster</span>
              </h2>

              <div className="space-y-5 text-charcoal-medium">
                <p className="text-lg leading-relaxed">
                  Legend has it, years ago, a pilgrim was passing through the town of Barcelos
                  in Portugal. Wrongfully accused of a crime and sentenced to hang, he was
                  brought before a judge about to sit down to his roasted chicken dinner.
                </p>

                <p className="leading-relaxed text-lg">
                  <em className="text-charcoal font-medium">&ldquo;If this rooster gets up and crows,
                  then I&apos;m an innocent man&rdquo;</em> &mdash; exclaimed the pilgrim.
                </p>

                <p className="leading-relaxed">
                  And that is exactly what happened! The pilgrim was freed and so the
                  Barcelos Legend was born.
                </p>

                <p className="leading-relaxed">
                  We&apos;ve passed this story on through generations and with it, treasured recipes,
                  time-tested practices, and age-old traditions. No gimmicks or imitations.
                  At Barcelos, we value <span className="text-barcelos-red font-semibold">authenticity</span> and
                  stay true to our <span className="text-barcelos-red font-semibold">Afro-Portuguese roots</span> when
                  it comes to our flame-grilled chicken and our original Peri-Peri marinades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Humble Beginnings Section */}
      <div className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Costa Mazzis Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative max-w-md mx-auto">
                {/* Decorative background elements */}
                <div className="absolute -inset-4 bg-barcelos-red/5 rounded-full rotate-6" />
                <div className="absolute -inset-4 bg-flame-yellow/5 rounded-full -rotate-6" />

                {/* Main image */}
                <div className="relative">
                  <Image
                    src="/images/brand/costa-mazzis.png"
                    alt="Costa Mazzis - Founder of Barcelos"
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-full shadow-2xl"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 md:bottom-4 md:-right-4 bg-barcelos-red text-white rounded-2xl shadow-xl p-4">
                  <p className="text-xs font-medium opacity-80">Founded</p>
                  <p className="font-display font-bold text-2xl">1993</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full uppercase tracking-wide">
                HUMBLE BEGINNINGS
              </span>
              <h2 className="font-display font-bold text-charcoal text-3xl md:text-4xl mb-6 uppercase">
                A Dream Born in Pretoria
              </h2>

              <div className="space-y-5 text-charcoal-medium">
                <TextGenerateEffect
                  words="In the early 1990s, a young entrepreneur named Costa Mazzis had a bold idea. He believed that 'if what you produce is good, it can never fail to be a success.' Fuelled by his passion for great food, Costa left behind a career in engineering to follow his dream of cooking."
                  className="text-lg leading-relaxed font-normal text-charcoal-medium"
                  duration={0.3}
                  delay={0}
                  staggerDelay={0.04}
                />

                <TextGenerateEffect
                  words="In 1993, he opened a small flame-grilled chicken restaurant in the Sunnyside neighbourhood of Pretoria, South Africa. Offering authentic Portuguese-style peri-peri chicken — a healthier, flavourful concept that was revolutionary at the time — the first Barcelos restaurant was an instant hit from day one."
                  className="leading-relaxed font-normal text-charcoal-medium"
                  duration={0.3}
                  delay={2.5}
                  staggerDelay={0.04}
                />

                <TextGenerateEffect
                  words="Locals flocked to the family-run eatery, drawn by its delicious flame-grilled menu and the warm, welcoming atmosphere that Costa cultivated. Inspired by the 800-year-old legend, he adopted the vibrant rooster as the restaurant's symbol, giving Barcelos a sense of depth and tradition that set it apart."
                  className="leading-relaxed font-normal text-charcoal-medium"
                  duration={0.3}
                  delay={5}
                  staggerDelay={0.04}
                />
              </div>

              {/* Founder Quote */}
              <blockquote className="mt-8 p-6 bg-gradient-to-br from-flame-yellow/10 to-flame-yellow/5 rounded-2xl border-l-4 border-flame-yellow">
                <p className="text-xl md:text-2xl font-display text-charcoal italic leading-relaxed">
                  &ldquo;If you don&apos;t like the heat, get out of the kitchen.&rdquo;
                </p>
                <footer className="mt-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-barcelos-red/10 flex items-center justify-center">
                    <Flame className="size-5 text-barcelos-red" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Costa Mazzis</p>
                    <p className="text-sm text-charcoal-medium">Founder, Barcelos</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Family Vision Section */}
      <div className="section-padding bg-charcoal text-white">
        <div className="container-wide">
          {/* First row - Handover image and text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Handover Image - Costa & Jared */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] max-w-lg mx-auto">
                <div className="absolute inset-0 bg-barcelos-red/10 rounded-3xl rotate-2" />
                <div className="absolute inset-0 bg-flame-yellow/10 rounded-3xl -rotate-2" />
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/brand/costa-jared-handover.png"
                    alt="Costa Mazzis passing the torch to Jared Mazzis - the next generation of Barcelos"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-flame-yellow bg-flame-yellow/10 rounded-full uppercase tracking-wide">
                FAMILY VISION
              </span>
              <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-6 uppercase">
                Flame-Grilled Passion,
                <span className="text-flame-yellow"> Passed Down</span>
              </h2>

              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-white" style={{ color: '#ffffff' }}>
                  Costa&apos;s vision for Barcelos was always about more than selling chicken &mdash;
                  it was about sharing an experience and a culture. The flame-grilled peri-peri
                  recipes themselves are steeped in history, perfected by Portuguese chefs over
                  a century ago.
                </p>

                <p className="leading-relaxed text-white" style={{ color: '#ffffff' }}>
                  The result was a menu that brought South African hospitality together with
                  Portuguese spice, creating a signature taste that people couldn&apos;t get enough of.
                  The exact blend of peri-peri sauces and spices became a closely guarded family secret.
                </p>

                <p className="leading-relaxed text-white" style={{ color: '#ffffff' }}>
                  Today, Costa remains a guiding force in the business, alongside the next
                  generation &mdash; his son Jared Mazzis &mdash;
                  who continues to drive Barcelos into its future, honouring the
                  heritage while bringing fresh energy, innovation, and strategic thinking to
                  meet the demands of a rapidly changing global market.
                </p>
              </div>
            </div>
          </div>

          {/* Second row - Stats and Jared India image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Stats cards */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <p className="font-display font-bold text-4xl md:text-5xl text-barcelos-red mb-2">30+</p>
                  <p className="text-sm text-neutral-400">Years of Excellence</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <p className="font-display font-bold text-4xl md:text-5xl text-flame-yellow mb-2">17+</p>
                  <p className="text-sm text-neutral-400">Countries</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <p className="font-display font-bold text-4xl md:text-5xl text-barcelos-green mb-2">120+</p>
                  <p className="text-sm text-neutral-400">Restaurants</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <p className="font-display font-bold text-4xl md:text-5xl text-white mb-2">1</p>
                  <p className="text-sm text-neutral-400">Family Recipe</p>
                </div>
              </div>
            </div>

            {/* Jared India Franchise Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] max-w-lg mx-auto lg:ml-auto">
                <div className="absolute inset-0 bg-flame-yellow/10 rounded-3xl rotate-2" />
                <div className="absolute inset-0 bg-barcelos-red/10 rounded-3xl -rotate-2" />
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/brand/jared-mazzis-india.jpg"
                    alt="Jared Mazzis leading Barcelos expansion into India"
                    fill
                    className="object-cover object-right"
                  />
                </div>
                {/* Caption badge */}
                <div className="absolute -bottom-3 -left-3 md:bottom-4 md:-left-4 bg-barcelos-red text-white rounded-2xl shadow-xl px-4 py-3">
                  <p className="text-xs font-medium opacity-80">Expanding to</p>
                  <p className="font-display font-bold text-xl">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Expansion Globe */}
      <GlobalExpansionGlobe />

      {/* Global Journey Timeline */}
      <div className="section-padding bg-stone-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full uppercase tracking-wide">
              OUR JOURNEY
            </span>
            <h2 className="font-display font-bold text-charcoal text-3xl md:text-4xl mb-4 uppercase">
              From One Restaurant to a Global Family
            </h2>
            <p className="text-lg text-charcoal-medium max-w-2xl mx-auto">
              What began as one neighbourhood restaurant in Pretoria has grown into a
              thriving enterprise spanning continents.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-barcelos-red via-flame-yellow to-barcelos-green transform md:-translate-x-1/2" />

              {/* Timeline items */}
              <div className="space-y-8 md:space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={cn(
                      "relative flex items-start gap-6 md:gap-0",
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    )}
                  >
                    {/* Dot */}
                    <div className={cn(
                      "absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 z-10",
                      milestone.highlight
                        ? "bg-barcelos-red ring-4 ring-barcelos-red/20"
                        : "bg-white border-2 border-charcoal-light"
                    )} />

                    {/* Content */}
                    <div className={cn(
                      "ml-12 md:ml-0 md:w-1/2",
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    )}>
                      <div className={cn(
                        "bg-white rounded-2xl p-5 shadow-sm",
                        milestone.highlight && "ring-2 ring-barcelos-red/20"
                      )}>
                        <span className={cn(
                          "inline-block px-3 py-1 text-sm font-bold rounded-full mb-2",
                          milestone.highlight
                            ? "bg-barcelos-red text-white"
                            : "bg-neutral-100 text-charcoal"
                        )}>
                          {milestone.year}
                        </span>
                        <p className="text-charcoal-medium">{milestone.event}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full uppercase tracking-wide">
              OUR VALUES
            </span>
            <h2 className="font-display font-bold text-charcoal text-3xl md:text-4xl mb-4 uppercase">
              What We Stand For
            </h2>
            <p className="text-lg text-charcoal-medium max-w-2xl mx-auto">
              The spirit of the Barcelos Rooster lives on in every meal we serve &mdash;
              these values guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group text-center p-6 md:p-8 rounded-2xl bg-neutral-50 hover:bg-stone-cream transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-barcelos-red/10 group-hover:bg-barcelos-red group-hover:scale-110 flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <value.icon className="size-7 text-barcelos-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-charcoal text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-charcoal-medium text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing Statement */}
      <div
        className="relative py-16 md:py-20 text-white"
        style={{
          backgroundImage: 'url(/images/patterns/red-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-wide text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <Image
              src="/images/brand/costa-grilling.png"
              alt="Costa Mazzis Grilling"
              width={400}
              height={300}
              className="mx-auto mb-8 rounded-xl shadow-2xl"
            />
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4 uppercase">
              A Living Heritage
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              What started with Costa Mazzis grilling for his first customers in Pretoria
              has grown into a global culinary family. Barcelos remains committed to
              flame-grilling with integrity, serving food that is true to its heritage,
              and treating customers like part of the family.
            </p>
            <p
              className="mt-6 text-xl font-medium"
              style={{
                color: '#FFE600',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
              }}
            >
              This is the story we continue to share, plate by plate, with the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeritageSection
