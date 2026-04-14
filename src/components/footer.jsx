"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Facebook, ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/Chathupachamika", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/chathupa-chamika-", label: "LinkedIn" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://web.facebook.com/chathupa.chamika.7", label: "Facebook" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:contact@example.com", label: "Email" },
  ]

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative border-t border-border/20 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 overflow-hidden">
      {/* Subtle top gradient glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container px-4 md:px-6 py-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">
              Chathupa Chamika
            </h2>
            <p className="text-sm text-muted-foreground mt-2 font-medium">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/5 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300 border border-primary/10 hover:border-primary/30 hover:shadow-md hover:shadow-primary/10"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6 relative">
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Chathupa Chamika. All rights reserved.
          </p>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="md:absolute right-0 -top-6 w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-white shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
          </button>
        </div>
      </motion.div>
    </footer>
  )
}