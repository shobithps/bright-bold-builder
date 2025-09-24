import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>

      <div className="max-w-container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Greeting */}
          <p className="text-text-secondary text-lg mb-4 animate-fade-in">
            Hello, I'm
          </p>

          {/* Name with Gradient */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-text hero-glow">
            John Doe
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary mb-6">
            Full Stack Developer
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
            I create beautiful, responsive web applications with modern technologies.
            Passionate about clean code, user experience, and innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="btn-gradient px-8 py-3 text-lg font-medium"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="btn-ghost px-8 py-3 text-lg font-medium"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110 group"
            >
              <Github className="h-6 w-6 text-text-secondary group-hover:text-primary" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="h-6 w-6 text-text-secondary group-hover:text-primary" />
            </a>
            <a
              href="mailto:john@example.com"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="h-6 w-6 text-text-secondary group-hover:text-primary" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-secondary/50"
            onClick={() => scrollToSection("about")}
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}