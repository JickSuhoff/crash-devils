import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://crashdevils.com"),
  title: {
    default: "Crash Devils | Web, Mobile & AI Development",
    template: "%s | Crash Devils",
  },
  description:
    "Ukraine-born experts with 10+ years of experience. We build fast, scalable, and maintainable web, mobile, and AI-powered products using React, Next.js, and Node.js.",
  openGraph: {
    title: "Crash Devils | Web, Mobile & AI Development",
    description:
      "Ukraine-born experts with 10+ years of experience. We build fast, scalable, and maintainable web, mobile, and AI-powered products using React, Next.js, and Node.js.",
    url: "https://crashdevils.com",
    siteName: "Crash Devils",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crash Devils | Web, Mobile & AI Development",
    description:
      "Ukraine-born experts with 10+ years of experience. We build fast, scalable, and maintainable web, mobile, and AI-powered products using React, Next.js, and Node.js.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
