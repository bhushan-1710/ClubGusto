import React from "react";
import Image from "next/image";
import { FadeUp, ImageReveal } from "@/components/ui/Motion";

export const StayExperience: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-ivory-50 text-charcoal-800">
      <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Pure Editorial Room Photograph (~58% width) with gentle entrance */}
          <div className="lg:col-span-7 relative">
            <ImageReveal scaleStart={1.015}>
              <div className="relative h-[340px] sm:h-[480px] lg:h-[520px] w-full rounded-xs overflow-hidden">
                <Image
                  src="/images/club-gusto/stay/bridal-dressing-room.webp"
                  alt="On-property guest room preparation at Club Gusto"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </ImageReveal>
            <p className="text-[11px] text-charcoal-500 font-sans mt-2">
              Guest room preparation · M I Rustle Court
            </p>
          </div>

          {/* Right: Humanized Proximity Story (~35% width with breathing room) */}
          <div className="lg:col-span-5 space-y-6 max-w-md">
            <FadeUp>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal-900 font-normal leading-tight text-balance-editorial">
                Keep everyone close.
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed">
                Nine on-property guest rooms keep family and visiting guests close to the celebration, without another journey across Lucknow after the evening ends.
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="pt-2 border-t border-charcoal-800/10">
                <p className="text-xs text-charcoal-500 font-sans">
                  9 rooms on property · Elevator connected to both halls
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};
