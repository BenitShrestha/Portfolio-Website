import { SITE_INFO } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary-600 font-medium mb-4 animate-fade-in">
            Hi, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {SITE_INFO.name}
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            {SITE_INFO.title}
          </h2>
          
          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I build modern, responsive websites and web applications. 
            Passionate about creating clean, efficient code and beautiful user experiences.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button variant="primary">
                Get In Touch
              </Button>
            </a>
            
            <a href="#projects">
              <Button variant="outline">
                View My Work
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <a href="#about" className="text-gray-400 hover:text-primary-600">
              <svg 
                className="w-6 h-6 mx-auto" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
