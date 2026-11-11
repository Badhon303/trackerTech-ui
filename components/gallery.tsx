import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Images } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

// Add new event photos to this list as they become available.
const galleryItems = [
  { src: "/gallery/ai-business-summit-2026-1.png", alt: "TrackerTech plastic-waste tracking booth at AI Business Summit 2026", title: "AI Business Summit 2026", detail: "TrackerTech exhibition booth" },
  { src: "/gallery/ai-business-summit-2026-2.png", alt: "Wide view of the TrackerTech booth at AI Business Summit 2026", title: "AI Business Summit 2026", detail: "AI tracking solution for plastic waste" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-primary/[0.06] to-transparent" />
      <div className="container">
        <SectionHeading eyebrow="Gallery" title="Our exhibition moments" description="TrackerTech at AI Business Summit 2026, showcasing AI tracking for plastic waste." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {galleryItems.map((item, index) => (
            <article key={item.src} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:border-primary/40">
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-950">
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/55 px-3 py-1 text-xs text-white backdrop-blur">0{index + 1} / 02</span>
              </div>
              <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                <div><h3 className="font-display text-lg font-semibold">{item.title}</h3><p className="mt-1 text-sm text-muted-foreground">{item.detail}</p></div>
                <Images className="h-5 w-5 shrink-0 text-primary" />
              </div>
            </article>
          ))}
        </div>
        <Link href="/about" className="mx-auto mt-7 flex w-fit items-center gap-2 text-sm font-semibold text-primary">Discover our work <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
    </section>
  );
}
