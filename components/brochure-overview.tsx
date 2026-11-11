import { ArrowRight, ArrowUpRight, BadgeCheck, Blocks, Camera, Recycle } from "lucide-react";
import Link from "next/link";
import { BROCHURES } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";

const icons = [Camera, Blocks];

export function BrochureOverview({ compact = false }: { compact?: boolean }) {
  return (
    <section id={compact ? "brochures" : undefined} className="relative py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Our brochures"
          title="A clearer picture of every bottle"
          description="Explore the two parts of our plastic traceability work: AI-powered identification and end-to-end digital reporting."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {BROCHURES.map((brochure, index) => {
            const Icon = icons[index];
            return (
              <article key={brochure.number} className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-emerald-400 to-sky-400" />
                <div className="grid gap-7 p-6 sm:p-8 md:grid-cols-[0.85fr_1.15fr]">
                  <div className="relative flex min-h-56 flex-col justify-between overflow-hidden rounded-2xl bg-[#081c34] p-6 text-white">
                    <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
                    <div className="relative flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Page {brochure.number}</span>
                      <Icon className="h-5 w-5 text-emerald-300" />
                    </div>
                    <div className="relative">
                      <p className="text-xs font-medium uppercase tracking-[0.15em] text-sky-200">{brochure.subtitle}</p>
                      <h3 className="mt-3 font-display text-2xl font-bold leading-tight">{brochure.title}</h3>
                      <div className="mt-5 flex items-center gap-2 text-xs text-white/65"><Recycle className="h-4 w-4 text-emerald-300" /> Built for a cleaner Bangladesh</div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm leading-relaxed text-muted-foreground">{brochure.description}</p>
                    <ul className="mt-5 space-y-3">
                      {brochure.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm">
                          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{point}
                        </li>
                      ))}
                    </ul>
                    <Link href="/#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3">
                      Talk to our team <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {compact && <Link href="/about#mission-vision" className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition hover:border-primary/40 hover:text-primary">More about TrackerTech <ArrowUpRight className="h-4 w-4" /></Link>}
      </div>
    </section>
  );
}
