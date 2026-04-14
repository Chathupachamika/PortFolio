"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

// Images
import wecare from '../assets/images/wecare.png';
import zony from '../assets/images/zony.jpeg';
import userform from '../assets/images/userform.jpg';
import country from '../assets/images/country.jpg';
import burgers from '../assets/images/burgers.jpg';
import todo from '../assets/images/todo.jpg';
import weather from '../assets/images/weather.jpg';
import clothify from '../assets/images/clothify.jpg';
import defense from '../assets/images/defense.jpg';

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

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
      title: "WeCare Prescription Management",
      description:
        "An innovative solution designed to streamline prescription processes, improve accuracy, and enhance healthcare delivery with robust security.",
      image: wecare,
      link: "https://github.com/iCET-110/Hospital-Management-Frontend",
      technologies: ["Spring Boot", "Microservices", "MySQL", "Angular", "TypeScript"],
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
    <section id="project" className="py-20 bg-gradient-to-b from-background/80 to-background overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20 bg-background/50 backdrop-blur-sm">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl px-4">
            Here are some of the projects I've worked on. Each represents a unique challenge and demonstrates different technologies I've mastered.
          </p>
        </motion.div>

        {/* Projects Tabs */}
        <Tabs defaultValue="all" className="w-full">
          
          {/* Scrollable Tab List for Mobile */}
          <div className="w-full overflow-x-auto pb-4 mb-6 md:mb-8 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <TabsList className="inline-flex min-w-full sm:min-w-0 sm:flex sm:justify-center h-auto p-1 bg-muted/50">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-6 py-2.5 rounded-md whitespace-nowrap data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Tab Content */}
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects
                  .filter((project) => category.id === "all" || project.category === category.id)
                  .slice(0, showAll ? projects.length : 6)
                  .map((project, index) => (
                    <motion.div
                      key={`${category.id}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group flex h-full"
                    >
                      <Card className="flex flex-col h-full w-full overflow-hidden bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                        
                        {/* Image Container */}
                        <div className="relative h-48 sm:h-52 w-full overflow-hidden border-b border-border/50 bg-muted">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Card Content */}
                        <CardHeader className="p-5 pb-0 flex-none">
                          <h3 className="text-xl font-bold tracking-tight line-clamp-1 group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                        </CardHeader>
                        
                        <CardContent className="p-5 pt-3 flex-grow">
                          <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
                            {project.description}
                          </p>
                          
                          {/* Tech Stack Badges */}
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.slice(0, 4).map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="px-2 py-0.5 text-[10px] font-medium bg-secondary/50 text-secondary-foreground">
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 4 && (
                              <Badge variant="outline" className="px-2 py-0.5 text-[10px] font-medium border-border/50">
                                +{project.technologies.length - 4}
                              </Badge>
                            )}
                          </div>
                        </CardContent>

                        {/* Action Buttons (Always visible for touch access) */}
                        <CardFooter className="p-5 pt-0 mt-auto border-t border-border/10 flex flex-wrap gap-3">
                          <Button asChild size="sm" className="flex-1 min-w-[100px] gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                              Code
                            </a>
                          </Button>
                          
                          {project.category === "frontend" && (
                            <Button asChild size="sm" variant="default" className="flex-1 min-w-[100px] gap-2 shadow-sm">
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                                Demo
                              </a>
                            </Button>
                          )}
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
              </div>
              
              {/* Show More/Less Button */}
              {projects.filter((project) => category.id === "all" || project.category === category.id).length > 6 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="flex justify-center mt-10"
                >
                  <Button 
                    onClick={() => setShowAll(!showAll)} 
                    variant="outline" 
                    size="lg"
                    className="min-w-[160px] border-primary/20 hover:bg-primary/5"
                  >
                    {showAll ? "Show Less Projects" : "View All Projects"}
                  </Button>
                </motion.div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}