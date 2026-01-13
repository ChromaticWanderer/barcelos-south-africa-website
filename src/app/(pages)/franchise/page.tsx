"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
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
  Award,
  CheckCircle,
  Flame,
  Heart,
  DollarSign,
  GraduationCap,
  Megaphone,
  Wrench,
} from "lucide-react"

import { Header, Footer } from "@/components/layout"
import { PageHeader } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/lib/constants/site"

/**
 * Franchise Page - Barcelos India
 *
 * Comprehensive franchise information page with:
 * - Hero section with brand story
 * - Why partner with Barcelos
 * - Franchise model details
 * - Support offered
 * - Investment information
 * - Inquiry form
 */

const benefits = [
  {
    icon: Building2,
    title: "PROVEN MODEL",
    description: "30+ years of operational excellence across 17+ countries with a replicable franchise system that works.",
  },
  {
    icon: TrendingUp,
    title: "GROWING MARKET",
    description: "Premium QSR segment expanding rapidly in India with strong consumer demand for quality flame-grilled options.",
  },
  {
    icon: Users,
    title: "FULL SUPPORT",
    description: "Comprehensive training, marketing resources, and ongoing operational guidance from day one.",
  },
]

const supportItems = [
  {
    icon: GraduationCap,
    title: "Training & Development",
    description: "Complete training program for you and your team covering operations, service, and brand standards.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    description: "National and local marketing campaigns, social media support, and promotional materials.",
  },
  {
    icon: Wrench,
    title: "Operations Excellence",
    description: "Ongoing operational support, quality audits, and continuous improvement programs.",
  },
  {
    icon: DollarSign,
    title: "Financial Guidance",
    description: "Business planning support, benchmarking data, and financial performance insights.",
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

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    investment: "",
    experience: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone) return

    setIsSubmitting(true)

    try {
      const response = await fetch('https://hook.eu2.make.com/pw1doyoqo27bxghhj4vf4j0lv3k8wi81', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          investment: formData.investment,
          experience: formData.experience,
          message: formData.message,
          submittedAt: new Date().toISOString(),
          source: 'barcelos-india-website',
          formType: 'franchise-inquiry',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your inquiry. Please try again or email us directly.')
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
                Partner with a globally recognised flame-grilled chicken brand. Bring authentic
                Portuguese flavours to your city and be part of our expanding family across India.
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
          {/* Background texture */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'url(/images/patterns/pattern.png)',
              backgroundSize: '200px',
            }}
          />
          <div className="container-wide relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl p-6 md:p-8 text-center border border-white/20 hover:border-flame-yellow/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 100%)',
                  }}
                >
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-flame-yellow/25 to-transparent rounded-bl-[3rem] group-hover:from-flame-yellow/40 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/15 to-transparent rounded-tr-[2rem]" />

                  {/* Inner glow effect */}
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
                A PROVEN GLOBAL SUCCESS STORY
              </h2>
              <p className="text-lg text-charcoal-medium max-w-2xl mx-auto">
                Barcelos has been perfecting the art of flame-grilled chicken since 1993.
                Our proven franchise model has expanded to over 120 restaurants across 17+ countries.
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

        {/* Brand Story */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full uppercase tracking-wide">
                  Our Heritage
                </span>
                <h2 className="font-display font-bold text-charcoal text-3xl md:text-4xl mb-6 uppercase">
                  A LEGACY OF FLAME-GRILLED EXCELLENCE
                </h2>
                <div className="space-y-4 text-charcoal-medium">
                  <p>
                    In 1993, Costa Mazzis opened the first Barcelos in Pretoria, South Africa.
                    Inspired by the 800-year-old legend of the Barcelos Rooster and armed with
                    authentic Portuguese peri-peri recipes, he created something revolutionary.
                  </p>
                  <p>
                    Today, Barcelos has grown into a global brand spanning 17+ countries with
                    120+ restaurants. The secret to our success? Unwavering commitment to quality,
                    authentic flavours, and treating every guest like family.
                  </p>
                  <p>
                    Now, we&apos;re bringing this flame-grilled legacy to India, and we&apos;re looking
                    for passionate partners to join us on this exciting journey.
                  </p>
                </div>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link href="/our-story">
                      Read Our Full Story
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-barcelos-red/5 rounded-3xl rotate-3" />
                <div className="absolute inset-0 bg-flame-yellow/5 rounded-3xl -rotate-3" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/brand/costa-jared-handover.png"
                    alt="Costa Mazzis and Jared Mazzis - The Barcelos Family Legacy"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support We Offer */}
        <section className="section-padding bg-charcoal text-white">
          <div className="container-wide">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-flame-yellow bg-flame-yellow/10 rounded-full uppercase tracking-wide">
                Partner Support
              </span>
              <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-4 uppercase">
                WE&apos;RE WITH YOU EVERY STEP
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                From site selection to grand opening and beyond, our dedicated team provides
                comprehensive support to ensure your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-barcelos-red/20 flex items-center justify-center mb-4">
                    <item.icon className="size-6 text-barcelos-red" />
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

        {/* Requirements */}
        <section className="section-padding bg-stone-cream">
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
                    src="/images/brand/jared-mazzis-india.jpg"
                    alt="Barcelos India Franchise Expansion"
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
        <section id="inquiry-form" className="section-padding bg-white scroll-mt-20">
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
                <Card className="p-8">
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
                            placeholder="+91 98765 43210"
                            required
                            className="pl-10"
                          />
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Preferred City/Region
                        </label>
                        <div className="relative">
                          <Input
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="e.g., Mumbai, Delhi, Bangalore"
                            className="pl-10"
                          />
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
                        </div>
                      </div>

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
                          <option value="50-75L">₹50 Lakhs - ₹75 Lakhs</option>
                          <option value="75L-1Cr">₹75 Lakhs - ₹1 Crore</option>
                          <option value="1Cr-2Cr">₹1 Crore - ₹2 Crores</option>
                          <option value="2Cr+">₹2 Crores+</option>
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
                </Card>
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
