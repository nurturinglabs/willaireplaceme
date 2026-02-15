"use client";

import { motion } from "framer-motion";
import { CompanyItem } from "@/lib/types";

interface CompanyCardProps {
  companies: CompanyItem[];
}

export default function CompanyCard({ companies }: CompanyCardProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 border-b border-warm-border pb-3">
        <h2 className="text-lg font-mono font-semibold text-warm-text uppercase tracking-wider">
          Threat Agents — Companies
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {companies.map((company, index) => (
          <motion.div
            key={company.name}
            className="bg-warm-surface border border-warm-border rounded-card p-4 hover:border-warm-muted/30 transition-colors"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04, duration: 0.3 }}
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-warm-text text-sm">{company.name}</h3>
              <span className="text-[11px] font-mono px-2 py-0.5 bg-warm-accent/10 text-warm-accent border border-warm-accent/20 rounded font-semibold shrink-0 ml-2">
                {company.product}
              </span>
            </div>
            <p className="text-sm text-warm-muted">{company.threat}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
