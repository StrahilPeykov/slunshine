"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Filter, Grid3X3, Pause, Play, Rows3 } from "lucide-react";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { useTheme } from "@/components/providers/theme-provider";
import {
  categories,
  DEFAULT_MOMENT_THUMBNAIL,
  DEFAULT_MOMENT_VIDEO,
  filterMomentsByCategory,
  filterMomentsByTime,
  sampleMoments,
  sortMomentsByDate,
  type MomentCategory,
  type MusicalMoment,
  type TimeFilter,
  timeFilters,
} from "@/lib/musical-moments-data";
import { cn } from "@/lib/utils";

type ViewMode = "scroll" | "grid";

export function MusicalMomentsPage() {
  const { theme } = useTheme();
  const [viewMode, setViewMode] = useState<ViewMode>("scroll");
  const [activeCategory, setActiveCategory] =
    useState<MomentCategory | "all">("all");
  const [activeTimeFilter, setActiveTimeFilter] = useState<TimeFilter>("all");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [currentMomentIndex, setCurrentMomentIndex] = useState(0);
  const [videoErrors, setVideoErrors] = useState<Record<string, boolean>>({});
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const moments = useMemo(() => sortMomentsByDate(sampleMoments), []);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredMoments = useMemo(() => {
    const byCategory = filterMomentsByCategory(moments, activeCategory);
    return filterMomentsByTime(byCategory, activeTimeFilter);
  }, [moments, activeCategory, activeTimeFilter]);

  const pauseAllVideos = useCallback(() => {
    Object.values(videoRefs.current).forEach((video) => video?.pause());
  }, []);

  const resolvePoster = (moment: MusicalMoment) => {
    if (imageErrors[moment.id]) {
      return DEFAULT_MOMENT_THUMBNAIL;
    }
    return moment.thumbnail;
  };

  const resolveVideo = (moment: MusicalMoment) => {
    if (videoErrors[moment.id]) {
      return DEFAULT_MOMENT_VIDEO;
    }
    return moment.videoUrl;
  };

  const playMoment = useCallback(
    async (momentId: string) => {
      const video = videoRefs.current[momentId];
      if (!video) return;

      pauseAllVideos();

      try {
        await video.play();
        setPlayingVideo(momentId);
      } catch {
        setVideoErrors((prev) => ({ ...prev, [momentId]: true }));
        setPlayingVideo(null);
      }
    },
    [pauseAllVideos],
  );

  const handleVideoClick = (momentId: string) => {
    const video = videoRefs.current[momentId];
    if (!video) return;

    if (playingVideo === momentId) {
      video.pause();
      setPlayingVideo(null);
      return;
    }

    void playMoment(momentId);
  };

  const resetPlayback = () => {
    pauseAllVideos();
    setPlayingVideo(null);
  };

  useEffect(() => {
    if (viewMode !== "scroll") return;

    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const sectionHeight = container.clientHeight;
      const currentIndex = Math.round(container.scrollTop / sectionHeight);

      if (
        currentIndex !== currentMomentIndex &&
        currentIndex >= 0 &&
        currentIndex < filteredMoments.length
      ) {
        setCurrentMomentIndex(currentIndex);
        void playMoment(filteredMoments[currentIndex].id);
      }
    };

    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [viewMode, currentMomentIndex, filteredMoments, playMoment]);

  useEffect(() => {
    return () => pauseAllVideos();
  }, [pauseAllVideos]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 pb-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                aria-label="Back to homepage"
                className={cn(
                  "p-2 rounded-full transition-all duration-300 hover:scale-110",
                  theme === "night"
                    ? "bg-white/10 hover:bg-white/20"
                    : "bg-black/10 hover:bg-black/20",
                )}
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="font-cormorant text-4xl font-light">
                  Musical Moments
                </h1>
                <p className="text-foreground/60">
                  {filteredMoments.length} moments •{" "}
                  {viewMode === "scroll" ? "Scroll View" : "Grid View"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFilters((current) => !current)}
                aria-label="Toggle filters"
                className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  theme === "night"
                    ? "bg-white/10 hover:bg-white/20"
                    : "bg-black/10 hover:bg-black/20",
                )}
              >
                <Filter className="w-5 h-5" />
              </button>

              <div
                className={cn(
                  "flex p-1 rounded-full",
                  theme === "night" ? "bg-white/10" : "bg-black/10",
                )}
              >
                <button
                  onClick={() => setViewMode("scroll")}
                  aria-label="Switch to scroll view"
                  className={cn(
                    "p-2 rounded-full transition-all duration-300",
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
                  onClick={() => setViewMode("grid")}
                  aria-label="Switch to grid view"
                  className={cn(
                    "p-2 rounded-full transition-all duration-300",
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

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={cn(
                  "mb-8 p-6 rounded-2xl backdrop-blur-xl border overflow-hidden",
                  theme === "night"
                    ? "bg-white/5 border-white/10"
                    : "bg-white/90 border-white shadow-xl",
                )}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-playfair text-lg mb-4">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => {
                            resetPlayback();
                            setActiveCategory(category.id);
                          }}
                          className={cn(
                            "flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all",
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
                    <h3 className="font-playfair text-lg mb-4">Time of Day</h3>
                    <div className="flex flex-wrap gap-2">
                      {timeFilters.map((filter) => (
                        <button
                          key={filter.id}
                          onClick={() => {
                            resetPlayback();
                            setActiveTimeFilter(filter.id);
                          }}
                          className={cn(
                            "flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all",
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
        </div>
      </div>

      {filteredMoments.length === 0 ? (
        <div className="px-4 pb-20">
          <div className="container mx-auto max-w-2xl text-center">
            <p className="text-foreground/70">
              No moments match this filter combination yet.
            </p>
          </div>
        </div>
      ) : viewMode === "scroll" ? (
        <div
          ref={scrollContainerRef}
          className="h-[calc(100vh-200px)] overflow-y-auto snap-y snap-mandatory scrollbar-hide moments-scroll"
        >
          {filteredMoments.map((moment, index) => (
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
                    onError={() =>
                      setVideoErrors((prev) => ({ ...prev, [moment.id]: true }))
                    }
                    onPlay={() => setPlayingVideo(moment.id)}
                    onPause={() =>
                      setPlayingVideo((current) =>
                        current === moment.id ? null : current,
                      )
                    }
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <img
                    src={resolvePoster(moment)}
                    alt={moment.title}
                    onError={() =>
                      setImageErrors((prev) => ({ ...prev, [moment.id]: true }))
                    }
                    className={cn(
                      "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
                      playingVideo === moment.id ? "opacity-0" : "opacity-100",
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div
                    className={cn(
                      "absolute inset-0 opacity-20",
                      `bg-gradient-to-br ${moment.color}`,
                    )}
                  />
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
                      onClick={() => handleVideoClick(moment.id)}
                      aria-label={
                        playingVideo === moment.id ? "Pause moment" : "Play moment"
                      }
                      className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center hover:scale-110 transition-all"
                    >
                      {playingVideo === moment.id ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 ml-1 text-white" />
                      )}
                    </button>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-white text-xl font-playfair font-medium">
                      {moment.title}
                    </h3>
                    <p className="text-white/90 text-sm italic leading-relaxed">
                      &ldquo;{moment.caption}&rdquo;
                    </p>

                    <div className="flex flex-wrap gap-2 text-xs text-white/70">
                      {moment.location && (
                        <span className="flex items-center gap-1">
                          📍 {moment.location}
                        </span>
                      )}
                      {moment.instrument && (
                        <span className="flex items-center gap-1">
                          🎵 {moment.instrument}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        💫 {moment.mood}
                      </span>
                    </div>
                  </div>
                </div>

                {index < filteredMoments.length - 1 && (
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
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
      ) : (
        <div className="px-4 pb-20">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMoments.map((moment, index) => (
                <motion.button
                  key={moment.id}
                  type="button"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={cn(
                    "group relative aspect-[9/16] rounded-2xl overflow-hidden text-left",
                    "hover:scale-[1.02] transition-all duration-300",
                    theme === "night" ? "bg-white/5" : "bg-white shadow-lg",
                  )}
                  onClick={() => handleVideoClick(moment.id)}
                >
                  <video
                    ref={(element) => {
                      videoRefs.current[moment.id] = element;
                    }}
                    src={resolveVideo(moment)}
                    poster={resolvePoster(moment)}
                    onError={() =>
                      setVideoErrors((prev) => ({ ...prev, [moment.id]: true }))
                    }
                    onPlay={() => setPlayingVideo(moment.id)}
                    onPause={() =>
                      setPlayingVideo((current) =>
                        current === moment.id ? null : current,
                      )
                    }
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <img
                    src={resolvePoster(moment)}
                    alt={moment.title}
                    onError={() =>
                      setImageErrors((prev) => ({ ...prev, [moment.id]: true }))
                    }
                    className={cn(
                      "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
                      playingVideo === moment.id ? "opacity-0" : "opacity-100",
                    )}
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
                      <span className="text-xs text-white/80">
                        {moment.duration}
                      </span>
                    </div>
                    <h3 className="text-white font-medium mb-1 line-clamp-2">
                      {moment.title}
                    </h3>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
