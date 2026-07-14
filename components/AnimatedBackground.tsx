"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { useActiveProject } from "@/components/ActiveProjectProvider"

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { activeProjectSlug } = useActiveProject()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      
      containerRef.current.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      {/* Subtle Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{ maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)" }}
      />
      
      <div ref={containerRef} className="absolute inset-0 transition-transform duration-1000 ease-out">
        {/* Radial Gradient Orbs */}
        <motion.div 
          animate={{
            backgroundColor: 
              activeProjectSlug === "jobfinder" ? "rgba(16, 185, 129, 0.2)" : // emerald
              activeProjectSlug === "radhainf" ? "rgba(249, 115, 22, 0.2)" : // orange
              "rgba(30, 58, 138, 0.2)" // blue
          }}
          transition={{ duration: 1 }}
          className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full blur-[120px] mix-blend-screen" 
        />
        <motion.div 
          animate={{
            backgroundColor: 
              activeProjectSlug === "jobfinder" ? "rgba(20, 184, 166, 0.2)" : // teal
              activeProjectSlug === "radhainf" ? "rgba(239, 68, 68, 0.2)" : // red
              "rgba(88, 28, 135, 0.2)" // purple
          }}
          transition={{ duration: 1 }}
          className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full blur-[120px] mix-blend-screen" 
        />
        <motion.div 
          animate={{
            backgroundColor: 
              activeProjectSlug === "jobfinder" ? "rgba(6, 95, 70, 0.2)" : // dark emerald
              activeProjectSlug === "radhainf" ? "rgba(153, 27, 27, 0.2)" : // dark red
              "rgba(49, 46, 129, 0.2)" // indigo
          }}
          transition={{ duration: 1 }}
          className="absolute -bottom-[30%] left-[20%] w-[80%] h-[80%] rounded-full blur-[120px] mix-blend-screen" 
        />
      </div>
    </div>
  )
}
