import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Slun Shine - Alexandrina Kushinchanova | Harpist & Music Artist",
  description: "Official site of Alexandrina 'Ally' Kushinchanova - Professional harpist, music teacher, and emerging artist. Ethereal harp music for modern souls.",
  keywords: "harpist, music lessons, Bulgarian musician, harp teacher, piano lessons, music theory, harmony lessons, Salvi harp, ethereal music",
  authors: [{ name: "Strahil Peykov" }],
  openGraph: {
    title: "Slun Shine - Alexandrina Kushinchanova",
    description: "Water, light & strings – ethereal harp music for modern souls",
    url: "https://slunshine.com",
    siteName: "Slun Shine",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slun Shine - Alexandrina Kushinchanova",
    description: "Water, light & strings – ethereal harp music for modern souls",
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
                const theme = localStorage.getItem('theme') || 'day';
                document.documentElement.setAttribute('data-theme', theme);
              } catch {}
            `,
          }}
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
