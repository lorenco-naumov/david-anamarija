const churchMapUrl =
  "https://www.google.com/maps/place/St.+Michael+the+Archangel+Orthodox+Church+-+Avtokomanda/@42.0021333,21.4571659,17z/data=!3m1!4b1!4m6!3m5!1s0x1354159e9c2d66d9:0x6b3fe18dc166936b!8m2!3d42.0021333!4d21.4571659!16s%2Fg%2F11dfr3vxn_?entry=ttu&g_ep=EgoyMDI2MDcwNS4wIKXMDSoASAFQAw%3D%3D";

const restaurantMapUrl =
  "https://www.google.com/maps/place/La+Tana+Wedding+Restaurant/@42.0085884,21.4846808,17z/data=!3m1!4b1!4m6!3m5!1s0x13543fd050ca8765:0x30f12c17631d5839!8m2!3d42.0085884!4d21.4846808!16s%2Fg%2F11dyq_gf4k?entry=ttu&g_ep=EgoyMDI2MDcwNS4wIKXMDSoASAFQAw%3D%3D";

const sharedDate = {
  iso: "2026-09-19T15:30:00+02:00",
  numericLabel: "19 / 09 / 26",
  day: "19",
  month: "09",
  yearShort: "26",
} as const;

const sharedImages = {
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

export const defaultLocale = "en";
export const locales = ["en", "mk"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "mk";
}

export function resolveLocale(value: string | string[] | undefined): Locale {
  const locale = Array.isArray(value) ? value[0] : value;
  return isLocale(locale) ? locale : defaultLocale;
}

export const weddingContent = {
  en: {
    couple: {
      names: "Ana Marija & David",
      firstName: "Ana Marija",
      secondName: "David",
      initials: {
        first: "A",
        second: "D",
      },
    },
    date: {
      ...sharedDate,
      display: "19 September 2026",
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
      deadline: "15 August 2026",
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
        description: "St. Archangel Michael, Avtokomanda.",
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
        answer: "Please send your answer by 15 August 2026.",
      },
      {
        question: "Is accommodation available nearby?",
        answer: "A short hotel list will be shared with guests soon.",
      },
    ],
    copy: {
      detailsHeading: "The Details",
      detailsBody: "Everything you need for the evening.",
      countdownHeading: "The celebration begins soon",
      countdownNotePrefix: "Set your calendar for an",
      countdownNoteEmphasis: "unforgettable evening",
      countdownNoteSuffix: "in",
      timelineHeading: "How the evening unfolds",
      venueHeading: "An evening in the heart of Skopje",
      closingHeading: "Celebrate with us",
      closingBody: "We would love to share this night with you.",
      answerNotePrefix: "Tell us your answer by",
      signatureScript: "With love",
      signatureNames: "Jovovikj & Bozhinovi",
      languageAriaLabel: "Choose language",
      nav: {
        ariaLabel: "Wedding navigation",
        brandAriaLabel: "Ana Marija and David",
        menuAriaLabel: "Open menu",
        menuLabel: "Menu",
        panelAriaLabel: "Page sections",
        links: {
          top: "Home",
          details: "Details",
          countdown: "Countdown",
          timeline: "Timeline",
          venue: "Venue",
          closing: "Message",
        },
      },
      countdown: {
        labels: {
          days: "Days",
          hours: "Hours",
          minutes: "Minutes",
          seconds: "Seconds",
        },
        aria: {
          days: "days",
          hours: "hours",
          minutes: "minutes",
          seconds: "seconds",
          conjunction: "and",
          suffix: "until the wedding",
        },
      },
    },
    ...sharedImages,
  },
  mk: {
    couple: {
      names: "Ана Марија & Давид",
      firstName: "Ана Марија",
      secondName: "Давид",
      initials: {
        first: "А",
        second: "Д",
      },
    },
    date: {
      ...sharedDate,
      display: "19 септември 2026",
    },
    venue: {
      name: "La Tana Wedding",
      city: "Скопје",
      location: "Комплекс Камник, Скопје",
      address: "Комплекс Камник, Скопје",
      arrival:
        "Денот започнува во црквата „Св. Архангел Михаил“ во Автокоманда, а потоа продолжува во La Tana Wedding во комплексот Камник.",
      parking: "Паркинг за гости е достапен во комплексот Камник",
      travel: "Паркинг за гости ќе биде достапен кај ресторанот.",
      mapUrl: restaurantMapUrl,
      locations: [
        {
          label: "Црква",
          name: "Св. Архангел Михаил",
          address: "Автокоманда, Скопје",
          buttonLabel: "Насоки до црквата",
          mapUrl: churchMapUrl,
        },
        {
          label: "Матично и прием",
          name: "La Tana Wedding",
          address: "Комплекс Камник, Скопје",
          buttonLabel: "Насоки до приемот",
          note: "Паркинг за гости е достапен во комплексот Камник",
          mapUrl: restaurantMapUrl,
        },
      ],
    },
    rsvp: {
      deadline: "15 август 2026",
    },
    details: [
      {
        title: "Црква",
        time: "15:30",
        location: "Црква „Св. Архангел Михаил“, Автокоманда",
        icon: "ceremony",
        mapUrl: churchMapUrl,
      },
      {
        title: "Матично",
        time: "18:30",
        location: "Ресторан La Tana, Скопје",
        icon: "registry",
        mapUrl: restaurantMapUrl,
      },
      {
        title: "Прием на гости",
        time: "19:00",
        location: "La Tana Wedding, комплекс Камник",
        icon: "reception",
        mapUrl: restaurantMapUrl,
      },
      {
        title: "Напомена",
        note:
          "Матичното се одржува непосредно пред приемот на гостите во La Tana Wedding.",
        icon: "music",
      },
    ],
    timeline: [
      {
        time: "15:30",
        label: "Црква",
        description: "Св. Архангел Михаил, Автокоманда.",
      },
      {
        time: "18:30",
        label: "Матично",
        description: "Во рамки на ресторанот La Tana, Скопје.",
      },
      {
        time: "19:00",
        label: "Прием на гости",
        description: "La Tana Wedding, комплекс Камник.",
      },
    ],
    faq: [
      {
        question: "Може ли да донесам гостин?",
        answer: "Ве молиме погледнете ја вашата покана.",
      },
      {
        question: "До кога треба да потврдам присуство?",
        answer: "Ве молиме испратете го вашиот одговор до 15 август 2026.",
      },
      {
        question: "Има ли сместување во близина?",
        answer: "Кратка листа со хотели наскоро ќе биде споделена со гостите.",
      },
    ],
    copy: {
      detailsHeading: "Детали",
      detailsBody: "Сите информации што ви се потребни за вечерта.",
      countdownHeading: "Прославата започнува наскоро",
      countdownNotePrefix: "Запишете го датумот за",
      countdownNoteEmphasis: "незаборавна вечер",
      countdownNoteSuffix: "во",
      timelineHeading: "Како ќе тече вечерта",
      venueHeading: "Вечер во срцето на Скопје",
      closingHeading: "Прославете со нас",
      closingBody: "Ќе ни биде драго да ја споделиме оваа вечер со вас.",
      answerNotePrefix: "Кажете ни го вашиот одговор до",
      signatureScript: "Со љубов",
      signatureNames: "Јововиќ & Божинови",
      languageAriaLabel: "Избор на јазик",
      nav: {
        ariaLabel: "Свадбена навигација",
        brandAriaLabel: "Ана Марија и Давид",
        menuAriaLabel: "Отвори мени",
        menuLabel: "Мени",
        panelAriaLabel: "Секции на страницата",
        links: {
          top: "Почетна",
          details: "Детали",
          countdown: "Одбројување",
          timeline: "Распоред",
          venue: "Локација",
          closing: "Порака",
        },
      },
      countdown: {
        labels: {
          days: "Дена",
          hours: "Часа",
          minutes: "Минути",
          seconds: "Секунди",
        },
        aria: {
          days: "дена",
          hours: "часа",
          minutes: "минути",
          seconds: "секунди",
          conjunction: "и",
          suffix: "до свадбата",
        },
      },
    },
    ...sharedImages,
  },
} as const;

export const wedding = weddingContent[defaultLocale];
