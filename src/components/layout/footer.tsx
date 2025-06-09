"use client";

import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Instagram } from "lucide-react";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={cn(
      "py-16 relative",
      theme === "night" ? "bg-midnightNavy" : "bg-white/50"
    )}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            {/* Logo - Left */}
            <div className="flex-shrink-0">
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

            {/* Copyright - Center */}
            <div className="text-center">
              <p className="text-sm text-foreground/50">
                © {new Date().getFullYear()} Alexandrina Kushinchanova
              </p>
              <p className="text-xs text-foreground/70 mt-1">
                Designed & Built by Strahil Peykov
              </p>
            </div>

            {/* Social Links - Right */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/slun_shine"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2.5 rounded-full transition-all duration-300",
                  "hover:scale-110 active:scale-95",
                  theme === "night" 
                    ? "bg-white/10 hover:bg-white/20" 
                    : "bg-black/5 hover:bg-black/10"
                )}
                aria-label="Instagram"
              >
                <Instagram className={cn(
                  "w-4 h-4",
                  theme === "night" ? "text-white" : "text-midnightNavy"
                )} />
              </a>
              <a
                href="https://www.tiktok.com/@slun_shine"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2.5 rounded-full transition-all duration-300",
                  "hover:scale-110 active:scale-95",
                  theme === "night" 
                    ? "bg-white/10 hover:bg-white/20" 
                    : "bg-black/5 hover:bg-black/10"
                )}
                aria-label="TikTok"
              >
                {/* TikTok Icon */}
                <svg
                  className={cn(
                    "w-4 h-4",
                    theme === "night" ? "text-white" : "text-midnightNavy"
                  )}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.51V5.8a4.84 4.84 0 0 1-.86-.09z" />
                </svg>
              </a>
              <a
                href="https://open.spotify.com/user/akartu113?si=e0ed233e08044e48"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2.5 rounded-full transition-all duration-300",
                  "hover:scale-110 active:scale-95",
                  theme === "night" 
                    ? "bg-white/10 hover:bg-white/20" 
                    : "bg-black/5 hover:bg-black/10"
                )}
                aria-label="Spotify"
              >
                {/* Spotify Icon */}
                <svg
                  className={cn(
                    "w-4 h-4",
                    theme === "night" ? "text-white" : "text-midnightNavy"
                  )}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden text-center space-y-6">
            {/* Logo */}
            <div className="flex justify-center">
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
                  <linearGradient id="footer-gradient-mobile" x1="0%" y1="0%" x2="100%" y2="0%">
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
                    fill: 'url(#footer-gradient-mobile)'
                  }}>
                  slun<tspan style={{ letterSpacing: '-0.05em' }}>sh</tspan>ine
                </text>
              </svg>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
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
                <svg
                  className={cn(
                    "w-5 h-5",
                    theme === "night" ? "text-white" : "text-midnightNavy"
                  )}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.51V5.8a4.84 4.84 0 0 1-.86-.09z" />
                </svg>
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
                <svg
                  className={cn(
                    "w-5 h-5",
                    theme === "night" ? "text-white" : "text-midnightNavy"
                  )}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-sm text-foreground/50">
                © {new Date().getFullYear()} Alexandrina Kushinchanova
              </p>
              <p className="text-xs text-foreground/70 mt-1">
                Designed & Built by Strahil Peykov
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
