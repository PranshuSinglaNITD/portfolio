"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { GraduationCap, BrainCircuit, Code, Network } from "lucide-react"
import { portfolioData } from "@/constants/data"
import Image from "next/image"
import { cn } from "../lib/utils";

// Helper map to render Lucide icons dynamically from string names
const iconMap: Record<string, React.FC<any>> = {
  BrainCircuit,
  Code,
  Network
}

export function AboutSection() {
  return (
    <section id="about" className={cn('py-24', 'px-6', 'relative', 'z-10')}>
      <div className={cn('container', 'mx-auto')}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-12"
        >
          <h2 className={cn('text-3xl', 'md:text-4xl', 'font-bold', 'tracking-tight', 'mb-4')}>About Me</h2>
        </motion.div>

        <div className={cn('grid', 'lg:grid-cols-12', 'gap-12', 'items-start')}>
          {/* Left: Image Profile */}
          <motion.div 
            initial={{ opacity: 0, x: -150, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.1 }}
            className={cn('lg:col-span-4', 'relative', 'group')}
          >
            <div className={cn('absolute', '-inset-1', 'bg-gradient-to-tr', 'from-blue-600', 'to-purple-600', 'rounded-2xl', 'blur', 'opacity-25', 'group-hover:opacity-50', 'transition', 'duration-500')}></div>
            <div className={cn('relative', 'aspect-[4/5]', 'rounded-2xl', 'overflow-hidden', 'border', 'border-border', 'bg-card')}>
              <Image 
                src={portfolioData.about.image} 
                alt={portfolioData.hero.name}
                fill
                preload={true}
                sizes="(max-width: 768px) 100vw, 33vw"
                className={cn('object-cover', 'transition-transform', 'duration-700', 'hover:scale-105')}
              />
              <div className={cn('absolute', 'inset-0', 'bg-gradient-to-t', 'from-background/80', 'via-transparent', 'to-transparent', 'opacity-80')} />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className={cn('lg:col-span-8', 'space-y-8')}>
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
            >
              <p className={cn('text-foreground', 'text-lg', 'leading-relaxed')}>
                {portfolioData.about.description}
              </p>
            </motion.div>

            <div className={cn('grid', 'sm:grid-cols-2', 'gap-6')}>
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 150, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4, delay: 0.3 }}
          >
            <Card className={cn('h-full', 'bg-gradient-to-br', 'from-muted/50', 'to-transparent', 'border-border', 'hover:border-foreground/20', 'transition-all', 'shadow-lg')}>
              <CardHeader>
                <div className={cn('w-12', 'h-12', 'rounded-lg', 'bg-blue-500/20', 'flex', 'items-center', 'justify-center', 'mb-4', 'text-blue-400')}>
                  <GraduationCap size={24} />
                </div>
                <CardTitle className="text-2xl">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className={cn('font-medium', 'text-lg')}>{portfolioData.about.education.university}</h4>
                  <p className="text-muted-foreground">{portfolioData.about.education.degree}</p>
                </div>
                <div className={cn('flex', 'justify-between', 'items-center', 'text-sm', 'border-t', 'border-border', 'pt-4')}>
                  <span className="text-foreground">{portfolioData.about.education.duration}</span>
                  <span className={cn('text-blue-400', 'font-mono', 'bg-blue-400/10', 'px-2', 'py-1', 'rounded')}>CGPA: {portfolioData.about.education.cgpa}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Interests Card */}
          <motion.div
            initial={{ opacity: 0, y: 150, rotate: 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4, delay: 0.4 }}
          >
            <Card className={cn('h-full', 'bg-gradient-to-br', 'from-muted/50', 'to-transparent', 'border-border', 'hover:border-foreground/20', 'transition-all', 'shadow-lg', 'flex', 'flex-col')}>
              <CardHeader className="pb-4">
                <div className={cn('w-12', 'h-12', 'rounded-lg', 'bg-purple-500/20', 'flex', 'items-center', 'justify-center', 'mb-4', 'text-purple-400')}>
                  <BrainCircuit size={24} />
                </div>
                <CardTitle className="text-2xl">Core Interests</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className={cn('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-4')}>
                  {portfolioData.about.interests.map((interest, i) => {
                    const Icon = iconMap[interest.icon] || BrainCircuit;
                    return (
                      <motion.div 
                        key={i} 
                        whileHover={{ scale: 1.05, y: -3, zIndex: 10 }}
                        className={cn('flex', 'flex-col', 'gap-2', 'p-4', 'rounded-xl', 'bg-muted/50', 'border', 'border-border', 'hover:bg-muted', 'hover:border-foreground/20', 'transition-all', 'shadow-sm')}
                      >
                        <div className={cn('flex', 'items-center', 'gap-2')}>
                          <Icon size={18} className="text-purple-400" />
                          <span className={cn('text-sm', 'font-bold', 'text-foreground')}>{interest.name}</span>
                        </div>
                        <span className={cn('text-xs', 'text-muted-foreground', 'leading-relaxed')}>{interest.desc}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
