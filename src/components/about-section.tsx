import { useEffect, useRef, useState } from "react"
import { User, Code, Coffee, Zap } from "lucide-react"

export function AboutSection() {
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

  const stats = [
    { icon: Code, label: "Projects Completed", value: "10+" },
    { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
    { icon: Zap, label: "Problems solved", value: "450+" },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-section bg-surface">
      <div className="max-w-container mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <User className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                About Me
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="order-2 lg:order-1">
              <div className="relative max-w-md mx-auto">
                <div className="aspect-square rounded-2xl bg-gradient-card overflow-hidden shadow-lg">
  <img
    src="/photo.jpg"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>

                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-glow">
                  <Code className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-text-primary">
                Passionate Full Stack Developer
              </h3>
              
              <p className="text-text-secondary text-lg leading-relaxed">
                I'm a final-year Computer Science Engineering student passionate about 
                building impactful software. With a strong foundation in data structures, 
                algorithms, and full-stack development, I enjoy creating efficient, real-time 
                systems and interactive applications that solve real-world problems.
              </p>

              <p className="text-text-secondary text-lg leading-relaxed">
                Outside academics, I enjoy playing cricket, going to the gym, and staying active with fitness activities. I also like listening to music, playing snooker, and keeping up with technology through YouTube.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-text-muted">
                        {stat.label}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}