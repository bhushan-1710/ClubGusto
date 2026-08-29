export interface HallDetail {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  seatedCapacity: number;
  floatingCapacity: number;
  recommendedGuestRange: string;
  bestFor: string[];
  dimensions: string;
  features: string[];
  description: string;
  image: string;
  accentColor: string;
}

export interface OccasionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  traditions: string;
  recommendedHall: string;
  image: string;
  highlights: string[];
}

export interface AmenityItem {
  name: string;
  category: string;
  description: string;
  detail: string;
  iconName: string;
}

export const VENUE_DATA = {
  name: "Club Gusto",
  tagline: "One Address. Every Guest Hosted.",
  shortDescription:
    "A celebration and banquet venue in Gomti Nagar Extension, Lucknow — featuring two versatile banquet halls, nine on-property guest rooms, in-house multi-cuisine catering, and full celebration coordination at M I Rustle Court.",
  location: {
    addressLine1: "M I Rustle Court, Plot No. 467, Amar Shaheed Path",
    sector: "Sector 6, Gomti Nagar Extension",
    area: "Badhamau",
    city: "Lucknow",
    state: "Uttar Pradesh",
    postalCode: "226010",
    landmark: "Directly on Amar Shaheed Path corridor, Gomti Nagar Extension",
    mapsUrl: "https://maps.google.com/?q=Club+Gusto+MI+Rustle+Court+Gomti+Nagar+Extension+Lucknow",
    parking: "Dedicated on-site parking for approximately 40 vehicles",
  },
  contact: {
    primaryPhone: "+91 88080 88046",
    secondaryPhone: "+91 92085 51033",
    whatsappNumber: "918808088046",
    whatsappDisplay: "+91 88080 88046",
    email: "salesclubgusto@gmail.com",
    instagramHandle: "@clubgustolko",
    instagramUrl: "https://instagram.com/clubgustolko",
  },
  eventTimings: {
    morningSlot: "Day Slot: 10:00 AM – 04:00 PM (Mehendi, Haldi, Day Receptions, Corporate)",
    eveningSlot: "Evening Slot: 06:30 PM onwards (Baraat, Evening Weddings, Sangeet & Receptions)",
    hoursNotice: "Venue management desk open 11:00 AM – 10:00 PM daily for visits & consultations",
  },
  pricingOverview: {
    note: "All package and per-plate pricing is custom-quoted based on date, guest count, and selected menu/decor preferences.",
  },
  halls: [
    {
      id: "grand-hall",
      name: "The Grand Banquet Hall",
      subtitle: "Hall 1 · Grand Capacity",
      tagline: "Proportioned for large wedding receptions, Baraat gatherings, and grand social celebrations.",
      seatedCapacity: 450,
      floatingCapacity: 700,
      recommendedGuestRange: "350 – 700 Guests",
      dimensions: "Spacious column-free banquet hall with high ceiling & crystal chandeliers",
      bestFor: [
        "Wedding Receptions & Baraat Gatherings",
        "Nikkah & Grand Valima Feasts",
        "Large Sangeet & Ring Ceremonies",
        "Corporate Annual Assemblies & Galas",
      ],
      features: [
        "Elevated stage setup for stage decor and traditional ceremonies",
        "Integrated sound system and ambient lighting rigs",
        "Dedicated buffet layout and dining space",
        "Direct elevator access connecting to on-property guest rooms",
        "Centralized air conditioning",
      ],
      description:
        "The Grand Hall provides the scale and presence required for large family gatherings in Lucknow. With capacity for up to 700 floating guests, it comfortably hosts multi-generational celebrations with generous stage and dining arrangements.",
      image: "/images/club-gusto/halls/grand-hall-celebration.webp",
      accentColor: "#C5A059",
    },
    {
      id: "intimate-hall",
      name: "The Intimate Banquet Hall",
      subtitle: "Hall 2 · Cohesive & Warm",
      tagline: "Curated for close family ceremonies, pre-wedding rituals, and mid-scale social events.",
      seatedCapacity: 180,
      floatingCapacity: 300,
      recommendedGuestRange: "100 – 300 Guests",
      dimensions: "Warm mid-scale banquet space with decorative wall paneling",
      bestFor: [
        "Mehendi, Haldi & Sangeet Evenings",
        "Intimate Nikkah & Engagement Gatherings",
        "Mata Ki Chowki & Devotional Functions",
        "Milestone Birthdays, Anniversaries & Family Dinners",
        "Corporate Seminars & Meetings",
      ],
      features: [
        "Flexible acoustic staging for family performances and speeches",
        "Warm ambient lighting and modular seating arrangements",
        "Dedicated in-hall buffet and dining setup",
        "Direct elevator connectivity to guest rooms",
        "Air-conditioned interior",
      ],
      description:
        "The Intimate Hall is designed for functions where closeness and warmth are paramount. Proportionally sized for 100 to 300 attendees, it fosters an engaging, connected environment where every guest feels part of the celebration.",
      image: "/images/club-gusto/halls/intimate-hall-ambiance.webp",
      accentColor: "#9E5B42",
    },
  ] as HallDetail[],
  stay: {
    roomCount: 9,
    title: "9 On-Property Guest Rooms",
    subtitle: "Stay Close to the Celebration",
    narrative:
      "A key advantage of hosting at Club Gusto is the availability of 9 on-property air-conditioned guest rooms at M I Rustle Court. Out-of-station family members and immediate relatives can dress, rest between rituals, and stay together without the stress of midnight travel across the city.",
    highlights: [
      "Immediate on-property elevator access to banquet halls",
      "Air-conditioned rooms with ensuite bathrooms for visiting family",
      "Convenient dressing and preparation space for the host family",
      "Reduces city transit and coordinating external hotel logistics",
      "24-hour reception and on-site hospitality assistance",
    ],
    image: "/images/club-gusto/stay/bridal-dressing-room.webp",
  },
  property: {
    buildingName: "M I Rustle Court",
    narrative:
      "Club Gusto is located at M I Rustle Court on Amar Shaheed Path in Gomti Nagar Extension, providing a broader hospitality setting with convenient accessibility for Lucknow and outstation guests.",
    amenities: [
      {
        name: "9 On-Property Guest Rooms",
        category: "Accommodation",
        description: "Comfortable air-conditioned lodging for out-of-town family and hosts.",
        detail: "9 Rooms on Property",
        iconName: "BedDouble",
      },
      {
        name: "Two Banquet Halls",
        category: "Event Spaces",
        description: "Versatile halls accommodating from 100 up to 700 guests.",
        detail: "Grand & Intimate Halls",
        iconName: "Maximize2",
      },
      {
        name: "In-House Catering",
        category: "Dining",
        description: "Full in-house kitchen delivering tailored multi-cuisine event menus.",
        detail: "Veg & Non-Veg Menus",
        iconName: "Utensils",
      },
      {
        name: "Dedicated Parking",
        category: "Logistics",
        description: "On-site parking area for approximately 40 vehicles on Shaheed Path.",
        detail: "~40 Vehicles Capacity",
        iconName: "Car",
      },
      {
        name: "Direct Corridor Location",
        category: "Accessibility",
        description: "Situated on Amar Shaheed Path in Gomti Nagar Extension with straightforward highway access.",
        detail: "Easy Airport & City Access",
        iconName: "MapPin",
      },
      {
        name: "Full Event Coordination",
        category: "Support",
        description: "Dedicated floor leads to support sound, lighting, timing, and dining flow.",
        detail: "Comprehensive Hosting",
        iconName: "ShieldCheck",
      },
    ] as AmenityItem[],
  },
  occasions: [
    {
      id: "weddings",
      title: "Weddings & Receptions",
      subtitle: "Grand Ceremonies & Celebrations",
      description:
        "Accommodating traditional weddings with Baraat arrival path, stage decor, banquet seating, and evening ceremony slots.",
      traditions: "Baraat · Jaimala · Pheras · Reception",
      recommendedHall: "Grand Banquet Hall (up to 700)",
      image: "/images/club-gusto/weddings/wedding-bride-ceremony.webp",
      highlights: ["Evening Ceremony Slots", "Stage Decor Support", "Guest Room Access"],
    },
    {
      id: "nikkah",
      title: "Nikkah & Valima Ceremonies",
      subtitle: "Dignified Traditions & Hospitality",
      description:
        "Dedicated arrangements for traditional Nikkah and Valima ceremonies, accommodating custom seating layouts, stage backdrops, and multi-cuisine feasts.",
      traditions: "Nikkah · Dawat-e-Valima · Family Feasts",
      recommendedHall: "Grand or Intimate Hall depending on scale",
      image: "/images/club-gusto/weddings/wedding-grand-entrance.webp",
      highlights: ["Multi-Cuisine Menus", "Flexible Seating Layouts", "Dedicated Stage Area"],
    },
    {
      id: "pre-wedding",
      title: "Sangeet, Mehendi & Engagements",
      subtitle: "Vibrant Family Evenings",
      description:
        "Acoustic and stage setups for musical performances, family dances, vibrant decor setups, and interactive food stations.",
      traditions: "Ring Ceremony · Sangeet Night · Mehendi & Haldi",
      recommendedHall: "Intimate Banquet Hall (100 – 300)",
      image: "/images/club-gusto/weddings/wedding-stage-decor.webp",
      highlights: ["Stage Sound & Lighting", "Buffet Arrangements", "Intimate Atmosphere"],
    },
    {
      id: "social-corporate",
      title: "Social Gatherings & Corporate Events",
      subtitle: "Milestone Celebrations & Conclaves",
      description:
        "From landmark anniversaries and Mata Ki Chowki devotional ceremonies to business conferences and annual gatherings.",
      traditions: "Anniversaries · Devotional Chowki · Corporate Meets",
      recommendedHall: "Grand or Intimate Hall as needed",
      image: "/images/club-gusto/halls/intimate-event-setup.webp",
      highlights: ["Custom Seating Layouts", "In-House Dining", "Dedicated Coordination"],
    },
  ] as OccasionItem[],
  planningProcess: [
    {
      step: "01",
      title: "Consultation & Vision Alignment",
      description:
        "We begin by understanding your guest list scale, ritual schedule, and preferred layout. Every celebration is planned around your specific needs.",
    },
    {
      step: "02",
      title: "Menu & Event Coordination",
      description:
        "Our team assists in finalizing your custom multi-cuisine menu, hall seating arrangements, stage specifications, and guest room requirements.",
    },
    {
      step: "03",
      title: "Day-of Event Hosting",
      description:
        "From setup to the conclusion of your function, our on-site team assists with catering flow, timing, and venue operations so you can focus on your guests.",
    },
  ],
  culinary: {
    title: "In-House Multi-Cuisine Catering",
    description:
      "Club Gusto provides complete in-house catering with freshly prepared menus spanning North Indian, regional Indian, and multi-cuisine selections for vegetarian and non-vegetarian events.",
    features: [
      "Customizable vegetarian and non-vegetarian menu packages",
      "Live snack and beverage counter options",
      "Specialized dietary preparations on request (e.g. Jain menu options)",
      "Buffet setup and attentive dining service team",
    ],
  },
  verifiedProof: [
    {
      quote: "The grand hall was spacious enough for our gathering without feeling crowded. The lighting and stage arrangement worked out very well.",
      author: "Event Host",
      source: "WedMeGood / Google Review",
      event: "Wedding Celebration",
    },
    {
      quote: "Having guest rooms right at the venue was very helpful for our out-of-town family. The hospitality and on-site support were prompt.",
      author: "Family Host",
      source: "Public Review",
      event: "Family Function & Stay",
    },
    {
      quote: "The location on Amar Shaheed Path is easy for guests to navigate to. The food and hall arrangement were well received by our guests.",
      author: "Social Host",
      source: "Public Review",
      event: "Engagement & Sangeet",
    },
  ],
};
