import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp, ImageReveal } from "@/components/ui/Motion";

export const CateringCraft: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-ivory-100/60 text-charcoal-800 border-t border-charcoal-800/10">
      <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Authentic dining photograph */}
          <div className="lg:col-span-7 relative">
            <ImageReveal>
              <div className="relative h-[320px] sm:h-[440px] w-full rounded-xs overflow-hidden">
                <Image
                  src="/images/club-gusto/catering/catering-banquet-dining.webp"
                  alt="In-house banquet dining setup at Club Gusto"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </ImageReveal>
            <p className="text-[11px] text-charcoal-500 font-sans mt-2">
              In-House Dining Setup · Multi-Cuisine Banquets
            </p>
          </div>

          {/* Right: Editorial statement */}
          <div className="lg:col-span-5 space-y-5">
            <FadeUp>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal-900 font-normal leading-tight">
                Made for the table.
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed">
                From family favorites to multi-cuisine banquet menus, catering is prepared on-site as part of the celebration itself. Our kitchen manages both vegetarian and non-vegetarian menus tailored to your guest count.
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="pt-2">
                <Link
                  href="/catering"
                  className="inline-flex items-center text-xs uppercase tracking-editorial text-charcoal-700 hover:text-charcoal-950 font-semibold transition-colors"
                >
                  Catering Details <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};
