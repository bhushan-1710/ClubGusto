import React from "react";
import Image from "next/image";
import { BedDouble, Check, ShieldCheck, Clock, Users, ArrowRight } from "lucide-react";
import { VENUE_DATA } from "@/data/venueData";
import { Button } from "@/components/ui/Button";
import { LatticeDivider } from "@/components/layout/LatticeDivider";

export const metadata = {
  title: "On-Property Guest Rooms | Club Gusto · Lucknow",
  description:
    "9 well-appointed air-conditioned guest rooms situated right at M I Rustle Court, Club Gusto, Gomti Nagar Extension. Host out-of-station family without city transit delays.",
};

export default function StayPage() {
  return (
    <div className="pt-24 pb-20 bg-ivory-50 text-charcoal-800">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-charcoal-900 text-ivory-50 border-b border-charcoal-800">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-editorial text-brass font-semibold">
            On-Property Accommodation
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal">
            Stay With Your Guests
          </h1>
          <p className="text-sm sm:text-base text-charcoal-400 font-sans max-w-2xl mx-auto leading-relaxed">
            Nine air-conditioned guest rooms located directly within the property — allowing immediate elevator access to both banquet halls and zero midnight travel across Lucknow.
          </p>
        </div>
      </section>

      {/* Main Breakdown */}
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative h-[400px] sm:h-[480px] w-full rounded-sm overflow-hidden border border-charcoal-800/10 shadow-lg">
              <Image
                src={VENUE_DATA.stay.image}
                alt="Club Gusto On-Property Guest Rooms"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-charcoal-900/90 backdrop-blur-md border border-brass/30 text-ivory-50 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-editorial text-brass font-medium">
                    Room Inventory
                  </p>
                  <p className="text-lg font-serif">9 Air-Conditioned Rooms</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-brass font-serif">On-Property</p>
                  <p className="text-[10px] text-charcoal-400">At M I Rustle Court</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-editorial text-brass font-semibold">
                Thoughtful Hospitality
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 font-normal leading-[1.15]">
                Comfort, Privacy & Immediate Proximity
              </h2>
            </div>

            <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed">
              When relatives travel from Delhi, Kanpur, Varanasi, or overseas for your family celebration, managing external hotel bookings and coordinating morning pickups adds unnecessary anxiety.
            </p>
            <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed">
              At Club Gusto, your immediate family and wedding VIPs can wake up, enjoy breakfast, dress in peace, and take the elevator straight down into the celebration hall.
            </p>

            <div className="space-y-3 pt-2">
              <p className="text-xs uppercase tracking-editorial text-charcoal-700 font-semibold">
                Lodging Inclusions:
              </p>
              {VENUE_DATA.stay.highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-brass/15 text-brass mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-charcoal-700 font-medium font-sans">
                    {h}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button href="/contact?subject=rooms#enquire" variant="primary" size="md">
                Reserve Room Block With Event
              </Button>
            </div>
          </div>
        </div>

        <LatticeDivider variant="ornate" />
      </div>
    </div>
  );
}
