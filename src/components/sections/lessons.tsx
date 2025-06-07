"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Music as MusicIcon, Piano, Users, Award, Clock, Star } from "lucide-react";

export function Lessons() {
  const { theme } = useTheme();

  const subjects = [
    {
      icon: MusicIcon,
      title: "Harp Lessons",
      description: "From beginner to advanced, learn the art of harp playing with personalized instruction",
      features: ["Classical & Modern Repertoire", "Technique Development", "Performance Preparation"],
    },
    {
      icon: Piano,
      title: "Piano Lessons",
      description: "Comprehensive piano instruction for all ages and skill levels",
      features: ["Sight Reading", "Music Theory Integration", "Various Genres"],
    },
    {
      icon: Award,
      title: "Music Theory & Harmony",
      description: "Master the language of music with in-depth theoretical knowledge",
      features: ["Exam Preparation", "Composition Skills", "Harmonic Analysis"],
    },
  ];

  const testimonials = [
    {
      text: "Ally's approach to teaching harmony transformed how I understand music. Her lessons are clear, engaging, and tailored perfectly to my needs.",
      author: "Maria S.",
      role: "University Student",
    },
    {
      text: "As a drummer, I never thought I'd need music theory. Ally showed me how it could elevate my playing to the next level.",
      author: "Ivan P.",
      role: "Professional Musician",
    },
  ];

  return (
    <section id="lessons" className={cn(
      "py-20 md:py-32 relative",
      theme === "night" ? "bg-midnightNavy/50" : "bg-iridescentPearl/30"
    )}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
            <span className={cn(theme === "night" && "glow-text")}>
              Private Lessons
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Personalized instruction for students of all ages and levels, from beginners to professional musicians
          </p>
        </motion.div>

        {/* Subjects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "group p-8 rounded-2xl transition-all duration-300",
                "glass border backdrop-blur-md hover:scale-[1.02]",
                theme === "night" 
                  ? "border-white/10 hover:border-lavaGlow/30" 
                  : "border-black/10 hover:border-aquaMist/50"
              )}
            >
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center mb-6",
                "transition-all duration-300 group-hover:scale-110",
                theme === "night" 
                  ? "bg-gradient-to-br from-lavaGlow/20 to-lilacHalo/20" 
                  : "bg-gradient-to-br from-aquaMist/20 to-coral/20"
              )}>
                <subject.icon className={cn(
                  "w-8 h-8",
                  theme === "night" ? "text-lavaGlow" : "text-aquaMist"
                )} />
              </div>

              <h3 className="font-playfair text-2xl font-bold mb-3">
                {subject.title}
              </h3>
              
              <p className="text-foreground/70 mb-6">
                {subject.description}
              </p>

              <ul className="space-y-2">
                {subject.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground/60">
                    <div className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      theme === "night" ? "bg-lavaGlow" : "bg-aquaMist"
                    )} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            "glass border backdrop-blur-md rounded-2xl p-8 md:p-12 mb-20",
            theme === "night" ? "border-white/10" : "border-black/10"
          )}
        >
          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-8 text-center gradient-text">
            Why Learn With Me?
          </h3>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className={cn(
                "w-10 h-10 mx-auto mb-3",
                theme === "night" ? "text-lavaGlow" : "text-aquaMist"
              )} />
              <h4 className="font-medium mb-2">All Ages Welcome</h4>
              <p className="text-sm text-foreground/60">From children to seniors</p>
            </div>

            <div>
              <Clock className={cn(
                "w-10 h-10 mx-auto mb-3",
                theme === "night" ? "text-lavaGlow" : "text-aquaMist"
              )} />
              <h4 className="font-medium mb-2">Flexible Schedule</h4>
              <p className="text-sm text-foreground/60">Lessons tailored to your availability</p>
            </div>

            <div>
              <Award className={cn(
                "w-10 h-10 mx-auto mb-3",
                theme === "night" ? "text-lavaGlow" : "text-aquaMist"
              )} />
              <h4 className="font-medium mb-2">Proven Results</h4>
              <p className="text-sm text-foreground/60">Successful exam preparation</p>
            </div>

            <div>
              <Star className={cn(
                "w-10 h-10 mx-auto mb-3",
                theme === "night" ? "text-lavaGlow" : "text-aquaMist"
              )} />
              <h4 className="font-medium mb-2">Personalized Approach</h4>
              <p className="text-sm text-foreground/60">Lessons adapted to your goals</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-8 text-center">
            What Students Say
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "p-6 rounded-xl",
                  theme === "night" ? "bg-white/5" : "bg-black/5"
                )}
              >
                <p className="text-foreground/80 mb-4 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-12 h-12 rounded-full",
                    theme === "night" 
                      ? "bg-gradient-to-br from-lavaGlow/20 to-lilacHalo/20" 
                      : "bg-gradient-to-br from-aquaMist/20 to-coral/20"
                  )} />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-full font-inter font-medium transition-all duration-300",
              theme === "night" 
                ? "bg-lavaGlow text-white hover:bg-lavaGlow/90" 
                : "bg-aquaMist text-midnightNavy hover:bg-aquaMist/90"
            )}
          >
            Book Your First Lesson
          </a>
        </motion.div>
      </div>
    </section>
  );
}
