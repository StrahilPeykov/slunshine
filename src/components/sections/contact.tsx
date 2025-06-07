"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Mail, Instagram, Music2, Send, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactOptions = [
    {
      title: "Booking & Collaborations",
      description: "For performance inquiries, studio sessions, or creative projects",
      icon: Music2,
    },
    {
      title: "Music Lessons",
      description: "Schedule your personalized harp, piano, or theory lessons",
      icon: Mail,
    },
    {
      title: "Film Scoring",
      description: "Let's discuss how I can bring your visual stories to life through music",
      icon: MapPin,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className={cn(
          "absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 rounded-full blur-3xl opacity-10",
          theme === "night" ? "bg-lilacHalo" : "bg-coral"
        )} />
      </div>

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
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Whether you&apos;re looking for music lessons, collaborations, or just want to say hello
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-8 gradient-text">
              How Can I Help?
            </h3>

            <div className="space-y-6 mb-12">
              {contactOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "p-6 rounded-xl transition-all duration-300",
                    theme === "night" ? "bg-white/5" : "bg-black/5",
                    "hover:scale-[1.02]"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
                      theme === "night" 
                        ? "bg-gradient-to-br from-lavaGlow/20 to-lilacHalo/20" 
                        : "bg-gradient-to-br from-aquaMist/20 to-coral/20"
                    )}>
                      <option.icon className={cn(
                        "w-6 h-6",
                        theme === "night" ? "text-lavaGlow" : "text-aquaMist"
                      )} />
                    </div>
                    <div>
                      <h4 className="font-playfair text-xl font-bold mb-2">
                        {option.title}
                      </h4>
                      <p className="text-foreground/70 text-sm">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className={cn(
              "p-6 rounded-xl",
              theme === "night" ? "bg-white/5" : "bg-black/5"
            )}>
              <h4 className="font-playfair text-xl font-bold mb-4">
                Follow My Journey
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/slun_shine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-3 rounded-full transition-all duration-300",
                    "hover:scale-110",
                    theme === "night" 
                      ? "bg-white/10 hover:bg-white/20" 
                      : "bg-black/5 hover:bg-black/10"
                  )}
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@slun_shine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-3 rounded-full transition-all duration-300",
                    "hover:scale-110",
                    theme === "night" 
                      ? "bg-white/10 hover:bg-white/20" 
                      : "bg-black/5 hover:bg-black/10"
                  )}
                >
                  <Music2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn(
              "p-8 rounded-2xl",
              "glass border backdrop-blur-md",
              theme === "night" ? "border-white/10" : "border-black/10"
            )}
          >
            <h3 className="font-playfair text-2xl font-bold mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/70">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg transition-all duration-200",
                      "bg-transparent border",
                      theme === "night" 
                        ? "border-white/20 focus:border-lavaGlow" 
                        : "border-black/20 focus:border-aquaMist",
                      "focus:outline-none focus:ring-2 focus:ring-primary/20"
                    )}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/70">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg transition-all duration-200",
                      "bg-transparent border",
                      theme === "night" 
                        ? "border-white/20 focus:border-lavaGlow" 
                        : "border-black/20 focus:border-aquaMist",
                      "focus:outline-none focus:ring-2 focus:ring-primary/20"
                    )}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/70">
                  Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg transition-all duration-200",
                    "bg-transparent border",
                    theme === "night" 
                      ? "border-white/20 focus:border-lavaGlow" 
                      : "border-black/20 focus:border-aquaMist",
                    "focus:outline-none focus:ring-2 focus:ring-primary/20"
                  )}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="lessons">Music Lessons</option>
                  <option value="booking">Performance Booking</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="film">Film Scoring</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/70">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg transition-all duration-200 resize-none",
                    "bg-transparent border",
                    theme === "night" 
                      ? "border-white/20 focus:border-lavaGlow" 
                      : "border-black/20 focus:border-aquaMist",
                    "focus:outline-none focus:ring-2 focus:ring-primary/20"
                  )}
                  required
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "w-full px-8 py-4 rounded-lg font-inter font-medium transition-all duration-300",
                  "flex items-center justify-center gap-2",
                  theme === "night" 
                    ? "bg-lavaGlow text-white hover:bg-lavaGlow/90" 
                    : "bg-aquaMist text-midnightNavy hover:bg-aquaMist/90"
                )}
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
