import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, CheckCircle2, ArrowRight } from "lucide-react";
import { VENUE_DATA } from "@/data/venueData";
import { Button } from "@/components/ui/Button";
import { LatticeDivider } from "@/components/layout/LatticeDivider";

export const metadata = {
  title: "The Banquet Halls | Club Gusto · Gomti Nagar Extension, Lucknow",
  description:
    "Explore the Grand Banquet Hall (up to 700 guests) and the Intimate Banquet Hall (up to 300 guests) at Club Gusto on Amar Shaheed Path, Lucknow.",
};

export default function HallsPage() {
  return (
    <div className="pt-24 pb-20 bg-ivory-50 text-charcoal-800">
      {/* Page Hero */}
      <section className="py-16 sm:py-24 bg-charcoal-900 text-ivory-50 border-b border-charcoal-800 relative">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-editorial text-brass font-semibold">
            Event Spaces
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal">
            The Two Banquet Halls
          </h1>
          <p className="text-sm sm:text-base text-charcoal-400 font-sans max-w-2xl mx-auto leading-relaxed">
            Two distinct banquet halls proportioned for grand celebrations and warm family ceremonies in Gomti Nagar Extension.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {VENUE_DATA.halls.map((hall, idx) => (
          <section
            key={hall.id}
            id={hall.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Block */}
            <div className={`lg:col-span-6 relative ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="relative h-[380px] sm:h-[480px] w-full rounded-sm overflow-hidden border border-charcoal-800/10 shadow-lg">
                <Image
                  src={hall.image}
                  alt={hall.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-charcoal-900/90 backdrop-blur-sm border border-brass/40 px-3 py-1.5 rounded text-ivory-50 text-xs tracking-editorial uppercase">
                  {hall.subtitle}
                </div>
              </div>
            </div>

            {/* Info Block */}
            <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-editorial text-brass font-semibold">
                  {hall.dimensions}
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 font-normal">
                  {hall.name}
                </h2>
                <p className="text-xs font-serif italic text-brass-dark">
                  {hall.tagline}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-ivory-100 rounded border border-charcoal-800/10">
                <div>
                  <p className="text-[10px] uppercase tracking-editorial text-charcoal-500">
                    Seated Setup
                  </p>
                  <p className="text-xl font-serif font-bold text-charcoal-900">
                    {hall.seatedCapacity} Guests
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-editorial text-charcoal-500">
                    Floating Capacity
                  </p>
                  <p className="text-xl font-serif font-bold text-brass-dark">
                    Up to {hall.floatingCapacity} Guests
                  </p>
                </div>
              </div>

              <p className="text-sm text-charcoal-600 font-sans leading-relaxed">
                {hall.description}
              </p>

              {/* Features List */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs uppercase tracking-editorial text-charcoal-700 font-semibold">
                  Hall Capabilities & Inclusions:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-700 font-sans">
                  {hall.features.map((feat, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brass shrink-0 mt-0.5 mr-2" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best For Tags */}
              <div className="pt-2">
                <p className="text-xs uppercase tracking-editorial text-charcoal-500 font-semibold mb-2">
                  Recommended For:
                </p>
                <div className="flex flex-wrap gap-2">
                  {hall.bestFor.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-ivory-100 border border-charcoal-800/10 text-charcoal-800 text-xs rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex items-center space-x-4">
                <Button
                  href={`/contact?hall=${hall.id}#enquire`}
                  variant="primary"
                  size="md"
                >
                  Check Date Availability
                </Button>
                <Button
                  href="/gallery"
                  variant="outline"
                  size="md"
                >
                  View Photo Gallery
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
