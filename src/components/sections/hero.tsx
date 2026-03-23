"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { SocialLinks } from "@/components/common/social-links";
import { useTheme } from "@/components/providers/theme-provider";
import { heroCopy } from "@/content/site-content";
import { cn } from "@/lib/utils";
import { ArrowDown, Play } from "lucide-react";

const INK_PARTICLES = [
  { left: "12%", top: "24%", delay: 0, duration: 4.1 },
  { left: "22%", top: "33%", delay: 0.9, duration: 4.8 },
  { left: "39%", top: "20%", delay: 1.5, duration: 4.3 },
  { left: "58%", top: "29%", delay: 0.3, duration: 5.2 },
  { left: "67%", top: "21%", delay: 1.2, duration: 4.6 },
  { left: "76%", top: "38%", delay: 0.7, duration: 5.4 },
  { left: "83%", top: "18%", delay: 0.1, duration: 4.9 },
  { left: "48%", top: "44%", delay: 1.8, duration: 5.1 },
];

export function Hero() {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const isNight = theme === "night";

  const scrollToNextSection = () => {
    const next = sectionRef.current?.nextElementSibling;
    if (next instanceof HTMLElement) {
      next.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative isolate min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-church.webp"
          alt="Alexandrina performing on harp"
          fill
          priority
          sizes="100vw"
          className={cn(
            "h-full w-full object-cover object-center md:object-[center_34%]",
            isNight
              ? "[filter:brightness(1.12)_contrast(1.06)_saturate(1.08)]"
              : "[filter:brightness(1.03)_contrast(1.02)]",
          )}
        />
      </div>

      <div
        className={cn(
          "absolute inset-0 -z-10",
          isNight
            ? "bg-[radial-gradient(circle_at_48%_37%,rgba(94,124,171,0.2),rgba(4,9,24,0.72)_45%,rgba(2,5,14,0.86)_76%)]"
            : "bg-[radial-gradient(circle_at_52%_30%,rgba(255,248,240,0.26),rgba(110,142,182,0.3)_34%,rgba(18,37,63,0.66)_74%)]",
        )}
      />

      <div
        className={cn(
          "absolute inset-0 -z-10",
          isNight
            ? "bg-[linear-gradient(180deg,rgba(2,8,18,0.4)_8%,rgba(2,8,18,0.12)_46%,rgba(2,8,18,0.64)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(242,237,229,0.24)_0%,rgba(28,52,83,0.3)_44%,rgba(16,34,60,0.5)_72%,rgba(255,252,250,0.78)_100%)]",
        )}
      />

      {!isNight && (
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_38%,rgba(8,24,44,0.36)_0%,rgba(8,24,44,0.18)_32%,rgba(8,24,44,0)_66%)]" />
      )}

      {!prefersReducedMotion && (
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {INK_PARTICLES.map((particle) => (
            <motion.span
              key={`${particle.left}-${particle.top}`}
              className="absolute h-1 w-1 rounded-full bg-white/65 blur-[0.5px]"
              style={{ left: particle.left, top: particle.top }}
              animate={{ opacity: [0.2, 0.95, 0.3], scale: [1, 1.8, 1] }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      )}

      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-[-1px] z-0 h-[28vh]",
          isNight
            ? "bg-[linear-gradient(180deg,rgba(4,10,18,0)_0%,rgba(2,6,15,0.44)_42%,rgba(1,3,10,0.84)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(255,252,250,0)_0%,rgba(255,252,250,0.38)_72%,rgba(255,252,250,0.97)_100%)]",
        )}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-4 pb-24 pt-28 text-center md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.9 }}
          className="w-full max-w-4xl"
        >
          <motion.h1
            className={cn(
              "mx-auto max-w-[15ch] font-qwigley text-[clamp(3.75rem,10vw,8rem)] leading-[0.88] tracking-[0.01em]",
              isNight
                ? "text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
                : "text-[rgb(252,248,240)] [text-shadow:0_3px_0_rgba(8,18,34,0.22),0_12px_28px_rgba(8,18,34,0.55)]",
            )}
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1.1, delay: prefersReducedMotion ? 0 : 0.2 }}
          >
            <span className="block">{heroCopy.firstName}</span>
            <span className="mt-1 block md:mt-1.5">{heroCopy.lastName}</span>
          </motion.h1>

          <motion.p
            className={cn(
              "mt-1 font-qwigley text-[2rem] leading-[0.95] sm:text-[2.45rem] md:text-[2.95rem]",
              isNight
                ? "text-white/78"
                : "text-[rgb(250,246,238)] [text-shadow:0_8px_18px_rgba(8,18,34,0.5)]",
            )}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.35 }}
          >
            {heroCopy.role}
          </motion.p>

          <motion.div
            className="mt-7 flex justify-center"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: prefersReducedMotion ? 0 : 0.45 }}
          >
            <p
              className={cn(
                "inline-flex items-center gap-3 rounded-full px-5 py-2 text-[0.73rem] font-inter uppercase tracking-[0.27em] backdrop-blur-sm",
                isNight
                  ? "border border-white/25 bg-black/35 text-white/85"
                  : "border border-[rgba(20,40,66,0.4)] bg-[rgba(255,252,248,0.72)] text-[rgb(20,40,66)]",
              )}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  isNight ? "bg-white/90" : "bg-[rgb(20,40,66)]",
                )}
                aria-hidden
              />
              {heroCopy.announcement}
            </p>
          </motion.div>

          <motion.div
            className="mt-11 flex flex-col items-center justify-center gap-5 sm:flex-row"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.75, delay: prefersReducedMotion ? 0 : 0.55 }}
          >
            <a
              href="#music"
              className="group relative isolate inline-flex min-w-[12rem] items-center justify-center px-8 py-3.5 text-center"
            >
              <span
                className={cn(
                  "pointer-events-none absolute inset-0 rounded-[0.15rem] transition-transform duration-300 group-hover:rotate-[-0.5deg]",
                  isNight
                    ? "border border-white/70"
                    : "border border-[rgba(242,236,226,0.74)] bg-[rgba(12,30,53,0.4)]",
                )}
              />
              <span
                className={cn(
                  "pointer-events-none absolute inset-0 rounded-[0.15rem] translate-x-[2px] translate-y-[2px] transition-transform duration-300 group-hover:translate-x-[3px] group-hover:translate-y-[3px]",
                  isNight ? "border border-white/35" : "border border-[rgba(242,236,226,0.34)]",
                )}
              />
              <span
                className={cn(
                  "relative inline-flex items-center gap-2.5 font-qwigley text-[2.25rem] leading-none sm:text-[2.45rem]",
                  isNight
                    ? "text-white"
                    : "text-[rgb(246,240,230)] drop-shadow-[0_2px_6px_rgba(5,14,26,0.35)]",
                )}
              >
                <Play
                  className={cn(
                    "h-4 w-4",
                    isNight ? "text-white/90" : "text-[rgb(246,240,230)]",
                  )}
                />
                {heroCopy.primaryCta}
              </span>
            </a>

            <a
              href="#about"
              className={cn(
                "font-qwigley text-[2.75rem] leading-none underline-offset-8 transition-colors duration-300 hover:underline sm:text-[3.15rem]",
                isNight
                  ? "text-white/85 hover:text-white"
                  : "text-[rgb(246,240,230)]/96 drop-shadow-[0_2px_6px_rgba(5,14,26,0.35)] hover:text-[rgb(255,250,242)]",
              )}
            >
              {heroCopy.secondaryCta}
            </a>
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.75, delay: prefersReducedMotion ? 0 : 0.7 }}
          >
            <SocialLinks
              size="sm"
              className="gap-2.5"
              itemClassName={cn(
                "backdrop-blur-sm",
                isNight
                  ? "border border-white/30 bg-black/35 hover:bg-black/45"
                  : "border border-[rgba(14,30,52,0.28)] bg-[rgba(255,252,247,0.65)] hover:bg-[rgba(255,252,247,0.86)]",
              )}
            />
          </motion.div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={scrollToNextSection}
        className={cn(
          "absolute left-1/2 -translate-x-1/2 bottom-8 z-20",
          "inline-flex h-11 w-11 items-center justify-center rounded-full",
          isNight
            ? "border border-white/45 bg-black/30 backdrop-blur-sm"
            : "border border-[rgba(14,30,52,0.45)] bg-[rgba(255,252,247,0.78)] backdrop-blur-sm",
          "cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
          prefersReducedMotion ? "animate-none" : "motion-safe:animate-bounce",
        )}
        aria-label="Scroll to next section"
      >
        <ArrowDown
          className={cn("h-4 w-4", isNight ? "text-white/90" : "text-[rgb(14,30,52)]")}
          aria-hidden
        />
      </button>
    </section>
  );
}
