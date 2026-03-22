"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { Lock, Pause, Play } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { samplesPageCopy, soundSamples, type SoundSampleItem } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function SamplesPage() {
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  const [playingSampleId, setPlayingSampleId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const sortedSamples = useMemo(() => [...soundSamples], []);
  const categories = useMemo(
    () => ["All", ...new Set(sortedSamples.map((sample) => sample.category))],
    [sortedSamples],
  );
  const visibleSamples = useMemo(() => {
    if (activeCategory === "All") return sortedSamples;
    return sortedSamples.filter((sample) => sample.category === activeCategory);
  }, [activeCategory, sortedSamples]);

  const stopAllAudio = useCallback(() => {
    Object.values(audioRefs.current).forEach((audio) => {
      if (!audio) return;
      audio.pause();
      audio.currentTime = 0;
    });
    setPlayingSampleId(null);
  }, []);

  const startPreview = useCallback(
    async (sample: SoundSampleItem) => {
      const audio = audioRefs.current[sample.id];
      if (!audio) return;

      stopAllAudio();

      audio.currentTime = 0;
      try {
        await audio.play();
        setPlayingSampleId(sample.id);
      } catch {
        setPlayingSampleId(null);
      }
    },
    [stopAllAudio],
  );

  const togglePreview = useCallback(
    (sample: SoundSampleItem) => {
      if (playingSampleId === sample.id) {
        stopAllAudio();
        return;
      }

      void startPreview(sample);
    },
    [playingSampleId, startPreview, stopAllAudio],
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
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="relative overflow-x-hidden px-[var(--samples-mobile-gutter)] pt-[5.6rem] pb-[var(--samples-mobile-section-y)] md:px-4 md:pt-28 md:pb-20">
        <div className="pointer-events-none absolute -top-14 left-[-8%] w-80 h-80 rounded-full bg-lilacHalo/20 blur-3xl" />
        <div className="pointer-events-none absolute top-[30%] right-[-10%] w-96 h-96 rounded-full bg-babyPink/35 blur-3xl" />

        <section className="container mx-auto max-w-7xl">
          <header className="mb-5 max-w-3xl space-y-3 md:mb-8 md:space-y-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/60 md:text-xs">
              Producer-ready material
            </p>
            <h1 className="text-[clamp(2rem,9vw,2.6rem)] font-light leading-[1.05] md:text-5xl md:leading-tight">
              {samplesPageCopy.title}
            </h1>
            <p className="max-w-[62ch] text-[0.98rem] leading-relaxed text-foreground/75 md:text-lg">
              {samplesPageCopy.description}
            </p>
            <p className="text-xs text-foreground/60 md:text-sm">{samplesPageCopy.previewNote}</p>
          </header>

          <div className="samples-sticky-rail mb-5 -mx-[var(--samples-mobile-gutter)] px-[var(--samples-mobile-gutter)] md:hidden">
            <div className="samples-chip-scroll">
              {categories.map((category) => {
                const isActive = category === activeCategory;
                return (
                  <button
                    key={`mobile-${category}`}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    className={cn(
                      "samples-chip-button rounded-full border px-4 text-sm transition-colors",
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
          </div>

          <div className="mb-6 hidden flex-wrap gap-2 md:flex">
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
                      : "border-foreground/15 bg-background text-foreground/75 hover:bg-babyPink/40",
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="space-y-[var(--samples-mobile-card-gap)] md:space-y-0 md:overflow-hidden md:rounded-2xl md:border md:border-foreground/20 md:bg-card">
            <div className="hidden grid-cols-[2.2fr_1fr_0.8fr_1fr] gap-4 border-b border-foreground/20 !bg-[rgb(var(--samples-table-head-bg))] px-5 py-3 text-xs uppercase tracking-[0.12em] !text-[rgb(var(--samples-table-head-fg))] md:grid">
              <p>Sample</p>
              <p>Preview Wave</p>
              <p>Length</p>
              <p>Action</p>
            </div>

            {visibleSamples.map((sample) => {
              const isPlaying = playingSampleId === sample.id;

              return (
                <article
                  key={sample.id}
                  className={cn(
                    "grid grid-cols-1 gap-4 rounded-2xl border border-foreground/20 bg-card p-[var(--samples-mobile-card-padding)] shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-colors",
                    "hover:bg-foreground/10 md:grid-cols-[2.2fr_1fr_0.8fr_1fr] md:items-center md:gap-4 md:rounded-none md:border-0 md:border-b md:border-foreground/20 md:p-5 md:shadow-none md:last:border-b-0",
                  )}
                >
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/70">
                      {sample.category}
                    </p>
                    <h2 className="mt-1 text-[1.8rem] font-light leading-tight text-foreground md:text-2xl">
                      {sample.title}
                    </h2>
                    <p className="mt-1 text-sm text-foreground/80">{sample.texture}</p>
                    {sample.locked && (
                      <p className="mt-2 inline-flex items-center gap-1 rounded-full border border-foreground/20 bg-background px-2.5 py-1 text-[11px] text-foreground/70">
                        <Lock className="h-3.5 w-3.5" />
                        {samplesPageCopy.lockMessage}
                      </p>
                    )}
                  </div>

                  <div className="md:mt-0">
                    <div className="mb-2 flex items-center justify-between text-xs text-foreground/70 md:hidden">
                      <span>Preview: {sample.previewSeconds}s</span>
                      <span>Full: {sample.fullDuration}</span>
                    </div>
                    <div className="h-10 w-full rounded-full border border-babyPink/80 bg-background px-3 py-2">
                      <div className="h-full w-full rounded-full bg-babyPink" />
                    </div>
                  </div>

                  <div className="hidden text-sm text-foreground md:block">
                    <p>Preview: {sample.previewSeconds}s</p>
                    <p>Full: {sample.fullDuration}</p>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => togglePreview(sample)}
                      className={cn(
                        "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-4 py-2 text-sm md:w-auto",
                        "border border-foreground/25 transition-colors duration-200",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
                        isPlaying
                          ? "border-babyPink bg-babyPink text-midnightNavy"
                          : "bg-background text-foreground hover:bg-babyPink/40",
                      )}
                    >
                      {isPlaying ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                      {isPlaying ? "Stop Preview" : "Preview"}
                    </button>
                  </div>

                  <div className="hidden">
                    {/* Keep preview audio behavior unchanged */}
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
                        setPlayingSampleId((current) =>
                          current === sample.id ? null : current,
                        );
                      }}
                      onEnded={() => {
                        setPlayingSampleId((current) =>
                          current === sample.id ? null : current,
                        );
                      }}
                    />
                  </div>
                </article>
              );
            })}

            {visibleSamples.length === 0 && (
              <div className="rounded-2xl border border-foreground/20 bg-card px-4 py-8 text-sm text-foreground/60 md:rounded-none md:border-0">
                No samples in this category yet.
              </div>
            )}
          </div>

          <div className="mt-4 rounded-xl border border-foreground/20 bg-card px-4 py-3 text-[11px] text-foreground/70 md:text-xs">
            <p>
              Full pieces are locked for licensing to producers and collaborators. Direct
              purchase flow will be added in a future update.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
