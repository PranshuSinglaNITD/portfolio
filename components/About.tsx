"use client";

import { motion } from "framer-motion";

const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS",
    "PostgreSQL", "MongoDB", "Git", "Docker", "AWS"
];

export default function About() {
    return (
        <section id="about" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        About <span className="text-primary">Me</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                I’m a Full Stack Software Engineer focused on building scalable, high-performance web applications with Next.js and MongoDB, enhanced by intelligent AI integrations using LLMs (Gemini API) and RAG architectures.

                                With a strong foundation in Data Structures and Algorithms (C++), I develop optimized, user-centric solutions that improve performance and drive engagement — bridging the gap between powerful AI systems and intuitive user experiences.
                            </p>

                        </div>

                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-6 text-white">Technical Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-white/5 hover:bg-white/10 text-sm rounded-full border border-white/5 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
