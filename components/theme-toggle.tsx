"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground backdrop-blur transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ y: -12, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 12, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            {isDark ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
