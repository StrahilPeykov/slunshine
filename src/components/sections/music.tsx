"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import {
  musicReleases,
  musicSectionCopy,
  musicVideos,
} from "@/content/site-content";
import { cn } from "@/lib/utils";
import { CurrentWork } from "./music/current-work";
import { Releases } from "./music/releases";
import { VideoGallery } from "./music/video-gallery";

export function Music() {
  const { theme } = useTheme();

  return (
    <section id="music" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className={cn(
            "absolute top-1/4 -left-32 w-64 h-64 rounded-full blur-[120px]",
            theme === "night" ? "bg-lavaGlow/20" : "bg-coral/20",
          )}
        />
        <div
          className={cn(
            "absolute bottom-1/4 -right-32 w-64 h-64 rounded-full blur-[120px]",
            theme === "night" ? "bg-lilacHalo/20" : "bg-aquaMist/20",
          )}
        />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-cormorant text-[clamp(2.5rem,5vw,3.5rem)] font-light mb-4">
            <span className={theme === "night" ? "text-white" : "text-midnightNavy"}>
              {musicSectionCopy.title}
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {musicSectionCopy.description}
          </p>
        </motion.div>

        <Releases releases={musicReleases} />
        <VideoGallery videos={musicVideos} />
        <CurrentWork />
      </div>
    </section>
  );
}
