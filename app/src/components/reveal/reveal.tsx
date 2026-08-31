import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Motivated scroll-entrance for a group of `[data-reveal]` children.
 * Screenshot-safe: elements start slightly offset (transform only, never
 * opacity:0) so every section is fully legible in a full-page static
 * screenshot even before the trigger fires, then settle into place on
 * scroll. Reduced-motion renders the final state immediately.
 */
export function Reveal({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
    if (reduce || targets.length === 0) return;

    gsap.set(targets, { y: 30, scale: 0.985 });
    const trigger = ScrollTrigger.create({
      once: true,
      start: "top 82%",
      trigger: el,
      onEnter: () => {
        gsap.to(targets, {
          duration: 0.9,
          ease: "power3.out",
          scale: 1,
          stagger,
          y: 0,
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [stagger]);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
