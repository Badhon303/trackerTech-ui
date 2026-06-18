import Link from "next/link";
import { Github, Linkedin, Radar, Twitter } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/content";

const solutionLinks = [
  { label: "Bottle Tracking", href: "#solutions" },
  { label: "Material Detection", href: "#solutions" },
  { label: "How It Works", href: "#process" },
  { label: "Roadmap", href: "#roadmap" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="#home"
              className="flex items-center gap-2 font-display text-lg font-bold"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                <Radar className="h-5 w-5" />
              </span>
              {SITE.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {SITE.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SITE.social.linkedin}
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.twitter}
                aria-label="Twitter"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.github}
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Solutions
            </h3>
            <ul className="mt-4 space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p>Engineering intelligence for industry.</p>
        </div>
      </div>
    </footer>
  );
}
