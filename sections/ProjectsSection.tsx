"use client"

import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { ExternalLink, ArrowRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { portfolioData } from "@/constants/data"
import { useActiveProject } from "@/components/ActiveProjectProvider"
import { useCursor } from "@/components/CursorProvider"
import Link from "next/link"
import Image from "next/image"

export function ProjectsSection() {
  const { setActiveProjectSlug } = useActiveProject()
  const { setCursorText } = useCursor()
  
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Work</h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Engineering solutions to complex problems using modern web technologies and artificial intelligence.
          </p>
        </motion.div>

        <div className="space-y-12">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.1 }}
              onMouseEnter={() => {
                setActiveProjectSlug(project.slug)
                setCursorText("View")
              }}
              onMouseLeave={() => {
                setActiveProjectSlug(null)
                setCursorText(null)
              }}
            >
              <Link href={`/projects/${project.slug}`} className="block focus:outline-none">
                <Card className="overflow-hidden border-border bg-card hover:bg-muted/50 transition-all group cursor-pointer">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image/Visual */}
                    <div className={`h-64 lg:h-auto bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center p-8`}>
                      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-500" />
                      <div className="relative z-10 w-full h-full border border-border rounded-lg shadow-2xl bg-card overflow-hidden flex flex-col group-hover:scale-[1.02] transition-transform duration-500">
                          <div className="h-8 border-b border-border bg-muted/50 flex items-center px-4 gap-2 shrink-0">
                             <div className="w-2 h-2 rounded-full bg-red-500/50" />
                             <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                             <div className="w-2 h-2 rounded-full bg-green-500/50" />
                          </div>
                          <div className="flex-1 relative w-full h-full min-h-[200px]">
                            {project.image ? (
                              <Image 
                                src={project.image} 
                                alt={project.title} 
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw" 
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                              />
                            ) : (
                              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center space-y-4">
                                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                                  <div className="flex flex-wrap justify-center gap-2">
                                      {project.tags.slice(0, 3).map(tag => (
                                          <span key={tag} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">{tag}</span>
                                      ))}
                                  </div>
                              </div>
                            )}
                          </div>
                      </div>
                    </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-xl text-foreground mb-6">{project.description}</p>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {project.details}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <motion.div
                          key={tag}
                          whileHover={{ scale: 1.1, y: -4, zIndex: 10 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Badge variant="outline" className="border-border text-foreground bg-background/50 hover:bg-muted shadow-sm hover:shadow-md hover:border-foreground/30 transition-all">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-auto relative z-20">
                      {project.links?.live && project.links.live !== "#" && (
                        <Button 
                          variant="default" 
                          className="gap-2"
                          onClick={(e) => { e.preventDefault(); window.open(project.links.live, '_blank'); }}
                        >
                          View Live <ExternalLink size={16} />
                        </Button>
                      )}
                      {project.links?.github && project.links.github !== "#" && (
                        <Button 
                          variant="outline" 
                          className="gap-2"
                          onClick={(e) => { e.preventDefault(); window.open(project.links.github, '_blank'); }}
                        >
                          Source Code <FaGithub size={16} />
                        </Button>
                      )}
                    </div>
                  </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
