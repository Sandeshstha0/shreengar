import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageLoader from "./components/Loader/PageLoader";
import Cursor from "./components/Cursor/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shreengar.com.np"), // Change after deployment

  title: {
    default: "Shreengar Makeup Studio | Bridal & Professional Makeup in Nepal",
    template: "%s | Shreengar Makeup Studio",
  },

  description:
    "Shreengar Makeup Studio offers professional bridal makeup, engagement makeup, party makeup, reception makeup, and beauty services in Nepal. Book your appointment today.",

  keywords: [
    "Shreengar Makeup Studio",
    "Makeup Studio Nepal",
    "Bridal Makeup Nepal",
    "Professional Makeup Artist",
    "Engagement Makeup",
    "Reception Makeup",
    "Party Makeup",
    "Beauty Studio Nepal",
    "Makeup Artist",
    "Bridal Beauty",
    "bridal makeup in Pokhara",
    "makeup artist near me",
    "bridal makeup Nepal",
  ],

  authors: [
    {
      name: "Shreengar Makeup Studio",
    },
  ],

  creator: "Shreengar Makeup Studio",

  publisher: "Shreengar Makeup Studio",

  category: "Beauty",

  applicationName: "Shreengar Makeup Studio",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Shreengar Makeup Studio | Bridal & Professional Makeup in Nepal",

    description:
      "Professional bridal makeup, engagement makeup, reception makeup, party makeup and beauty services in Nepal.",

    url: "https://www.shreengar.com.np",

    siteName: "Shreengar Makeup Studio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Shreengar Makeup Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Shreengar Makeup Studio",

    description: "Luxury bridal makeup and beauty services in Nepal.",

    images: ["/logo.jpg"],

    creator: "@yourusername", // Remove if you don't have X
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {" "}
        <Cursor />
        <PageLoader>{children} </PageLoader>
      </body>
    </html>
  );
}
