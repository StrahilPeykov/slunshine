"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

export function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 max-w-6xl">
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
              The Story
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              {/* Gradient overlay for styling */}
              <div className={cn(
                "absolute inset-0 z-10",
                "bg-gradient-to-t from-black/20 via-transparent to-transparent"
              )} />
              
              <img
                src="/images/gallery/portrait-3.webp"
                alt="Alexandrina"
                className="w-full h-auto object-cover"
              />
              
              {/* Decorative frame */}
              <div className={cn(
                "absolute inset-0 rounded-3xl border-2 z-20",
                theme === "night" ? "border-white/10" : "border-black/10"
              )} />
            </div>
            
            {/* Decorative elements */}
            <div className={cn(
              "absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-3xl -z-10",
              theme === "night" ? "bg-lilacHalo/30" : "bg-coral/30"
            )} />
            <div className={cn(
              "absolute -top-6 -left-6 w-24 h-24 rounded-full blur-2xl -z-10",
              theme === "night" ? "bg-lavaGlow/20" : "bg-aquaMist/20"
            )} />
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground/80">
                Music found me early through the strings of a harp, and I've been 
                weaving melodies ever since. From classical conservatory halls to 
                contemporary stages, each performance adds a new color to my palette.
              </p>
              
              <p className="leading-relaxed text-foreground/70">
                Today, I blend the precision of classical training with the soul of 
                modern expression. Whether I'm performing with orchestras, teaching 
                the next generation, or crafting my own songs, it's all about the 
                connection music creates.
              </p>
              
              <p className="leading-relaxed text-foreground/70">
                My journey continues with new music on the horizon — where ethereal 
                harp meets R&B soul, where tradition dances with innovation.
              </p>
            </div>

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={cn(
                "mt-10 p-6 rounded-2xl",
                theme === "night" 
                  ? "bg-gradient-to-br from-white/5 to-white/10 border border-white/10"
                  : "bg-gradient-to-br from-coral/5 to-lilacHalo/5 border border-black/5"
              )}
            >
              <h3 className="font-playfair text-xl mb-3">Currently</h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className={cn(
                    "w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0",
                    theme === "night" ? "bg-lilacHalo" : "bg-coral"
                  )} />
                  <span>Performing & touring as a professional musician</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={cn(
                    "w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0",
                    theme === "night" ? "bg-lilacHalo" : "bg-coral"
                  )} />
                  <span>Teaching harp, piano, and music theory</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={cn(
                    "w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0",
                    theme === "night" ? "bg-lilacHalo" : "bg-coral"
                  )} />
                  <span>Creating original music for upcoming releases</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
