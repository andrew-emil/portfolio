import { GlassCard } from "@/components/glass-card"
import { GlowButton } from "@/components/glow-button"
import { SkillIcon } from "@/components/skill-icon"
import { TypingText } from "@/components/typing-text"
import { Badge } from "@/components/ui/badge"
import { PortfolioData } from "@shared/types/portfolioData.type"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import info from "../public/data/info.json"

export default async function Page() {
  const data: PortfolioData = info.portfolioData;
  const { personalInfo, about, skills } = data

  // Extract social links
  const githubLink = personalInfo.socialLinks.find((link) => link.name === "GitHub")?.url
  const emailLink = personalInfo.socialLinks.find((link) => link.name === "Email")?.url
  const linkedinLink = personalInfo.socialLinks.find((link) => link.name === "LinkedIn")?.url
  const phoneLink = personalInfo.socialLinks.find((link) => link.name === "Phone")?.url

  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-950/20 via-gray-950 to-gray-950" />
        <div className="container mx-auto grid items-center gap-6 sm:gap-8 lg:gap-10 px-3 sm:px-4 pb-12 sm:pb-16 lg:pb-20 pt-8 sm:pt-10 lg:pt-12 grid-cols-1 lg:grid-cols-2">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/30 px-2 sm:px-3 py-1 text-xs text-purple-300">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-pulse rounded-full bg-purple-400" />
              Available for internships
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              <TypingText
                text={`Hi, I'm ${personalInfo.name}`}
                speed={80}
                className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent"
              />
              <span className="block text-lg sm:text-xl text-gray-400 mt-2">
                {personalInfo.tagline}
              </span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {about.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <GlowButton asChild>
                <Link href="/projects">View Projects</Link>
              </GlowButton>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-gray-700 bg-gray-800/50 px-4 py-2 text-sm text-gray-300 transition-all hover:border-purple-500/50 hover:shadow-[0_0_24px_rgba(168,85,247,0.25)] hover:text-white"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile.jpg-hmGseQFnaS2Ch63oJbAEGvCHgq50vn.jpeg"
                alt="Portrait photo of Andrew Emil"
                width={288}
                height={384}
                className="aspect-[3/4] w-48 sm:w-64 lg:w-72 rounded-2xl border border-gray-700 object-cover shadow-[0_18px_60px_rgba(168,85,247,0.25)]"
                priority
              />
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-purple-500/20 to-transparent blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-3 sm:px-4 pb-12 sm:pb-16 lg:pb-20">
        <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-semibold text-gray-100">
          {skills.title}
        </h2>
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {skills.categories.map((cat) => (
            <GlassCard key={cat.name} className="p-4 sm:p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/20 backdrop-blur-sm">
                    <SkillIcon iconName={cat.icon} className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-gray-100 text-sm sm:text-base">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <Badge
                      key={typeof item === "string" ? item : item.name}
                      variant="secondary"
                      className="border border-purple-500/20 bg-white/5 backdrop-blur-sm text-purple-300 hover:bg-white/10 text-xs flex items-center gap-1.5"
                    >
                      {typeof item === "object" && item.icon && <SkillIcon iconName={item.icon} className="h-3 w-3" />}
                      {typeof item === "string" ? item : item.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-3 sm:px-4 pb-12 sm:pb-16 lg:pb-20">
        <div className="text-center space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-100">
            Let's Connect
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Feel free to reach out through any of these platforms. I'm always
            open to discussing new opportunities and interesting projects.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <GlassCard className="p-4 sm:p-6 text-center group">
                  <Github className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 group-hover:text-purple-400 transition-colors mx-auto mb-2 sm:mb-3" />
                  <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white">GitHub</span>
                </GlassCard>
              </a>
            )}
            {emailLink && (
              <a href={`mailto:${emailLink}`}>
                <GlassCard className="p-4 sm:p-6 text-center group">
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 group-hover:text-purple-400 transition-colors mx-auto mb-2 sm:mb-3" />
                  <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white">Gmail</span>
                </GlassCard>
              </a>
            )}
            {phoneLink && (
              <a href={`https://wa.me/${phoneLink.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">
                <GlassCard className="p-4 sm:p-6 text-center group">
                  <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 group-hover:text-purple-400 transition-colors mx-auto mb-2 sm:mb-3" />
                  <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white">WhatsApp</span>
                </GlassCard>
              </a>
            )}
            {linkedinLink && (
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <GlassCard className="p-4 sm:p-6 text-center group">
                  <Linkedin className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 group-hover:text-purple-400 transition-colors mx-auto mb-2 sm:mb-3" />
                  <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white">LinkedIn</span>
                </GlassCard>
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
