"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress" // Corrected import path
import { cn } from "@/lib/utils"

import javaIcon from "../assets/Tech_Icon/java.png"
import jsIcon from "../assets/Tech_Icon/js.png"
import dartIcon from "../assets/Tech_Icon/dart.png"
import sqlIcon from "../assets/Tech_Icon/sql.png"
import typescriptIcon from "../assets/Tech_Icon/typescript.png"
import angularIcon from "../assets/Tech_Icon/angular.png"
import springBootIcon from "../assets/Tech_Icon/spring-boot.png"
import hibernateIcon from "../assets/Tech_Icon/hibernate.png"
import javaFXIcon from "../assets/Tech_Icon/javafx.png"
import flutterIcon from "../assets/Tech_Icon/flutter.png"
import mysqlIcon from "../assets/Tech_Icon/mysql.png"
import mongoDb from "../assets/Tech_Icon/mongodb.png"
import cssIcon from "../assets/Tech_Icon/css.png"
import figmaIcon from "../assets/Tech_Icon/figma.png"
import bootstrapIcon from "../assets/Tech_Icon/bootstrap.png"
import postgresql from "../assets/Tech_Icon/postgres.png"
import postmanIcon from "../assets/Tech_Icon/postman.png"

// Skill card component with 3D tilt effect
function SkillCard({ skill, index, proficiency = 85 }) {
  const cardRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const ySpring = useSpring(y, { stiffness: 150, damping: 15 })

  const rotateXValue = isMobile ? 0 : 10
  const rotateYValue = isMobile ? 0 : 10
  const shadowBlurValue = isMobile ? "none" : 15

  const rotateX = (val) => (ySpring.get() >= -100 && ySpring.get() <= 100 ? val * (ySpring.get() / 100) : 0)
  const rotateY = (val) => (xSpring.get() >= -100 && xSpring.get() <= 100 ? -val * (xSpring.get() / 100) : 0)
  const shadowBlur = (val) =>
    xSpring.get() >= -100 && xSpring.get() <= 100 ? val * (Math.abs(xSpring.get()) / 100) : 0

  const handleMouseMove = (e) => {
    if (isMobile) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col items-center"
    >
      <motion.div
        style={{
          rotateX: !isMobile ? rotateX(rotateXValue) : 0,
          rotateY: !isMobile ? rotateY(rotateYValue) : 0,
          boxShadow: !isMobile
            ? `0px ${shadowBlur(shadowBlurValue)}px ${shadowBlur(shadowBlurValue) * 2}px rgba(var(--primary-rgb), 0.15)`
            : "none",
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05 }}
        className="w-full aspect-square max-w-[120px] rounded-xl bg-card border border-border/50 p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 relative overflow-hidden group"
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon with floating animation */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 3,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
          className="relative w-12 h-12 flex items-center justify-center"
        >
          <img
            src={skill.icon || "/placeholder.svg"}
            alt={skill.name}
            className="w-full h-full object-contain drop-shadow-md"
          />
        </motion.div>

        {/* Skill name */}
        <span className="text-sm font-medium text-center">{skill.name}</span>

        {/* Proficiency indicator that appears on hover */}
        <div className="absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Progress value={proficiency} className="h-1 rounded-none" />
        </div>
      </motion.div>
    </motion.div>
  )
}

// Animated tab trigger component
function AnimatedTabTrigger({ value, activeTab, children }) {
  return (
    <TabsTrigger
      value={value}
      className={cn(
        "relative overflow-hidden text-xs md:text-sm py-2 px-3 transition-all duration-300",
        activeTab === value ? "text-primary font-medium" : "text-muted-foreground",
      )}
    >
      {children}
      {activeTab === value && (
        <motion.div
          layoutId="activeTabIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </TabsTrigger>
  )
}

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("languages")

  const proficiencies = {
    Java: 90,
    JavaScript: 85,
    TypeScript: 80,
    Dart: 75,
    SQL: 85,
    Angular: 80,
    "Spring Boot": 85,
    Hibernate: 80,
    JavaFX: 75,
    Flutter: 70,
    MySQL: 85,
    PostgreSQL: 80,
    MongoDB: 75,
    Figma: 70,
    Bootstrap: 85,
    CSS: 80,
    Postman: 90,
  }

  const categories = [
    {
      id: "languages",
      name: "Languages",
      icon: "💻",
      skills: [
        { name: "Java", icon: javaIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "Dart", icon: dartIcon },
        { name: "SQL", icon: sqlIcon },
        { name: "TypeScript", icon: typescriptIcon },
      ],
    },
    {
      id: "frameworks",
      name: "Frameworks",
      icon: "🔧",
      skills: [
        { name: "Angular", icon: angularIcon },
        { name: "Spring Boot", icon: springBootIcon },
        { name: "Hibernate", icon: hibernateIcon },
        { name: "JavaFX", icon: javaFXIcon },
        { name: "Flutter", icon: flutterIcon },
      ],
    },
    {
      id: "databases",
      name: "Databases",
      icon: "🗄️",
      skills: [
        { name: "MySQL", icon: mysqlIcon },
        { name: "PostgreSQL", icon: postgresql },
        { name: "MongoDB", icon: mongoDb },
      ],
    },
    {
      id: "ui",
      name: "UI/UX",
      icon: "🎨",
      skills: [
        { name: "Figma", icon: figmaIcon },
        { name: "Bootstrap", icon: bootstrapIcon },
        { name: "CSS", icon: cssIcon },
      ],
    },
    {
      id: "testing",
      name: "Testing",
      icon: "🧪",
      skills: [{ name: "Postman", icon: postmanIcon }],
    },
  ]

  return (
    <section id="tech" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1 text-sm border-primary/20 bg-background/80 backdrop-blur-sm"
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
            >
              My Tech Expertise
            </motion.span>
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Technology Stack
            </span>
          </h2>

          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mb-8"
            animate={{ width: ["0%", "100%", "20%"] }}
            transition={{ duration: 2, times: [0, 0.7, 1] }}
          />

          <p className="text-muted-foreground max-w-2xl">
            I work with a variety of technologies to create robust and scalable applications. Hover over each skill to
            see my proficiency level.
          </p>
        </motion.div>

        <Tabs defaultValue="languages" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <div className="relative">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 bg-background/50 backdrop-blur-sm border border-border/50 p-1 rounded-xl">
              {categories.map((category) => (
                <AnimatedTabTrigger key={category.id} value={category.id} activeTab={activeTab}>
                  <span className="mr-1.5">{category.icon}</span> {category.name}
                </AnimatedTabTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="mt-4 focus-visible:outline-none focus-visible:ring-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-card/30 backdrop-blur-md border-primary/10 overflow-hidden">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <span className="text-2xl">{category.icon}</span>
                        <span>{category.name}</span>
                      </h3>

                      <Badge variant="secondary" className="bg-secondary/10">
                        {category.skills.length} {category.skills.length === 1 ? "skill" : "skills"}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
                      {category.skills.map((skill, index) => (
                        <SkillCard
                          key={skill.name}
                          skill={skill}
                          index={index}
                          proficiency={proficiencies[skill.name] || 75}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Legend for proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2 text-xs text-muted-foreground flex items-center gap-2">
            <span>💡 Tip: Hover over skills to see proficiency level</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

