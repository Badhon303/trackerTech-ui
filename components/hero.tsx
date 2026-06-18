"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Boxes, Camera, Cpu, Network, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Orb } from "@/components/ui/orb";
import { HERO } from "@/lib/content";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const floaters = [
  { icon: Camera, className: "left-[8%] top-[18%]", depth: 40, delay: 0 },
  { icon: Network, className: "right-[10%] top-[12%]", depth: 70, delay: 0.4 },
  { icon: Cpu, className: "left-[14%] bottom-[16%]", depth: 55, delay: 0.8 },
  { icon: Boxes, className: "right-[14%] bottom-[20%]", depth: 30, delay: 1.2 },
];

export function Hero() {
  const layersRef = React.useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  React.useEffect(() => {
    if (reduced) return;
    const root = layersRef.current;
    if (!root) return;

    let killed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (killed) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const items = gsap.utils.toArray<HTMLElement>("[data-depth]");
        items.forEach((el) => {
          const depth = Number(el.dataset.depth ?? "40");
          gsap.to(el, {
            y: depth,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      }, root);

      cleanup = () => ctx.revert();
    })();

    return () => {
      killed = true;
      cleanup?.();
    };
  }, [reduced]);

  return (
    <section
      id="home"
      ref={layersRef}
      className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-40"
    >
      <div aria-hidden className="absolute inset-0 -z-20 grid-pattern" />
      <Orb className="left-1/2 top-0 -translate-x-1/2" color="bg-primary/30" />
      <Orb
        className="right-0 top-40 h-96 w-96"
        color="bg-secondary/20"
      />

      {/* Floating glass icons with parallax */}
      <div aria-hidden className="absolute inset-0 -z-10 hidden md:block">
        {floaters.map(({ icon: Icon, className, depth, delay }, i) => (
          <motion.div
            key={i}
            data-depth={depth}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + delay }}
            className={`absolute ${className}`}
          >
            <div className="glass animate-float grid h-16 w-16 place-items-center rounded-2xl text-primary shadow-lg">
              <Icon className="h-7 w-7" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge>
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {HERO.eyebrow}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Engineering Intelligence for the{" "}
          <span className="text-gradient">Industries That Move the World</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          {HERO.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Link href={HERO.primaryCta.href}>
            <Button size="lg" className="w-full sm:w-auto">
              {HERO.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={HERO.secondaryCta.href}>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              {HERO.secondaryCta.label}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
