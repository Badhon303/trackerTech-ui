"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" ? "mx-auto items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow && (
        <Badge>
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </Badge>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
