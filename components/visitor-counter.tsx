"use client";

import * as React from "react";
import { Activity, Globe2, UsersRound } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

type Counts = { today: number; lifetime: number };

export function VisitorCounter() {
  const [counts, setCounts] = React.useState<Counts | null>(null);

  React.useEffect(() => {
    let visitorId = window.localStorage.getItem("trackertech-visitor-id");
    const isNewBrowser = !visitorId;
    if (!visitorId) {
      visitorId = window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      window.localStorage.setItem("trackertech-visitor-id", visitorId);
    }
    const storedLifetime = Number(window.localStorage.getItem("trackertech-lifetime-visitors") ?? "0");
    const lifetime = isNewBrowser ? storedLifetime + 1 : Math.max(1, storedLifetime);
    window.localStorage.setItem("trackertech-lifetime-visitors", String(lifetime));
    setCounts({ today: 1, lifetime });
  }, []);

  const display = (value: number | undefined) => value?.toLocaleString() ?? "—";
  const stats = [
    { label: "Unique visitors today", value: display(counts?.today), icon: Activity, hint: "This browser · resets at midnight Bangladesh time" },
    { label: "Unique visitors lifetime", value: display(counts?.lifetime), icon: UsersRound, hint: "This browser only" },
  ];

  return (
    <section id="visitors" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="container">
        <SectionHeading eyebrow="Our community" title="Growing a cleaner future together" description="A small live snapshot of people visiting TrackerTech." />
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {stats.map(({ label, value, icon: Icon, hint }) => (
            <div key={label} className="relative overflow-hidden rounded-3xl border border-border bg-card/80 p-6 shadow-sm sm:p-8">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative flex items-center gap-3 text-muted-foreground"><span className="grid h-10 w-10 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span><span className="text-sm font-medium">{label}</span></div>
              <p className="relative mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">{value}</p>
              <p className="relative mt-2 text-xs text-muted-foreground">{hint}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-5 flex max-w-4xl items-center justify-center gap-2 text-center text-xs text-muted-foreground">
          <Globe2 className="h-3.5 w-3.5 shrink-0" />
          Browser-local estimate: other devices are not included. A random ID is stored on this device; no name or email is collected.
        </p>
      </div>
    </section>
  );
}
