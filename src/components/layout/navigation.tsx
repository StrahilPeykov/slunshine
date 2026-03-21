"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { navigationItems } from "@/content/site-content";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomeRoute = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resolveHref = (href: string) => {
    if (!href.startsWith("#")) return href;
    return isHomeRoute ? href : `/${href}`;
  };

  const isRouteLink = (href: string) => href.startsWith("/") && href !== "/";

  const logoHref = isHomeRoute ? "#home" : "/#home";

  const isNightScrolled = isScrolled && theme === "night";
  const isDayScrolled = isScrolled && theme === "day";

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isNightScrolled
          ? "bg-[rgb(var(--card)/0.95)] backdrop-blur-md border-b border-white/10 shadow-sm"
          : isDayScrolled
            ? "bg-white/96 border-b border-black/5 shadow-sm"
            : "bg-black/45"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          >
            <Link href={logoHref} className="relative group block">
              <svg
                width="180"
                height="50"
                viewBox="0 0 180 50"
                className={cn(
                  "transition-all duration-300",
                  isNightScrolled
                    ? "text-foreground"
                    : isDayScrolled
                      ? "text-midnightNavy"
                      : "text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.55)]"
                )}
              >
                <defs>
                  <style>
                    {`
                    @keyframes dash {
                      to {
                        stroke-dashoffset: 0;
                      }
                    }
                    .logo-path {
                      stroke-dasharray: 500;
                      stroke-dashoffset: 500;
                      fill: none;
                      stroke: currentColor;
                      stroke-width: 1.5;
                      transition: stroke-dashoffset 0.8s ease;
                    }
                    .group:hover .logo-path {
                      animation: dash 0.8s ease forwards;
                    }
                    .logo-text {
                      font-family: var(--font-cormorant);
                      font-size: 36px;
                      font-weight: 300;
                      fill: currentColor;
                    }
                  `}
                  </style>
                </defs>
                <text x="90" y="35" textAnchor="middle" className="logo-text">
                  slun<tspan style={{ letterSpacing: "-0.05em" }}>sh</tspan>ine
                </text>
                <path className="logo-path" d="M 20 40 Q 90 45 160 40" />
              </svg>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.2 }}
          >
            {navigationItems.map((link) => (
              <Link
                key={link.href}
                href={resolveHref(link.href)}
                className={cn(
                  "relative font-inter text-sm font-light tracking-wide",
                  "inline-flex items-center gap-1",
                  "transition-colors duration-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo rounded-sm",
                  "hover:opacity-100",
                  isNightScrolled
                    ? "text-foreground hover:text-foreground"
                    : isDayScrolled
                      ? "text-midnightNavy hover:text-midnightNavy"
                      : "text-white hover:text-white font-normal drop-shadow-[0_3px_10px_rgba(0,0,0,0.65)]",
                  "after:content-[''] after:absolute after:bottom-[-4px] after:left-0",
                  "after:w-0 after:h-[1px] after:transition-all after:duration-300",
                  "hover:after:w-full",
                  isScrolled ? "after:bg-coral" : "after:bg-white",
                )}
              >
                {link.label}
                {isRouteLink(link.href) && (
                  <ArrowUpRight
                    className="w-3.5 h-3.5 opacity-70 shrink-0"
                    aria-hidden
                  />
                )}
              </Link>
            ))}
          </motion.div>

          {/* Theme Toggle & Mobile Menu */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          >
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2.5 rounded-full transition-all duration-300",
                "hover:scale-110 active:scale-95",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
                isNightScrolled
                  ? "bg-white/15 hover:bg-white/25"
                  : isDayScrolled
                    ? "bg-babyPink/70 hover:bg-babyPink/90"
                    : "bg-white/20 hover:bg-white/30"
              )}
              aria-label="Toggle theme"
            >
              {theme === "night" ? (
                <Sun
                  className={cn(
                    "w-5 h-5",
                    isNightScrolled ? "text-foreground" : isDayScrolled ? "text-midnightNavy" : "text-white"
                  )}
                />
              ) : (
                <Moon
                  className={cn(
                    "w-5 h-5",
                    isNightScrolled ? "text-foreground" : isDayScrolled ? "text-midnightNavy" : "text-white"
                  )}
                />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              className={cn(
                "md:hidden p-2.5 rounded-full transition-all duration-300",
                "hover:scale-110 active:scale-95",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
                isNightScrolled
                  ? "bg-white/15 hover:bg-white/25"
                  : isDayScrolled
                    ? "bg-babyPink/70 hover:bg-babyPink/90"
                    : "bg-white/20 hover:bg-white/30"
              )}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X
                  className={cn(
                    "w-5 h-5",
                    isNightScrolled
                      ? "text-foreground"
                      : isDayScrolled
                        ? "text-midnightNavy"
                        : "text-white"
                  )}
                />
              ) : (
                <Menu
                  className={cn(
                    "w-5 h-5",
                    isNightScrolled
                      ? "text-foreground"
                      : isDayScrolled
                        ? "text-midnightNavy"
                        : "text-white"
                  )}
                />
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              id="mobile-navigation"
              className={cn(
                "md:hidden overflow-hidden rounded-b-2xl border-t",
                theme === "night"
                  ? "bg-[rgb(var(--card))] border-white/10"
                  : "bg-white border-black/5"
              )}
            >
              <div className="flex flex-col gap-1 py-6">
                {navigationItems.map((link) => (
                  <Link
                    key={link.href}
                    href={resolveHref(link.href)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 font-inter text-sm font-light tracking-wide",
                      "flex items-center gap-2",
                      "transition-colors duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo rounded-md",
                      theme === "night"
                        ? "text-foreground/80 hover:text-foreground hover:bg-white/5"
                        : "text-midnightNavy hover:text-midnightNavy hover:bg-black/5"
                    )}
                  >
                    {link.label}
                    {isRouteLink(link.href) && (
                      <ArrowUpRight
                        className="w-3.5 h-3.5 opacity-60 shrink-0"
                        aria-hidden
                      />
                    )}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
