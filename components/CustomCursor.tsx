"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useCursor } from "./CursorProvider"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const { cursorText } = useCursor()

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])
  
  // If we have text, the cursor becomes a large circle.
  const size = cursorText ? 80 : 16;
  const offset = size / 2;

  // Render on client side only to prevent hydration mismatch for mouse position
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="hidden md:block">
      <motion.div
        className="fixed top-0 left-0 bg-foreground flex items-center justify-center rounded-full pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - offset,
          y: mousePosition.y - offset,
          width: size,
          height: size,
          scale: !cursorText && isHovering ? 2 : 1,
          mixBlendMode: cursorText ? "normal" : "difference",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      >
        <AnimatePresence>
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[10px] font-bold text-background tracking-widest uppercase absolute"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      
      {!cursorText && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 border border-foreground/50 rounded-full pointer-events-none z-[99]"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0 : 1,
          }}
          transition={{ type: "tween", ease: "circOut", duration: 0.4 }}
        />
      )}
    </div>
  )
}
