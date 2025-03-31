"use client"

import { useRef } from "react"
import { Badge } from "./ui/badge"
import { motion, useScroll, useTransform } from "framer-motion"
import { 
  GraduationCap, 
  School, 
  Code2, 
  Building2, 
  BookOpen,
  BrainCircuit,
  ExternalLink 
} from "lucide-react"

export default function Education() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const timelineItems = [
    {
      period: "January 2012 - December 2023",
      title: "School Life",
      description:
        "Attended G/P.De S.Kularathne College, completing both GCE O/L and A/L exams in the Physical Science stream. Active participant in science and computer clubs.",
      icon: (
        <a href="https://web.facebook.com/GPDeSKularathnaCollegeAmbalangoda/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer">
          <School className="h-6 w-6" />
        </a>
      ),
      iconBg: "from-blue-600 to-blue-400",
      delay: 0.2,
      link: "https://web.facebook.com/GPDeSKularathnaCollegeAmbalangoda/?_rdc=1&_rdr#",
    },
    {
      period: "February 2024 - December 2024",
      title: "iCET Certified Developer (ICD)",
      description:
        "Institute of Computer Engineering Technology, Panadura - Diploma. Focused on software engineering and programming.",
      icon: (
        <a href="https://www.icet.lk/" target="_blank" rel="noopener noreferrer">
          <Code2 className="h-6 w-6" />
        </a>
      ),
      iconBg: "from-emerald-600 to-emerald-400",
      delay: 0.3,
      link: "https://www.icet.lk/",
    },
    {
      period: "2025 January - Present",
      title: "Intern Software Engineer - RedCode Solution pvt-ltd",
      description:
        "Gaining hands-on experience in software development, web applications, and project management. Working with modern technologies, collaborating with teams, and contributing to real-world projects.",
      icon: (
        <a href="https://redcodesolution.com/" target="_blank" rel="noopener noreferrer">
          <Building2 className="h-6 w-6" />
        </a>
      ),
      iconBg: "from-purple-600 to-purple-400",
      delay: 0.4,
      link: "https://redcodesolution.com/",
    },
    {
      period: "Intake pending",
      title: "Undergraduate - University of Sri Jayewardenepura",
      description:
        "Pursuing a Bachelor of Science degree in Physical Science, focusing on mathematics, physics, and computer science.",
      icon: (
        <a href="https://www.sjp.ac.lk/" target="_blank" rel="noopener noreferrer">
          <BrainCircuit className="h-6 w-6" />
        </a>
      ),
      iconBg: "from-red-600 to-red-400",
      delay: 0.5,
      link: "https://www.sjp.ac.lk/",
    },
  ]

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/70 to-black/80" />

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <motion.div ref={containerRef} style={{ opacity }} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.5,
            }}
            className="inline-block"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20">
              Educational Journey
            </Badge>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">
            Education & Experience
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full"
          />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: item.delay,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex flex-col md:flex-row items-start mb-16 group"
            >
              {/* Timeline Line with Animation */}
              {index < timelineItems.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1.5, delay: item.delay + 0.3 }}
                  viewport={{ once: true }}
                  className="absolute left-8 top-16 w-1 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent bottom-0 hidden md:block"
                />
              )}

              {/* Icon with Pulse Effect */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.iconBg} p-3 flex items-center justify-center text-white shadow-lg relative`}
                >
                  <motion.div
                    animate={{
                      boxShadow: ["0 0 0 0px rgba(255,255,255,0.3)", "0 0 0 10px rgba(255,255,255,0)"],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      repeatDelay: 1,
                    }}
                    className="absolute inset-0 rounded-xl"
                  />
                  {item.icon}
                </motion.div>
              </div>

              {/* Content Card */}
              <div className="ml-0 md:ml-8 flex-1 mt-4 md:mt-0">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Gradient Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Period Badge */}
                  {item.period && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-purple-300 mb-3">
                      {item.period}
                    </span>
                  )}

                  {/* Title with Gradient */}
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent flex items-center">
                    {item.title}
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 text-blue-400" />
                      </a>
                    </motion.div>
                  </h3>

                  {/* Description with Better Typography */}
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>

                  {/* Bottom Gradient Line */}
                  <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: item.delay + 0.5 }}
                    className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 to-transparent mt-4"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}