"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const achievements = [
    { title: "Forage Certified Solutions Architect", issuer: "Forage", date: "2024" },
    { title: "Meta Frontend Developer Professional", issuer: "Coursera", date: "2023" },
    { title: "LeetCode Regular 100 days Badge", issuer: "LeetCode", date: "Top 10%" },
    // { title: "Hackathon Winner", issuer: "Global Tech Summit", date: "1st Place" },
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Badges & <span className="text-primary">Achievements</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors text-center"
                            >
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                    <Award size={24} />
                                </div>
                                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.issuer}</p>
                                <span className="text-xs text-white/50 mt-2 block">{item.date}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
