import './globals.css'
import { Inter } from 'next/font/google'

// Load Inter font from Google Fonts
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

// Metadata for SEO
export const metadata = {
  title: 'Binit Shrestha | Portfolio',
  description: 'Professional portfolio of Binit Shrestha - Web Developer',
  keywords: ['Binit Shrestha', 'Portfolio', 'Web Developer', 'Software Engineer'],
  authors: [{ name: 'Binit Shrestha' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
