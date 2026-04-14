"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Github, Linkedin, Mail, GraduationCap } from "lucide-react"
import { Badge } from "./ui/badge"

export default function About() {
  // Framer Motion variants for staggering list items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      {/* Optional: Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 transform -translate-y-1/2" />
      
      <div className="container px-4 md:px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20 bg-background/50 backdrop-blur-sm">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Background */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-md border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  My Background
                </h3>
                
                {/* New Academic Highlight Box */}
                <div className="flex items-center gap-3 p-4 mb-6 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Currently in 2nd Year</p>
                    <p className="text-xs text-muted-foreground">BSc. reading in Chemistry, Statistics & Mathematics</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  I'm an enthusiastic and dedicated university student with a strong foundation in frontend, backend,
                  and full stack development. My unique academic combination of Chemistry, Statistics, and Mathematics 
                  highly strengthens my analytical thinking and complex problem-solving skills in programming.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Currently, I'm focused on leveraging my IT expertise to develop innovative solutions using
                  technologies like Java, Spring Boot, Angular, and React. I'm particularly interested in creating
                  efficient, scalable applications that solve real-world problems.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="sm" className="gap-2 border-primary/20 hover:bg-primary/10 transition-colors">
                    <a href="https://github.com/Chathupachamika" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2 border-primary/20 hover:bg-primary/10 transition-colors">
                    <a href="https://www.linkedin.com/in/chathupa-chamika-" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2 border-primary/20 hover:bg-primary/10 transition-colors">
                    <a href="mailto:contact@example.com">
                      <Mail className="w-4 h-4" />
                      Email Me
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column: What I Do */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 md:pl-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
              <ul className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "Full Stack Development",
                    desc: "Building end-to-end applications with modern technologies",
                    color: "blue"
                  },
                  {
                    num: "02",
                    title: "Backend Development",
                    desc: "Creating robust APIs and services with Spring Boot and Java",
                    color: "purple"
                  },
                  {
                    num: "03",
                    title: "Frontend Development",
                    desc: "Crafting responsive and intuitive user interfaces with Angular and React",
                    color: "blue"
                  },
                  {
                    num: "04",
                    title: "Mobile App Development",
                    desc: "Building cross-platform mobile applications with Flutter",
                    color: "purple"
                  }
                ].map((item, index) => (
                  <motion.li key={index} variants={itemVariants} className="flex items-start group">
                    <div className={`mr-4 mt-1 w-10 h-10 rounded-full bg-${item.color}-500/10 flex items-center justify-center group-hover:bg-${item.color}-500/20 transition-colors duration-300`}>
                      <span className={`text-${item.color}-500 font-semibold`}>{item.num}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}