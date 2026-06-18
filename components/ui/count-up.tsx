"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
}

/** GSAP-driven count-up; respects prefers-reduced-motion by rendering the final value. */
export function CountUp({ value, suffix = "", duration = 1.6 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let killed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (killed) return;
      gsap.registerPlugin(ScrollTrigger);

      const obj = { val: 0 };
      const tween = gsap.to(obj, {
        val: value,
        duration,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        onUpdate: () => setDisplay(Math.round(obj.val)),
      });

      cleanup = () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    })();

    return () => {
      killed = true;
      cleanup?.();
    };
  }, [value, duration, reduced]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
