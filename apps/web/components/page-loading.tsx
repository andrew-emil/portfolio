"use client"

import { useEffect, useState } from "react"
import { LogoIcon } from "./logo-icon"

export function PageLoading() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/95 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <LogoIcon className="h-16 w-16 text-purple-400 animate-pulse" />
          <div className="absolute inset-0 h-16 w-16 rounded-full border-2 border-transparent border-t-purple-400 animate-spin" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-lg font-semibold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
            Loading Portfolio
          </h2>
          <p className="text-sm text-gray-400">Please wait...</p>
        </div>
      </div>
    </div>
  )
}
