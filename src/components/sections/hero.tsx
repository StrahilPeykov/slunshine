"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Play, ChevronDown } from "lucide-react";

export function Hero() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with strong overlay for readability */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/hero-church-mobile.webp" />
          <img 
            src="/images/hero-church.webp"
            alt="Alexandrina playing harp"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
        
        {/* Multiple gradient overlays for better text readability */}
        <div className={cn(
          "absolute inset-0",
          theme === "night" ? "bg-black/50" : "bg-black/40"
        )} />
        <div className={cn(
          "absolute inset-0",
          theme === "night" 
            ? "bg-gradient-to-b from-midnightNavy/70 via-midnightNavy/80 to-midnightNavy/95" 
            : "bg-gradient-to-b from-black/30 via-black/50 to-white/90"
        )} />
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30" />

        {/* Subtle animated sparkles for night mode */}
        {isClient && theme === "night" && (
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 rounded-full bg-white"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0
                }}
                animate={{ 
                  opacity: [0, 1, 0],
                }}
                transition={{ 
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: Math.random() * 5
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
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Artist Name with better contrast */}
          <motion.h1 
            className="font-playfair mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <span className={cn(
              "block text-[clamp(4rem,13vw,8rem)] leading-[0.85] font-light tracking-tight",
              theme === "night" 
                ? "text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.3)]"
                : "text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
            )}>
              Alexandrina
            </span>
            <span className={cn(
              "block text-[clamp(2.5rem,8vw,4.5rem)] font-extralight tracking-[0.15em] mt-2 uppercase",
              theme === "night" 
                ? "text-white/90"
                : "text-white/90"
            )}>
              Kushinchanova
            </span>
          </motion.h1>

          {/* Subtitle with decorative elements */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className={cn(
              "h-[1px] w-16 md:w-24",
              theme === "night" ? "bg-white/30" : "bg-white/30"
            )} />
            <p className={cn(
              "text-lg md:text-xl font-inter font-light tracking-[0.2em] uppercase",
              theme === "night" ? "text-white/80" : "text-white/80"
            )}>
              The Harp Lady
            </p>
            <span className={cn(
              "h-[1px] w-16 md:w-24",
              theme === "night" ? "bg-white/30" : "bg-white/30"
            )} />
          </motion.div>

          {/* New Single Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className={cn(
                  "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                  "bg-white"
                )} />
                <span className={cn(
                  "relative inline-flex rounded-full h-2 w-2",
                  "bg-white"
                )} />
              </span>
              <p className={cn(
                "text-sm font-inter tracking-wider",
                theme === "night" ? "text-white/70" : "text-white/70"
              )}>
                New Single 
                <span className={cn(
                  "font-semibold mx-2",
                  theme === "night" ? "text-lilacHalo" : "text-white"
                )}>
                  "Lubov, Lubov"
                </span>
                Coming Soon
              </p>
            </div>
          </motion.div>

          {/* Coming Soon Badge - Refined */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <div className={cn(
              "inline-flex items-center gap-3 px-6 py-3 rounded-full",
              "backdrop-blur-xl border",
              theme === "night" 
                ? "bg-black/30 border-white/20 text-white" 
                : "bg-white/60 border-white/80 text-midnightNavy"
            )}>
              <span className="relative flex h-2 w-2">
                <span className={cn(
                  "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                  theme === "night" ? "bg-lavaGlow" : "bg-coral"
                )} />
                <span className={cn(
                  "relative inline-flex rounded-full h-2 w-2",
                  theme === "night" ? "bg-lavaGlow" : "bg-coral"
                )} />
              </span>
              <span className="text-sm font-medium tracking-wide">
                New Single "Lubov, Lubov" Coming Soon
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons - Enhanced */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className={cn(
              "group relative px-10 py-4 rounded-full font-inter font-medium overflow-hidden",
              "transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]",
              theme === "night" 
                ? "text-white" 
                : "text-white"
            )}>
              {/* Gradient background */}
              <span className={cn(
                "absolute inset-0 -z-10",
                theme === "night"
                  ? "bg-gradient-to-r from-lavaGlow via-coral to-lavaGlow bg-[length:200%_100%] animate-gradient"
                  : "bg-gradient-to-r from-coral via-lavaGlow to-coral bg-[length:200%_100%] animate-gradient"
              )} />
              {/* Glass overlay on hover */}
              <span className="absolute inset-0 -z-10 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
              <span className="flex items-center gap-3 justify-center">
                <Play className="w-5 h-5" />
                Listen to My Music
              </span>
            </button>
            
            <a 
              href="#music" 
              className={cn(
                "px-10 py-4 rounded-full font-inter font-medium",
                "backdrop-blur-xl border-2 transition-all duration-300",
                "transform hover:scale-[1.02] active:scale-[0.98]",
                theme === "night" 
                  ? "bg-white/10 border-white/30 hover:bg-white/20 text-white" 
                  : "bg-white/20 border-white/40 hover:bg-white/30 text-white"
              )}
            >
              Explore My World
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Refined */}
        <motion.a
          href="#music"
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className={cn(
            "w-[30px] h-[50px] rounded-full border-2 flex justify-center pt-2",
            theme === "night" ? "border-white/40" : "border-white/40"
          )}>
            <motion.div
              className={cn(
                "w-1 h-2 rounded-full",
                theme === "night" ? "bg-white/60" : "bg-white/60"
              )}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.a>
      </div>
    </section>
  );
}
