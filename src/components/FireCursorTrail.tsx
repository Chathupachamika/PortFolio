import { useEffect, useRef } from "react"

type Particle = { x: number; y: number; vx: number; vy: number; size: number; life: number; maxLife: number; rotation: number; spin: number; spark: boolean; heat: number }
type Point = { x: number; y: number; time: number }

const MAX_PARTICLES = 220

export function FireCursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (!canvas || !context) return
    const finePointer = window.matchMedia("(pointer: fine)")
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (!finePointer.matches || reducedMotion.matches) return

    const pointer = { x: 0, y: 0, previousX: 0, previousY: 0, speed: 0, targetSpeed: 0, lastMove: 0, initialized: false }
    const particles: Particle[] = []
    const recentPath: Point[] = []
    let frame = 0
    let lastFrame = performance.now()
    let running = true

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(window.innerWidth * ratio)
      canvas.height = Math.floor(window.innerHeight * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const addParticle = (x: number, y: number, speed: number, spark = false) => {
      if (particles.length >= MAX_PARTICLES) particles.splice(0, Math.ceil(MAX_PARTICLES * .08))
      const angle = Math.random() * Math.PI * 2
      const outward = spark ? 1.2 + Math.random() * 2.8 : Math.random() * .9
      const life = spark ? 220 + Math.random() * 260 : 300 + Math.random() * 380
      particles.push({
        x: x + (Math.random() - .5) * (spark ? 8 : 18), y: y + (Math.random() - .5) * 10,
        vx: Math.cos(angle) * outward - (pointer.previousX - pointer.x) * .018,
        vy: Math.sin(angle) * outward - 1.1 - speed * .035,
        size: spark ? 1 + Math.random() * 1.7 : 4 + Math.random() * (7 + speed * .12),
        life, maxLife: life, rotation: Math.random() * Math.PI, spin: (Math.random() - .5) * .08,
        spark, heat: Math.random(),
      })
    }

    const move = (event: PointerEvent) => {
      if (!pointer.initialized) {
        pointer.x = event.clientX; pointer.y = event.clientY; pointer.previousX = pointer.x; pointer.previousY = pointer.y; pointer.initialized = true
      }
      const distance = Math.hypot(event.clientX - pointer.x, event.clientY - pointer.y)
      pointer.previousX = pointer.x; pointer.previousY = pointer.y
      pointer.x = event.clientX; pointer.y = event.clientY
      pointer.targetSpeed = Math.min(distance, 38)
      pointer.lastMove = performance.now()
      recentPath.push({ x: pointer.x, y: pointer.y, time: pointer.lastMove })
      while (recentPath.length > 18) recentPath.shift()
    }

    const drawParticle = (particle: Particle, now: number) => {
      const fade = Math.min(1, particle.life / 130) * Math.min(1, (particle.maxLife - particle.life) / 55)
      if (fade <= 0) return
      const flicker = 1 + Math.sin(now * .025 + particle.rotation * 4) * .12
      context.save()
      context.translate(particle.x, particle.y)
      context.rotate(particle.rotation)
      context.globalAlpha = fade * (particle.spark ? .9 : .72)
      if (particle.spark) {
        context.fillStyle = `rgba(255,${150 + Math.round(particle.heat * 80)},55,1)`
        context.shadowBlur = 9; context.shadowColor = "#ff6a24"
        context.beginPath(); context.arc(0, 0, particle.size * flicker, 0, Math.PI * 2); context.fill()
      } else {
        const length = particle.size * (1.8 + Math.min(pointer.speed, 30) / 20)
        const gradient = context.createRadialGradient(0, length * .18, 0, 0, 0, length)
        gradient.addColorStop(0, "rgba(255,255,220,1)")
        gradient.addColorStop(.18, "rgba(255,220,76,.95)")
        gradient.addColorStop(.48, "rgba(255,102,22,.78)")
        gradient.addColorStop(.82, "rgba(167,31,18,.35)")
        gradient.addColorStop(1, "rgba(55,9,12,0)")
        context.fillStyle = gradient
        context.shadowBlur = 10 + particle.size; context.shadowColor = "rgba(255,73,18,.55)"
        context.beginPath(); context.ellipse(0, length * .16, particle.size * .62 * flicker, length, 0, 0, Math.PI * 2); context.fill()
      }
      context.restore()
    }

    const render = (now: number) => {
      const delta = Math.min(now - lastFrame, 34)
      lastFrame = now
      const moving = now - pointer.lastMove < 72
      pointer.speed += (pointer.targetSpeed - pointer.speed) * .24
      pointer.targetSpeed *= .88
      if (moving && pointer.initialized) {
        const count = Math.max(1, Math.round(1 + pointer.speed / 8))
        const newest = recentPath[recentPath.length - 1]
        for (let i = 0; i < count; i += 1) addParticle(newest.x, newest.y, pointer.speed)
        if (pointer.speed > 10 && Math.random() < pointer.speed / 46) addParticle(newest.x, newest.y, pointer.speed, true)
      }
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)
      context.globalCompositeOperation = "lighter"
      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const particle = particles[i]
        particle.life -= delta
        particle.x += particle.vx * delta / 16
        particle.y += particle.vy * delta / 16
        particle.vy -= .018 * delta
        particle.vx *= .992
        particle.rotation += particle.spin
        drawParticle(particle, now)
        if (particle.life <= 0) particles.splice(i, 1)
      }
      context.globalCompositeOperation = "source-over"
      if (particles.length || moving) frame = requestAnimationFrame(render)
      else running = false
    }

    const wake = () => {
      if (!running) { running = true; lastFrame = performance.now(); frame = requestAnimationFrame(render) }
    }
    resize(); window.addEventListener("resize", resize); window.addEventListener("pointermove", move, { passive: true }); window.addEventListener("pointermove", wake, { passive: true })
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", move); window.removeEventListener("pointermove", wake) }
  }, [])

  return <canvas ref={canvasRef} className="fire-cursor-canvas" aria-hidden="true" />
}
