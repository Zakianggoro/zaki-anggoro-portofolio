"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function ProjectDetail() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const tools = [
    { name: "React", category: "Frontend Framework" },
    { name: "JavaScript", category: "Programming Language" },
    { name: "HTML", category: "Markup Language" },
    { name: "CSS", category: "Styling" },
    { name: "Next.js", category: "React Framework" },
    { name: "Web Design", category: "UI/UX" },
    { name: "Agile", category: "Development Method" },
    { name: "Community Service", category: "Social Impact" },
  ]

  const projectImages = ["/placeholder/Thumbnail Portofolio.png", "/placeholder/Input.png", "/placeholder/History.png"]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft size={20} />
              <span className="font-body font-medium">Back to Portfolio</span>
            </Link>
            <div className="font-heading font-black text-xl text-primary">Project Details</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-foreground mb-6">
              Stunting Risk Detection for Infants
            </h1>
            <p className="font-body text-xl text-muted-foreground mb-4 leading-relaxed">
              A lightweight and accessible digital system designed to assist in the early detection of stunting risks
              among infants and young children in rural Indonesia.
            </p>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              <span className="text-primary font-semibold">Jul 2025</span> • University of Brawijaya • KKN Community
              Service Program
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://pencegah-stunting.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="font-body font-semibold w-full sm:w-auto">
                  <ExternalLink size={20} className="mr-2" />
                  Live Demo
                </Button>
              </Link>
              <Link href="https://github.com/Zakianggoro/pencegah-stunting" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="font-body font-semibold bg-transparent w-full sm:w-auto">
                  <Github size={20} className="mr-2" />
                  View Code
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectImages.map((image, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Project screenshot ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-2xl mb-6">Project Overview</h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  This project was carried out as part of KKN (Kuliah Kerja Nyata), a community service program mandated
                  by Indonesian universities, where students apply academic skills to address real societal needs. We
                  partnered directly with a rural village, observing the challenges of limited infrastructure, low
                  access to medical technology, and the need for digital tools that are both intuitive and low-resource.
                </p>
                <p>
                  The system empowers local health workers (posyandu) by providing a simple yet intelligent platform
                  that uses basic input data—such as age, height, weight, and growth history—to generate quick,
                  preliminary assessments for identifying children at risk of malnutrition or growth issues.
                </p>
                <p>
                  The system was provided entirely free of charge in the spirit of KKN and as a way of giving back to
                  the partner village. Monetization was never the goal—our aim was to deliver a sustainable, usable
                  solution that could create real social impact long after our program ended.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-heading font-bold text-2xl mb-6">My Role & Impact</h2>
              <ul className="space-y-3 font-body text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Front-end development using React, JavaScript, HTML, and CSS
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  User interface design focused on accessibility and simplicity
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Human-centered design for non-technical users
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Responsive design for low-resource environments
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Community partnership and needs assessment
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sustainable solution design for long-term impact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-2xl text-center mb-12">Tools & Technologies</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-md transition-all duration-300 hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-primary font-heading font-bold text-lg">{tool.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-body font-semibold text-sm mb-1">{tool.name}</h3>
                  <p className="font-body text-xs text-muted-foreground">{tool.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-2xl text-center mb-12">Project Impact & Learning</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="font-heading font-bold text-lg mb-4 text-primary">Community Impact</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Delivered a free, sustainable digital solution to rural health workers, addressing real community needs
                in infant nutrition monitoring and early intervention.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-heading font-bold text-lg mb-4 text-primary">Technical Skills</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Developed expertise in React framework, responsive web design, and creating intuitive interfaces for
                non-technical users in resource-constrained environments.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-heading font-bold text-lg mb-4 text-primary">Human-Centered Design</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Gained experience in building technology that addresses genuine community needs while remaining
                accessible to users without technical training.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
