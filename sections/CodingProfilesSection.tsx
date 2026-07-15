"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Code2, Trophy } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { portfolioData } from "@/constants/data"

export function CodingProfilesSection() {
  return (
    <section id="profiles" className="py-16 md:py-24 px-4 md:px-6 relative z-10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Competitive Programming</h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Consistent problem solver with a strong foundation in Data Structures and Algorithms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* LeetCode Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full bg-card border-border hover:border-[#FFA116]/50 transition-colors">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-[#FFA116]/10 flex items-center justify-center mb-4 text-[#FFA116]">
                  <Code2 size={24} />
                </div>
                <CardTitle className="text-xl">LeetCode</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-1">{portfolioData.profiles.leetcode.rating}</div>
                    <div className="text-sm text-muted-foreground">Contest Rating</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-foreground mb-1">{portfolioData.profiles.leetcode.problems}</div>
                    <div className="text-sm text-muted-foreground">Problems Solved</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Codeforces Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full bg-card border-border hover:border-blue-500/50 transition-colors">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500">
                  <Trophy size={24} />
                </div>
                <CardTitle className="text-xl">Codeforces</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-1">{portfolioData.profiles.codeforces.rating}</div>
                    <div className="text-sm text-muted-foreground">Current Rating</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded">{portfolioData.profiles.codeforces.rank}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* GitHub Profile Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href={portfolioData.hero.github} target="_blank" rel="noopener noreferrer" className="block h-full focus:outline-none">
              <Card className="h-full bg-card border-border hover:border-foreground/30 transition-colors flex flex-col justify-center items-center text-center p-6 cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4 text-foreground">
                  <FaGithub size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">GitHub Activity</h3>
                <p className="text-sm text-muted-foreground">View open source contributions and project repositories.</p>
              </Card>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
