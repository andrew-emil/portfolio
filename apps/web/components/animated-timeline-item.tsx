"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { GlassCard } from "./glass-card"
import { cn } from "@/lib/utils"

type Item = {
    title?: string
    degree?: string
    institution?: string
    company?: string
    duration: string
    location?: string
    details?: string[]
}

interface AnimatedTimelineItemProps {
    item: Item
    index: number
    isLast: boolean
}

export function AnimatedTimelineItem({ item, index, isLast }: AnimatedTimelineItemProps) {
    const { elementRef, isIntersecting } = useIntersectionObserver({
        threshold: 0.2,
        rootMargin: "-50px",
    })

    return (
        <div
            ref={elementRef}
            className={cn(
                "relative flex items-start gap-6 sm:gap-8 transition-all duration-700 ease-out",
                isIntersecting ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-8 translate-x-4",
            )}
            style={{
                transitionDelay: `${index * 150}ms`,
            }}
        >
            {/* Timeline dot with animation */}
            <div className="relative flex-shrink-0">
                <div
                    className={cn(
                        "absolute left-2.5 sm:left-3.5 top-6 sm:top-7 h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 border-purple-400 bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)] z-10 transition-all duration-500 ease-out",
                        isIntersecting ? "scale-100 opacity-100" : "scale-0 opacity-0",
                    )}
                    style={{
                        transitionDelay: `${index * 150 + 200}ms`,
                    }}
                />
                {/* Glow effect */}
                <div
                    className={cn(
                        "absolute left-2.5 sm:left-3.5 top-6 sm:top-7 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-purple-400/30 transition-all duration-500 ease-out",
                        isIntersecting ? "scale-150 opacity-100 animate-pulse" : "scale-0 opacity-0",
                    )}
                    style={{
                        transitionDelay: `${index * 150 + 300}ms`,
                    }}
                />
                {/* Ripple effect */}
                <div
                    className={cn(
                        "absolute left-2.5 sm:left-3.5 top-6 sm:top-7 h-3 w-3 sm:h-4 sm:w-4 rounded-full border border-purple-400/50 transition-all duration-1000 ease-out",
                        isIntersecting ? "scale-300 opacity-0" : "scale-100 opacity-100",
                    )}
                    style={{
                        transitionDelay: `${index * 150 + 400}ms`,
                    }}
                />
            </div>

            {/* Content with staggered animation */}
            <div className="flex-1 min-w-0">
                <div
                    className={cn(
                        "transition-all duration-600 ease-out",
                        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                    )}
                    style={{
                        transitionDelay: `${index * 150 + 100}ms`,
                    }}
                >
                    <GlassCard className="p-4 sm:p-6 group hover:scale-[1.02] transition-transform duration-300">
                        <div className="space-y-2 sm:space-y-3">
                            <h3
                                className={cn(
                                    "text-base sm:text-lg font-semibold text-gray-100 leading-tight transition-all duration-500 ease-out",
                                    isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4",
                                )}
                                style={{
                                    transitionDelay: `${index * 150 + 200}ms`,
                                }}
                            >
                                {item.title || item.degree}
                            </h3>

                            <div
                                className={cn(
                                    "flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-purple-400 transition-all duration-500 ease-out",
                                    isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4",
                                )}
                                style={{
                                    transitionDelay: `${index * 150 + 300}ms`,
                                }}
                            >
                                <span className="font-medium">{item.company || item.institution}</span>
                                {item.location && (
                                    <>
                                        <span className="hidden sm:inline text-gray-500">•</span>
                                        <span>{item.location}</span>
                                    </>
                                )}
                                <span className="hidden sm:inline text-gray-500">•</span>
                                <span className="text-gray-400">{item.duration}</span>
                            </div>

                            {item.details?.length ? (
                                <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                                    {item.details.map((detail, i) => (
                                        <li
                                            key={i}
                                            className={cn(
                                                "flex items-start gap-2 transition-all duration-500 ease-out",
                                                isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4",
                                            )}
                                            style={{
                                                transitionDelay: `${index * 150 + 400 + i * 100}ms`,
                                            }}
                                        >
                                            <span className="text-purple-400 mt-1 flex-shrink-0 transition-colors duration-300 group-hover:text-purple-300">
                                                •
                                            </span>
                                            <span className="group-hover:text-gray-200 transition-colors duration-300">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    )
}
