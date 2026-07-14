"use client"

import React, { createContext, useContext, useState } from "react"

type ActiveProjectContextType = {
  activeProjectSlug: string | null
  setActiveProjectSlug: (slug: string | null) => void
}

const ActiveProjectContext = createContext<ActiveProjectContextType | undefined>(undefined)

export function ActiveProjectProvider({ children }: { children: React.ReactNode }) {
  const [activeProjectSlug, setActiveProjectSlug] = useState<string | null>(null)

  return (
    <ActiveProjectContext.Provider value={{ activeProjectSlug, setActiveProjectSlug }}>
      {children}
    </ActiveProjectContext.Provider>
  )
}

export function useActiveProject() {
  const context = useContext(ActiveProjectContext)
  if (context === undefined) {
    throw new Error("useActiveProject must be used within an ActiveProjectProvider")
  }
  return context
}
