"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { portfolioData } from "@/constants/data"

const codeSnippet = `// Architecture: Next.js + AI + MongoDB
class Engineer {
  name: string = "Pranshu Singla";
  role: string[] = ["Software Engineer", "AI Engineer"];
  
  async solveComplexProblem(problem: Problem): Promise<Solution> {
    const architecture = await this.designSystem(problem);
    const backend = await this.buildScalableBackend(architecture);
    const aiModel = await this.integrateAI(backend);
    
    return this.deploy(aiModel);
  }
}

const pranshu = new Engineer();
pranshu.solveComplexProblem(new Challenge("Scale to 1M users"));
`

export function HeroSection() {
  const [displayedCode, setDisplayedCode] = useState("")

  useEffect(() => {
    let i = 0
    const intervalId = setInterval(() => {
      setDisplayedCode(codeSnippet.slice(0, i))
      i++
      if (i > codeSnippet.length) clearInterval(intervalId)
    }, 20) // Adjust typing speed here

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="min-h-[100dvh] flex items-center justify-center pt-24 md:pt-32 pb-12 px-4 md:px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-blue-400 font-mono tracking-wider uppercase"
            >
              Hi, I'm {portfolioData.hero.name}
            </motion.h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
              <span className="block">{portfolioData.hero.roles[0]}</span>
              <span className="block text-gradient">{portfolioData.hero.roles[1]}</span>
              <span className="block text-muted-foreground">{portfolioData.hero.roles[2]}</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            {portfolioData.hero.description}
          </p>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.6 }} 
            className="pt-8 flex flex-col gap-6 border-t border-border mt-8 max-w-lg"
          >
            <div className="flex items-center gap-3 text-sm font-mono text-muted-foreground bg-muted w-fit px-4 py-2 rounded-full border border-border">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
               </span>
               System Status: <span className="text-emerald-400">All Systems Operational</span>
            </div>
            
            <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-y-6 gap-x-4">
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{portfolioData.profiles.leetcode.problems}</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">Problems Solved</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-border" />
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{portfolioData.profiles.leetcode.rating}</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">Contest Rating</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-border" />
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">&lt;300ms</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">API Latency</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right VS Code Window */}
        <motion.div
          initial={{ opacity: 0, x: 150, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Glowing effect behind window */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-20" />
          
          <div className="relative rounded-xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl">
            {/* Window Header */}
            <div className="flex items-center px-4 py-3 border-b border-white/10 bg-black/40">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="mx-auto text-xs text-neutral-500 font-mono">engineer.ts</div>
            </div>
            
            {/* Code Content */}
            <div className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
              <pre className="text-neutral-300">
                <code>
                  {/* Basic syntax highlighting simulation */}
                  <span dangerouslySetInnerHTML={{ 
                    __html: displayedCode
                      .replace(/class /g, '<span class="text-pink-400">class </span>')
                      .replace(/const /g, '<span class="text-pink-400">const </span>')
                      .replace(/new /g, '<span class="text-pink-400">new </span>')
                      .replace(/async /g, '<span class="text-pink-400">async </span>')
                      .replace(/await /g, '<span class="text-pink-400">await </span>')
                      .replace(/return /g, '<span class="text-pink-400">return </span>')
                      .replace(/string/g, '<span class="text-blue-400">string</span>')
                      .replace(/Promise/g, '<span class="text-yellow-400">Promise</span>')
                      .replace(/"(.*?)"/g, '<span class="text-green-400">"$1"</span>')
                      .replace(/\/\/ (.*)/g, '<span class="text-neutral-500">//$1</span>')
                  }} />
                  <span className="inline-block w-2 h-4 ml-1 bg-white/80 animate-pulse align-middle" />
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
