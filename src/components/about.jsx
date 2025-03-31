"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { Badge } from "./ui/badge"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">My Background</h3>
                <p className="text-muted-foreground mb-4">
                  I'm an enthusiastic and dedicated university student with a strong foundation in frontend, backend,
                  and full stack development. My journey in software development started at G/P.De S.Kularathne College,
                  where I developed a passion for technology and problem-solving.
                </p>
                <p className="text-muted-foreground mb-6">
                  Currently, I'm focused on leveraging my IT expertise to develop innovative solutions using
                  technologies like Java, Spring Boot, Angular, and more. I'm particularly interested in creating
                  efficient, scalable applications that solve real-world problems.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="sm" className="gap-2 border-primary/20">
                    <a href="https://github.com/Chathupachamika" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2 border-primary/20">
                    <a href="https://www.linkedin.com/in/chathupa-chamika-" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2 border-primary/20">
                    <a href="mailto:contact@example.com">
                      <Mail className="w-4 h-4" />
                      Email Me
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">What I Do</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <span className="text-blue-500">01</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Full Stack Development</h4>
                    <p className="text-muted-foreground text-sm">
                      Building end-to-end applications with modern technologies
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <span className="text-purple-500">02</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Backend Development</h4>
                    <p className="text-muted-foreground text-sm">
                      Creating robust APIs and services with Spring Boot and Java
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <span className="text-blue-500">03</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Frontend Development</h4>
                    <p className="text-muted-foreground text-sm">
                      Crafting responsive and intuitive user interfaces with Angular and React
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <span className="text-purple-500">04</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Mobile App Development</h4>
                    <p className="text-muted-foreground text-sm">
                      Building cross-platform mobile applications with Flutter
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

