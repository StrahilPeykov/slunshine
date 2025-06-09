"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

export function Contact() {
  const { theme } = useTheme();

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          "w-[600px] h-[600px] rounded-full blur-[200px]",
          theme === "night" 
            ? "bg-gradient-to-br from-lilacHalo/30 via-transparent to-lavaGlow/30" 
            : "bg-gradient-to-br from-coral/20 via-transparent to-aquaMist/20"
        )} />
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
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
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-xl mx-auto">
            For collaborations, performances, lessons, or just to share your favorite song
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Instagram Card */}
            <a
              href="https://instagram.com/slun_shine"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative p-8 rounded-3xl text-center overflow-hidden",
                "backdrop-blur-xl border-2 transition-all duration-500",
                "hover:scale-[1.03] active:scale-[0.98]",
                "hover:shadow-2xl",
                theme === "night" 
                  ? "bg-gradient-to-br from-white/5 via-white/10 to-white/5 border-white/20 hover:border-white/30" 
                  : "bg-gradient-to-br from-white/90 via-white to-white/80 border-white/50 shadow-xl hover:shadow-3xl"
              )}
            >
              {/* Flowing background animation */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700",
                "bg-gradient-to-br from-purple-400/10 via-pink-500/10 to-orange-400/10"
              )} />
              
              {/* Animated border glow */}
              <div className={cn(
                "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500",
                "bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 p-[1px]",
                "before:content-[''] before:absolute before:inset-[1px] before:rounded-3xl",
                theme === "night" ? "before:bg-midnightNavy" : "before:bg-white"
              )} />
              
              <div className="relative z-10">
                {/* Custom Instagram Icon */}
                <div className={cn(
                  "w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center relative overflow-hidden",
                  "bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400"
                )}>
                  <svg
                    className="w-12 h-12 text-white relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                
                <h3 className={cn(
                  "font-playfair text-2xl mb-2",
                  theme === "night" ? "text-white" : "text-midnightNavy"
                )}>
                  Instagram
                </h3>
                
                <p className={cn(
                  "text-lg mb-4",
                  theme === "night" ? "text-white/70" : "text-midnightNavy/70"
                )}>
                  @slun_shine
                </p>
                
                <div className={cn(
                  "inline-flex items-center gap-2 text-sm font-medium",
                  "px-4 py-2 rounded-full border",
                  "group-hover:border-pink-400/50 transition-colors duration-300",
                  theme === "night" 
                    ? "text-lilacHalo border-white/20" 
                    : "text-coral border-black/20"
                )}>
                  <span>Follow for updates</span>
                  <motion.span 
                    className="group-hover:translate-x-1 transition-transform duration-300"
                    whileHover={{ x: 4 }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:okami4aj@gmail.com"
              className={cn(
                "group relative p-8 rounded-3xl text-center overflow-hidden",
                "backdrop-blur-xl border-2 transition-all duration-500",
                "hover:scale-[1.03] active:scale-[0.98]",
                "hover:shadow-2xl",
                theme === "night" 
                  ? "bg-gradient-to-br from-white/5 via-white/10 to-white/5 border-white/20 hover:border-white/30" 
                  : "bg-gradient-to-br from-white/90 via-white to-white/80 border-white/50 shadow-xl hover:shadow-3xl"
              )}
            >
              {/* Flowing background animation */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700",
                theme === "night"
                  ? "bg-gradient-to-br from-lavaGlow/10 via-coral/10 to-aquaMist/10"
                  : "bg-gradient-to-br from-coral/10 via-lilacHalo/10 to-aquaMist/10"
              )} />
              
              {/* Animated border glow */}
              <div className={cn(
                "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500",
                theme === "night"
                  ? "bg-gradient-to-r from-lavaGlow via-coral to-aquaMist p-[1px]"
                  : "bg-gradient-to-r from-coral via-lilacHalo to-aquaMist p-[1px]",
                "before:content-[''] before:absolute before:inset-[1px] before:rounded-3xl",
                theme === "night" ? "before:bg-midnightNavy" : "before:bg-white"
              )} />
              
              <div className="relative z-10">
                {/* Custom Email Icon */}
                <div className={cn(
                  "w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center relative overflow-hidden",
                  theme === "night"
                    ? "bg-gradient-to-br from-lavaGlow to-coral"
                    : "bg-gradient-to-br from-coral to-aquaMist"
                )}>
                  <svg
                    className="w-12 h-12 text-white relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                
                <h3 className={cn(
                  "font-playfair text-2xl mb-2",
                  theme === "night" ? "text-white" : "text-midnightNavy"
                )}>
                  Email
                </h3>
                
                <p className={cn(
                  "text-lg mb-4",
                  theme === "night" ? "text-white/70" : "text-midnightNavy/70"
                )}>
                  okami4aj@gmail.com
                </p>
                
                <div className={cn(
                  "inline-flex items-center gap-2 text-sm font-medium",
                  "px-4 py-2 rounded-full border",
                  "group-hover:border-coral/50 transition-colors duration-300",
                  theme === "night" 
                    ? "text-lilacHalo border-white/20" 
                    : "text-coral border-black/20"
                )}>
                  <span>Send a message</span>
                  <motion.span 
                    className="group-hover:translate-x-1 transition-transform duration-300"
                    whileHover={{ x: 4 }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </a>
          </div>

          {/* Additional text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={cn(
              "text-center mt-12 text-sm",
              theme === "night" ? "text-white/50" : "text-midnightNavy/50"
            )}
          >
            I&apos;ll get back to you as soon as possible 🧚
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
