"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import { useEffect } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function MotionController() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) {
      return;
    }

    lenis.on("scroll", ScrollTrigger.update);
    return () => {
      lenis.off("scroll", ScrollTrigger.update);
    };
  }, [lenis]);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduced.matches) {
      return;
    }

    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 38 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        },
      );
    });

    gsap.utils
      .toArray<HTMLElement>("[data-reveal-group]")
      .forEach((group) => {
        const children = group.querySelectorAll("[data-reveal-child]");

        gsap.fromTo(
          children,
          { autoAlpha: 0, y: 26 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: group,
              start: "top 82%",
              once: true,
            },
          },
        );
      });

    gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
      gsap.to(element, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: element.closest("section") ?? element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    gsap.utils.toArray<HTMLElement>("[data-timeline-item]").forEach((item) => {
      const marker = item.querySelector("[data-timeline-marker]");

      gsap.fromTo(
        item,
        { autoAlpha: 0.42 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 58%",
            end: "bottom 42%",
            scrub: true,
          },
        },
      );

      if (marker) {
        gsap.fromTo(
          marker,
          { scale: 0.8 },
          {
            scale: 1.28,
            backgroundColor: "#5b0f1c",
            borderColor: "#5b0f1c",
            scrollTrigger: {
              trigger: item,
              start: "top 56%",
              end: "bottom 44%",
              scrub: true,
            },
          },
        );
      }
    });

    ScrollTrigger.refresh();
  });

  return null;
}
