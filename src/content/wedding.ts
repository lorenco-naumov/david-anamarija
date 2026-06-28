export const wedding = {
  couple: {
    names: "David & Anamarija",
    initials: "D & A",
  },
  date: {
    iso: "2027-09-14T16:30:00+02:00",
    display: "14 September 2027",
    numericLabel: "14 / 09 / 27",
    day: "14",
    month: "09",
    yearShort: "27",
  },
  venue: {
    name: "Garden Ballroom, Skopje",
    city: "Skopje",
    location: "Skopje, North Macedonia",
    address: "Str. 16-ta Makedonska Brigada 18, Skopje 1000, North Macedonia",
    arrival:
      "Arrive, unwind, and celebrate with us at a place where timeless elegance meets unforgettable views.",
    parking: "Valet and guest parking available",
    travel: "Guest parking and valet service will be available at the venue.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Garden%20Ballroom%20Skopje",
  },
  rsvp: {
    deadline: "1 August 2027",
  },
  details: [
    {
      title: "Ceremony",
      description: "St. Sophia Chapel - 16:30",
      icon: "ceremony",
    },
    {
      title: "Reception",
      description: "Garden Ballroom - 19:00",
      icon: "reception",
    },
    {
      title: "Dress Code",
      description: "Black Tie / Evening Elegance",
      icon: "dress",
    },
    {
      title: "Notes",
      description: "Dinner, music, and dancing to follow",
      icon: "music",
    },
  ],
  timeline: [
    { time: "16:30", label: "Ceremony", description: "We say I do." },
    {
      time: "17:30",
      label: "Aperitif",
      description: "Cocktails, canapes and conversation.",
    },
    { time: "19:00", label: "Dinner", description: "A curated menu and fine wine." },
    { time: "21:00", label: "First Dance", description: "One song, a lifetime to go." },
    {
      time: "Late Night",
      label: "Celebration",
      description: "Dancing, laughter and unforgettable memories.",
    },
  ],
  faq: [
    {
      question: "Can I bring a guest?",
      answer: "Please refer to your invitation.",
    },
    {
      question: "When should I RSVP?",
      answer: "Please send your answer by 1 August 2027.",
    },
    {
      question: "Is accommodation available nearby?",
      answer: "A short hotel list will be shared with guests soon.",
    },
  ],
  assetImages: {
    bouquetCutout: {
      src: "/images/wedding-assets/bouquet-cutout.png",
      alt: "Ivory wedding bouquet.",
    },
    candleFlorals: {
      src: "/images/wedding-assets/candle-florals.png",
      alt: "Candlelit ivory flowers.",
    },
    champagneCoupes: {
      src: "/images/wedding-assets/champagne-coupes-candles.png",
      alt: "Champagne coupes with candles and white flowers.",
    },
    couplePortrait: {
      src: "/images/wedding-assets/couple-portrait.png",
      alt: "Bride and groom seated close together by candlelight.",
    },
    fabricTexture: {
      src: "/images/wedding-assets/fabric-texture.png",
      alt: "Soft ivory fabric texture.",
    },
    flowerCutoutSoft: {
      src: "/images/wedding-assets/flower-cutout-soft.png",
      alt: "Soft ivory flower detail.",
    },
    flowerCutoutWide: {
      src: "/images/wedding-assets/flower-cutout-wide.png",
      alt: "Wide ivory flower detail.",
    },
    glassCandle: {
      src: "/images/wedding-assets/glass-candle.png",
      alt: "Candle glowing inside a crystal glass.",
    },
    invitationCard: {
      src: "/images/wedding-assets/invitation-card.png",
      alt: "David and Anamarija invitation card among candles and flowers.",
    },
    singleFlowerFabric: {
      src: "/images/wedding-assets/single-flower-fabric.png",
      alt: "Single ivory flower resting on fabric.",
    },
    stoneTexture: {
      src: "/images/wedding-assets/stone-texture.png",
      alt: "Ivory plaster texture.",
    },
    thankYouCard: {
      src: "/images/wedding-assets/thank-you-card.png",
      alt: "Thank you card for David and Anamarija wedding guests.",
    },
    venueTerrace: {
      src: "/images/wedding-assets/venue-terrace-table.png",
      alt: "Elegant wedding table on a stone terrace at sunset.",
    },
    waxSeal: {
      src: "/images/wedding-assets/wax-seal.png",
      alt: "Ivory wax seal on sheer fabric.",
    },
  },
  images: {
    hero: {
      src: "/images/wedding/hero-still-life.png",
      alt: "Champagne, florals, candles, and ivory fabric for the wedding invitation.",
    },
    storyHands: {
      src: "/images/wedding/story-hands.png",
      alt: "Ringed hands resting on ivory silk.",
    },
    storyTable: {
      src: "/images/wedding/champagne-table.png",
      alt: "Champagne coupes and wedding flowers on a linen table.",
    },
    details: {
      src: "/images/wedding/gallery-florals.png",
      alt: "Soft pale flowers on ivory linen.",
    },
    timeline: {
      src: "/images/wedding/champagne-table.png",
      alt: "Champagne and candlelit wedding table details.",
    },
    venue: {
      src: "/images/wedding/venue-villa.png",
      alt: "Lake Como villa steps with flowers and cypress trees.",
    },
    rsvp: {
      src: "/images/wedding/champagne-table.png",
      alt: "Champagne coupes, candle, and wedding flowers.",
    },
  },
} as const;
