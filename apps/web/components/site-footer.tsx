import Link from "next/link"
import { Github, Mail, Linkedin, Phone } from "lucide-react"
import { LogoIcon } from "./logo-icon"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-800 bg-gray-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <LogoIcon className="h-8 w-8 text-purple-400" />
              <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                Andrew Emil
              </h3>
            </div>
            <p className="text-sm text-gray-400">
              Software Developer passionate about creating innovative solutions and building impactful applications.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-200">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="/education" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                Education & Experience
              </Link>
              <Link href="/projects" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-200">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/andrew-emil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/andrew-emil-0411a7275"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:andrewemil343@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+201204936350"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">© {currentYear} Andrew Emil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
