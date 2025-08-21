"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Menu, X, Code, Gamepad2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

type Theme = 'frontend' | 'gamedev'

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>('frontend')

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

  const toggleTheme = () => {
    setTheme(theme === 'frontend' ? 'gamedev' : 'frontend')
  }

  // Theme-specific content
  const themeContent = {
    frontend: {
      title: "Frontend Developer",
      subtitle: "Web Development",
      description: "Crafting modern web experiences with a focus on performance, accessibility, and user-centric design.",
      skills: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Figma"],
      aboutText: "Hello! I'm Muhammad Zaki Anggoro, a passionate frontend developer with a keen eye for detail and a love for crafting beautiful, functional web applications. With a background in computer science and a focus on modern web technologies, I specialize in creating responsive, user-friendly interfaces that enhance the overall user experience. I've been working in web development for a years and keep studying to stay updated with the latest trends and best practices in the industry.",
      projects: [
        {
          title: "Infant Stunting Detection System",
          description: "This tool was created to empower local health workers (posyandu) by providing a simple yet intelligent platform that uses basic input data—such as age, height, weight, and growth history—to generate quick, preliminary assessments for identifying children at risk of malnutrition or growth issues.",
          image: "/placeholder/Thumbnail Portofolio.png",
          tags: ["Python", "Machine Learning", "TensorFlow", "React", "Healthcare AI"],
          slug: "infants-stunting-detection",
        },
      ],
      buttonText: "View My Work",
      contactText: "I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.",
      gradientColors: "from-blue-500 to-purple-600"
    },
    gamedev: {
      title: "Game Developer",
      subtitle: "Interactive Experiences",
      description: "Creating immersive gaming experiences with compelling gameplay mechanics, stunning visuals, and engaging storytelling.",
      skills: ["Unity", "C#", "Unreal Engine", "3D Modeling", "Game Design", "Blender"],
      aboutText: "Hello! I'm Muhammad Zaki Anggoro, a passionate game developer who loves bringing interactive worlds to life. With expertise in both 2D and 3D game development, I specialize in creating engaging gameplay mechanics and immersive player experiences. I work with modern game engines and tools to craft games that not only entertain but also tell meaningful stories and provide memorable experiences for players.",
      projects: [
        {
          title: "2D Platformer Adventure",
          description: "A classic 2D platformer with modern mechanics featuring pixel-perfect controls, challenging levels, and a captivating storyline. Built with Unity and featuring custom physics systems and procedural level generation.",
          image: "/placeholder/game-placeholder.png",
          tags: ["Unity", "C#", "2D Animation", "Level Design", "Mobile"],
          slug: "2d-platformer-adventure",
        },
        {
          title: "VR Experience Demo",
          description: "An immersive virtual reality experience showcasing environmental storytelling and intuitive VR interactions. Features spatial audio, hand tracking, and realistic physics simulations.",
          image: "/placeholder/vr-placeholder.png",
          tags: ["Unreal Engine", "VR", "Blueprint", "3D Audio", "Hand Tracking"],
          slug: "vr-experience-demo",
        },
      ],
      buttonText: "Play My Games",
      contactText: "Ready to create the next amazing gaming experience? Let's collaborate and bring your game ideas to life with cutting-edge technology and creative storytelling.",
      gradientColors: "from-orange-500 to-red-600"
    }
  }

  const currentTheme = themeContent[theme]

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      theme === 'frontend' 
        ? 'bg-white text-gray-900' 
        : 'bg-gray-900 text-white'
    }`}> {/* <-- FIXED: Added closing > here */}
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-500 ${
        theme === 'frontend'
          ? 'bg-white/80 border-gray-200'
          : 'bg-gray-900/80 border-gray-700'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`font-heading font-black text-xl ${
              theme === 'frontend' ? 'text-blue-600' : 'text-orange-500'
            }`}>Muhammad Zaki Anggoro</div>

            {/* Theme Toggle Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${currentTheme.gradientColors} text-white font-medium text-sm hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                {theme === 'frontend' ? <Gamepad2 size={16} /> : <Code size={16} />}
                <span>{theme === 'frontend' ? 'Game Dev' : 'Frontend'}</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["hero", "about", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-body font-medium transition-colors duration-200 capitalize ${
                    activeSection === section 
                      ? (theme === 'frontend' ? "text-blue-600" : "text-orange-500")
                      : (theme === 'frontend' ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-white")
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
          <div className={`md:hidden border-t transition-all duration-500 ${
            theme === 'frontend'
              ? 'bg-white border-gray-200'
              : 'bg-gray-900 border-gray-700'
          }`}>
            <div className="px-4 py-2 space-y-2">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg bg-gradient-to-r ${currentTheme.gradientColors} text-white font-medium text-sm mb-2`}
              >
                {theme === 'frontend' ? <Gamepad2 size={16} /> : <Code size={16} />}
                <span>Switch to {theme === 'frontend' ? 'Game Dev' : 'Frontend'}</span>
              </button>
              
              {["hero", "about", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 font-body font-medium transition-colors duration-200 capitalize ${
                    theme === 'frontend' 
                      ? 'text-gray-600 hover:text-gray-900' 
                      : 'text-gray-400 hover:text-white'
                  }`}
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
            <motion.div
              key={theme}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className={`font-heading font-black text-4xl sm:text-6xl lg:text-7xl mb-6 ${
                theme === 'frontend' ? 'text-gray-900' : 'text-white'
              }`}>
                {currentTheme.title}
                <span className={`block bg-gradient-to-r ${currentTheme.gradientColors} bg-clip-text text-transparent`}>
                  {currentTheme.subtitle}
                </span>
              </h1>
              <p className={`font-body text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${
                theme === 'frontend' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                {currentTheme.description}
              </p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className={`font-body font-semibold bg-gradient-to-r ${currentTheme.gradientColors} hover:opacity-90 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg`}
              >
                {currentTheme.buttonText}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className={`font-body font-semibold border-2 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                  theme === 'frontend'
                    ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                    : 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
                }`}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="mt-16 animate-float">
            <ChevronDown
              size={32}
              className={`mx-auto cursor-pointer transition-colors duration-300 ${
                theme === 'frontend' 
                  ? 'text-gray-500 hover:text-blue-600' 
                  : 'text-gray-400 hover:text-orange-500'
              }`}
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
        theme === 'frontend' ? 'bg-gray-50' : 'bg-gray-800'
      }`}>
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className={`font-heading font-black text-3xl sm:text-4xl text-center mb-12 ${
              theme === 'frontend' ? 'text-gray-900' : 'text-white'
            }`}>About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                key={`${theme}-about`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className={`font-body text-lg mb-6 leading-relaxed ${
                  theme === 'frontend' ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  {currentTheme.aboutText}
                </p>
                <div className="flex flex-wrap gap-3">
                  {currentTheme.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className={`font-body px-3 py-1 ${
                        theme === 'frontend'
                          ? 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                          : 'bg-orange-900/30 text-orange-300 hover:bg-orange-900/50'
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
              <div className="relative">
                <motion.div
                  className={`aspect-square rounded-2xl bg-gradient-to-br ${currentTheme.gradientColors} bg-opacity-20 p-8 flex items-center justify-center cursor-pointer`}
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
            <h2 className={`font-heading font-black text-3xl sm:text-4xl text-center mb-4 ${
              theme === 'frontend' ? 'text-gray-900' : 'text-white'
            }`}>
              Featured {theme === 'frontend' ? 'Projects' : 'Games'}
            </h2>
            <p className={`font-body text-lg text-center mb-16 max-w-2xl mx-auto ${
              theme === 'frontend' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              {theme === 'frontend' 
                ? 'My featured project showcasing expertise in healthcare technology and AI-driven solutions.'
                : 'Interactive gaming experiences showcasing creativity, technical skills, and engaging gameplay mechanics.'
              }
            </p>

            <motion.div
              key={`${theme}-projects`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {currentTheme.projects.map((project, index) => (
                <Card
                  key={index}
                  className={`group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                    theme === 'frontend'
                      ? 'bg-white hover:shadow-blue-200/50'
                      : 'bg-gray-800 hover:shadow-orange-500/20'
                  }`}
                >
                  <div className={`h-64 overflow-hidden p-4 ${
                    theme === 'frontend' ? 'bg-gray-50' : 'bg-gray-700'
                  }`}>
                    <img
                      src={project.image || "/placeholder.svg?height=400&width=600&query=project thumbnail"}
                      alt={project.title}
                      className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className={`font-heading font-bold text-xl mb-3 ${
                      theme === 'frontend' ? 'text-gray-900' : 'text-white'
                    }`}>{project.title}</h3>
                    <p className={`font-body mb-4 leading-relaxed ${
                      theme === 'frontend' ? 'text-gray-600' : 'text-gray-300'
                    }`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className={`font-body text-xs ${
                            theme === 'frontend'
                              ? 'border-blue-200 text-blue-700 hover:bg-blue-50'
                              : 'border-orange-400/30 text-orange-300 hover:bg-orange-900/20'
                          }`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/projects/${project.slug}`}>
                      <Button
                        variant="ghost"
                        className={`font-body font-medium p-0 h-auto bg-gradient-to-r ${currentTheme.gradientColors} bg-clip-text text-transparent hover:opacity-80`}
                      >
                        {theme === 'frontend' ? 'View Project' : 'Play Game'} <ExternalLink size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
        theme === 'frontend' ? 'bg-gray-50' : 'bg-gray-800'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className={`font-heading font-black text-3xl sm:text-4xl mb-6 ${
              theme === 'frontend' ? 'text-gray-900' : 'text-white'
            }`}>Let&apos;s Work Together</h2>
            <motion.p
              key={`${theme}-contact`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`font-body text-lg mb-12 max-w-2xl mx-auto leading-relaxed ${
                theme === 'frontend' ? 'text-gray-600' : 'text-gray-300'
              }`}
            >
              {currentTheme.contactText}
            </motion.p>

            <div className="flex justify-center space-x-6 mb-12">
              <Link
                href="https://github.com/Zakianggoro"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full border hover:scale-110 transition-all duration-300 inline-flex items-center justify-center ${
                  theme === 'frontend'
                    ? 'border-gray-300 hover:bg-blue-50 hover:border-blue-300 text-gray-600 hover:text-blue-600'
                    : 'border-gray-600 hover:bg-orange-900/20 hover:border-orange-500 text-gray-400 hover:text-orange-400'
                }`}
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/muhammad-zaki-anggoro/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full border hover:scale-110 transition-all duration-300 inline-flex items-center justify-center ${
                  theme === 'frontend'
                    ? 'border-gray-300 hover:bg-blue-50 hover:border-blue-300 text-gray-600 hover:text-blue-600'
                    : 'border-gray-600 hover:bg-orange-900/20 hover:border-orange-500 text-gray-400 hover:text-orange-400'
                }`}
              >
                <Linkedin size={24} />
              </Link>
              <div className="relative group">
                <div className={`p-4 rounded-full border hover:scale-110 transition-all duration-300 inline-flex items-center justify-center cursor-pointer ${
                  theme === 'frontend'
                    ? 'border-gray-300 hover:bg-blue-50 hover:border-blue-300 text-gray-600 hover:text-blue-600'
                    : 'border-gray-600 hover:bg-orange-900/20 hover:border-orange-500 text-gray-400 hover:text-orange-400'
                }`}>
                  <Mail size={24} />
                </div>
                <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none ${
                  theme === 'frontend'
                    ? 'bg-gray-800 text-white'
                    : 'bg-white text-gray-800'
                }`}>
                  mzakianggoro324@gmail.com
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                    theme === 'frontend' ? 'border-t-gray-800' : 'border-t-white'
                  }`}></div>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className={`font-body font-semibold bg-gradient-to-r ${currentTheme.gradientColors} hover:opacity-90 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg`}
            >
              Send Me a Message
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}