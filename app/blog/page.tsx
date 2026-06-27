import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"

const blogPosts = [
  {
    slug: "optimizing-react-performance",
    title: "Optimizing React Performance in Large Scale Applications",
    date: "May 15, 2026",
    excerpt: "Learn how to use React.memo, useMemo, and useCallback effectively to prevent unnecessary re-renders in complex component trees.",
    readTime: "5 min read"
  },
  {
    slug: "understanding-rag-pipelines",
    title: "Understanding RAG Pipelines with LangChain",
    date: "April 22, 2026",
    excerpt: "A deep dive into Retrieval-Augmented Generation, exploring how to build robust semantic search pipelines using LangChain and vector databases.",
    readTime: "8 min read"
  }
]

export default function BlogList() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative z-10">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Engineering Blog</h1>
        <p className="text-muted-foreground text-lg mb-12">
          Thoughts, tutorials, and insights on software engineering, AI, and system design.
        </p>

        <div className="space-y-6">
          {blogPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="bg-card border-border hover:border-foreground/30 hover:bg-muted/50 transition-all group cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-blue-400 transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center text-sm font-medium text-blue-400">
                    Read Article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
