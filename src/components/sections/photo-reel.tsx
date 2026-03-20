"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/providers/theme-provider";
import { photoReelCopy, photoReelItems } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function PhotoReel() {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLLIElement | null>>([]);
  const frameRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const wheelLockRef = useRef(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateActiveCard = () => {
      if (window.innerWidth >= 768) return;

      const containerRect = container.getBoundingClientRect();
      const viewportCenterX = containerRect.left + containerRect.width / 2;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenterX - viewportCenterX);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveIndex((prev) => (prev === nearestIndex ? prev : nearestIndex));
    };

    const onScroll = () => {
      if (frameRef.current) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateActiveCard();
      });
    };

    updateActiveCard();
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveCard);

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveCard);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }
      if (event.key === "ArrowLeft") {
        setSlideDirection(-1);
        setSelectedIndex((prev) => {
          if (prev === null) return prev;
          return prev === 0 ? photoReelItems.length - 1 : prev - 1;
        });
      }
      if (event.key === "ArrowRight") {
        setSlideDirection(1);
        setSelectedIndex((prev) => {
          if (prev === null) return prev;
          return prev === photoReelItems.length - 1 ? 0 : prev + 1;
        });
      }
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex]);

  const showPreviousPhoto = () => {
    setSlideDirection(-1);
    setSelectedIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? photoReelItems.length - 1 : prev - 1;
    });
  };

  const showNextPhoto = () => {
    setSlideDirection(1);
    setSelectedIndex((prev) => {
      if (prev === null) return prev;
      return prev === photoReelItems.length - 1 ? 0 : prev + 1;
    });
  };

  const onFullscreenTouchStart = (event: { touches: ArrayLike<{ clientX: number }> }) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
  };

  const onFullscreenTouchEnd = (event: { changedTouches: ArrayLike<{ clientX: number }> }) => {
    if (touchStartXRef.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartXRef.current;
    const deltaX = endX - touchStartXRef.current;
    touchStartXRef.current = null;

    if (Math.abs(deltaX) < 40) return;
    if (deltaX > 0) {
      showPreviousPhoto();
    } else {
      showNextPhoto();
    }
  };

  const onFullscreenWheel = (event: { deltaX: number }) => {
    if (Math.abs(event.deltaX) < 20 || wheelLockRef.current) return;
    wheelLockRef.current = true;
    window.setTimeout(() => {
      wheelLockRef.current = false;
    }, 220);

    if (event.deltaX > 0) {
      showNextPhoto();
    } else {
      showPreviousPhoto();
    }
  };

  return (
    <section
      aria-label="Photo highlights"
      className="relative py-12 md:py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-6 md:mb-8">
          <h2
            className={cn(
              "font-playfair text-2xl md:text-3xl mb-2",
              theme === "night" ? "text-white" : "text-midnightNavy",
            )}
          >
            {photoReelCopy.title}
          </h2>
          <p className="text-foreground/60 max-w-2xl">{photoReelCopy.description}</p>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide scroll-smooth-x touch-pan-x"
      >
        <ul className="flex gap-4 md:gap-6 px-4 md:px-8 pb-2 w-max min-w-full">
          {photoReelItems.map((item, index) => (
            <li
              key={item.id}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className={cn(
                "group relative shrink-0 w-[58vw] max-w-[270px] md:w-[22vw] md:max-w-[300px]",
                "rounded-2xl overflow-hidden border shadow-xl snap-start",
                "transition-transform transition-opacity duration-350 motion-reduce:transition-none",
                index === activeIndex
                  ? "scale-105 opacity-100 z-10 md:scale-100 md:opacity-100 md:z-auto"
                  : "scale-90 opacity-55 md:scale-100 md:opacity-100",
                theme === "night"
                  ? "border-white/15 bg-white/5"
                  : "border-white bg-white/90",
              )}
            >
              <button
                type="button"
                onClick={() => {
                  setSlideDirection(1);
                  setSelectedIndex(index);
                }}
                className="relative block w-full text-left cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo"
                aria-label={`Open ${item.label} photo fullscreen`}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 58vw, (max-width: 1200px) 22vw, 300px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div
                  className={cn(
                    "absolute left-3 bottom-3 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide",
                    theme === "night" ? "bg-black/45 text-white" : "bg-white/90 text-midnightNavy",
                  )}
                >
                  {item.label}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Fullscreen photo viewer"
            onClick={() => setSelectedIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.22, ease: "easeOut" }}
          >
            <motion.button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 h-11 w-11 rounded-full bg-white/15 border border-white/30 text-white flex items-center justify-center hover:bg-white/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo"
              aria-label="Close fullscreen photo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: "easeOut" }}
            >
              <X className="h-5 w-5" />
            </motion.button>
            <motion.div
              className="w-full h-full max-w-6xl max-h-[88vh] flex flex-col"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={onFullscreenTouchStart}
              onTouchEnd={onFullscreenTouchEnd}
              onWheel={onFullscreenWheel}
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <AnimatePresence custom={slideDirection} mode="wait">
                <motion.div
                  key={selectedIndex}
                  custom={slideDirection}
                  className="flex flex-col h-full"
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { x: slideDirection > 0 ? 36 : -36, opacity: 0.35, scale: 0.98 }
                  }
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  exit={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { x: slideDirection > 0 ? -36 : 36, opacity: 0.25, scale: 0.985 }
                  }
                  transition={{ duration: prefersReducedMotion ? 0 : 0.26, ease: "easeOut" }}
                >
                  <div className="mb-3 md:mb-4 px-1">
                    <p className="text-white text-base md:text-lg font-medium">
                      {photoReelItems[selectedIndex].label}
                    </p>
                    <p className="text-white/80 text-sm md:text-base mt-1">
                      {photoReelItems[selectedIndex].imageAlt}
                    </p>
                  </div>

                  <div className="relative flex-1 min-h-0">
                    <Image
                      src={photoReelItems[selectedIndex].imageSrc}
                      alt={photoReelItems[selectedIndex].imageAlt}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
