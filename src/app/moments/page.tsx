// src/app/moments/page.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Play, Pause, Filter, Grid3X3, Rows3, ArrowLeft, Heart, Share2, Download } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import Head from "next/head";

type MomentCategory = "practice" | "performance" | "teaching" | "inspiration" | "collaboration";
type TimeFilter = "all" | "morning" | "golden" | "night";
type ViewMode = "scroll" | "grid";

interface MusicalMoment {
  id: string;
  title: string;
  caption: string;
  category: MomentCategory;
  timeOfDay: TimeFilter;
  videoUrl: string;
  thumbnail: string;
  duration: string;
  location?: string;
  instrument?: string;
  mood: string;
  color: string;
  date: string;
}

export default function MusicalMomentsPage() {
  const { theme } = useTheme();
  const [viewMode, setViewMode] = useState<ViewMode>("scroll");
  const [activeCategory, setActiveCategory] = useState<MomentCategory | "all">("all");
  const [activeTimeFilter, setActiveTimeFilter] = useState<TimeFilter>("all");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [currentMomentIndex, setCurrentMomentIndex] = useState(0);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const moments: MusicalMoment[] = [
    {
      id: "1",
      title: "Morning Reflections",
      caption: "The strings whisper secrets that only the dawn can hear...",
      category: "practice",
      timeOfDay: "morning",
      videoUrl: "/videos/morning-practice.mp4",
      thumbnail: "/images/gallery/portrait-1.webp",
      duration: "0:23",
      location: "Home Studio",
      instrument: "Concert Harp",
      mood: "Serene",
      color: "from-amber-200 to-orange-300",
      date: "2024-03-15"
    },
    {
      id: "2",
      title: "Technique in Motion",
      caption: "Every glissando tells a story of years of dedication",
      category: "teaching",
      timeOfDay: "golden",
      videoUrl: "/videos/technique-demo.mp4",
      thumbnail: "/images/gallery/harp-hands.webp",
      duration: "0:31",
      location: "Music School",
      instrument: "Salvi Harp",
      mood: "Focused",
      color: "from-purple-200 to-pink-300",
      date: "2024-03-12"
    },
    {
      id: "3",
      title: "Backstage Ritual",
      caption: "The quiet moments before the storm of applause",
      category: "performance",
      timeOfDay: "night",
      videoUrl: "/videos/backstage.mp4",
      thumbnail: "/images/gallery/concert-prep.webp",
      duration: "0:18",
      location: "Sofia Concert Hall",
      instrument: "Concert Harp",
      mood: "Anticipation",
      color: "from-indigo-200 to-purple-300",
      date: "2024-03-10"
    },
    {
      id: "4",
      title: "Student Discovery",
      caption: "Watching someone find their voice through the strings",
      category: "teaching",
      timeOfDay: "morning",
      videoUrl: "/videos/student-lesson.mp4",
      thumbnail: "/images/gallery/teaching-moment.webp",
      duration: "0:27",
      location: "Private Studio",
      instrument: "Student Harp",
      mood: "Joyful",
      color: "from-green-200 to-emerald-300",
      date: "2024-03-08"
    },
    {
      id: "5",
      title: "Improvised Dreams",
      caption: "When the heart speaks faster than the mind can follow",
      category: "inspiration",
      timeOfDay: "night",
      videoUrl: "/videos/improvisation.mp4",
      thumbnail: "/images/gallery/night-session.webp",
      duration: "0:41",
      location: "Home Studio",
      instrument: "Celtic Harp",
      mood: "Ethereal",
      color: "from-blue-200 to-cyan-300",
      date: "2024-03-05"
    },
    {
      id: "6",
      title: "Duo Magic",
      caption: "Two instruments, one heartbeat",
      category: "collaboration",
      timeOfDay: "golden",
      videoUrl: "/videos/mila-collaboration.mp4",
      thumbnail: "/images/mila-concert.webp",
      duration: "0:33",
      location: "Recording Studio",
      instrument: "Piano & Harp",
      mood: "Harmonious",
      color: "from-rose-200 to-pink-300",
      date: "2024-03-03"
    }
  ];

  const categories = [
    { id: "all", label: "All", icon: "✨" },
    { id: "practice", label: "Practice", icon: "🎵" },
    { id: "performance", label: "Performance", icon: "🎭" },
    { id: "teaching", label: "Teaching", icon: "👩‍🏫" },
    { id: "inspiration", label: "Inspiration", icon: "💫" },
    { id: "collaboration", label: "Collaborations", icon: "🤝" },
  ];

  const timeFilters = [
    { id: "all", label: "All Times", emoji: "✨" },
    { id: "morning", label: "Morning", emoji: "🌅" },
    { id: "golden", label: "Golden Hour", emoji: "🌇" },
    { id: "night", label: "Night", emoji: "🌙" },
  ];

  const filteredMoments = moments.filter(moment => {
    const categoryMatch = activeCategory === "all" || moment.category === activeCategory;
    const timeMatch = activeTimeFilter === "all" || moment.timeOfDay === activeTimeFilter;
    return categoryMatch && timeMatch;
  });

  const handleVideoClick = (momentId: string) => {
    const video = videoRefs.current[momentId];
    if (!video) return;

    if (playingVideo === momentId) {
      video.pause();
      setPlayingVideo(null);
    } else {
      Object.values(videoRefs.current).forEach(v => v?.pause());
      video.play();
      setPlayingVideo(momentId);
    }
  };

  // Handle scroll snapping for TikTok-style view
  useEffect(() => {
    if (viewMode !== "scroll") return;

    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const scrollTop = container.scrollTop;
      const windowHeight = window.innerHeight;
      const currentIndex = Math.round(scrollTop / windowHeight);
      
      if (currentIndex !== currentMomentIndex && currentIndex < filteredMoments.length) {
        setCurrentMomentIndex(currentIndex);
        
        // Auto-play current video
        const currentMoment = filteredMoments[currentIndex];
        if (currentMoment) {
          Object.values(videoRefs.current).forEach(v => v?.pause());
          const video = videoRefs.current[currentMoment.id];
          if (video) {
            video.play();
            setPlayingVideo(currentMoment.id);
          }
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [viewMode, currentMomentIndex, filteredMoments]);

  return (
    <>
      <Head>
        <title>Musical Moments | SlunShine - Alexandrina Kushinchanova</title>
        <meta 
          name="description" 
          content="Intimate glimpses into the world of sound and emotion. Experience Alexandrina's musical journey through practice, performance, and inspiration." 
        />
        <meta 
          name="keywords" 
          content="musical moments, harp videos, practice sessions, musical inspiration, harpist journey" 
        />
      </Head>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Header */}
        <div className="pt-20 pb-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <a
                  href="/"
                  className={cn(
                    "p-2 rounded-full transition-all duration-300 hover:scale-110",
                    theme === "night" ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"
                  )}
                >
                  <ArrowLeft className="w-5 h-5" />
                </a>
                <div>
                  <h1 className="font-cormorant text-4xl font-light">
                    Musical Moments
                  </h1>
                  <p className="text-foreground/60">
                    {filteredMoments.length} moments • {viewMode === "scroll" ? "Scroll View" : "Grid View"}
                  </p>
                </div>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={cn(
                    "p-2 rounded-full transition-all duration-300",
                    theme === "night" ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"
                  )}
                >
                  <Filter className="w-5 h-5" />
                </button>
                
                <div className={cn(
                  "flex p-1 rounded-full",
                  theme === "night" ? "bg-white/10" : "bg-black/10"
                )}>
                  <button
                    onClick={() => setViewMode("scroll")}
                    className={cn(
                      "p-2 rounded-full transition-all duration-300",
                      viewMode === "scroll"
                        ? theme === "night" ? "bg-lavaGlow text-white" : "bg-coral text-white"
                        : "hover:bg-white/10"
                    )}
                  >
                    <Rows3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("grid")}
                    className={cn(
                      "p-2 rounded-full transition-all duration-300",
                      viewMode === "grid"
                        ? theme === "night" ? "bg-lavaGlow text-white" : "bg-coral text-white"
                        : "hover:bg-white/10"
                    )}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className={cn(
                    "mb-8 p-6 rounded-2xl backdrop-blur-xl border overflow-hidden",
                    theme === "night" ? "bg-white/5 border-white/10" : "bg-white/90 border-white shadow-xl"
                  )}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Categories */}
                    <div>
                      <h3 className="font-playfair text-lg mb-4">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id as any)}
                            className={cn(
                              "flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all",
                              activeCategory === category.id
                                ? theme === "night" ? "bg-lavaGlow text-white" : "bg-coral text-white"
                                : theme === "night" ? "bg-white/10 hover:bg-white/20" : "bg-black/5 hover:bg-black/10"
                            )}
                          >
                            <span>{category.icon}</span>
                            {category.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Filters */}
                    <div>
                      <h3 className="font-playfair text-lg mb-4">Time of Day</h3>
                      <div className="flex flex-wrap gap-2">
                        {timeFilters.map((filter) => (
                          <button
                            key={filter.id}
                            onClick={() => setActiveTimeFilter(filter.id as TimeFilter)}
                            className={cn(
                              "flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all",
                              activeTimeFilter === filter.id
                                ? theme === "night" ? "bg-lilacHalo text-white" : "bg-aquaMist text-midnightNavy"
                                : theme === "night" ? "bg-white/10 hover:bg-white/20" : "bg-black/5 hover:bg-black/10"
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

        {/* Content */}
        {viewMode === "scroll" ? (
          // TikTok-style Scroll View
          <div 
            ref={scrollContainerRef}
            className="h-[calc(100vh-200px)] overflow-y-auto snap-y snap-mandatory scrollbar-hide moments-scroll"
          >
            {filteredMoments.map((moment, index) => (
              <div
                key={moment.id}
                className="h-screen snap-start relative flex items-center justify-center px-4"
              >
                <div className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-3xl overflow-hidden">
                  {/* Background Image/Video */}
                  <div className="absolute inset-0">
                    <img
                      src={moment.thumbnail}
                      alt={moment.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Gradient accent */}
                    <div className={cn(
                      "absolute inset-0 opacity-20",
                      `bg-gradient-to-br ${moment.color}`
                    )} />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    {/* Top Info */}
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-2">
                        <span className="px-3 py-1 rounded-full text-xs bg-black/40 text-white backdrop-blur-sm w-fit capitalize">
                          {moment.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs bg-black/40 text-white backdrop-blur-sm w-fit">
                          {moment.duration}
                        </span>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <button className="p-3 rounded-full bg-black/40 backdrop-blur-sm hover:scale-110 transition-transform">
                          <Heart className="w-5 h-5 text-white" />
                        </button>
                        <button className="p-3 rounded-full bg-black/40 backdrop-blur-sm hover:scale-110 transition-transform">
                          <Share2 className="w-5 h-5 text-white" />
                        </button>
                        <button className="p-3 rounded-full bg-black/40 backdrop-blur-sm hover:scale-110 transition-transform">
                          <Download className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>

                    {/* Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => handleVideoClick(moment.id)}
                        className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center hover:scale-110 transition-all"
                      >
                        {playingVideo === moment.id ? (
                          <Pause className="w-8 h-8 text-white" />
                        ) : (
                          <Play className="w-8 h-8 ml-1 text-white" />
                        )}
                      </button>
                    </div>

                    {/* Bottom Content */}
                    <div className="space-y-3">
                      <h3 className="text-white text-xl font-playfair font-medium">
                        {moment.title}
                      </h3>
                      <p className="text-white/90 text-sm italic leading-relaxed">
                        "{moment.caption}"
                      </p>
                      
                      {/* Metadata */}
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

                  {/* Hidden video */}
                  <video
                    ref={(el) => {
                      videoRefs.current[moment.id] = el;
                    }}
                    data-moment-id={moment.id}
                    className="hidden"
                    src={moment.videoUrl}
                    loop
                    muted
                    playsInline
                  />
                </div>

                {/* Scroll indicator */}
                {index < filteredMoments.length - 1 && (
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          // Grid View
          <div className="px-4 pb-20">
            <div className="container mx-auto max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMoments.map((moment, index) => (
                  <motion.div
                    key={moment.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={cn(
                      "group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer",
                      "hover:scale-[1.02] transition-all duration-300",
                      theme === "night" ? "bg-white/5" : "bg-white shadow-lg"
                    )}
                    onClick={() => handleVideoClick(moment.id)}
                  >
                    <img
                      src={moment.thumbnail}
                      alt={moment.title}
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-0.5" />
                      </div>
                    </div>
                    
                    {/* Info */}
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

                    <video
                      ref={(el) => {
                        videoRefs.current[moment.id] = el;
                      }}
                      className="hidden"
                      src={moment.videoUrl}
                      loop
                      muted
                      playsInline
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}