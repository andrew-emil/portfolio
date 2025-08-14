import { GlowButton } from "@/components/glow-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TypingText } from "@/components/typing-text"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import info from "../public/data/info.json"
import { PortfolioData } from "@shared/types/portfolioData.type";

export default async function Page() {
  const data: PortfolioData = info.portfolioData;
  const { personalInfo, about, skills } = data

  // Extract social links
  const githubLink = personalInfo.socialLinks.find((link) => link.name === "GitHub")?.url
  const emailLink = personalInfo.socialLinks.find((link) => link.name === "Email")?.url
  const linkedinLink = personalInfo.socialLinks.find((link) => link.name === "LinkedIn")?.url
  const phoneLink = personalInfo.socialLinks.find((link) => link.name === "Phone")?.url

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <SiteHeader />
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
            <Card
              key={cat.name}
              className="border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]"
            >
              <CardContent className="space-y-3 p-4 sm:p-5">
                <h3 className="font-medium text-gray-100 text-sm sm:text-base">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {cat.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="border border-purple-500/20 bg-purple-950/30 text-purple-300 hover:bg-purple-900/40 text-xs"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
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
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]"
              >
                <Github className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 group-hover:text-purple-400 transition-colors" />
                <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white">
                  GitHub
                </span>
              </a>
            )}
            {emailLink && (
              <a
                href={`mailto:${emailLink}`}
                className="group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]"
              >
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 group-hover:text-purple-400 transition-colors" />
                <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white">
                  Gmail
                </span>
              </a>
            )}
            {phoneLink && (
              <a
                href={`https://wa.me/${phoneLink.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]"
              >
                <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 group-hover:text-purple-400 transition-colors" />
                <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white">
                  WhatsApp
                </span>
              </a>
            )}
            {linkedinLink && (
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]"
              >
                <Linkedin className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 group-hover:text-purple-400 transition-colors" />
                <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white">
                  LinkedIn
                </span>
              </a>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
