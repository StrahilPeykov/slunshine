"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Mail, Instagram } from "lucide-react";

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
          <h2 className="font-playfair text-[clamp(2.5rem,5vw,3.5rem)] font-light mb-4">
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
          <div className="grid md:grid-cols-2 gap-6">
            {/* Instagram Card */}
            <a
              href="https://instagram.com/slun_shine"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative p-8 rounded-3xl text-center",
                "backdrop-blur-xl border transition-all duration-300",
                "hover:scale-[1.02] active:scale-[0.98]",
                theme === "night" 
                  ? "bg-gradient-to-br from-white/5 to-white/10 border-white/20 hover:from-white/10 hover:to-white/15" 
                  : "bg-white/90 border-white shadow-2xl hover:shadow-3xl"
              )}
            >
              {/* Gradient decoration */}
              <div className={cn(
                "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                "bg-gradient-to-br from-lilacHalo/5 via-coral/5 to-lavaGlow/5"
              )} />
              
              <div className="relative">
                <div className={cn(
                  "w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center",
                  "bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400"
                )}>
                  <Instagram className="w-10 h-10 text-white" />
                </div>
                <h3 className={cn(
                  "font-playfair text-2xl mb-2",
                  theme === "night" ? "text-white" : "text-midnightNavy"
                )}>
                  Instagram
                </h3>
                <p className={cn(
                  "text-lg",
                  theme === "night" ? "text-white/70" : "text-midnightNavy/70"
                )}>
                  @slun_shine
                </p>
                <div className={cn(
                  "mt-4 inline-flex items-center gap-2 text-sm",
                  theme === "night" ? "text-lilacHalo" : "text-coral"
                )}>
                  <span>Follow for updates</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:slunshine@gmail.com"
              className={cn(
                "group relative p-8 rounded-3xl text-center",
                "backdrop-blur-xl border transition-all duration-300",
                "hover:scale-[1.02] active:scale-[0.98]",
                theme === "night" 
                  ? "bg-gradient-to-br from-white/5 to-white/10 border-white/20 hover:from-white/10 hover:to-white/15" 
                  : "bg-white/90 border-white shadow-2xl hover:shadow-3xl"
              )}
            >
              {/* Gradient decoration */}
              <div className={cn(
                "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                "bg-gradient-to-br from-coral/5 via-lilacHalo/5 to-aquaMist/5"
              )} />
              
              <div className="relative">
                <div className={cn(
                  "w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center",
                  theme === "night"
                    ? "bg-gradient-to-br from-lavaGlow to-coral"
                    : "bg-gradient-to-br from-coral to-aquaMist"
                )}>
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className={cn(
                  "font-playfair text-2xl mb-2",
                  theme === "night" ? "text-white" : "text-midnightNavy"
                )}>
                  Email
                </h3>
                <p className={cn(
                  "text-lg",
                  theme === "night" ? "text-white/70" : "text-midnightNavy/70"
                )}>
                  slunshine@gmail.com
                </p>
                <div className={cn(
                  "mt-4 inline-flex items-center gap-2 text-sm",
                  theme === "night" ? "text-lilacHalo" : "text-coral"
                )}>
                  <span>Send a message</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
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
