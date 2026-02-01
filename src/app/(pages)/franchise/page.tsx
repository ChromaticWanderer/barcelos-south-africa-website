"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  Building2,
  TrendingUp,
  Users,
  User,
  Mail,
  Phone,
  MapPin,
  Globe2,
  CheckCircle,
  GraduationCap,
  Megaphone,
  Wrench,
  Factory,
} from "lucide-react"

import { Header, Footer } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Button as MovingBorderButton } from "@/components/ui/moving-border"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Turnstile, useTurnstileToken } from "@/components/ui/turnstile"
import { siteConfig } from "@/lib/constants/site"

/**
 * Franchise Page - Barcelos South Africa
 *
 * Comprehensive franchise information page with:
 * - Hero section with brand story
 * - Why partner with Barcelos
 * - Infrastructure showcase
 * - Investment ranges (hybrid model - show ranges, hold back specifics)
 * - Support offered
 * - Inquiry form with SA provinces + International option
 * - Cloudflare Turnstile bot protection
 */

const benefits = [
  {
    icon: Building2,
    title: "PROVEN MODEL",
    description: "30+ years of operational excellence across 17+ countries with a replicable franchise system that works.",
  },
  {
    icon: TrendingUp,
    title: "SA HEADQUARTERS",
    description: "Full support from our South African head office, including training academy and central kitchen.",
  },
  {
    icon: Users,
    title: "COMPLETE SUPPORT",
    description: "Comprehensive training, marketing resources, shopfitting, and ongoing operational guidance.",
  },
]

const infrastructureItems = [
  {
    icon: GraduationCap,
    title: "Training Academy",
    description: "Purpose-built facility ensuring every team member masters the Barcelos way.",
    color: "barcelos-red",
  },
  {
    icon: Factory,
    title: "Central Kitchen",
    description: "State-of-the-art production of proprietary marinades and signature sauces.",
    color: "flame-yellow",
  },
  {
    icon: Wrench,
    title: "Shopfitting Team",
    description: "In-house design and build-out team for turnkey store solutions.",
    color: "barcelos-green",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    description: "National campaigns, local marketing assistance, and brand materials.",
    color: "primary",
  },
]

const investmentRanges = [
  {
    format: "Express",
    description: "Compact format for high-traffic locations",
    range: "R1.5M - R2M",
    size: "40-60m²",
  },
  {
    format: "Standard",
    description: "Full-service restaurant with dine-in",
    range: "R2M - R2.5M",
    size: "80-120m²",
  },
  {
    format: "Flagship",
    description: "Premium location with full brand experience",
    range: "R2.5M - R3M+",
    size: "120-180m²",
  },
]

const requirements = [
  "Passion for the food & beverage industry",
  "Strong business acumen and leadership skills",
  "Commitment to brand standards and quality",
  "Adequate capital for initial investment",
  "Hands-on involvement in operations",
  "Prime retail location availability",
]

const stats = [
  { value: "30+", label: "Years Heritage" },
  { value: "17+", label: "Countries" },
  { value: "120+", label: "Restaurants" },
  { value: "1993", label: "Est." },
]

