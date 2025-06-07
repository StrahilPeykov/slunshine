"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Play, Music as MusicIcon } from "lucide-react";

export function Hero() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for church background - replace with actual image */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"
          style={{
            backgroundImage: "url('/images/hero-church.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: theme === "night" ? "brightness(0.7) saturate(1.2)" : "brightness(0.9)",
          }}
        />
        
        {/* Animated overlay effects */}
        <div className={cn(
          "absolute inset-0",
          theme === "night" 
            ? "bg-gradient-to-t from-midnightNavy via-midnightNavy/50 to-transparent" 
            : "bg-gradient-to-t from-background via-background/30 to-transparent"
        )} />

        {isClient && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className={cn(
                  "absolute w-1 h-1 rounded-full",
                  theme === "night" ? "bg-lavaGlow/30" : "bg-aquaMist/40"
                )}
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 20 
                }}
                animate={{ 
                  y: -20,
                  x: Math.random() * window.innerWidth,
                }}
                transition={{ 
                  duration: Math.random() * 20 + 10,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Artist Name */}
          <motion.h1 
            className={cn(
              "font-playfair text-6xl md:text-8xl font-bold mb-4",
              theme === "night" && "glow-text"
            )}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="gradient-text">Alexandrina</span>
            <br />
            <span className="text-4xl md:text-6xl font-light">Kushinchanova</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl font-inter font-light mb-8 text-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Harp Lady
          </motion.p>

          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <div className={cn(
              "px-4 py-2 rounded-full glass",
              "border",
              theme === "night" ? "border-lavaGlow/30" : "border-aquaMist/50"
            )}>
              <span className="text-sm font-medium flex items-center gap-2">
                <MusicIcon className="w-4 h-4" />
                New Single &quot;Lubov, Lubov&quot; Coming Soon
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className={cn(
              "px-8 py-4 rounded-full font-inter font-medium transition-all duration-300 ripple-container",
              "flex items-center gap-2 justify-center",
              theme === "night" 
                ? "bg-lavaGlow text-white hover:bg-lavaGlow/90" 
                : "bg-aquaMist text-midnightNavy hover:bg-aquaMist/90"
            )}>
              <Play className="w-5 h-5" />
              Listen to Preview
            </button>
            
            <a 
              href="#music" 
              className={cn(
                "px-8 py-4 rounded-full font-inter font-medium transition-all duration-300",
                "glass border backdrop-blur-md",
                theme === "night" 
                  ? "border-white/20 hover:bg-white/10" 
                  : "border-midnightNavy/20 hover:bg-black/5"
              )}
            >
              Explore My Music
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
