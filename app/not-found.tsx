"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-warm-bg">
      <Navigation />
      <div className="pt-32 pb-16 px-4 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold text-warm-text font-mono mb-4">
            404
          </h1>
          <p className="text-xl text-warm-text/80 mb-2">Role Not Found</p>
          <p className="text-warm-muted mb-8">
            We haven&apos;t analyzed this profession yet. Try searching for a
            different role.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-warm-accent text-black font-mono font-semibold text-sm rounded-card hover:bg-warm-accent/90 transition-colors"
          >
            &larr; Search All Professions
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
