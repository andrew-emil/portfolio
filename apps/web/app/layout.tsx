import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: "Andrew Emil | Full-Stack Developer Portfolio",
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
  authors: [{ name: "Andrew Emil", url: "https://your-portfolio-link.com" }],
  creator: "Andrew Emil",
  publisher: "Andrew Emil",
  metadataBase: new URL("https://your-portfolio-link.com"),
  openGraph: {
    title: "Andrew Emil | Full-Stack Developer Portfolio",
    description:
      "Showcasing my work as a Full-Stack Developer specializing in modern web technologies. Check out my projects, skills, and experience.",
    url: "https://your-portfolio-link.com",
    siteName: "Andrew Emil Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Place in /public
        width: 1200,
        height: 630,
        alt: "Andrew Emil Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Emil | Full-Stack Developer Portfolio",
    description:
      "Portfolio of Andrew Emil — Full-Stack Developer specializing in modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@yourTwitterHandle",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
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
      <body>{children}</body>
    </html>
  )
}
