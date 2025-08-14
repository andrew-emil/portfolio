"use client";

import { useEffect } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GlowButton } from "@/components/glow-button";
import { RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <SiteHeader />
      <div className="mx-auto grid min-h-[50vh] sm:min-h-[60vh] max-w-lg place-items-center gap-4 sm:gap-6 p-6 sm:p-10 text-center">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Oops!
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-100">
            Something went wrong
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            We encountered an unexpected error. Please try again or contact
            support if the problem persists.
          </p>
        </div>
        <GlowButton onClick={reset}>
          <RefreshCw className="h-4 w-4" />
          Try Again
        </GlowButton>
      </div>
      <SiteFooter />
    </main>
  );
}
