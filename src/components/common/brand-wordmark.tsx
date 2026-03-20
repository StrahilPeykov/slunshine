"use client";

import { useId } from "react";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

interface BrandWordmarkProps {
  width?: number;
  height?: number;
  viewBox?: string;
  className?: string;
}

export function BrandWordmark({
  width = 150,
  height = 40,
  viewBox = "0 0 150 40",
  className,
}: BrandWordmarkProps) {
  const { theme } = useTheme();
  const gradientId = useId();

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      className={cn("transition-all duration-300", className)}
      aria-label="SlunShine"
      role="img"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={theme === "night" ? "#fff" : "#0E1A2A"} />
          <stop
            offset="50%"
            stopColor={theme === "night" ? "#C9A8FF" : "#FF8875"}
          />
          <stop
            offset="100%"
            stopColor={theme === "night" ? "#fff" : "#0E1A2A"}
          />
        </linearGradient>
      </defs>
      <text
        x="75"
        y="28"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "30px",
          fontWeight: 300,
          fill: `url(#${gradientId})`,
        }}
      >
        slun<tspan style={{ letterSpacing: "-0.05em" }}>sh</tspan>ine
      </text>
    </svg>
  );
}
