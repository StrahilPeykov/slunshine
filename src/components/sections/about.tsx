"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Music as MusicIcon, Film, GraduationCap, Sparkles } from "lucide-react";

export function About() {
  const { theme } = useTheme();

  const milestones = [
    {
      year: "2010",
      title: "Film Debut",
      description: "Appeared in &apos;Goodbye Mama&apos; and met Quentin Tarantino at the film festival",
      icon: Film,
    },
    {
      year: "2020",
      title: "Joined Mila Robert",
      description: "Became the pianist and backing vocalist for Bulgarian pop artist",
      icon: MusicIcon,
    },
    {
      year: "2024",
      title: "Master&apos;s Degree",
      description: "Graduated from New Bulgarian University in Pop & Jazz Singing",
      icon: GraduationCap,
    },
    {
      year: "2025",
      title: "PhD & Solo Career",
      description: "Starting doctoral studies while launching solo music career",
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              <span className={cn(theme === "night" && "glow-text")}>
                My Story
              </span>
            </h2>

            <div className="space-y-4 text-foreground/80">
              <p className="text-lg leading-relaxed">
                I&apos;ve been playing the harp professionally since childhood, finding my voice through the strings of my beloved Salvi harp. What started as a classical journey has evolved into something more – a fusion of traditional mastery with modern expression.
              </p>
              
              <p className="leading-relaxed">
                My path has taken me from Bulgarian film sets to concert halls, from teaching music theory to eager students to performing with Mila Robert across the country. Each experience has shaped my understanding of music as a universal language.
              </p>
              
              <p className="leading-relaxed">
                Now, as I begin my PhD journey, I&apos;m also embarking on my most personal project yet – sharing my own music with the world. It&apos;s a blend of everything I am: the discipline of classical training, the soul of jazz and RnB, and the endless possibilities of modern production.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className={cn(
                "p-4 rounded-lg",
                theme === "night" ? "bg-white/5" : "bg-black/5"
              )}>
                <p className="text-sm text-foreground/60 mb-1">Instruments</p>
                <p className="font-medium">Harp, Piano, Voice</p>
              </div>
              <div className={cn(
                "p-4 rounded-lg",
                theme === "night" ? "bg-white/5" : "bg-black/5"
              )}>
                <p className="text-sm text-foreground/60 mb-1">Specialties</p>
                <p className="font-medium">Harmony, Music Theory</p>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Icon */}
                  <div className={cn(
                    "absolute left-0 w-14 h-14 rounded-full flex items-center justify-center",
                    theme === "night" 
                      ? "bg-gradient-to-br from-lavaGlow/20 to-lilacHalo/20" 
                      : "bg-gradient-to-br from-aquaMist/20 to-coral/20"
                  )}>
                    <milestone.icon className={cn(
                      "w-6 h-6",
                      theme === "night" ? "text-lavaGlow" : "text-aquaMist"
                    )} />
                  </div>

                  {/* Connecting Line */}
                  {index < milestones.length - 1 && (
                    <div className={cn(
                      "absolute left-7 top-14 w-px h-20",
                      theme === "night" ? "bg-white/20" : "bg-black/20"
                    )} />
                  )}

                  {/* Content */}
                  <div>
                    <p className={cn(
                      "text-sm font-medium mb-1",
                      theme === "night" ? "text-lavaGlow" : "text-aquaMist"
                    )}>
                      {milestone.year}
                    </p>
                    <h3 className="font-playfair text-xl font-bold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-foreground/70 text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
