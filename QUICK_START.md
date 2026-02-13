# 🚀 QUICK START GUIDE

## What You Have

Your complete portfolio website is ready! Here's what's included:

✅ Modern Next.js 14 project with App Router
✅ Fully responsive design (mobile, tablet, desktop)
✅ Professional UI with Tailwind CSS
✅ Contact form with EmailJS integration
✅ All components properly organized
✅ Clean, maintainable code structure

## 📋 Next Steps

### Step 1: Set Up Your Development Environment

1. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version` (should be 18+)

2. **Extract the project folder** to your desired location

3. **Open terminal/command prompt** in the project folder

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages (Next.js, React, Tailwind CSS, EmailJS, etc.)

### Step 3: Set Up EmailJS (For Contact Form)

1. **Create EmailJS account**: https://www.emailjs.com/

2. **Add Email Service**:
   - Dashboard → Email Services → Add New Service
   - Choose Gmail/Outlook/etc.
   - Connect your email account

3. **Create Email Template**:
   - Dashboard → Email Templates → Create New Template
   - Template content:
     ```
     New message from {{from_name}}
     
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```
   - Save the template

4. **Get Your Credentials**:
   - Service ID: Email Services page
   - Template ID: Email Templates page
   - Public Key: Account → General tab

5. **Create `.env.local` file** in project root:
   ```bash
   cp .env.local.example .env.local
   ```

6. **Edit `.env.local`** and add your credentials:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

### Step 4: Customize Your Information

Edit `src/lib/constants.js` and update:

```javascript
export const SITE_INFO = {
  name: 'Your Full Name',              // Change this
  title: 'Your Job Title',             // Change this
  email: 'your.email@example.com',     // Change this
  location: 'Your City, Country',      // Change this
  
  social: {
    github: 'https://github.com/yourUsername',       // Change this
    linkedin: 'https://linkedin.com/in/yourProfile', // Change this
    twitter: 'https://twitter.com/yourHandle',       // Change this (or remove)
  },
}
```

Also update:
- `SKILLS` - Add your actual skills
- `PROJECTS` - Add your real projects

### Step 5: Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

You should see your portfolio website! 🎉

### Step 6: Test Everything

- ✅ Check all sections load properly
- ✅ Test mobile responsiveness (resize browser)
- ✅ Test navigation (click menu items)
- ✅ Test contact form (send yourself a test email)

## 🎨 Customization Tips

### Change Primary Color

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#your-color',
    600: '#your-darker-color',
    // etc.
  }
}
```

### Add Your Photo

1. Add photo to `public/images/your-photo.jpg`
2. In Next.js 14, you'll need to import Image:
   ```jsx
   import Image from 'next/image'
   ```
3. Update About section placeholder

### Modify Sections

All sections are in `src/components/sections/`:
- `Hero.jsx` - Landing section
- `About.jsx` - About you
- `Skills.jsx` - Your skills
- `Projects.jsx` - Your projects
- `Contact.jsx` - Contact form

## 🚀 When Ready to Deploy

### Option 1: Vercel (Recommended - Easiest)

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. Go to https://vercel.com
3. Click "Import Project"
4. Connect your GitHub repository
5. Add environment variables (EmailJS keys)
6. Deploy!

Your site will be live at: `your-project.vercel.app`

### Option 2: Add Custom Domain

1. In Vercel dashboard → Settings → Domains
2. Add `binit-shrestha.com.np`
3. Vercel will show DNS instructions
4. Update DNS at your domain registrar:
   - Add A record or CNAME record as instructed
5. Wait for DNS propagation (5 mins - 48 hours)
6. HTTPS will be automatic!

## 📁 Project Structure Reference

```
src/
├── app/
│   ├── layout.js          ← Root layout (wraps everything)
│   ├── page.js            ← Homepage (assembles all sections)
│   └── globals.css        ← Global styles
├── components/
│   ├── layout/            ← Header, Footer
│   ├── sections/          ← Main page sections
│   └── ui/                ← Reusable components (Button, Input, etc.)
└── lib/
    ├── constants.js       ← Your personal info, skills, projects
    └── emailjs.js         ← EmailJS configuration
```

## ❓ Troubleshooting

### Contact form not working?
- Check `.env.local` has correct EmailJS credentials
- Check browser console for errors (F12 → Console)
- Verify EmailJS service and template are active

### Styles not loading?
- Make sure you ran `npm install`
- Try `npm run dev` again

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```
(Uses port 3001 instead)

## 📚 Learning Resources

- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **EmailJS**: https://www.emailjs.com/docs/

## 🎯 Next Phase (Future)

Once you're happy with your local version:
1. Add more projects
2. Add project images
3. Add your photo
4. Deploy to Vercel
5. Connect custom domain
6. Share your portfolio!

---

**Questions?** Review the detailed README.md in the project folder.

Good luck with your portfolio! 🚀
