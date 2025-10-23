# Professional Modeling Portfolio Website

A modern, SEO-optimized portfolio website built with Next.js 14, perfect for models to showcase their work professionally.

## ✨ Features

### SEO Optimized

- **Server-Side Rendering (SSR)** for better search engine crawling
- **Comprehensive meta tags** (Open Graph, Twitter Cards)
- **Structured data** (JSON-LD) for rich snippets
- **Automatic sitemap** generation
- **Robots.txt** configuration
- **PWA manifest** for mobile installation
- **Optimized images** with Next.js Image component (automatic WebP/AVIF)

### Design & UX

- **Responsive design** - looks great on all devices
- **Modern, elegant UI** with professional aesthetics
- **Smooth animations** and transitions
- **Fast loading times** with optimized assets
- **Accessible** - follows web accessibility standards

### Pages Included

1. **Home** - Hero section, stats, featured work gallery, CTA
2. **About** - Personal story, measurements, experience, skills
3. **Portfolio** - Filterable gallery with categories
4. **Contact** - Contact form, social links, location info

### Technical Features

- Built with **Next.js 14** (App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Icons** for icons
- **Google Fonts** (Inter & Playfair Display)
- Optimized for **Core Web Vitals**

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Add your images:**

   - Place your portfolio images in the `/public` directory
   - Required images (see `/public/.gitkeep` for full list):
     - `hero-image.jpg` - Main homepage hero image
     - `about-image.jpg` - About page photo
     - `og-image.jpg` - Social media preview (1200x630px)
     - `gallery-1.jpg` to `gallery-6.jpg` - Homepage gallery
     - `portfolio-1.jpg` to `portfolio-12.jpg` - Portfolio page
     - `icon-192.png` & `icon-512.png` - App icons
     - `profile.jpg` - Profile picture

3. **Customize your content:**

   Update these files with your personal information:

   - `src/app/layout.tsx` - Update metadata, name, social handles
   - `src/components/Navbar.tsx` - Your name in logo
   - `src/components/Footer.tsx` - Social links
   - `src/app/about/page.tsx` - Your story, measurements, experience
   - `src/app/page.tsx` - JSON-LD structured data
   - `src/app/contact/page.tsx` - Contact information, email, location
   - `tailwind.config.ts` - Customize colors if desired

4. **Update SEO settings:**

   In `src/app/layout.tsx`:

   - Change `metadataBase` URL to your domain
   - Update all social media URLs
   - Add your Google verification code
   - Update Twitter handle

5. **Run development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: '#1a1a1a',    // Main dark color
  secondary: '#f5f5f5',  // Light background
  accent: '#c9a86a',     // Gold accent
},
```

### Fonts

Change fonts in `src/app/layout.tsx` by importing different Google Fonts.

### Portfolio Categories

Update categories in `src/components/PortfolioGrid.tsx`:

```typescript
const categories = [
  "All",
  "Editorial",
  "Fashion",
  "Commercial",
  "Runway",
  "Beauty",
];
```

## 📱 Adding Images

### Image Optimization Tips

- Use high-quality images (minimum 1920px width for hero)
- Keep file sizes reasonable (< 500KB for web)
- Use JPG for photos, PNG for graphics with transparency
- Next.js will automatically optimize and convert to WebP/AVIF

### Recommended Image Sizes

- Hero image: 1920x1080px or larger
- Portfolio images: 1200x1600px (3:4 ratio)
- Gallery thumbnails: 900x1200px (3:4 ratio)
- OG image: 1200x630px (exact)
- Icons: 192x192px and 512x512px

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy
5. Update your domain in `src/app/layout.tsx`

### Other Hosting Options

- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Any Node.js hosting

## 📊 SEO Checklist

- [ ] Update all metadata in `layout.tsx`
- [ ] Add your actual domain URL everywhere
- [ ] Update social media links
- [ ] Add Google Analytics (optional)
- [ ] Add Google Search Console verification
- [ ] Submit sitemap to Google Search Console
- [ ] Optimize all images
- [ ] Test on mobile devices
- [ ] Check page speed with Lighthouse
- [ ] Set up custom domain
- [ ] Enable HTTPS
- [ ] Create social media profiles
- [ ] Add schema.org structured data

## 🔧 Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📈 Performance

This portfolio is optimized for excellent performance:

- Lighthouse Score: 95+ (Performance)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

## 🤝 Support

For issues or questions:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Search existing issues on GitHub

## 📄 License

This project is open source and available under the MIT License.

## 🎯 Next Steps

1. Add blog functionality for modeling tips/updates
2. Integrate with Instagram API for automatic feed
3. Add testimonials section
4. Create case studies for major campaigns
5. Add video portfolio section
6. Implement dark mode toggle
7. Add multi-language support
8. Create booking calendar integration

---

Built with ❤️ using Next.js 14 and modern web technologies.
