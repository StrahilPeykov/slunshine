import type { MomentCategory, MusicalMoment, TimeFilter } from "@/lib/musical-moments-data";

export type ThemeMode = "day" | "night";
export type ViewMode = "scroll" | "grid";

export interface FilterState {
  activeCategory: MomentCategory | "all";
  activeTimeFilter: TimeFilter;
}

export interface PlaybackState {
  playingVideo: string | null;
  videoErrors: Record<string, boolean>;
  imageErrors: Record<string, boolean>;
}

export interface MomentMediaResolvers {
  resolvePoster: (moment: MusicalMoment) => string;
  resolveVideo: (moment: MusicalMoment) => string;
}
