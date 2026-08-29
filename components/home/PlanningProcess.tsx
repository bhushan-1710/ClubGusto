import React from "react";
import { CheckCircle2 } from "lucide-react";
import { VENUE_DATA } from "@/data/venueData";
import { LatticeDivider } from "@/components/layout/LatticeDivider";

export const PlanningProcess: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-ivory-100/60 text-charcoal-800 border-t border-charcoal-800/10">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-xs uppercase tracking-editorial text-brass font-semibold">
            The Hosting Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal-900 font-normal">
            How We Plan Together
          </h2>
          <p className="text-sm text-charcoal-600 font-sans leading-relaxed">
            A structured, unhurried planning process so you enjoy your celebration without logistical stress.
          </p>
        </div>

        {/* 3 Steps in timeline flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VENUE_DATA.planningProcess.map((step, idx) => (
            <div
              key={step.step}
              className="bg-ivory-50 border border-charcoal-800/10 p-8 rounded-sm flex flex-col justify-between shadow-sm space-y-6 group hover:border-brass/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-charcoal-800/10 pb-4">
                  <span className="font-serif text-3xl text-brass font-light">
                    {step.step}
                  </span>
                  <span className="text-[10px] uppercase tracking-editorial text-charcoal-400 font-medium">
                    Phase 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-charcoal-900 group-hover:text-brass transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-600 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-2 flex items-center text-xs text-brass font-medium tracking-editorial uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                <span>Dedicated Floor Support</span>
              </div>
            </div>
          ))}
        </div>

        <LatticeDivider variant="subtle" />
      </div>
    </section>
  );
};
