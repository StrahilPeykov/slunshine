import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { siteMetadata } from "@/content/site-content";

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.ogDescription,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.ogDescription,
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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
