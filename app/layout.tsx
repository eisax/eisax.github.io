import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Mono } from "next/font/google";

import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const seoData = {
  title: "Josphat K Ndhlovu | Fullstack Mobile Software Engineer",
  siteName: "Josphat K Ndhlovu Portfolio",
  author: "Josphat K Ndhlovu",
  description:
    "Fullstack Mobile Software Engineer with 3+ years of experience in Flutter, Dart, and Android application development, web development with Laravel and Angular, backend services, POS, and payment integrations.",
  keywords: [
    "Josphat K Ndhlovu",
    "Josphat Ndhlovu",
    "Fullstack Mobile Software Engineer",
    "Flutter Developer",
    "Dart Developer",
    "Android Developer",
    "Riverpod",
    "Laravel",
    "Angular",
    "ASP.NET Core",
    "Java Spring Boot",
    "POS Systems",
    "EcoCash Integrations",
    "Payment Integrations",
    "PostgreSQL",
    "SQLite",
    "Harare Zimbabwe",
    "Portfolio",
  ],
  url: "https://github.com/eisax",
  image: "/img/profile.png",
};

export const metadata: Metadata = {
  metadataBase: new URL(seoData.url),
  title: seoData.title,
  description: seoData.description,
  applicationName: seoData.siteName,
  authors: [{ name: seoData.author, url: seoData.url }],
  creator: seoData.author,
  publisher: seoData.author,
  keywords: seoData.keywords,
  other: {
    title: seoData.title,
  },
  alternates: {
    canonical: seoData.url,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seoData.url,
    siteName: seoData.siteName,
    title: seoData.title,
    description: seoData.description,
    images: [
      {
        url: seoData.image,
        width: 460,
        height: 460,
        alt: seoData.author,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.title,
    description: seoData.description,
    images: [seoData.image],
    creator: "@josphatndhlovu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceMono.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-terminal-bg text-terminal-text antialiased">
        {children}
      </body>
    </html>
  );
}
