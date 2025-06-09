"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

export function Hero() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/hero-church-mobile.webp" />
            <img 
              src="/images/hero-church.webp"
              alt="Alexandrina playing harp"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
          </picture>
          
          {/* Gradient overlays */}
          <div className={cn(
            "absolute inset-0",
            theme === "night" ? "bg-black/50" : "bg-gradient-to-br from-coral/10 to-transparent"
          )} />
          <div className={cn(
            "absolute inset-0",
            theme === "night" 
              ? "bg-gradient-to-b from-midnightNavy/70 via-midnightNavy/80 to-midnightNavy/95" 
              : "bg-gradient-to-b from-transparent via-white/20 to-white/60"
          )} />
          
          {/* Animated floating orbs */}
          {isClient && (
            <>
              <motion.div
                className={cn(
                  "absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[200px] opacity-20",
                  theme === "night" ? "bg-lilacHalo" : "bg-coral"
                )}
                animate={{
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className={cn(
                  "absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[180px] opacity-20",
                  theme === "night" ? "bg-lavaGlow" : "bg-aquaMist"
                )}
                animate={{
                  x: [0, -40, 0],
                  y: [0, 40, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </>
          )}

          {/* Sparkles for night mode */}
          {isClient && theme === "night" && (
            <div className="absolute inset-0">
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-0.5 rounded-full bg-white"
                  initial={{ 
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                    opacity: 0
                  }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{ 
                    duration: Math.random() * 4 + 3,
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
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center w-full max-w-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Artist Name */}
          <motion.h1 
            className="font-cormorant mb-8 mt-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <span className={cn(
              "block text-[clamp(3.5rem,12vw,8rem)] leading-[0.85] font-light tracking-tight",
              "relative inline-block",
              theme === "night" 
                ? "text-transparent bg-clip-text bg-gradient-to-br from-white via-lilacHalo/90 to-white"
                : "text-white drop-shadow-[0_2px_10px_rgba(14,26,42,0.9)]"
            )}>
              {theme === "night" && (
                <motion.span
                  className="absolute inset-0 text-[clamp(3.5rem,12vw,8rem)] leading-[0.85] font-light tracking-tight blur-2xl opacity-40"
                  style={{
                    background: "linear-gradient(to bottom right, white, #C9A8FF, white)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Alexandrina
                </motion.span>
              )}
              Alexandrina
            </span>
            <motion.span 
              className={cn(
                "block text-[clamp(2rem,7vw,4.5rem)] font-extralight small-caps mt-2 uppercase",
                theme === "night" 
                  ? "text-white/90"
                  : "text-white drop-shadow-[0_2px_8px_rgba(14,26,42,0.8)]"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Kushinchanova
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div 
            className="flex items-center justify-center gap-6 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className={cn(
              "h-[1px] w-20 md:w-32",
              theme === "night" 
                ? "bg-gradient-to-r from-transparent to-white/40" 
                : "bg-gradient-to-r from-transparent to-white/70"
            )} />
            <p className={cn(
              "text-lg md:text-xl font-inter font-light tracking-[0.2em] uppercase",
              theme === "night" ? "text-white/80" : "text-white drop-shadow-[0_1px_4px_rgba(14,26,42,0.6)]"
            )}>
              The Harp Lady
            </p>
            <span className={cn(
              "h-[1px] w-20 md:w-32",
              theme === "night" 
                ? "bg-gradient-to-l from-transparent to-white/40" 
                : "bg-gradient-to-l from-transparent to-white/70"
            )} />
          </motion.div>

          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-10"
          >
            <div className={cn(
              "group inline-flex items-center gap-3 px-6 py-3 rounded-full",
              "backdrop-blur-xl border transition-all duration-300",
              theme === "night" 
                ? "bg-black/30 border-white/20 text-white hover:bg-black/40" 
                : "bg-white/80 backdrop-blur-sm border-white text-midnightNavy shadow-lg hover:shadow-xl"
            )}>
              <span className="relative flex h-2 w-2">
                <span className={cn(
                  "absolute inline-flex h-full w-full rounded-full opacity-0 group-hover:opacity-75",
                  "group-hover:animate-ping transition-opacity duration-300",
                  theme === "night" ? "bg-lavaGlow" : "bg-coral"
                )} />
                <span className={cn(
                  "relative inline-flex rounded-full h-2 w-2",
                  theme === "night" ? "bg-lavaGlow" : "bg-coral"
                )} />
              </span>
              <span className="text-sm font-medium tracking-wide">
                New Single &ldquo;Lubov, Lubov&rdquo; Coming Soon
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href="#music"
              className={cn(
                "group relative px-10 py-4 rounded-full font-inter font-medium overflow-hidden",
                "transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98]",
                "text-white shadow-xl"
              )}
            >
              {/* Static gradient background */}
              <span className={cn(
                "absolute inset-0 -z-10 transition-all duration-500",
                theme === "night"
                  ? "bg-gradient-to-r from-lavaGlow to-coral group-hover:from-coral group-hover:to-lavaGlow"
                  : "bg-gradient-to-r from-coral to-lavaGlow group-hover:from-lavaGlow group-hover:to-coral"
              )} />
              {/* Subtle shimmer on hover */}
              <span className={cn(
                "absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                "bg-gradient-to-r from-transparent via-white/20 to-transparent",
                "translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"
              )} />
              <span className="flex items-center gap-3 justify-center">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Listen to My Music
              </span>
            </a>
            
            <a 
              href="#about" 
              className={cn(
                "px-10 py-4 rounded-full font-inter font-medium",
                "backdrop-blur-xl border-2 transition-all duration-300",
                "transform hover:scale-[1.02] active:scale-[0.98] shadow-xl",
                theme === "night" 
                  ? "bg-white/10 border-white/30 hover:bg-white/20 text-white" 
                  : "bg-white/80 border-white hover:bg-white/90 text-midnightNavy"
              )}
            >
              Explore My World
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Scroll Indicator */}
      <a
        href="#music"
        className={cn(
          "absolute left-1/2 -translate-x-1/2 bottom-8 z-20",
          "block w-[30px] h-[50px] rounded-full border-2",
          "flex items-center justify-center cursor-pointer group",
          "transition-all duration-300 hover:scale-110 active:scale-95",
          "animate-bounce pointer-events-auto",
          theme === "night" 
            ? "border-white/40 hover:border-white/60" 
            : "border-white/80 bg-white/20 backdrop-blur-sm hover:bg-white/30"
        )}
        style={{ pointerEvents: 'auto' }}
      >
        {/* Simple scroll dot */}
        <div className={cn(
          "w-1 h-3 rounded-full transition-all duration-300",
          "group-hover:h-4 pointer-events-none",
          theme === "night" ? "bg-white/70 group-hover:bg-white" : "bg-white"
        )} />
      </a>
    </section>
  );
}
