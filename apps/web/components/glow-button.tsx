"use client"

import { Button } from "@/components/ui/button"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { LoadingSpinner } from "./loading-spinner"
import type { ComponentProps } from "react"

type Props = ComponentProps<typeof Button> & {
  asChild?: boolean
  loading?: boolean
}

export function GlowButton({ className, asChild = false, loading = false, children, disabled, ...props }: Props) {
  const Comp = asChild ? Slot : "span"

  return (
    <Button
      asChild={asChild}
      disabled={disabled || loading}
      {...props}
      className={cn(
        "group relative overflow-hidden transition-all duration-300",
        "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white",
        "hover:from-purple-500 hover:via-fuchsia-500 hover:to-pink-500",
        "shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]",
        "hover:-translate-y-0.5 hover:scale-105",
        "border border-purple-500/20 hover:border-purple-400/40",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100",
        className
      )}
    >
      <Comp className="relative z-10 flex items-center gap-2">
        <Comp className="relative z-10 flex items-center gap-2">
          <span className="flex items-center gap-2">
            {loading && <LoadingSpinner size="sm" />}
            {children}
          </span>
        </Comp>
      </Comp>
    </Button>
  );
}
