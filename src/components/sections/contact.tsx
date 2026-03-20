"use client";

import { motion } from "framer-motion";
import { SocialIcon, SocialLinks } from "@/components/common/social-links";
import { useTheme } from "@/components/providers/theme-provider";
import { contactCopy, contactSectionCopy, socialLinks } from "@/content/site-content";
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
              {contactSectionCopy.title}
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-xl mx-auto">
            {contactSectionCopy.description}
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
              href={socialLinks.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative p-8 rounded-3xl text-center overflow-hidden",
                "backdrop-blur-xl border-2 transition-all duration-500",
                "hover:scale-[1.015] active:scale-[0.99] transform-gpu will-change-transform",
                "hover:shadow-2xl",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
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
                  <SocialIcon platform="instagram" className="w-12 h-12 text-white relative z-10" />
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
                  {socialLinks.instagram.handle}
                </p>
                
                <div className={cn(
                  "inline-flex items-center gap-2 text-sm font-medium",
                  "px-4 py-2 rounded-full border",
                  "group-hover:border-pink-400/50 transition-colors duration-300",
                  theme === "night" 
                    ? "text-lilacHalo border-white/20" 
                    : "text-coral border-black/20"
                )}>
                  <span>{contactCopy.instagramCta}</span>
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
              href={socialLinks.email.href}
              className={cn(
                "group relative p-8 rounded-3xl text-center overflow-hidden",
                "backdrop-blur-xl border-2 transition-all duration-500",
                "hover:scale-[1.015] active:scale-[0.99] transform-gpu will-change-transform",
                "hover:shadow-2xl",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
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
                  <SocialIcon platform="email" className="w-12 h-12 text-white relative z-10" />
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
                  {socialLinks.email.handle}
                </p>
                
                <div className={cn(
                  "inline-flex items-center gap-2 text-sm font-medium",
                  "px-4 py-2 rounded-full border",
                  "group-hover:border-coral/50 transition-colors duration-300",
                  theme === "night" 
                    ? "text-lilacHalo border-white/20" 
                    : "text-coral border-black/20"
                )}>
                  <span>{contactCopy.emailCta}</span>
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
            {contactCopy.responseNote}
          </motion.p>

          <div className="mt-6 flex justify-center">
            <SocialLinks size="md" platforms={["instagram", "tiktok", "youtube", "spotify"]} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
