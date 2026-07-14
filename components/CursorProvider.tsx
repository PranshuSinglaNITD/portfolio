"use client"

import React, { createContext, useContext, useState } from "react"

type CursorContextType = {
  cursorText: string | null
  setCursorText: (text: string | null) => void
}

const CursorContext = createContext<CursorContextType | undefined>(undefined)

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorText, setCursorText] = useState<string | null>(null)

  return (
    <CursorContext.Provider value={{ cursorText, setCursorText }}>
      {children}
    </CursorContext.Provider>
  )
}

export function useCursor() {
  const context = useContext(CursorContext)
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider")
  }
  return context
}
