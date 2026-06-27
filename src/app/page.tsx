import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Gem,
  GlassWater,
  MapPin,
  Shirt,
} from "lucide-react";
import { Countdown } from "@/components/Countdown";
import { FaqAccordion } from "@/components/FaqAccordion";
import { MotionController } from "@/components/MotionController";
import { RsvpForm } from "@/components/RsvpForm";
import { wedding } from "@/content/wedding";

export default function Home() {
  return (
    <main className="invitation-page">
      <MotionController />
      <Hero />
      <SaveTheDate />
      <Story />
      <WeddingDetails />
      <DayTimeline />
      <Venue />
      <Gallery />
      <RsvpClosing />
    </main>
  );
}

function Hero() {
  return (
    <section
      className="section-shell grid min-h-screen items-center gap-12 py-8 lg:grid-cols-[0.92fr_1.08fr]"
      id="top"
    >
      <header className="absolute left-0 right-0 top-8 z-10 mx-auto flex w-[min(100%-2.5rem,1580px)] items-center justify-between px-0 md:top-10">
        <a className="display text-[2rem] text-[var(--wine-dark)]" href="#top">
          {wedding.couple.initials}
        </a>
        <div className="hidden h-px flex-1 bg-[rgba(168,134,88,.42)] md:mx-12 md:block" />
        <nav
          aria-label="Invitation navigation"
          className="flex items-center gap-5 text-[0.78rem] font-semibold uppercase md:gap-10"
        >
          <a className="label !text-[0.72rem]" href="#rsvp">
            RSVP
          </a>
          <span className="hidden h-12 w-px bg-[rgba(168,134,88,.55)] sm:block" />
          <a className="label !text-[0.72rem]" href="#details">
            View details
          </a>
        </nav>
      </header>

      <div className="pt-28 lg:pt-20" data-reveal>
        <h1
          aria-label="David and Anamarija"
          className="display max-w-[50rem] text-[clamp(2.95rem,11.8vw,4.25rem)] text-[var(--foreground)] md:text-[clamp(5.4rem,10.5vw,11.4rem)]"
        >
          <span aria-hidden>
            David &<br />
            Anamarija
          </span>
        </h1>
        <div className="fine-line mt-8" aria-hidden>
          <span className="ornament" />
        </div>
        <dl className="mt-10 grid gap-5 text-[1.05rem] font-medium tracking-[0.28em] text-[var(--ink-muted)] sm:text-[1.18rem]">
          <div className="flex items-center gap-5">
            <CalendarDays
              aria-hidden
              className="text-[var(--gold)]"
              size={28}
              strokeWidth={1.35}
            />
            <dt className="sr-only">Date</dt>
            <dd>{wedding.date.display}</dd>
          </div>
          <div className="flex items-center gap-5">
            <MapPin
              aria-hidden
              className="text-[var(--gold)]"
              size={29}
              strokeWidth={1.35}
            />
            <dt className="sr-only">Location</dt>
            <dd>{wedding.venue.name}, Lake Como</dd>
          </div>
        </dl>
        <div className="mt-12 flex flex-col gap-7 sm:flex-row sm:items-center">
          <a className="wine-button min-w-64" href="#rsvp">
            RSVP
          </a>
          <a className="text-button" href="#details">
            View details
          </a>
        </div>
      </div>

      <div
        className="image-frame relative ml-auto aspect-[0.87] w-full max-w-[44rem]"
        data-parallax
        data-reveal
      >
        <Image
          alt={wedding.images.hero.alt}
          className="object-cover"
          fill
          preload
          sizes="(max-width: 1024px) 94vw, 44vw"
          src={wedding.images.hero.src}
        />
      </div>
    </section>
  );
}

function SaveTheDate() {
  return (
    <section className="section-shell section-pad text-center" id="date">
      <Botanical className="left-0 top-24 h-72 w-56" />
      <Botanical className="right-0 top-12 hidden h-80 w-64 scale-x-[-1] md:block" />
      <div data-reveal>
        <div className="display mx-auto text-[2rem] text-[var(--wine-dark)]">
          D | A
        </div>
        <div className="mx-auto mt-6 h-20 w-px bg-[rgba(168,134,88,.48)]" />
        <p className="label mt-8">Save the date</p>
        <h2 className="display mx-auto mt-8 max-w-[75rem] text-[clamp(4.4rem,9.6vw,10.4rem)] text-[var(--wine-dark)]">
          {wedding.date.display}
        </h2>
        <div className="fine-line mt-10 justify-center" aria-hidden>
          <span className="ornament" />
        </div>
        <p className="label mt-10">Until we gather</p>
      </div>
      <div className="mt-10">
        <Countdown target={wedding.date.iso} />
      </div>
      <a className="wine-button mt-10 min-w-80" href={`data:text/calendar,${encodeURIComponent(calendarFile())}`} download="david-anamarija.ics">
        <CalendarDays aria-hidden size={19} strokeWidth={1.4} />
        Add to calendar
      </a>
    </section>
  );
}

