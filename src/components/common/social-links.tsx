"use client";

import { Instagram, Mail } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { socialLinks, type SocialPlatform } from "@/content/site-content";
import { cn } from "@/lib/utils";

type SocialLinksSize = "sm" | "md";

interface SocialIconProps {
  platform: SocialPlatform;
  className?: string;
}

interface SocialLinksProps {
  platforms?: SocialPlatform[];
  className?: string;
  itemClassName?: string;
  size?: SocialLinksSize;
}

const sizeClassMap: Record<SocialLinksSize, { container: string; icon: string }> = {
  sm: {
    container: "p-2.5",
    icon: "w-4 h-4",
  },
  md: {
    container: "p-3",
    icon: "w-5 h-5",
  },
};

export function SocialIcon({ platform, className }: SocialIconProps) {
  switch (platform) {
    case "instagram":
      return <Instagram className={className} aria-hidden="true" />;
    case "tiktok":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.51V5.8a4.84 4.84 0 0 1-.86-.09z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "spotify":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      );
    case "email":
      return <Mail className={className} aria-hidden="true" />;
    default:
      return null;
  }
}

export function SocialLinks({
  platforms = ["instagram", "tiktok", "youtube", "spotify"],
  className,
  itemClassName,
  size = "sm",
}: SocialLinksProps) {
  const { theme } = useTheme();
  const sizeClasses = sizeClassMap[size];

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {platforms.map((platform) => {
        const link = socialLinks[platform];

        return (
          <a
            key={platform}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className={cn(
              sizeClasses.container,
              "rounded-full transition-all duration-300",
              "hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
              theme === "night"
                ? "bg-white/10 hover:bg-white/20"
                : "bg-black/5 hover:bg-black/10",
              itemClassName,
            )}
            aria-label={link.ariaLabel}
          >
            <SocialIcon
              platform={platform}
              className={cn(
                sizeClasses.icon,
                theme === "night" ? "text-white" : "text-midnightNavy",
              )}
            />
          </a>
        );
      })}
    </div>
  );
}
