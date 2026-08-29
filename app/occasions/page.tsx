import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { VENUE_DATA } from "@/data/venueData";
import { Button } from "@/components/ui/Button";
import { LatticeDivider } from "@/components/layout/LatticeDivider";

export const metadata = {
  title: "Occasions & Ceremonies | Club Gusto · Lucknow",
  description:
    "Explore bespoke celebrations at Club Gusto: Traditional Hindu Weddings, Nikkah & Valima, Sangeet & Mehendi, Mata Ki Chowki, and Corporate Conclaves in Gomti Nagar Extension.",
};

export default function OccasionsPage() {
  return (
    <div className="pt-24 pb-20 bg-ivory-50 text-charcoal-800">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-charcoal-900 text-ivory-50 border-b border-charcoal-800">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-editorial text-brass font-semibold">
            Celebration Roster
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal">
            Every Occasion, Honored
          </h1>
          <p className="text-sm sm:text-base text-charcoal-400 font-sans max-w-2xl mx-auto leading-relaxed">
            From traditional evening wedding ceremonies to dignified Nikkah feasts, musical sangeets, and corporate assemblies in Gomti Nagar Extension.
          </p>
        </div>
      </section>

      {/* Occasions List */}
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {VENUE_DATA.occasions.map((occ, idx) => (
          <section
            key={occ.id}
            id={occ.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className={`lg:col-span-6 relative ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="relative h-[360px] sm:h-[440px] w-full rounded-sm overflow-hidden border border-charcoal-800/10 shadow-lg">
                <Image
                  src={occ.image}
                  alt={occ.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 bg-charcoal-900/90 backdrop-blur-sm border border-brass/40 px-3 py-1.5 rounded text-ivory-50 text-xs tracking-editorial uppercase">
                  {occ.traditions}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-editorial text-brass font-semibold">
                  {occ.subtitle}
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 font-normal">
                  {occ.title}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed">
                {occ.description}
              </p>

              <div className="p-4 bg-ivory-100 rounded border border-charcoal-800/10 space-y-2">
                <p className="text-xs uppercase tracking-editorial text-charcoal-500 font-semibold">
                  Recommended Layout & Capabilities:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {occ.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-ivory-50 border border-charcoal-800/10 text-charcoal-800 text-xs rounded font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-charcoal-500 pt-1">
                  Suggested Space: <strong className="text-charcoal-900">{occ.recommendedHall}</strong>
                </p>
              </div>

              <div className="pt-2 flex items-center space-x-4">
                <Button
                  href={`/contact?occasion=${occ.id}#enquire`}
                  variant="primary"
                  size="md"
                >
                  Plan {occ.title}
                </Button>
                <Button
                  href="/the-halls"
                  variant="outline"
                  size="md"
                >
                  Explore Halls
                </Button>
              </div>
            </div>
          </section>
        ))}

        <LatticeDivider variant="ornate" />
      </div>
    </div>
  );
}
