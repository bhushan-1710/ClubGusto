import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { VENUE_DATA } from "@/data/venueData";
import { QuickEnquiry } from "@/components/home/QuickEnquiry";
import { LatticeDivider } from "@/components/layout/LatticeDivider";

export const metadata = {
  title: "Contact & Check Dates | Club Gusto · Gomti Nagar Extension, Lucknow",
  description:
    "Schedule a physical venue walkthrough, check date availability, or request customized package pricing for Club Gusto banquet halls and 9 guest rooms on Amar Shaheed Path, Lucknow.",
};

export default function ContactPage() {
  const faqs = [
    {
      q: "What are the function slot timings at Club Gusto?",
      a: "We accommodate both Day and Evening celebration slots: Day functions generally run between 10:00 AM and 04:00 PM (ideal for Mehendi, Haldi, corporate conferences). Evening functions commence from 06:30 PM onwards, accommodating traditional Baraat, Pheras, Sangeet, and Nikkah celebrations.",
    },
    {
      q: "Can out-of-station family members stay on-property during the wedding?",
      a: "Yes. Club Gusto features 9 private air-conditioned guest rooms situated right on the property at M I Rustle Court. Out-of-town relatives and elders have direct elevator connectivity to both event halls.",
    },
    {
      q: "How does in-house catering work?",
      a: "Club Gusto provides comprehensive in-house catering with dedicated preparation for vegetarian and non-vegetarian events. Menus and live counters are customized during initial consultations.",
    },
    {
      q: "What is the vehicle parking capacity?",
      a: "The venue features dedicated on-site parking for approximately 40 vehicles on Amar Shaheed Path with direct gate access.",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-ivory-50 text-charcoal-800">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-charcoal-900 text-ivory-50 border-b border-charcoal-800">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-editorial text-brass font-semibold">
            Direct Inquiries & Walkthroughs
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal">
            Connect with Club Gusto
          </h1>
          <p className="text-sm sm:text-base text-charcoal-400 font-sans max-w-2xl mx-auto leading-relaxed">
            Schedule an on-site property walkthrough in Gomti Nagar Extension or check event date availability directly with our management desk.
          </p>
        </div>
      </section>

      {/* Main Enquiry Form */}
      <QuickEnquiry />

      {/* Location Details & FAQ */}
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-ivory-100 p-8 rounded-sm border border-charcoal-800/10 space-y-3">
            <MapPin className="w-5 h-5 text-brass" />
            <h3 className="text-lg font-serif text-charcoal-900">Physical Address</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 font-sans leading-relaxed">
              {VENUE_DATA.location.addressLine1},<br />
              {VENUE_DATA.location.sector}, {VENUE_DATA.location.area},<br />
              {VENUE_DATA.location.city}, {VENUE_DATA.location.state} — {VENUE_DATA.location.postalCode}
            </p>
            <p className="text-xs text-brass-dark font-medium pt-2">
              Landmark: Amar Shaheed Path Corridor
            </p>
          </div>

          <div className="bg-ivory-100 p-8 rounded-sm border border-charcoal-800/10 space-y-3">
            <Phone className="w-5 h-5 text-brass" />
            <h3 className="text-lg font-serif text-charcoal-900">Direct Phone Desk</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 font-sans">
              Primary: <strong className="text-charcoal-900">{VENUE_DATA.contact.primaryPhone}</strong>
            </p>
            <p className="text-xs sm:text-sm text-charcoal-600 font-sans">
              Additional: {VENUE_DATA.contact.secondaryPhone}
            </p>
            <p className="text-xs text-[#25D366] font-medium pt-2">
              WhatsApp: {VENUE_DATA.contact.whatsappDisplay}
            </p>
          </div>

          <div className="bg-ivory-100 p-8 rounded-sm border border-charcoal-800/10 space-y-3">
            <Clock className="w-5 h-5 text-brass" />
            <h3 className="text-lg font-serif text-charcoal-900">Visiting Hours</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 font-sans leading-relaxed">
              Management Desk & Walkthroughs:
              <br />
              <strong className="text-charcoal-900">11:00 AM – 10:00 PM Daily</strong>
            </p>
            <p className="text-xs text-charcoal-500 pt-2">
              Email: {VENUE_DATA.contact.email}
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div id="faq" className="max-w-3xl mx-auto space-y-8 pt-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-editorial text-brass font-semibold">
              Host Clarity
            </span>
            <h2 className="text-3xl font-serif text-charcoal-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-ivory-100/90 border border-charcoal-800/10 p-6 rounded-sm space-y-2 shadow-sm"
              >
                <h4 className="text-base font-serif font-medium text-charcoal-900">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-600 font-sans leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        <LatticeDivider variant="ornate" />
      </div>
    </div>
  );
}
