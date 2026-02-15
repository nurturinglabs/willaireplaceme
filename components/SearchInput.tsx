"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { roles } from "@/data/roles-index";
import { getScoreTextClass } from "@/lib/types";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return roles
      .filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query]);

  const handleSelect = (slug: string) => {
    setQuery("");
    setIsFocused(false);
    router.push(`/${slug}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filtered.length > 0) {
      handleSelect(filtered[0].slug);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-xl mx-auto">
      <div
        className={`relative flex items-center bg-warm-surface border-2 rounded-card transition-all duration-200 ${
          isFocused
            ? "border-warm-accent shadow-sm"
            : "border-warm-border"
        }`}
      >
        <svg
          className="absolute left-4 w-5 h-5 text-warm-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Enter your job title..."
          className="w-full py-3.5 pl-12 pr-4 bg-transparent text-warm-text placeholder-warm-muted/60 font-sans text-lg focus:outline-none"
          autoComplete="off"
        />
      </div>

      <AnimatePresence>
        {isFocused && filtered.length > 0 && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-1 bg-warm-surface border border-warm-border rounded-card overflow-hidden shadow-lg z-50"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            {filtered.map((role) => (
              <button
                key={role.slug}
                type="button"
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-warm-border/30 transition-colors text-left border-b border-warm-border-light last:border-0"
                onMouseDown={() => handleSelect(role.slug)}
              >
                <div>
                  <p className="text-warm-text font-medium text-sm">{role.title}</p>
                  <p className="text-xs text-warm-muted font-mono">{role.category}</p>
                </div>
                <span className={`font-mono font-bold text-sm ${getScoreTextClass(role.overallScore)}`}>
                  {role.overallScore}%
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {isFocused && query.trim() && filtered.length === 0 && (
        <motion.div
          className="absolute top-full left-0 right-0 mt-1 bg-warm-surface border border-warm-border rounded-card p-4 text-center shadow-lg z-50"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-warm-muted text-sm">
            No matching role found. Try a different job title.
          </p>
        </motion.div>
      )}
    </form>
  );
}
