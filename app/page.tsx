"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SearchInput from "@/components/SearchInput";
import { roles } from "@/data/roles-index";
import Link from "next/link";
import { getScoreColor, getScoreTextClass, getStatusFromScore, getStatusClasses, CATEGORY_LABELS, CATEGORY_ORDER } from "@/lib/types";

const featuredSlugs = [
  "software-engineer",
  "copywriter",
  "accountant",
  "qa-test-engineer",
  "graphic-designer",
  "paralegal",
  "sdr-bdr",
  "medical-transcriptionist",
];

export default function HomePage() {
  const featured = featuredSlugs
    .map((slug) => roles.find((r) => r.slug === slug))
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-warm-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[10px] font-mono text-warm-muted uppercase tracking-[0.3em] mb-4">
              AI Career Diagnostic Report by Claude
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-warm-text font-display">
              Will AI Replace Me?
            </h1>
            <p className="text-base text-warm-muted max-w-xl mx-auto mb-8">
              Get an instant AI automation risk assessment for your profession.
              Task-level breakdown, company tracker, timeline, and skill prescription.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <SearchInput />
          </motion.div>

          <motion.p
            className="text-[11px] text-warm-muted font-mono mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            75 professions analyzed &bull; Updated February 2026
          </motion.p>
        </div>
      </section>

      {/* Featured Roles */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-sm font-mono font-semibold text-warm-text uppercase tracking-wider mb-1">
              Notable Assessments
            </h2>
            <p className="text-sm text-warm-muted">
              The most debated roles right now
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {featured.map((role, index) => {
              if (!role) return null;
              const color = getScoreColor(role.overallScore);
              const status = getStatusFromScore(role.overallScore);
              return (
                <motion.div
                  key={role.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                >
                  <Link
                    href={`/${role.slug}`}
                    className="block bg-warm-surface border border-warm-border rounded-card p-4 hover:border-warm-muted/30 hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-warm-text text-sm group-hover:text-warm-text">
                        {role.title}
                      </h3>
                      <span
                        className="font-mono font-bold text-lg"
                        style={{ color }}
                      >
                        {role.overallScore}%
                      </span>
                    </div>
                    <div className="w-full bg-warm-border/40 rounded-full h-1 mb-2">
                      <div
                        className="h-1 rounded-full"
                        style={{
                          width: `${role.overallScore}%`,
                          backgroundColor: color,
                        }}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-warm-muted line-clamp-1 flex-1 mr-2">
                        {role.tagline}
                      </p>
                      <span
                        className={`text-[9px] font-mono px-1.5 py-0.5 rounded border uppercase tracking-wider font-semibold shrink-0 ${getStatusClasses(status)}`}
                      >
                        {status}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Roles by Category */}
      <section className="py-12 px-4 border-t border-warm-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-mono font-semibold text-warm-text uppercase tracking-wider text-center mb-8">
            All Professions
          </h2>

          {CATEGORY_ORDER.map((categoryKey) => {
            const categoryRoles = roles.filter((r) => r.category === categoryKey);
            if (categoryRoles.length === 0) return null;
            const label = CATEGORY_LABELS[categoryKey] || categoryKey;
            return (
              <div key={categoryKey} className="mb-8">
                <h3 className="text-sm font-mono font-medium text-warm-muted mb-3 uppercase tracking-wider">
                  {label}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {categoryRoles.map((role) => {
                    return (
                      <Link
                        key={role.slug}
                        href={`/${role.slug}`}
                        className="flex items-center justify-between bg-warm-surface border border-warm-border rounded-card px-3 py-2.5 hover:border-warm-muted/30 hover:shadow-sm transition-all group"
                      >
                        <span className="text-warm-text/80 text-sm group-hover:text-warm-text">
                          {role.title}
                        </span>
                        <span
                          className={`font-mono font-bold text-sm ${getScoreTextClass(role.overallScore)}`}
                        >
                          {role.overallScore}%
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-warm-border bg-warm-surface">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-warm-muted text-xs font-mono">
            WillAIReplaceMe &bull; AI-estimated automation risk scores based on current research
          </p>
          <p className="text-warm-muted/60 text-xs font-mono mt-1">
            Information, not fear. Data updated February 2026.
          </p>
        </div>
      </footer>
    </main>
  );
}
