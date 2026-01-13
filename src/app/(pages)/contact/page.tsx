"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import {
  Mail,
  MapPin,
  MessageSquare,
  User,
  Send,
  CheckCircle,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react"

import { Header, Footer } from "@/components/layout"
import { PageHeader } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig, getDisplayValue, isPlaceholder } from "@/lib/constants/site"
import { socialLinks } from "@/lib/constants/navigation"

/**
 * Contact Page - Barcelos India
 *
 * Comprehensive contact page with:
 * - Contact information cards
 * - Contact form
 * - Social media links
 * - FAQ section
 */

const faqs = [
  {
    question: "What are your restaurant hours?",
    answer: "Most Barcelos locations are open from 11:00 AM to 11:00 PM daily. Check the specific location page for exact hours.",
  },
  {
    question: "Do you offer delivery?",
    answer: "Yes! You can order delivery through our online ordering platform or through popular delivery apps in your area.",
  },
  {
    question: "How can I inquire about franchising?",
    answer: "Visit our Franchise page for detailed information about partnership opportunities, or email us at barcelos.india@barcelos.com.",
  },
  {
    question: "Do you cater for events?",
    answer: "Absolutely! We offer catering services for corporate events, parties, and gatherings. Visit our Catering page for more details.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
    if (!formData.name || !formData.email || !formData.message) return

    setIsSubmitting(true)

    try {
      const response = await fetch('https://hook.eu2.make.com/gvuv8m4l2s7yzk0ehp3iehci72az87sp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          submittedAt: new Date().toISOString(),
          source: 'barcelos-india-website',
          formType: 'contact',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your message. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Build contact cards from siteConfig
  const contactCards = [
    {
      icon: Mail,
      title: "Email Us",
      value: siteConfig.contact.email,
      description: `We reply within ${siteConfig.contact.emailResponseTime}`,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Multiple Locations",
      description: "Find your nearest restaurant",
      href: "/locations",
    },
  ]

  const socialIconMap: Record<string, React.ElementType> = {
    instagram: Instagram,
    facebook: Facebook,
    twitter: Twitter,
  }

  return (
    <>
      <Header />

      <main id="main-content" className="flex-1">
        <PageHeader
          title="Contact Us"
          subtitle="Have a question or feedback? We'd love to hear from you"
          badge="Get in Touch"
          backgroundImage="/images/brand/barcelos-village.png"
          size="hero"
          overlayOpacity={70}
        />

        {/* Contact Info Cards */}
        <section className="py-12 bg-charcoal -mt-16 relative z-10">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="group block"
                >
                  <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-barcelos-red/20 group-hover:bg-barcelos-red flex items-center justify-center shrink-0 transition-colors duration-300">
                        <card.icon className="size-6 text-barcelos-red group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-white text-lg mb-1">
                          {card.title}
                        </h3>
                        <p className="text-white/90 font-medium mb-1">{card.value}</p>
                        <p className="text-white/60 text-sm">{card.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-stone-cream">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="font-display font-bold text-charcoal text-3xl md:text-4xl mb-4 uppercase">
                  SEND US A MESSAGE
                </h2>
                <p className="text-charcoal-medium mb-8">
                  Fill out the form below and we&apos;ll get back to you within {siteConfig.contact.emailResponseTime}.
                </p>

                {isSubmitted ? (
                  <Card className="p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="size-8 text-green-600" />
                    </div>
                    <h3 className="font-display font-bold text-charcoal text-2xl mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-charcoal-medium mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within {siteConfig.contact.emailResponseTime}.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </Card>
                ) : (
                  <Card className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-2">
                            Your Name *
                          </label>
                          <div className="relative">
                            <Input
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
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
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 border border-neutral-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-barcelos-red/20 focus:border-barcelos-red bg-white"
                        >
                          <option value="">Select a topic</option>
                          <option value="general">General Inquiry</option>
                          <option value="feedback">Feedback</option>
                          <option value="complaint">Complaint</option>
                          <option value="catering">Catering Request</option>
                          <option value="careers">Careers</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Your Message *
                        </label>
                        <div className="relative">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            className="w-full px-3 py-2.5 pl-10 border border-neutral-200 rounded-lg shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-barcelos-red/20 focus:border-barcelos-red bg-white resize-none"
                            rows={5}
                            required
                          />
                          <MessageSquare className="absolute left-3 top-3 size-4 text-neutral-400" />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        variant="cta"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full md:w-auto"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="size-4" />
                      </Button>
                    </form>
                  </Card>
                )}
              </div>

              {/* FAQ & Social */}
              <div>
                <h2 className="font-display font-bold text-charcoal text-3xl md:text-4xl mb-4 uppercase">
                  FREQUENTLY ASKED QUESTIONS
                </h2>
                <p className="text-charcoal-medium mb-8">
                  Quick answers to common questions about Barcelos India.
                </p>

                <div className="space-y-4 mb-12">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="p-6">
                      <h3 className="font-semibold text-charcoal mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-charcoal-medium text-sm">
                        {faq.answer}
                      </p>
                    </Card>
                  ))}
                </div>

                {/* Social Media */}
                <div className="bg-charcoal rounded-2xl p-8">
                  <h3 className="font-display font-bold text-white text-xl mb-4">
                    Follow Us
                  </h3>
                  <p className="text-white/70 mb-6">
                    Stay connected for updates, offers, and behind-the-scenes content.
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const IconComponent = socialIconMap[social.icon] || Mail
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-xl bg-white/10 hover:bg-barcelos-red flex items-center justify-center transition-colors"
                          aria-label={`Follow us on ${social.label}`}
                        >
                          <IconComponent className="size-5 text-white" />
                        </a>
                      )
                    })}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-8 p-6 bg-barcelos-red/5 rounded-2xl border border-barcelos-red/10">
                  <h3 className="font-semibold text-charcoal mb-4">
                    Looking for something specific?
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/franchise"
                      className="text-sm text-primary hover:text-barcelos-red-dark transition-colors"
                    >
                      Franchise Opportunities →
                    </Link>
                    <Link
                      href="/careers"
                      className="text-sm text-primary hover:text-barcelos-red-dark transition-colors"
                    >
                      Career Openings →
                    </Link>
                    <Link
                      href="/catering"
                      className="text-sm text-primary hover:text-barcelos-red-dark transition-colors"
                    >
                      Catering Services →
                    </Link>
                    <Link
                      href="/locations"
                      className="text-sm text-primary hover:text-barcelos-red-dark transition-colors"
                    >
                      Find a Restaurant →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
