import React from "react";
import Image from "next/image";
import { FadeUp, ImageReveal } from "@/components/ui/Motion";

export const IntroStory: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-ivory-50 text-charcoal-800">
      <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text Column — Restrained Editorial Typography */}
          <div className="lg:col-span-5 space-y-6">
            <FadeUp>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-charcoal-900 font-normal leading-[1.25] text-balance-editorial">
                A place where family stays together, from first ritual to the morning after.
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed">
                Located at M I Rustle Court on Amar Shaheed Path, Club Gusto brings your celebration under one roof. Two banquet halls, nine on-property guest rooms, and in-house catering allow visiting family and elders to experience the milestone together without coordinating across Lucknow.
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <p className="text-xs text-charcoal-500 font-sans pt-2 border-t border-charcoal-800/10">
                2 banquet halls · 9 on-property guest rooms · ~40 on-site parking
              </p>
            </FadeUp>
          </div>

          {/* Image Column — Natural Editorial Photograph with subtle entrance */}
          <div className="lg:col-span-7 relative">
            <ImageReveal>
              <div className="relative h-[320px] sm:h-[440px] lg:h-[480px] w-full rounded-xs overflow-hidden">
                <Image
                  src="/images/club-gusto/weddings/wedding-grand-entrance.webp"
                  alt="The Grand Entrance at M I Rustle Court, Club Gusto"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </ImageReveal>
            <p className="text-[11px] text-charcoal-500 font-sans mt-2">
              The Grand Entrance · M I Rustle Court, Sector 6
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
