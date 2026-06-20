"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import {
  samplesTableCopy,
  soundSamples,
  type SoundSampleItem,
} from "@/content/site-content";
import { cn } from "@/lib/utils";

export function SamplesTable() {
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  const [playingSampleId, setPlayingSampleId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...new Set(soundSamples.map((sample) => sample.category))],
    [],
  );
  const visibleSamples = useMemo(() => {
    if (activeCategory === "All") return soundSamples;
    return soundSamples.filter((sample) => sample.category === activeCategory);
  }, [activeCategory]);

  const stopAllAudio = useCallback(() => {
    Object.values(audioRefs.current).forEach((audio) => {
      if (!audio) return;
      audio.pause();
      audio.currentTime = 0;
    });
    setPlayingSampleId(null);
  }, []);

  const togglePreview = useCallback(
    (sample: SoundSampleItem) => {
      if (playingSampleId === sample.id) {
        stopAllAudio();
        return;
      }
      const audio = audioRefs.current[sample.id];
      if (!audio) return;
      stopAllAudio();
      audio.currentTime = 0;
      void audio
        .play()
        .then(() => setPlayingSampleId(sample.id))
        .catch(() => setPlayingSampleId(null));
    },
    [playingSampleId, stopAllAudio],
  );

  const handleCategoryChange = useCallback(
    (category: string) => {
      if (category === activeCategory) return;
      stopAllAudio();
      setActiveCategory(category);
    },
    [activeCategory, stopAllAudio],
  );

  return (
    <div>
      <h2 className="font-playfair text-2xl mb-2">{samplesTableCopy.title}</h2>
      <p className="mb-6 max-w-[60ch] text-sm text-foreground/70">{samplesTableCopy.note}</p>

      {/* Category filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
                isActive
                  ? "border-babyPink bg-babyPink text-midnightNavy"
                  : "border-foreground/15 bg-card text-foreground/75 hover:bg-babyPink/40",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-foreground/15 bg-card">
        <div className="hidden grid-cols-[2.4fr_1fr_0.8fr_1fr] gap-4 border-b border-foreground/15 px-5 py-3 text-xs uppercase tracking-[0.12em] text-foreground/70 md:grid">
          <p>Sample</p>
          <p>Preview</p>
          <p>Length</p>
          <p>Action</p>
        </div>

        {visibleSamples.map((sample) => {
          const isPlaying = playingSampleId === sample.id;
          return (
            <article
              key={sample.id}
              className={cn(
                "grid grid-cols-1 gap-3 border-b border-foreground/15 p-5 transition-colors last:border-b-0",
                "md:grid-cols-[2.4fr_1fr_0.8fr_1fr] md:items-center md:gap-4 hover:bg-foreground/[0.04]",
              )}
            >
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/70">
                  {sample.category}
                </p>
                <h3 className="mt-1 text-lg font-medium leading-tight text-foreground">
                  {sample.title}
                </h3>
                <p className="mt-1 text-sm text-foreground/70">{sample.texture}</p>
                <span className="mt-2 inline-flex items-center rounded-full border border-foreground/15 bg-background px-2.5 py-1 text-[11px] text-foreground/70">
                  Placeholder
                </span>
              </div>

              <div className="h-2.5 w-full overflow-hidden rounded-full border border-babyPink/60 bg-background">
                <div
                  className={cn(
                    "h-full rounded-full bg-babyPink transition-all",
                    isPlaying ? "w-full animate-pulse" : "w-1/3",
                  )}
                />
              </div>

              <div className="text-sm text-foreground/70">
                <p>Preview: {sample.previewSeconds}s</p>
                <p>Full: {sample.fullDuration}</p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => togglePreview(sample)}
                  className={cn(
                    "inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors md:w-auto",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
                    isPlaying
                      ? "border-babyPink bg-babyPink text-midnightNavy"
                      : "border-foreground/20 bg-background text-foreground hover:bg-babyPink/40",
                  )}
                  aria-label={isPlaying ? `Stop ${sample.title} preview` : `Play ${sample.title} preview`}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  {isPlaying ? "Stop" : "Preview"}
                </button>

                <audio
                  preload="none"
                  ref={(node) => {
                    audioRefs.current[sample.id] = node;
                  }}
                  src={sample.previewUrl}
                  onTimeUpdate={(event) => {
                    const audio = event.currentTarget;
                    if (audio.currentTime < sample.previewSeconds) return;
                    audio.pause();
                    audio.currentTime = 0;
                    setPlayingSampleId((current) => (current === sample.id ? null : current));
                  }}
                  onEnded={() =>
                    setPlayingSampleId((current) => (current === sample.id ? null : current))
                  }
                />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
