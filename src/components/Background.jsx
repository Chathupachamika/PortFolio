"use client"

import { useEffect, useRef } from "react"

export default function Background({ children }) { 
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId;

    // Track mouse position for interactivity
    let mouse = {
      x: null,
      y: null,
      radius: 120 // How far the mouse pushes particles
    }

    const handleMouseMove = (event) => {
      mouse.x = event.x
      mouse.y = event.y
    }

    const handleMouseOut = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseout', handleMouseOut)

    let particles = []

    const createParticles = () => {
      particles = []
      // Dynamically calculate particles, but cap at 100 for performance
      const particleCount = Math.min(Math.floor(window.innerWidth / 15), 100)

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2 + 0.5
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          // Subtle, modern blue/purple palette with variable opacity
          color: `hsla(${Math.random() * 60 + 220}, 80%, 60%, ${Math.random() * 0.5 + 0.2})`,
        })
      }
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Add mouse repulsion logic
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - p.x
          let dy = mouse.y - p.y
          let distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius
            const directionX = dx / distance
            const directionY = dy / distance
            p.x -= directionX * force * 2
            p.y -= directionY * force * 2
          }
        }

        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        // Infinite wrap-around instead of hard bouncing
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Draw connection lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            // Highly transparent, glassy connection lines
            ctx.strokeStyle = `rgba(100, 150, 255, ${(1 - distance / 120) * 0.15})`
            ctx.lineWidth = 1
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animateParticles)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createParticles()
    }

    // Initial setup
    handleResize()
    animateParticles()

    window.addEventListener("resize", handleResize)

    // Cleanup phase to prevent memory leaks
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background z-[-5] pointer-events-none" />
      {children}
    </>
  )
}