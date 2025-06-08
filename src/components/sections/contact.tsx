"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Mail, Instagram, Music2, Send, Sparkles, Headphones, Heart } from "lucide-react";
import { useState } from "react";

  export function Contact() {
    const { theme } = useTheme();
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      type: "",
      message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: "", email: "", type: "", message: "" });
        } else {
          setSubmitStatus('error');
        }
      } catch {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    };

  const contactReasons = [
    { value: "collab", label: "Create together", icon: Sparkles },
    { value: "booking", label: "Book a show", icon: Music2 },
    { value: "lessons", label: "Learn with me", icon: Headphones },
    { value: "hello", label: "Say hello", icon: Heart },
  ];

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

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            "relative rounded-3xl overflow-hidden",
            "backdrop-blur-xl border",
            theme === "night" 
              ? "bg-gradient-to-br from-white/5 to-white/10 border-white/20" 
              : "bg-white/90 border-white shadow-2xl"
          )}
        >
          {/* Decorative gradient */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-lilacHalo via-coral to-lavaGlow animate-gradient bg-[length:200%_200%]" />
          </div>

          <div className="relative p-8 md:p-12">
            {/* Quick links */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <a
                href="https://instagram.com/slun_shine"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group flex items-center justify-center gap-3 p-4 rounded-2xl",
                  "backdrop-blur-sm border transition-all duration-300",
                  "hover:scale-[1.02] active:scale-[0.98]",
                  theme === "night"
                    ? "bg-white/5 hover:bg-white/10 border-white/20"
                    : "bg-white/50 hover:bg-white/80 border-white"
                )}
              >
                <Instagram className={cn(
                  "w-5 h-5 group-hover:scale-110 transition-transform",
                  theme === "night" ? "text-white" : "text-midnightNavy"
                )} />
                <span className={cn(
                  "font-medium",
                  theme === "night" ? "text-white" : "text-midnightNavy"
                )}>
                  @slun_shine
                </span>
              </a>
              
              <a
                href="mailto:contact@slunshine.com"
                className={cn(
                  "group flex items-center justify-center gap-3 p-4 rounded-2xl",
                  "backdrop-blur-sm border transition-all duration-300",
                  "hover:scale-[1.02] active:scale-[0.98]",
                  theme === "night"
                    ? "bg-white/5 hover:bg-white/10 border-white/20"
                    : "bg-white/50 hover:bg-white/80 border-white"
                )}
              >
                <Mail className={cn(
                  "w-5 h-5 group-hover:scale-110 transition-transform",
                  theme === "night" ? "text-white" : "text-midnightNavy"
                )} />
                <span className={cn(
                  "font-medium",
                  theme === "night" ? "text-white" : "text-midnightNavy"
                )}>
                  Email
                </span>
              </a>
            </div>

            {/* Divider */}
            <div className="relative mb-10">
              <div className={cn(
                "absolute inset-0 flex items-center",
                theme === "night" ? "text-white/10" : "text-black/10"
              )}>
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className={cn(
                  "px-4 relative z-10",
                  theme === "night" ? "bg-midnightNavy text-white/50" : "bg-white text-midnightNavy/50"
                )}>
                  or send a message
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className={cn(
                    "w-full px-5 py-4 rounded-2xl transition-all duration-200",
                    "bg-transparent border placeholder:text-foreground/40",
                    "focus:outline-none",
                    theme === "night" 
                      ? "border-white/20 focus:border-lilacHalo focus:bg-white/5" 
                      : "border-black/10 focus:border-coral focus:bg-white",
                    "focus:scale-[1.01]"
                  )}
                  required
                />

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Your email"
                  className={cn(
                    "w-full px-5 py-4 rounded-2xl transition-all duration-200",
                    "bg-transparent border placeholder:text-foreground/40",
                    "focus:outline-none",
                    theme === "night" 
                      ? "border-white/20 focus:border-lilacHalo focus:bg-white/5" 
                      : "border-black/10 focus:border-coral focus:bg-white",
                    "focus:scale-[1.01]"
                  )}
                  required
                />
              </div>

              <div>
                <p className={cn(
                  "text-sm mb-3",
                  theme === "night" ? "text-white/60" : "text-midnightNavy/60"
                )}>
                  I want to...
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {contactReasons.map((reason) => (
                    <label
                      key={reason.value}
                      className={cn(
                        "relative flex flex-col items-center gap-2 p-4 rounded-2xl cursor-pointer",
                        "border transition-all duration-300 hover:scale-[1.02]",
                        formData.type === reason.value
                          ? theme === "night"
                            ? "bg-gradient-to-br from-lilacHalo/20 to-lavaGlow/20 border-lilacHalo"
                            : "bg-gradient-to-br from-coral/20 to-aquaMist/20 border-coral"
                          : theme === "night"
                            ? "bg-white/5 border-white/20 hover:bg-white/10"
                            : "bg-white/50 border-white hover:bg-white/80"
                      )}
                    >
                      <input
                        type="radio"
                        name="type"
                        value={reason.value}
                        checked={formData.type === reason.value}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="sr-only"
                      />
                      <reason.icon className={cn(
                        "w-5 h-5",
                        formData.type === reason.value
                          ? theme === "night" ? "text-lilacHalo" : "text-coral"
                          : theme === "night" ? "text-white/60" : "text-midnightNavy/60"
                      )} />
                      <span className={cn(
                        "text-xs font-medium text-center",
                        formData.type === reason.value
                          ? theme === "night" ? "text-white" : "text-midnightNavy"
                          : theme === "night" ? "text-white/80" : "text-midnightNavy/80"
                      )}>
                        {reason.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                placeholder="Your message..."
                className={cn(
                  "w-full px-5 py-4 rounded-2xl transition-all duration-200 resize-none",
                  "bg-transparent border placeholder:text-foreground/40",
                  "focus:outline-none",
                  theme === "night" 
                    ? "border-white/20 focus:border-lilacHalo focus:bg-white/5" 
                    : "border-black/10 focus:border-coral focus:bg-white",
                  "focus:scale-[1.01]"
                )}
                required
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full px-8 py-4 rounded-2xl font-medium",
                  "flex items-center justify-center gap-3",
                  "transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]",
                  "relative overflow-hidden group",
                  isSubmitting && "cursor-not-allowed opacity-70"
                )}
              >
                {/* Gradient background */}
                <span className={cn(
                  "absolute inset-0 -z-10",
                  theme === "night"
                    ? "bg-gradient-to-r from-lilacHalo via-lavaGlow to-coral bg-[length:200%_100%] animate-gradient"
                    : "bg-gradient-to-r from-coral via-lavaGlow to-aquaMist bg-[length:200%_100%] animate-gradient"
                )} />
                
                {/* Content */}
                <span className="relative text-white flex items-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-white" />
                      <span>Send Message</span>
                    </>
                  )}
                </span>
              </button>

              {/* Status messages */}
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "text-center",
                    theme === "night" ? "text-lilacHalo" : "text-coral"
                  )}
                >
                  Message sent! I&apos;ll be in touch soon ✨
                </motion.p>
              )}
              
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-lavaGlow"
                >
                  Oops! Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
