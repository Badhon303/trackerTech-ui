"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardGlow } from "@/components/ui/card";
import { Orb } from "@/components/ui/orb";
import { PILLARS } from "@/lib/content";

export function AboutPillars() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <Orb className="left-0 top-1/2 h-80 w-80" color="bg-primary/15" />
      <div className="container">
        <SectionHeading
          eyebrow="About Us"
          title="Four Technologies, One Mission"
          description="We combine four deep-tech disciplines to bring transparency, efficiency, and sustainability to modern industry."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PILLARS.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full hover:-translate-y-1.5 hover:border-primary/40">
                <CardGlow />
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
