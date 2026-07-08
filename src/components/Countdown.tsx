"use client";

import { useEffect, useMemo, useState } from "react";
import { WeddingCountdownCard } from "./WeddingDetailCard";

export type CountdownLabels = {
  labels: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  aria: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    conjunction: string;
    suffix: string;
  };
};

function getCountdown(target: string) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;

  return {
    days: Math.floor(diff / day),
    hours: Math.floor((diff % day) / hour),
    minutes: Math.floor((diff % hour) / minute),
    seconds: Math.floor((diff % minute) / 1000),
  };
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function Countdown({
  labels,
  target,
}: {
  labels: CountdownLabels;
  target: string;
}) {
  const [remaining, setRemaining] = useState(() => getCountdown(target));
  const values = useMemo(
    () => [
      { value: remaining.days, label: labels.labels.days },
      { value: remaining.hours, label: labels.labels.hours },
      { value: remaining.minutes, label: labels.labels.minutes },
      { value: remaining.seconds, label: labels.labels.seconds },
    ],
    [labels, remaining],
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setRemaining(getCountdown(target));
    }, 1000);

    return () => window.clearInterval(id);
  }, [target]);

  return (
    <div
      aria-label={`${remaining.days} ${labels.aria.days}, ${remaining.hours} ${labels.aria.hours}, ${remaining.minutes} ${labels.aria.minutes} ${labels.aria.conjunction} ${remaining.seconds} ${labels.aria.seconds} ${labels.aria.suffix}`}
      className="countdown-grid"
      data-reveal-group
    >
      {values.map((item) => (
        <WeddingCountdownCard
          className="countdown-card"
          data-reveal-child
          key={item.label}
          label={item.label}
          value={pad(item.value)}
        />
      ))}
    </div>
  );
}
