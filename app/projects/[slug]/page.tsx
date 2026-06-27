import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Layers, Database, Cpu, Activity, Zap, CheckCircle2 } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { portfolioData } from "@/constants/data"
import Link from "next/link"
import Image from "next/image"

const getProjectData = (slug: string) => {
  const project = portfolioData.projects.find(p => p.slug === slug);
  return project || portfolioData.projects[0];
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const project = getProjectData(resolvedParams.slug)

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative z-10">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="mb-8 text-muted-foreground hover:text-foreground -ml-4">
          <Link href="/#projects">
            <ArrowLeft className="mr-2" size={16} /> Back to Projects
          </Link>
        </Button>

        <div className="space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags?.map(tag => (
                <Badge key={tag} variant="secondary" className="bg-muted hover:scale-110 hover:-translate-y-1 hover:shadow-md hover:border-foreground/30 transition-all duration-300 hover:z-10 cursor-default">{tag}</Badge>
              ))}
            </div>
            <div className="flex gap-4">
              {project.links?.live && project.links.live !== "#" && (
                <Button asChild className="gap-2 bg-foreground text-background hover:bg-foreground/80">
                  <a href={project.links.live} target="_blank" rel="noreferrer">
                    Live Demo <ExternalLink size={16} />
                  </a>
                </Button>
              )}
              {project.links?.github && project.links.github !== "#" && (
                <Button asChild variant="outline" className="gap-2">
                  <a href={project.links.github} target="_blank" rel="noreferrer">
                    GitHub Repo <FaGithub size={16} />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Large Visual */}
          <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-border flex items-center justify-center overflow-hidden">
            {project.image ? (
              <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 100vw" className="object-cover" />
            ) : (
              <span className="text-muted-foreground font-mono">Architecture Diagram / Screenshot Placeholder</span>
            )}
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Activity size={24} className="text-blue-500" /> Overview & Problem</h2>
                <p className="text-foreground leading-relaxed mb-4">{project.overview}</p>
                <p className="text-muted-foreground leading-relaxed italic border-l-2 border-border pl-4">{project.problem}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Layers size={24} className="text-purple-500" /> Architecture & Database</h2>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <h3 className="font-semibold mb-2 flex items-center gap-2"><Cpu size={16} /> System Design</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.architecture}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <h3 className="font-semibold mb-2 flex items-center gap-2"><Database size={16} /> Data Layer</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.database}</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Zap size={24} className="text-yellow-500" /> Challenges & Solutions</h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                      <p className="text-red-200 text-sm mb-2"><span className="font-bold">Challenge:</span> {challenge}</p>
                      <p className="text-green-200 text-sm"><span className="font-bold">Solution:</span> {project.solutions[i]}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="space-y-8">
              <div className="p-6 rounded-xl bg-card border border-border sticky top-28">
                <h3 className="text-xl font-bold mb-4 border-b border-border pb-4">Key Outcomes</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-foreground text-sm leading-relaxed">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                    <span>{project.performance}</span>
                  </li>
                  <li className="flex gap-3 text-foreground text-sm leading-relaxed">
                    <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={18} />
                    <span>{project.lessons}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
