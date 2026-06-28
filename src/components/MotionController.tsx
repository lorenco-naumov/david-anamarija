"use client";

import { useEffect } from "react";

type Killable = {
  kill: () => void;
};

export function MotionController() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduced.matches) {
      return;
    }

    let cancelled = false;
    let idleId: number | null = null;
    let timeoutId: number | null = null;
    let cleanupAnimations = () => {};

    async function bootMotion() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const animations: Killable[] = [];

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        animations.push(
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
          ),
        );
      });

      gsap.utils
        .toArray<HTMLElement>("[data-reveal-group]")
        .forEach((group) => {
          const children = group.querySelectorAll("[data-reveal-child]");

          animations.push(
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
            ),
          );
        });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        animations.push(
          gsap.to(element, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: element.closest("section") ?? element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }),
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((element, index) => {
        animations.push(
          gsap.to(element, {
            xPercent: index % 2 === 0 ? 8 : -8,
            rotate: index % 2 === 0 ? 5 : -5,
            ease: "none",
            scrollTrigger: {
              trigger: element.closest("section") ?? element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }),
        );
      });

      gsap.utils
        .toArray<HTMLElement>("[data-timeline-item]")
        .forEach((item) => {
          const marker = item.querySelector("[data-timeline-marker]");

          animations.push(
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
            ),
          );

          if (marker) {
            animations.push(
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
              ),
            );
          }
        });

      ScrollTrigger.refresh();

      cleanupAnimations = () => {
        animations.forEach((animation) => animation.kill());
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    function scheduleMotion() {
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(() => void bootMotion(), {
          timeout: 1600,
        });
        return;
      }

      timeoutId = window.setTimeout(() => void bootMotion(), 900);
    }

    if (document.readyState === "complete") {
      scheduleMotion();
    } else {
      window.addEventListener("load", scheduleMotion, { once: true });
    }

    return () => {
      cancelled = true;

      if (idleId !== null && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }

      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }

      window.removeEventListener("load", scheduleMotion);
      cleanupAnimations();
    };
  }, []);

  return null;
}
