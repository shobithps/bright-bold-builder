import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { FolderOpen, Github, ExternalLink, Code2 } from "lucide-react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, shopping cart, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://your-ecommerce-demo.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool built with Next.js and Supabase. Real-time updates, team collaboration, and advanced filtering capabilities.",
      technologies: ["Next.js", "Supabase", "TypeScript", "Prisma", "Radix UI"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://your-task-manager.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and historical data visualization using modern web APIs.",
      technologies: ["Vue.js", "D3.js", "Weather API", "Chart.js", "PWA"],
      github: "https://github.com/yourusername/weather-dashboard",
      demo: "https://your-weather-app.com",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media metrics with real-time data processing and beautiful visualizations.",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Chart.js"],
      github: "https://github.com/yourusername/social-analytics",
      demo: "https://your-analytics-demo.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course management, progress tracking, and interactive learning modules for students and instructors.",
      technologies: ["Next.js", "Node.js", "MySQL", "AWS S3", "Socket.io"],
      github: "https://github.com/yourusername/lms-platform",
      demo: "https://your-lms-demo.com",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop"
    },
    {
      title: "Cryptocurrency Tracker",
      description: "A real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis tools.",
      technologies: ["React", "Redux", "CoinGecko API", "Firebase", "Material-UI"],
      github: "https://github.com/yourusername/crypto-tracker",
      demo: "https://your-crypto-tracker.com",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop"
    }
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-section bg-surface">
      <div className="max-w-container mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <FolderOpen className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                Featured Projects
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
            <p className="text-text-secondary text-lg mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`card-gradient rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:scale-[1.02] hover:shadow-lg group ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 btn-ghost group/btn"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:text-primary" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 btn-gradient"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LeetCode Section */}
          <div className="mt-16 text-center">
            <div className="card-gradient rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Code2 className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-text-primary">
                  Coding Practice
                </h3>
              </div>
              <p className="text-text-secondary mb-6">
                I regularly solve algorithmic problems to sharpen my problem-solving skills
              </p>
              <Button
                className="btn-gradient px-8 py-3"
                onClick={() => window.open("https://leetcode.com/yourusername", "_blank")}
              >
                <Code2 className="h-5 w-5 mr-2" />
                View LeetCode Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}