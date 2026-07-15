"use client"

import { motion } from "framer-motion"
import { Badge } from "../components/ui/badge"
import { portfolioData } from "@/constants/data"

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-6 relative z-10 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technologies I use to build scalable applications and integrate intelligent AI models.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.8, y: 150 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-foreground/20 hover:bg-muted/50 transition-all"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.1, y: -4, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Badge variant="secondary" className="bg-muted hover:bg-muted-foreground/20 shadow-sm hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_4px_15px_rgba(255,255,255,0.15)] hover:border-foreground/30 transition-all cursor-default">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
