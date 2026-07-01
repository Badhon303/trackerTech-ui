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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutPillars />
        <ProcessTimeline />
        <Solutions />
        <WhyUs />
        <Industries />
        <Roadmap />
        {/* <Team /> */}
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
