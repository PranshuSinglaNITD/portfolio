"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
            <div className="absolute top-20 left-0 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-10 right-0 w-72 h-72 bg-accent/20 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6">
                            Full Stack Developer & AI Enthusiast
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                            Hello, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent">
                                Pranshu Singla
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Innovative Software Engineer specializing in building scalable web applications and integrating intelligent features with AI.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link
                                href="#projects"
                                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25 flex items-center gap-2"
                            >
                                View My Work
                            </Link>
                            <Link
                                href="#contact"
                                className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-medium hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm flex items-center gap-2"
                            >
                                <Mail size={18} /> Contact Me
                            </Link>
                        </div>
                    </motion.div>

                    {/* Profile Image Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative w-full max-w-md aspect-square flex items-center justify-center"
                    >
                        {/* Rotating Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-dashed border-white/10"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 rounded-full border border-dashed border-primary/20"
                        />

                        {/* Image Container with Glow */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.3)] z-10 group">
                            {/* Placeholder - User needs to add profile.jpg to public folder */}
                            <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-600 relative overflow-hidden">
                                <Image
                                    src="/portfolio.jpg"
                                    alt="Pranshu Singla"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500 justify-center"
                                    onError={(e) => {
                                        // Fallback if image not found (handled visually by the div bg)
                                        const target = e.target as HTMLElement;
                                        target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-zinc-900 border border-white/10 p-4 rounded-2xl shadow-xl z-20"
                        >
                            <span className="text-2xl">🚀</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-4 -left-4 bg-zinc-900 border border-white/10 p-4 rounded-2xl shadow-xl z-20"
                        >
                            <span className="text-2xl">💻</span>
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
}
