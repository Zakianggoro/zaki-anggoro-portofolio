"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if we're at the bottom of the page
      if (windowHeight + window.scrollY >= documentHeight - 50) {
        setActiveSection("contact")
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      title: "Infant Stunting Detection System",
      description:
        "This tool was created to empower local health workers (posyandu) by providing a simple yet intelligent platform that uses basic input data—such as age, height, weight, and growth history—to generate quick, preliminary assessments for identifying children at risk of malnutrition or growth issues.",
      image: "/placeholder/Thumbnail Portofolio.png",
      tags: ["Python", "Machine Learning", "TensorFlow", "React", "Healthcare AI"],
      slug: "infants-stunting-detection",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-heading font-black text-xl text-primary">Muhammad Zaki Anggoro</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["hero", "about", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-body font-medium transition-colors duration-200 capitalize ${
                    activeSection === section ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-2 space-y-2">
              {["hero", "about", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 font-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 capitalize"
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-foreground mb-6">
              Frontend Developer
              <span className="block text-primary">Web Development</span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Crafting modern web experiences with a focus on performance, accessibility, and user-centric design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="font-body font-semibold bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="font-body font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="mt-16 animate-float">
            <ChevronDown
              size={32}
              className="mx-auto text-muted-foreground cursor-pointer hover:text-primary transition-colors duration-300"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                  Hello! I&apos;m Muhammad Zaki Anggoro, a passionate frontend developer with a keen eye for detail and
                  a love for crafting beautiful, functional web applications. With a background in computer science and
                  a focus on modern web technologies, I specialize in creating responsive, user-friendly interfaces that
                  enhance the overall user experience. I&apos;ve been working in web development for a years and keep
                  studying to stay updated with the latest trends and best practices in the industry.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Figma"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-body px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="relative">
                <motion.div
                  className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3 },
                  }}
                >
                  <img
                    src="/placeholder/Profile Picture.jpg"
                    alt="Profile"
                    className="rounded-xl w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-center mb-4">Featured Projects</h2>
            <p className="font-body text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              My featured project showcasing expertise in healthcare technology and AI-driven solutions.
            </p>

            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="h-64 overflow-hidden bg-muted/20 p-4">
                    <img
                      src={project.image || "/placeholder.svg?height=400&width=600&query=project thumbnail"}
                      alt={project.title}
                      className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-xl mb-3">{project.title}</h3>
                    <p className="font-body text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="font-body text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/projects/${project.slug}`}>
                      <Button
                        variant="ghost"
                        className="font-body font-medium p-0 h-auto text-primary hover:text-primary/80"
                      >
                        View Project <ExternalLink size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="font-heading font-black text-3xl sm:text-4xl mb-6">Let&apos;s Work Together</h2>
            <p className="font-body text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss how we can bring
              your ideas to life.
            </p>

            <div className="flex justify-center space-x-6 mb-12">
              <Link
                href="https://github.com/Zakianggoro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-border hover:scale-110 transition-transform duration-300 bg-transparent hover:bg-muted/50 inline-flex items-center justify-center"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/muhammad-zaki-anggoro/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-border hover:scale-110 transition-transform duration-300 bg-transparent hover:bg-muted/50 inline-flex items-center justify-center"
              >
                <Linkedin size={24} />
              </Link>
              <div className="relative group">
                <div className="p-4 rounded-full border border-border hover:scale-110 transition-transform duration-300 bg-transparent hover:bg-muted/50 inline-flex items-center justify-center cursor-pointer">
                  <Mail size={24} />
                </div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-foreground text-background text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  mzakianggoro324@gmail.com
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="font-body font-semibold bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Send Me a Message
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
