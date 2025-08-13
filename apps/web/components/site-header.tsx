"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { LogoIcon } from "./logo-icon"
import { useState } from "react"

const routes = [
  { href: "/", label: "About" },
  { href: "/education", label: "Education & Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <LogoIcon className="h-8 w-8 text-white" />
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
            Andrew Emil
          </span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {routes.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className={cn(
                "text-sm transition-all duration-300 hover:text-purple-400 hover:glow",
                pathname === r.href ? "text-purple-400" : "text-gray-300",
              )}
            >
              {r.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-700 bg-gray-800/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:border-purple-400 transition-all text-gray-300"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950/95">
          <nav className="container mx-auto flex flex-col px-4 py-3">
            {routes.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-800/60",
                  pathname === r.href ? "text-purple-400" : "text-gray-300",
                )}
                onClick={() => setOpen(false)}
              >
                {r.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
