import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}

export function Chip({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary",
        className,
      )}
      {...props}
    />
  );
}
