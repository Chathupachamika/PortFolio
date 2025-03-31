"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"
import wecare from '../assets/images/wecare.png';
import zony from '../assets/images/zony.jpeg';
import userform from '../assets/images/userform.jpg';
import country from '../assets/images/country.jpg';
import burgers from '../assets/images/burgers.jpg';
import todo from '../assets/images/todo.jpg';
import weather from '../assets/images/weather.jpg';
import clothify from '../assets/images/clothify.jpg';
import defense from '../assets/images/defense.jpg';
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [showAll, setShowAll] = useState(false) // State to toggle project visibility

  const projects = [
    {
      title: "ZONY Campus Smart LMS",
      description:
        "A comprehensive campus management web application with intuitive interfaces and robust Java Spring Boot backend for streamlined educational and administrative workflows.",
      image: zony,
      link: "https://github.com/Chathupachamika/ZONY-Campus",
      technologies: ["Angular", "Java", "Spring Boot", "MySQL", "Rest API", "AI bot Gemini"],
      category: "fullstack",
    },
    {
      title: "Clothify Store",
      description: "E-commerce platform built with modern technologies for seamless shopping experience.",
      image: clothify,
      link: "https://github.com/Chathupachamika/Clothify_Store-app",
      technologies: ["JavaFX", "Java"],
      category: "desktop",
    },
    {
      title: "Weather Application",
      description:
        "Real-time weather application that allows users to view current weather conditions and forecasts for their location.",
      image: weather,
      link: "https://chathupachamika.github.io/Weather_site/",
      technologies: ["HTML", "CSS", "JavaScript", "API Handling"],
      category: "frontend",
    },
    {
      title: "Defense System",
      description:
        "A strategic simulation application featuring components like submarines, tanks, and helicopters to model defense systems.",
      image: defense,
      link: "https://github.com/Chathupachamika/Defense_System",
      technologies: ["Java", "Observer Pattern"],
      category: "desktop",
    },
    {
      title: "Mahii's Tasks To Do",
      description: "A JavaFX-based project showcasing GUI design and efficient task management.",
      image: todo,
      link: "https://github.com/Chathupachamika/Mahii-s_tasks_javaFx",
      technologies: ["JavaFX", "Java"],
      category: "desktop",
    },
    {
      title: "User Form Application",
      description:
        "A MERN stack user form is a full-stack application built with MongoDB, Express, React, and Node.js, enabling seamless user input, data storage, and dynamic UI updates.",
      image: userform,
      link: "https://github.com/Chathupachamika/User_Form-crud--MERN-Stack",
      technologies: ["React", "Node JS", "MongoDB", "Express JS"],
      category: "fullstack",
    },
    {
      title: "Country Information Site",
      description:
        "A web application displaying country-specific data such as population, language, and geography with a clean and responsive design.",
      image: country,
      link: "https://github.com/Chathupachamika/Country_Information_Site",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
    },
    {
      title: "WeCare Prescription Management System",
      description:
        "An innovative solution designed to streamline prescription processes, improve accuracy, and enhance healthcare delivery with robust security and advanced features.",
      image: wecare,
      link: "https://github.com/iCET-110/Hospital-Management-Frontend",
      technologies: ["Spring Boot", "Microservices", "Maven", "MySQL", "Angular", "TypeScript"],
      category: "fullstack",
    },
    {
      title: "MOS Burgers",
      description:
        "A standalone application featuring an intuitive user interface for efficient restaurant management.",
      image: burgers,
      link: "https://chathupachamika.github.io/MOS_Burgers_project/",
      technologies: ["HTML", "CSS", "JavaScript", "RestAPI"],
      category: "frontend",
    },
  ]

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
    { id: "frontend", name: "Frontend" },
    { id: "desktop", name: "Desktop Apps" },
  ]

  return (
    <section id="project" className="py-20 bg-gradient-to-b from-background/80 to-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl">
            Here are some of the projects I've worked on. Each project represents different skills and technologies I've
            mastered.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => category.id === "all" || project.category === category.id)
                  .slice(0, showAll ? projects.length : 6) // Show only 6 projects initially
                  .map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="relative group"
                    >
                      <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                            <div className="flex gap-2">
                              <Button asChild size="sm" variant="default" className="gap-1">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-4 w-4" />
                                  Code
                                </a>
                              </Button>
                              {project.category === "frontend" && (
                                <Button asChild size="sm" variant="secondary" className="gap-1">
                                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4" />
                                    Demo
                                  </a>
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 3} more
                            </Badge>
                          )}
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
              </div>
              {projects.filter((project) => category.id === "all" || project.category === category.id).length > 6 && (
                <div className="flex justify-center mt-6">
                  <Button onClick={() => setShowAll(!showAll)} variant="default">
                    {showAll ? "Show Less" : "Show More"}
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

