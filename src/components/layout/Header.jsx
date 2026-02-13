'use client'

import { useState, useEffect } from 'react'
import { NAV_LINKS, SITE_INFO } from '@/lib/constants'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Detect scroll to add shadow to header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}
      `}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors"
          >
            {SITE_INFO.name}
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 pb-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
