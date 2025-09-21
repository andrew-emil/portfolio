import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew Emil | Full-Stack Developer Portfolio",
  icons: {
    icon: "/logo.png",
  },
  description:
    "Portfolio of Andrew Emil — Full-Stack Developer specializing in Next.js, React, Node.js, and modern web technologies. View my projects, skills, and contact information.",
  generator: "Next.js",
  applicationName: "Andrew Emil Portfolio",
  keywords: [
    "Andrew Emil",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Andrew Emil", url: "https://portfolio-web-az8u.vercel.app/" }],
  creator: "Andrew Emil",
  publisher: "Andrew Emil",
  metadataBase: new URL("https://portfolio-web-az8u.vercel.app/"),
  openGraph: {
    title: "Andrew Emil | Full-Stack Developer Portfolio",
    description:
      "Showcasing my work as a Full-Stack Developer specializing in modern web technologies. Check out my projects, skills, and experience.",
    url: "https://portfolio-web-az8u.vercel.app/",
    siteName: "Andrew Emil Portfolio",
    images: [
      {
        url: "../public/logo.png",
        width: 1200,
        height: 630,
        alt: "Andrew Emil Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body>
        <main className="min-h-screen bg-gray-950 text-gray-100">
          <SiteHeader />
          {children}
          <SiteFooter />
        </main>
      </body>
    </html>
  );
}
