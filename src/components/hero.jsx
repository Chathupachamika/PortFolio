"use client"

import { motion } from "framer-motion"
import cvFile from "../assets/documents/ChathupaCV.pdf"
import { Button } from "./ui/button"
import { Download } from "lucide-react"
import myImage from "../assets/images/headshotchathupa.png"
import { cn } from "../lib/utils"

export default function Hero() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };
  const slideIn = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.2 }
  };
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8 pt-24 md:pt-0 relative z-10">
        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
          className="flex-1 text-center md:text-left"
        >
          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-4"
            >
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Welcome to my portfolio
              </span>
            </motion.div>
          </div>

          <motion.h1 
            className="text-4xl md:text-7xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
              {Array.from("Hi, I am Chathupa Chamika").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.h2 
            className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p 
            className="text-lg text-muted-foreground max-w-md mx-auto md:mx-0 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about creating innovative solutions with expertise in Java, Spring Boot, Angular, and modern web technologies.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 border-primary/20 hover:bg-primary/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300" 
              asChild
            >
              <a href={cvFile} download>
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={slideIn.initial}
          animate={slideIn.animate}
          transition={slideIn.transition}
          className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <div className="relative w-full max-w-lg">
        
           
            {/* Main Image Container */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative z-10"
              >
                <img
                  src={myImage}
                  alt="Chathupa Chamika"
                  className="w-full h-auto object-cover clip-path-polygon shadow-2xl"
                  style={{
                    clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"
                  }}
                />
                
                {/* Decorative Border */}
                <div 
                  className="absolute inset-0 border-2 border-transparent clip-path-polygon" 
                  style={{
                    clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                    transform: "scale(1.02)"
                  }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto animate-scroll" />
        </div>
      </motion.div>
    </section>
  )
}