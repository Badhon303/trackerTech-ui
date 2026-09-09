"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Camera,
  CheckCircle2,
  Database,
  Link2,
  Network,
  Recycle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Orb } from "@/components/ui/orb";
import { HERO } from "@/lib/content";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const floaters = [
  { icon: Camera, className: "left-[4%] top-[18%]", depth: 36, delay: 0 },
  { icon: Network, className: "right-[8%] top-[12%]", depth: 64, delay: 0.35 },
  { icon: Database, className: "left-[10%] bottom-[14%]", depth: 52, delay: 0.7 },
  { icon: Recycle, className: "right-[10%] bottom-[18%]", depth: 28, delay: 1.05 },
];

const liveFlow = [
  { label: "Capture", detail: "Camera online", icon: Camera, tone: "text-sky-300" },
  { label: "Verify", detail: "AI recognition", icon: CheckCircle2, tone: "text-emerald-300" },
  { label: "Trace", detail: "Ledger secured", icon: Link2, tone: "text-violet-300" },
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
      className="relative isolate overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-40"
    >
      <div aria-hidden className="absolute inset-0 -z-20 grid-pattern" />
      <Orb className="left-1/3 top-0 -translate-x-1/2" color="bg-primary/25" />
      <Orb className="right-0 top-32 h-96 w-96" color="bg-secondary/20" />

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
            <div className="glass animate-float grid h-14 w-14 place-items-center rounded-2xl text-primary shadow-lg lg:h-16 lg:w-16">
              <Icon className="h-6 w-6 lg:h-7 lg:w-7" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-2xl">
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
            className="mt-6 max-w-2xl font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
          >
            {HERO.headline} <span className="text-gradient">{HERO.headlineAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {HERO.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_12px_hsl(var(--secondary))]" />
              Built for circular plastics
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
              EPR-ready by design
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 36, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-sky-400/10 to-secondary/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#071a35] p-4 shadow-2xl shadow-sky-950/30 sm:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(41,190,255,0.2),transparent_32%),linear-gradient(135deg,rgba(10,35,69,0.95),rgba(3,15,31,0.98))]" />
            <div className="relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/70">
                    TrackerVision
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">Live material intelligence</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-[11px] font-medium text-emerald-200">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                  System online
                </span>
              </div>

              <div className="relative mt-5 h-48 overflow-hidden rounded-2xl border border-sky-200/10 bg-slate-950/45 p-4 sm:h-56">
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(125,211,252,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
                <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/20 shadow-[0_0_70px_rgba(14,165,233,0.22)]" />
                <div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-sky-200/30 bg-sky-300/10 text-sky-200 shadow-[0_0_40px_rgba(56,189,248,0.25)]">
                  <Camera className="h-8 w-8" />
                  <span className="absolute -bottom-6 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-sky-100/60">
                    Vision capture
                  </span>
                </div>
                <div className="absolute left-5 top-5 rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-[11px] text-emerald-100">
                  <span className="block font-semibold">PET</span>
                  <span className="text-emerald-100/60">500ml / verified</span>
                </div>
                <div className="absolute bottom-5 right-5 rounded-lg border border-rose-300/30 bg-rose-300/10 px-3 py-2 text-[11px] text-rose-100">
                  <span className="block font-semibold">Non-PET</span>
                  <span className="text-rose-100/60">flagged for review</span>
                </div>
                <div className="absolute left-8 top-1/2 h-px w-1/4 bg-gradient-to-r from-transparent to-sky-300/60" />
                <div className="absolute right-8 top-1/2 h-px w-1/4 bg-gradient-to-l from-transparent to-sky-300/60" />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {liveFlow.map(({ label, detail, icon: Icon, tone }) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <div className={`flex items-center gap-2 ${tone}`}>
                      <Icon className="h-4 w-4" />
                      <span className="text-[11px] font-semibold">{label}</span>
                    </div>
                    <p className="mt-2 text-[10px] leading-relaxed text-white/45">{detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3">
                <span className="inline-flex items-center gap-2 text-xs text-white/60">
                  <Boxes className="h-4 w-4 text-sky-300" />
                  Chain-of-custody record
                </span>
                <span className="font-mono text-[10px] text-emerald-300">0x7F...A91C / locked</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
