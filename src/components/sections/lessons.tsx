"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Music as MusicIcon, Piano, Sparkles, Users, Star } from "lucide-react";

export function Lessons() {
  const { theme } = useTheme();

  const offerings = [
    {
      icon: MusicIcon,
      title: "Harp",
      description: "From first touch to concert stage",
      gradient: "from-lilacHalo to-coral",
    },
    {
      icon: Piano,
      title: "Piano",
      description: "Classical to contemporary styles",
      gradient: "from-coral to-lavaGlow",
    },
    {
      icon: Sparkles,
      title: "Harmony & Theory",
      description: "Understand the language of music",
      gradient: "from-lavaGlow to-lilacHalo",
    },
  ];

  const features = [
    { icon: Users, text: "All ages & levels welcome" },
    { icon: Star, text: "Personalized curriculum" },
  ];

  return (
    <section id="lessons" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className={cn(
          "absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10",
          theme === "night" ? "bg-lilacHalo" : "bg-coral"
        )} />
      </div>

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
              Share the Magic
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Private lessons tailored to your musical journey
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Offerings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={cn(
              "font-playfair text-2xl mb-8",
              theme === "night" ? "text-white/90" : "text-midnightNavy"
            )}>
              What I Teach
            </h3>

            <div className="space-y-6">
              {offerings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "group relative p-6 rounded-2xl",
                    "backdrop-blur-sm border transition-all duration-300",
                    "hover:scale-[1.02] cursor-pointer",
                    theme === "night"
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-white/80 border-white shadow-lg hover:shadow-xl"
                  )}
                >
                  {/* Gradient accent */}
                  <div className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity",
                    `bg-gradient-to-r ${offering.gradient}`
                  )} />

                  <div className="relative flex items-start gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      `bg-gradient-to-br ${offering.gradient}`
                    )}>
                      <offering.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-playfair text-xl font-medium mb-1">
                        {offering.title}
                      </h4>
                      <p className="text-foreground/60">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn(
              "relative p-8 md:p-10 rounded-3xl",
              "backdrop-blur-md border",
              theme === "night"
                ? "bg-gradient-to-br from-white/5 to-white/10 border-white/20"
                : "bg-gradient-to-br from-white/90 to-white/70 border-white shadow-2xl"
            )}
          >
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-lilacHalo/20 to-coral/20 blur-2xl" />

            <div className="relative">
              <h3 className={cn(
                "font-playfair text-2xl mb-6",
                theme === "night" ? "text-white" : "text-midnightNavy"
              )}>
                Learn With Me
              </h3>

              <p className="text-foreground/70 mb-8 leading-relaxed">
                Whether you're touching strings for the first time or preparing for conservatory, 
                I'll guide you with patience, passion, and personalized attention.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center",
                      theme === "night"
                        ? "bg-white/10"
                        : "bg-midnightNavy/10"
                    )}>
                      <feature.icon className={cn(
                        "w-4 h-4",
                        theme === "night" ? "text-lilacHalo" : "text-coral"
                      )} />
                    </div>
                    <span className="text-foreground/80">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Student testimonial */}
              <div className={cn(
                "p-4 rounded-xl",
                theme === "night" ? "bg-black/20" : "bg-midnightNavy/5"
              )}>
                <p className="text-sm italic text-foreground/70 mb-2">
                  "Ally makes complex theory feel like discovering hidden treasures in music"
                </p>
                <p className="text-xs text-foreground/50">
                  — Maria, harmony student
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-foreground/60 mb-6">
            Ready to start your musical journey?
          </p>
          <a
            href="#contact"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-full font-inter font-medium",
              "transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]",
              theme === "night" 
                ? "bg-gradient-to-r from-lilacHalo to-lavaGlow text-white" 
                : "bg-gradient-to-r from-coral to-lavaGlow text-white"
            )}
          >
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
