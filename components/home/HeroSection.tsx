"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_ARCHITECTURAL } from "@/components/ui/Motion";

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-end pb-16 sm:pb-24 pt-32 bg-charcoal-950 text-ivory-50 overflow-hidden">
      {/* Full-Width Grand Hall Hero Photograph with subtle entrance settlement */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.015 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE_ARCHITECTURAL }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/club-gusto/hero/hero-grand-hall.webp"
          alt="The Grand Banquet Hall at Club Gusto"
          fill
          className="object-cover object-center scale-[1.01]"
          priority
          sizes="100vw"
        />
        {/* Dark Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-charcoal-950/30 to-transparent" />
      </motion.div>

      {/* Hero Headline & CTA — Orchestrated Entrance */}
      <div className="relative z-10 max-w-site mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="max-w-2xl space-y-6">
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_ARCHITECTURAL }}
            className="text-xs uppercase tracking-editorial text-brass font-medium"
          >
            Gomti Nagar Extension · Lucknow
          </motion.p>

          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE_ARCHITECTURAL }}
            className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-ivory-50 leading-[1.08]"
          >
            One Address.
            <br />
            Every Guest Hosted.
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: EASE_ARCHITECTURAL }}
            className="text-sm sm:text-base text-ivory-200/85 font-sans font-normal max-w-lg leading-relaxed"
          >
            Celebrations, weddings and stays in Gomti Nagar, Lucknow.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE_ARCHITECTURAL }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4"
          >
            <Link
              href="/contact#enquire"
              className="group inline-flex items-center justify-center px-7 py-3.5 bg-ivory-50 text-charcoal-900 text-xs uppercase tracking-editorial font-semibold rounded-xs hover:bg-ivory-100 transition-colors shadow-md"
              style={{ color: "#141211", backgroundColor: "#FAF7F2" }}
            >
              Check Dates & Pricing{" "}
              <ArrowRight
                className="ml-2 w-3.5 h-3.5 text-charcoal-900 transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: "#141211" }}
              />
            </Link>

            <Link
              href="/the-halls"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-ivory-50/30 text-ivory-100 text-xs uppercase tracking-editorial font-medium rounded-xs hover:bg-ivory-50/10 transition-colors"
            >
              Explore The Halls
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
