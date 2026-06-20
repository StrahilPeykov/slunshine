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
  /** Drop a short teaser clip in /public and set its path here to render an inline player. Until then, nothing fake is shown. */
  teaserUrl?: string;
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

export const siteMetadata: SiteMetadata = {
  title: "Alexandrina 'Ally' Kushinchanova, The Harp Lady | Harpist & Singer",
  description:
    "Alexandrina 'Ally' Kushinchanova, The Harp Lady. A Bulgarian harpist and singer, classically trained and now writing her own pop and jazz. Watch her play, take lessons, or collaborate.",
  keywords: [
    "Alexandrina Kushinchanova",
    "The Harp Lady",
    "Bulgarian harpist",
    "harpist and singer",
    "singer songwriter",
    "harp lessons",
    "piano lessons",
  ],
  author: "Alexandrina 'Ally' Kushinchanova",
  siteName: "SlunShine",
  siteUrl: "https://slunshine.com",
  ogDescription:
    "Bulgarian harpist and singer, classically trained, now writing pop and jazz of her own.",
};

export const collaborateMetadata = {
  title: "For Producers & Collaborators | SlunShine",
  description:
    "Alexandrina 'Ally' Kushinchanova is a classically trained Bulgarian harpist and singer writing her first pop and jazz songs, and is looking for producers and co-writers.",
  keywords: [
    "harpist for hire",
    "session harpist",
    "session vocalist",
    "looking for producers",
    "co-writer",
  ],
} as const;

export const navigationItems: ReadonlyArray<NavItem> = [
  { href: "#home", label: "Home" },
  { href: "#music", label: "Listen" },
  { href: "#about", label: "About" },
  { href: "#lessons", label: "Lessons" },
  { href: "/collaborate", label: "For producers" },
  { href: "#contact", label: "Contact" },
];

/** Homepage block that pitches collaboration; id matches scroll target for /#collaborate */
export const collaborateTeaserCopy = {
  id: "collaborate",
  title: "Looking for producers & co-writers",
  subtitle: "For producers & collaborators",
  description:
    "I'm a classically trained harpist and singer writing my first pop and jazz songs. I bring live harp, vocals, and arrangement, and I'm looking for producers and co-writers to build the record with.",
  ctaLabel: "What I bring",
} as const;

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
  tagline:
    "Bulgarian harpist and singer, classically trained, now writing pop and jazz of her own.",
  announcement: "First single “Lubov, Lubov” coming soon",
  primaryCta: "Listen",
  studyCta: "Study with me",
  workCta: "Work with me",
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
    id: "piano-on-stage",
    label: "Piano",
    imageSrc: "/images/piano-on-stage.jpeg",
    imageAlt: "Alexandrina playing piano on stage",
  },
  {
    id: "harp-sunset",
    label: "Sunset",
    imageSrc: "/images/harp-sunset.jpeg",
    imageAlt: "Alexandrina with harp at sunset",
  },
  {
    id: "mila-concert",
    label: "Concert",
    imageSrc: "/images/mila-concert.webp",
    imageAlt: "Alexandrina performing in concert with Mila Robert",
  },
  {
    id: "playing-harp-in-church",
    label: "Church",
    imageSrc: "/images/playing-harp-in-church.jpeg",
    imageAlt: "Alexandrina playing harp in a church",
  },
  {
    id: "portrait-3",
    label: "Portrait",
    imageSrc: "/images/gallery/portrait-3.webp",
    imageAlt: "Alexandrina in an expressive outdoor portrait",
  },
];

export const musicSectionCopy: SectionCopy = {
  id: "music",
  title: "Sound & Vision",
  description: "Watch her play, hear her current work, and the first songs of her own.",
};

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
  title: "On stage & in the studio",
  description:
    "Currently performing with Bulgarian indie artist Mila Robert as pianist and backing vocalist, while writing and recording her own songs.",
  ctaLabel: "Follow",
  imageAlt: "Performing with Mila Robert",
} as const;

export const musicReleasesCopy = {
  title: "Coming soon",
  description: "The first songs of her own. Follow to know when they land.",
} as const;

