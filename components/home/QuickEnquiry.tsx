"use client";

import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import { VENUE_DATA } from "@/data/venueData";
import { FadeUp } from "@/components/ui/Motion";

export const QuickEnquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    guestCount: "300-500",
    occasion: "wedding",
    hallPreference: "grand-hall",
    needsRooms: "yes",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const occasionLabels: Record<string, string> = {
    wedding: "Wedding & Reception",
    nikkah: "Nikkah & Valima",
    "pre-wedding": "Sangeet, Mehendi & Ring Ceremony",
    social: "Anniversary or Family Celebration",
    corporate: "Corporate Conclave / Gala",
  };

  const roomsLabels: Record<string, string> = {
    yes: "Yes (9 On-Property Rooms)",
    no: "Halls & Catering only",
    undecided: "To be determined",
  };

  const generateWhatsAppUrl = () => {
    const eventName = occasionLabels[formData.occasion] || formData.occasion;
    const roomsText = roomsLabels[formData.needsRooms] || formData.needsRooms;

    const text = encodeURIComponent(
      `Hello Club Gusto, I would like to check dates & package pricing:\n\n` +
        `• Name: ${formData.name || "Interested Host"}\n` +
        `• Event: ${eventName}\n` +
        `• Target Date: ${formData.eventDate || "To be discussed"}\n` +
        `• Estimated Guests: ${formData.guestCount} Guests\n` +
        `• Need On-Property Rooms: ${roomsText}\n` +
        (formData.notes ? `• Notes: ${formData.notes}\n` : "") +
        `\nPlease let me know date availability and schedule a walkthrough.`
    );
    return `https://wa.me/${VENUE_DATA.contact.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="enquire" className="py-24 sm:py-36 bg-ivory-100 text-charcoal-800 border-t border-charcoal-800/10">
      <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Quiet Editorial Invitation & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <FadeUp>
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-editorial text-brass font-semibold">
                  Direct Contact
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif text-charcoal-900 font-normal leading-tight">
                  Plan your date with us.
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-sm sm:text-base text-charcoal-600 font-sans leading-relaxed">
                Whether you are scheduling an initial property walkthrough or verifying date availability for a milestone celebration, we are available daily from 11:00 AM to 10:00 PM.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="space-y-4 pt-4 border-t border-charcoal-800/10 text-xs text-charcoal-700">
                <div>
                  <p className="text-[10px] uppercase tracking-editorial text-charcoal-500">Primary Desk & WhatsApp</p>
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-xl text-charcoal-900 hover:text-brass transition-colors mt-0.5 inline-block"
                  >
                    {VENUE_DATA.contact.primaryPhone}
                  </a>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-editorial text-charcoal-500">Additional Line</p>
                  <p className="font-serif text-lg text-charcoal-800 mt-0.5">{VENUE_DATA.contact.secondaryPhone}</p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-editorial text-charcoal-500">Venue Address</p>
                  <p className="font-sans text-xs text-charcoal-600 mt-0.5 leading-relaxed">
                    {VENUE_DATA.location.addressLine1}, {VENUE_DATA.location.sector}, Lucknow
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Clean, Uncluttered Form */}
          <div className="lg:col-span-7 bg-ivory-50 p-8 sm:p-12 rounded-sm border border-charcoal-800/10 shadow-sm">
            <FadeUp delay={0.15}>
              {submitted ? (
                <div className="py-12 text-center space-y-5">
                  <h3 className="text-2xl font-serif text-charcoal-900 font-normal">
                    Thank you for reaching out.
                  </h3>
                  <p className="text-sm text-charcoal-600 font-sans max-w-md mx-auto leading-relaxed">
                    Your inquiry details have been noted. You may also connect with our management desk immediately on WhatsApp.
                  </p>
                  <div className="pt-2">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-[#25D366] text-white text-xs uppercase tracking-editorial font-semibold rounded-xs hover:bg-[#1EBE5D] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Open WhatsApp Chat Now
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase tracking-editorial text-charcoal-600 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alok Verma"
                        className="w-full px-4 py-3 bg-ivory-100 border border-charcoal-800/15 rounded-xs text-sm text-charcoal-900 focus:outline-none focus:border-brass transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase tracking-editorial text-charcoal-600 font-medium">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-ivory-100 border border-charcoal-800/15 rounded-xs text-sm text-charcoal-900 focus:outline-none focus:border-brass transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase tracking-editorial text-charcoal-600 font-medium">
                        Occasion
                      </label>
                      <select
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        className="w-full px-4 py-3 bg-ivory-100 border border-charcoal-800/15 rounded-xs text-sm text-charcoal-900 focus:outline-none focus:border-brass transition-colors"
                      >
                        <option value="wedding">Wedding & Reception</option>
                        <option value="nikkah">Nikkah & Valima</option>
                        <option value="pre-wedding">Sangeet, Mehendi & Ring Ceremony</option>
                        <option value="social">Anniversary or Family Celebration</option>
                        <option value="corporate">Corporate Conclave / Gala</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase tracking-editorial text-charcoal-600 font-medium">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-3 bg-ivory-100 border border-charcoal-800/15 rounded-xs text-sm text-charcoal-900 focus:outline-none focus:border-brass transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase tracking-editorial text-charcoal-600 font-medium">
                        Estimated Guests
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full px-4 py-3 bg-ivory-100 border border-charcoal-800/15 rounded-xs text-sm text-charcoal-900 focus:outline-none focus:border-brass transition-colors"
                      >
                        <option value="100-250">100 – 250 Guests</option>
                        <option value="250-450">250 – 450 Guests</option>
                        <option value="450-700">450 – 700 Guests</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase tracking-editorial text-charcoal-600 font-medium">
                        Include 9 On-Property Rooms?
                      </label>
                      <select
                        value={formData.needsRooms}
                        onChange={(e) => setFormData({ ...formData, needsRooms: e.target.value })}
                        className="w-full px-4 py-3 bg-ivory-100 border border-charcoal-800/15 rounded-xs text-sm text-charcoal-900 focus:outline-none focus:border-brass transition-colors"
                      >
                        <option value="yes">Yes, include guest rooms</option>
                        <option value="no">Halls & Catering only</option>
                        <option value="undecided">To be determined</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-charcoal-900 text-ivory-50 text-xs uppercase tracking-editorial font-semibold rounded-xs hover:bg-charcoal-800 transition-colors text-center shadow-sm"
                      style={{ color: "#FAF7F2", backgroundColor: "#141211" }}
                    >
                      Submit Inquiry
                    </button>
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-ivory-200 border border-charcoal-800/10 text-charcoal-800 text-xs uppercase tracking-editorial font-semibold rounded-xs hover:bg-ivory-300 transition-colors text-center inline-flex items-center justify-center"
                    >
                      <MessageSquare className="w-3.5 h-3.5 mr-2 text-[#25D366]" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};
