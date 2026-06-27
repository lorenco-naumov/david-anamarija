export type Attendance = "yes" | "no";

export type RsvpPayload = {
  name: string;
  attendance: Attendance;
};

export const wedding = {
  couple: {
    names: "David & Anamarija",
    initials: "D & A",
  },
  date: {
    iso: "2026-09-21T17:00:00+02:00",
    display: "21 September 2026",
  },
  venue: {
    name: "Villa Aurelia",
    location: "Lake Como, Italy",
    arrival: "Arrive by 16:30 for a champagne welcome before the ceremony.",
    travel:
      "Boats and private transfers can be arranged from Como and Bellagio.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Lake%20Como%20Italy",
  },
  rsvp: {
    deadline: "1 August 2026",
  },
  story: {
    title: "Their story",
    pullQuote: "A quiet beginning, a long table, a promise kept.",
    paragraphs: [
      "We met in late summer, somewhere between a shared bottle of wine and a walk that lasted until the city lights turned gold.",
      "Since then, every ordinary day has learned to feel ceremonial.",
    ],
  },
  details: [
    {
      title: "Ceremony",
      time: "17:00",
      description: "Garden terrace",
      icon: "rings",
    },
    {
      title: "Reception",
      time: "19:30",
      description: "Candlelit dinner",
      icon: "glasses",
    },
    {
      title: "Dress code",
      time: "Black tie optional",
      description: "Ivory, black, wine, and evening metallics welcome.",
      icon: "dress",
    },
  ],
  timeline: [
    { time: "15:30", label: "Arrival" },
    { time: "17:00", label: "Ceremony" },
    { time: "18:00", label: "Aperitivo", active: true },
    { time: "19:30", label: "Dinner" },
    { time: "22:00", label: "Dancing" },
    { time: "Late", label: "Champagne" },
  ],
  gallery: [
    {
      title: "Summer wine",
      src: "/images/wedding/champagne-table.png",
      alt: "Champagne coupes and pale florals on ivory linen.",
    },
    {
      title: "The walk home",
      src: "/images/wedding/gallery-walk.png",
      alt: "A couple walking away along a quiet European street at dusk.",
    },
    {
      title: "Morning light",
      src: "/images/wedding/gallery-florals.png",
      alt: "Pale wedding flowers arranged on ivory linen.",
    },
    {
      title: "After midnight",
      src: "/images/wedding/story-hands.png",
      alt: "Two ringed hands resting together on silk.",
    },
    {
      title: "After midnight",
      src: "/images/wedding/hero-still-life.png",
      alt: "Champagne, candles, flowers, and ivory fabric in daylight.",
    },
  ],
  faq: [
    {
      question: "Can I bring a guest?",
      answer: "Please refer to your invitation.",
    },
    {
      question: "Where should we stay?",
      answer: "A hotel list will be shared soon.",
    },
  ],
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

export async function submitRsvp(
  payload: RsvpPayload,
): Promise<{ ok: true; payload: RsvpPayload }> {
  await new Promise((resolve) => setTimeout(resolve, 650));
  return { ok: true, payload };
}
