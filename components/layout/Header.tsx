"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { VENUE_DATA } from "@/data/venueData";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "The Halls", href: "/the-halls" },
    { label: "Stay", href: "/stay" },
    { label: "Occasions", href: "/occasions" },
    { label: "Catering", href: "/catering" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal-950/90 backdrop-blur-md text-ivory-50 shadow-md border-b border-ivory-50/10 py-4"
          : "bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/30 to-transparent text-ivory-50 py-5"
      }`}
    >
      <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand Lockup — White/Light Wordmark */}
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-xl sm:text-2xl font-normal text-ivory-50 tracking-tight">
            Club Gusto
          </span>
          <span className="text-[9px] uppercase tracking-editorial text-ivory-200/80">
            Gomti Nagar Extension · Lucknow
          </span>
        </Link>

        {/* Desktop Navigation — Light text with subtle line reveal */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs tracking-editorial uppercase py-1 transition-colors group ${
                  isActive
                    ? "text-ivory-50 font-semibold"
                    : "text-ivory-200/80 hover:text-ivory-50"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[1px] bg-ivory-50 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Secondary Phone & Visible Header Button */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href={`tel:${VENUE_DATA.contact.primaryPhone.replace(/\s+/g, "")}`}
            className="text-xs text-ivory-200/80 hover:text-ivory-50 font-sans transition-colors"
          >
            {VENUE_DATA.contact.primaryPhone}
          </a>

          <Link
            href="/contact#enquire"
            className="px-4 py-2 bg-ivory-50 text-charcoal-900 text-xs uppercase tracking-editorial font-semibold rounded-xs hover:bg-ivory-100 transition-colors shadow-sm inline-block text-center"
            style={{ color: "#141211", backgroundColor: "#FAF7F2" }}
          >
            Check Dates & Pricing
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -mr-2 text-ivory-50 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal-950 text-ivory-50 border-t border-ivory-50/10 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-sans tracking-wide py-1 text-ivory-200 hover:text-ivory-50"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-ivory-50/10 flex flex-col space-y-3">
            <a
              href={`tel:${VENUE_DATA.contact.primaryPhone.replace(/\s+/g, "")}`}
              className="text-xs text-ivory-200 flex items-center"
            >
              <Phone className="w-3.5 h-3.5 mr-2 text-ivory-300" />
              {VENUE_DATA.contact.primaryPhone}
            </a>
            <Link
              href="/contact#enquire"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 bg-ivory-50 text-charcoal-900 text-xs uppercase tracking-editorial font-semibold rounded-xs"
              style={{ color: "#141211", backgroundColor: "#FAF7F2" }}
            >
              Check Dates & Pricing
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
