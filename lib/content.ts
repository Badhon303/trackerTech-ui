/**
 * Single source of truth for all site copy and repeatable data.
 * Edit values here to update the site — components consume these typed arrays.
 *
 * NOTE: Roadmap dates, team bios, and exact stat numbers are PLACEHOLDERS.
 * Swap in real values before launch.
 */
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgeCheck,
  Boxes,
  Brain,
  Camera,
  Cpu,
  Factory,
  Gauge,
  Leaf,
  Link2,
  Recycle,
  ScanLine,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Truck,
} from "lucide-react";

export const SITE = {
  name: "Tracker Tech",
  legalName: "Tracker Tech Limited",
  tagline:
    "AI, blockchain, and computer-vision systems that bring transparency, efficiency, and sustainability to modern industry.",
  email: "hello@trackertech.io",
  phone: "+1 (555) 014-2025",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
} as const;

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "How It Works", href: "#process" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  eyebrow: "AI · Blockchain · Computer Vision · Automation",
  headline: "Engineering Intelligence for the Industries That Move the World",
  // Alternatives:
  //  - "Intelligent Systems for Transparent, Efficient Industry"
  //  - "Where AI Meets the Production Line"
  subheading:
    "Tracker Tech Limited builds AI, blockchain, and computer-vision systems that bring transparency, efficiency, and sustainability to modern industry.",
  primaryCta: { label: "Explore Solutions", href: "#solutions" },
  secondaryCta: { label: "See How It Works", href: "#process" },
} as const;

export type Pillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const PILLARS: Pillar[] = [
  {
    title: "Artificial Intelligence",
    description:
      "AI-powered detection and classification models that bring real-time intelligence to industrial processes.",
    icon: Brain,
  },
  {
    title: "Blockchain",
    description:
      "End-to-end tracking and traceability systems that record every step of a product's journey, immutably and transparently.",
    icon: Link2,
  },
  {
    title: "Computer Vision",
    description:
      "Camera-based recognition systems that identify and classify materials with high accuracy on live production lines.",
    icon: Camera,
  },
  {
    title: "Industrial Automation",
    description:
      "Smart manufacturing solutions that streamline operations and reduce manual intervention.",
    icon: Cpu,
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Supplier Intake",
    description:
      "Bottle batches are logged at the point of collection, creating the first immutable blockchain record.",
    icon: Boxes,
  },
  {
    number: "02",
    title: "AI-Powered Sorting & Detection",
    description:
      "Computer-vision cameras scan the conveyor belt in real time, classifying PET vs. Non-PET materials.",
    icon: ScanLine,
  },
  {
    number: "03",
    title: "Resin & Flake Processing",
    description:
      "Sorted material moves to resin/flake processing; quantity and quality data are written on-chain.",
    icon: Recycle,
  },
  {
    number: "04",
    title: "End-to-End Traceability",
    description:
      "The full chain of custody — supplier to processor — is permanently and transparently recorded.",
    icon: ShieldCheck,
  },
];

export type Solution = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
};

export const SOLUTIONS: Solution[] = [
  {
    id: "bottle-tracking",
    eyebrow: "Solution A",
    title: "Blockchain-Powered Bottle Tracking Platform",
    description:
      "A blockchain ledger system that tracks plastic bottles from supplier intake through resin/flake processing, giving manufacturers and recyclers verifiable, end-to-end traceability.",
    features: [
      "Immutable Ledger",
      "Supplier-to-Processor Visibility",
      "Custom Reporting Dashboard",
    ],
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Blockchain traceability dashboard visualization",
  },
  {
    id: "material-detection",
    eyebrow: "Solution B",
    title: "AI Camera-Based Material Detection",
    description:
      "A real-time computer-vision system installed on conveyor belts that identifies and classifies PET and Non-PET materials, improving sorting accuracy and cutting manual labor.",
    features: [
      "Real-Time Classification",
      "High-Accuracy Detection Models",
      "Drop-In Integration with Existing Lines",
    ],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Computer-vision camera analyzing materials on a production line",
  },
];

export type ValueCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  /** illustrative share of focus for the decorative donut chart (percent) */
  share: number;
};

export const VALUES: ValueCard[] = [
  {
    title: "Transparency",
    description:
      "Immutable records make every step of the journey verifiable for all stakeholders.",
    icon: BadgeCheck,
    share: 28,
  },
  {
    title: "Efficiency",
    description:
      "Automation and AI cut manual effort and accelerate throughput across the line.",
    icon: Gauge,
    share: 26,
  },
  {
    title: "Sustainability",
    description:
      "Better traceability drives higher recovery rates and a cleaner material loop.",
    icon: Leaf,
    share: 24,
  },
  {
    title: "Operational Excellence",
    description:
      "Reliable, data-driven systems engineered for demanding industrial environments.",
    icon: Sparkles,
    share: 22,
  },
];

export type Industry = { title: string; icon: LucideIcon };

export const INDUSTRIES: Industry[] = [
  { title: "Plastics & Recycling", icon: Recycle },
  { title: "Manufacturing", icon: Factory },
  { title: "Supply Chain & Logistics", icon: Truck },
  { title: "Retail & FMCG", icon: ShoppingCart },
  { title: "Smart Factories", icon: Activity },
];

export type RoadmapItem = {
  phase: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

// PLACEHOLDER milestones — replace with real dates/details before launch.
export const ROADMAP: RoadmapItem[] = [
  {
    phase: "Phase 01",
    title: "Foundation & Core Team",
    description:
      "Establishing the company, assembling the founding engineering team, and defining the core technology roadmap.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Founding team collaborating in a workspace",
  },
  {
    phase: "Phase 02",
    title: "Platform & Detection Model Development",
    description:
      "Building the blockchain tracking platform and training the computer-vision material-detection models.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Engineers reviewing data dashboards",
  },
  {
    phase: "Phase 03",
    title: "Pilot Deployment with First Partners",
    description:
      "Deploying live pilots on partner production lines and validating accuracy and traceability in the field.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Industrial production line during a pilot deployment",
  },
  {
    phase: "Phase 04",
    title: "Scaling & Market Expansion",
    description:
      "Scaling deployments across industries and expanding into new markets and verticals.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Modern facility representing market expansion",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

// PLACEHOLDER team — populate with real members or omit from nav.
export const TEAM: TeamMember[] = [
  {
    name: "A. Placeholder",
    role: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "B. Placeholder",
    role: "Chief Technology Officer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "C. Placeholder",
    role: "Head of Computer Vision",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "D. Placeholder",
    role: "Head of Blockchain",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80",
  },
];

export const STATS = [
  { value: 99, suffix: "%", label: "Detection accuracy target" },
  { value: 4, suffix: "", label: "Core technology pillars" },
  { value: 100, suffix: "%", label: "On-chain traceability" },
  { value: 24, suffix: "/7", label: "Automated monitoring" },
] as const;
