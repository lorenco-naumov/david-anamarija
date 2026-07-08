const churchMapUrl =
  "https://www.google.com/maps/place/St.+Michael+the+Archangel+Orthodox+Church+-+Avtokomanda/@42.0021333,21.4571659,17z/data=!3m1!4b1!4m6!3m5!1s0x1354159e9c2d66d9:0x6b3fe18dc166936b!8m2!3d42.0021333!4d21.4571659!16s%2Fg%2F11dfr3vxn_?entry=ttu&g_ep=EgoyMDI2MDcwNS4wIKXMDSoASAFQAw%3D%3D";

const restaurantMapUrl =
  "https://www.google.com/maps/place/La+Tana+Wedding+Restaurant/@42.0085884,21.4846808,17z/data=!3m1!4b1!4m6!3m5!1s0x13543fd050ca8765:0x30f12c17631d5839!8m2!3d42.0085884!4d21.4846808!16s%2Fg%2F11dyq_gf4k?entry=ttu&g_ep=EgoyMDI2MDcwNS4wIKXMDSoASAFQAw%3D%3D";

export const wedding = {
  couple: {
    names: "Ana Marija & David",
    initials: "D & A",
  },
  date: {
    iso: "2026-09-19T15:30:00+02:00",
    display: "19 September 2026",
    numericLabel: "19 / 09 / 26",
    day: "19",
    month: "09",
    yearShort: "26",
  },
  venue: {
    name: "La Tana Wedding",
    city: "Skopje",
    location: "Kamnik Complex, Skopje",
    address: "Venue Kamnik Complex, Skopje",
    arrival:
      "The day begins at St. Archangel Michael in Avtokomanda, then continues at La Tana Wedding in Kamnik Complex.",
    parking: "Guest parking available at Kamnik Complex",
    travel: "Guest parking will be available at the venue.",
    mapUrl: restaurantMapUrl,
    locations: [
      {
        label: "Church",
        name: "St. Archangel Michael",
        address: "Avtokomanda, Skopje",
        buttonLabel: "Open church directions",
        mapUrl: churchMapUrl,
      },
      {
        label: "Registry & Reception",
        name: "La Tana Wedding",
        address: "Venue Kamnik Complex, Skopje",
        buttonLabel: "Open reception directions",
        note: "Guest parking available at Kamnik Complex",
        mapUrl: restaurantMapUrl,
      },
    ],
  },
  rsvp: {
    deadline: "1 August 2027",
  },
  details: [
    {
      title: "Church",
      time: "15:30",
      location: 'Church "St. Archangel Michael", Avtokomanda',
      icon: "ceremony",
      mapUrl: churchMapUrl,
    },
    {
      title: "Marriage Registry",
      time: "18:30",
      location: "La Tana restaurant, Skopje",
      icon: "registry",
      mapUrl: restaurantMapUrl,
    },
    {
      title: "Reception of Guests",
      time: "19:00",
      location: "La Tana Wedding, Kamnik Complex",
      icon: "reception",
      mapUrl: restaurantMapUrl,
    },
    {
      title: "Note",
      note:
        "Marriage registry takes place immediately before guest reception at La Tana Wedding.",
      icon: "music",
    },
  ],
  timeline: [
    {
      time: "15:30",
      label: "Church",
      description: 'St. Archangel Michael, Avtokomanda.',
    },
    {
      time: "18:30",
      label: "Marriage Registry",
      description: "As part of La Tana restaurant, Skopje.",
    },
    {
      time: "19:00",
      label: "Reception of Guests",
      description: "La Tana Wedding, Kamnik Complex.",
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
