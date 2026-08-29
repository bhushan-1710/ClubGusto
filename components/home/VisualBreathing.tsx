import React from "react";
import Image from "next/image";
import { ImageReveal } from "@/components/ui/Motion";

export const VisualBreathing: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-ivory-50">
      <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16">
        <ImageReveal duration={1.1}>
          <div className="relative h-[360px] sm:h-[500px] lg:h-[620px] w-full rounded-xs overflow-hidden">
            <Image
              src="/images/club-gusto/halls/grand-hall-architecture.webp"
              alt="The Grand Banquet Hall architecture and chandeliers at Club Gusto"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </ImageReveal>
        <p className="text-[11px] text-charcoal-500 font-sans mt-3 text-right">
          The Grand Banquet Hall · Gomti Nagar Extension
        </p>
      </div>
    </section>
  );
};
