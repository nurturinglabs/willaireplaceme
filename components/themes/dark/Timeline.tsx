"use client";

import { motion } from "framer-motion";
import { TimelinePhase } from "@/lib/types";

interface TimelineProps {
  timeline: TimelinePhase[];
}

const phaseIcons = [
  { label: "NOW", color: "#ef4444", active: true },
  { label: "NEAR", color: "#e8a838", active: false },
  { label: "LONG", color: "#22c55e", active: false },
];

export default function Timeline({ timeline }: TimelineProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 border-b border-warm-border pb-3">
        <h2 className="text-lg font-mono font-semibold text-warm-text uppercase tracking-wider">
          Prognosis — Timeline
        </h2>
      </div>
      <p className="text-xs text-warm-muted font-mono">
        Projected based on current trends. Actual pace may vary.
      </p>
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-warm-border" />

        <div className="space-y-4">
          {timeline.map((item, index) => {
            const icon = phaseIcons[index] || phaseIcons[2];
            return (
              <motion.div
                key={item.phase}
                className="relative flex items-start gap-4 pl-14"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08, duration: 0.3 }}
              >
                <div
                  className={`absolute left-4 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    icon.active
                      ? "border-warm-text bg-warm-text"
                      : "border-warm-border bg-warm-surface"
                  }`}
                >
                  {icon.active && (
                    <div className="w-1.5 h-1.5 rounded-full bg-warm-surface" />
                  )}
                </div>

                <div
                  className={`flex-1 border rounded-card p-4 ${
                    icon.active
                      ? "bg-warm-bg border-warm-text/20"
                      : "bg-warm-surface border-warm-border"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono font-bold text-warm-text text-sm">
                      {item.phase}
                    </span>
                    {icon.active && (
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-warm-text text-warm-surface rounded font-semibold">
                        CURRENT
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-warm-muted">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
