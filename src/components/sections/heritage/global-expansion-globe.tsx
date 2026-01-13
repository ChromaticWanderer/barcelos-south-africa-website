"use client";

import React from "react";
import { motion } from "motion/react";
import WorldMap from "@/components/ui/world-map";

export function GlobalExpansionGlobe() {
  return (
    <div className="relative bg-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-charcoal" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-barcelos-red/5 via-transparent to-transparent" />

      <div className="container-wide relative z-10 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-flame-yellow bg-flame-yellow/10 rounded-full uppercase tracking-wide">
            GLOBAL PRESENCE
          </span>
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-4 uppercase">
            From Africa to the
            <span className="text-barcelos-red"> World</span>
          </h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            What began in Pretoria, South Africa has grown into a global
            flame-grilled family. Today, Barcelos proudly serves authentic
            Afro-Portuguese cuisine across continents.
          </p>
        </motion.div>

        {/* World Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <WorldMap
            dots={[
              // South Africa to Botswana
              {
                start: { lat: -50.0, lng: 25.0 }, // South Africa (adjusted for map projection)
                end: { lat: -35.0, lng: 24.6849 }, // Botswana
              },
              // South Africa to Zimbabwe
              {
                start: { lat: -50.0, lng: 25.0 }, // South Africa
                end: { lat: -30.0, lng: 31.0335 }, // Zimbabwe
              },
              // South Africa to Zambia
              {
                start: { lat: -50.0, lng: 25.0 }, // South Africa
                end: { lat: -28.0, lng: 28.3228 }, // Zambia
              },
              // South Africa to Kenya
              {
                start: { lat: -50.0, lng: 25.0 }, // South Africa
                end: { lat: -10.0, lng: 36.8219 }, // Kenya
              },
              // South Africa to Ghana
              {
                start: { lat: -50.0, lng: 25.0 }, // South Africa
                end: { lat: -5.0, lng: -0.187 }, // Ghana
              },
              // South Africa to Nigeria
              {
                start: { lat: -50.0, lng: 25.0 }, // South Africa
                end: { lat: 0.0, lng: 8.6753 }, // Nigeria
              },
              // South Africa to UK
              {
                start: { lat: -50.0, lng: 25.0 }, // South Africa
                end: { lat: 51.5074, lng: -3.0 }, // UK (adjusted)
              },
              // South Africa to Brazil
              {
                start: { lat: -50.0, lng: 25.0 }, // South Africa
                end: { lat: -25.0, lng: -47.8919 }, // Brazil
              },
              // South Africa to Canada (Western - Vancouver)
              {
                start: { lat: -50.0, lng: 25.0 }, // South Africa
                end: { lat: 49.2827, lng: -123.1207 }, // Canada (Vancouver)
              },
              // South Africa to India
              {
                start: { lat: -50.0, lng: 25.0 }, // South Africa
                end: { lat: -5.0, lng: 78.9629 }, // India (dropped further)
              },
            ]}
            lineColor="#C41E3A"
          />
        </motion.div>

      </div>
    </div>
  );
}

export default GlobalExpansionGlobe;
