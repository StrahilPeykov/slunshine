"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Play, Calendar, Instagram, Headphones, Sparkles } from "lucide-react";
import { useState } from "react";

export function Music() {
  const { theme } = useTheme();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Upcoming releases
  const releases = [
    {
      title: "Lubov, Lubov",
      type: "Single",
      status: "Coming Soon",
      genre: "R&B / Indie Pop",
      description: "A journey through love's ethereal landscapes",
      releaseDate: "Spring 2025",
    },
    {
      title: "Untitled EP",
      type: "EP",
      status: "In Production",
      genre: "Alternative",
      description: "Where classical meets contemporary",
      releaseDate: "2025",
    },
  ];

  // Performance videos
  const videos = [
    {
      id: "JfsKB1BtVeg",
      title: "La Source",
      composer: "Albert Zabel",
      venue: "Sofia, 2023",
    },
    {
      id: "taDWIhIGh0Q",
      title: "Concert Etude",
      composer: "F. Godefroid",
      venue: "Paris, 2019",
    },
    {
      id: "82YMLy-Nw68",
      title: "Introduction and Allegro",
      composer: "Maurice Ravel",
      venue: "Sofia, 2024",
    },
  ];

  return (
    <section id="music" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className={cn(
          "absolute top-1/4 -left-32 w-64 h-64 rounded-full blur-[120px]",
          theme === "night" ? "bg-lavaGlow/20" : "bg-coral/20"
        )} />
        <div className={cn(
          "absolute bottom-1/4 -right-32 w-64 h-64 rounded-full blur-[120px]",
          theme === "night" ? "bg-lilacHalo/20" : "bg-aquaMist/20"
        )} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-cormorant text-[clamp(2.5rem,5vw,3.5rem)] font-light mb-4">
            <span className={cn(
              theme === "night" 
                ? "text-white"
                : "text-midnightNavy"
            )}>
              Sound & Vision
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            New music blooming from classical roots
          </p>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className={cn(
              "w-5 h-5",
              theme === "night" ? "text-lavaGlow" : "text-coral"
            )} />
            <h3 className={cn(
              "font-playfair text-2xl",
              theme === "night" ? "text-white" : "text-midnightNavy"
            )}>
              Coming Soon
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {releases.map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl p-8",
                  "backdrop-blur-sm border transition-all duration-500",
                  "hover:scale-[1.01]",
                  theme === "night" 
                    ? "bg-white/5 border-white/10 hover:bg-white/10" 
                    : "bg-white/80 border-white shadow-xl hover:shadow-2xl"
                )}
              >
                {/* Animated gradient background */}
                <div className={cn(
                  "absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500",
                  "bg-gradient-to-br from-lilacHalo via-coral to-lavaGlow",
                  "animate-gradient bg-[length:200%_200%]"
                )} />

                <div className="relative">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-playfair text-2xl mb-1">
                        {release.title}
                      </h4>
                      <p className="text-sm text-foreground/60">
                        {release.type} • {release.genre}
                      </p>
                    </div>
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm",
                      theme === "night" 
                        ? "bg-lavaGlow/20 text-lavaGlow border border-lavaGlow/30" 
                        : "bg-coral/20 text-coral border border-coral/30"
                    )}>
                      {release.status}
                    </span>
                  </div>

                  <p className="text-foreground/70 mb-6 italic">
                    &ldquo;{release.description}&rdquo;
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-foreground/50">
                      <Calendar className="w-4 h-4" />
                      {release.releaseDate}
                    </span>
                    <button className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full text-sm",
                      "backdrop-blur-sm border transition-all duration-300",
                      "hover:scale-105 active:scale-95",
                      theme === "night"
                        ? "bg-white/5 border-white/20 hover:bg-white/10"
                        : "bg-black/5 border-black/20 hover:bg-black/10"
                    )}>
                      <Headphones className="w-4 h-4" />
                      Notify Me
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Videos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className={cn(
            "font-playfair text-2xl mb-8",
            theme === "night" ? "text-white" : "text-midnightNavy"
          )}>
            Watch & Listen
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setActiveVideo(video.id === activeVideo ? null : video.id)}
              >
                {activeVideo === video.id ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={cn(
                        "w-14 h-14 rounded-full flex items-center justify-center",
                        "backdrop-blur-sm border transition-all duration-300",
                        "group-hover:scale-110",
                        theme === "night"
                          ? "bg-white/10 border-white/30"
                          : "bg-white/80 border-white"
                      )}>
                        <Play className={cn(
                          "w-6 h-6 ml-1",
                          theme === "night" ? "text-white" : "text-midnightNavy"
                        )} />
                      </div>
                    </div>
                    
                    {/* Video info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-medium mb-1">
                        {video.title}
                      </h4>
                      <p className="text-white/70 text-sm">
                        {video.composer} • {video.venue}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            "relative rounded-3xl p-8 md:p-12 overflow-hidden",
            "backdrop-blur-md border",
            theme === "night" 
              ? "bg-gradient-to-br from-white/5 to-white/10 border-white/20" 
              : "bg-gradient-to-br from-white/90 to-white/70 border-white shadow-2xl"
          )}
        >
          {/* Decorative element */}
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-lilacHalo/10 to-coral/10 blur-3xl" />
          
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-playfair text-2xl mb-4">
                On Stage & In Studio
              </h3>
              <p className="text-foreground/70 mb-4">
                Currently performing with Bulgarian indie artist Mila Robert as pianist 
                and backing vocalist. Five years of touring, recording, and creating magic together.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/slun_shine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm",
                    "backdrop-blur-sm border transition-all duration-300",
                    "hover:scale-105 active:scale-95",
                    theme === "night"
                      ? "bg-white/5 border-white/20 hover:bg-white/10"
                      : "bg-black/5 border-black/20 hover:bg-black/10"
                  )}
                >
                  <Instagram className="w-4 h-4" />
                  Follow
                </a>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className={cn(
                "relative w-48 h-48 rounded-2xl overflow-hidden",
                "ring-4",
                theme === "night" ? "ring-white/10" : "ring-black/10"
              )}>
                <div className="absolute inset-0 bg-gradient-to-br from-lilacHalo/20 to-coral/20" />
                <img
                  src="/images/mila-concert.webp"
                  alt="Performing with Mila Robert"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
