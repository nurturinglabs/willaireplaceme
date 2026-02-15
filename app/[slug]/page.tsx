import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { roles } from "@/data/roles-index";
import { RoleData, getSiteUrl } from "@/lib/types";
import RolePageClient from "./RolePageClient";
import rolesData from "@/data/roles/roles-data.json";

const allRoles = rolesData as Record<string, RoleData>;

// Static generation for all known roles
export function generateStaticParams() {
  return roles.map((role) => ({
    slug: role.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const role = allRoles[params.slug];
  if (!role) return {};

  const status = role.overallScore >= 70 ? "CRITICAL" : role.overallScore >= 40 ? "ELEVATED" : "STABLE";
  const ogTitle = `${role.title}: ${role.overallScore}% AI Automation Risk — ${status}`;

  return {
    title: `${role.title} — ${role.overallScore}% AI Automation Risk | WillAIReplaceMe`,
    description: `${role.tagline} Detailed AI automation risk assessment for ${role.title}: task breakdown, company tracker, timeline, and skill recommendations.`,
    openGraph: {
      title: ogTitle,
      description: role.tagline,
      url: `${getSiteUrl()}/${role.slug}`,
      siteName: "WillAIReplaceMe",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: `${role.tagline} Check your AI automation risk.`,
      creator: "@willaireplace_me",
    },
  };
}

export default async function RolePage({
  params,
}: {
  params: { slug: string };
}) {
  const roleData = allRoles[params.slug];
  if (!roleData) {
    notFound();
  }

  return <RolePageClient roleData={roleData} />;
}
