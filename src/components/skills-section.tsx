import { useEffect, useRef, useState } from "react"
import { Wrench } from "lucide-react"

export function SkillsSection() {
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

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", 
        "Tailwind CSS", "Vue.js", "Angular", "SASS"
      ]
    },
    {
      title: "Backend",
      skills: [
        "Node.js", "Express.js", "Python", "Django", "Flask", "PHP", 
        "Laravel", "Ruby on Rails", "Java", "Spring Boot"
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        "MongoDB", "PostgreSQL", "MySQL", "Redis", "AWS", "Google Cloud", 
        "Firebase", "Supabase", "Docker", "Kubernetes"
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        "Git", "GitHub", "VS Code", "Figma", "Postman", "Jest", 
        "Cypress", "Webpack", "Vite", "Agile/Scrum"
      ]
    }
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-section bg-background">
      <div className="max-w-container mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Wrench className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                Skills & Technologies
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
            <p className="text-text-secondary text-lg mt-6 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`card-gradient rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-badge"
                      style={{ animationDelay: `${(categoryIndex * 10 + skillIndex) * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Note */}
          <div className="text-center mt-12">
            <p className="text-text-muted text-lg">
              Always learning and exploring new technologies to stay current with industry trends
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}