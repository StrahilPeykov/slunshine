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

export const navigationItems: ReadonlyArray<NavItem> = [
  { href: "#home", label: "Home" },
  { href: "#music", label: "Listen" },
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
    gradient: "from-lilacHalo to-coral",
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
    gradient: "from-lavaGlow to-lilacHalo",
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
