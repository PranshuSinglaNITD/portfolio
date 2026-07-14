"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Get In <span className="text-primary">Touch</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold mb-6">Let's talk about your project</h3>
                            <p className="text-muted-foreground mb-8">
                                I'm always open to discussing new projects, creative ideas directly for hire.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors">
                                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-primary">
                                        <Mail size={20} />
                                    </div>
                                    <span>hello@example.com</span>
                                </div>
                                <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors">
                                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-primary">
                                        <Phone size={20} />
                                    </div>
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors">
                                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-primary">
                                        <MapPin size={20} />
                                    </div>
                                    <span>San Francisco, CA</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium ml-1">Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium ml-1">Email</label>
                                    <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Message</label>
                                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Tell me about your project..." />
                            </div>

                            <button className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
