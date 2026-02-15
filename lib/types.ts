export interface TaskItem {
  task: string;
  automation: number;
  status: "critical" | "elevated" | "stable";
  description: string;
  tools: string[];
}

export interface CompanyItem {
  name: string;
  product: string;
  threat: string;
}

export interface TimelinePhase {
  phase: string;
  description: string;
}

export interface SkillItem {
  skill: string;
  description: string;
}

export interface Salary {
  usa: { entry: number; experienced: number };
  india: { entryLPA: number; experiencedLPA: number };
}

export interface RoleData {
  slug: string;
  title: string;
  category: string;
  tier: number;
  overallScore: number;
  tagline: string;
  lastUpdated: string;
  salary: Salary;
  tasks: TaskItem[];
  companies: CompanyItem[];
  timeline: TimelinePhase[];
  skills: SkillItem[];
}

export const AI_COST_YEARLY = 2400; // Claude Pro $200/mo × 12

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export const CATEGORY_LABELS: Record<string, string> = {
  tech: "Tech & Engineering",
  creative: "Creative & Content",
  marketing: "Marketing & Sales",
  finance: "Finance & Accounting",
  legal: "Legal",
  healthcare: "Healthcare",
  education: "Education",
  business: "Business & Operations",
  media: "Media & Journalism",
};

export const CATEGORY_ORDER = [
  "tech",
  "creative",
  "marketing",
  "finance",
  "legal",
  "healthcare",
  "education",
  "business",
  "media",
];

export function getStatusFromScore(score: number): "critical" | "elevated" | "stable" {
  if (score >= 70) return "critical";
  if (score >= 40) return "elevated";
  return "stable";
}

export function getStatusLabel(status: string): string {
  return status.toUpperCase();
}

export function getStatusClasses(status: string): string {
  switch (status) {
    case "critical": return "bg-[#ef4444]/10 text-[#ef4444] border-[#ef4444]/20";
    case "elevated": return "bg-[#e8a838]/10 text-[#e8a838] border-[#e8a838]/20";
    case "stable": return "bg-[#22c55e]/10 text-[#22c55e] border-[#22c55e]/20";
    default: return "bg-warm-border/30 text-warm-muted border-warm-border";
  }
}

export function getBarColor(status: string): string {
  switch (status) {
    case "critical": return "#ef4444";
    case "elevated": return "#e8a838";
    case "stable": return "#22c55e";
    default: return "#9ca3af";
  }
}

export function getScoreColor(score: number): string {
  if (score >= 65) return "#ef4444";
  if (score >= 35) return "#e8a838";
  return "#22c55e";
}

export function getScoreTextClass(score: number): string {
  if (score >= 65) return "text-[#ef4444]";
  if (score >= 35) return "text-[#e8a838]";
  return "text-[#22c55e]";
}
