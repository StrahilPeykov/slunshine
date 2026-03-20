"use client";

import Link from "next/link";
import { ArrowLeft, Filter, Grid3X3, Rows3 } from "lucide-react";
import { momentsPageCopy } from "@/content/site-content";
import { cn } from "@/lib/utils";
import type { ThemeMode, ViewMode } from "../types";

interface MomentsHeaderProps {
  theme: ThemeMode;
  filteredCount: number;
  viewMode: ViewMode;
  showFilters: boolean;
  onToggleFilters: () => void;
  onViewModeChange: (mode: ViewMode) => void;
}

export function MomentsHeader({
  theme,
  filteredCount,
  viewMode,
  showFilters,
  onToggleFilters,
  onViewModeChange,
}: MomentsHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8 gap-4">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          aria-label="Back to homepage"
          className={cn(
            "p-2 rounded-full transition-all duration-300 hover:scale-110",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
            theme === "night" ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20",
          )}
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="font-cormorant text-4xl font-light">{momentsPageCopy.title}</h1>
          <p className="text-foreground/60">
            {filteredCount} moments •{" "}
            {viewMode === "scroll"
              ? momentsPageCopy.scrollViewLabel
              : momentsPageCopy.gridViewLabel}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onToggleFilters}
          aria-label="Toggle filters"
          aria-expanded={showFilters}
          className={cn(
            "p-2 rounded-full transition-all duration-300",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
            theme === "night" ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20",
          )}
        >
          <Filter className="w-5 h-5" />
        </button>

        <div className={cn("flex p-1 rounded-full", theme === "night" ? "bg-white/10" : "bg-black/10")}>
          <button
            type="button"
            onClick={() => onViewModeChange("scroll")}
            aria-label="Switch to scroll view"
            className={cn(
              "p-2 rounded-full transition-all duration-300",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
              viewMode === "scroll"
                ? theme === "night"
                  ? "bg-lavaGlow text-white"
                  : "bg-coral text-white"
                : "hover:bg-white/10",
            )}
          >
            <Rows3 className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => onViewModeChange("grid")}
            aria-label="Switch to grid view"
            className={cn(
              "p-2 rounded-full transition-all duration-300",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
              viewMode === "grid"
                ? theme === "night"
                  ? "bg-lavaGlow text-white"
                  : "bg-coral text-white"
                : "hover:bg-white/10",
            )}
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
