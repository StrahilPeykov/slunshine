"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Play, Pause, Music as MusicIcon, Headphones, Calendar, Instagram, Music2 } from "lucide-react";
import { useState } from "react";

export function Music() {
  const { theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState(0);

  // Placeholder tracks - replace with actual data
  const tracks = [
    {
      title: "Lubov, Lubov",
      type: "Single",
      status: "Coming Soon",
      genre: "RnB / Indie Pop",
      description: "A romantic journey through ethereal soundscapes",
      releaseDate: "2025",
    },
    {
      title: "Cosmic Waters",
      type: "EP",
      status: "In Production",
      genre: "Neo-Classical / Electronic",
      description: "Harp meets modern production",
      releaseDate: "TBA",
    },
  ];

  const performances = [
    {
      artist: "Mila Robert",
      role: "Piano & Backing Vocals",
      years: "2020-Present",
      description: "Touring musician and studio collaborator",
    },
  ];

  return (
    <section id="music" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className={cn(
          "absolute top-1/2 left-0 w-96 h-96 rounded-full blur-3xl opacity-20",
          theme === "night" ? "bg-lavaGlow" : "bg-aquaMist"
        )} />
        <div className={cn(
          "absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20",
          theme === "night" ? "bg-lilacHalo" : "bg-coral"
        )} />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
            <span className={cn(theme === "night" && "glow-text")}>
              My Music Journey
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            From classical harp to modern production, exploring the boundaries of sound
          </p>
        </motion.div>

        {/* Original Music */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-2xl md:text-3xl font-bold mb-8 gradient-text"
          >
            Original Music
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  "group relative p-8 rounded-2xl transition-all duration-300",
                  "glass border backdrop-blur-md hover:scale-[1.02]",
                  theme === "night" 
                    ? "border-white/10 hover:border-lavaGlow/30" 
                    : "border-black/10 hover:border-aquaMist/50",
                  activeTrack === index && "ring-2 ring-primary/50"
                )}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    track.status === "Coming Soon" 
                      ? theme === "night" ? "bg-lavaGlow/20 text-lavaGlow" : "bg-aquaMist/20 text-aquaMist"
                      : "bg-accent/20 text-accent"
                  )}>
                    {track.status}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  {/* Play Button */}
                  <button
                    onClick={() => {
                      setActiveTrack(index);
                      setIsPlaying(!isPlaying);
                    }}
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300",
                      "group-hover:scale-110",
                      theme === "night" 
                        ? "bg-gradient-to-br from-lavaGlow to-coral" 
                        : "bg-gradient-to-br from-aquaMist to-primary"
                    )}
                  >
                    {isPlaying && activeTrack === index ? (
                      <Pause className="w-6 h-6 text-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white ml-1" />
                    )}
                  </button>

                  {/* Track Info */}
                  <div className="flex-1">
                    <h4 className="font-playfair text-2xl font-bold mb-1">
                      {track.title}
                    </h4>
                    <p className="text-sm text-foreground/60 mb-2">
                      {track.type} • {track.genre}
                    </p>
                    <p className="text-foreground/80 mb-4">
                      {track.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-foreground/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {track.releaseDate}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Waveform visualization placeholder */}
                <div className="mt-6 h-16 relative overflow-hidden rounded-lg bg-black/5">
                  <div className="absolute inset-0 flex items-center justify-center gap-1">
                    {[...Array(30)].map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "w-1 bg-gradient-to-t rounded-full transition-all duration-300",
                          theme === "night" 
                            ? "from-lavaGlow/50 to-lavaGlow" 
                            : "from-aquaMist/50 to-aquaMist",
                          isPlaying && activeTrack === index ? "animate-pulse" : ""
                        )}
                        style={{
                          height: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.05}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Live Performances */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass border backdrop-blur-md rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-8 gradient-text">
            Live Performances & Collaborations
          </h3>

          {performances.map((performance, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="font-playfair text-xl font-bold">
                  {performance.artist}
                </h4>
                <span className="text-sm text-foreground/60">
                  {performance.years}
                </span>
              </div>
              <p className="text-foreground/80 mb-1">{performance.role}</p>
              <p className="text-sm text-foreground/60">{performance.description}</p>
            </div>
          ))}

          {/* Call to Action */}
          <div className="mt-8 pt-8 border-t border-foreground/10">
            <p className="text-center text-foreground/70 mb-4">
              Follow my musical journey
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://instagram.com/slun_shine"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-3 rounded-full transition-all duration-300",
                  "hover:scale-110",
                  theme === "night" 
                    ? "bg-white/10 hover:bg-white/20" 
                    : "bg-black/5 hover:bg-black/10"
                )}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://open.spotify.com/user/akartu113?si=e0ed233e08044e48"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-3 rounded-full transition-all duration-300",
                  "hover:scale-110",
                  theme === "night" 
                    ? "bg-white/10 hover:bg-white/20" 
                    : "bg-black/5 hover:bg-black/10"
                )}
              >
                <Music2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
