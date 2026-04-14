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
      period: "2024 - Present",
      title: "Undergraduate - University of Sri Jayewardenepura",
      description:
        "Currently in my 2nd year pursuing a Bachelor of Science in Physical Science. Reading a subject combination of Chemistry, Statistics, and Mathematics, which strengthens my analytical and complex problem-solving capabilities.",
      icon: (
        <a href="https://www.sjp.ac.lk/" target="_blank" rel="noopener noreferrer">
          <BrainCircuit className="h-6 w-6" />
        </a>
      ),
      iconBg: "from-red-600 to-red-400",
      delay: 0.2,
      link: "https://www.sjp.ac.lk/",
    },
    {
      period: "January 2025 - Present",
      title: "Intern Software Engineer - RedCode Solution pvt-ltd",
      description:
        "Gaining hands-on experience in software development, web applications, and project management. Working with modern technologies, collaborating with teams, and contributing to real-world projects.",
      icon: (
        <a href="https://redcodesolution.com/" target="_blank" rel="noopener noreferrer">
          <Building2 className="h-6 w-6" />
        </a>
      ),
      iconBg: "from-purple-600 to-purple-400",
      delay: 0.3,
      link: "https://redcodesolution.com/",
    },
    {
      period: "February 2024 - December 2024",
      title: "iCET Certified Developer (ICD)",
      description:
        "Institute of Computer Engineering Technology, Panadura - Diploma. Focused heavily on software engineering, modern programming principles, and full-stack development.",
      icon: (
        <a href="https://www.icet.lk/" target="_blank" rel="noopener noreferrer">
          <Code2 className="h-6 w-6" />
        </a>
      ),
      iconBg: "from-emerald-600 to-emerald-400",
      delay: 0.4,
      link: "https://www.icet.lk/",
    },
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
      delay: 0.5,
      link: "https://web.facebook.com/GPDeSKularathnaCollegeAmbalangoda/?_rdc=1&_rdr#",
    },
  ]

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-background">
      {/* Animated Background tailored for Theme Compatibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background/90 z-0" />

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[100px] animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-[100px] animate-pulse"
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
            <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20 bg-background/50 backdrop-blur-sm">
              Educational Journey
            </Badge>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">
            Education & Experience
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
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
                  className="absolute left-8 top-16 w-1 bg-gradient-to-b from-primary/30 via-primary/20 to-transparent bottom-[-4rem] hidden md:block"
                />
              )}

              {/* Icon with Pulse Effect */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.iconBg} p-3 flex items-center justify-center text-white shadow-lg relative`}
                >
                  <motion.div
                    animate={{
                      boxShadow: ["0 0 0 0px rgba(255,255,255,0.2)", "0 0 0 15px rgba(255,255,255,0)"],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      repeatDelay: 0.5,
                    }}
                    className="absolute inset-0 rounded-2xl"
                  />
                  {item.icon}
                </motion.div>
              </div>

              {/* Content Card */}
              <div className="ml-0 md:ml-8 flex-1 mt-6 md:mt-0 w-full">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-card/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-border/50 shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Gradient Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Period Badge */}
                  {item.period && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 border border-primary/20">
                      {item.period}
                    </span>
                  )}

                  {/* Title with Link Hover */}
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground flex items-center flex-wrap gap-2">
                    {item.title}
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="p-1 hover:bg-primary/10 rounded-md inline-block">
                        <ExternalLink className="h-5 w-5 text-primary" />
                      </a>
                    </motion.div>
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bottom Gradient Line */}
                  <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: item.delay + 0.5 }}
                    className="h-0.5 w-full bg-gradient-to-r from-primary/50 to-transparent mt-6"
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