"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { momentsPageCopy } from "@/content/site-content";
import { cn } from "@/lib/utils";
import type {
  MomentCategory,
  TimeFilter,
} from "@/lib/musical-moments-data";
import type { ThemeMode } from "../types";

interface FilterOption<T extends string> {
  id: T;
  label: string;
  icon?: string;
  emoji?: string;
}

interface MomentsFiltersProps {
  theme: ThemeMode;
  showFilters: boolean;
  activeCategory: MomentCategory | "all";
  activeTimeFilter: TimeFilter;
  categories: ReadonlyArray<FilterOption<MomentCategory | "all">>;
  timeFilters: ReadonlyArray<FilterOption<TimeFilter>>;
  onCategoryChange: (value: MomentCategory | "all") => void;
  onTimeFilterChange: (value: TimeFilter) => void;
}

export function MomentsFilters({
  theme,
  showFilters,
  activeCategory,
  activeTimeFilter,
  categories,
  timeFilters,
  onCategoryChange,
  onTimeFilterChange,
}: MomentsFiltersProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          className={cn(
            "mb-8 p-6 rounded-2xl backdrop-blur-xl border overflow-hidden",
            theme === "night" ? "bg-white/5 border-white/10" : "bg-white/90 border-white shadow-xl",
          )}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-playfair text-lg mb-4">{momentsPageCopy.categoryHeading}</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => onCategoryChange(category.id)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
                      activeCategory === category.id
                        ? theme === "night"
                          ? "bg-lavaGlow text-white"
                          : "bg-coral text-white"
                        : theme === "night"
                          ? "bg-white/10 hover:bg-white/20"
                          : "bg-black/5 hover:bg-black/10",
                    )}
                  >
                    <span>{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-playfair text-lg mb-4">{momentsPageCopy.timeHeading}</h3>
              <div className="flex flex-wrap gap-2">
                {timeFilters.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => onTimeFilterChange(filter.id)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
                      activeTimeFilter === filter.id
                        ? theme === "night"
                          ? "bg-lilacHalo text-white"
                          : "bg-aquaMist text-midnightNavy"
                        : theme === "night"
                          ? "bg-white/10 hover:bg-white/20"
                          : "bg-black/5 hover:bg-black/10",
                    )}
                  >
                    <span>{filter.emoji}</span>
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