function Story() {
  return (
    <section className="section-shell section-pad grid items-center gap-16 lg:grid-cols-[0.82fr_1.18fr]">
      <div data-reveal>
        <div className="flex items-center gap-8">
          <span className="display text-[2rem] text-[var(--wine-dark)]">
            {wedding.couple.initials}
          </span>
          <div className="h-px flex-1 bg-[rgba(168,134,88,.45)]" />
        </div>
        <h2 className="display mt-20 text-[clamp(4.5rem,8vw,9.2rem)]">
          {wedding.story.title}
        </h2>
        <div className="fine-line mt-8" aria-hidden>
          <span className="ornament" />
        </div>
        <p className="display-italic mt-8 max-w-[30rem] text-[clamp(2.05rem,2.85vw,3.45rem)] leading-[1.08] text-[var(--wine-dark)]">
          {wedding.story.pullQuote}
        </p>
        <div className="mt-12 grid max-w-[34rem] gap-8 text-[1.08rem] font-medium leading-[2] tracking-[0.2em] text-[var(--ink-muted)]">
          {wedding.story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-12 text-[4rem] text-[var(--wine)]">
          <div className="h-px flex-1 bg-[rgba(168,134,88,.42)]" />
          <span className="display">&</span>
          <div className="h-px flex-1 bg-[rgba(168,134,88,.42)]" />
        </div>
      </div>

      <div className="relative min-h-[46rem]" data-reveal>
        <div className="image-frame absolute right-[18%] top-0 aspect-[0.78] w-[64%]" data-parallax>
          <Image
            alt={wedding.images.storyHands.alt}
            fill
            sizes="(max-width: 1024px) 70vw, 34vw"
            src={wedding.images.storyHands.src}
          />
        </div>
        <div className="image-frame absolute bottom-0 right-0 aspect-[0.74] w-[42%] rotate-3">
          <Image
            alt={wedding.images.storyTable.alt}
            fill
            sizes="(max-width: 1024px) 44vw, 22vw"
            src={wedding.images.storyTable.src}
          />
        </div>
      </div>
    </section>
  );
}

function WeddingDetails() {
  return (
    <section className="section-shell section-pad" id="details">
      <div className="grid items-stretch gap-12 lg:grid-cols-[14rem_1fr]">
        <div className="relative hidden overflow-hidden lg:block" data-parallax>
          <Image
            alt={wedding.images.details.alt}
            fill
            sizes="14rem"
            src={wedding.images.details.src}
            className="object-cover"
          />
        </div>
        <div>
          <div className="text-center" data-reveal>
            <h2 className="display text-[clamp(4rem,7.2vw,8rem)]">
              Wedding details
            </h2>
            <div className="fine-line mt-8 justify-center" aria-hidden>
              <span className="ornament" />
            </div>
          </div>
          <div className="detail-grid mt-16" data-reveal-group>
            {wedding.details.map((detail) => (
              <article className="detail-item" data-reveal-child key={detail.title}>
                <DetailIcon type={detail.icon} />
                <h3 className="label mt-8">{detail.title}</h3>
                <div className="fine-line mt-7 justify-center" aria-hidden>
                  <span className="ornament" />
                </div>
        <p
          className={`display mx-auto mt-9 leading-[0.92] ${
            detail.title === "Dress code"
              ? "max-w-[19rem] text-[clamp(3rem,4.2vw,4.8rem)]"
              : "text-[clamp(3.6rem,6vw,7.4rem)]"
          }`}
        >
          {detail.time}
        </p>
                <p className="mt-8 text-[1rem] font-semibold tracking-[0.3em] text-[var(--ink-muted)] uppercase">
                  {detail.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DayTimeline() {
  return (
    <section
      className="section-shell section-pad grid gap-14 lg:grid-cols-[0.78fr_1.05fr_18rem]"
      data-timeline-section
    >
      <div className="self-start lg:sticky lg:top-24" data-reveal>
        <h2 className="display text-[clamp(4.5rem,8vw,8.6rem)]">
          The day
        </h2>
        <div className="fine-line mt-9" aria-hidden>
          <span className="ornament" />
        </div>
        <Botanical className="mt-20 h-56 w-72" />
      </div>

      <ol className="relative mx-auto grid w-full max-w-[42rem] gap-12 before:absolute before:left-1/2 before:top-0 before:h-full before:w-px before:bg-[rgba(168,134,88,.48)] max-sm:before:left-2">
        {wedding.timeline.map((item, index) => (
          <li
            className={`relative grid items-center gap-8 sm:grid-cols-2 ${
              index % 2 === 0 ? "sm:text-right" : "sm:[&>div:first-child]:col-start-2"
            }`}
            data-timeline-item
            key={`${item.time}-${item.label}`}
          >
            <span
              className={`absolute left-1/2 top-1/2 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--gold)] bg-[var(--background)] max-sm:left-2 ${
                "active" in item && item.active ? "!bg-[var(--wine)]" : ""
              }`}
              data-timeline-marker
            />
            <div className="px-8">
              <p className="display text-[clamp(2.8rem,5vw,5.2rem)] leading-none">
                {item.time}
              </p>
              <p className="label mt-4">{item.label}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="relative hidden overflow-hidden lg:block" data-parallax>
        <Image
          alt={wedding.images.timeline.alt}
          fill
          sizes="18rem"
          src={wedding.images.timeline.src}
          className="object-cover"
        />
      </div>
    </section>
  );
}

function Venue() {
  return (
    <section className="section-shell section-pad">
      <div className="grid items-center gap-14 lg:grid-cols-[0.76fr_0.9fr_0.76fr]">
        <div data-reveal>
          <h2 className="display text-[clamp(4.2rem,7.4vw,8.4rem)] text-[var(--wine-dark)]">
            {wedding.venue.name}
          </h2>
          <div className="fine-line mt-7" aria-hidden>
            <span className="ornament" />
          </div>
          <p className="mt-8 text-[1.2rem] font-medium tracking-[0.34em]">
            {wedding.venue.location}
          </p>
          <p className="mt-12 max-w-[27rem] text-[1.14rem] leading-[2] tracking-[0.16em] text-[var(--ink-muted)]">
            {wedding.venue.arrival}
          </p>
          <a
            className="wine-button mt-10 min-w-72"
            href={wedding.venue.mapUrl}
            rel="noreferrer"
            target="_blank"
          >
            Open map
            <ArrowRight aria-hidden size={18} strokeWidth={1.4} />
          </a>
          <div className="mt-16">
            <h3 className="display text-[3.1rem]">Travel note</h3>
            <div className="fine-line mt-5" aria-hidden>
              <span className="ornament" />
            </div>
            <p className="mt-7 max-w-[30rem] text-[1.08rem] leading-[2] tracking-[0.18em] text-[var(--ink-muted)]">
              {wedding.venue.travel}
            </p>
          </div>
        </div>
        <LakeMap />
        <div className="image-frame relative aspect-[0.7] w-full" data-parallax data-reveal>
          <Image
            alt={wedding.images.venue.alt}
            fill
            sizes="(max-width: 1024px) 90vw, 28vw"
            src={wedding.images.venue.src}
          />
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section-shell section-pad overflow-hidden">
      <div className="grid gap-14 lg:grid-cols-[0.45fr_1fr]">
        <div className="self-center" data-reveal>
          <h2 className="display text-[clamp(4.5rem,8vw,8.8rem)] text-[var(--wine-dark)]">
            Fragments
          </h2>
          <div className="fine-line mt-8" aria-hidden>
            <span className="ornament" />
          </div>
          <p className="mt-8 text-[1.05rem] font-medium tracking-[0.28em] text-[var(--ink-muted)]">
            Little scenes we keep returning to.
          </p>
          <Botanical className="mt-20 h-72 w-60" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3" data-reveal-group>
          {wedding.gallery.map((item, index) => (
            <figure
              className={`group relative bg-[var(--pearl)] p-3 shadow-[0_1.2rem_3rem_rgba(56,36,21,.08)] transition duration-300 hover:-translate-y-2 ${
                index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg] lg:mt-16"
              } ${index === 2 ? "xl:mt-28" : ""}`}
              data-parallax
              data-reveal-child
              key={`${item.title}-${index}`}
            >
              <div className="relative aspect-[1.05] overflow-hidden">
                <Image
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1280px) 44vw, 22vw"
                  src={item.src}
                />
              </div>
              <figcaption className="display-italic px-4 py-4 text-center text-[1.35rem] text-[var(--wine-dark)]">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function RsvpClosing() {
  return (
    <section className="section-shell pt-[clamp(5.5rem,10vw,11rem)]" id="rsvp">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1fr]">
        <div data-reveal>
          <h2 className="display text-[clamp(5.6rem,10vw,11rem)] text-[var(--wine-dark)]">
            RSVP
          </h2>
          <div className="fine-line mt-8" aria-hidden>
            <span className="ornament" />
          </div>
          <p className="label mt-8">
            Kindly respond by {wedding.rsvp.deadline}
          </p>
          <div className="mt-12">
            <RsvpForm />
          </div>
        </div>
        <div>
          <div className="image-frame relative aspect-[1.85] w-full" data-parallax data-reveal>
            <Image
              alt={wedding.images.rsvp.alt}
              fill
              sizes="(max-width: 1024px) 94vw, 44vw"
              src={wedding.images.rsvp.src}
            />
          </div>
          <div className="mt-12" data-reveal>
            <h3 className="display text-[4rem]">FAQ</h3>
            <div className="fine-line mt-4" aria-hidden>
              <span className="ornament" />
            </div>
            <FaqAccordion items={wedding.faq} />
          </div>
        </div>
      </div>
      <footer className="mt-20 flex flex-col items-center gap-7 border-t border-[rgba(168,134,88,.38)] bg-[rgba(216,203,184,.25)] py-12 text-center md:flex-row md:justify-center md:gap-14">
        <span className="display text-[2.25rem]">{wedding.couple.initials}</span>
        <span className="hidden h-16 w-px bg-[rgba(168,134,88,.55)] md:block" />
        <span className="ornament" />
        <p className="display text-[clamp(2.2rem,4.4vw,4.9rem)]">
          <span className="display-italic mr-4 text-[0.7em]">With love,</span>
          {wedding.couple.names}
        </p>
      </footer>
    </section>
  );
}

function DetailIcon({ type }: { type: string }) {
  const className = "mx-auto text-[var(--gold)]";
  const props = { size: 54, strokeWidth: 1.25, className, "aria-hidden": true };

  if (type === "rings") {
    return <Gem {...props} />;
  }

  if (type === "glasses") {
    return <GlassWater {...props} />;
  }

  return <Shirt {...props} />;
}

function LakeMap() {
  return (
    <div className="relative min-h-[32rem]" data-reveal>
      <svg
        aria-label="Illustrated route map from Como to Bellagio on Lake Como."
        className="absolute inset-0 h-full w-full text-[var(--gold)]"
        fill="none"
        role="img"
        viewBox="0 0 520 620"
      >
        <path
          d="M176 41c64 77 43 116 82 170 42 59 130 76 133 148 3 80-91 100-126 165"
          stroke="currentColor"
          strokeOpacity=".16"
          strokeWidth="42"
        />
        <path
          d="M132 48c74 84 66 126 105 178 43 57 118 74 126 132 11 78-85 112-112 198"
          stroke="currentColor"
          strokeOpacity=".24"
          strokeWidth="1"
        />
        <path
          d="M202 52c57 70 45 109 83 157 45 56 117 83 114 148-3 73-88 104-109 174"
          stroke="currentColor"
          strokeOpacity=".24"
          strokeWidth="1"
        />
        <path
          d="M348 110c-24 96-9 158-49 231-32 58-93 92-107 156"
          stroke="currentColor"
          strokeDasharray="3 13"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <circle cx="348" cy="110" fill="currentColor" r="6" />
        <circle cx="192" cy="497" fill="currentColor" r="6" />
        <text
          fill="currentColor"
          fontFamily="var(--font-ui)"
          fontSize="19"
          letterSpacing="5"
          x="365"
          y="100"
        >
          BELLAGIO
        </text>
        <text
          fill="currentColor"
          fontFamily="var(--font-ui)"
          fontSize="19"
          letterSpacing="5"
          x="211"
          y="522"
        >
          COMO
        </text>
        <text
          fill="currentColor"
          fontFamily="var(--font-display)"
          fontSize="26"
          opacity=".75"
          x="300"
          y="300"
        >
          LAKE COMO
        </text>
        <path
          d="M382 456l21 52 53 21-53 21-21 53-21-53-53-21 53-21z"
          stroke="currentColor"
          strokeOpacity=".62"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

function Botanical({ className = "" }: { className?: string }) {
  return (
    <div className={`botanical ${className}`} aria-hidden>
      <svg fill="none" viewBox="0 0 240 320">
        <path
          d="M42 292c34-70 45-141 36-220M78 101c-24-24-39-45-43-64M82 126c29-28 56-42 82-43M69 182c-26 1-47-7-62-22M73 205c31 7 55 21 72 42"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
        {[
          [35, 39],
          [49, 61],
          [153, 80],
          [180, 86],
          [15, 157],
          [35, 166],
          [146, 247],
          [119, 231],
          [76, 96],
          [79, 126],
          [70, 183],
        ].map(([cx, cy]) => (
          <circle cx={cx} cy={cy} fill="currentColor" key={`${cx}-${cy}`} r="4" />
        ))}
      </svg>
    </div>
  );
}

function calendarFile() {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//David Anamarija Wedding//Invitation//EN",
    "BEGIN:VEVENT",
    "UID:david-anamarija-20260921@invitation",
    "DTSTAMP:20260627T000000Z",
    "DTSTART:20260921T150000Z",
    "DTEND:20260922T000000Z",
    "SUMMARY:David & Anamarija Wedding",
    "LOCATION:Villa Aurelia, Lake Como, Italy",
    "DESCRIPTION:Wedding celebration for David and Anamarija.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
