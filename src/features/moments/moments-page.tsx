"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { momentsPageCopy } from "@/content/site-content";
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
  type TimeFilter,
  timeFilters,
} from "@/lib/musical-moments-data";
import { MomentsFilters } from "./components/moments-filters";
import { MomentsGridView } from "./components/moments-grid-view";
import { MomentsHeader } from "./components/moments-header";
import { MomentsScrollView } from "./components/moments-scroll-view";
import type { ViewMode } from "./types";

export function MomentsPage() {
  const { theme } = useTheme();
  const [viewMode, setViewMode] = useState<ViewMode>("scroll");
  const [activeCategory, setActiveCategory] = useState<MomentCategory | "all">("all");
  const [activeTimeFilter, setActiveTimeFilter] = useState<TimeFilter>("all");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [currentMomentIndex, setCurrentMomentIndex] = useState(0);
  const [videoErrors, setVideoErrors] = useState<Record<string, boolean>>({});
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const moments = useMemo(() => sortMomentsByDate(sampleMoments), []);
  const filteredMoments = useMemo(() => {
    // "Scroll View" is intentionally unfiltered: it should feel like a curated playback.
    if (viewMode === "scroll") return moments;
    const byCategory = filterMomentsByCategory(moments, activeCategory);
    return filterMomentsByTime(byCategory, activeTimeFilter);
  }, [moments, activeCategory, activeTimeFilter, viewMode]);

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const pauseAllVideos = useCallback(() => {
    Object.values(videoRefs.current).forEach((video) => video?.pause());
  }, []);

  const resolvePoster = useCallback(
    (moment: (typeof filteredMoments)[number]) => {
      if (imageErrors[moment.id]) return DEFAULT_MOMENT_THUMBNAIL;
      return moment.thumbnail;
    },
    [imageErrors],
  );

  const resolveVideo = useCallback(
    (moment: (typeof filteredMoments)[number]) => {
      if (videoErrors[moment.id]) return DEFAULT_MOMENT_VIDEO;
      return moment.videoUrl;
    },
    [videoErrors],
  );

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

  const toggleMomentPlayback = (momentId: string) => {
    const video = videoRefs.current[momentId];
    if (!video) return;

    if (playingVideo === momentId) {
      video.pause();
      setPlayingVideo(null);
      return;
    }

    void playMoment(momentId);
  };

  const resetPlayback = useCallback(() => {
    pauseAllVideos();
    setPlayingVideo(null);
  }, [pauseAllVideos]);

  useEffect(() => {
    if (viewMode !== "scroll") return;

    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const sectionHeight = container.clientHeight;
      const nextIndex = Math.round(container.scrollTop / sectionHeight);

      if (
        nextIndex !== currentMomentIndex &&
        nextIndex >= 0 &&
        nextIndex < filteredMoments.length
      ) {
        setCurrentMomentIndex(nextIndex);
        void playMoment(filteredMoments[nextIndex].id);
      }
    };

    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [currentMomentIndex, filteredMoments, playMoment, viewMode]);

  useEffect(() => {
    return () => pauseAllVideos();
  }, [pauseAllVideos]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 pb-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <MomentsHeader
            theme={theme}
            filteredCount={filteredMoments.length}
            viewMode={viewMode}
            showFilters={showFilters}
            onToggleFilters={() => setShowFilters((current) => !current)}
            onViewModeChange={(mode) => {
              resetPlayback();
              setCurrentMomentIndex(0);
              setViewMode(mode);
            }}
          />

          {viewMode === "grid" && (
            <MomentsFilters
              theme={theme}
              showFilters={showFilters}
              activeCategory={activeCategory}
              activeTimeFilter={activeTimeFilter}
              categories={categories}
              timeFilters={timeFilters}
              onCategoryChange={(category) => {
                resetPlayback();
                setCurrentMomentIndex(0);
                setActiveCategory(category);
              }}
              onTimeFilterChange={(filter) => {
                resetPlayback();
                setCurrentMomentIndex(0);
                setActiveTimeFilter(filter);
              }}
            />
          )}
        </div>
      </div>

      {filteredMoments.length === 0 ? (
        <div className="px-4 pb-20">
          <div className="container mx-auto max-w-2xl text-center">
            <p className="text-foreground/70">{momentsPageCopy.emptyState}</p>
          </div>
        </div>
      ) : viewMode === "scroll" ? (
        <MomentsScrollView
          moments={filteredMoments}
          playingVideo={playingVideo}
          scrollContainerRef={scrollContainerRef}
          videoRefs={videoRefs}
          onToggleVideo={toggleMomentPlayback}
          onVideoError={(momentId) =>
            setVideoErrors((prev) => ({ ...prev, [momentId]: true }))
          }
          onImageError={(momentId) =>
            setImageErrors((prev) => ({ ...prev, [momentId]: true }))
          }
          resolvePoster={resolvePoster}
          resolveVideo={resolveVideo}
        />
      ) : (
        <MomentsGridView
          theme={theme}
          moments={filteredMoments}
          playingVideo={playingVideo}
          videoRefs={videoRefs}
          onToggleVideo={toggleMomentPlayback}
          onVideoError={(momentId) =>
            setVideoErrors((prev) => ({ ...prev, [momentId]: true }))
          }
          onImageError={(momentId) =>
            setImageErrors((prev) => ({ ...prev, [momentId]: true }))
          }
          resolvePoster={resolvePoster}
          resolveVideo={resolveVideo}
        />
      )}

      <Footer />
    </div>
  );
}
