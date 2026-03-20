"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import type { MutableRefObject } from "react";
import { cn } from "@/lib/utils";
import type { MusicalMoment } from "@/lib/musical-moments-data";
import type { ThemeMode } from "../types";

interface MomentsGridViewProps {
  theme: ThemeMode;
  moments: ReadonlyArray<MusicalMoment>;
  playingVideo: string | null;
  videoRefs: MutableRefObject<Record<string, HTMLVideoElement | null>>;
  onToggleVideo: (momentId: string) => void;
  onVideoError: (momentId: string) => void;
  onImageError: (momentId: string) => void;
  resolvePoster: (moment: MusicalMoment) => string;
  resolveVideo: (moment: MusicalMoment) => string;
}

export function MomentsGridView({
  theme,
  moments,
  playingVideo,
  videoRefs,
  onToggleVideo,
  onVideoError,
  onImageError,
  resolvePoster,
  resolveVideo,
}: MomentsGridViewProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="px-4 pb-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {moments.map((moment, index) => (
            <motion.button
              key={moment.id}
              type="button"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: index * 0.08 }}
              className={cn(
                "group relative aspect-[9/16] rounded-2xl overflow-hidden text-left",
                "hover:scale-[1.02] transition-all duration-300 transform-gpu will-change-transform",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
                theme === "night" ? "bg-white/5" : "bg-white shadow-lg",
              )}
              onClick={() => onToggleVideo(moment.id)}
              aria-label={playingVideo === moment.id ? `Pause ${moment.title}` : `Play ${moment.title}`}
            >
              <video
                ref={(element) => {
                  videoRefs.current[moment.id] = element;
                }}
                src={resolveVideo(moment)}
                poster={resolvePoster(moment)}
                onError={() => onVideoError(moment.id)}
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img
                src={resolvePoster(moment)}
                alt={moment.title}
                onError={() => onImageError(moment.id)}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
                  playingVideo === moment.id ? "opacity-0" : "opacity-100",
                )}
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  {playingVideo === moment.id ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-0.5" />
                  )}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs bg-black/40 text-white px-2 py-1 rounded-full backdrop-blur-sm capitalize">
                    {moment.category}
                  </span>
                  <span className="text-xs text-white/80">{moment.duration}</span>
                </div>
                <h3 className="text-white font-medium mb-1 line-clamp-2">{moment.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
