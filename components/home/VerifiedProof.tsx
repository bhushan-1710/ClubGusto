import React from "react";
import { Quote } from "lucide-react";
import { VENUE_DATA } from "@/data/venueData";

export const VerifiedProof: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-ivory-50 text-charcoal-800 border-t border-charcoal-800/10">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-xs uppercase tracking-editorial text-brass font-semibold">
            Host Reflections
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal-900 font-normal">
            Notes from Past Celebrations
          </h2>
          <p className="text-sm text-charcoal-600 font-sans leading-relaxed">
            Unfiltered sentiments shared by families who held their milestone celebrations at Club Gusto in Gomti Nagar Extension.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VENUE_DATA.verifiedProof.map((item, idx) => (
            <div
              key={idx}
              className="bg-ivory-100/80 border border-charcoal-800/10 p-8 rounded-sm flex flex-col justify-between space-y-6 shadow-sm hover:border-brass/40 transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-brass/50" />
                <p className="text-sm text-charcoal-700 font-sans leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal-800/10 text-xs">
                <p className="font-serif font-bold text-charcoal-900">
                  {item.author}
                </p>
                <p className="text-brass-dark font-sans mt-0.5">
                  {item.event}
                </p>
                <p className="text-charcoal-400 font-sans mt-0.5 text-[10px]">
                  {item.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
