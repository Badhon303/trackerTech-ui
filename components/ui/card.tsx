import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300",
        className,
      )}
      {...props}
    />
  );
}

/** Decorative gradient glow that fades in on hover. Place inside a Card. */
export function CardGlow() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(420px circle at 50% 0%, hsl(var(--primary) / 0.18), transparent 70%)",
      }}
    />
  );
}
