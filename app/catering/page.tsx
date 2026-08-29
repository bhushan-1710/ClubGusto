import React from "react";
import Image from "next/image";
import { Check, ChefHat } from "lucide-react";
import { VENUE_DATA } from "@/data/venueData";
import { Button } from "@/components/ui/Button";
import { LatticeDivider } from "@/components/layout/LatticeDivider";

export const metadata = {
  title: "In-House Catering | Club Gusto · Lucknow",
  description:
    "Experience multi-cuisine banquets, fresh on-site live preparation, and personalized vegetarian & non-vegetarian event menus at Club Gusto, Gomti Nagar Extension.",
};

export default function CateringPage() {
  const menuCategories = [
    {
      title: "Regional & North Indian Specialities",
      items: ["Freshly prepared Dum Biryanis & Pulaos", "Rich Paneer & Dal preparations", "Tandoori breads & fresh rotis", "Traditional desserts & sweet selections"],
    },
    {
      title: "Interactive Live Counters",
      items: ["Fresh Chaat & street snack stations", "Live Tandoor & appetizer stations", "Continental live pasta & snack stations", "Beverage & mocktail setups"],
    },
    {
      title: "Vegetarian & Dietary Accommodations",
      items: ["Dedicated separate preparation arrangements", "Specialized Jain menu options without onion/garlic on request", "Seasonal fresh salads & accompaniments", "Customized festive menus for all traditions"],
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-ivory-50 text-charcoal-800">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-charcoal-900 text-ivory-50 border-b border-charcoal-800">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-editorial text-brass font-semibold">
            In-House Dining
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal">
            In-House Multi-Cuisine Catering
          </h1>
          <p className="text-sm sm:text-base text-charcoal-400 font-sans max-w-2xl mx-auto leading-relaxed">
            Every celebration menu is prepared in-house under strict quality standards, tailored for your guests and rituals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-900 font-normal">
              Tailored Menus for Every Celebration
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed">
              At Club Gusto, we provide comprehensive in-house catering so you never have to coordinate external food vendors. Our kitchen team curates menus tailored to your guest profile, tradition, and event style.
            </p>
            <div className="p-5 bg-ivory-100 border border-charcoal-800/10 rounded-sm space-y-2">
              <p className="text-xs uppercase tracking-editorial text-charcoal-500 font-semibold">
                Custom Menu Consultation:
              </p>
              <p className="text-xs sm:text-sm text-charcoal-600 font-sans leading-relaxed">
                We provide custom package estimates based on your preferred dishes, live counters, and guest scale.
              </p>
            </div>
            <Button href="/contact?subject=catering#enquire" variant="primary" size="md">
              Request Menu Consultation & Quote
            </Button>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[440px] w-full rounded-sm overflow-hidden border border-charcoal-800/10 shadow-lg">
              <Image
                src="/images/club-gusto/catering/catering-banquet-dining.webp"
                alt="In-House Catering Presentation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Menu Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-ivory-100/80 border border-charcoal-800/10 p-7 rounded-sm space-y-4 shadow-sm"
            >
              <h3 className="text-xl font-serif text-charcoal-900 border-b border-charcoal-800/10 pb-3">
                {cat.title}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-charcoal-700 font-sans">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-3.5 h-3.5 text-brass shrink-0 mt-1 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <LatticeDivider variant="ornate" />
      </div>
    </div>
  );
}
