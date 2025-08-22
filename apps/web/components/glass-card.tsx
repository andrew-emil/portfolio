import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
    children: ReactNode
    className?: string
    hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
    return (
        <div
            className={cn(
                // Base glass effect
                "relative overflow-hidden rounded-2xl",
                "bg-white/5 backdrop-blur-xl",
                "border border-white/10",
                "shadow-[0_8px_32px_rgba(0,0,0,0.12)]",

                // Gradient overlay
                "before:absolute before:inset-0 before:rounded-2xl",
                "before:bg-gradient-to-br before:from-white/10 before:via-white/5 before:to-transparent",
                "before:opacity-50",

                // Hover effects
                hover && [
                    "transition-all duration-500 ease-out",
                    "hover:bg-white/8 hover:border-white/20",
                    "hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)]",
                    "hover:-translate-y-1 hover:scale-[1.02]",
                    "hover:before:opacity-70",
                ],

                className,
            )}
        >
            {children}
        </div>
    )
}
