"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/galleryData";
import { Lightbox } from "@/components/ui/Lightbox";
import { FadeUp, ImageReveal } from "@/components/ui/Motion";

export const CuratedGallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  // Curated 5 images with rhythmic variations
  const featuredSequence = GALLERY_ITEMS.slice(0, 5);

  return (
    <section id="gallery" className="py-20 sm:py-28 lg:py-32 bg-ivory-50 text-charcoal-800 border-t border-charcoal-800/10">
      <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        {/* Section Header */}
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal-900 font-normal leading-tight">
              Atmosphere & detail.
            </h2>

            <Link
              href="/gallery"
              className="inline-flex items-center text-xs uppercase tracking-editorial text-charcoal-700 hover:text-charcoal-950 font-semibold transition-colors group"
            >
              All Photographs{" "}
              <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeUp>

        {/* Editorial Photo Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Large Spread */}
          <div className="md:col-span-8">
            <ImageReveal>
              <div
                onClick={() => openLightbox(0)}
                className="relative h-[360px] sm:h-[480px] rounded-xs overflow-hidden cursor-pointer group"
              >
                <Image
                  src={featuredSequence[0].src}
                  alt={featuredSequence[0].title}
                  fill
                  className="object-cover group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
            </ImageReveal>
          </div>

          {/* Portrait Companion */}
          <div className="md:col-span-4">
            <ImageReveal delay={0.1}>
              <div
                onClick={() => openLightbox(1)}
                className="relative h-[360px] sm:h-[480px] rounded-xs overflow-hidden cursor-pointer group"
              >
                <Image
                  src={featuredSequence[1].src}
                  alt={featuredSequence[1].title}
                  fill
                  className="object-cover group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </ImageReveal>
          </div>

          {/* 3 Balanced Landscape Moments */}
          {featuredSequence.slice(2, 5).map((img, idx) => (
            <div key={img.id} className="md:col-span-4">
              <ImageReveal delay={0.1 + idx * 0.08}>
                <div
                  onClick={() => openLightbox(idx + 2)}
                  className="relative h-[260px] sm:h-[340px] rounded-xs overflow-hidden cursor-pointer group"
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </ImageReveal>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={featuredSequence}
        currentIndex={activeImageIndex}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setActiveImageIndex}
      />
    </section>
  );
};
