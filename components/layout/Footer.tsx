import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import { VENUE_DATA } from "@/data/venueData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-900 text-ivory-100 border-t border-charcoal-700">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Hospitality Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-charcoal-800">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-editorial text-brass font-medium">
              Gomti Nagar Extension · Lucknow
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-ivory-50 font-normal">
              Club Gusto
            </h2>
            <p className="text-sm text-charcoal-400 font-sans leading-relaxed max-w-md">
              Two banquet halls, 9 on-property guest rooms, in-house multi-cuisine catering, and dedicated on-site parking at M I Rustle Court, Amar Shaheed Path.
            </p>
            <div className="pt-2 flex items-center space-x-4 text-xs tracking-editorial text-ivory-200">
              <span className="flex items-center">
                <ShieldCheck className="w-4 h-4 text-brass mr-1.5" />
                Direct Venue Verification
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Exploration Links */}
            <div>
              <h3 className="text-xs uppercase tracking-editorial text-brass font-semibold mb-4">
                The Venue
              </h3>
              <ul className="space-y-2.5 text-xs text-charcoal-300">
                <li>
                  <Link href="/the-halls" className="hover:text-ivory-50 transition-colors">
                    Grand Banquet Hall
                  </Link>
                </li>
                <li>
                  <Link href="/the-halls" className="hover:text-ivory-50 transition-colors">
                    Intimate Banquet Hall
                  </Link>
                </li>
                <li>
                  <Link href="/stay" className="hover:text-ivory-50 transition-colors">
                    9 On-Property Rooms
                  </Link>
                </li>
                <li>
                  <Link href="/catering" className="hover:text-ivory-50 transition-colors">
                    In-House Catering
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-ivory-50 transition-colors">
                    Photo Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Occasions */}
            <div>
              <h3 className="text-xs uppercase tracking-editorial text-brass font-semibold mb-4">
                Celebrations
              </h3>
              <ul className="space-y-2.5 text-xs text-charcoal-300">
                <li>
                  <Link href="/occasions#weddings" className="hover:text-ivory-50 transition-colors">
                    Weddings & Receptions
                  </Link>
                </li>
                <li>
                  <Link href="/occasions#nikkah" className="hover:text-ivory-50 transition-colors">
                    Nikkah & Valima
                  </Link>
                </li>
                <li>
                  <Link href="/occasions#pre-wedding" className="hover:text-ivory-50 transition-colors">
                    Sangeet & Mehendi
                  </Link>
                </li>
                <li>
                  <Link href="/occasions#social-corporate" className="hover:text-ivory-50 transition-colors">
                    Social & Devotional Functions
                  </Link>
                </li>
                <li>
                  <Link href="/occasions#social-corporate" className="hover:text-ivory-50 transition-colors">
                    Corporate Conclaves
                  </Link>
                </li>
              </ul>
            </div>

            {/* Event Timing Slots */}
            <div>
              <h3 className="text-xs uppercase tracking-editorial text-brass font-semibold mb-4 flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-brass" />
                Event Slots
              </h3>
              <div className="space-y-3 text-xs text-charcoal-300">
                <div>
                  <p className="text-ivory-100 font-medium">Day Functions:</p>
                  <p className="text-charcoal-400">10:00 AM – 04:00 PM</p>
                </div>
                <div>
                  <p className="text-ivory-100 font-medium">Evening Functions:</p>
                  <p className="text-charcoal-400">06:30 PM Onwards</p>
                </div>
                <div className="pt-1">
                  <p className="text-[11px] text-brass">Visiting Desk:</p>
                  <p className="text-[11px] text-charcoal-400">11:00 AM – 10:00 PM Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Location Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-b border-charcoal-800 text-xs">
          <div className="flex items-start space-x-3">
            <MapPin className="w-4 h-4 text-brass shrink-0 mt-0.5" />
            <div>
              <p className="text-ivory-100 font-medium mb-1">Venue Location:</p>
              <p className="text-charcoal-400 leading-relaxed">
                {VENUE_DATA.location.addressLine1},<br />
                {VENUE_DATA.location.sector}, {VENUE_DATA.location.area},<br />
                {VENUE_DATA.location.city}, {VENUE_DATA.location.state} — {VENUE_DATA.location.postalCode}
              </p>
              <a
                href={VENUE_DATA.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brass hover:text-ivory-50 mt-2 tracking-subtle"
              >
                Open in Google Maps <ArrowUpRight className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Phone className="w-4 h-4 text-brass shrink-0 mt-0.5" />
            <div>
              <p className="text-ivory-100 font-medium mb-1">Direct Inquiries & Bookings:</p>
              <p className="text-charcoal-300">
                Primary:{" "}
                <a href={`tel:${VENUE_DATA.contact.primaryPhone.replace(/\s+/g, "")}`} className="hover:text-ivory-50 font-medium text-ivory-100">
                  {VENUE_DATA.contact.primaryPhone}
                </a>
              </p>
              <p className="text-charcoal-400 mt-1">
                Additional:{" "}
                <a href={`tel:${VENUE_DATA.contact.secondaryPhone.replace(/\s+/g, "")}`} className="hover:text-ivory-50">
                  {VENUE_DATA.contact.secondaryPhone}
                </a>
              </p>
              <p className="text-charcoal-400 mt-2">
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${VENUE_DATA.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline"
                >
                  {VENUE_DATA.contact.whatsappDisplay}
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Mail className="w-4 h-4 text-brass shrink-0 mt-0.5" />
            <div>
              <p className="text-ivory-100 font-medium mb-1">Official Email:</p>
              <p className="text-charcoal-300">
                <a href={`mailto:${VENUE_DATA.contact.email}`} className="hover:text-ivory-50">
                  {VENUE_DATA.contact.email}
                </a>
              </p>
              <div className="mt-3 flex items-center space-x-2">
                <Instagram className="w-4 h-4 text-brass" />
                <a
                  href={VENUE_DATA.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal-300 hover:text-ivory-50 tracking-subtle"
                >
                  {VENUE_DATA.contact.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-charcoal-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Club Gusto. M I Rustle Court, Gomti Nagar Extension, Lucknow.</p>
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="hover:text-charcoal-400 transition-colors">
              Schedule Venue Tour
            </Link>
            <Link href="/contact#faq" className="hover:text-charcoal-400 transition-colors">
              Frequently Asked Questions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
