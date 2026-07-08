"use client";

import dynamic from "next/dynamic";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { WeddingCountdownCard } from "./WeddingDetailCard";

type FaqItem = {
  question: string;
  answer: string;
};

const CountdownClient = dynamic(
  () => import("./Countdown").then((module) => module.Countdown),
  {
    loading: CountdownFallback,
    ssr: false,
  },
);

const FaqAccordionClient = dynamic<{ items: readonly FaqItem[] }>(
  () => import("./FaqAccordion").then((module) => module.FaqAccordion),
  {
    loading: FaqFallback,
    ssr: false,
  },
);

export function DeferredCountdown({ target }: { target: string }) {
  return (
    <ViewportIsland fallback={<CountdownFallback />}>
      <CountdownClient target={target} />
    </ViewportIsland>
  );
}

export function DeferredFaqAccordion({ items }: { items: readonly FaqItem[] }) {
  return (
    <ViewportIsland fallback={<FaqFallback />}>
      <FaqAccordionClient items={items} />
    </ViewportIsland>
  );
}

function ViewportIsland({
  children,
  fallback,
  rootMargin = "700px",
}: {
  children: ReactNode;
  fallback: ReactNode;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      return;
    }

    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setActive(true);
        observer.disconnect();
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [active, rootMargin]);

  return <div ref={ref}>{active ? children : fallback}</div>;
}

function CountdownFallback() {
  return (
    <div aria-hidden className="countdown-grid" data-reveal-group>
      {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
        <WeddingCountdownCard
          className="countdown-card"
          data-reveal-child
          key={label}
          label={label}
          value="00"
        />
      ))}
    </div>
  );
}

function FaqFallback() {
  return (
    <div aria-hidden className="faq-list" data-reveal-group>
      <div className="faq-item" data-reveal-child>
        <button disabled type="button">
          <span>Can I bring a guest?</span>
          <span className="faq-plus" />
        </button>
        <div className="faq-answer">Please refer to your invitation.</div>
      </div>
    </div>
  );
}
