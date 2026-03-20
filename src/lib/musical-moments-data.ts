export type MomentCategory =
  | "practice"
  | "performance"
  | "teaching"
  | "inspiration"
  | "collaboration";

export type TimeFilter = "all" | "morning" | "golden" | "night";

export interface MusicalMoment {
  id: string;
  title: string;
  caption: string;
  category: MomentCategory;
  timeOfDay: Exclude<TimeFilter, "all">;
  videoUrl: string;
  thumbnail: string;
  duration: string;
  location?: string;
  instrument?: string;
  mood: string;
  color: string;
  date: string;
}

export const DEFAULT_MOMENT_THUMBNAIL = "/images/gallery/portrait-1.webp";
export const DEFAULT_MOMENT_VIDEO = "/videos/harp-strings.mp4";

export const sampleMoments: MusicalMoment[] = [
  {
    id: "morning-reflections",
    title: "Morning Reflections",
    caption: "The strings whisper secrets that only dawn can hear.",
    category: "practice",
    timeOfDay: "morning",
    videoUrl: "/videos/harp-strings.mp4",
    thumbnail: "/images/gallery/portrait-1.webp",
    duration: "0:23",
    location: "Home Studio",
    instrument: "Concert Harp",
    mood: "Serene",
    color: "from-amber-200 to-orange-300",
    date: "2024-03-15",
  },
  {
    id: "glissando-technique",
    title: "Technique in Motion",
    caption: "Every glissando tells a story of years of dedication.",
    category: "teaching",
    timeOfDay: "golden",
    videoUrl: "/videos/harp-strings.mp4",
    thumbnail: "/images/gallery/portrait-2.webp",
    duration: "0:31",
    location: "Music School",
    instrument: "Salvi Harp",
    mood: "Focused",
    color: "from-purple-200 to-pink-300",
    date: "2024-03-12",
  },
  {
    id: "backstage-ritual",
    title: "Backstage Ritual",
    caption: "The quiet moments before the storm of applause.",
    category: "performance",
    timeOfDay: "night",
    videoUrl: "/videos/mila-concert.mp4",
    thumbnail: "/images/gallery/portrait-3.webp",
    duration: "0:18",
    location: "Sofia Concert Hall",
    instrument: "Concert Harp",
    mood: "Anticipation",
    color: "from-indigo-200 to-purple-300",
    date: "2024-03-10",
  },
  {
    id: "student-discovery",
    title: "Student Discovery",
    caption: "Watching someone find their voice through the strings.",
    category: "teaching",
    timeOfDay: "morning",
    videoUrl: "/videos/harp-strings.mp4",
    thumbnail: "/images/gallery/portrait-1.webp",
    duration: "0:27",
    location: "Private Studio",
    instrument: "Student Harp",
    mood: "Joyful",
    color: "from-green-200 to-emerald-300",
    date: "2024-03-08",
  },
  {
    id: "improvised-dreams",
    title: "Improvised Dreams",
    caption: "When the heart speaks faster than the mind can follow.",
    category: "inspiration",
    timeOfDay: "night",
    videoUrl: "/videos/harp-strings.mp4",
    thumbnail: "/images/gallery/portrait-2.webp",
    duration: "0:41",
    location: "Home Studio",
    instrument: "Celtic Harp",
    mood: "Ethereal",
    color: "from-blue-200 to-cyan-300",
    date: "2024-03-05",
  },
  {
    id: "duo-magic",
    title: "Duo Magic",
    caption: "Two instruments, one heartbeat.",
    category: "collaboration",
    timeOfDay: "golden",
    videoUrl: "/videos/mila-concert.mp4",
    thumbnail: "/images/mila-concert.webp",
    duration: "0:33",
    location: "Recording Studio",
    instrument: "Piano and Harp",
    mood: "Harmonious",
    color: "from-rose-200 to-pink-300",
    date: "2024-03-03",
  },
];

export const categories: ReadonlyArray<{
  id: MomentCategory | "all";
  label: string;
  icon: string;
}> = [
  {
    id: "all",
    label: "All Moments",
    icon: "✨",
  },
  {
    id: "practice",
    label: "Practice",
    icon: "🎵",
  },
  {
    id: "performance",
    label: "Performance",
    icon: "🎭",
  },
  {
    id: "teaching",
    label: "Teaching",
    icon: "👩‍🏫",
  },
  {
    id: "inspiration",
    label: "Inspiration",
    icon: "💫",
  },
  {
    id: "collaboration",
    label: "Collaborations",
    icon: "🤝",
  },
];

export const timeFilters: ReadonlyArray<{
  id: TimeFilter;
  label: string;
  emoji: string;
}> = [
  {
    id: "all",
    label: "All Times",
    emoji: "✨",
  },
  {
    id: "morning",
    label: "Morning Light",
    emoji: "🌅",
  },
  {
    id: "golden",
    label: "Golden Hour",
    emoji: "🌇",
  },
  {
    id: "night",
    label: "Night Sessions",
    emoji: "🌙",
  },
];

export const filterMomentsByCategory = (
  moments: MusicalMoment[],
  category: MomentCategory | "all",
) => {
  if (category === "all") return moments;
  return moments.filter((moment) => moment.category === category);
};

export const filterMomentsByTime = (
  moments: MusicalMoment[],
  timeFilter: TimeFilter,
) => {
  if (timeFilter === "all") return moments;
  return moments.filter((moment) => moment.timeOfDay === timeFilter);
};

export const sortMomentsByDate = (
  moments: MusicalMoment[],
  ascending = false,
) => {
  return [...moments].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return ascending
      ? dateA.getTime() - dateB.getTime()
      : dateB.getTime() - dateA.getTime();
  });
};
