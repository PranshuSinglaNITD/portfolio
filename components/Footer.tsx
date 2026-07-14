"use client"

import Link from "next/link"
import { Mail, Code2 } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { portfolioData } from "@/constants/data"
import { Magnetic } from "./Magnetic"
import { useCursor } from "./CursorProvider"

export function Footer() {
  const { setCursorText } = useCursor()
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter">PS.</span>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {portfolioData.hero.name}. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div onMouseEnter={() => setCursorText("Code")} onMouseLeave={() => setCursorText(null)}>
              <Magnetic>
                <Link
                  href={portfolioData.hero.github}
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 block"
                >
                  <FaGithub size={20} />
                </Link>
              </Magnetic>
            </div>
            <div onMouseEnter={() => setCursorText("View")} onMouseLeave={() => setCursorText(null)}>
              <Magnetic>
                <Link
                  href={portfolioData.hero.linkedin}
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 block"
                >
                  <FaLinkedin size={20} />
                </Link>
              </Magnetic>
            </div>
            <div onMouseEnter={() => setCursorText("Mail")} onMouseLeave={() => setCursorText(null)}>
              <Magnetic>
                <Link
                  href={`mailto:${portfolioData.hero.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 block"
                >
                  <Mail size={20} />
                </Link>
              </Magnetic>
            </div>
            <div onMouseEnter={() => setCursorText("Code")} onMouseLeave={() => setCursorText(null)}>
              <Magnetic>
                <Link
                  href={portfolioData.profiles.leetcode.link}
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 block"
                >
                  <Code2 size={20} />
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
