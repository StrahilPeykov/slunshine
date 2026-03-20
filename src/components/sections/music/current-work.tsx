"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SocialLinks } from "@/components/common/social-links";
import { useTheme } from "@/components/providers/theme-provider";
import { musicCurrentWorkCopy } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function CurrentWork() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "relative rounded-3xl p-8 md:p-12 overflow-hidden",
        "backdrop-blur-md border",
        theme === "night"
          ? "bg-gradient-to-br from-white/5 to-white/10 border-white/20"
          : "bg-gradient-to-br from-white/90 to-white/70 border-white shadow-2xl",
      )}
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-lilacHalo/10 to-coral/10 blur-3xl" />

      <div className="relative grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="font-playfair text-2xl mb-4">{musicCurrentWorkCopy.title}</h3>
          <p className="text-foreground/70 mb-4">{musicCurrentWorkCopy.description}</p>
          <SocialLinks platforms={["instagram"]} />
        </div>

        <div className="flex justify-center md:justify-end">
          <div
            className={cn(
              "relative w-48 h-48 rounded-2xl overflow-hidden",
              "ring-4",
              theme === "night" ? "ring-white/10" : "ring-black/10",
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-lilacHalo/20 to-coral/20" />
            <Image
              src="/images/mila-concert.webp"
              alt={musicCurrentWorkCopy.imageAlt}
              width={768}
              height={768}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
