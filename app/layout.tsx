import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { getSiteUrl } from "@/lib/types";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Will AI Replace Me? | AI Job Automation Risk Assessment",
  description:
    "Get an instant AI automation risk score for your profession. Task-level breakdown, company tracker, timeline projections, and actionable skill recommendations for 75+ roles.",
  keywords: [
    "AI automation",
    "job risk",
    "career assessment",
    "AI replacing jobs",
    "automation score",
    "future of work",
  ],
  openGraph: {
    title: "Will AI Replace Me?",
    description:
      "Find out your AI automation risk score. Detailed analysis for 75+ professions.",
    url: getSiteUrl(),
    siteName: "WillAIReplaceMe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Will AI Replace Me?",
    description:
      "Find out your AI automation risk score. Detailed analysis for 75+ professions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-warm-bg font-sans text-warm-text min-h-screen">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
