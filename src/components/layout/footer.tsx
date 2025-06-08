"use client";

import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Instagram, Music2 } from "lucide-react";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={cn(
      "py-16 relative",
      theme === "night" ? "bg-midnightNavy" : "bg-white/50"
    )}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <h3 className={cn(
            "font-playfair text-3xl font-light tracking-wider mb-6",
            "bg-gradient-to-r bg-clip-text text-transparent",
            theme === "night" 
              ? "from-white to-lilacHalo" 
              : "from-midnightNavy to-coral"
          )}>
            slunshine
          </h3>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://instagram.com/slun_shine"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-3 rounded-full transition-all duration-300",
                "hover:scale-110 active:scale-95",
                theme === "night" 
                  ? "bg-white/10 hover:bg-white/20" 
                  : "bg-black/5 hover:bg-black/10"
              )}
              aria-label="Instagram"
            >
              <Instagram className={cn(
                "w-5 h-5",
                theme === "night" ? "text-white" : "text-midnightNavy"
              )} />
            </a>
            <a
              href="https://www.tiktok.com/@slun_shine"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-3 rounded-full transition-all duration-300",
                "hover:scale-110 active:scale-95",
                theme === "night" 
                  ? "bg-white/10 hover:bg-white/20" 
                  : "bg-black/5 hover:bg-black/10"
              )}
              aria-label="TikTok"
            >
              <Music2 className={cn(
                "w-5 h-5",
                theme === "night" ? "text-white" : "text-midnightNavy"
              )} />
            </a>
            <a
              href="https://open.spotify.com/user/akartu113?si=e0ed233e08044e48"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-3 rounded-full transition-all duration-300",
                "hover:scale-110 active:scale-95",
                theme === "night" 
                  ? "bg-white/10 hover:bg-white/20" 
                  : "bg-black/5 hover:bg-black/10"
              )}
              aria-label="Spotify"
            >
              <Music2 className={cn(
                "w-5 h-5",
                theme === "night" ? "text-white" : "text-midnightNavy"
              )} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-foreground/50">
            © {new Date().getFullYear()} Alexandrina Kushinchanova
          </p>
        </div>
      </div>
    </footer>
  );
}
