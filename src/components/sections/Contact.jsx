'use client'

import { useState, useEffect } from 'react'
import { sendEmail, validateFormData, initEmailJS } from '@/lib/emailjs'
import { SITE_INFO } from '@/lib/constants'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Bot detection field
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS()
  }, [])

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Bot detection - if honeypot is filled, it's likely a bot
    if (formData.honeypot) {
      console.log('Bot detected')
      return
    }

    // Validate form
    const validation = validateFormData(formData)
    
    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }

    // Set loading state
    setStatus('loading')

    try {
      // Send email via EmailJS
      await sendEmail(formData)
      
      // Success
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        message: '',
        honeypot: '',
      })
      setErrors({})

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      // Error
      setStatus('error')
      console.error('Failed to send email:', error)

      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Get In Touch
          </h2>
          
          <p className="text-center text-gray-600 mb-12">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="text-primary-600 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a 
                      href={`mailto:${SITE_INFO.email}`}
                      className="text-primary-600 hover:underline"
                    >
                      {SITE_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="text-primary-600 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">{SITE_INFO.location}</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-start gap-4">
                  <div className="text-primary-600 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Social</p>
                    <div className="flex gap-4">
                      {SITE_INFO.social.github && (
                        <a 
                          href={SITE_INFO.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary-600"
                        >
                          GitHub
                        </a>
                      )}
                      {SITE_INFO.social.linkedin && (
                        <a 
                          href={SITE_INFO.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary-600"
                        >
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field (hidden from users, visible to bots) */}
                <div className="hidden">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                {/* Name Input */}
                <Input
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  error={errors.name}
                  required
                />

                {/* Email Input */}
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  error={errors.email}
                  required
                />

                {/* Message Textarea */}
                <Textarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  error={errors.message}
                  required
                  rows={5}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === 'loading'}
                  className="w-full"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>

                {/* Success Message */}
                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">
                      ✓ Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">
                      ✗ Failed to send message. Please try again or email me directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
