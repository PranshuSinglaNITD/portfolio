"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Mail, MessageSquare, Send, Loader2, CheckCircle2 } from "lucide-react"
import { portfolioData } from "@/constants/data"
import { sendEmailAction } from "@/app/actions/contact"

export function ContactSection() {
  const [isPending, setIsPending] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsPending(true)
    setStatus("idle")
    const formData = new FormData(e.currentTarget)
    const result = await sendEmailAction(formData)
    if (result.success) {
      setStatus("success")
      ;(e.target as HTMLFormElement).reset()
    } else {
      setStatus("error")
    }
    setIsPending(false)
  }

  return (
    <section id="contact" className="py-24 px-6 relative z-10 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <Card className="bg-card border-border hover:border-foreground/20">
              <CardContent className="p-6 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <a href={`mailto:${portfolioData.hero.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                      {portfolioData.hero.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Socials</h3>
                    <a href={portfolioData.hero.linkedin} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors block">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.3 }}
            className="md:col-span-3"
          >
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                      <Input id="name" name="name" required placeholder="John Doe" className="bg-background border-border focus-visible:ring-blue-500" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                      <Input id="email" name="email" required type="email" placeholder="john@example.com" className="bg-background border-border focus-visible:ring-blue-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                    <Textarea id="message" name="message" required placeholder="Hello Pranshu..." className="min-h-[120px] bg-background border-border focus-visible:ring-blue-500" />
                  </div>
                  <Button disabled={isPending} type="submit" className="w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 mt-2 transition-all">
                    {isPending ? (
                      <>Sending... <Loader2 size={16} className="animate-spin" /></>
                    ) : status === "success" ? (
                      <>Sent to Pranshu Singla! <CheckCircle2 size={16} /></>
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </Button>
                  {status === "error" && <p className="text-red-400 text-sm mt-2 text-center">Failed to send message. Please try again.</p>}
                  {status === "success" && <p className="text-green-400 text-sm mt-2 text-center">Message sent successfully!</p>}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
