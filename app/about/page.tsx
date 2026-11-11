import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MissionVision } from "@/components/mission-vision";
import { BrochureOverview } from "@/components/brochure-overview";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About TrackerTech",
  description: "Our mission, vision, and AI-powered approach to plastic traceability in Bangladesh.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
          <div aria-hidden className="absolute inset-0 -z-10 grid-pattern" />
          <div aria-hidden className="absolute left-1/2 top-16 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]" />
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"><Sparkles className="h-4 w-4" /> About TrackerTech</span>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">Turning plastic waste into <span className="text-gradient">trusted data.</span></h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">We connect AI vision and secure digital records to make plastic recovery easier to verify, improve, and report across Bangladesh.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="#mission-vision"><Button size="lg">Our mission & vision <ArrowDown className="h-4 w-4" /></Button></Link>
                <Link href="/#solutions"><Button size="lg" variant="outline">Explore our technology <ArrowRight className="h-4 w-4" /></Button></Link>
              </div>
            </div>
            <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
              {[
                { label: "AI that identifies", detail: "Recognize bottles and materials", icon: Sparkles },
                { label: "Records you can trust", detail: "Keep each verified handoff", icon: ShieldCheck },
                { label: "A circular economy", detail: "Help valuable material return", icon: Leaf },
              ].map(({ label, detail, icon: Icon }) => <div key={label} className="rounded-2xl border border-border bg-card/75 p-5 text-center"><Icon className="mx-auto h-5 w-5 text-primary" /><p className="mt-3 font-display font-semibold">{label}</p><p className="mt-1 text-xs text-muted-foreground">{detail}</p></div>)}
            </div>
          </div>
        </section>
        <section className="container pb-10 sm:pb-16"><MissionVision /></section>
        <BrochureOverview />
      </main>
      <Footer />
    </>
  );
}
