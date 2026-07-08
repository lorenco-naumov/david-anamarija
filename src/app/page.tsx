import Image from "next/image";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  Church,
  ClipboardSignature,
  GlassWater,
  MapPin,
  Menu,
  Music2,
  Shirt,
  Sparkles,
} from "lucide-react";
import {
  DeferredCountdown,
} from "@/components/DeferredClientComponents";
import { DocumentLanguage } from "@/components/DocumentLanguage";
import { MotionController } from "@/components/MotionController";
import { WeddingDetailCard, WeddingVenueCard } from "@/components/WeddingDetailCard";
import { type Locale, resolveLocale, weddingContent } from "@/content/wedding";

type Wedding = (typeof weddingContent)[Locale];
type HomeSearchParams = Promise<{
  lang?: string | string[] | undefined;
}>;

export default async function Home({
  searchParams,
}: {
  searchParams: HomeSearchParams;
}) {
  const locale = resolveLocale((await searchParams).lang);
  const wedding = weddingContent[locale];

  return (
    <>
      <DocumentLanguage lang={locale} />
      <SiteHeader locale={locale} wedding={wedding} />
      <main className="invitation-page" data-locale={locale} lang={locale}>
        <FloralDecoration placement="top" />
        <div className="invitation-content">
          <MotionController />
          <Hero wedding={wedding} />
          <WeddingDetails locale={locale} wedding={wedding} />
          <CountdownSection wedding={wedding} />
          <DayTimeline wedding={wedding} />
          <Venue wedding={wedding} />
          <Closing wedding={wedding} />
        </div>
        <FloralDecoration placement="bottom" />
      </main>
      <HashScrollScript />
    </>
  );
}

