"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { GraduationCap, Code, Shield, Github, Smartphone } from "lucide-react"

export default function Education() {
  const timelineItems = [
    {
      period: "January 2012 - December 2022",
      title: "School Life",
      description:
        "Attended G/P.De S.Kularathne College, completing both GCE O/L and A/L exams in the Physical Science stream. Active participant in science and computer clubs.",
      icon: <GraduationCap className="h-5 w-5" />,
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-500",
    },
    {
      period: "February 2024 - December 2024",
      title: "iCET Certified Developer (ICD)",
      description:
        "Institute of Computer Engineering Technology, Panadura - Diploma. Focused on software engineering and programming.",
      icon: <GraduationCap className="h-5 w-5" />,
      iconBg: "bg-green-500/20",
      iconColor: "text-green-500",
    },
    {
      period: "2024 February - 2024 November",
      title: "Full Stack Developer - Trainee",
      description:
        "Developed dynamic web applications using Angular, Spring Boot, and SQL for various clients. Integrated RESTful APIs for real-time database management with Spring Boot, JPA, and Hibernate.",
      icon: <Code className="h-5 w-5" />,
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-500",
    },
    {
      title: "Web Security",
      description:
        "Implemented Spring Security for robust authentication and authorization, ensuring secure access control.",
      icon: <Shield className="h-5 w-5" />,
      iconBg: "bg-red-500/20",
      iconColor: "text-red-500",
    },
    {
      title: "Deployment",
      description:
        "Streamlined deployment pipelines using Git for version control and CI/CD practices for continuous integration and delivery.",
      icon: <Github className="h-5 w-5" />,
      iconBg: "bg-yellow-500/20",
      iconColor: "text-yellow-500",
    },
    {
      title: "Mobile Application Development",
      description: "Leveraged Flutter's widgets and tools to build responsive and dynamic user interfaces.",
      icon: <Smartphone className="h-5 w-5" />,
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-500",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background/80 to-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20">
            My Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Education & Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:translate-x-px" />

          {/* Timeline items */}
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-background border border-border transform -translate-x-1/2 flex items-center justify-center z-10">
                <div className={`w-4 h-4 rounded-full ${index % 2 === 0 ? "bg-blue-500" : "bg-purple-500"}`} />
              </div>

              {/* Content */}
              <div className="md:w-1/2 ml-10 md:ml-0 md:px-6">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden">
                  <div className={`h-1 ${index % 2 === 0 ? "bg-blue-500" : "bg-purple-500"}`} />
                  <CardContent className="p-6">
                    {item.period && <p className="text-sm text-muted-foreground mb-2">{item.period}</p>}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-8 h-8 rounded-full ${item.iconBg} flex items-center justify-center ${item.iconColor}`}
                      >
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

