"use client";

import { useEffect, useMemo, useState } from "react";
import { WeddingCountdownCard } from "./WeddingDetailCard";

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

export function Countdown({ target }: { target: string }) {
  const [remaining, setRemaining] = useState(() => getCountdown(target));
  const values = useMemo(
    () => [
      { value: remaining.days, label: "Days" },
      { value: remaining.hours, label: "Hours" },
      { value: remaining.minutes, label: "Minutes" },
      { value: remaining.seconds, label: "Seconds" },
    ],
    [remaining],
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setRemaining(getCountdown(target));
    }, 1000);

    return () => window.clearInterval(id);
  }, [target]);

  return (
    <div
      aria-label={`${remaining.days} days, ${remaining.hours} hours, ${remaining.minutes} minutes, and ${remaining.seconds} seconds until the wedding`}
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
