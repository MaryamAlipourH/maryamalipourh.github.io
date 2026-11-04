import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import { profile, siteUrl } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const title = "Maryam AlipourHajiagha | AI Researcher";
const description =
  "Maryam AlipourHajiagha - MSc researcher at Polytechnique Montreal & Mila specializing in probabilistic deep learning, computer vision, and climate science. Graduate Research Assistant working on climate downscaling and generative AI for scientific applications.";
const socialTitle = "Maryam AlipourHajiagha - AI Researcher";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Maryam AlipourHajiagha",
    "AI Researcher",
    "Climate Science",
    "Deep Learning",
    "Computer Vision",
    "Probabilistic Modeling",
    "Climate Downscaling",
    "MSc Researcher",
    "Polytechnique Montreal",
    "Mila Quebec AI Institute",
    "Ouranos",
    "Generative AI",
    "Multi-modal Learning",
    "Reinforcement Learning",
    "Applied Mathematics",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  alternates: {
    canonical: "/",
    languages: { en: "/" },
  },
  openGraph: {
    title: socialTitle,
    description:
      "MSc researcher at Polytechnique Montreal & Mila, specializing in probabilistic deep learning, computer vision, and climate science. Advancing AI solutions for climate modeling and scientific applications.",
    type: "website",
    url: "/",
    images: [profile.photo],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@MaryamAlipourH",
    title: socialTitle,
    description:
      "MSc researcher specializing in probabilistic deep learning, computer vision, and climate science at Polytechnique Montreal & Mila.",
    images: [profile.photo],
  },
  icons: {
    icon: [
      { url: "/images/favicon/favicon.ico", sizes: "any" },
      { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/favicon/apple-touch-icon.png",
  },
  manifest: "/images/favicon/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0e0d" },
  ],
};

// Runs before the first paint so the page never flashes the wrong theme.
// Uses the saved choice if there is one, otherwise follows the system setting.
const themeScript = `(function(){try{var d=document.documentElement,m=window.matchMedia("(prefers-color-scheme: dark)");function a(){var t=localStorage.getItem("theme");d.classList.toggle("dark",t?t==="dark":m.matches)}a();m.addEventListener("change",a)}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh font-sans text-base leading-relaxed antialiased">
        {children}
      </body>
    </html>
  );
}
