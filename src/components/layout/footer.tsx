"use client";

import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Instagram, Music2 } from "lucide-react";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={cn(
      "py-12 relative overflow-hidden",
      theme === "night" ? "bg-midnightNavy/80" : "bg-iridescentPearl/50"
    )}>
      {/* Star map background (subtle) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-2 h-2 rounded-full bg-foreground" />
        <div className="absolute top-32 left-40 w-1 h-1 rounded-full bg-foreground" />
        <div className="absolute top-20 right-30 w-1.5 h-1.5 rounded-full bg-foreground" />
        <div className="absolute bottom-20 left-1/2 w-1 h-1 rounded-full bg-foreground" />
        <div className="absolute bottom-40 right-20 w-2 h-2 rounded-full bg-foreground" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4 gradient-text">
              slunshine
            </h3>
            <p className="text-sm text-foreground/60">
              The Harp Lady
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-inter font-medium mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#music" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Music
              </a>
              <a href="#about" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                About
              </a>
              <a href="#lessons" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Lessons
              </a>
              <a href="#contact" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="text-right">
            <h4 className="font-inter font-medium mb-4">Connect</h4>
            <div className="flex justify-end gap-4 mb-4">
              <a
                href="https://instagram.com/slun_shine"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  "hover:scale-110",
                  theme === "night" 
                    ? "bg-white/10 hover:bg-white/20" 
                    : "bg-black/5 hover:bg-black/10"
                )}
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@slun_shine"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  "hover:scale-110",
                  theme === "night" 
                    ? "bg-white/10 hover:bg-white/20" 
                    : "bg-black/5 hover:bg-black/10"
                )}
                aria-label="TikTok"
              >
                <Music2 className="w-4 h-4" />
              </a>
              <a
                href="https://open.spotify.com/user/akartu113?si=e0ed233e08044e48"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  "hover:scale-110",
                  theme === "night" 
                    ? "bg-white/10 hover:bg-white/20" 
                    : "bg-black/5 hover:bg-black/10"
                )}
                aria-label="Spotify"
              >
                <Music2 className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-foreground/60">
              @slun_shine
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={cn(
          "pt-8 border-t text-center text-xs text-foreground/50",
          theme === "night" ? "border-white/10" : "border-black/10"
        )}>
          <p>
            © {new Date().getFullYear()} Alexandrina Kushinchanova. All rights reserved.
          </p>
          <p className="mt-2">
            Website by{" "}
            <a 
              href="#" 
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strahil Peykov
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}