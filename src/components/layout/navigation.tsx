"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#music", label: "Listen" },
    { href: "#about", label: "About" },
    { href: "#lessons", label: "Lessons" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? theme === "night"
            ? "bg-midnightNavy/90 backdrop-blur-xl border-b border-white/10"
            : "bg-white/90 backdrop-blur-xl border-b border-black/10 shadow-sm"
          : theme === "night"
            ? "bg-midnightNavy/20 backdrop-blur-sm"
            : "bg-white/30 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="relative group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={cn(
              "font-playfair text-2xl md:text-3xl font-light tracking-wider",
              "bg-gradient-to-r bg-clip-text text-transparent",
              theme === "night" 
                ? "from-white to-lilacHalo" 
                : isScrolled
                  ? "from-midnightNavy to-coral"
                  : "from-white to-white",
              "transition-all duration-300"
            )}>
              slunshine
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative font-inter text-sm font-light tracking-wide",
                  "transition-colors duration-300",
                  "hover:opacity-100",
                  isScrolled
                    ? theme === "night" 
                      ? "text-white/90 hover:text-white" 
                      : "text-midnightNavy/90 hover:text-midnightNavy"
                    : theme === "night"
                      ? "text-white/90 hover:text-white"
                      : "text-white/90 hover:text-white",
                  "after:content-[''] after:absolute after:bottom-[-4px] after:left-0",
                  "after:w-0 after:h-[1px] after:transition-all after:duration-300",
                  "hover:after:w-full",
                  theme === "night" 
                    ? "after:bg-lavaGlow" 
                    : isScrolled
                      ? "after:bg-coral"
                      : "after:bg-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Theme Toggle & Mobile Menu */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {mounted && (
              <button
                onClick={toggleTheme}
                className={cn(
                  "p-2.5 rounded-full transition-all duration-300",
                  "hover:scale-110 active:scale-95",
                  isScrolled
                    ? theme === "night"
                      ? "bg-white/10 hover:bg-white/20"
                      : "bg-black/5 hover:bg-black/10"
                    : "bg-white/10 hover:bg-white/20"
                )}
                aria-label="Toggle theme"
              >
                {theme === "night" ? (
                  <Sun className="w-5 h-5 text-white" />
                ) : (
                  <Moon className={cn(
                    "w-5 h-5",
                    isScrolled ? "text-midnightNavy" : "text-white"
                  )} />
                )}
              </button>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-2.5 rounded-full transition-all duration-300",
                "hover:scale-110 active:scale-95",
                isScrolled
                  ? theme === "night"
                    ? "bg-white/10 hover:bg-white/20"
                    : "bg-black/5 hover:bg-black/10"
                  : "bg-white/10 hover:bg-white/20"
              )}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className={cn(
                  "w-5 h-5",
                  theme === "night" 
                    ? "text-white" 
                    : isScrolled ? "text-midnightNavy" : "text-white"
                )} />
              ) : (
                <Menu className={cn(
                  "w-5 h-5",
                  theme === "night" 
                    ? "text-white" 
                    : isScrolled ? "text-midnightNavy" : "text-white"
                )} />
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
              className={cn(
                "md:hidden overflow-hidden",
                theme === "night" ? "bg-midnightNavy/95" : "bg-white/95",
                "backdrop-blur-xl rounded-b-2xl"
              )}
            >
              <div className="flex flex-col gap-1 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 font-inter text-sm font-light tracking-wide",
                      "transition-colors duration-200",
                      theme === "night"
                        ? "text-white/80 hover:text-white hover:bg-white/5"
                        : "text-midnightNavy/80 hover:text-midnightNavy hover:bg-black/5"
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
