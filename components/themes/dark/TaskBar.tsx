"use client";

import { motion } from "framer-motion";
import { TaskItem, getStatusClasses, getBarColor } from "@/lib/types";

interface TaskBarProps {
  tasks: TaskItem[];
}

export default function TaskBar({ tasks }: TaskBarProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 border-b border-warm-border pb-3">
        <h2 className="text-lg font-mono font-semibold text-warm-text uppercase tracking-wider">
          Diagnostic — Task Analysis
        </h2>
      </div>
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <motion.div
            key={task.task}
            className="bg-warm-surface border border-warm-border rounded-card p-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.04, duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="font-medium text-warm-text text-sm">{task.task}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider font-semibold ${getStatusClasses(task.status)}`}
                >
                  {task.status}
                </span>
              </div>
              <span
                className="font-mono font-bold text-sm"
                style={{ color: getBarColor(task.status) }}
              >
                {task.automation}%
              </span>
            </div>
            <div className="w-full bg-warm-border/40 rounded-full h-1.5 mb-2">
              <motion.div
                className="h-1.5 rounded-full"
                style={{ backgroundColor: getBarColor(task.status) }}
                initial={{ width: 0 }}
                animate={{ width: `${task.automation}%` }}
                transition={{ delay: index * 0.04 + 0.2, duration: 0.6, ease: "easeOut" }}
              />
            </div>
            <p className="text-sm text-warm-muted mb-2">{task.description}</p>
            {task.tools.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {task.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[11px] font-mono px-2 py-0.5 bg-warm-bg text-warm-muted border border-warm-border rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
