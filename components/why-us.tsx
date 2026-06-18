"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardGlow } from "@/components/ui/card";
import { CountUp } from "@/components/ui/count-up";
import { Orb } from "@/components/ui/orb";
import { VALUES, STATS } from "@/lib/content";

const donutColors = [
  "hsl(var(--primary))",
  "hsl(var(--secondary))",
  "hsl(var(--primary) / 0.6)",
  "hsl(var(--secondary) / 0.6)",
];

function DonutChart() {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="relative mx-auto h-56 w-56">
      <svg viewBox="0 0 180 180" className="h-full w-full -rotate-90">
        <circle
          cx="90"
          cy="90"
          r={radius}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="16"
        />
        {VALUES.map((v, i) => {
          const dash = (v.share / 100) * circumference;
          const segment = (
            <motion.circle
              key={v.title}
              cx="90"
              cy="90"
              r={radius}
              fill="none"
              stroke={donutColors[i]}
              strokeWidth="16"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={-offset}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            />
          );
          offset += dash;
          return segment;
        })}
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="font-display text-3xl font-bold">4</p>
          <p className="text-xs text-muted-foreground">Core focus areas</p>
        </div>
      </div>
    </div>
  );
}

export function WhyUs() {
  return (
    <section id="why" className="relative scroll-mt-24 py-24 sm:py-32">
      <Orb className="left-0 top-1/3 h-80 w-80" color="bg-secondary/15" />
      <div className="container">
        <SectionHeading
          eyebrow="Why Tracker Tech"
          title="Built on Four Commitments"
          description="Our value proposition runs through everything we engineer."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {VALUES.map((value) => (
              <motion.div
                key={value.title}
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full hover:border-primary/40">
                  <CardGlow />
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-secondary/30 bg-secondary/10 text-secondary">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card mx-auto w-full max-w-sm rounded-3xl p-8"
          >
            <DonutChart />
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {VALUES.map((v, i) => (
                <li key={v.title} className="flex items-center gap-2 text-xs">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: donutColors[i] }}
                  />
                  <span className="text-muted-foreground">{v.title}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-center text-[11px] text-muted-foreground">
              Chart is illustrative only.
            </p>
          </motion.div>
        </div>

        {/* Animated stats */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-card p-6 text-center">
              <p className="font-display text-3xl font-bold text-primary sm:text-4xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
