"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { useToast } from "./ui/use-toast"
import { Mail, MapPin, Phone, Github, Linkedin, Facebook, Send, Loader2 } from "lucide-react"

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const data = new FormData()
      data.append("access_key", "3aa15a33-2b36-4eb9-9859-b55b7a6d76d2")
      data.append("name", formData.name)
      data.append("email", formData.email)
      data.append("message", formData.message)

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      }).then((res) => res.json())

      if (response.success) {
        toast({
          title: "Message sent successfully! 🎉",
          description: "Thank you for reaching out. I'll get back to you soon.",
          variant: "default",
        })

        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        throw new Error("Something went wrong")
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "contact@example.com",
      link: "mailto:contact@example.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+94 77 123 4567",
      link: "tel:+94771234567",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Colombo, Sri Lanka",
      link: "https://maps.google.com/?q=Colombo,+Sri+Lanka",
    },
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Chathupachamika" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/chathupa-chamika-" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://web.facebook.com/chathupa.chamika.7" },
  ]

  // Framer Motion staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Background glow enhancement */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container px-4 md:px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20 bg-background/50 backdrop-blur-sm">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl">
            Have a question, a project idea, or just want to connect? Feel free to reach out using the form below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="h-full bg-card/40 backdrop-blur-md border-primary/10 shadow-lg">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  Contact Information
                </h3>

                <motion.div 
                  className="space-y-8 flex-grow"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {contactInfo.map((item, index) => (
                    <motion.a
                      variants={itemVariants}
                      key={index}
                      href={item.link}
                      className="flex items-center gap-5 group"
                      target={item.title === "Location" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">{item.title}</h4>
                        <p className="text-base font-medium group-hover:text-primary transition-colors">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>

                <div className="mt-12 pt-8 border-t border-border/50">
                  <h4 className="text-sm font-medium text-muted-foreground mb-5">Connect with me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-sm"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="h-full bg-card/40 backdrop-blur-md border-primary/10 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-8">Send Me a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-primary/10 focus-visible:ring-primary/50 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-primary/10 focus-visible:ring-primary/50 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can I help you?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] bg-background/50 border-primary/10 focus-visible:ring-primary/50 transition-all resize-y"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-md transition-all hover:shadow-lg mt-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}