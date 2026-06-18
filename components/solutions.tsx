"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Chip } from "@/components/ui/badge";
import { Orb } from "@/components/ui/orb";
import { SOLUTIONS } from "@/lib/content";

export function Solutions() {
  return (
    <section id="solutions" className="relative scroll-mt-24 py-24 sm:py-32">
      <Orb className="left-1/2 top-10 h-96 w-96 -translate-x-1/2" color="bg-primary/12" />
      <div className="container">
        <SectionHeading
          eyebrow="Solutions"
          title="Flagship Solutions"
          description="Production-ready systems that pair on-chain traceability with real-time computer vision."
        />

        <div className="mt-16 space-y-24">
          {SOLUTIONS.map((solution, i) => {
            const imageRight = i % 2 === 1;
            return (
              <div
                key={solution.id}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <motion.div
                  initial={{ opacity: 0, x: imageRight ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={imageRight ? "lg:order-2" : ""}
                >
                  <div className="relative">
                    <div
                      aria-hidden
                      className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/20 blur-2xl"
                    />
                    <div className="glass-card overflow-hidden rounded-3xl border border-border">
                      <Image
                        src={solution.image}
                        alt={solution.imageAlt}
                        width={1200}
                        height={800}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={imageRight ? "lg:order-1" : ""}
                >
                  <Chip>{solution.eyebrow}</Chip>
                  <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                    {solution.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-primary/15 text-primary">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
