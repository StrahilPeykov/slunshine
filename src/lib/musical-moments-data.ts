// src/lib/musical-moments-data.ts

export type MomentCategory = "practice" | "performance" | "teaching" | "inspiration" | "collaboration";
export type TimeFilter = "all" | "morning" | "golden" | "night";

export interface MusicalMoment {
  id: string;
  title: string;
  caption: string;
  category: MomentCategory;
  timeOfDay: TimeFilter;
  videoUrl: string;
  thumbnail: string;
  duration: string;
  location?: string;
  instrument?: string;
  mood: string;
  color: string;
  tags?: string[];
  date: string;
}

export const sampleMoments: MusicalMoment[] = [
  {
    id: "morning-reflections",
    title: "Morning Reflections",
    caption: "The strings whisper secrets that only the dawn can hear...",
    category: "practice",
    timeOfDay: "morning",
    videoUrl: "/videos/morning-practice.mp4",
    thumbnail: "/images/gallery/portrait-1.webp",
    duration: "0:23",
    location: "Home Studio",
    instrument: "Concert Harp",
    mood: "Serene",
    color: "from-amber-200 to-orange-300",
    tags: ["classical", "meditation", "sunrise"],
    date: "2024-03-15"
  },
  {
    id: "glissando-technique",
    title: "Technique in Motion",
    caption: "Every glissando tells a story of years of dedication",
    category: "teaching",
    timeOfDay: "golden",
    videoUrl: "/videos/technique-demo.mp4",
    thumbnail: "/images/gallery/harp-hands.webp",
    duration: "0:31",
    location: "Music School",
    instrument: "Salvi Harp",
    mood: "Focused",
    color: "from-purple-200 to-pink-300",
    tags: ["technique", "tutorial", "classical"],
    date: "2024-03-12"
  },
  {
    id: "backstage-ritual",
    title: "Backstage Ritual",
    caption: "The quiet moments before the storm of applause",
    category: "performance",
    timeOfDay: "night",
    videoUrl: "/videos/backstage.mp4",
    thumbnail: "/images/gallery/concert-prep.webp",
    duration: "0:18",
    location: "Sofia Concert Hall",
    instrument: "Concert Harp",
    mood: "Anticipation",
    color: "from-indigo-200 to-purple-300",
    tags: ["concert", "preparation", "backstage"],
    date: "2024-03-10"
  },
  {
    id: "student-discovery",
    title: "Student Discovery",
    caption: "Watching someone find their voice through the strings",
    category: "teaching",
    timeOfDay: "morning",
    videoUrl: "/videos/student-lesson.mp4",
    thumbnail: "/images/gallery/teaching-moment.webp",
    duration: "0:27",
    location: "Private Studio",
    instrument: "Student Harp",
    mood: "Joyful",
    color: "from-green-200 to-emerald-300",
    tags: ["teaching", "student", "breakthrough"],
    date: "2024-03-08"
  },
  {
    id: "improvised-dreams",
    title: "Improvised Dreams",
    caption: "When the heart speaks faster than the mind can follow",
    category: "inspiration",
    timeOfDay: "night",
    videoUrl: "/videos/improvisation.mp4",
    thumbnail: "/images/gallery/night-session.webp",
    duration: "0:41",
    location: "Home Studio",
    instrument: "Celtic Harp",
    mood: "Ethereal",
    color: "from-blue-200 to-cyan-300",
    tags: ["improvisation", "creativity", "celtic"],
    date: "2024-03-05"
  },
  {
    id: "duo-magic",
    title: "Duo Magic",
    caption: "Two instruments, one heartbeat",
    category: "collaboration",
    timeOfDay: "golden",
    videoUrl: "/videos/mila-collaboration.mp4",
    thumbnail: "/images/mila-concert.webp",
    duration: "0:33",
    location: "Recording Studio",
    instrument: "Piano & Harp",
    mood: "Harmonious",
    color: "from-rose-200 to-pink-300",
    tags: ["collaboration", "mila", "recording"],
    date: "2024-03-03"
  },
  {
    id: "string-meditation",
    title: "String Meditation",
    caption: "Finding peace in the vibration of each note",
    category: "practice",
    timeOfDay: "morning",
    videoUrl: "/videos/meditation.mp4",
    thumbnail: "/images/gallery/portrait-2.webp",
    duration: "0:45",
    location: "Garden Studio",
    instrument: "Concert Harp",
    mood: "Meditative",
    color: "from-teal-200 to-blue-300",
    tags: ["meditation", "peace", "morning"],
    date: "2024-02-28"
  },
  {
    id: "concert-finale",
    title: "Concert Finale",
    caption: "The final notes that linger in silence",
    category: "performance",
    timeOfDay: "night",
    videoUrl: "/videos/concert-finale.mp4",
    thumbnail: "/images/gallery/concert-stage.webp",
    duration: "0:29",
    location: "National Theatre",
    instrument: "Grand Concert Harp",
    mood: "Triumphant",
    color: "from-gold-200 to-amber-300",
    tags: ["concert", "finale", "classical"],
    date: "2024-02-25"
  }
];

