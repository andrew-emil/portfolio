import { GlowButton } from "@/components/glow-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TypingText } from "@/components/typing-text"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
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
        <div className="container mx-auto grid items-center gap-10 px-4 pb-20 pt-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/30 px-3 py-1 text-xs text-purple-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
              Available for internships
            </div>
            <h1 className="text-3xl font-bold sm:text-4xl">
              <TypingText
                text={`Hi, I'm ${personalInfo.name}`}
                speed={80}
                className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent"
              />
              <span className="block text-xl text-gray-400 mt-2">{personalInfo.tagline}</span>
            </h1>
            <p className="text-gray-300">{about.description}</p>
            <div className="flex gap-3">
              <GlowButton asChild>
                <Link href="/projects">View Projects</Link>
              </GlowButton>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md border border-gray-700 bg-gray-800/50 px-4 py-2 text-sm text-gray-300 transition-all hover:border-purple-500/50 hover:shadow-[0_0_24px_rgba(168,85,247,0.25)] hover:text-white"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile.jpg-hmGseQFnaS2Ch63oJbAEGvCHgq50vn.jpeg"
              alt="Portrait photo"
              className="mx-auto aspect-[3/4] w-72 rounded-2xl border border-gray-700 object-cover shadow-[0_18px_60px_rgba(168,85,247,0.25)]"
            />
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-purple-500/20 to-transparent blur-2xl" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <h2 className="mb-6 text-2xl font-semibold text-gray-100">{skills.title}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.categories.map((cat) => (
            <Card
              key={cat.name}
              className="border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]"
            >
              <CardContent className="space-y-3 p-5">
                <h3 className="font-medium text-gray-100">{cat.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="border border-purple-500/20 bg-purple-950/30 text-purple-300 hover:bg-purple-900/40"
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
      <section className="container mx-auto px-4 pb-20">
        <div className="text-center space-y-8">
          <h2 className="text-2xl font-semibold text-gray-100">Let's Connect</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out through any of these platforms. I'm always open to discussing new opportunities and
            interesting projects.
          </p>
          <div className="flex justify-center gap-6">
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]"
              >
                <Github className="h-8 w-8 text-gray-400 group-hover:text-purple-400 transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-white">GitHub</span>
              </Link>
            )}
            {emailLink && (
              <Link
                href={`mailto:${emailLink}`}
                className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]"
              >
                <Mail className="h-8 w-8 text-gray-400 group-hover:text-purple-400 transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-white">Gmail</span>
              </Link>
            )}
            {phoneLink && (
              <Link
                href={`https://wa.me/${phoneLink.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]"
              >
                <MessageCircle className="h-8 w-8 text-gray-400 group-hover:text-purple-400 transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-white">WhatsApp</span>
              </Link>
            )}
            {linkedinLink && (
              <Link
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]"
              >
                <Linkedin className="h-8 w-8 text-gray-400 group-hover:text-purple-400 transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-white">LinkedIn</span>
              </Link>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
