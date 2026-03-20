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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="relative overflow-hidden pt-28 pb-20 px-4">
        <div className="pointer-events-none absolute -top-14 left-[-8%] w-80 h-80 rounded-full bg-lilacHalo/20 blur-3xl" />
        <div className="pointer-events-none absolute top-[30%] right-[-10%] w-96 h-96 rounded-full bg-babyPink/35 blur-3xl" />

        <section className="container mx-auto max-w-7xl">
          <header className="max-w-4xl space-y-4 mb-8">
            <p className="text-xs tracking-[0.2em] uppercase text-foreground/60">
              Producer-ready material
            </p>
            <h1 className="text-4xl md:text-5xl font-light leading-tight">
              {samplesPageCopy.title}
            </h1>
            <p className="text-base md:text-lg text-foreground/70">{samplesPageCopy.description}</p>
            <p className="text-sm text-foreground/60">{samplesPageCopy.previewNote}</p>
          </header>

          <div className="mb-6 flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
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

          <div className="overflow-hidden rounded-2xl border border-foreground/20 bg-card">
            <div className="grid grid-cols-[2.2fr_1fr_0.8fr_1fr] gap-4 border-b border-foreground/20 px-5 py-3 text-xs uppercase tracking-[0.12em] text-foreground">
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
                  className="grid grid-cols-1 gap-4 border-b border-foreground/20 px-5 py-4 transition-colors last:border-b-0 hover:bg-foreground/10 md:grid-cols-[2.2fr_1fr_0.8fr_1fr] md:items-center"
                >
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.15em] text-foreground/70">
                      {sample.category}
                    </p>
                    <h2 className="mt-1 text-xl md:text-2xl font-light text-foreground">{sample.title}</h2>
                    <p className="mt-1 text-sm text-foreground/80">{sample.texture}</p>
                    <p className="mt-2 inline-flex items-center gap-1 rounded-full border border-foreground/25 bg-background px-2.5 py-1 text-[11px] text-foreground/80">
                      <Lock className="h-3.5 w-3.5" />
                      {samplesPageCopy.lockMessage}
                    </p>
                  </div>

                  <div className="h-10 w-full rounded-full border border-babyPink/80 bg-background px-3 py-2">
                    <div className="h-full w-full rounded-full bg-babyPink" />
                  </div>

                  <div className="text-sm text-foreground">
                    <p>Preview: {sample.previewSeconds}s</p>
                    <p>Full: {sample.fullDuration}</p>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => togglePreview(sample)}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm",
                        "border border-foreground/25 transition-colors duration-200",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
                        isPlaying
                          ? "bg-babyPink text-midnightNavy border-babyPink"
                            : "bg-background text-foreground hover:bg-babyPink/40",
                      )}
                    >
                      {isPlaying ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                      {isPlaying ? "Stop" : "Preview"}
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
              <div className="px-5 py-8 text-sm text-foreground/60">
                No samples in this category yet.
              </div>
            )}
          </div>

          <div className="mt-4 rounded-xl border border-foreground/20 bg-card px-4 py-3 text-xs text-foreground/80">
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

