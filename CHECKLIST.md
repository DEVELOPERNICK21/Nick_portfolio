# Portfolio Website Launch Checklist

Use this checklist to ensure your portfolio is fully customized and ready to launch.

## 📋 Pre-Launch Checklist

### ✅ Content Customization

- [ ] **Replace "Your Name" everywhere with your actual name**

  - [ ] `src/app/layout.tsx` (multiple locations)
  - [ ] `src/components/Navbar.tsx`
  - [ ] `src/components/Footer.tsx`
  - [ ] `src/components/Hero.tsx`
  - [ ] `src/app/page.tsx` (JSON-LD)
  - [ ] `README.md`

- [ ] **Update all email addresses**

  - [ ] `src/app/layout.tsx`
  - [ ] `src/app/contact/page.tsx`

- [ ] **Update social media handles**

  - [ ] Instagram: `@yourhandle` → `@youractualhandle`
  - [ ] Twitter: `@yourhandle` → `@youractualhandle`
  - [ ] LinkedIn: `yourprofile` → `youractualprofile`
  - Update in: `layout.tsx`, `contact/page.tsx`, `Footer.tsx`

- [ ] **Update website URL**
  - [ ] Replace `https://yourportfolio.com` with your domain
  - [ ] `src/app/layout.tsx`
  - [ ] `src/app/sitemap.ts`
  - [ ] `src/app/robots.ts`
  - [ ] `src/app/page.tsx`

### 📸 Images

- [ ] **Hero Section**

  - [ ] Add `hero-image.jpg` (1920x1080px or larger)

- [ ] **About Page**

  - [ ] Add `about-image.jpg` (1200x1600px)

- [ ] **SEO & Social**

  - [ ] Add `og-image.jpg` (1200x630px - exact size required)
  - [ ] Add `profile.jpg`

- [ ] **Homepage Gallery** (6 images)

  - [ ] `gallery-1.jpg`
  - [ ] `gallery-2.jpg`
  - [ ] `gallery-3.jpg`
  - [ ] `gallery-4.jpg`
  - [ ] `gallery-5.jpg`
  - [ ] `gallery-6.jpg`

- [ ] **Portfolio Page** (12 images)

  - [ ] `portfolio-1.jpg` through `portfolio-12.jpg`

- [ ] **App Icons**
  - [ ] `icon-192.png` (192x192px)
  - [ ] `icon-512.png` (512x512px)

### 📝 About Page Content

- [ ] **Update your bio/story** (`src/app/about/page.tsx`)

  - [ ] Personal journey (lines 35-51)
  - [ ] When you started modeling
  - [ ] Your passion and values

- [ ] **Update measurements** (lines 59-74)

  - [ ] Height
  - [ ] Bust-Waist-Hips
  - [ ] Dress Size
  - [ ] Shoe Size

- [ ] **Update experience** (lines 82-111)

  - [ ] Fashion weeks attended
  - [ ] Publications featured in
  - [ ] Brand collaborations
  - [ ] Commercial work

- [ ] **Update skills** (lines 119-129)
  - [ ] Add/remove relevant specialties

### 📞 Contact Page

- [ ] **Update contact details** (`src/app/contact/page.tsx`)
  - [ ] Email address
  - [ ] Location/city
  - [ ] Agency name and email
  - [ ] Social media links (all 3)

### 📊 Stats & Numbers

- [ ] **Update homepage stats** (`src/components/Stats.tsx`)
  - [ ] Years of experience
  - [ ] Number of projects
  - [ ] Brand collaborations
  - [ ] Fashion shows

### 🎨 Optional Customization

- [ ] **Colors** (`tailwind.config.ts`)

  - [ ] Primary color (default: #1a1a1a - dark)
  - [ ] Secondary color (default: #f5f5f5 - light gray)
  - [ ] Accent color (default: #c9a86a - gold)

- [ ] **Portfolio Categories** (`src/components/PortfolioGrid.tsx`)
  - [ ] Customize category names if needed

### 🔍 SEO Setup

- [ ] **Google Search Console**

  - [ ] Create account
  - [ ] Add and verify your website
  - [ ] Get verification code
  - [ ] Add verification code to `src/app/layout.tsx`
  - [ ] Submit sitemap

- [ ] **Metadata**

  - [ ] Update meta description with your unique value
  - [ ] Update keywords relevant to your niche
  - [ ] Set correct locale if not US

- [ ] **Structured Data** (`src/app/page.tsx`)
  - [ ] Update JSON-LD with your information
  - [ ] Test with [Google Rich Results Test](https://search.google.com/test/rich-results)

## 🚀 Launch Steps

### 1. Local Testing

```bash
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Test all pages load
- [ ] Test navigation
- [ ] Test responsive design (resize browser)
- [ ] Test on mobile device
- [ ] Check all images display
```

### 2. Build & Production Test

```bash
- [ ] Run `npm run build`
- [ ] Fix any build errors
- [ ] Run `npm start`
- [ ] Test production build locally
```

### 3. Deploy to Vercel

- [ ] Push code to GitHub
- [ ] Connect GitHub repo to Vercel
- [ ] Deploy to Vercel
- [ ] Check deployed site works

### 4. Domain Setup

- [ ] Purchase domain (if needed)
- [ ] Add custom domain in Vercel
- [ ] Update DNS settings
- [ ] Wait for DNS propagation (can take up to 48 hours)
- [ ] Verify HTTPS is working

### 5. Update URLs After Domain

- [ ] Update all URLs in code to your actual domain
- [ ] Redeploy to Vercel
- [ ] Test all social sharing

## 📈 Post-Launch

### SEO & Analytics

- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Submit site to Bing Webmaster Tools
- [ ] Test site speed with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Test mobile-friendliness
- [ ] Set up Google Business Profile (optional)

### Social Media Preview

- [ ] Test how site appears when shared on:
  - [ ] Facebook
  - [ ] Twitter
  - [ ] LinkedIn
  - [ ] Instagram (link in bio)
- [ ] Use [metatags.io](https://metatags.io) to preview

### Monitoring

- [ ] Monitor Google Search Console for issues
- [ ] Check site performance weekly
- [ ] Keep portfolio images updated
- [ ] Add new work regularly

## 🔧 Ongoing Maintenance

### Monthly

- [ ] Update portfolio with new work
- [ ] Check for broken links
- [ ] Review and update bio if needed
- [ ] Check analytics

### Quarterly

- [ ] Update Node.js dependencies: `npm update`
- [ ] Review and improve SEO
- [ ] Add new testimonials (if applicable)
- [ ] Update stats/numbers

### Yearly

- [ ] Refresh hero image
- [ ] Update about page content
- [ ] Review and update all information
- [ ] Major design refresh (if needed)

## 📞 Need Help?

Common Issues:

- **Images not showing**: Check file names match exactly (case-sensitive)
- **Build errors**: Run `npm install` again, delete `.next` folder
- **Slow loading**: Optimize images, reduce file sizes
- **SEO not working**: Check meta tags, submit sitemap, be patient (takes weeks)

Resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Docs](https://vercel.com/docs)
- [Google Search Console Help](https://support.google.com/webmasters)

---

**Progress Tracking**

- Total items: ~60
- Completed: \_\_\_
- Date started: \_\_\_
- Launch date: \_\_\_

Good luck with your portfolio launch! 🎉
