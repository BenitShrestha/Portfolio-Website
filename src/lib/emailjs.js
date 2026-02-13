import emailjs from '@emailjs/browser'

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
}

/**
 * Initialize EmailJS with public key
 * Call this before sending emails
 */
export const initEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey) {
    emailjs.init(EMAILJS_CONFIG.publicKey)
  } else {
    console.error('EmailJS public key is not configured')
  }
}

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data to send
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email
 * @param {string} formData.message - Message content
 * @returns {Promise} EmailJS send promise
 */
export const sendEmail = async (formData) => {
  try {
    // Validate configuration
    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
      throw new Error('EmailJS is not properly configured. Please check your environment variables.')
    }

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Binit Shrestha', // Your name (recipient)
    }

    // Send email
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    )

    return response
  } catch (error) {
    console.error('EmailJS Error:', error)
    throw error
  }
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate form data
 * @param {Object} formData - Form data to validate
 * @returns {Object} Validation result { isValid, errors }
 */
export const validateFormData = (formData) => {
  const errors = {}

  // Name validation
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  // Email validation
  if (!formData.email || !isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }

  // Message validation
  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
