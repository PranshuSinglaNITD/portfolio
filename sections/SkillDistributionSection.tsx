"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { portfolioData } from "@/constants/data"
import { Card } from "@/components/ui/card"
import { Zap } from "lucide-react"

const AnimatedCounter = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: false, amount: 0.1 })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 20, stiffness: 100 })
  const display = useTransform(springValue, (current) => Math.round(current) + "%")

  useEffect(() => {
    if (inView) {
      motionValue.set(value)
    } else {
      motionValue.set(0)
    }
  }, [inView, motionValue, value])

  return (
    <motion.span 
      ref={ref} 
      className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-sm"
    >
      {display}
    </motion.span>
  )
}

export function SkillDistributionSection() {
  return (
    <section id="skill-distribution" className="py-24 px-6 relative z-10">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 mb-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <Zap size={28} className="animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Skill <span className="text-gradient">Mastery</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive breakdown of my technical proficiencies, measured by real-world application, depth of knowledge, and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.skillDistribution.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden bg-card/60 backdrop-blur-md border-border hover:border-blue-500/40 transition-all duration-300 p-8 shadow-xl group">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 space-y-5">
                  <div className="flex justify-between items-end">
                    <span className="text-xl font-bold text-foreground tracking-wide group-hover:text-blue-400 transition-colors duration-300">{skill.name}</span>
                    <AnimatedCounter value={skill.level} />
                  </div>
                  
                  {/* Progress Bar Container */}
                  <div className="relative h-4 w-full bg-muted rounded-full overflow-hidden border border-border shadow-inner">
                    {/* Animated Fill */}
                    <motion.div
                      initial={{ width: 0, opacity: 0.5 }}
                      whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                      viewport={{ once: false, amount: 0.1 }}
                      transition={{ duration: 1.5, type: "spring", bounce: 0.2, delay: index * 0.1 + 0.2 }}
                      className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                      style={{ boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)' }}
                    >
                      {/* Shimmer effect inside the bar */}
                      <motion.div 
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      />
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
