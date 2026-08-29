import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroStory } from "@/components/home/IntroStory";
import { HallsComparison } from "@/components/home/HallsComparison";
import { StayExperience } from "@/components/home/StayExperience";
import { PropertyAmenity } from "@/components/home/PropertyAmenity";
import { OccasionsGrid } from "@/components/home/OccasionsGrid";
import { CateringCraft } from "@/components/home/CateringCraft";
import { VisualBreathing } from "@/components/home/VisualBreathing";
import { CuratedGallery } from "@/components/home/CuratedGallery";
import { QuickEnquiry } from "@/components/home/QuickEnquiry";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Arrival: One Address. Every Guest Hosted. */}
      <HeroSection />

      {/* 2. The Place: Family under one roof */}
      <IntroStory />

      {/* 3. The Spaces: The Two Halls (Editorial Spread) */}
      <HallsComparison />

      {/* 4. The Stay: Keep everyone close */}
      <StayExperience />

      {/* 5. The Setting: M I Rustle Court, Gomti Nagar Extension */}
      <PropertyAmenity />

      {/* 6. Celebrations: Asymmetrical Occasions */}
      <OccasionsGrid />

      {/* 7. The Table: Made for the table */}
      <CateringCraft />

      {/* 8. Visual Silence: Pure Photography Moment */}
      <VisualBreathing />

      {/* 9. Atmosphere: Curated Photo Sequence */}
      <CuratedGallery />

      {/* 10. Direct Inquiries: Check Dates & Pricing */}
      <QuickEnquiry />
    </div>
  );
}
