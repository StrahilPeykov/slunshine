import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Providers } from "./providers";
import { siteMetadata } from "@/content/site-content";

const shareImage = {
  url: "/images/hero-church.webp",
  width: 803,
  height: 451,
  alt: "Alexandrina 'Ally' Kushinchanova performing on harp",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.ogDescription,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteName,
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.ogDescription,
    images: [shareImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'night';
                document.documentElement.setAttribute('data-theme', theme);
              } catch {}
            `,
          }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-midnightNavy px-4 py-2 text-sm font-medium text-white transition-transform duration-200 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-lilacHalo motion-reduce:transition-none"
        >
          Skip to content
        </a>
        <Providers>
          {children}
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
