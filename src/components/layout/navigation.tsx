"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X } from "lucide-react";
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

  const logoHref = isHomeRoute ? "#home" : "/#home";

  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white border-b border-black/10 shadow-sm"
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
                  "text-midnightNavy"
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
                  "transition-colors duration-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo rounded-sm",
                  "hover:opacity-100",
                  "text-midnightNavy/90 hover:text-midnightNavy",
                  "after:content-[''] after:absolute after:bottom-[-4px] after:left-0",
                  "after:w-0 after:h-[1px] after:transition-all after:duration-300",
                  "hover:after:w-full",
                  "after:bg-coral",
                )}
              >
                {link.label}
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
                "bg-babyPink/70 hover:bg-babyPink/90"
              )}
              aria-label="Toggle theme"
            >
              {theme === "night" ? (
                <Sun className="w-5 h-5 text-midnightNavy" />
              ) : (
                <Moon className="w-5 h-5 text-midnightNavy" />
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
                "bg-babyPink/70 hover:bg-babyPink/90"
              )}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-midnightNavy" />
              ) : (
                <Menu className="w-5 h-5 text-midnightNavy" />
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
                "md:hidden overflow-hidden",
                "bg-white rounded-b-2xl border-t border-black/5"
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
                      "transition-colors duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo rounded-md",
                      "text-midnightNavy/80 hover:text-midnightNavy hover:bg-black/5"
                    )}
                  >
                    {link.label}
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
