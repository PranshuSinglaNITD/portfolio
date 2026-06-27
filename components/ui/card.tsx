"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlight?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, spotlight = true, children, ...props }, ref) => {
    const divRef = React.useRef<HTMLDivElement>(null)
    const [isMounted, setIsMounted] = React.useState(false)
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = React.useState(0)

    React.useEffect(() => {
      setIsMounted(true)
    }, [])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current || !spotlight) return

      const div = divRef.current
      const rect = div.getBoundingClientRect()

      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handleMouseEnter = () => {
      setOpacity(1)
    }

    const handleMouseLeave = () => {
      setOpacity(0)
    }

    return (
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative rounded-xl border border-border bg-card text-card-foreground shadow-sm glass overflow-hidden transition-colors hover:border-foreground/20",
          className
        )}
        {...props}
      >
        {isMounted && spotlight && (
          <div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
            style={{
              opacity,
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(150,150,150,.15), transparent 40%)`,
            }}
          />
        )}
        <div ref={ref} className="relative z-10 w-full h-full">
          {children}
        </div>
      </div>
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
