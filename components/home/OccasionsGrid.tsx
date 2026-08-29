import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp, ImageReveal } from "@/components/ui/Motion";

export const OccasionsGrid: React.FC = () => {
  return (
    <section id="occasions" className="py-20 sm:py-28 lg:py-32 bg-ivory-50 text-charcoal-800 border-t border-charcoal-800/10">
      <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16 space-y-20 sm:space-y-28">
        {/* Section Lead */}
        <FadeUp>
          <div className="max-w-xl space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal-900 font-normal leading-tight">
              Celebrations at Club Gusto
            </h2>
          </div>
        </FadeUp>

        {/* Asymmetrical Editorial Sequence — Unequal Visual Weights */}
        <div className="space-y-20 sm:space-y-28">
          {/* 1. Dominant Photographic Weight: Weddings & Receptions */}
          <div className="space-y-6">
            <ImageReveal>
              <div className="relative h-[360px] sm:h-[500px] lg:h-[560px] w-full rounded-xs overflow-hidden">
                <Image
                  src="/images/club-gusto/weddings/wedding-bride-ceremony.webp"
                  alt="Traditional wedding celebration at Club Gusto"
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
            </ImageReveal>

            <FadeUp delay={0.1}>
              <div className="max-w-2xl space-y-2 pt-1">
                <h3 className="text-2xl sm:text-3xl font-serif text-charcoal-900 font-normal">
                  Weddings & Receptions
                </h3>
                <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed">
                  Weddings, receptions and larger family celebrations, with the space to bring everyone together.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* 2. Asymmetric Offset Pairing: Nikkah & Valima + Sangeet & Mehendi */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start pt-4">
            {/* Nikkah & Valima (~42% column) */}
            <div className="md:col-span-5 space-y-4">
              <ImageReveal xOffset={-10}>
                <div className="relative h-[300px] sm:h-[400px] rounded-xs overflow-hidden">
                  <Image
                    src="/images/club-gusto/weddings/wedding-bride-portrait.webp"
                    alt="Dignified banquet hall setting for Nikkah and Valima feasts"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                </div>
              </ImageReveal>
              <FadeUp delay={0.1}>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-serif text-charcoal-900 font-normal">
                    Nikkah & Valima
                  </h3>
                  <p className="text-sm text-charcoal-600 font-sans leading-relaxed">
                    From the ceremony itself to the gathering that follows, with space for family and guests to stay close.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Sangeet & Mehendi (~58% column) */}
            <div className="md:col-span-7 space-y-4">
              <ImageReveal xOffset={10}>
                <div className="relative h-[300px] sm:h-[400px] rounded-xs overflow-hidden">
                  <Image
                    src="/images/club-gusto/weddings/wedding-stage-decor.webp"
                    alt="Decorated celebration stage for Sangeet, Mehendi, and musical evenings"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 58vw"
                  />
                </div>
              </ImageReveal>
              <FadeUp delay={0.15}>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-serif text-charcoal-900 font-normal">
                    Sangeet & Mehendi
                  </h3>
                  <p className="text-sm text-charcoal-600 font-sans leading-relaxed">
                    Smaller ceremonies, family rituals and evenings built around music, food and conversation.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* 3. Quiet Text Block: Corporate & Social Gatherings */}
          <FadeUp delay={0.1}>
            <div className="border-t border-charcoal-800/10 pt-8 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <div className="max-w-xl space-y-1.5">
                <h3 className="text-xl font-serif text-charcoal-900 font-normal">
                  Corporate & Social Gatherings
                </h3>
                <p className="text-sm text-charcoal-600 font-sans leading-relaxed">
                  A flexible setting for dinners, private gatherings and corporate occasions beyond the wedding calendar.
                </p>
              </div>
              <Link
                href="/the-halls"
                className="inline-flex items-center text-xs uppercase tracking-editorial text-charcoal-800 hover:text-charcoal-950 font-semibold transition-colors shrink-0 pt-2 md:pt-0"
              >
                View the halls <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};
