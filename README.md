# Binit Shrestha - Portfolio Website

A modern, responsive personal portfolio website built with Next.js, React, and Tailwind CSS.

## 🌟 Features

- **Fully Responsive** - Works on all devices (mobile, tablet, desktop)
- **Modern Design** - Clean and professional UI
- **Fast Performance** - Optimized with Next.js
- **Contact Form** - EmailJS integration for contact functionality
- **SEO Optimized** - Meta tags and semantic HTML
- **Easy to Customize** - Well-organized code structure

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **Email Service:** EmailJS
- **Deployment:** Vercel (recommended)

## 📁 Project Structure

```
binit-portfolio/
├── public/                    # Static assets
│   └── images/               # Image files
├── src/
│   ├── app/                  # Next.js app directory
│   │   ├── layout.js         # Root layout
│   │   ├── page.js           # Homepage
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/         # Page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/               # Reusable UI components
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Input.jsx
│   │       └── Textarea.jsx
│   └── lib/                  # Utilities and configurations
│       ├── constants.js      # Site constants and data
│       └── emailjs.js        # EmailJS configuration
├── .env.local.example        # Environment variables template
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- EmailJS account (for contact form)

### Installation

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

   Then edit `.env.local` and add your EmailJS credentials:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Customize your information**
   
   Edit `src/lib/constants.js` and update:
   - Your name, title, email, location
   - Social media links (GitHub, LinkedIn, Twitter)
   - Skills and technologies
   - Projects and descriptions

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ EmailJS Setup

1. **Create an EmailJS account** at [https://www.emailjs.com](https://www.emailjs.com)

2. **Add an email service**
   - Go to Email Services
   - Add your email provider (Gmail, Outlook, etc.)
   - Follow the connection steps

3. **Create an email template**
   - Go to Email Templates
   - Create a new template
   - Use these template variables:
     ```
     From: {{from_name}} ({{from_email}})
     
     Message:
     {{message}}
     ```

4. **Get your credentials**
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates
   - Public Key: Found in Account > General

5. **Add to `.env.local`**
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 📝 Customization Guide

### Updating Personal Information

Edit `src/lib/constants.js`:

```javascript
export const SITE_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  location: 'Your Location',
  // ... update social links
}
```

### Adding/Removing Skills

Edit the `SKILLS` object in `src/lib/constants.js`:

```javascript
export const SKILLS = {
  frontend: ['HTML', 'CSS', 'JavaScript', ...],
  backend: ['Node.js', ...],
  // Add more categories if needed
}
```

### Adding Projects

Edit the `PROJECTS` array in `src/lib/constants.js`:

```javascript
export const PROJECTS = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    technologies: ['React', 'Node.js'],
    github: 'https://github.com/...',
    demo: 'https://...',
  },
]
```

### Changing Colors

Edit `tailwind.config.js` to change the primary color:

```javascript
colors: {
  primary: {
    // Update these values
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  }
}
```

### Adding Your Photo

1. Add your photo to `public/images/`
2. Update `src/components/sections/About.jsx`
3. Replace the placeholder with:
   ```jsx
   <Image 
     src="/images/your-photo.jpg" 
     alt="Your Name"
     width={400}
     height={400}
   />
   ```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy!

3. **Connect Custom Domain**
   - Go to your project settings in Vercel
   - Add `binit-shrestha.com.np` as a custom domain
   - Update DNS records at your domain registrar
   - Wait for DNS propagation (5 mins - 48 hours)

### Environment Variables in Vercel

Add these in Project Settings > Environment Variables:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Support

If you encounter any issues or have questions, feel free to:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Check the [EmailJS documentation](https://www.emailjs.com/docs/)
- Review the code comments for guidance

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ using Next.js and Tailwind CSS
