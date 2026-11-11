import { Compass, Eye } from "lucide-react";
import { COMPANY_STORY } from "@/lib/content";

export function MissionVision() {
  return (
    <div id="mission-vision" className="grid scroll-mt-28 gap-5 md:grid-cols-2">
      <article className="group relative overflow-hidden rounded-3xl border border-border bg-card/70 p-7 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 sm:p-9">
        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20" />
        <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
          <Compass className="h-6 w-6" />
        </span>
        <p className="relative mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our mission</p>
        <h3 className="relative mt-2 font-display text-2xl font-bold">Make every recovery count.</h3>
        <p className="relative mt-4 max-w-xl leading-relaxed text-muted-foreground">{COMPANY_STORY.mission}</p>
      </article>
      <article className="group relative overflow-hidden rounded-3xl border border-border bg-card/70 p-7 shadow-sm transition hover:-translate-y-1 hover:border-secondary/40 sm:p-9">
        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-secondary/10 blur-2xl transition group-hover:bg-secondary/20" />
        <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-secondary/25 bg-secondary/10 text-secondary">
          <Eye className="h-6 w-6" />
        </span>
        <p className="relative mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Our vision</p>
        <h3 className="relative mt-2 font-display text-2xl font-bold">A circular future for Bangladesh.</h3>
        <p className="relative mt-4 max-w-xl leading-relaxed text-muted-foreground">{COMPANY_STORY.vision}</p>
      </article>
    </div>
  );
}