// South African provinces + International option
const regionOptions = [
  { value: "", label: "Select your region" },
  { value: "gauteng", label: "Gauteng" },
  { value: "western-cape", label: "Western Cape" },
  { value: "kwazulu-natal", label: "KwaZulu-Natal" },
  { value: "eastern-cape", label: "Eastern Cape" },
  { value: "free-state", label: "Free State" },
  { value: "limpopo", label: "Limpopo" },
  { value: "mpumalanga", label: "Mpumalanga" },
  { value: "north-west", label: "North West" },
  { value: "northern-cape", label: "Northern Cape" },
  { value: "international", label: "International (Outside SA)" },
]

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    region: "",
    country: "",
    investment: "",
    experience: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const { token, handleVerify, handleError, handleExpire, reset: resetTurnstile } = useTurnstileToken()

  const isInternational = formData.region === "international"

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Reset country if switching away from international
    if (name === "region" && value !== "international") {
      setFormData((prev) => ({ ...prev, country: "" }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone || !formData.region) return

    // Require Turnstile token if configured
    if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !token) {
      setSubmitError("Please complete the verification challenge.")
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // TODO: Replace with actual make.com webhook for SA
      const response = await fetch(process.env.NEXT_PUBLIC_MAKE_FRANCHISE_WEBHOOK || 'https://hook.eu2.make.com/placeholder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          region: formData.region,
          country: isInternational ? formData.country : "South Africa",
          investment: formData.investment,
          experience: formData.experience,
          message: formData.message,
          submittedAt: new Date().toISOString(),
          source: 'barcelos-sa-website',
          formType: 'franchise-inquiry',
          turnstileToken: token,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitted(true)
      resetTurnstile()
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError('There was an error submitting your inquiry. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/brand/barcelos-village.png"
              alt=""
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-transparent" />
          </div>

          <div className="container-wide relative z-10 py-20 md:py-28 lg:py-32">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold text-flame-yellow bg-flame-yellow/10 rounded-full uppercase tracking-wide">
                <Building2 className="size-4" />
                FRANCHISE OPPORTUNITY
              </span>

              <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-6 uppercase">
                Join the Barcelos
                <span className="text-barcelos-red"> Family</span>
              </h1>

              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Partner with South Africa&apos;s leading flame-grilled chicken brand. With 30+ years
                of heritage and world-class infrastructure, we set our franchisees up for success.
              </p>

              <Button variant="cta" size="lg" asChild>
                <a href="#inquiry-form">
                  Start Your Inquiry
                  <ArrowRight className="size-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-barcelos-red relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'url(/images/patterns/pattern.png)',
              backgroundSize: '200px',
            }}
          />
          <div className="container-wide relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl p-6 md:p-8 text-center border border-white/20 hover:border-flame-yellow/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 100%)',
                  }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-flame-yellow/25 to-transparent rounded-bl-[3rem] group-hover:from-flame-yellow/40 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/15 to-transparent rounded-tr-[2rem]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <p className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-3 relative z-10 group-hover:text-flame-yellow transition-colors duration-300 drop-shadow-lg">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-white/90 uppercase tracking-[0.2em] font-semibold relative z-10">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Barcelos */}
        <section className="section-padding bg-stone-cream">
          <div className="container-wide">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full uppercase tracking-wide">
                Why Partner With Us
              </span>
              <h2 className="font-display font-bold text-charcoal text-3xl md:text-4xl mb-4 uppercase">
                A PROVEN SOUTH AFRICAN SUCCESS STORY
              </h2>
              <p className="text-lg text-charcoal-medium max-w-2xl mx-auto">
                Born in Pretoria in 1993, Barcelos has grown into a global brand with 120+
                restaurants across 17+ countries — all supported from our South African headquarters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="group hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-barcelos-red/10 group-hover:bg-barcelos-red flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                      <benefit.icon className="size-8 text-barcelos-red group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-charcoal text-xl mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-charcoal-medium leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Showcase */}
        <section className="section-padding bg-charcoal text-white">
          <div className="container-wide">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-flame-yellow bg-flame-yellow/10 rounded-full uppercase tracking-wide">
                Our Infrastructure
              </span>
              <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-4 uppercase">
                WORLD-CLASS SUPPORT SYSTEMS
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Our South African headquarters houses everything you need to succeed —
                from training to production to store build-out.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {infrastructureItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    item.color === "barcelos-red" ? "bg-barcelos-red/20" :
                    item.color === "flame-yellow" ? "bg-flame-yellow/20" :
                    item.color === "barcelos-green" ? "bg-barcelos-green/20" :
                    "bg-primary/20"
                  }`}>
                    <item.icon className={`size-6 ${
                      item.color === "barcelos-red" ? "text-barcelos-red" :
                      item.color === "flame-yellow" ? "text-flame-yellow" :
                      item.color === "barcelos-green" ? "text-barcelos-green" :
                      "text-primary"
                    }`} />
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Ranges - Hybrid Model */}
        <section className="section-padding bg-stone-cream">
          <div className="container-wide">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full uppercase tracking-wide">
                Investment Overview
              </span>
              <h2 className="font-display font-bold text-charcoal text-3xl md:text-4xl mb-4 uppercase">
                FRANCHISE FORMATS
              </h2>
              <p className="text-lg text-charcoal-medium max-w-2xl mx-auto">
                Choose the format that best suits your location and investment capacity.
                Detailed financials provided upon inquiry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {investmentRanges.map((item, index) => (
                <BackgroundGradient
                  key={item.format}
                  className="rounded-2xl bg-white p-1"
                  containerClassName="h-full"
                >
                  <div className="relative h-full bg-white rounded-xl p-8 text-center">
                    {index === 1 && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-barcelos-red text-white text-xs font-semibold rounded-full">
                        MOST POPULAR
                      </span>
                    )}
                    <h3 className="font-display font-bold text-charcoal text-2xl mb-2 uppercase">
                      {item.format}
                    </h3>
                    <p className="text-charcoal-medium text-sm mb-4">
                      {item.description}
                    </p>
                    <p className="font-display font-bold text-barcelos-red text-3xl mb-2">
                      {item.range}
                    </p>
                    <p className="text-charcoal-light text-sm">
                      Store size: {item.size}
                    </p>
                  </div>
                </BackgroundGradient>
              ))}
            </div>

            <p className="text-center text-charcoal-medium text-sm mt-8">
              * Investment ranges are estimates and may vary based on location and specifications.
              Detailed breakdown provided during consultation.
            </p>
          </div>
        </section>

        {/* Requirements */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full uppercase tracking-wide">
                  Ideal Partner Profile
                </span>
                <h2 className="font-display font-bold text-charcoal text-3xl md:text-4xl mb-6 uppercase">
                  WHO WE&apos;RE LOOKING FOR
                </h2>
                <p className="text-lg text-charcoal-medium mb-8">
                  We partner with driven entrepreneurs who share our passion for quality food
                  and exceptional hospitality. Here&apos;s what makes an ideal Barcelos franchise partner:
                </p>

                <div className="space-y-4">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-barcelos-red mt-0.5 shrink-0" />
                      <span className="text-charcoal-medium">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-barcelos-red/5 rounded-3xl rotate-2" />
                <div className="absolute inset-0 bg-flame-yellow/5 rounded-3xl -rotate-2" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/brand/costa-grilling.png"
                    alt="Barcelos Flame-Grilled Chicken"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section id="inquiry-form" className="section-padding bg-stone-cream scroll-mt-20">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full uppercase tracking-wide">
                  Get Started
                </span>
                <h2 className="font-display font-bold text-charcoal text-3xl md:text-4xl mb-4 uppercase">
                  START YOUR FRANCHISE JOURNEY
                </h2>
                <p className="text-lg text-charcoal-medium">
                  Fill out the form below and our franchise team will be in touch within 48 hours
                  to discuss the opportunity.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center p-12 bg-green-50 rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="size-8 text-green-600" />
                  </div>
                  <h3 className="font-display font-bold text-charcoal text-2xl mb-4">
                    Thank You for Your Interest!
                  </h3>
                  <p className="text-charcoal-medium mb-6">
                    We&apos;ve received your inquiry. Our franchise team will contact you within 48 hours
                    to discuss the Barcelos franchise opportunity.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <MovingBorderButton
                  as="div"
                  borderRadius="1.5rem"
                  className="bg-white p-8"
                  containerClassName="w-full"
                  borderClassName="bg-[radial-gradient(var(--barcelos-red)_40%,transparent_60%)]"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                            className="pl-10"
                          />
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                            className="pl-10"
                          />
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+27 82 123 4567"
                            required
                            className="pl-10"
                          />
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Region *
                        </label>
                        <div className="relative">
                          <select
                            name="region"
                            value={formData.region}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-3 py-2.5 border border-neutral-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-barcelos-red/20 focus:border-barcelos-red bg-white"
                          >
                            {regionOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
                        </div>
                      </div>

                      {/* Conditional country field for international */}
                      {isInternational && (
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-charcoal mb-2">
                            Country *
                          </label>
                          <div className="relative">
                            <Input
                              name="country"
                              value={formData.country}
                              onChange={handleChange}
                              placeholder="Your country"
                              required={isInternational}
                              className="pl-10"
                            />
                            <Globe2 className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
                          </div>
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Investment Capacity
                        </label>
                        <select
                          name="investment"
                          value={formData.investment}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 border border-neutral-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-barcelos-red/20 focus:border-barcelos-red bg-white"
                        >
                          <option value="">Select range</option>
                          {isInternational ? (
                            <>
                              <option value="100k-150k">$100,000 - $150,000 USD</option>
                              <option value="150k-200k">$150,000 - $200,000 USD</option>
                              <option value="200k+">$200,000+ USD</option>
                            </>
                          ) : (
                            <>
                              <option value="1.5M-2M">R1.5M - R2M</option>
                              <option value="2M-2.5M">R2M - R2.5M</option>
                              <option value="2.5M-3M">R2.5M - R3M</option>
                              <option value="3M+">R3M+</option>
                            </>
                          )}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          F&B Experience
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 border border-neutral-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-barcelos-red/20 focus:border-barcelos-red bg-white"
                        >
                          <option value="">Select experience level</option>
                          <option value="none">No F&B experience</option>
                          <option value="1-3">1-3 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="5+">5+ years</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Tell Us About Yourself
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share your background, why you're interested in Barcelos, and any questions you have..."
                        className="w-full px-3 py-2.5 border border-neutral-200 rounded-lg shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-barcelos-red/20 focus:border-barcelos-red bg-white resize-none"
                        rows={4}
                      />
                    </div>

                    {/* Turnstile Bot Protection */}
                    {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
                      <div className="flex justify-center">
                        <Turnstile
                          onVerify={handleVerify}
                          onError={handleError}
                          onExpire={handleExpire}
                          theme="light"
                        />
                      </div>
                    )}

                    {submitError && (
                      <p className="text-red-600 text-sm text-center">{submitError}</p>
                    )}

                    <div className="text-center">
                      <Button
                        type="submit"
                        variant="cta"
                        size="lg"
                        disabled={isSubmitting}
                        className="min-w-[200px]"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                        <ArrowRight className="size-5" />
                      </Button>
                    </div>
                  </form>
                </MovingBorderButton>
              )}

              {/* Contact Info */}
              <div className="mt-12 text-center">
                <p className="text-charcoal-medium mb-4">
                  Prefer to reach out directly?
                </p>
                <a
                  href={`mailto:${siteConfig.contact.franchiseEmail}`}
                  className="text-primary hover:text-barcelos-red-dark font-medium transition-colors"
                >
                  {siteConfig.contact.franchiseEmail}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
