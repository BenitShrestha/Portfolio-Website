/**
 * Button Component
 * Reusable button with different variants
 */

export default function Button({ 
  children, 
  variant = 'primary', 
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  ...props 
}) {
  // Base styles applied to all buttons
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
  
  // Variant-specific styles
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
