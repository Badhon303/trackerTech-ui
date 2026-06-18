"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Orb } from "@/components/ui/orb";
import { SITE } from "@/lib/content";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Tell us a little more (10+ characters)"),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30";

export function ContactCta() {
  const [submitted, setSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    // Placeholder submit — wire up to a real endpoint/email service before launch.
    await new Promise((r) => setTimeout(r, 800));
    console.log("Contact form submission:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <Orb className="left-1/2 top-10 h-96 w-96 -translate-x-1/2" color="bg-primary/20" />
      <div className="container">
        <div className="glass-card overflow-hidden rounded-3xl border border-border p-8 sm:p-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
                Let&apos;s Build the Future of{" "}
                <span className="text-gradient">Industrial Intelligence</span>{" "}
                Together
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tell us about your line, your materials, and your traceability
                goals. We&apos;ll show you what&apos;s possible.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/60 text-primary">
                    <Mail className="h-4 w-4" />
                  </span>
                  {SITE.email}
                </a>
                <a
                  href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/60 text-primary">
                    <Phone className="h-4 w-4" />
                  </span>
                  {SITE.phone}
                </a>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    {...register("name")}
                    className={cn(fieldClass, errors.name && "border-red-500/70")}
                    placeholder="Jane Doe"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={cn(fieldClass, errors.email && "border-red-500/70")}
                    placeholder="jane@company.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
                  Company <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="company"
                  {...register("company")}
                  className={fieldClass}
                  placeholder="Acme Recycling"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  className={cn(fieldClass, "resize-none", errors.message && "border-red-500/70")}
                  placeholder="How can we help?"
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2">
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </Button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-sm text-secondary"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Thanks — we&apos;ll be in touch shortly.
                </motion.p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
