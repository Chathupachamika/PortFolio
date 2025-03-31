"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Download } from "lucide-react"
import { cn } from "../lib/utils"

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 10)

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2 + 0.5
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: `hsl(${Math.random() * 60 + 220}, 100%, 70%)`,
        })
      }
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2))

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(100, 150, 255, ${1 - distance / 100})`
            ctx.lineWidth = 0.2
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animateParticles)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    createParticles()
    animateParticles()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background z-[-5]" />

      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8 pt-24 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="block">Hi, I'm</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Chathupa Chamika
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">Full Stack Developer</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto md:mx-0 mb-8">
            Passionate about creating innovative solutions with expertise in Java, Spring Boot, Angular, and more.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              Get in Touch
            </Button>
            <Button variant="outline" size="lg" className="gap-2 border-primary/20 hover:bg-primary/10" asChild>
              <a href="/ChathupaCV.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <div
            className={cn(
              "relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden",
              "before:absolute before:inset-0 before:border-4 before:border-primary/20 before:rounded-full before:z-10",
              "after:absolute after:inset-0 after:border-2 after:border-primary/40 after:rounded-full after:z-10",
              "after:animate-pulse",
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-600/20 rounded-full" />
            <img
              src="/headshotchathupa.png"
              alt="Chathupa Chamika"
              className="w-full h-full object-cover rounded-full p-1"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

