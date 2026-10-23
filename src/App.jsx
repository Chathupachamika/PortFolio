import { useEffect, useMemo, useRef, useState } from "react"
import {
  ArrowUpRight,
  ChevronDown,
  Command,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Loader2,
  Terminal,
  X,
} from "lucide-react"
import cvFile from "./assets/documents/ChathupaCV.pdf"
import portrait from "./assets/images/headshotchathupa.png"
import zony from "./assets/images/zony.jpeg"
import clothify from "./assets/images/clothify.jpg"
import weather from "./assets/images/weather.jpg"
import defense from "./assets/images/defense.jpg"
import userform from "./assets/images/userform.jpg"
import wecare from "./assets/images/wecare.png"
import todo from "./assets/images/todo.jpg"
import country from "./assets/images/country.jpg"
import burgers from "./assets/images/burgers.jpg"
import reactIcon from "./assets/Tech_Icon/react.png"
import angularIcon from "./assets/Tech_Icon/angular.png"
import springIcon from "./assets/Tech_Icon/spring-boot.png"
import javaIcon from "./assets/Tech_Icon/java.png"
import typescriptIcon from "./assets/Tech_Icon/typescript.png"
import mongoIcon from "./assets/Tech_Icon/mongodb.png"
import { Button } from "./components/ui/button"
import { portfolioConfig } from "./portfolio.config"
import "./App.css"

const projects = [
  { title: "ZONY Campus Smart LMS", type: "FULL STACK / 01", description: "A campus management system with intuitive interfaces and a robust Spring Boot backend for educational workflows.", image: zony, tags: ["Angular", "Java", "Spring Boot"], link: "https://github.com/Chathupachamika/ZONY-Campus", accent: "violet" },
  { title: "WeCare Prescription Management", type: "HEALTHCARE / 02", description: "A secure prescription workflow designed to streamline healthcare delivery and improve accuracy.", image: wecare, tags: ["Angular", "TypeScript", "Microservices"], link: "https://github.com/iCET-110/Hospital-Management-Frontend", accent: "cyan" },
  { title: "Weather Application", type: "FRONTEND / 03", description: "Real-time weather conditions and forecasts wrapped in a focused, responsive interface.", image: weather, tags: ["JavaScript", "API", "CSS"], link: "https://chathupachamika.github.io/Weather_site/", accent: "blue" },
  { title: "User Form Application", type: "FULL STACK / 04", description: "A MERN CRUD application for seamless user input, data storage, and dynamic UI updates.", image: userform, tags: ["React", "Node JS", "MongoDB"], link: "https://github.com/Chathupachamika/User_Form-crud--MERN-Stack", accent: "magenta" },
  { title: "Clothify Store", type: "DESKTOP / 05", description: "An e-commerce desktop experience built for a seamless shopping journey.", image: clothify, tags: ["JavaFX", "Java"], link: "https://github.com/Chathupachamika/Clothify_Store-app", accent: "violet" },
  { title: "Defense System", type: "DESKTOP / 06", description: "A strategic simulation modeling defense systems with object-oriented patterns.", image: defense, tags: ["Java", "Observer Pattern"], link: "https://github.com/Chathupachamika/Defense_System", accent: "cyan" },
]

const skills = [
  ["React", reactIcon], ["Angular", angularIcon], ["Spring Boot", springIcon], ["Java", javaIcon], ["TypeScript", typescriptIcon], ["MongoDB", mongoIcon],
]

