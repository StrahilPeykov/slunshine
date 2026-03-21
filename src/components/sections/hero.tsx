"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/providers/theme-provider";
import { heroCopy } from "@/content/site-content";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

export function Hero() {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const updateDevice = () => setIsMobile(media.matches);
    updateDevice();

    media.addEventListener("change", updateDevice);
    return () => media.removeEventListener("change", updateDevice);
  }, []);

  const shouldReduceHeroEffects = prefersReducedMotion || isMobile;

  const scrollToNextSection = () => {
    const next = sectionRef.current?.nextElementSibling;
    if (next instanceof HTMLElement) {
      next.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src={isMobile ? "/images/hero-church-mobile.webp" : "/images/hero-church.webp"}
            alt="Alexandrina playing harp"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
 
          {/* Animated floating orbs */}
          <motion.div
            className={cn(
              "absolute top-1/4 left-1/4 rounded-full opacity-20",
              isMobile ? "w-60 h-60 blur-[110px]" : "w-96 h-96 blur-[200px]",
              theme === "night" ? "bg-lilacHalo" : "bg-coral"
            )}
            animate={{
              x: shouldReduceHeroEffects ? 0 : [0, 50, 0],
              y: shouldReduceHeroEffects ? 0 : [0, -30, 0],
            }}
            transition={{
              duration: shouldReduceHeroEffects ? 0 : 10,
              repeat: shouldReduceHeroEffects ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className={cn(
              "absolute bottom-1/4 right-1/4 rounded-full opacity-20",
              isMobile ? "w-52 h-52 blur-[90px]" : "w-80 h-80 blur-[180px]",
              theme === "night" ? "bg-lavaGlow" : "bg-aquaMist"
            )}
            animate={{
              x: shouldReduceHeroEffects ? 0 : [0, -40, 0],
              y: shouldReduceHeroEffects ? 0 : [0, 40, 0],
            }}
            transition={{
              duration: shouldReduceHeroEffects ? 0 : 12,
              repeat: shouldReduceHeroEffects ? 0 : Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Sparkles for both themes */}
          {!shouldReduceHeroEffects && (
            <div className="absolute inset-0">
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-0.5 rounded-full bg-white"
                  style={{
                    left: `${(i * 17) % 100}%`,
                    top: `${(i * 29) % 100}%`,
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + (i % 5),
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: (i % 10) * 0.5,
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
                  {heroCopy.firstName}
                </motion.span>
              )}
              {heroCopy.firstName}
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
              {heroCopy.lastName}
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
              {heroCopy.role}
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
                : "bg-white/88 border-white/95 text-midnightNavy shadow-[0_10px_35px_rgba(14,26,42,0.35)] hover:bg-white"
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
                {heroCopy.announcement}
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
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
                "shadow-xl",
                theme === "night" ? "text-white" : "text-midnightNavy"
              )}
            >
              {/* Static gradient background */}
              <span className={cn(
                "absolute inset-0 -z-10 transition-all duration-500",
                theme === "night"
                  ? "bg-gradient-to-r from-lavaGlow to-coral group-hover:from-coral group-hover:to-lavaGlow"
                  : "bg-gradient-to-r from-white/95 via-white/90 to-white/85 group-hover:from-white group-hover:via-babyPink/35 group-hover:to-white"
              )} />
              {/* Subtle shimmer on hover */}
              <span className={cn(
                "absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                "bg-gradient-to-r from-transparent via-white/20 to-transparent",
                "translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"
              )} />
              <span className="flex items-center gap-3 justify-center">
                <Play className={cn(
                  "w-5 h-5 group-hover:scale-110 transition-transform duration-300",
                  theme === "night" ? "text-white" : "text-midnightNavy"
                )} />
                {heroCopy.primaryCta}
              </span>
            </a>
            
            <a 
              href="#about" 
              className={cn(
                "px-10 py-4 rounded-full font-inter font-medium",
                "backdrop-blur-xl border-2 transition-all duration-300",
                "transform hover:scale-[1.02] active:scale-[0.98] shadow-xl",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
                theme === "night" 
                  ? "bg-white/10 border-white/30 hover:bg-white/20 text-white" 
                  : "bg-white/72 border-white/90 hover:bg-white/92 text-midnightNavy shadow-[0_10px_30px_rgba(14,26,42,0.28)]"
              )}
            >
              {heroCopy.secondaryCta}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Scroll Indicator — scrolls to whatever section follows the hero in the page */}
      <button
        type="button"
        onClick={scrollToNextSection}
        className={cn(
          "absolute left-1/2 -translate-x-1/2 bottom-8 z-20",
          "block w-[30px] h-[50px] rounded-full border-2",
          "flex items-center justify-center cursor-pointer group",
          "transition-all duration-300 hover:scale-110 active:scale-95",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
          "motion-safe:animate-bounce pointer-events-auto",
          theme === "night" 
            ? "border-white/40 hover:border-white/60" 
            : "border-white/80 bg-white/20 backdrop-blur-sm hover:bg-white/30"
        )}
        style={{ pointerEvents: "auto" }}
        aria-label="Scroll to next section"
      >
        {/* Simple scroll dot */}
        <div className={cn(
          "w-1 h-3 rounded-full transition-all duration-300",
          "group-hover:h-4 pointer-events-none",
          theme === "night" ? "bg-white/70 group-hover:bg-white" : "bg-white"
        )} />
      </button>
    </section>
  );
}
