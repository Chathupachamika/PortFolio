import { useEffect, useRef } from "react"

type TrailPoint = { x: number; y: number; angle: number; speed: number; age: number; bend: number }
type Spark = { x: number; y: number; vx: number; vy: number; age: number; life: number; size: number; phase: number }
type Pulse = { offset: number; age: number; life: number }
type ClickBurst = { x: number; y: number; age: number; life: number; radius: number }

const MAX_TRAIL = 21
const MAX_SPARKS = 38
const MAX_BURSTS = 3
const IDLE_DELAY = 56
const FADE_TIME = 540

/** A lightweight plasma trail with hover feedback and short-lived click bursts. */
export function BluePowerFlameCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return
    const finePointer = window.matchMedia("(pointer: fine)")
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (!finePointer.matches || reducedMotion.matches) return

    const trail: TrailPoint[] = []
    const sparks: Spark[] = []
    const pulses: Pulse[] = []
    const bursts: ClickBurst[] = []
    const pointer = { x: 0, y: 0, displayX: 0, displayY: 0, lastX: 0, lastY: 0, angle: 0, speed: 0, acceleration: 0, lastMove: 0, ready: false, inside: false, hovering: false }
    let frame = 0
    let lastFrameTime = 0

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(window.innerWidth * ratio)
      canvas.height = Math.floor(window.innerHeight * ratio)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const addEnergy = (x: number, y: number, angle: number, speed: number, sharpTurn: boolean) => {
      const count = speed > 20 ? 3 : speed > 9 ? 1 : 0
      for (let i = 0; i < count + (sharpTurn ? 2 : 0); i += 1) {
        if (sparks.length >= MAX_SPARKS) sparks.shift()
        const side = i % 2 ? 1 : -1
        const spread = (Math.random() - 0.5) * 1.4
        sparks.push({
          x: x - Math.cos(angle) * (8 + Math.random() * 14), y: y - Math.sin(angle) * (8 + Math.random() * 14),
          vx: -Math.cos(angle + spread) * (0.8 + Math.random() * 2.1) + Math.sin(angle) * side * Math.random() * 1.8,
          vy: -Math.sin(angle + spread) * (0.8 + Math.random() * 2.1) - Math.cos(angle) * side * Math.random() * 1.8,
          age: 0, life: 230 + Math.random() * 330, size: 0.65 + Math.random() * 1.8, phase: Math.random() * Math.PI * 2,
        })
      }
      if (speed > 17 && Math.random() < 0.18 && pulses.length < 3) pulses.push({ offset: Math.random() * 0.25, age: 0, life: 620 })
    }

    const move = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse" && event.pointerType !== "pen") return
      const x = event.clientX; const y = event.clientY
      const target = event.target
      pointer.hovering = target instanceof Element && Boolean(target.closest("a, button, [role='button'], input, textarea, select, summary, [tabindex]:not([tabindex='-1'])"))
      pointer.inside = true
      if (!pointer.ready) { pointer.x = pointer.displayX = pointer.lastX = x; pointer.y = pointer.displayY = pointer.lastY = y; pointer.lastMove = performance.now(); pointer.ready = true; if (!frame) frame = requestAnimationFrame(render); return }
      const dx = x - pointer.x; const dy = y - pointer.y; const distance = Math.hypot(dx, dy)
      if (distance < 1.2) { if (!frame) frame = requestAnimationFrame(render); return }
      const targetAngle = Math.atan2(dy, dx)
      const turn = Math.atan2(Math.sin(targetAngle - pointer.angle), Math.cos(targetAngle - pointer.angle))
      const sharpTurn = Math.abs(turn) > 0.72
      const nextSpeed = Math.min(distance, 38)
      pointer.acceleration += (nextSpeed - pointer.speed - pointer.acceleration) * 0.3
      pointer.speed += (nextSpeed - pointer.speed) * 0.45
      pointer.angle += turn * 0.38
      pointer.lastX = pointer.x; pointer.lastY = pointer.y; pointer.x = x; pointer.y = y; pointer.lastMove = performance.now()
      const steps = Math.min(MAX_TRAIL, Math.max(1, Math.ceil(distance / 7)))
      for (let i = 1; i <= steps; i += 1) { const t = i / steps; trail.unshift({ x: pointer.lastX + dx * t, y: pointer.lastY + dy * t, angle: pointer.angle, speed: pointer.speed, age: 0, bend: turn }) }
      trail.splice(MAX_TRAIL); addEnergy(x, y, pointer.angle, pointer.speed, sharpTurn)
      if (!frame) frame = requestAnimationFrame(render)
    }

    const click = (event: PointerEvent) => {
      if (event.button !== 0 || (event.pointerType && event.pointerType !== "mouse" && event.pointerType !== "pen")) return
      if (!pointer.ready) { pointer.x = pointer.displayX = pointer.lastX = event.clientX; pointer.y = pointer.displayY = pointer.lastY = event.clientY; pointer.ready = true }
      const target = event.target
      pointer.hovering = target instanceof Element && Boolean(target.closest("a, button, [role='button'], input, textarea, select, summary, [tabindex]:not([tabindex='-1'])"))
      pointer.inside = true
      pointer.lastMove = performance.now()
      if (bursts.length >= MAX_BURSTS) bursts.shift()
      bursts.push({ x: event.clientX, y: event.clientY, age: 0, life: 480, radius: 8 + Math.random() * 5 })
      const count = 12
      for (let i = 0; i < count; i += 1) {
        if (sparks.length >= MAX_SPARKS) sparks.shift()
        const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.35
        const velocity = 1.3 + Math.random() * 3.2
        sparks.push({ x: event.clientX, y: event.clientY, vx: Math.cos(angle) * velocity, vy: Math.sin(angle) * velocity, age: 0, life: 240 + Math.random() * 180, size: 0.8 + Math.random() * 1.8, phase: Math.random() * Math.PI * 2 })
      }
      if (!frame) frame = requestAnimationFrame(render)
    }

    const leave = () => { pointer.inside = false; pointer.hovering = false; pointer.lastMove = performance.now(); if (!frame && pointer.ready) frame = requestAnimationFrame(render) }

    const drawPath = (points: Array<{ x: number; y: number }>, width: number, color: string, alpha: number) => {
      if (points.length < 2) return
      ctx.save(); ctx.globalAlpha = alpha; ctx.strokeStyle = color; ctx.lineWidth = width; ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.beginPath(); ctx.moveTo(points[0].x, points[0].y)
      for (let i = 1; i < points.length - 1; i += 1) { const next = points[i + 1]; ctx.quadraticCurveTo(points[i].x, points[i].y, (points[i].x + next.x) / 2, (points[i].y + next.y) / 2) }
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y); ctx.stroke(); ctx.restore()
    }

    const drawRibbon = (now: number, fade: number) => {
      const outer: Array<{ x: number; y: number }> = []; const inner: Array<{ x: number; y: number }> = []
      for (let i = 0; i < trail.length; i += 1) {
        const point = trail[i]; const ageFade = Math.max(0, 1 - point.age / 650); const front = 1 - i / MAX_TRAIL
        const normalX = -Math.sin(point.angle); const normalY = Math.cos(point.angle)
        const wave = Math.sin(now * 0.006 + i * 0.82) * (2 + front * 4) + Math.sin(now * 0.011 + i * 1.7) * 1.4
        outer.push({ x: point.x + normalX * wave, y: point.y + normalY * wave }); inner.push({ x: point.x - normalX * wave * 0.5, y: point.y - normalY * wave * 0.5 })
        point.age += 16; if (ageFade <= 0) trail.splice(i, 1)
      }
      if (outer.length > 1) { ctx.shadowBlur = 17; ctx.shadowColor = "rgba(38, 91, 245, .32)"; drawPath(outer, 4 + pointer.speed * 0.16, "rgba(31, 72, 207, .34)", fade); drawPath(inner, 2 + pointer.speed * 0.08, "rgba(81, 209, 255, .45)", fade); ctx.shadowBlur = 0 }
    }

    const drawFlame = (now: number, fade: number) => {
      if (!trail.length) return
      const head = trail[0]; const front = Math.min(1, 0.65 + pointer.speed / 50); const length = (36 + pointer.speed * 1.4) * front; const width = (13 + pointer.speed * 0.38) * front; const twitch = Math.sin(now * 0.018) * 2.2
      pointer.displayX += (head.x - pointer.displayX) * 0.32; pointer.displayY += (head.y - pointer.displayY) * 0.32
      ctx.save(); ctx.translate(pointer.displayX, pointer.displayY); ctx.rotate(head.angle); ctx.globalAlpha = fade; ctx.shadowBlur = pointer.hovering ? 30 : 23; ctx.shadowColor = pointer.hovering ? "rgba(91, 221, 255, .9)" : "rgba(70, 153, 255, .65)"
      const outer = ctx.createLinearGradient(-length, 0, 8, 0); outer.addColorStop(0, "rgba(35, 45, 147, 0)"); outer.addColorStop(0.25, "rgba(38, 72, 213, .86)"); outer.addColorStop(0.72, "rgba(16, 165, 255, .98)"); outer.addColorStop(1, "rgba(242, 253, 255, 1)")
      ctx.fillStyle = outer; ctx.beginPath(); ctx.moveTo(9, 0); ctx.bezierCurveTo(-4, -width * 1.25, -length * 0.24, -width * 0.8 + twitch, -length * 0.66, -width * 0.25); ctx.bezierCurveTo(-length * 0.9, -width * 1.15, -length - 8, -width * 0.4, -length - 12, twitch); ctx.bezierCurveTo(-length * 0.92, width * 0.85, -length * 0.5, width * 1.1, 9, 0); ctx.fill()
      ctx.globalAlpha = fade * 0.8; ctx.fillStyle = "rgba(41, 83, 230, .82)"
      for (const side of [-1, 1]) { ctx.beginPath(); ctx.moveTo(-length * 0.24, side * width * 0.22); ctx.quadraticCurveTo(-length * 0.6, side * width * (1.9 + Math.sin(now * 0.014 + side) * 0.25), -length * 0.94 + twitch, side * width * 0.52); ctx.quadraticCurveTo(-length * 0.55, side * width * 0.7, -length * 0.24, side * width * 0.22); ctx.fill() }
      const core = ctx.createLinearGradient(-length * 0.72, 0, 8, 0); core.addColorStop(0, "rgba(147, 226, 255, 0)"); core.addColorStop(0.36, "rgba(99, 210, 255, .65)"); core.addColorStop(0.78, "rgba(221, 250, 255, .98)"); core.addColorStop(1, "rgba(255, 255, 255, 1)")
      ctx.globalAlpha = fade * 0.92; ctx.shadowBlur = 10; ctx.shadowColor = "rgba(214, 249, 255, .95)"; ctx.fillStyle = core; ctx.beginPath(); ctx.moveTo(7, 0); ctx.bezierCurveTo(-length * 0.2, -width * 0.46, -length * 0.48, -width * 0.2, -length * 0.7, 0); ctx.bezierCurveTo(-length * 0.47, width * 0.25, -length * 0.16, width * 0.44, 7, 0); ctx.fill(); ctx.restore()
    }

    const drawCore = (now: number, fade: number) => {
      if (!pointer.inside || !pointer.ready) return
      if (!trail.length) { pointer.displayX += (pointer.x - pointer.displayX) * 0.2; pointer.displayY += (pointer.y - pointer.displayY) * 0.2 }
      const pulse = 0.5 + Math.sin(now * 0.004) * 0.5
      const intensity = pointer.hovering ? 1 : 0.72
      ctx.save(); ctx.translate(pointer.displayX, pointer.displayY); ctx.globalCompositeOperation = "lighter"
      const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, 17 + pulse * 5)
      glow.addColorStop(0, `rgba(241, 253, 255, ${0.72 * intensity * fade})`)
      glow.addColorStop(0.18, `rgba(95, 220, 255, ${0.62 * intensity * fade})`)
      glow.addColorStop(0.55, `rgba(30, 133, 255, ${0.22 * intensity * fade})`)
      glow.addColorStop(1, "rgba(20, 98, 255, 0)")
      ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(0, 0, 23 + pulse * 3, 0, Math.PI * 2); ctx.fill()
      ctx.globalAlpha = intensity * fade; ctx.strokeStyle = "rgba(174, 246, 255, .8)"; ctx.lineWidth = 0.7; ctx.beginPath(); ctx.ellipse(0, 0, 5 + pulse, 2.4 + pulse * 0.45, now * 0.0015, 0, Math.PI * 2); ctx.stroke()
      ctx.fillStyle = "#fff"; ctx.shadowBlur = 11 + pulse * 5; ctx.shadowColor = "#8ceaff"; ctx.beginPath(); ctx.arc(0, 0, 1.45 + pulse * 0.55, 0, Math.PI * 2); ctx.fill()
      ctx.restore()
    }

    const drawDetails = (fade: number) => {
      for (const pulse of pulses) { const progress = pulse.age / pulse.life; const index = Math.min(trail.length - 1, Math.floor((progress + pulse.offset) * trail.length)); const point = trail[index]; if (!point) continue; ctx.globalAlpha = fade * (1 - progress) * 0.8; ctx.fillStyle = "#ffffff"; ctx.shadowBlur = 13; ctx.shadowColor = "#62cfff"; ctx.beginPath(); ctx.arc(point.x, point.y, 2 + Math.sin(progress * Math.PI) * 3, 0, Math.PI * 2); ctx.fill() }
      for (let i = sparks.length - 1; i >= 0; i -= 1) { const spark = sparks[i]; spark.age += 16; if (spark.age >= spark.life) { sparks.splice(i, 1); continue }; const progress = spark.age / spark.life; spark.x += spark.vx; spark.y += spark.vy; spark.vx *= 0.986; spark.vy *= 0.986; ctx.globalAlpha = fade * Math.pow(1 - progress, 1.7); ctx.fillStyle = progress < 0.35 ? "#ffffff" : "#62cfff"; ctx.shadowBlur = 8; ctx.shadowColor = "#2b8fff"; ctx.beginPath(); ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2); ctx.fill() }
      for (let i = bursts.length - 1; i >= 0; i -= 1) {
        const burst = bursts[i]; burst.age += 16
        if (burst.age >= burst.life) { bursts.splice(i, 1); continue }
        const progress = burst.age / burst.life
        ctx.save(); ctx.globalAlpha = fade * Math.pow(1 - progress, 1.6); ctx.strokeStyle = progress < 0.35 ? "#e5fcff" : "#42cfff"; ctx.lineWidth = 1.2 * (1 - progress) + 0.25; ctx.shadowBlur = 15; ctx.shadowColor = "#35bfff"; ctx.beginPath(); ctx.arc(burst.x, burst.y, burst.radius + progress * 43, 0, Math.PI * 2); ctx.stroke()
        const flash = ctx.createRadialGradient(burst.x, burst.y, 0, burst.x, burst.y, 18 * (1 - progress))
        flash.addColorStop(0, `rgba(220, 251, 255, ${0.32 * (1 - progress)})`); flash.addColorStop(1, "rgba(76, 182, 255, 0)")
        ctx.fillStyle = flash; ctx.fillRect(burst.x - 20, burst.y - 20, 40, 40); ctx.restore()
      }
    }

    const render = (now: number) => {
      if (pointer.inside && now - pointer.lastMove > IDLE_DELAY && now - lastFrameTime < 32) { frame = requestAnimationFrame(render); return }
      lastFrameTime = now
      const idle = now - pointer.lastMove > IDLE_DELAY; const fade = idle ? Math.max(0, 1 - (now - pointer.lastMove - IDLE_DELAY) / FADE_TIME) : 1
      if (idle && fade <= 0 && !pointer.inside) {
        trail.length = 0; sparks.length = 0; pulses.length = 0
        bursts.length = 0
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        frame = 0
        return
      }
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); ctx.globalCompositeOperation = "lighter"; drawRibbon(now, fade); drawFlame(now, fade); drawDetails(fade); drawCore(now, pointer.inside ? 1 : fade)
      for (const pulse of pulses) pulse.age += 16; for (let i = pulses.length - 1; i >= 0; i -= 1) if (pulses[i].age >= pulses[i].life) pulses.splice(i, 1)
      ctx.globalCompositeOperation = "source-over"; if (trail.length || sparks.length || pulses.length || bursts.length || pointer.inside) frame = requestAnimationFrame(render); else { ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); frame = 0 }
    }

    resize(); window.addEventListener("resize", resize, { passive: true }); window.addEventListener("pointermove", move, { passive: true }); window.addEventListener("pointerdown", click, { passive: true }); window.addEventListener("pointerleave", leave, { passive: true })
    return () => { if (frame) cancelAnimationFrame(frame); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", move); window.removeEventListener("pointerdown", click); window.removeEventListener("pointerleave", leave) }
  }, [])

  return <canvas ref={canvasRef} className="blue-power-flame-canvas" aria-hidden="true" />
}