function EnergyField() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext("2d")
    let frame = 0
    let particles = []
    const pointer = { x: -1000, y: -1000 }
    const resize = () => { canvas.width = window.innerWidth * devicePixelRatio; canvas.height = window.innerHeight * devicePixelRatio; ctx.scale(devicePixelRatio, devicePixelRatio); particles = Array.from({ length: Math.min(70, Math.floor(window.innerWidth / 18)) }, () => ({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18, r: Math.random() * 1.6 + .4 })) }
    const move = (e) => { pointer.x = e.clientX; pointer.y = e.clientY }
    const draw = () => { frame = requestAnimationFrame(draw); ctx.clearRect(0, 0, innerWidth, innerHeight); particles.forEach((p, i) => { const dx = pointer.x - p.x, dy = pointer.y - p.y, d = Math.hypot(dx, dy); if (d < 140) { p.x -= dx / Math.max(d, 1) * (140 - d) * .006; p.y -= dy / Math.max(d, 1) * (140 - d) * .006 } p.x = (p.x + p.vx + innerWidth) % innerWidth; p.y = (p.y + p.vy + innerHeight) % innerHeight; ctx.fillStyle = `rgba(115, 103, 255, ${.18 + Math.sin(i + frame / 50) * .08})`; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); particles.slice(i + 1).forEach((q) => { const distance = Math.hypot(p.x - q.x, p.y - q.y); if (distance < 105) { ctx.strokeStyle = `rgba(76, 207, 255, ${(1 - distance / 105) * .07})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke() } }) }) }
    resize(); draw(); window.addEventListener("resize", resize); window.addEventListener("pointermove", move, { passive: true }); return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", move) }
  }, [])
  return <canvas ref={ref} className="energy-canvas" aria-hidden="true" />
}

function CursorPowerTrail() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const context = canvas?.getContext("2d")
    const finePointer = window.matchMedia("(pointer: fine)")
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (!canvas || !context || !finePointer.matches || reducedMotion.matches) return undefined

    const pointer = { x: -100, y: -100, tx: -100, ty: -100, px: -100, py: -100, speed: 0, active: false }
    const trail = []
    const particles = []
    const bursts = []
    let frameId = 0
    let lastTime = performance.now()

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(window.innerWidth * ratio)
      canvas.height = Math.floor(window.innerHeight * ratio)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }
    const move = (event) => {
      pointer.tx = event.clientX
      pointer.ty = event.clientY
      pointer.active = true
    }
    const click = () => {
      if (!pointer.active) return
      bursts.push({ x: pointer.x, y: pointer.y, age: 0 })
      for (let i = 0; i < 12; i += 1) {
        const angle = Math.random() * Math.PI * 2
        const force = 1.2 + Math.random() * 2.6
        particles.push({ x: pointer.x, y: pointer.y, vx: Math.cos(angle) * force, vy: Math.sin(angle) * force, life: 1, size: 1 + Math.random() * 2 })
      }
    }
    const emit = (amount) => {
      for (let i = 0; i < amount; i += 1) {
        const angle = Math.random() * Math.PI * 2
        particles.push({ x: pointer.x + (Math.random() - .5) * 12, y: pointer.y + (Math.random() - .5) * 12, vx: Math.cos(angle) * (Math.random() * 1.4), vy: Math.sin(angle) * (Math.random() * 1.4), life: .65 + Math.random() * .35, size: .7 + Math.random() * 1.7 })
      }
    }
    const drawPath = (points, width, alpha, color) => {
      if (points.length < 2) return
      context.beginPath()
      context.moveTo(points[0].x, points[0].y)
      for (let i = 1; i < points.length - 1; i += 1) {
        const next = points[i + 1]
        context.quadraticCurveTo(points[i].x, points[i].y, (points[i].x + next.x) / 2, (points[i].y + next.y) / 2)
      }
      context.lineTo(points[points.length - 1].x, points[points.length - 1].y)
      context.strokeStyle = color
      context.lineWidth = width
      context.lineCap = "round"
      context.stroke()
    }
    const render = (now) => {
      const delta = Math.min((now - lastTime) / 16.67, 2)
      lastTime = now
      frameId = requestAnimationFrame(render)
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)
      pointer.x += (pointer.tx - pointer.x) * .24
      pointer.y += (pointer.ty - pointer.y) * .24
      const dx = pointer.x - pointer.px
      const dy = pointer.y - pointer.py
      pointer.speed = Math.min(Math.hypot(dx, dy), 42)
      pointer.px = pointer.x
      pointer.py = pointer.y
      if (pointer.active) {
        trail.unshift({ x: pointer.x, y: pointer.y })
        const trailLength = Math.floor(12 + pointer.speed * 1.05)
        trail.length = Math.min(trail.length, trailLength)
        if (pointer.speed > 1.5 && Math.random() < Math.min(.75, pointer.speed / 24)) emit(pointer.speed > 18 ? 2 : 1)
      }
      const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 95 + pointer.speed * 2)
      glow.addColorStop(0, `rgba(255,255,255,${.17 + pointer.speed / 180})`)
      glow.addColorStop(.18, `rgba(76,224,228,${.11 + pointer.speed / 220})`)
      glow.addColorStop(.52, "rgba(142,125,255,.08)")
      glow.addColorStop(1, "rgba(142,125,255,0)")
      context.fillStyle = glow
      context.beginPath(); context.arc(pointer.x, pointer.y, 95 + pointer.speed * 2, 0, Math.PI * 2); context.fill()
  context.globalCompositeOperation = "lighter"
  const flameWidth = 22 + pointer.speed * .55
  const flameHeight = 48 + pointer.speed * 1.25
  const flame = context.createRadialGradient(pointer.x, pointer.y + flameHeight * .2, 0, pointer.x, pointer.y, flameHeight)
  flame.addColorStop(0, `rgba(255,255,255,${.72 + pointer.speed / 180})`)
  flame.addColorStop(.16, `rgba(117,247,255,${.62 + pointer.speed / 260})`)
  flame.addColorStop(.46, "rgba(22,212,220,.32)")
  flame.addColorStop(.75, "rgba(71,88,255,.13)")
  flame.addColorStop(1, "rgba(71,88,255,0)")
  context.fillStyle = flame
  context.beginPath(); context.ellipse(pointer.x, pointer.y + flameHeight * .12, flameWidth, flameHeight, 0, 0, Math.PI * 2); context.fill()
  context.fillStyle = "rgba(207,255,255,.38)"
  context.beginPath(); context.ellipse(pointer.x, pointer.y - flameHeight * .16, flameWidth * .38, flameHeight * .72, 0, 0, Math.PI * 2); context.fill()
  trail.slice(0, Math.min(12, trail.length)).forEach((point, index) => { const fade = (1 - index / 12) * .35; const size = Math.max(1.5, (1 - index / 14) * (6 + pointer.speed * .12)); context.fillStyle = `rgba(77,232,239,${fade})`; context.beginPath(); context.ellipse(point.x, point.y + index * 2.4, size, size * (1.5 + index / 8), 0, 0, Math.PI * 2); context.fill() })
      particles.forEach((particle) => { particle.x += particle.vx * delta; particle.y += particle.vy * delta; particle.vx *= .985; particle.vy *= .985; particle.life -= .018 * delta; context.fillStyle = `rgba(119,238,255,${Math.max(0, particle.life)})`; context.shadowBlur = 12; context.shadowColor = "#4ce0e4"; context.beginPath(); context.arc(particle.x, particle.y, particle.size * particle.life, 0, Math.PI * 2); context.fill(); context.shadowBlur = 0 })
      for (let i = particles.length - 1; i >= 0; i -= 1) if (particles[i].life <= 0) particles.splice(i, 1)
      bursts.forEach((burst) => { burst.age += .035 * delta; context.strokeStyle = `rgba(142,125,255,${Math.max(0, .45 - burst.age)})`; context.lineWidth = 1.5; context.beginPath(); context.arc(burst.x, burst.y, burst.age * 48, 0, Math.PI * 2); context.stroke() })
      for (let i = bursts.length - 1; i >= 0; i -= 1) if (bursts[i].age >= 1) bursts.splice(i, 1)
      const flicker = Math.sin(now * .018) * 2
  context.fillStyle = "rgba(255,255,255,.98)"; context.shadowBlur = 22; context.shadowColor = "#4ce0e4"; context.beginPath(); context.arc(pointer.x, pointer.y + flicker, 2.5 + pointer.speed * .04, 0, Math.PI * 2); context.fill(); context.shadowBlur = 0
      context.globalCompositeOperation = "source-over"
    }
    resize(); render(performance.now())
    window.addEventListener("resize", resize); window.addEventListener("pointermove", move, { passive: true }); window.addEventListener("pointerdown", click)
    return () => { cancelAnimationFrame(frameId); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", move); window.removeEventListener("pointerdown", click) }
  }, [])

  return <canvas ref={ref} className="cursor-power-canvas" aria-hidden="true" />
}

function HUD({ onTerminal }) { return <aside className="hud glass-panel"><div className="hud-top"><span className="status-dot" /> SYSTEM ONLINE <span className="hud-time">{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span></div><div className="hud-metric"><span>SESSION</span><strong>CHATHUPA.OS</strong></div><div className="hud-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><button onClick={onTerminal} className="hud-command"><Terminal size={14} /> OPEN TERMINAL <kbd>⌘ K</kbd></button></aside> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [filter, setFilter] = useState("ALL")
  const [command, setCommand] = useState("")
  const [output, setOutput] = useState(["> boot portfolio --interactive", "system ready. type 'help' to explore."])
  const visibleProjects = useMemo(() => filter === "ALL" ? projects : projects.filter((p) => p.type.includes(filter)), [filter])

  useEffect(() => { const key = (e) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setPaletteOpen(true) } if (e.key === "Escape") { setPaletteOpen(false); setTerminalOpen(false) } }; window.addEventListener("keydown", key); return () => window.removeEventListener("keydown", key) }, [])
  useEffect(() => {
    const shell = document.querySelector(".portfolio-shell")
    const movePointer = (event) => {
      shell?.style.setProperty("--pointer-x", `${event.clientX}px`)
      shell?.style.setProperty("--pointer-y", `${event.clientY}px`)
    }
    window.addEventListener("pointermove", movePointer, { passive: true })
    return () => window.removeEventListener("pointermove", movePointer)
  }, [])
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); setPaletteOpen(false) }
  const runCommand = (e) => { if (e.key !== "Enter") return; const value = command.trim().toLowerCase(); const responses = { help: "commands: about · skills · projects · experience · education · contact · github · linkedin · clear", about: `${portfolioConfig.name} — ${portfolioConfig.title}.`, skills: portfolioConfig.skills.frontend.concat(portfolioConfig.skills.backend).join(" · "), projects: "6 verified builds loaded. navigate to /projects to inspect.", experience: "RedCode Solution · Software Engineering Trainee · January 2025 – August 2025.", education: "University of Sri Jayewardenepura · second-year undergraduate.", contact: `email ${portfolioConfig.email}`, github: portfolioConfig.github, linkedin: portfolioConfig.linkedin }; setOutput((current) => value === "clear" ? [] : [...current, `> ${value}`, responses[value] || "command not found — try 'help'"]); setCommand("") }
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" })
  const [contactStatus, setContactStatus] = useState("idle")
  const submitContact = async (e) => { e.preventDefault(); setContactStatus("sending"); try { const data = new FormData(e.currentTarget); data.append("access_key", "3aa15a33-2b36-4eb9-9859-b55b7a6d76d2"); data.append("subject", `Portfolio message from ${contactForm.name}`); const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data }).then((res) => res.json()); if (!response.success) throw new Error("Unable to send"); setContactForm({ name: "", email: "", message: "" }); setContactStatus("sent"); } catch { setContactStatus("error") } }

  return <main className="portfolio-shell"><EnergyField /><CursorPowerTrail /><div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="site-header"><a href="#home" className="brand" onClick={() => go("home")}><span>CC</span><small>CREATIVE DEVELOPER</small></a><nav className={menuOpen ? "nav-links open" : "nav-links"}>{["about", "skills", "projects", "contact"].map((id, i) => <a key={id} href={`#${id}`} onClick={() => go(id)}><b>0{i + 1}</b>{id.toUpperCase()}</a>)}</nav><div className="header-actions"><button className="palette-trigger" onClick={() => setPaletteOpen(true)}><Command size={15} /> COMMAND <kbd>⌘K</kbd></button><button className="menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button></div></header>
    <HUD onTerminal={() => setTerminalOpen(true)} />
    <section id="home" className="hero section-wrap"><div className="hero-copy"><div className="eyebrow"><span className="pulse" /> BUILDING IDEAS INTO SOFTWARE <span className="eyebrow-line" /></div><p className="hero-kicker">FULL STACK DEVELOPER <span>/</span> SOFTWARE ENGINEERING ENTHUSIAST</p><h1>Building <em>digital</em><br />universes<span className="accent-dot">.</span></h1><p className="hero-lede">I&apos;m Chathupa Chamika — an enthusiastic developer transforming complex problems into clear, purposeful experiences with code.</p><div className="hero-actions"><Button onClick={() => go("projects")} className="primary-cta">EXPLORE MY WORK <ArrowUpRight size={17} /></Button><a className="text-link" href={cvFile} download><Download size={16} /> DOWNLOAD CV</a></div><div className="hero-meta"><span><b>BASED IN</b> COLOMBO, LK</span><span><b>FOCUS</b> WEB · SYSTEMS · UX</span></div></div><div className="hero-visual"><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="portrait-frame"><img src={portrait} alt="Chathupa Chamika" /><div className="scanline" /></div><div className="visual-label label-top">IDENTITY // 001</div><div className="visual-label label-bottom">JAVA · REACT · SPRING</div><div className="coordinate">06°55&apos;N<br />79°51&apos;E</div></div><div className="scroll-cue"><span /> SCROLL TO EXPLORE</div></section>
    <section id="about" className="section-wrap about-section"><div className="section-heading"><span>01 / PROFILE</span><h2>Curious by nature.<br /><em>Precise by craft.</em></h2></div><div className="about-grid"><div className="about-statement">My academic world blends <strong>Chemistry, Statistics &amp; Mathematics</strong> with software engineering — a combination that keeps me analytical, curious, and focused on solving real-world problems.</div><div className="about-copy"><p>I&apos;m an enthusiastic second-year university student building efficient, scalable applications with Java, Spring Boot, Angular, React, and Flutter.</p><div className="stat-row"><div><strong>06+</strong><span>PROJECTS SHIPPED</span></div><div><strong>04</strong><span>CORE DOMAINS</span></div><div><strong>∞</strong><span>IDEAS IN QUEUE</span></div></div><div className="about-links"><a href={portfolioConfig.github} target="_blank" rel="noreferrer"><Github size={15} /> GITHUB</a><a href={portfolioConfig.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LINKEDIN</a><a href={`mailto:${portfolioConfig.email}`}><Mail size={15} /> EMAIL ME</a></div></div></div><div className="services-strip"><div className="section-heading compact"><span>WHAT I DO</span><h2>Built for <em>impact.</em></h2></div><div className="service-grid">{[["01","Full Stack Development","Building end-to-end applications with modern technologies"],["02","Backend Development","Creating robust APIs and services with Spring Boot and Java"],["03","Frontend Development","Crafting responsive interfaces with Angular and React"],["04","Mobile App Development","Building cross-platform experiences with Flutter"]].map(([number,title,copy]) => <article className="service-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section id="experience" className="section-wrap journey-section"><div className="section-heading"><span>02 / JOURNEY</span><h2>Education &amp;<br /><em>experience.</em></h2></div><div className="timeline">{[["2024 — PRESENT","Undergraduate · University of Sri Jayewardenepura","Second-year Bachelor of Science student reading Chemistry, Statistics, and Mathematics."],["JAN 2025 — PRESENT","Intern Software Engineer · RedCode Solution","Hands-on experience in software development, web applications, project management, and collaborative delivery."],["FEB — DEC 2024","iCET Certified Developer · ICD","Diploma focused on software engineering, modern programming principles, and full-stack development."],["2012 — 2023","School Life · G/P. De S. Kularathne College","Completed GCE O/L and A/L in the Physical Science stream while participating in science and computer clubs."]].map(([date,title,copy]) => <article className="timeline-item" key={title}><span className="timeline-date">{date}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>
    <section id="skills" className="section-wrap skills-section"><div className="section-heading compact"><span>02 / TOOLKIT</span><h2>My current<br /><em>frequency.</em></h2></div><div className="skill-grid">{skills.map(([name, icon], index) => <div className="skill-cell" key={name}><span>0{index + 1}</span><img src={icon} alt="" /><strong>{name}</strong><small>ACTIVE MODULE</small></div>)}</div><div className="skill-footer"><span>THE STACK IS ALWAYS EVOLVING</span><div className="signal-line" /><span>JAVA · TS · SQL · REST</span></div></section>
    <section id="projects" className="section-wrap projects-section"><div className="section-heading project-heading"><div><span>03 / SELECTED BUILDS</span><h2>Things I&apos;ve<br /><em>made real.</em></h2></div><div className="filter-row">{["ALL", "FULL STACK", "FRONTEND", "DESKTOP"].map((item) => <button key={item} className={filter === item.split(" ")[0] ? "active" : ""} onClick={() => setFilter(item.split(" ")[0])}>{item}</button>)}</div></div><div className="project-grid">{visibleProjects.map((project, index) => <a className={`project-card ${project.accent}`} href={project.link} target="_blank" rel="noreferrer" key={project.title}><div className="project-image"><img src={project.image} alt="" /><div className="project-number">0{index + 1}</div><ExternalLink size={20} className="project-arrow" /></div><div className="project-info"><span>{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <b key={tag}>{tag}</b>)}</div></div></a>)}</div></section>
    <section id="contact" className="section-wrap contact-section"><div className="contact-panel glass-panel"><div className="contact-intro"><span className="eyebrow">04 / OPEN CHANNEL</span><h2>Let&apos;s make<br /><em>something matter.</em></h2><p>Have a project, a question, or an interesting problem? Send a signal. I&apos;d love to hear from you.</p><div className="contact-data"><a href={`mailto:${portfolioConfig.email}`}><Mail size={17} /> EMAIL <strong>{portfolioConfig.email}</strong></a><a href="tel:+94771234567"><Phone size={17} /> PHONE <strong>+94 77 123 4567</strong></a><a href="https://maps.google.com/?q=Colombo,+Sri+Lanka" target="_blank" rel="noreferrer"><MapPin size={17} /> LOCATION <strong>COLOMBO, SRI LANKA</strong></a><div className="social-row"><a href={portfolioConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github /></a><a href={portfolioConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin /></a></div></div></div><form className="contact-form" onSubmit={submitContact}><div className="form-heading"><span>TRANSMISSION FORM</span><small>{contactStatus === "sent" ? "MESSAGE SENT" : contactStatus === "error" ? "TRY AGAIN" : "I REPLY FAST"}</small></div><label htmlFor="contact-name">YOUR NAME<input id="contact-name" name="name" required placeholder="John Doe" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} /></label><label htmlFor="contact-email">EMAIL ADDRESS<input id="contact-email" name="email" type="email" required placeholder="you@example.com" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} /></label><label htmlFor="contact-message">YOUR MESSAGE<textarea id="contact-message" name="message" required placeholder="Tell me about your idea..." value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} /></label><button type="submit" disabled={contactStatus === "sending"}>{contactStatus === "sending" ? <><Loader2 size={16} className="spin" /> SENDING...</> : <><Send size={16} /> SEND TRANSMISSION</>}</button>{contactStatus === "sent" && <p className="form-success">Your message is in orbit. I&apos;ll be in touch soon.</p>}{contactStatus === "error" && <p className="form-error">Something went wrong. Please email me directly instead.</p>}</form></div></section>
    <footer><span>© 2025 CHATHUPA CHAMIKA</span><span>DESIGNED &amp; BUILT WITH INTENT</span><a href="#home" onClick={() => go("home")}>BACK TO TOP ↑</a></footer>
    {paletteOpen && <div className="overlay" onClick={() => setPaletteOpen(false)}><div className="palette glass-panel" onClick={(e) => e.stopPropagation()}><div className="palette-input"><Command /><input autoFocus placeholder="What do you want to explore?" onChange={(e) => setCommand(e.target.value)} value={command} /></div>{["about", "skills", "projects", "contact"].filter((item) => item.includes(command.toLowerCase())).map((item) => <button key={item} onClick={() => go(item)}><span>GO TO</span>{item.toUpperCase()} <ChevronDown size={15} /></button>)}<small>ESC TO CLOSE · ↑↓ TO NAVIGATE</small></div></div>}
    {terminalOpen && <div className="overlay" onClick={() => setTerminalOpen(false)}><div className="terminal glass-panel" onClick={(e) => e.stopPropagation()}><div className="terminal-head"><span /><span /><span /><b>chathupa@portfolio:~</b><button onClick={() => setTerminalOpen(false)}><X size={15} /></button></div><div className="terminal-body">{output.map((line, i) => <div key={i} className={line.startsWith(">") ? "terminal-command" : ""}>{line}</div>)}<div className="terminal-prompt"><span>visitor@cc:~$</span><input autoFocus value={command} onChange={(e) => setCommand(e.target.value)} onKeyDown={runCommand} /></div></div></div></div>}
  </main>
}

export default App
