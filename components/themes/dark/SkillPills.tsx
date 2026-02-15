"use client";

import { motion } from "framer-motion";
import { SkillItem } from "@/lib/types";

interface SkillPillsProps {
  skills: SkillItem[];
}

export default function SkillPills({ skills }: SkillPillsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 border-b border-warm-border pb-3">
        <h2 className="text-lg font-mono font-semibold text-warm-text uppercase tracking-wider">
          Rx — Skills to Learn
        </h2>
      </div>
      <p className="text-xs text-warm-muted font-mono">
        Future-proof your career — invest in these skills now.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {skills.map((item, index) => (
          <motion.div
            key={item.skill}
            className="bg-warm-surface border border-warm-border rounded-card p-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.3 }}
          >
            <div className="flex items-start gap-3">
              <span className="text-[#e8a838] font-mono font-bold text-sm mt-0.5 shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-warm-text text-sm mb-1">
                  {item.skill}
                </h3>
                <p className="text-sm text-warm-muted">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
