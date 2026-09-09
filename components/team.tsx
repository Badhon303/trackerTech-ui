"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardGlow } from "@/components/ui/card";
import { MANAGEMENT, TEAM, type TeamMember } from "@/lib/content";

function Portrait({ member, compact = false }: { member: TeamMember; compact?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/15 via-card to-secondary/15 ${
        compact ? "h-28 w-28 shrink-0 rounded-full" : "h-64 w-full"
      }`}
    >
      {member.image ? (
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          fill
          sizes={compact ? "112px" : "(max-width: 1024px) 100vw, 33vw"}
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.25),transparent_35%),linear-gradient(135deg,hsl(var(--card)),hsl(var(--primary)/0.08))]">
          <span className="font-display text-4xl font-bold text-primary/80">{member.initials}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
    </div>
  );
}

function PersonCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Card className="h-full overflow-hidden p-0 hover:-translate-y-1.5 hover:border-primary/40">
        <CardGlow />
        <Portrait member={member} />
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{member.role}</p>
          <h3 className="mt-2 font-display text-xl font-semibold">{member.name}</h3>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
            <span>{member.image ? "TrackerTech" : "Leadership"}</span>
            <ArrowUpRight className="h-4 w-4 text-primary" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function Team() {
  return (
    <section id="team" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-primary/[0.06] to-transparent" />
      <div className="container">
        <SectionHeading
          eyebrow="People behind the system"
          title="The people making every handoff count"
          description="TrackerTech brings leadership, project delivery, and hands-on execution together around one clear mission: trusted data for a cleaner supply chain."
        />

        <div className="mt-16">
          <div className="mb-7 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
              <BriefcaseBusiness className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-xl font-semibold">Management</p>
              <p className="text-sm text-muted-foreground">Direction for a more transparent future</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MANAGEMENT.map((member, index) => (
              <PersonCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-16">
          <div className="mb-7 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-secondary/25 bg-secondary/10 text-secondary">
              <Users className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-xl font-semibold">Teams</p>
              <p className="text-sm text-muted-foreground">The people moving the work forward</p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {TEAM.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="flex h-full items-center gap-5 p-5 hover:-translate-y-1.5 hover:border-secondary/40 sm:p-6">
                  <CardGlow />
                  <Portrait member={member} compact />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">{member.role}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold">{member.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Project delivery and execution</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
