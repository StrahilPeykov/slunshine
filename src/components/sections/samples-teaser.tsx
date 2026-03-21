"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { samplesTeaserCopy } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function SamplesTeaser() {
  const { theme } = useTheme();

  return (
    <section id={samplesTeaserCopy.id} className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            "rounded-3xl p-8 md:p-10 border",
            theme === "night"
              ? "border-white/10 bg-[rgb(var(--card)/0.4)] backdrop-blur-sm"
              : "border-midnightNavy/10 bg-white/60 backdrop-blur-sm shadow-sm",
          )}
        >
          <p className="text-sm font-inter font-light tracking-widest uppercase text-foreground/50 mb-3">
            {samplesTeaserCopy.subtitle}
          </p>
          <h2
            className={cn(
              "font-cormorant text-[clamp(1.75rem,4vw,2.5rem)] font-light mb-4",
              theme === "night" ? "text-white" : "text-midnightNavy",
            )}
          >
            {samplesTeaserCopy.title}
          </h2>
          <p className="text-foreground/70 max-w-2xl mb-8 leading-relaxed">
            {samplesTeaserCopy.description}
          </p>
          <Link
            href="/samples"
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-inter font-medium tracking-wide transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo focus-visible:ring-offset-2",
              theme === "night"
                ? "bg-white/10 text-foreground hover:bg-white/15"
                : "bg-midnightNavy text-white hover:bg-midnightNavy/90",
            )}
          >
            {samplesTeaserCopy.ctaLabel}
            <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
