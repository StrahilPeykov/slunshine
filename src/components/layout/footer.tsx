"use client";

import { BrandWordmark } from "@/components/common/brand-wordmark";
import { SocialLinks } from "@/components/common/social-links";
import { footerCopy } from "@/content/site-content";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={cn(
        "py-16 relative",
        theme === "night" ? "bg-midnightNavy" : "bg-white/50",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="hidden md:flex items-center justify-between">
            <div className="flex-shrink-0">
              <BrandWordmark />
            </div>

            <div className="text-center">
              <p className="text-sm text-foreground/50">
                © {new Date().getFullYear()} {footerCopy.copyrightName}
              </p>
              <p className="text-xs text-foreground/70 mt-1">
                {footerCopy.signature}
              </p>
            </div>

            <SocialLinks />
          </div>

          <div className="md:hidden text-center space-y-6">
            <div className="flex justify-center">
              <BrandWordmark />
            </div>

            <div className="flex justify-center">
              <SocialLinks size="md" platforms={["instagram", "tiktok", "spotify"]} />
            </div>

            <div className="text-center">
              <p className="text-sm text-foreground/50">
                © {new Date().getFullYear()} {footerCopy.copyrightName}
              </p>
              <p className="text-xs text-foreground/70 mt-1">
                {footerCopy.signature}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
