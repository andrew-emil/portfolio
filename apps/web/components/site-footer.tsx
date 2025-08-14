import Link from "next/link";
import { Github, Mail, Linkedin, Phone } from "lucide-react";
import { LogoIcon } from "./logo-icon";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-950/80 backdrop-blur-md">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <LogoIcon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
              <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                Andrew Emil
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Software Developer passionate about creating innovative solutions
              and building impactful applications.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-medium text-gray-200 text-sm sm:text-base">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 sm:flex sm:flex-col gap-2">
              <Link
                href="/"
                className="text-xs sm:text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/education"
                className="text-xs sm:text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                Education & Experience
              </Link>
              <Link
                href="/projects"
                className="text-xs sm:text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-xs sm:text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-medium text-gray-200 text-sm sm:text-base">
              Connect
            </h4>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://github.com/andrew-emil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors p-1"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/andrew-emil-0411a7275"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors p-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="mailto:andrewemil343@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors p-1"
                aria-label="Email"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="tel:+201204936350"
                className="text-gray-400 hover:text-purple-400 transition-colors p-1"
                aria-label="Phone"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 border-t border-gray-800 pt-4 sm:pt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © {currentYear} Andrew Emil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
