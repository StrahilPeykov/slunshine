"use client";

import { Pause, Play } from "lucide-react";
import type { MutableRefObject, RefObject } from "react";
import { cn } from "@/lib/utils";
import type { MusicalMoment } from "@/lib/musical-moments-data";

interface MomentsScrollViewProps {
  moments: ReadonlyArray<MusicalMoment>;
  playingVideo: string | null;
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  videoRefs: MutableRefObject<Record<string, HTMLVideoElement | null>>;
  onToggleVideo: (momentId: string) => void;
  onVideoError: (momentId: string) => void;
  onImageError: (momentId: string) => void;
  resolvePoster: (moment: MusicalMoment) => string;
  resolveVideo: (moment: MusicalMoment) => string;
}

export function MomentsScrollView({
  moments,
  playingVideo,
  scrollContainerRef,
  videoRefs,
  onToggleVideo,
  onVideoError,
  onImageError,
  resolvePoster,
  resolveVideo,
}: MomentsScrollViewProps) {
  return (
    <div
      ref={scrollContainerRef}
      className="h-[calc(100vh-200px)] overflow-y-auto snap-y snap-mandatory scrollbar-hide moments-scroll"
    >
      {moments.map((moment, index) => (
        <div
          key={moment.id}
          className="h-full min-h-[700px] snap-start relative flex items-center justify-center px-4"
        >
          <div className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
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
              <div className={cn("absolute inset-0 opacity-20", `bg-gradient-to-br ${moment.color}`)} />
            </div>

            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-black/40 text-white backdrop-blur-sm w-fit capitalize">
                    {moment.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-black/40 text-white backdrop-blur-sm w-fit">
                    {moment.duration}
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => onToggleVideo(moment.id)}
                  aria-label={playingVideo === moment.id ? "Pause moment" : "Play moment"}
                  className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo"
                >
                  {playingVideo === moment.id ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 ml-1 text-white" />
                  )}
                </button>
              </div>

              <div className="space-y-3">
                <h3 className="text-white text-xl font-playfair font-medium">{moment.title}</h3>
                <p className="text-white/90 text-sm italic leading-relaxed">
                  &ldquo;{moment.caption}&rdquo;
                </p>

                <div className="flex flex-wrap gap-2 text-xs text-white/70">
                  {moment.location && <span className="flex items-center gap-1">📍 {moment.location}</span>}
                  {moment.instrument && (
                    <span className="flex items-center gap-1">🎵 {moment.instrument}</span>
                  )}
                  <span className="flex items-center gap-1">💫 {moment.mood}</span>
                </div>
              </div>
            </div>

            {index < moments.length - 1 && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 motion-safe:animate-bounce">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