export const categories = [
  { 
    id: "all" as const, 
    label: "All Moments", 
    icon: "✨",
    description: "Every musical journey"
  },
  { 
    id: "practice" as const, 
    label: "Practice", 
    icon: "🎵",
    description: "Daily dedication and growth"
  },
  { 
    id: "performance" as const, 
    label: "Performance", 
    icon: "🎭",
    description: "Live music and stage moments"
  },
  { 
    id: "teaching" as const, 
    label: "Teaching", 
    icon: "👩‍🏫",
    description: "Sharing knowledge and passion"
  },
  { 
    id: "inspiration" as const, 
    label: "Inspiration", 
    icon: "💫",
    description: "Creative sparks and discoveries"
  },
  { 
    id: "collaboration" as const, 
    label: "Collaborations", 
    icon: "🤝",
    description: "Musical partnerships and duets"
  },
];

export const timeFilters = [
  { 
    id: "all" as const, 
    label: "All Times", 
    emoji: "✨",
    description: "Any time of day"
  },
  { 
    id: "morning" as const, 
    label: "Morning Light", 
    emoji: "🌅",
    description: "Dawn practices and early sessions"
  },
  { 
    id: "golden" as const, 
    label: "Golden Hour", 
    emoji: "🌇",
    description: "Afternoon warmth and teaching"
  },
  { 
    id: "night" as const, 
    label: "Night Sessions", 
    emoji: "🌙",
    description: "Evening concerts and inspiration"
  },
];

// Helper functions for filtering and sorting
export const filterMomentsByCategory = (moments: MusicalMoment[], category: MomentCategory | "all") => {
  if (category === "all") return moments;
  return moments.filter(moment => moment.category === category);
};

export const filterMomentsByTime = (moments: MusicalMoment[], timeFilter: TimeFilter) => {
  if (timeFilter === "all") return moments;
  return moments.filter(moment => moment.timeOfDay === timeFilter);
};

export const sortMomentsByDate = (moments: MusicalMoment[], ascending = false) => {
  return [...moments].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return ascending ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
  });
};

export const getMomentsByMood = (moments: MusicalMoment[], mood: string) => {
  return moments.filter(moment => moment.mood.toLowerCase() === mood.toLowerCase());
};

export const getRandomMoment = (moments: MusicalMoment[]) => {
  return moments[Math.floor(Math.random() * moments.length)];
};

// Mood color mappings for consistent theming
export const moodColors = {
  "Serene": "from-amber-200 to-orange-300",
  "Focused": "from-purple-200 to-pink-300", 
  "Anticipation": "from-indigo-200 to-purple-300",
  "Joyful": "from-green-200 to-emerald-300",
  "Ethereal": "from-blue-200 to-cyan-300",
  "Harmonious": "from-rose-200 to-pink-300",
  "Meditative": "from-teal-200 to-blue-300",
  "Triumphant": "from-gold-200 to-amber-300"
} as const;