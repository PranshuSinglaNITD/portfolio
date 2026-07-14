"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const text = "Building intelligent systems that scale. Merging deep learning with robust backend architecture to solve complex engineering challenges."
const words = text.split(" ")

export function ManifestoSection() {
  const container = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.85", "start 0.25"]
  })

  return (
    <section 
      ref={container} 
      className="py-40 px-6 flex items-center justify-center min-h-[60vh] relative z-10"
    >
      <div className="container mx-auto max-w-5xl text-center">
        <p className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.2] tracking-tight flex flex-wrap justify-center gap-x-3 lg:gap-x-4 gap-y-2">
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + (1 / words.length)
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1])
            
            return (
              <motion.span key={i} style={{ opacity }} className="text-foreground">
                {word}
              </motion.span>
            )
          })}
        </p>
      </div>
    </section>
  )
}
