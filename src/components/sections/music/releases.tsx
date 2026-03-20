"use client";

import { motion } from "framer-motion";
import { Calendar, Headphones, Sparkles } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import type { ReleaseItem } from "@/content/site-content";
import { cn } from "@/lib/utils";

interface ReleasesProps {
  releases: ReadonlyArray<ReleaseItem>;
}

export function Releases({ releases }: ReleasesProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <div className="flex items-center gap-3 mb-8">
        <Sparkles className={cn("w-5 h-5", theme === "night" ? "text-lavaGlow" : "text-coral")} />
        <h3
          className={cn(
            "font-playfair text-2xl",
            theme === "night" ? "text-white" : "text-midnightNavy",
          )}
        >
          Coming Soon
        </h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {releases.map((release, index) => (
          <motion.article
            key={release.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={cn(
              "group relative overflow-hidden rounded-2xl p-8",
              "backdrop-blur-sm border transition-all duration-500",
              "hover:scale-[1.01] transform-gpu will-change-transform",
              theme === "night"
                ? "bg-white/5 border-white/10 hover:bg-white/10"
                : "bg-white/80 border-white shadow-xl hover:shadow-2xl",
            )}
          >
            <div
              className={cn(
                "absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500",
                "bg-gradient-to-br from-lilacHalo via-coral to-lavaGlow",
                "animate-gradient bg-[length:200%_200%]",
              )}
            />

            <div className="relative">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-playfair text-2xl mb-1">{release.title}</h4>
                  <p className="text-sm text-foreground/60">
                    {release.type} • {release.genre}
                  </p>
                </div>
                <span
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm",
                    theme === "night"
                      ? "bg-lavaGlow/20 text-lavaGlow border border-lavaGlow/30"
                      : "bg-coral/20 text-coral border border-coral/30",
                  )}
                >
                  {release.status}
                </span>
              </div>

              <p className="text-foreground/70 mb-6 italic">&ldquo;{release.description}&rdquo;</p>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-foreground/50">
                  <Calendar className="w-4 h-4" />
                  {release.releaseDate}
                </span>
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm",
                    "backdrop-blur-sm border transition-all duration-300",
                    "hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
                    theme === "night"
                      ? "bg-white/5 border-white/20 hover:bg-white/10"
                      : "bg-black/5 border-black/20 hover:bg-black/10",
                  )}
                  aria-label={`Notify me when ${release.title} is released`}
                >
                  <Headphones className="w-4 h-4" />
                  Notify Me
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}
