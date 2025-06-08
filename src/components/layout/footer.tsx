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
          <div className="flex justify-center mb-6">
            <svg
              width="150"
              height="40"
              viewBox="0 0 150 40"
              className={cn(
                "transition-all duration-300",
                theme === "night" ? "text-white" : "text-midnightNavy"
              )}
            >
              <defs>
                <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={theme === "night" ? "#fff" : "#0E1A2A"} />
                  <stop offset="50%" stopColor={theme === "night" ? "#C9A8FF" : "#FF8875"} />
                  <stop offset="100%" stopColor={theme === "night" ? "#fff" : "#0E1A2A"} />
                </linearGradient>
              </defs>
              <text x="75" y="28" textAnchor="middle" 
                style={{ 
                  fontFamily: 'var(--font-cormorant)', 
                  fontSize: '30px', 
                  fontWeight: 300,
                  fill: 'url(#footer-gradient)'
                }}>
                slun<tspan style={{ letterSpacing: '-0.05em' }}>sh</tspan>ine
              </text>
            </svg>
          </div>

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
