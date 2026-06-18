import { cn } from "@/lib/utils";

interface OrbProps {
  className?: string;
  /** tailwind color utility for the glow, e.g. "bg-primary/30" */
  color?: string;
}

/** Soft blurred gradient orb used as a background texture. Decorative only. */
export function Orb({ className, color = "bg-primary/25" }: OrbProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 h-72 w-72 rounded-full blur-[110px] animate-pulse-glow",
        color,
        className,
      )}
    />
  );
}
