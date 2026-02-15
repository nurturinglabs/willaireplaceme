"use client";

import { motion } from "framer-motion";
import { Salary, AI_COST_YEARLY } from "@/lib/types";

interface SalaryCardProps {
  salary: Salary;
  title: string;
}

export default function SalaryCard({ salary, title }: SalaryCardProps) {
  const entryMultiplier = Math.round(salary.usa.entry / AI_COST_YEARLY);
  const expMultiplier = Math.round(salary.usa.experienced / AI_COST_YEARLY);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 border-b border-warm-border pb-3">
        <h2 className="text-lg font-mono font-semibold text-warm-text uppercase tracking-wider">
          Cost Comparison — Human vs AI
        </h2>
      </div>
      <p className="text-xs text-warm-muted font-mono">
        Claude Pro at $200/mo ({`$${AI_COST_YEARLY.toLocaleString()}/yr`}) vs {title} salary (USA)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <motion.div
          className="bg-warm-surface border border-warm-border rounded-card p-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-[10px] font-mono text-warm-muted uppercase tracking-wider mb-2">
            Entry-Level
          </p>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-2xl font-bold font-mono text-warm-text">
              ${(salary.usa.entry / 1000).toFixed(0)}k
            </span>
            <span className="text-sm text-warm-muted">/year</span>
          </div>
          <div className="flex items-center gap-2 py-2 px-3 bg-[#ef4444]/10 rounded border border-[#ef4444]/20">
            <span className="text-[#ef4444] font-mono font-bold text-lg">
              {entryMultiplier}x
            </span>
            <span className="text-[#ef4444] text-sm font-medium">
              more expensive than AI
            </span>
          </div>
          {salary.india && (
            <p className="text-xs text-warm-muted font-mono mt-3">
              India: {salary.india.entryLPA} LPA entry
            </p>
          )}
        </motion.div>

        <motion.div
          className="bg-warm-surface border border-warm-border rounded-card p-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <p className="text-[10px] font-mono text-warm-muted uppercase tracking-wider mb-2">
            Experienced
          </p>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-2xl font-bold font-mono text-warm-text">
              ${(salary.usa.experienced / 1000).toFixed(0)}k
            </span>
            <span className="text-sm text-warm-muted">/year</span>
          </div>
          <div className="flex items-center gap-2 py-2 px-3 bg-[#ef4444]/10 rounded border border-[#ef4444]/20">
            <span className="text-[#ef4444] font-mono font-bold text-lg">
              {expMultiplier}x
            </span>
            <span className="text-[#ef4444] text-sm font-medium">
              more expensive than AI
            </span>
          </div>
          {salary.india && (
            <p className="text-xs text-warm-muted font-mono mt-3">
              India: {salary.india.experiencedLPA} LPA experienced
            </p>
          )}
        </motion.div>
      </div>

      <div className="text-center py-2">
        <p className="text-xs text-warm-muted font-mono">
          AI benchmark: Claude Pro &mdash; ${AI_COST_YEARLY.toLocaleString()}/yr &bull; Available 24/7
        </p>
      </div>
    </div>
  );
}
