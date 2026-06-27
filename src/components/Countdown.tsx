"use client";

import { useEffect, useMemo, useState } from "react";

function getCountdown(target: string) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;

  return {
    days: Math.floor(diff / day),
    hours: Math.floor((diff % day) / hour),
    minutes: Math.floor((diff % hour) / minute),
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
    ],
    [remaining],
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setRemaining(getCountdown(target));
    }, 30_000);

    return () => window.clearInterval(id);
  }, [target]);

  return (
    <div
      aria-label={`${remaining.days} days, ${remaining.hours} hours, and ${remaining.minutes} minutes until the wedding`}
      className="countdown-grid"
      data-reveal-group
    >
      {values.map((item) => (
        <div className="countdown-unit" data-reveal-child key={item.label}>
          <span className="countdown-value">
            {item.label === "Days" ? item.value : pad(item.value)}
          </span>
          <span className="label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
