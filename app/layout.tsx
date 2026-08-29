import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { VENUE_DATA } from "@/data/venueData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clubgusto.in"),
  title: "Club Gusto | Banquet & Events Venue in Gomti Nagar Extension, Lucknow",
  description:
    "One Address. Every Guest Hosted. Club Gusto offers two versatile banquet halls (up to 700 guests), 9 on-property guest rooms, in-house multi-cuisine catering, and dedicated parking at M I Rustle Court, Gomti Nagar Extension, Lucknow.",
  keywords: [
    "Club Gusto Lucknow",
    "Banquet Hall Gomti Nagar Extension",
    "Wedding Venue Lucknow",
    "Nikkah Venue Lucknow",
    "Banquet Hall Amar Shaheed Path",
    "Banquet Hall with Rooms Lucknow",
    "Club Gusto MI Rustle Court",
  ],
  authors: [{ name: "Club Gusto" }],
  creator: "Club Gusto",
  publisher: "Club Gusto",
  openGraph: {
    title: "Club Gusto | Banquet & Events Venue · Gomti Nagar, Lucknow",
    description:
      "Two banquet halls, 9 on-property guest rooms, in-house multi-cuisine catering, and celebration support at M I Rustle Court, Amar Shaheed Path.",
    url: "https://clubgusto.in",
    siteName: "Club Gusto",
    images: [
      {
        url: "/images/club-gusto/hero/hero-grand-hall.webp",
        width: 1200,
        height: 630,
        alt: "Club Gusto Banquet Hall in Lucknow",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Club Gusto | Banquet & Events Venue in Lucknow",
    description: "One Address. Every Guest Hosted. Two halls, 9 rooms, in-house catering at Gomti Nagar Extension.",
    images: ["/images/club-gusto/hero/hero-grand-hall.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": VENUE_DATA.name,
    "description": VENUE_DATA.shortDescription,
    "url": "https://clubgusto.in",
    "telephone": VENUE_DATA.contact.primaryPhone,
    "email": VENUE_DATA.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": VENUE_DATA.location.addressLine1,
      "addressLocality": "Gomti Nagar Extension, Lucknow",
      "addressRegion": "Uttar Pradesh",
      "postalCode": VENUE_DATA.location.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.8207",
      "longitude": "80.9995"
    },
    "maximumAttendeeCapacity": 700,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "11:00",
        "closes": "22:00"
      }
    ]
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-ivory-50 text-charcoal-800 antialiased min-h-screen flex flex-col selection:bg-ivory-200 selection:text-charcoal-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
