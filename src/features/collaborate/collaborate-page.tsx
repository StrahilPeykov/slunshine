"use client";

import { Check, Mail, Play } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { SamplesTable } from "@/components/sections/collaborate/samples-table";
import { SocialLinks } from "@/components/common/social-links";
import {
  collaborateCopy,
  musicVideos,
  socialLinks,
} from "@/content/site-content";
import { cn } from "@/lib/utils";

export function CollaboratePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main id="main-content" className="relative overflow-x-hidden px-4 pt-[5.6rem] pb-20 md:pt-28">
        <div className="pointer-events-none absolute -top-14 left-[-8%] w-80 h-80 rounded-full bg-lilacHalo/20 blur-3xl" />
        <div className="pointer-events-none absolute top-[30%] right-[-10%] w-96 h-96 rounded-full bg-babyPink/35 blur-3xl" />

        <section className="container mx-auto max-w-5xl">
          {/* Intro */}
          <header className="mb-12 max-w-3xl space-y-4 md:mb-16">
            <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/70 md:text-xs">
              {collaborateCopy.eyebrow}
            </p>
            <h1 className="font-cormorant text-[clamp(2.25rem,9vw,3.5rem)] font-light leading-[1.05]">
              {collaborateCopy.title}
            </h1>
            <p className="max-w-[62ch] text-[1rem] leading-relaxed text-foreground/75 md:text-lg">
              {collaborateCopy.intro}
            </p>
          </header>

          {/* What I bring / looking for */}
          <div className="mb-14 grid gap-6 md:grid-cols-2 md:gap-8">
            <InfoList title={collaborateCopy.bringTitle} items={collaborateCopy.bring} />
            <InfoList
              title={collaborateCopy.lookingForTitle}
              items={collaborateCopy.lookingFor}
            />
          </div>

          {/* Hear & watch */}
          <div className="mb-14">
            <h2 className="font-playfair text-2xl mb-2">{collaborateCopy.watchTitle}</h2>
            <p className="mb-6 max-w-[60ch] text-sm text-foreground/70">
              {collaborateCopy.watchNote}
            </p>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {musicVideos.map((video) => (
                <a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-video overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo"
                  aria-label={`Watch ${video.title} on YouTube`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-0.5 h-6 w-6 text-white" />
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-medium text-white">{video.title}</h3>
                    <p className="text-sm text-white/70">
                      {video.composer} • {video.venue}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6">
              <SocialLinks platforms={["spotify", "youtube", "instagram", "tiktok"]} />
            </div>
          </div>

          {/* Sample library (placeholders) */}
          <div className="mb-14">
            <SamplesTable />
          </div>

          {/* CTA */}
          <div className="rounded-3xl border border-foreground/15 bg-card p-8 text-center backdrop-blur-sm md:p-12">
            <h2 className="font-cormorant text-2xl font-light md:text-3xl">
              {collaborateCopy.ctaTitle}
            </h2>
            <a
              href={socialLinks.email.href}
              className={cn(
                "mt-6 inline-flex items-center gap-2 rounded-full bg-midnightNavy px-7 py-3.5 text-sm font-medium text-white transition-all",
                "hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilacHalo",
              )}
            >
              <Mail className="h-4 w-4" />
              {collaborateCopy.ctaLabel}
            </a>
            <p className="mt-4 text-sm text-foreground/70">{socialLinks.email.handle}</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function InfoList({ title, items }: { title: string; items: ReadonlyArray<string> }) {
  return (
    <div className="rounded-2xl border border-foreground/15 bg-card p-6 md:p-8">
      <h2 className="font-playfair text-xl mb-5">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-foreground/80">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral" aria-hidden />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
