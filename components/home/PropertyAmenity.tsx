import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { VENUE_DATA } from "@/data/venueData";
import { FadeUp, ImageReveal } from "@/components/ui/Motion";

export const PropertyAmenity: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-ivory-100/70 text-charcoal-800 border-t border-charcoal-800/10">
      <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Large Architectural Property Photograph (~58% width) */}
          <div className="lg:col-span-7 relative">
            <ImageReveal>
              <div className="relative h-[340px] sm:h-[480px] lg:h-[540px] w-full rounded-xs overflow-hidden">
                <Image
                  src="/images/club-gusto/property/property-exterior-terrace.webp"
                  alt="M I Rustle Court property setting on Amar Shaheed Path"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </ImageReveal>
            <p className="text-[11px] text-charcoal-500 font-sans mt-2">
              The Property & Terrace · M I Rustle Court, Amar Shaheed Path
            </p>
          </div>

          {/* Right: Architectural Setting Narrative (~35% width with breathing room) */}
          <div className="lg:col-span-5 space-y-6 max-w-md">
            <FadeUp>
              <div className="space-y-2">
                <p className="text-[11px] uppercase tracking-editorial text-charcoal-500 font-medium">
                  The Setting
                </p>
                <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 font-normal leading-tight">
                  M I Rustle Court
                </h2>
                <p className="text-xs text-charcoal-500 font-sans">
                  Sector 6 · Gomti Nagar Extension, Lucknow
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed">
                Set within M I Rustle Court on Amar Shaheed Path, Club Gusto brings the banquet halls, on-property guest rooms, and celebration facilities together at one address in Gomti Nagar Extension.
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="space-y-1.5 pt-2 border-t border-charcoal-800/10 text-xs text-charcoal-500 font-sans leading-relaxed">
                <p>Plot No. 467, Amar Shaheed Path, Sector 6, Gomti Nagar Extension, Lucknow 226010</p>
                <p>Approx. 40-vehicle on-site parking · ~15 mins from CCS Airport via Shaheed Path</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.35}>
              <div className="pt-2">
                <a
                  href={VENUE_DATA.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs uppercase tracking-editorial text-charcoal-800 hover:text-charcoal-950 font-semibold transition-colors"
                >
                  View Location <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};
