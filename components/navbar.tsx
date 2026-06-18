"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Radar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_LINKS, SITE } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        <Link
          href="#home"
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground glow-primary">
            <Radar className="h-5 w-5" />
          </span>
          {SITE.name}
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="#contact" className="hidden sm:block">
            <Button size="sm">Get in Touch</Button>
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground backdrop-blur transition-colors hover:text-primary lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container flex h-16 items-center justify-between md:h-20">
              <span className="font-display text-lg font-bold">{SITE.name}</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
              }}
              className="container mt-8 flex flex-col gap-2"
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -24 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border py-4 font-display text-2xl font-semibold transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -24 },
                  show: { opacity: 1, x: 0 },
                }}
                className="mt-6"
              >
                <Link href="#contact" onClick={() => setOpen(false)}>
                  <Button size="lg" className="w-full">
                    Get in Touch
                  </Button>
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
