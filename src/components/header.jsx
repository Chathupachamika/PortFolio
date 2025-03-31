"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react'

export function Header({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Determine active section based on scroll position
      const sections = ['about', 'skills', 'projects', 'experience', 'contact']
      const sectionElements = sections.map(id => document.getElementById(id))
      
      const currentSection = sectionElements.reduce((closest, section) => {
        if (!section) return closest
        const sectionTop = section.offsetTop - 100
        const scrollPosition = window.scrollY
        
        if (scrollPosition >= sectionTop && 
            (!closest || sectionTop > document.getElementById(closest)?.offsetTop - 100 || 0)) {
          return section.id
        }
        return closest
      }, 'about')
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      href: 'https://github.com/Chathupachamika',
      label: 'GitHub'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: 'https://www.linkedin.com/in/chathupa-chamika-',
      label: 'LinkedIn'
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      href: 'mailto:your.email@example.com',
      label: 'Email'
    },
  ]

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 20,
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: { 
      opacity: 1, 
      height: 'auto', 
      y: 0,
      transition: { 
        duration: 0.3, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
      }
    },
    exit: { 
      opacity: 0, 
      height: 0, 
      y: -10,
      transition: { 
        duration: 0.2, 
        ease: [0.22, 1, 0.36, 1],
      }
    }
  }

  const mobileItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    exit: { x: -10, opacity: 0 }
  }

  return (
    <motion.header 
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-xl shadow-lg dark:shadow-primary/5 border-b border-border/40'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <a 
              href="#" 
              className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            >
              <span className="inline-block transform transition-transform hover:rotate-3">CC</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                variants={itemVariants}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 group
                  ${activeSection === item.id 
                    ? 'text-primary bg-primary/10 dark:bg-primary/20' 
                    : 'text-foreground/80 hover:text-primary hover:bg-muted/80'
                  }`}
              >
                {item.name}
                <span 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-300
                    ${activeSection === item.id ? 'opacity-100' : 'opacity-0'}`} 
                />
              </motion.a>
            ))}
          </div>

          {/* Desktop Social Links & Theme Toggle */}
          <motion.div 
            variants={itemVariants}
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-foreground/70 hover:text-primary transition-colors rounded-full hover:bg-muted/80"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, rotate: 15 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-muted/80 transition-all"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={darkMode ? 'dark' : 'light'}
                  initial={{ y: 10, opacity: 0, rotate: -30 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -10, opacity: 0, rotate: 30 }}
                  transition={{ duration: 0.2 }}
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              variants={itemVariants}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-muted/80 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            
            <motion.button
              variants={itemVariants}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-muted/80 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'open' : 'closed'}
                  initial={{ rotate: isOpen ? -45 : 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: isOpen ? 45 : -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-t border-border/40 rounded-b-xl shadow-lg"
            >
              <div className="px-2 pt-2 pb-4 space-y-1">
                {navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    variants={mobileItemVariants}
                    href={item.href}
                    className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors
                      ${activeSection === item.id 
                        ? 'text-primary bg-primary/10 dark:bg-primary/20' 
                        : 'text-foreground/80 hover:text-primary hover:bg-muted/80'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative">
                      {item.name}
                      {activeSection === item.id && (
                        <motion.span 
                          layoutId="activeMobileIndicator"
                          className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-5 bg-primary rounded-full" 
                        />
                      )}
                    </span>
                  </motion.a>
                ))}
                
                <motion.div 
                  variants={mobileItemVariants}
                  className="flex items-center justify-around mt-4 pt-4 border-t border-border/40"
                >
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-foreground/70 hover:text-primary transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
