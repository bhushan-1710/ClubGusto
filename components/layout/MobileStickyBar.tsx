"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { VENUE_DATA } from "@/data/venueData";

export const MobileStickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past initial hero area (150px)
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-charcoal-900/95 backdrop-blur-md border-t border-charcoal-700 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] px-3 sm:hidden shadow-2xl animate-in slide-in-from-bottom-2 duration-300">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Action */}
        <a
          href={`tel:${VENUE_DATA.contact.primaryPhone.replace(/\s+/g, "")}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 bg-charcoal-800 border border-charcoal-700 rounded text-ivory-100 active:scale-95 transition-transform"
          aria-label={`Call Club Gusto at ${VENUE_DATA.contact.primaryPhone}`}
        >
          <Phone className="w-4 h-4 text-brass mb-0.5" />
          <span className="text-[10px] uppercase tracking-editorial font-medium">Call</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={`https://wa.me/${VENUE_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
            "Hello Club Gusto, I would like to check date availability and package pricing."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 bg-[#25D366]/15 border border-[#25D366]/40 rounded text-ivory-50 active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span className="text-[10px] uppercase tracking-editorial font-medium text-[#25D366]">WhatsApp</span>
        </a>

        {/* Check Dates & Pricing */}
        <Link
          href="/contact#enquire"
          className="flex flex-col items-center justify-center py-1.5 px-1 bg-brass text-charcoal-900 rounded font-medium active:scale-95 transition-transform shadow-sm"
          aria-label="Check Dates and Pricing"
        >
          <Calendar className="w-4 h-4 text-charcoal-900 mb-0.5" />
          <span className="text-[10px] uppercase tracking-editorial font-bold">Check Dates</span>
        </Link>
      </div>
    </div>
  );
};
