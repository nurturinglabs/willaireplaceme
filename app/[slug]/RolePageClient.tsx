"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Gauge from "@/components/themes/dark/Gauge";
import SalaryCard from "@/components/themes/dark/SalaryCard";
import TaskBar from "@/components/themes/dark/TaskBar";
import CompanyCard from "@/components/themes/dark/CompanyCard";
import Timeline from "@/components/themes/dark/Timeline";
import SkillPills from "@/components/themes/dark/SkillPills";
import ShareCard from "@/components/themes/dark/ShareCard";
import Link from "next/link";
import { RoleData, getStatusFromScore, getStatusClasses, CATEGORY_LABELS } from "@/lib/types";

interface RolePageClientProps {
  roleData: RoleData;
}

export default function RolePageClient({ roleData }: RolePageClientProps) {
  const status = getStatusFromScore(roleData.overallScore);
  const categoryLabel = CATEGORY_LABELS[roleData.category] || roleData.category;

  return (
    <main className="min-h-screen bg-warm-bg">
      <Navigation />

      <div className="pt-24 pb-16 px-4 max-w-5xl mx-auto">
        <Link
          href="/"
          className="text-xs font-mono text-warm-muted hover:text-warm-text mb-8 block"
        >
          &larr; Back to all roles
        </Link>

        {/* Header */}
        <motion.section
          className="text-center mb-14 bg-warm-surface border border-warm-border rounded-card p-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[10px] font-mono text-warm-muted uppercase tracking-[0.3em] mb-3">
            AI Automation Risk Assessment by Claude
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-warm-text mb-2 font-display">
            {roleData.title}
          </h1>

          <p className="text-base text-warm-muted max-w-xl mx-auto mb-2 italic">
            {roleData.tagline}
          </p>

          <span className="inline-block text-[10px] font-mono px-2 py-0.5 bg-warm-accent/10 text-warm-accent border border-warm-accent/20 rounded mb-6">
            {categoryLabel}
          </span>

          <div className="flex justify-center mb-4">
            <Gauge score={roleData.overallScore} />
          </div>

          <span
            className={`inline-block text-[10px] font-mono px-2.5 py-1 rounded border uppercase tracking-wider font-semibold ${getStatusClasses(status)}`}
          >
            {status} risk
          </span>

          <p className="text-[11px] text-warm-muted/50 font-mono mt-4">
            Last updated: {roleData.lastUpdated} &bull; AI-estimated based on
            current research
          </p>
        </motion.section>

        {/* Salary Comparison */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <SalaryCard salary={roleData.salary} title={roleData.title} />
        </motion.section>

        {/* Task Breakdown */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <TaskBar tasks={roleData.tasks} />
        </motion.section>

        {/* Company Tracker */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <CompanyCard companies={roleData.companies} />
        </motion.section>

        {/* Timeline */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <Timeline timeline={roleData.timeline} />
        </motion.section>

        {/* Skills */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <SkillPills skills={roleData.skills} />
        </motion.section>

        {/* Share Card */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <ShareCard role={roleData} />
        </motion.section>

        {/* Footer CTA */}
        <section className="text-center py-6 border-t border-warm-border">
          <p className="text-warm-muted text-sm mb-3">
            Know someone in this field? Share this assessment with them.
          </p>
          <Link
            href="/"
            className="text-warm-text font-mono text-sm hover:text-warm-accent"
          >
            Check another profession &rarr;
          </Link>
        </section>
      </div>
    </main>
  );
}
