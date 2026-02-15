"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
import { RoleData, getScoreColor, getStatusFromScore } from "@/lib/types";

interface ShareCardProps {
  role: RoleData;
}

const SITE_HOST = process.env.NEXT_PUBLIC_SITE_URL?.replace(/^https?:\/\//, "") || "willaireplace.me";

function getViralTweet(role: RoleData): string {
  const score = role.overallScore;
  const url = `${SITE_HOST}/${role.slug}`;
  const topTask = role.tasks[0];
  const taskLine = topTask ? `\n\nWorst part: "${topTask.task}" is already ${topTask.automation}% automated.` : "";

  if (score >= 70) {
    return `I asked Claude if AI will replace ${role.title}s.\n\n${score}% AI replacement risk. \u{1F6A8}${taskLine}\n\nClaude analyzed 75 professions task-by-task. Most people aren\u2019t ready for this.\n\nCheck yours before your boss does \u2192 ${url}`;
  } else if (score >= 40) {
    return `I asked Claude how replaceable a ${role.title} is.\n\n${score}% at risk. \u26A0\uFE0F\n\n${role.tagline}${taskLine}\n\nFull task-by-task breakdown \u2192 ${url}`;
  } else {
    return `I asked Claude to score the AI replacement risk for ${role.title}s.\n\nOnly ${score}% \u2014 humans still win. \u2705\n\n${role.tagline}\n\nBut some jobs scored 90%+. Claude analyzed 75 professions.\n\nFind yours \u2192 ${url}`;
  }
}

export default function ShareCard({ role }: ShareCardProps) {
  const color = getScoreColor(role.overallScore);
  const status = getStatusFromScore(role.overallScore);
  const topThreat = role.tasks[0];
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const shareText = encodeURIComponent(getViralTweet(role));
  const shareUrl = `https://twitter.com/intent/tweet?text=${shareText}`;

  const downloadImage = useCallback(async () => {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: "#1a2332",
        useCORS: true,
      });
      const link = document.createElement("a");
      link.download = `${role.slug}-ai-risk-report.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      setDownloading(false);
    }
  }, [role.slug]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 border-b border-warm-border pb-3">
        <h2 className="text-lg font-mono font-semibold text-warm-text uppercase tracking-wider">
          Report Card
        </h2>
      </div>

      <div
        ref={cardRef}
        id="share-card"
        className="bg-warm-surface border-2 border-warm-border rounded-card p-6 max-w-md mx-auto"
      >
        <div className="text-center mb-4">
          <p className="text-[10px] font-mono text-warm-muted uppercase tracking-widest mb-2">
            AI Automation Risk Assessment by Claude
          </p>
          <h3 className="text-xl font-bold text-warm-text font-display">{role.title}</h3>
          <p className="text-sm text-warm-muted mt-1 italic">{role.tagline}</p>
        </div>

        <div className="flex justify-center my-6">
          <div
            className="relative w-28 h-28 rounded-full border-[3px] flex items-center justify-center"
            style={{ borderColor: color }}
          >
            <div className="text-center">
              <span className="text-3xl font-bold font-mono" style={{ color }}>
                {role.overallScore}%
              </span>
              <p
                className="text-[9px] font-mono uppercase tracking-widest font-semibold"
                style={{ color }}
              >
                {status}
              </p>
            </div>
          </div>
        </div>

        {topThreat && (
          <div className="text-center mb-4 py-2 border-t border-b border-warm-border-light">
            <p className="text-[10px] font-mono text-warm-muted uppercase tracking-wider">
              Primary Threat
            </p>
            <p className="text-sm text-warm-text/80 font-medium">
              {topThreat.task} &mdash; {topThreat.automation}% automated
            </p>
          </div>
        )}

        <div className="text-center">
          <p className="text-[9px] font-mono text-warm-border uppercase tracking-widest">
            {SITE_HOST}
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-3">
        <motion.button
          onClick={downloadImage}
          disabled={downloading}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-warm-surface text-warm-text border border-warm-border font-mono font-medium text-sm rounded-card hover:border-warm-muted/50 transition-colors disabled:opacity-50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
          </svg>
          {downloading ? "Saving..." : "Save Image"}
        </motion.button>
        <motion.a
          href={shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-warm-accent text-black font-mono font-semibold text-sm rounded-card hover:bg-warm-accent/90 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Share on X
        </motion.a>
      </div>
    </div>
  );
}
