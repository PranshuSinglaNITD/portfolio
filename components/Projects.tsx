"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "JobFinder",
        description: "A full-stack Job Finding application for students and professionals.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind CSS", "NextAuth", "Scikit-learn", "Cosine Similarity", "Python-Flask", "JWT", "GeminiAPI"],
        demoLink: "#",
        repoLink: "#",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "RadhaInf",
        description: "AI driven ML model for detecting vehicles including cars, trucks, buses in dense fogs",
        tags: ["PyTorch", "YOLOv8", "OpenCV", "Albumentations", "Augmentations", "Flask"],
        demoLink: "#",
        repoLink: "#",
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Compiler Cafe",
        description: "Engineered a Full Stack Restaurant Management System using Flask and MySQL, featuring distinct dashboards with Role-Based Access Control (RBAC) for Admins, Staff, and Customers",
        tags: ["Flask", "HTML", "Javascript", "MySQL", "CSS", "GeminiAPI"],
        demoLink: "#",
        repoLink: "#",
        color: "from-amber-500 to-orange-500"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Featured <span className="text-primary">Projects</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
                            >
                                {/* Mock Image / Gradient Area */}
                                <div className={`h-48 w-full bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`} />

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded-md text-white/80">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Link href={project.demoLink} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                                            <ExternalLink size={16} /> Live Demo
                                        </Link>
                                        <Link href={project.repoLink} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                                            <Github size={16} /> Code
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
