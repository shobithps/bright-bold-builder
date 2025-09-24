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
      title: "Real Time Code execution Engine",
      description: "Developed a real-time code execution engine with Kafka, Docker, and Redis that securely runs multi-language code in isolated containers and returns results with sub-second latency.sh",
      technologies: ["React", "FastAPI", "Docker", "Kafka", "Redis"],
      github: "https://github.com/shobithps/Real-time-code-execution-engine",
      image: "public/rtce.png"
    },
    {
      title: "Distributed File Orchestration and Synchronization for Linux",
      description: "Built a distributed file orchestration system with HDFS and Socket.IO, enabling multi-client upload, download, and synchronization with ~200 ms operation latency.",
      technologies: ["Python", "React", "WebSockets", "HDFS"],
      github: "https://github.com/shobithps/Distributed-File-Orchestration-and-Synchronization-Multi-Node-Data-Transfer-Framework-for-Linux",
      image: "public/dfos.png"
    },
    {
      title: "SnapConnect Social Media App",
      description: "Developed a full-stack social media platform with React, Node.js, and SQL, implementing stored procedures, functions, and triggers to manage posts, likes, comments, and user relationships.",
      technologies: ["React", "Node.js", "SQL"],
      github: "https://github.com/shobithps/SnapConnect-social-media-app",
      image: "public/scsm.png"
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
                    {/* <Button
                      size="sm"
                      className="flex-1 btn-gradient"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button> */}
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
                onClick={() => window.open("https://leetcode.com/shobithps", "_blank")}
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