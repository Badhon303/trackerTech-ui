"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardGlow } from "@/components/ui/card";
import { INDUSTRIES } from "@/lib/content";

export function Industries() {
  return (
    <section id="industries" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Industries"
          title="Industries We Serve"
          description="Our systems adapt to the realities of demanding industrial environments."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5"
        >
          {INDUSTRIES.map((industry) => (
            <motion.div
              key={industry.title}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <Card className="flex h-full flex-col items-center gap-4 text-center hover:-translate-y-1.5 hover:border-primary/40">
                <CardGlow />
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                  <industry.icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-medium">{industry.title}</span>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
