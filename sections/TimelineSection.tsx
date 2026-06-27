"use client"

import { motion } from "framer-motion"
import { Trophy, BookOpen, Target, Award, Star } from "lucide-react"
import { portfolioData } from "@/constants/data"

// Helper map to render Lucide icons dynamically from string names
const iconMap: Record<string, React.FC<any>> = {
  Trophy,
  BookOpen,
  Target,
  Award,
  Star
}

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 px-6 relative z-10 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Milestones & Achievements</h2>
          <p className="text-muted-foreground text-lg">
            A timeline of key achievements, leadership roles, and research contributions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {portfolioData.timeline.map((event, index) => {
              const isEven = index % 2 === 0
              const Icon = iconMap[event.icon] || Star
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -150 : 150, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-12 h-12 rounded-full border-4 border-background bg-card flex items-center justify-center transform -translate-x-[22px] md:-translate-x-1/2 z-10">
                    <div className={`w-8 h-8 rounded-full ${event.bg} flex items-center justify-center`}>
                       <Icon size={16} className={event.color} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <div className="p-6 rounded-xl bg-card border border-border hover:border-foreground/20 transition-colors">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${event.bg} ${event.color}`}>
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-1">{event.title}</h3>
                      <h4 className="text-sm font-medium text-muted-foreground mb-3">{event.subtitle}</h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
