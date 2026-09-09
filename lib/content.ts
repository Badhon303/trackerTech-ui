/**
 * Single source of truth for TrackerTech's public website content.
 * Company and product language is based on the supplied business material.
 */
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Boxes,
  Brain,
  Camera,
  CheckCircle2,
  Factory,
  Gauge,
  Leaf,
  Link2,
  Recycle,
  ShieldCheck,
  ShoppingCart,
  Truck,
} from "lucide-react";

export const SITE = {
  name: "TrackerTech",
  legalName: "TrackerTech Limited",
  tagline:
    "Next-Gen Supply Chain Traceability for a transparent, efficient, and sustainable circular economy.",
  email: "khadem.yusuf@trackertechltd.com",
  website: "https://www.trackertechltd.com",
  address:
    "Level 8, South Breeze Center, House 5, Road 11, Block G, Banani, Dhaka 1213",
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
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  eyebrow: "TrackerVision | AI Vision x Blockchain Truth",
  headline: "What the camera sees,",
  headlineAccent: "the chain never forgets.",
  subheading:
    "TrackerTech builds next-generation traceability systems for circular plastics - combining real-time computer vision, trusted human verification, and an immutable chain of custody.",
  primaryCta: { label: "Explore TrackerVision", href: "#solutions" },
  secondaryCta: { label: "See the chain", href: "#process" },
} as const;

export type Pillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const PILLARS: Pillar[] = [
  {
    title: "AI Vision Capture",
    description:
      "Real-time cameras identify each bottle by material, brand, size, and empty weight as it moves through the line.",
    icon: Camera,
  },
  {
    title: "Smart Analysis",
    description:
      "Recognition models cross-reference product data and flag unknown items for a fast, focused human confirmation.",
    icon: Brain,
  },
  {
    title: "Blockchain Ledger",
    description:
      "Every verified weight and custody event is recorded in a secure, transparent ledger that is built for trust.",
    icon: Link2,
  },
  {
    title: "EPR-Ready Data",
    description:
      "Verified collection, recycling, and material-category data is organized for accurate 2026 reporting.",
    icon: Leaf,
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
    title: "AI Vision Capture",
    description:
      "A live camera identifies each item and separates PET from non-PET, capturing brand, size, and empty weight.",
    icon: Camera,
  },
  {
    number: "02",
    title: "Smart Analysis",
    description:
      "The system cross-references the product database and flags unfamiliar bottles for human confirmation.",
    icon: Brain,
  },
  {
    number: "03",
    title: "Handle Unknowns",
    description:
      "A single human confirmation teaches the system to remember the item permanently for future recognition.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Blockchain Ledger",
    description:
      "Gross weight, verified PET weight, and every handoff are secured in an immutable chain-of-custody record.",
    icon: Link2,
  },
  {
    number: "05",
    title: "EPR-Ready Data",
    description:
      "Brand-wise collection, recycling, and material breakdowns are ready for audit-friendly EPR reporting.",
    icon: Leaf,
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
    id: "tracker-vision",
    eyebrow: "01 / TrackerVision",
    title: "See every bottle. Know exactly what you bought.",
    description:
      "TrackerVision turns a mixed stream into structured, usable data. The AI camera recognizes bottles in real time, separates PET from non-PET, and builds a richer material and brand picture without slowing the line.",
    features: [
      "Real-time bottle recognition",
      "PET, PP, PE, and multilayer classification",
      "Brand, size, material, color, shape, and weight capture",
    ],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Industrial camera and production line representing AI vision",
  },
  {
    id: "chain-of-custody",
    eyebrow: "02 / Chain of Custody",
    title: "Prove exactly what you recycled.",
    description:
      "From collection shop to recycling plant, every kilogram gets a verifiable journey. TrackerTech connects procurement, transport, unloading, recycling, and reporting in one trusted record.",
    features: [
      "Immutable custody records",
      "Verified weight at every handoff",
      "Audit-ready EPR collection and recycling data",
    ],
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Digital network representing a blockchain chain of custody",
  },
];

export type ValueCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  share: number;
};

export const VALUES: ValueCard[] = [
  {
    title: "Pay for What You Get",
    description:
      "Replace mixed-material guesswork with verified PET weight and clearer purchasing decisions.",
    icon: BadgeCheck,
    share: 28,
  },
  {
    title: "Lower Operational Costs",
    description:
      "Reduce manual sorting, material loss, and rework with intelligence at the point of action.",
    icon: Gauge,
    share: 26,
  },
  {
    title: "EPR Compliance Ready",
    description:
      "Turn trusted collection and recycling data into evidence that is easier to report and audit.",
    icon: ShieldCheck,
    share: 24,
  },
  {
    title: "A Cleaner Tomorrow",
    description:
      "Better data helps more material stay in the loop and turns waste into lasting value.",
    icon: Recycle,
    share: 22,
  },
];

export type Industry = { title: string; icon: LucideIcon };

export const INDUSTRIES: Industry[] = [
  { title: "Collection Networks", icon: Boxes },
  { title: "Recycling Plants", icon: Recycle },
  { title: "Manufacturing", icon: Factory },
  { title: "Brands & FMCG", icon: ShoppingCart },
  { title: "Supply Chain", icon: Truck },
];

export type RoadmapItem = {
  phase: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const ROADMAP: RoadmapItem[] = [
  {
    phase: "Capture",
    title: "Make the invisible visible",
    description:
      "Camera-based recognition brings bottle, material, and brand data into the process in real time.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Industrial equipment in a smart factory",
  },
  {
    phase: "Verify",
    title: "Teach the system what it does not know",
    description:
      "Human confirmation handles unknowns once, strengthening the recognition database for the next run.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Team reviewing a data dashboard",
  },
  {
    phase: "Trace",
    title: "Secure every handoff",
    description:
      "Verified weights and custody events move with the material from collection through recycling.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Industrial production line",
  },
  {
    phase: "Report",
    title: "Turn evidence into advantage",
    description:
      "Brand-wise, material-category, collection, and recycling data is organized for EPR-ready reporting.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Modern building representing a sustainable future",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  image?: string;
  initials: string;
};

export const MANAGEMENT: TeamMember[] = [
  {
    name: "Khadem Mahmud Yusuf",
    role: "Managing Director",
    image: "/team/khadem-mahmud-yusuf.jpg",
    initials: "KY",
  },
  {
    name: "Farhana Sekander",
    role: "Director",
    initials: "FS",
  },
  {
    name: "Md. Minul Alam",
    role: "Project Manager",
    initials: "MA",
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Mir Javed Jahanger",
    role: "Project Team Lead",
    image: "/team/mir-javed-jahanger.jpeg",
    initials: "MJ",
  },
  {
    name: "Badhon",
    role: "Project Team",
    image: "/team/badhon.jpeg",
    initials: "B",
  },
];

export const STATS = [
  { value: 5, suffix: " stages", label: "From capture to EPR-ready data" },
  { value: 4, suffix: " materials", label: "PET, PP, PE, and multilayer" },
  { value: 1, suffix: " ledger", label: "One source of chain-of-custody truth" },
  { value: 2026, suffix: " EPR", label: "Bangladesh reporting direction" },
] as const;
