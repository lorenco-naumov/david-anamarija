"use client";

import { useEffect } from "react";

export function DocumentLanguage({ lang }: { lang: "en" | "mk" }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
