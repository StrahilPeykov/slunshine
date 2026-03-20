"use client";

import Image from "next/image";
import { useTheme } from "@/components/providers/theme-provider";
import { photoReelCopy, photoReelItems } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function PhotoReel() {
  const { theme } = useTheme();
  const reelItems = [...photoReelItems, ...photoReelItems];

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

      <div className="overflow-x-auto scrollbar-hide scroll-smooth-x touch-pan-x">
        <ul className="flex gap-4 md:gap-6 px-4 md:px-8 pb-2 w-max min-w-full">
          {reelItems.map((item, index) => (
            <li
              key={`${item.id}-${index}`}
              className={cn(
                "group relative shrink-0 w-[58vw] max-w-[270px] md:w-[22vw] md:max-w-[300px]",
                "rounded-2xl overflow-hidden border shadow-xl snap-start",
                theme === "night"
                  ? "border-white/15 bg-white/5"
                  : "border-white bg-white/90",
              )}
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
