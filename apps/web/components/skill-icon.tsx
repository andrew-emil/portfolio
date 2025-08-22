import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react"

export function SkillIcon({ iconName, className = "h-4 w-4" }: { iconName: string; className?: string }) {
    const LucideIcons = Icons as unknown as Record<string, LucideIcon>

    const Icon = LucideIcons[iconName] || LucideIcons["Code"]
    return <Icon className={className} />
}
