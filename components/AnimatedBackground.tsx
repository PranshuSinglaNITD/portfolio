"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

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
        <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-900/20 blur-[120px] mix-blend-screen" />
        <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-purple-900/20 blur-[120px] mix-blend-screen" />
        <div className="absolute -bottom-[30%] left-[20%] w-[80%] h-[80%] rounded-full bg-indigo-900/20 blur-[120px] mix-blend-screen" />
      </div>
    </div>
  )
}
