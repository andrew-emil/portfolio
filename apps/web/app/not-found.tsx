import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GlowButton } from "@/components/glow-button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <SiteHeader />
      <div className="mx-auto grid min-h-[50vh] sm:min-h-[60vh] max-w-lg place-items-center gap-4 sm:gap-6 p-6 sm:p-10 text-center">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-100">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>
        <GlowButton asChild>
          <Link href="/">Go Home</Link>
        </GlowButton>
      </div>
      <SiteFooter />
    </main>
  );
}
