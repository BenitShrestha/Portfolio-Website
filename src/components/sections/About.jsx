import { SITE_INFO } from '@/lib/constants'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg aspect-square flex items-center justify-center">
                <div className="text-center text-primary-600">
                  <svg 
                    className="w-32 h-32 mx-auto mb-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p className="text-sm">Your Photo Here</p>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="order-1 md:order-2">
              <p className="text-lg text-gray-600 mb-4">
                Hello! I'm <span className="text-primary-600 font-semibold">{SITE_INFO.name}</span>, 
                a passionate web developer based in {SITE_INFO.location}.
              </p>

              <p className="text-gray-600 mb-4">
                I specialize in building modern, responsive websites and web applications 
                using the latest technologies. My goal is to create digital experiences 
                that are not only visually appealing but also highly functional and user-friendly.
              </p>

              <p className="text-gray-600 mb-6">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or learning something new.
              </p>

              {/* Quick Facts */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg 
                    className="w-5 h-5 text-primary-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{SITE_INFO.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg 
                    className="w-5 h-5 text-primary-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-700">{SITE_INFO.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
