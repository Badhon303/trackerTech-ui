import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://trackertech.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE.legalName} — Engineering Intelligence for Industry`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.tagline,
  keywords: [
    "AI",
    "Blockchain",
    "Computer Vision",
    "Industrial Automation",
    "Plastics Traceability",
    "Tracker Tech",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${SITE.legalName} — Engineering Intelligence for Industry`,
    description: SITE.tagline,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.legalName} — Engineering Intelligence for Industry`,
    description: SITE.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#070d18" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
