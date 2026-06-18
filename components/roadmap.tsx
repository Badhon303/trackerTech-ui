"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardGlow } from "@/components/ui/card";
import { Chip } from "@/components/ui/badge";
import { Orb } from "@/components/ui/orb";
import { ROADMAP } from "@/lib/content";

export function Roadmap() {
  return (
    <section id="roadmap" className="relative scroll-mt-24 py-24 sm:py-32">
      <Orb className="right-0 top-1/4 h-80 w-80" color="bg-primary/12" />
      <div className="container">
        <SectionHeading
          eyebrow="Our Journey"
          title="Roadmap"
          description="Stage names are placeholders — the client will fill in real dates and milestones before launch."
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-[27px] top-0 h-full w-px bg-gradient-to-b from-primary via-border to-secondary md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {ROADMAP.map((item, i) => {
              const isRight = i % 2 === 1;
              return (
                <div
                  key={item.title}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  <span
                    aria-hidden
                    className="absolute left-[19px] top-6 z-10 h-4 w-4 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2"
                  />
                  <motion.div
                    initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55 }}
                    className={
                      isRight ? "pl-14 md:col-start-2 md:pl-0" : "pl-14 md:pr-0"
                    }
                  >
                    <Card className="overflow-hidden p-0 hover:border-primary/40">
                      <CardGlow />
                      <div className="relative h-40 w-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      </div>
                      <div className="p-6">
                        <Chip>{item.phase}</Chip>
                        <h3 className="mt-3 font-display text-xl font-semibold">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                        <button
                          type="button"
                          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-secondary"
                        >
                          Learn more
                          <ArrowUpRight className="h-4 w-4" />
                        </button>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