function FloralDecoration({ placement }: { placement: "top" | "bottom" }) {
  return (
    <div className={`${placement}-floral-decoration page-floral-decoration`} aria-hidden>
      <Image
        alt=""
        className="page-floral-decoration-image"
        fill
        preload
        sizes="100vw"
        src="/images/wedding-assets/floral-scroll-crown.png"
      />
    </div>
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

function Hero({ wedding }: { wedding: Wedding }) {
  return (
    <section className="hero-section invitation-section" id="top">
      <div className="hero-copy" data-reveal>
        <div className="hero-lockup">
          <h1 className="couple-line" aria-label={wedding.couple.names}>
            <span className="couple-name-main">{wedding.couple.firstName}</span>
            <span className="couple-name-amp">&amp;</span>
            <span className="couple-name-second">
              {wedding.couple.secondName}
            </span>
          </h1>
          <DateStamp wedding={wedding} />
        </div>
      </div>

      <div className="hero-art" aria-hidden data-reveal>
        <div className="hero-dance-image">
          <Image
            alt=""
            fill
            preload
            sizes="(max-width: 1024px) 92vw, 58vw"
            src="/images/wedding-assets/hero-dance-cutout.png"
          />
        </div>
      </div>
    </section>
  );
}

function WeddingDetails({
  locale,
  wedding,
}: {
  locale: Locale;
  wedding: Wedding;
}) {
  const copy = wedding.copy;

  return (
    <section className="details-section invitation-section" id="details">
      <div className="details-copy" data-reveal>
        <h2 className="display section-title left-title">
          {copy.detailsHeading}
        </h2>
        <p className="section-body">{copy.detailsBody}</p>
      </div>

      <div className="detail-grid" data-reveal-group>
        {wedding.details.map((detail, index) => {
          return (
            <WeddingDetailCard
              aria-label={
                "mapUrl" in detail
                  ? getDirectionsAriaLabel(locale, detail.title)
                  : undefined
              }
              data-reveal-child
              href={"mapUrl" in detail ? detail.mapUrl : undefined}
              icon={<DetailIcon type={detail.icon} />}
              key={detail.title}
              location={"location" in detail ? detail.location : undefined}
              note={"note" in detail ? detail.note : undefined}
              number={index + 1}
              target={"mapUrl" in detail ? "_blank" : undefined}
              time={"time" in detail ? detail.time : undefined}
              title={detail.title}
            />
          );
        })}
      </div>
    </section>
  );
}

function CountdownSection({ wedding }: { wedding: Wedding }) {
  const copy = wedding.copy;

  return (
    <section className="countdown-section invitation-section" id="countdown">
      <div className="center-copy" data-reveal>
        <h2 className="display section-title">{copy.countdownHeading}</h2>
      </div>
      <div className="countdown-wrap">
        <DeferredCountdown
          labels={copy.countdown}
          target={wedding.date.iso}
        />
        <p className="countdown-note">
          {copy.countdownNotePrefix} <em>{copy.countdownNoteEmphasis}</em>{" "}
          {copy.countdownNoteSuffix}{" "}
          {wedding.venue.city}.
        </p>
      </div>
    </section>
  );
}

function DayTimeline({ wedding }: { wedding: Wedding }) {
  return (
    <section className="timeline-section invitation-section" id="timeline">
      <div className="center-copy timeline-head" data-reveal>
        <h2 className="display section-title">
          {wedding.copy.timelineHeading}
        </h2>
      </div>
      <ol
        className="timeline-list"
        data-reveal-group
        style={{ "--timeline-count": wedding.timeline.length } as CSSProperties}
      >
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
    </section>
  );
}

function Venue({ wedding }: { wedding: Wedding }) {
  return (
    <section className="venue-section invitation-section" id="venue">
      <div className="venue-copy" data-reveal>
        <h2 className="display section-title">
          {wedding.copy.venueHeading}
        </h2>
        <Ornament />
        <p className="section-body">{wedding.venue.arrival}</p>
        <div className="venue-card-grid" data-reveal-group>
          {wedding.venue.locations.map((location) => (
            <WeddingVenueCard
              action={
                <a
                  className="dark-button venue-card-button"
                  href={location.mapUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>{location.buttonLabel}</span>
                  <ArrowRight aria-hidden size={20} strokeWidth={1.2} />
                </a>
              }
              address={location.address}
              className="venue-station-card"
              data-reveal-child
              icon={<MapPin aria-hidden size={52} strokeWidth={1} />}
              key={location.label}
              label={location.label}
              note={"note" in location ? location.note : undefined}
              title={location.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing({ wedding }: { wedding: Wedding }) {
  const copy = wedding.copy;

  return (
    <section className="closing-section invitation-section" id="closing">
      <div className="closing-copy" data-reveal>
        <h2 className="display section-title left-title">
          {copy.closingHeading}
        </h2>
        <p className="section-body">{copy.closingBody}</p>
        <p className="answer-note" id="message">
          {copy.answerNotePrefix} {wedding.rsvp.deadline}.
        </p>
        <footer className="closing-signature">
          <p className="script-text">{copy.signatureScript}</p>
          <p>{copy.signatureNames}</p>
        </footer>
      </div>
    </section>
  );
}

function SiteHeader({
  locale,
  wedding,
}: {
  locale: Locale;
  wedding: Wedding;
}) {
  const nav = wedding.copy.nav;

  return (
    <header className="site-header" aria-label={nav.ariaLabel} lang={locale}>
      <a
        className="brand-mark nav-brand"
        href="#top"
        aria-label={nav.brandAriaLabel}
      >
        {wedding.couple.initials.first} <span>|</span>{" "}
        {wedding.couple.initials.second}
      </a>
      <div className="header-actions">
        <nav
          aria-label={wedding.copy.languageAriaLabel}
          className="language-switcher"
        >
          <a
            aria-current={locale === "mk" ? "page" : undefined}
            href="?lang=mk#top"
            lang="mk"
          >
            MK
          </a>
          <span aria-hidden>|</span>
          <a
            aria-current={locale === "en" ? "page" : undefined}
            href="?lang=en#top"
            lang="en"
          >
            EN
          </a>
        </nav>
        <details className="nav-menu">
          <summary aria-label={nav.menuAriaLabel}>
            <span>{nav.menuLabel}</span>
            <Menu aria-hidden size={28} strokeWidth={1.15} />
          </summary>
          <nav className="nav-panel" aria-label={nav.panelAriaLabel}>
            <a href="#top">{nav.links.top}</a>
            <a href="#details">{nav.links.details}</a>
            <a href="#countdown">{nav.links.countdown}</a>
            <a href="#timeline">{nav.links.timeline}</a>
            <a href="#venue">{nav.links.venue}</a>
            <a href="#closing">{nav.links.closing}</a>
          </nav>
        </details>
      </div>
    </header>
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

function DateStamp({ wedding }: { wedding: Wedding }) {
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

  if (type === "registry") {
    return <ClipboardSignature {...props} />;
  }

  if (type === "reception") {
    return <GlassWater {...props} />;
  }

  if (type === "music") {
    return <Music2 {...props} />;
  }

  return <Shirt {...props} />;
}

function getDirectionsAriaLabel(locale: Locale, title: string) {
  if (locale === "mk") {
    return `Отвори насоки: ${title}`;
  }

  return `Open ${title} directions`;
}
