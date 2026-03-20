"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/components/providers/theme-provider";
import type { VideoShowcaseItem } from "@/content/site-content";
import { cn } from "@/lib/utils";

interface VideoGalleryProps {
  videos: ReadonlyArray<VideoShowcaseItem>;
}

export function VideoGallery({ videos }: VideoGalleryProps) {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <h3
        className={cn(
          "font-playfair text-2xl mb-8",
          theme === "night" ? "text-white" : "text-midnightNavy",
        )}
      >
        Watch & Listen
      </h3>

      <div className="md:hidden">
        <div className="overflow-x-auto scrollbar-hide scroll-smooth-x -mx-4 px-4">
          <div className="flex gap-4 pb-4" style={{ width: "fit-content", scrollSnapType: "x mandatory" }}>
            {videos.map((video, index) => (
              <motion.button
                key={`mobile-${video.id}`}
                type="button"
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: index * 0.1 }}
                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer flex-shrink-0 w-80 text-left transform-gpu will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo"
                onClick={() => setActiveVideo(video.id === activeVideo ? null : video.id)}
                style={{ scrollSnapAlign: "start" }}
                aria-label={activeVideo === video.id ? `Pause ${video.title}` : `Play ${video.title}`}
              >
                <VideoCardBody active={activeVideo === video.id} video={video} theme={theme} />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <motion.button
            key={`desktop-${video.id}`}
            type="button"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: index * 0.1 }}
            className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer text-left transform-gpu will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo"
            onClick={() => setActiveVideo(video.id === activeVideo ? null : video.id)}
            aria-label={activeVideo === video.id ? `Pause ${video.title}` : `Play ${video.title}`}
          >
            <VideoCardBody active={activeVideo === video.id} video={video} theme={theme} />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

function VideoCardBody({
  active,
  video,
  theme,
}: {
  active: boolean;
  video: VideoShowcaseItem;
  theme: "day" | "night";
}) {
  if (active) {
    return (
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
        title={`${video.title} by ${video.composer}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  return (
    <>
      <img
        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
        alt={video.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center",
            "backdrop-blur-sm border transition-all duration-300",
            "group-hover:scale-110",
            theme === "night" ? "bg-white/10 border-white/30" : "bg-white/80 border-white",
          )}
        >
          <Play className={cn("w-6 h-6 ml-1", theme === "night" ? "text-white" : "text-midnightNavy")} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h4 className="text-white font-medium mb-1">{video.title}</h4>
        <p className="text-white/70 text-sm">
          {video.composer} • {video.venue}
        </p>
      </div>
    </>
  );
}
