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
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); setPaletteOpen(false) }
  const runCommand = (e) => { if (e.key !== "Enter") return; const value = command.trim().toLowerCase(); const responses = { help: "commands: about · skills · projects · contact · clear", about: "Chathupa Chamika — full stack developer from Colombo, Sri Lanka.", skills: "Java · Spring Boot · Angular · React · TypeScript · MongoDB", projects: "6 featured builds loaded. navigate to /projects to inspect.", contact: "open the contact channel below or email contact@example.com" }; setOutput((current) => value === "clear" ? [] : [...current, `> ${value}`, responses[value] || "command not found — try 'help'"]); setCommand("") }

  return <main className="portfolio-shell"><EnergyField /><div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="site-header"><a href="#home" className="brand" onClick={() => go("home")}><span>CC</span><small>CREATIVE DEVELOPER</small></a><nav className={menuOpen ? "nav-links open" : "nav-links"}>{["about", "skills", "projects", "contact"].map((id, i) => <a key={id} href={`#${id}`} onClick={() => go(id)}><b>0{i + 1}</b>{id.toUpperCase()}</a>)}</nav><div className="header-actions"><button className="palette-trigger" onClick={() => setPaletteOpen(true)}><Command size={15} /> COMMAND <kbd>⌘K</kbd></button><button className="menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button></div></header>
    <HUD onTerminal={() => setTerminalOpen(true)} />
    <section id="home" className="hero section-wrap"><div className="hero-copy"><div className="eyebrow"><span className="pulse" /> AVAILABLE FOR NEW MISSIONS <span className="eyebrow-line" /></div><p className="hero-kicker">FULL STACK DEVELOPER <span>/</span> DIGITAL ARCHITECT</p><h1>Building <em>digital</em><br />universes<span className="accent-dot">.</span></h1><p className="hero-lede">I&apos;m Chathupa Chamika — an enthusiastic developer transforming complex problems into clear, purposeful experiences with code.</p><div className="hero-actions"><Button onClick={() => go("projects")} className="primary-cta">EXPLORE MY WORK <ArrowUpRight size={17} /></Button><a className="text-link" href={cvFile} download><Download size={16} /> DOWNLOAD CV</a></div><div className="hero-meta"><span><b>BASED IN</b> COLOMBO, LK</span><span><b>FOCUS</b> WEB · SYSTEMS · UX</span></div></div><div className="hero-visual"><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="portrait-frame"><img src={portrait} alt="Chathupa Chamika" /><div className="scanline" /></div><div className="visual-label label-top">IDENTITY // 001</div><div className="visual-label label-bottom">JAVA · REACT · SPRING</div><div className="coordinate">06°55&apos;N<br />79°51&apos;E</div></div><div className="scroll-cue"><span /> SCROLL TO EXPLORE</div></section>
    <section id="about" className="section-wrap about-section"><div className="section-heading"><span>01 / PROFILE</span><h2>Curious by nature.<br /><em>Precise by craft.</em></h2></div><div className="about-grid"><div className="about-statement">My academic world blends <strong>Chemistry, Statistics &amp; Mathematics</strong> with software engineering — a combination that keeps me analytical, curious, and focused on solving real-world problems.</div><div className="about-copy"><p>Currently in my second year, I&apos;m focused on building efficient, scalable applications with Java, Spring Boot, Angular, React, and Flutter.</p><div className="stat-row"><div><strong>06+</strong><span>PROJECTS SHIPPED</span></div><div><strong>04</strong><span>CORE DOMAINS</span></div><div><strong>∞</strong><span>IDEAS IN QUEUE</span></div></div></div></div></section>
    <section id="skills" className="section-wrap skills-section"><div className="section-heading compact"><span>02 / TOOLKIT</span><h2>My current<br /><em>frequency.</em></h2></div><div className="skill-grid">{skills.map(([name, icon], index) => <div className="skill-cell" key={name}><span>0{index + 1}</span><img src={icon} alt="" /><strong>{name}</strong><small>ACTIVE MODULE</small></div>)}</div><div className="skill-footer"><span>THE STACK IS ALWAYS EVOLVING</span><div className="signal-line" /><span>JAVA · TS · SQL · REST</span></div></section>
    <section id="projects" className="section-wrap projects-section"><div className="section-heading project-heading"><div><span>03 / SELECTED BUILDS</span><h2>Things I&apos;ve<br /><em>made real.</em></h2></div><div className="filter-row">{["ALL", "FULL STACK", "FRONTEND", "DESKTOP"].map((item) => <button key={item} className={filter === item.split(" ")[0] ? "active" : ""} onClick={() => setFilter(item.split(" ")[0])}>{item}</button>)}</div></div><div className="project-grid">{visibleProjects.map((project, index) => <a className={`project-card ${project.accent}`} href={project.link} target="_blank" rel="noreferrer" key={project.title}><div className="project-image"><img src={project.image} alt="" /><div className="project-number">0{index + 1}</div><ExternalLink size={20} className="project-arrow" /></div><div className="project-info"><span>{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <b key={tag}>{tag}</b>)}</div></div></a>)}</div></section>
    <section id="contact" className="section-wrap contact-section"><div className="contact-panel glass-panel"><div><span className="eyebrow">04 / OPEN CHANNEL</span><h2>Let&apos;s make<br /><em>something matter.</em></h2><p>Have a project, a question, or an interesting problem? Send a signal. I&apos;d love to hear from you.</p><a className="email-link" href="mailto:contact@example.com">contact@example.com <ArrowUpRight size={18} /></a></div><div className="contact-data"><a href="mailto:contact@example.com"><Mail size={17} /> EMAIL <strong>contact@example.com</strong></a><a href="https://maps.google.com/?q=Colombo,+Sri+Lanka" target="_blank" rel="noreferrer"><MapPin size={17} /> LOCATION <strong>COLOMBO, SRI LANKA</strong></a><div className="social-row"><a href="https://github.com/Chathupachamika" target="_blank" rel="noreferrer"><Github /></a><a href="https://www.linkedin.com/in/chathupa-chamika-" target="_blank" rel="noreferrer"><Linkedin /></a></div></div></div></section>
    <footer><span>© 2025 CHATHUPA CHAMIKA</span><span>DESIGNED &amp; BUILT WITH INTENT</span><a href="#home" onClick={() => go("home")}>BACK TO TOP ↑</a></footer>
    {paletteOpen && <div className="overlay" onClick={() => setPaletteOpen(false)}><div className="palette glass-panel" onClick={(e) => e.stopPropagation()}><div className="palette-input"><Command /><input autoFocus placeholder="What do you want to explore?" onChange={(e) => setCommand(e.target.value)} value={command} /></div>{["about", "skills", "projects", "contact"].filter((item) => item.includes(command.toLowerCase())).map((item) => <button key={item} onClick={() => go(item)}><span>GO TO</span>{item.toUpperCase()} <ChevronDown size={15} /></button>)}<small>ESC TO CLOSE · ↑↓ TO NAVIGATE</small></div></div>}
    {terminalOpen && <div className="overlay" onClick={() => setTerminalOpen(false)}><div className="terminal glass-panel" onClick={(e) => e.stopPropagation()}><div className="terminal-head"><span /><span /><span /><b>chathupa@portfolio:~</b><button onClick={() => setTerminalOpen(false)}><X size={15} /></button></div><div className="terminal-body">{output.map((line, i) => <div key={i} className={line.startsWith(">") ? "terminal-command" : ""}>{line}</div>)}<div className="terminal-prompt"><span>visitor@cc:~$</span><input autoFocus value={command} onChange={(e) => setCommand(e.target.value)} onKeyDown={runCommand} /></div></div></div></div>}
  </main>
}

export default App
