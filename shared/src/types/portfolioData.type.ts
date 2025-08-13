import { Project } from "./project.type"
import { SocialLink } from "./socialLink.type"

export type PortfolioData = {
    personalInfo: {
        name: string
        tagline: string
        currentRole: string
        location: string
        socialLinks: SocialLink[]
    }
    about: { title: string; description: string }
    skills: { title: string; categories: { name: string; items: string[] }[] }
    projects: { title: string; list: Project[] }
    education: { title: string; list: { degree: string; institution: string; duration: string }[] }
    Experience?: {
        title: string
        list: { title: string; company: string; duration: string; location?: string; details?: string[] }[]
    }
}
