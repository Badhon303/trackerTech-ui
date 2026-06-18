"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardGlow } from "@/components/ui/card";
import { TEAM } from "@/lib/content";

// NOTE: Team members are PLACEHOLDERS. Populate with real data or omit from nav.
export function Team() {
  return (
    <section id="team" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Our People"
          title="The Team"
          description="Placeholder members — swap in real bios and photos before launch."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden p-0 text-center hover:border-primary/40">
                <CardGlow />
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <div className="mt-4 flex justify-center gap-3 text-muted-foreground">
                    <a href="#" aria-label={`${member.name} on LinkedIn`} className="hover:text-primary">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label={`${member.name} on Twitter`} className="hover:text-primary">
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label={`${member.name} on GitHub`} className="hover:text-primary">
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
