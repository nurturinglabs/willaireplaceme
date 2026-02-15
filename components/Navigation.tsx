"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const SITE_HOST = process.env.NEXT_PUBLIC_SITE_URL?.replace(/^https?:\/\//, "") || "willaireplace.me";

export default function Navigation() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-warm-surface/80 backdrop-blur-md border-b border-warm-border"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-mono font-bold text-base text-warm-text tracking-tight">
            WILLAIREPLACE<span className="text-warm-accent">.ME</span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-warm-muted hidden sm:inline">
            AI Career Diagnostics by Claude
          </span>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`I just asked Claude to score 75 jobs by AI replacement risk.\n\nSome scored 90%+. The task-by-task breakdowns are brutal.\n\nCheck yours before your boss does \u2192 ${SITE_HOST}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono px-3 py-1.5 bg-warm-accent text-black rounded-card hover:bg-warm-accent/90 transition-colors font-semibold"
          >
            Share on X
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
