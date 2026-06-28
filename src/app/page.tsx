import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Car,
  Church,
  Download,
  GlassWater,
  MapPin,
  Menu,
  Music2,
  Shirt,
  Sparkles,
} from "lucide-react";
import {
  DeferredCountdown,
  DeferredFaqAccordion,
} from "@/components/DeferredClientComponents";
import { MotionController } from "@/components/MotionController";
import { wedding } from "@/content/wedding";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="invitation-page">
        <MotionController />
        <Hero />
        <WeddingDetails />
        <CountdownSection />
        <DayTimeline />
        <Venue />
        <Closing />
      </main>
      <HashScrollScript />
    </>
  );
}

function HashScrollScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(() => {
  function setupHashScroll() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    function scrollToHash(hash, smooth) {
      const id = decodeURIComponent(hash.replace("#", ""));
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      target.scrollIntoView({
        behavior: smooth && !reduced.matches ? "smooth" : "auto",
        block: "start"
      });
    }

    document.addEventListener("click", (event) => {
      const anchor = event.target && event.target.closest
        ? event.target.closest('a[href^="#"]')
        : null;
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const id = decodeURIComponent(hash.slice(1));
      if (!document.getElementById(id)) return;
      event.preventDefault();
      const openMenu = anchor.closest ? anchor.closest(".nav-menu") : null;
      if (openMenu && openMenu.removeAttribute) openMenu.removeAttribute("open");
      window.history.pushState(null, "", hash);
      scrollToHash(hash, true);
    });

    window.setTimeout(() => scrollToHash(window.location.hash, false), 0);
    window.setTimeout(() => scrollToHash(window.location.hash, false), 700);
  }

  if (document.readyState === "complete") {
    setupHashScroll();
  } else {
    window.addEventListener("load", setupHashScroll, { once: true });
  }
})();
        `.trim(),
      }}
    />
  );
}

function Hero() {
  return (
    <section className="hero-section invitation-section" id="top">
      <div className="hero-copy" data-reveal>
        <DecorativeScript word="Love" />
        <h1 className="display hero-title">
          A Night to
          <span>Remember</span>
        </h1>
        <Ornament />
        <p className="couple-line">{wedding.couple.names}</p>
        <p className="intro-line">
          Join us in {wedding.venue.city} - {wedding.date.display}
        </p>
        <div className="action-row">
          <a className="dark-button" href="#details">
            <span>View details</span>
            <ArrowRight aria-hidden size={24} strokeWidth={1.2} />
          </a>
          <a className="light-button" href="#message">
            Send message
          </a>
        </div>
        <DateStamp />
      </div>

      <div className="hero-art" aria-hidden data-reveal>
        <ReferenceImage
          alt=""
          className="floral-accent floral-hero"
          objectClassName="object-flower"
          preload
          src={wedding.assetImages.flowerCutoutWide.src}
        />
        <ReferenceImage
          alt=""
          className="hero-main-image"
          objectClassName="object-hero-main"
          preload
          src={wedding.assetImages.couplePortrait.src}
        />
        <ReferenceImage
          alt=""
          className="hero-small-image hero-small-top"
          objectClassName="object-hero-floral"
          src={wedding.assetImages.bouquetCutout.src}
        />
        <ReferenceImage
          alt=""
          className="hero-small-image hero-small-mid"
          objectClassName="object-hero-stone"
          src={wedding.assetImages.stoneTexture.src}
        />
        <ReferenceImage
          alt=""
          className="hero-wide-image"
          objectClassName="object-hero-card"
          src={wedding.assetImages.invitationCard.src}
        />
      </div>
    </section>
  );
}

function WeddingDetails() {
  return (
    <section className="details-section invitation-section" id="details">
      <ReferenceImage
        alt=""
        className="floral-accent floral-details"
        objectClassName="object-flower"
        src={wedding.assetImages.flowerCutoutSoft.src}
      />
      <div className="details-copy" data-reveal>
        <DecorativeScript word="Details" />
        <h2 className="display section-title left-title">The Details</h2>
        <Ornament align="left" />
        <p className="section-body">Everything you need for the evening.</p>
        <div className="vertical-note">
          <span aria-hidden />
          <Sparkles aria-hidden size={18} strokeWidth={1.2} />
        </div>
        <a className="text-link" href="#timeline">
          See full itinerary
          <ArrowRight aria-hidden size={22} strokeWidth={1.2} />
        </a>
        <ReferenceImage
          alt=""
          className="details-paper-image"
          objectClassName="object-details-paper"
          src={wedding.assetImages.waxSeal.src}
        />
      </div>

      <div className="detail-grid" data-reveal-group>
        {wedding.details.map((detail, index) => (
          <article className="detail-card" data-reveal-child key={detail.title}>
            <p className="card-number">{String(index + 1).padStart(2, "0")}</p>
            <span className="icon-medallion">
              <DetailIcon type={detail.icon} />
            </span>
            <span className="small-rule" aria-hidden />
            <h3 className="display">{detail.title}</h3>
            <p>{detail.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CountdownSection() {
  return (
    <section className="countdown-section invitation-section" id="countdown">
      <ReferenceImage
        alt=""
        className="floral-accent floral-countdown"
        objectClassName="object-flower"
        src={wedding.assetImages.flowerCutoutWide.src}
      />
      <ReferenceImage
        alt=""
        className="countdown-side-image"
        objectClassName="object-countdown-couple"
        src={wedding.assetImages.couplePortrait.src}
      />
      <div className="center-copy" data-reveal>
        <Sparkles aria-hidden className="top-spark" size={18} strokeWidth={1.2} />
        <DecorativeScript word="Forever" />
        <h2 className="display section-title">The celebration begins soon</h2>
        <Ornament />
      </div>
      <div className="countdown-wrap">
        <DeferredCountdown target={wedding.date.iso} />
        <p className="countdown-note">
          Set your calendar for an <em>unforgettable evening</em> in{" "}
          {wedding.venue.city}.
        </p>
        <a
          className="light-button calendar-button"
          href={`data:text/calendar,${encodeURIComponent(calendarFile())}`}
          download="david-anamarija.ics"
        >
          Add to calendar
          <CalendarDays aria-hidden size={22} strokeWidth={1.2} />
        </a>
      </div>
    </section>
  );
}

function DayTimeline() {
  return (
    <section className="timeline-section invitation-section" id="timeline">
      <ReferenceImage
        alt=""
        className="floral-accent floral-timeline"
        objectClassName="object-flower"
        src={wedding.assetImages.bouquetCutout.src}
      />
      <ReferenceImage
        alt=""
        className="timeline-top-image"
        objectClassName="object-timeline-top"
        src={wedding.assetImages.venueTerrace.src}
      />
      <div className="center-copy timeline-head" data-reveal>
        <DecorativeScript word="Guide" />
        <h2 className="display section-title">How the evening unfolds</h2>
        <Ornament />
      </div>
      <ol className="timeline-list" data-reveal-group>
        {wedding.timeline.map((item) => (
          <li data-reveal-child key={`${item.time}-${item.label}`}>
            <time>{item.time}</time>
            <span className="timeline-marker">
              <Sparkles aria-hidden size={18} strokeWidth={1.2} />
            </span>
            <h3 className="display">{item.label}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>
      <p className="timeline-note">
        Each moment leads to the next, and we cannot wait to share them with you.
      </p>
      <ReferenceImage
        alt=""
        className="timeline-bottom-image"
        objectClassName="object-timeline-bottom"
        src={wedding.assetImages.champagneCoupes.src}
      />
    </section>
  );
}

function Venue() {
  return (
    <section className="venue-section invitation-section" id="venue">
      <ReferenceImage
        alt=""
        className="floral-accent floral-venue"
        objectClassName="object-flower"
        src={wedding.assetImages.flowerCutoutSoft.src}
      />
      <div className="venue-copy" data-reveal>
        <DecorativeScript word="Place" />
        <h2 className="display section-title">
          An evening in the heart of Skopje
        </h2>
        <Ornament />
        <p className="section-body">
          Arrive, unwind, and celebrate with us at a place where timeless
          elegance meets unforgettable views.
        </p>
        <article className="venue-card">
          <MapPin aria-hidden size={66} strokeWidth={1} />
          <div>
            <h3>{wedding.venue.name}</h3>
            <p>{wedding.venue.address}</p>
          </div>
          <span className="card-line" />
          <Car aria-hidden size={28} strokeWidth={1.2} />
          <p>{wedding.venue.parking}</p>
        </article>
        <a
          className="dark-button directions-button"
          href={wedding.venue.mapUrl}
          rel="noreferrer"
          target="_blank"
        >
          <span>Open directions</span>
          <ArrowRight aria-hidden size={24} strokeWidth={1.2} />
        </a>
      </div>
      <ReferenceImage
        alt={wedding.assetImages.venueTerrace.alt}
        className="venue-image"
        objectClassName="object-venue"
        src={wedding.assetImages.venueTerrace.src}
      />
    </section>
  );
}

function Closing() {
  return (
    <section className="closing-section invitation-section" id="closing">
      <ReferenceImage
        alt=""
        className="floral-accent floral-closing"
        objectClassName="object-flower"
        src={wedding.assetImages.bouquetCutout.src}
      />
      <div className="closing-copy" data-reveal>
        <DecorativeScript word="Celebrate" />
        <h2 className="display section-title left-title">Celebrate with us</h2>
        <Ornament />
        <p className="section-body">We would love to share this night with you.</p>
        <div className="action-row closing-actions">
          <a className="dark-button" href="#message">
            <span>Send message</span>
            <ArrowRight aria-hidden size={24} strokeWidth={1.2} />
          </a>
          <a
            className="light-button"
            href={`data:text/plain,${encodeURIComponent(invitationText())}`}
            download="david-anamarija-invitation.txt"
          >
            <Download aria-hidden size={20} strokeWidth={1.2} />
            Download invitation
          </a>
        </div>
        <p className="answer-note" id="message">
          Tell us your answer by {wedding.rsvp.deadline}.
        </p>
        <div className="faq-panel">
          <h3>FAQ</h3>
          <span className="small-rule" aria-hidden />
          <DeferredFaqAccordion items={wedding.faq} />
        </div>
        <footer className="closing-signature">
          <p className="script-text">With love,</p>
          <a className="footer-brand" href="#top" aria-label="Back to top">
            D <span>|</span> A
          </a>
          <p>{wedding.couple.names}</p>
          <Ornament align="left" />
        </footer>
      </div>

      <ReferenceImage
        alt=""
        className="closing-image"
        objectClassName="object-closing"
        src={wedding.assetImages.thankYouCard.src}
      />

      <p className="bottom-note">
        <Sparkles aria-hidden size={16} strokeWidth={1.2} />
        We can&apos;t wait to celebrate with you
        <Sparkles aria-hidden size={16} strokeWidth={1.2} />
      </p>
    </section>
  );
}

function SiteHeader() {
  return (
    <header className="site-header" aria-label="Wedding navigation">
      <a className="brand-mark nav-brand" href="#top" aria-label="David and Anamarija">
        D <span>|</span> A
      </a>
      <details className="nav-menu">
        <summary aria-label="Open menu">
          <span>Menu</span>
          <Menu aria-hidden size={28} strokeWidth={1.15} />
        </summary>
        <nav className="nav-panel" aria-label="Page sections">
          <a href="#top">Home</a>
          <a href="#details">Details</a>
          <a href="#countdown">Countdown</a>
          <a href="#timeline">Timeline</a>
          <a href="#venue">Venue</a>
          <a href="#closing">Message</a>
        </nav>
      </details>
    </header>
  );
}

function ReferenceImage({
  alt,
  className,
  loading = "lazy",
  objectClassName,
  preload = false,
  src,
}: {
  alt: string;
  className: string;
  loading?: "eager" | "lazy";
  objectClassName: string;
  preload?: boolean;
  src: string;
}) {
  return (
    <div className={`reference-image ${className}`}>
      <Image
        alt={alt}
        className={objectClassName}
        fill
        loading={preload ? undefined : loading}
        preload={preload}
        sizes="(max-width: 768px) 92vw, (max-width: 1280px) 48vw, 42vw"
        src={src}
      />
    </div>
  );
}

function Ornament({ align = "center" }: { align?: "center" | "left" }) {
  return (
    <div className={`ornament ornament-${align}`} aria-hidden>
      <span />
      <Sparkles size={22} strokeWidth={1.1} />
      <span />
    </div>
  );
}

function DecorativeScript({ word }: { word: string }) {
  return (
    <span className="decorative-script" aria-hidden>
      {word}
    </span>
  );
}

function DateStamp() {
  return (
    <div className="date-stamp" aria-label={wedding.date.numericLabel}>
      <span>{wedding.date.day}</span>
      <i />
      <span>{wedding.date.month}</span>
      <i />
      <span>{wedding.date.yearShort}</span>
    </div>
  );
}

function DetailIcon({ type }: { type: string }) {
  const props = { "aria-hidden": true, size: 44, strokeWidth: 1.15 };

  if (type === "ceremony") {
    return <Church {...props} />;
  }

  if (type === "reception") {
    return <GlassWater {...props} />;
  }

  if (type === "music") {
    return <Music2 {...props} />;
  }

  return <Shirt {...props} />;
}

function calendarFile() {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//David Anamarija Wedding//Invitation//EN",
    "BEGIN:VEVENT",
    "UID:david-anamarija-20270914@invitation",
    "DTSTAMP:20260627T000000Z",
    "DTSTART:20270914T143000Z",
    "DTEND:20270914T220000Z",
    `SUMMARY:${wedding.couple.names} Wedding`,
    `LOCATION:${wedding.venue.name}, ${wedding.venue.city}`,
    `DESCRIPTION:Wedding celebration for ${wedding.couple.names}.`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

function invitationText() {
  return [
    `${wedding.couple.names} wedding invitation`,
    `${wedding.date.display}`,
    `${wedding.venue.name}, ${wedding.venue.city}`,
    `Ceremony: ${wedding.details[0].description}`,
    `Reception: ${wedding.details[1].description}`,
    `Please send your answer by ${wedding.rsvp.deadline}.`,
  ].join("\n");
}
