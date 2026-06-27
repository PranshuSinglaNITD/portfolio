"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

export function ScrollReveal({ children, delay = 0, className = "", direction = "up" }: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const yOffset = direction === "up" ? 40 : direction === "down" ? -40 : 0
  const xOffset = direction === "left" ? 40 : direction === "right" ? -40 : 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: yOffset, x: xOffset }}
      transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
