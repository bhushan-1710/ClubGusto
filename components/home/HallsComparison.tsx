import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp, ImageReveal } from "@/components/ui/Motion";

export const HallsComparison: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-ivory-100/60 text-charcoal-800 border-t border-charcoal-800/10">
      <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16 space-y-24 sm:space-y-32">
        {/* Section Intro */}
        <FadeUp>
          <div className="max-w-xl space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal-900 font-normal leading-tight">
              Two halls. Two distinct scales of gathering.
            </h2>
          </div>
        </FadeUp>

        {/* 1. Grand Banquet Hall — Expansive Horizontal Spread with Left Settlement */}
        <div className="space-y-6">
          <ImageReveal xOffset={-14}>
            <div className="relative h-[360px] sm:h-[500px] lg:h-[580px] w-full rounded-xs overflow-hidden">
              <Image
                src="/images/club-gusto/halls/grand-hall-celebration.webp"
                alt="The Grand Banquet Hall at Club Gusto"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          </ImageReveal>

          <FadeUp delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline pt-2">
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-serif text-charcoal-900 font-normal">
                  The Grand Banquet Hall
                </h3>
                <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed">
                  For wedding receptions, Baraat assemblies, and grand Valima feasts. Column-free proportions, illuminated coffered chandeliers, and generous room for stage decor and large family gatherings.
                </p>
                <div className="pt-1">
                  <Link
                    href="/the-halls#grand-hall"
                    className="inline-flex items-center text-xs uppercase tracking-editorial text-charcoal-800 hover:text-charcoal-950 font-semibold transition-colors"
                  >
                    View Hall Specifications <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="md:col-span-5 flex items-baseline space-x-8 md:justify-end text-charcoal-800">
                <div>
                  <p className="text-2xl sm:text-3xl font-serif text-charcoal-900 font-semibold">~450</p>
                  <p className="text-[11px] uppercase tracking-editorial text-charcoal-500 mt-0.5">Seated</p>
                </div>
                <div className="h-8 w-[1px] bg-charcoal-800/15" />
                <div>
                  <p className="text-2xl sm:text-3xl font-serif text-charcoal-900 font-semibold">~700</p>
                  <p className="text-[11px] uppercase tracking-editorial text-charcoal-500 mt-0.5">Floating</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* 2. Intimate Banquet Hall — Asymmetric Offset Layout with Right Settlement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-10 border-t border-charcoal-800/10">
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <FadeUp>
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-serif text-charcoal-900 font-normal">
                  The Intimate Banquet Hall
                </h3>
                <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed">
                  For mehendi, sangeet, engagements and smaller family celebrations. Designed with warm lighting and geometric wall accents.
                </p>
              </div>

              <div className="flex items-baseline space-x-8 text-charcoal-800 pt-3">
                <div>
                  <p className="text-2xl sm:text-3xl font-serif text-charcoal-900 font-semibold">~180</p>
                  <p className="text-[11px] uppercase tracking-editorial text-charcoal-500 mt-0.5">Seated</p>
                </div>
                <div className="h-8 w-[1px] bg-charcoal-800/15" />
                <div>
                  <p className="text-2xl sm:text-3xl font-serif text-charcoal-900 font-semibold">~300</p>
                  <p className="text-[11px] uppercase tracking-editorial text-charcoal-500 mt-0.5">Floating</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/the-halls#intimate-hall"
                  className="inline-flex items-center text-xs uppercase tracking-editorial text-charcoal-800 hover:text-charcoal-950 font-semibold transition-colors"
                >
                  View Hall Specifications <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeUp>
          </div>

          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <ImageReveal xOffset={14}>
              <div className="relative h-[320px] sm:h-[440px] lg:h-[480px] w-full rounded-xs overflow-hidden">
                <Image
                  src="/images/club-gusto/halls/intimate-hall-ambiance.webp"
                  alt="The Intimate Banquet Hall at Club Gusto"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