export const musicReleases: ReadonlyArray<ReleaseItem> = [
  {
    title: "Lubov, Lubov",
    type: "Single",
    status: "Coming Soon",
    genre: "R&B / Indie Pop",
    description: "Her first single, written and recorded this year.",
    releaseDate: "Coming Soon",
    // teaserUrl: "/audio/lubov-lubov-teaser.mp3", // ← add the 15s clip here to enable an inline preview
  },
  {
    title: "Debut EP",
    type: "EP",
    status: "In Production",
    genre: "Alternative",
    description: "Original songs in progress, harp, vocals, and a small production setup.",
    releaseDate: "In Development",
  },
];

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
  "Writing and recording original music for upcoming releases",
];

export const lessonsSectionCopy: SectionCopy = {
  id: "lessons",
  title: "Lessons",
  description: "Private harp, piano, and music theory lessons, all ages and levels.",
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
  title: "Learn with me",
  description:
    "Whether you're touching the strings for the first time or preparing for conservatory, I teach with patience, precision, and care.",
  ctaPrompt: "Want to learn?",
  ctaLabel: "Let's talk",
} as const;

export const contactSectionCopy: SectionCopy = {
  id: "contact",
  title: "Let's connect",
  description: "For lessons, collaborations, performances, or just to say hello.",
};

export const contactCopy = {
  instagramCta: "Follow for updates",
  emailCta: "Send a message",
  responseNote: "Email is the fastest way to reach me, I'll get back to you.",
} as const;

export const collaborateCopy = {
  eyebrow: "For producers & collaborators",
  title: "Let's build the record",
  intro:
    "I'm Ally, a classically trained Bulgarian harpist and singer, now writing my first pop and jazz songs. I'm performing with Mila Robert, teaching, and recording my debut single, “Lubov, Lubov.” I'm looking for producers and co-writers to make the rest with.",
  bringTitle: "What I bring",
  bring: [
    "Live harp, classical technique, from delicate textures to full concert pieces.",
    "Vocals in Bulgarian and English, plus piano and backing harmony.",
    "Songwriting and arrangement rooted in classical training.",
    "Studio-ready, reliable, and easy to work with.",
  ],
  lookingForTitle: "What I'm looking for",
  lookingFor: [
    "Producers for pop / R&B / indie songs with acoustic and orchestral color.",
    "Co-writers and topliners.",
    "Session work, harp or vocals on your tracks.",
  ],
  watchTitle: "Hear & watch",
  watchNote: "Performances below; my pop/vocal work lives with Mila Robert on Spotify and YouTube.",
  ctaTitle: "Sound like a fit?",
  ctaLabel: "Email me",
} as const;

export interface SoundSampleItem {
  id: string;
  title: string;
  category: string;
  texture: string;
  fullDuration: string;
  previewSeconds: number;
  previewUrl: string;
}

export const samplesTableCopy = {
  title: "Sample library",
  note: "Placeholder previews while the real harp and vocal samples are being recorded. The clips below are stand-ins, not final material.",
} as const;

/** Placeholder rows. previewUrl points at stock audio on purpose until real samples exist. */
export const soundSamples: ReadonlyArray<SoundSampleItem> = [
  {
    id: "moon-river-harp",
    title: "Moon River Harp Theme",
    category: "Harp",
    texture: "dreamy, cinematic",
    fullDuration: "2:38",
    previewSeconds: 10,
    previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: "glass-vocal-pad",
    title: "Glass Vocal Pad",
    category: "Vocals",
    texture: "airy, ambient",
    fullDuration: "1:54",
    previewSeconds: 8,
    previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: "nocturne-pulse",
    title: "Nocturne Pulse",
    category: "Classical Crossover",
    texture: "rhythmic, dramatic",
    fullDuration: "3:12",
    previewSeconds: 12,
    previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: "chamber-lullaby",
    title: "Chamber Lullaby",
    category: "Instrumental",
    texture: "soft, intimate",
    fullDuration: "2:05",
    previewSeconds: 9,
    previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
];
