export interface SiteMetadata {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteName: string;
  siteUrl: string;
  ogDescription: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export type SocialPlatform =
  | "instagram"
  | "tiktok"
  | "youtube"
  | "spotify"
  | "email";

export interface SocialLink {
  id: SocialPlatform;
  label: string;
  href: string;
  ariaLabel: string;
  handle?: string;
  external: boolean;
}

export interface SectionCopy {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export interface ReleaseItem {
  title: string;
  type: string;
  status: string;
  genre: string;
  description: string;
  releaseDate: string;
}

export interface VideoShowcaseItem {
  id: string;
  title: string;
  composer: string;
  venue: string;
}

export interface LessonOffering {
  id: "harp" | "piano" | "music-theory";
  title: string;
  description: string;
  gradient: string;
}

export interface LessonFeature {
  id: "all-levels" | "personalized-curriculum";
  text: string;
}

export interface PhotoReelItem {
  id: string;
  label: string;
  imageSrc: string;
  imageAlt: string;
}

export interface MomentPageCopy {
  title: string;
  emptyState: string;
  categoryHeading: string;
  timeHeading: string;
  scrollViewLabel: string;
  gridViewLabel: string;
}

export interface MomentItem {
  id: string;
  title: string;
  caption: string;
  category: string;
  date: string;
}

export interface SamplesPageCopy {
  title: string;
  description: string;
  lockMessage: string;
  previewNote: string;
}

export interface SoundSampleItem {
  id: string;
  title: string;
  category: string;
  texture: string;
  fullDuration: string;
  previewSeconds: number;
  previewUrl: string;
  locked: boolean;
  shape: "orb" | "squircle" | "petal" | "drip";
  gradient: string;
}

export const siteMetadata: SiteMetadata = {
  title: "SlunShine - Alexandrina Kushinchanova | Harpist & Music Artist",
  description:
    "Official website of Alexandrina 'Ally' Kushinchanova, Bulgarian harpist and music educator blending classical craft with contemporary color.",
  keywords: [
    "harpist",
    "music lessons",
    "Bulgarian musician",
    "harp teacher",
    "piano lessons",
    "music theory lessons",
    "ethereal music",
  ],
  author: "Strahil Peykov",
  siteName: "SlunShine",
  siteUrl: "https://slunshine.com",
  ogDescription: "The Harp Lady",
};

export const momentsMetadata = {
  title: "Musical Moments | SlunShine",
  description:
    "Intimate glimpses into sound and emotion through practice, performance, and inspiration.",
  keywords: [
    "musical moments",
    "harp videos",
    "practice sessions",
    "musical inspiration",
    "harpist journey",
  ],
} as const;

export const samplesMetadata = {
  title: "Sound Samples | SlunShine",
  description:
    "Preview custom sound samples and performance recordings crafted for producers, storytellers, and collaborators.",
  keywords: [
    "sound samples",
    "harp sample pack",
    "custom compositions",
    "vocal stems",
    "classical recordings",
  ],
} as const;

export const navigationItems: ReadonlyArray<NavItem> = [
  { href: "#home", label: "Home" },
  { href: "#music", label: "Listen" },
  { href: "/samples", label: "Samples" },
  { href: "/moments", label: "Moments" },
  { href: "#about", label: "About" },
  { href: "#lessons", label: "Lessons" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks: Record<SocialPlatform, SocialLink> = {
  instagram: {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/slun_shine",
    ariaLabel: "Open Instagram profile",
    handle: "@slun_shine",
    external: true,
  },
  tiktok: {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@slun_shine",
    ariaLabel: "Open TikTok profile",
    handle: "@slun_shine",
    external: true,
  },
  youtube: {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@slunshine_harp",
    ariaLabel: "Open YouTube channel",
    handle: "@slunshine_harp",
    external: true,
  },
  spotify: {
    id: "spotify",
    label: "Spotify",
    href: "https://open.spotify.com/user/akartu113?si=e0ed233e08044e48",
    ariaLabel: "Open Spotify profile",
    external: true,
  },
  email: {
    id: "email",
    label: "Email",
    href: "mailto:okami4aj@gmail.com",
    ariaLabel: "Send an email to Alexandrina",
    handle: "okami4aj@gmail.com",
    external: false,
  },
};

export const footerCopy = {
  copyrightName: "Alexandrina Kushinchanova",
  signature: "Designed & Built by Strahil Peykov",
} as const;

export const heroCopy = {
  firstName: "Alexandrina",
  lastName: "Kushinchanova",
  role: "The Harp Lady",
  announcement: "New Single “Lubov, Lubov” Coming Soon",
  primaryCta: "Listen to My Music",
  secondaryCta: "Explore My World",
} as const;

export const photoReelCopy = {
  title: "Highlights",
  description: "Swipe to explore",
} as const;

export const photoReelItems: ReadonlyArray<PhotoReelItem> = [
  {
    id: "band-pic",
    label: "Band",
    imageSrc: "/images/band-pic.jpeg",
    imageAlt: "Alexandrina with band members",
  },
  {
    id: "festive-stage-performance",
    label: "Live",
    imageSrc: "/images/festive-stage-performance.jpeg",
    imageAlt: "Alexandrina performing on a festive stage",
  },
  {
    id: "harp-fancy-stage",
    label: "Stage",
    imageSrc: "/images/harp-fancy-stage.jpeg",
    imageAlt: "Alexandrina with harp on stage",
  },
  {
    id: "harp-floral",
    label: "Floral",
    imageSrc: "/images/harp-floral.jpeg",
    imageAlt: "Alexandrina posing with harp in a floral setting",
  },
  {
    id: "harp-pretty",
    label: "Portrait",
    imageSrc: "/images/harp-pretty.jpeg",
    imageAlt: "Alexandrina portrait with harp",
  },
  {
    id: "harp-sunset",
    label: "Sunset",
    imageSrc: "/images/harp-sunset.jpeg",
    imageAlt: "Alexandrina with harp at sunset",
  },
  {
    id: "harp-view",
    label: "View",
    imageSrc: "/images/harp-view.jpeg",
    imageAlt: "Alexandrina with harp and scenic view",
  },
  {
    id: "piano-on-stage",
    label: "Piano",
    imageSrc: "/images/piano-on-stage.jpeg",
    imageAlt: "Alexandrina playing piano on stage",
  },
  {
    id: "playing-harp-in-church",
    label: "Church",
    imageSrc: "/images/playing-harp-in-church.jpeg",
    imageAlt: "Alexandrina playing harp in a church",
  },
  {
    id: "playing-harp-museum",
    label: "Museum",
    imageSrc: "/images/playing-harp-museum.jpeg",
    imageAlt: "Alexandrina playing harp in a museum-like interior",
  },
  {
    id: "harp-cosplay-elf",
    label: "Fantasy",
    imageSrc: "/images/harp-cosplay-elf.jpeg",
    imageAlt: "Alexandrina in a fantasy-inspired harp portrait",
  },
  {
    id: "portrait-1",
    label: "Sky",
    imageSrc: "/images/gallery/portrait-1.webp",
    imageAlt: "Alexandrina portrait against a bright blue sky",
  },
  {
    id: "portrait-2",
    label: "Editorial",
    imageSrc: "/images/gallery/portrait-2.webp",
    imageAlt: "Alexandrina in a stylized editorial portrait",
  },
  {
    id: "portrait-3",
    label: "Motion",
    imageSrc: "/images/gallery/portrait-3.webp",
    imageAlt: "Alexandrina in an expressive outdoor portrait",
  },
  {
    id: "mila-concert",
    label: "Concert",
    imageSrc: "/images/mila-concert.webp",
    imageAlt: "Alexandrina performing in concert",
  },
  {
    id: "hero-church",
    label: "Classic",
    imageSrc: "/images/hero-church.webp",
    imageAlt: "Alexandrina with harp in a church setting",
  },
];

export const musicSectionCopy: SectionCopy = {
  id: "music",
  title: "Sound & Vision",
  description: "New music blooming from classical roots",
};

export const musicReleases: ReadonlyArray<ReleaseItem> = [
  {
    title: "Lubov, Lubov",
    type: "Single",
    status: "Coming Soon",
    genre: "R&B / Indie Pop",
    description: "A journey through love's ethereal landscapes.",
    releaseDate: "Coming Soon",
  },
  {
    title: "Untitled EP",
    type: "EP",
    status: "In Production",
    genre: "Alternative",
    description: "A bridge between classical texture and modern pulse.",
    releaseDate: "In Development",
  },
];

export const musicVideos: ReadonlyArray<VideoShowcaseItem> = [
  {
    id: "JfsKB1BtVeg",
    title: "La Source",
    composer: "Albert Zabel",
    venue: "Sofia, 2023",
  },
  {
    id: "taDWIhIGh0Q",
    title: "Concert Etude",
    composer: "F. Godefroid",
    venue: "Paris, 2019",
  },
  {
    id: "82YMLy-Nw68",
    title: "Introduction and Allegro",
    composer: "Maurice Ravel",
    venue: "Sofia, 2024",
  },
];

export const musicCurrentWorkCopy = {
  title: "On Stage & In Studio",
  description:
    "Currently performing with Bulgarian indie artist Mila Robert as pianist and backing vocalist, while writing and recording solo work.",
  ctaLabel: "Follow",
  imageAlt: "Performing with Mila Robert",
} as const;

export const aboutSectionCopy: SectionCopy = {
  id: "about",
  title: "The Story",
};

export const aboutStoryParagraphs: ReadonlyArray<string> = [
  "I picked up a harp at ten, and it set my path from the start.",
  "Today I perform, teach, and write music, staying rooted in classical technique while making room for new ideas.",
];

export const aboutCurrentItems: ReadonlyArray<string> = [
  "Performing and touring as a professional musician",
  "Teaching harp, piano, and music theory",
  "Creating original music for upcoming releases",
];

export const lessonsSectionCopy: SectionCopy = {
  id: "lessons",
  title: "Share the Magic",
  description: "Private lessons tailored to your musical journey",
};

export const lessonOfferings: ReadonlyArray<LessonOffering> = [
  {
    id: "harp",
    title: "Harp",
    description: "From first touch to concert stage",
    gradient: "from-babyPink to-coral",
  },
  {
    id: "piano",
    title: "Piano",
    description: "Classical to contemporary styles",
    gradient: "from-coral to-lavaGlow",
  },
  {
    id: "music-theory",
    title: "Music Theory",
    description: "Understand the language of music",
    gradient: "from-lavaGlow to-babyPink",
  },
];

export const lessonFeatures: ReadonlyArray<LessonFeature> = [
  { id: "all-levels", text: "All ages & levels welcome" },
  { id: "personalized-curriculum", text: "Personalized curriculum" },
];

export const lessonCardCopy = {
  title: "Learn With Me",
  description:
    "Whether you're touching strings for the first time or preparing for conservatory, I guide each student with patience, precision, and care.",
  testimonial:
    "“Ally makes complex theory feel like discovering hidden treasures in music.”",
  testimonialAuthor: "Maria, theory student",
  ctaPrompt: "Ready to start your musical journey?",
  ctaLabel: "Let's Talk",
} as const;

export const contactSectionCopy: SectionCopy = {
  id: "contact",
  title: "Let's Connect",
  description:
    "For collaborations, performances, lessons, or simply to say hello.",
};

export const contactCopy = {
  instagramCta: "Follow for updates",
  emailCta: "Send a message",
  responseNote: "I’ll get back to you as soon as possible.",
} as const;

export const momentsPageCopy: MomentPageCopy = {
  title: "Musical Moments",
  emptyState: "No moments match this filter combination yet.",
  categoryHeading: "Categories",
  timeHeading: "Time of Day",
  scrollViewLabel: "Scroll View",
  gridViewLabel: "Grid View",
};

export const samplesPageCopy: SamplesPageCopy = {
  title: "Sound Samples Vault",
  description:
    "A curated collection of harp textures, vocal lines, and cinematic fragments. Each piece has a short preview; full recordings are locked for producer licensing.",
  lockMessage: "Full version locked. Purchase flow is coming soon.",
  previewNote: "Preview mode plays only the opening seconds.",
};

export const soundSamples: ReadonlyArray<SoundSampleItem> = [
  {
    id: "moon-river-harp",
    title: "Moon River Harp Theme",
    category: "Harp",
    texture: "dreamy, cinematic",
    fullDuration: "2:38",
    previewSeconds: 10,
    previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    locked: true,
    shape: "orb",
    gradient: "from-babyPink/80 via-coral/50 to-aquaMist/70",
  },
  {
    id: "glass-vocal-pad",
    title: "Glass Vocal Pad",
    category: "Vocals",
    texture: "airy, ambient",
    fullDuration: "1:54",
    previewSeconds: 8,
    previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    locked: true,
    shape: "petal",
    gradient: "from-coral/70 via-lavaGlow/50 to-babyPink/75",
  },
  {
    id: "nocturne-pulse",
    title: "Nocturne Pulse",
    category: "Classical Crossover",
    texture: "rhythmic, dramatic",
    fullDuration: "3:12",
    previewSeconds: 12,
    previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    locked: true,
    shape: "drip",
    gradient: "from-aquaMist/70 via-babyPink/60 to-coral/70",
  },
  {
    id: "chamber-lullaby",
    title: "Chamber Lullaby",
    category: "Instrumental",
    texture: "soft, intimate",
    fullDuration: "2:05",
    previewSeconds: 9,
    previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    locked: true,
    shape: "squircle",
    gradient: "from-lavaGlow/65 via-coral/50 to-babyPink/75",
  },
];
