"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import { AnimatedTimelineItem } from "./animated-timeline-item"

type Item = {
  title?: string
  degree?: string
  institution?: string
  company?: string
  duration: string
  location?: string
  details?: string[]
}

export function Timeline({ items, className }: { items: Item[]; className?: string }) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "100px",
  })

  return (
    <div ref={elementRef} className={cn("relative", className)}>
      {/* Animated timeline line */}
      <div
        className={cn(
          "absolute left-4 sm:left-5 top-0 w-0.5 bg-gradient-to-b from-purple-500/60 via-purple-500/40 to-purple-500/20 transition-all duration-1000 ease-out origin-top",
          isIntersecting ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0",
        )}
        style={{
          height: "100%",
          transitionDelay: "200ms",
        }}
      />

      <div className="space-y-6 sm:space-y-8">
        {items.map((item, index) => (
          <AnimatedTimelineItem key={index} item={item} index={index} isLast={index === items.length - 1} />
        ))}
      </div>
    </div>
  )
}
