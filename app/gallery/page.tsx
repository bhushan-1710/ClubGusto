import React from "react";
import { CuratedGallery } from "@/components/home/CuratedGallery";
import { LatticeDivider } from "@/components/layout/LatticeDivider";

export const metadata = {
  title: "Photo Gallery | Club Gusto · Banquet & Events Venue Lucknow",
  description:
    "Explore authentic photography of Club Gusto's Grand Banquet Hall, Intimate Banquet Hall, on-property guest rooms, decor stages, and dining in Gomti Nagar Extension.",
};

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-20 bg-ivory-50 text-charcoal-800">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-charcoal-900 text-ivory-50 border-b border-charcoal-800">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-editorial text-brass font-semibold">
            Visual Overview
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal">
            Venue Photography
          </h1>
          <p className="text-sm sm:text-base text-charcoal-400 font-sans max-w-2xl mx-auto leading-relaxed">
            Banquet configurations, ceremony stage styling, on-property guest rooms, and dining at Club Gusto.
          </p>
        </div>
      </section>

      {/* Gallery Component */}
      <CuratedGallery />
    </div>
  );
}
