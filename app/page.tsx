import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutPillars } from "@/components/about-pillars";
import { ProcessTimeline } from "@/components/process-timeline";
import { Solutions } from "@/components/solutions";
import { WhyUs } from "@/components/why-us";
import { Industries } from "@/components/industries";
import { Roadmap } from "@/components/roadmap";
import { Team } from "@/components/team";
import { ContactCta } from "@/components/contact-cta";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { VisitorCounter } from "@/components/visitor-counter";
import { MissionVision } from "@/components/mission-vision";
import { BrochureOverview } from "@/components/brochure-overview";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutPillars />
        <section className="container pb-12 sm:pb-16"><MissionVision /></section>
        <ProcessTimeline />
        <Solutions />
        <WhyUs />
        <Industries />
        <Roadmap />
        <Team />
        <Gallery />
        <BrochureOverview compact />
        <VisitorCounter />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
