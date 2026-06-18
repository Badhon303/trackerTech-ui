"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardGlow } from "@/components/ui/card";
import { Orb } from "@/components/ui/orb";
import { PROCESS_STEPS } from "@/lib/content";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

export function ProcessTimeline() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const lineRef = React.useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  React.useEffect(() => {
    if (reduced) {
      if (lineRef.current) lineRef.current.style.transform = "scaleY(1)";
      return;
    }
    const container = containerRef.current;
    const line = lineRef.current;
    if (!container || !line) return;

    let killed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (killed) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top",
            scrollTrigger: {
              trigger: container,
              start: "top 70%",
              end: "bottom 80%",
              scrub: true,
            },
          },
        );
      }, container);

      cleanup = () => ctx.revert();
    })();

    return () => {
      killed = true;
      cleanup?.();
    };
  }, [reduced]);

  return (
    <section id="process" className="relative scroll-mt-24 py-24 sm:py-32">
      <Orb className="right-0 top-20 h-80 w-80" color="bg-secondary/15" />
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="Blockchain-Powered Plastic Bottle Tracking"
          description="Every batch is recorded on-chain — from supplier intake to final processing — for verifiable, end-to-end traceability."
        />

        <div ref={containerRef} className="relative mt-16 sm:mt-20">
          {/* connecting line (draws in on scroll) */}
          <div
            aria-hidden
            className="absolute left-[27px] top-2 h-[calc(100%-1rem)] w-px bg-border md:left-1/2 md:-translate-x-1/2"
          >
            <div
              ref={lineRef}
              className="h-full w-full origin-top bg-gradient-to-b from-primary to-secondary"
            />
          </div>

          <ol className="space-y-10 md:space-y-16">
            {PROCESS_STEPS.map((step, i) => {
              const isRight = i % 2 === 1;
              return (
                <li key={step.number} className="relative md:grid md:grid-cols-2 md:gap-12">
                  {/* node */}
                  <span
                    aria-hidden
                    className="absolute left-[18px] top-1 z-10 grid h-5 w-5 place-items-center rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </span>

                  <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className={
                      isRight
                        ? "pl-14 md:col-start-2 md:pl-0"
                        : "pl-14 md:pr-12 md:text-right"
                    }
                  >
                    <Card className="hover:border-primary/40">
                      <CardGlow />
                      <div
                        className={`flex items-center gap-4 ${
                          isRight ? "" : "md:flex-row-reverse"
                        }`}
                      >
                        <span className="font-display text-4xl font-bold text-primary/40">
                          {step.number}
                        </span>
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                          <step.icon className="h-5 w-5" />
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-xl font-semibold">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </Card>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
