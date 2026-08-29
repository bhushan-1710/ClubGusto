export interface GalleryImage {
  id: string;
  title: string;
  category: "all" | "halls" | "decor" | "stay" | "dining" | "property";
  categoryLabel: string;
  src: string;
  caption: string;
  aspect: "landscape" | "portrait" | "wide";
}

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: "g1",
    title: "Grand Banquet Hall & Illuminated Chandeliers",
    category: "halls",
    categoryLabel: "The Halls",
    src: "/images/club-gusto/halls/grand-hall-lighting.webp",
    caption: "Spacious architectural ceiling, illuminated crystal chandeliers, and expansive carpeted banquet layout in the Grand Hall.",
    aspect: "wide",
  },
  {
    id: "g2",
    title: "Bridal Staging & Ceremony Floral Decor",
    category: "decor",
    categoryLabel: "Decor & Stages",
    src: "/images/club-gusto/weddings/wedding-bride-ceremony.webp",
    caption: "Ceremonial stage setup with illuminated backdrop and floral styling for traditional celebrations.",
    aspect: "portrait",
  },
  {
    id: "g3",
    title: "Grand Hall Length & Full Corridor View",
    category: "halls",
    categoryLabel: "The Halls",
    src: "/images/club-gusto/halls/grand-hall-architecture.webp",
    caption: "Uninterrupted sightlines, high ceilings, and expansive floor space accommodating up to 700 floating guests.",
    aspect: "wide",
  },
  {
    id: "g4",
    title: "On-Property Guest Room Accommodations",
    category: "stay",
    categoryLabel: "Guest Rooms",
    src: "/images/club-gusto/stay/guest-room-interior.webp",
    caption: "One of 9 air-conditioned on-property guest rooms providing immediate elevator connectivity to banquet halls.",
    aspect: "landscape",
  },
  {
    id: "g5",
    title: "Bridal Preparation in On-Property Room",
    category: "stay",
    categoryLabel: "Guest Rooms",
    src: "/images/club-gusto/stay/bridal-dressing-room.webp",
    caption: "Convenient dressing and attire coordination for the host family and bride on the event day.",
    aspect: "portrait",
  },
  {
    id: "g6",
    title: "Bespoke Stage Setup with Hanging Florals",
    category: "decor",
    categoryLabel: "Decor & Stages",
    src: "/images/club-gusto/weddings/wedding-stage-decor.webp",
    caption: "Suspended floral canopy, ambient candle pillars, and chevron stage flooring curated for musical evenings.",
    aspect: "landscape",
  },
  {
    id: "g7",
    title: "Intimate Hall & Jaali Lattice Wall Paneling",
    category: "halls",
    categoryLabel: "The Halls",
    src: "/images/club-gusto/halls/intimate-hall-ambiance.webp",
    caption: "Refined geometric Jaali lattice accents and warm sconce lighting inside the Intimate Banquet Hall.",
    aspect: "landscape",
  },
  {
    id: "g8",
    title: "Grand Hall Double Door Entrance",
    category: "halls",
    categoryLabel: "The Halls",
    src: "/images/club-gusto/weddings/wedding-grand-entrance.webp",
    caption: "Majestic wooden entrance doors leading directly into the Grand Banquet Hall.",
    aspect: "portrait",
  },
  {
    id: "g9",
    title: "M I Rustle Court Exterior Terrace",
    category: "property",
    categoryLabel: "Property",
    src: "/images/club-gusto/property/property-exterior-terrace.webp",
    caption: "Open terrace and property context at M I Rustle Court on Amar Shaheed Path.",
    aspect: "landscape",
  },
  {
    id: "g10",
    title: "Dining & Reception Lounge",
    category: "dining",
    categoryLabel: "Catering",
    src: "/images/club-gusto/catering/catering-banquet-dining.webp",
    caption: "Air-conditioned dining hall configuration for in-house multi-cuisine event meals.",
    aspect: "landscape",
  },
  {
    id: "g11",
    title: "In-House Buffet & Food Service Counter",
    category: "dining",
    categoryLabel: "Catering",
    src: "/images/club-gusto/catering/catering-buffet-counter.webp",
    caption: "In-house buffet counter with chafing dishes, soup bowls, and service arrangement for event banquets.",
    aspect: "portrait",
  },
  {
    id: "g12",
    title: "Lobby & Reception Desk",
    category: "property",
    categoryLabel: "Property",
    src: "/images/club-gusto/property/property-lobby-lounge.webp",
    caption: "Welcoming reception foyer and mezzanine architecture at M I Rustle Court.",
    aspect: "landscape",
  },
];
