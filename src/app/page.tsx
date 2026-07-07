import Image from "next/image";
import {
  ArrowRight,
  Car,
  Church,
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
import { MotionController } from "@/components/MotionController";
import { wedding } from "@/content/wedding";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="invitation-page">
        <FloralDecoration placement="top" />
        <div className="invitation-content">
          <MotionController />
          <Hero />
          <WeddingDetails />
          <CountdownSection />
          <DayTimeline />
          <Venue />
          <Closing />
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

function Hero() {
  return (
    <section className="hero-section invitation-section" id="top">
      <div className="hero-copy" data-reveal>
        <div className="hero-lockup">
          <h1 className="couple-line" aria-label={wedding.couple.names}>
            <span className="couple-name-main">Ana Marija</span>
            <span className="couple-name-amp">&amp;</span>
            <span className="couple-name-second">David</span>
          </h1>
          <DateStamp />
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

function WeddingDetails() {
  return (
    <section className="details-section invitation-section" id="details">
      <div className="details-copy" data-reveal>
        <h2 className="display section-title left-title">The Details</h2>
        <p className="section-body">Everything you need for the evening.</p>
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
      <div className="center-copy" data-reveal>
        <h2 className="display section-title">The celebration begins soon</h2>
      </div>
      <div className="countdown-wrap">
        <DeferredCountdown target={wedding.date.iso} />
        <p className="countdown-note">
          Set your calendar for an <em>unforgettable evening</em> in{" "}
          {wedding.venue.city}.
        </p>
      </div>
    </section>
  );
}

function DayTimeline() {
  return (
    <section className="timeline-section invitation-section" id="timeline">
      <div className="center-copy timeline-head" data-reveal>
        <h2 className="display section-title">How the evening unfolds</h2>
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
    </section>
  );
}

function Venue() {
  return (
    <section className="venue-section invitation-section" id="venue">
      <div className="venue-copy" data-reveal>
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
    </section>
  );
}

function Closing() {
  return (
    <section className="closing-section invitation-section" id="closing">
      <div className="closing-copy" data-reveal>
        <h2 className="display section-title left-title">Celebrate with us</h2>
        <p className="section-body">We would love to share this night with you.</p>
        <p className="answer-note" id="message">
          Tell us your answer by {wedding.rsvp.deadline}.
        </p>
        <footer className="closing-signature">
          <p className="script-text">With love</p>
          <p>Jovovikj &amp; Bozhinovi</p>
        </footer>
      </div>
    </section>
  );
}

function SiteHeader() {
  return (
    <header className="site-header" aria-label="Wedding navigation">
      <a className="brand-mark nav-brand" href="#top" aria-label="Ana Marija and David">
        A <span>|</span> D
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

function Ornament({ align = "center" }: { align?: "center" | "left" }) {
  return (
    <div className={`ornament ornament-${align}`} aria-hidden>
      <span />
      <Sparkles size={22} strokeWidth={1.1} />
      <span />
    </div>
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
