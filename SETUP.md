# Quick Setup Guide

Follow these steps to get your portfolio website up and running:

## 1. Install Dependencies (5 minutes)

```bash
npm install
```

## 2. Add Your Images (15 minutes)

Place these images in the `/public` folder:

### Required Images:

- `hero-image.jpg` - Main homepage banner (recommended: 1920x1080px)
- `about-image.jpg` - Your photo for About page (1200x1600px)
- `og-image.jpg` - Social media preview image (MUST be 1200x630px)
- `profile.jpg` - Profile picture for SEO

### Gallery Images (Homepage):

- `gallery-1.jpg` through `gallery-6.jpg` (900x1200px each)

### Portfolio Images:

- `portfolio-1.jpg` through `portfolio-12.jpg` (1200x1600px each)

### App Icons:

- `icon-192.png` - App icon 192x192px
- `icon-512.png` - App icon 512x512px

**Don't have professional photos yet?** Use free stock photos from:

- Unsplash.com
- Pexels.com
- Pixabay.com

## 3. Update Personal Information (10 minutes)

### A. Site Metadata (`src/app/layout.tsx`)

```typescript
// Line 18-20: Update your details
title: {
  default: 'Jane Smith - Professional Model Portfolio',  // ← Your name
  template: '%s | Jane Smith'  // ← Your name
},

// Line 22: Update description
description: 'Your actual bio here...',

// Line 24: Update keywords
keywords: ['your', 'relevant', 'keywords'],

// Line 30: Your website URL
url: 'https://janesmith.com',

// Line 32: Your name
siteName: 'Jane Smith - Model Portfolio',

// Line 60: Social media
creator: '@yourinstagram',

// Line 81: Google verification (get from Google Search Console)
google: 'your-verification-code',
```

### B. Navbar (`src/components/Navbar.tsx`)

```typescript
// Line 24: Replace with your name
<Link href='/' className='text-2xl font-serif font-bold'>
  Jane Smith {/* ← Your name */}
</Link>
```

### C. About Page (`src/app/about/page.tsx`)

- Update your story (lines 35-51)
- Update measurements (lines 59-74)
- Update experience highlights (lines 82-111)
- Update skills list (lines 119-129)

### D. Contact Page (`src/app/contact/page.tsx`)

- Update email (line 43)
- Update location (line 50)
- Update agency info (lines 54-61)
- Update social media links (lines 69-98)

### E. Homepage (`src/app/page.tsx`)

```typescript
// Line 17: Update structured data
"name": "Jane Smith",  // ← Your name
"description": "Your description...",
"sameAs": [
  "https://instagram.com/yourhandle",  // ← Your handles
  // ...
]
```

### F. Hero Component (`src/components/Hero.tsx`)

```typescript
// Line 21: Your name
<h1 className='...'>Jane Smith {/* ← Your name */}</h1>
```

## 4. Update SEO URLs (5 minutes)

Search and replace `https://yourportfolio.com` with your actual domain:

- `src/app/layout.tsx`
- `src/app/sitemap.ts`
- `src/app/robots.ts`

## 5. Customize Stats (Optional)

Edit `src/components/Stats.tsx` to update your experience numbers:

```typescript
const stats = [
  { number: "10+", label: "Years Experience" }, // ← Update numbers
  { number: "500+", label: "Projects Completed" },
  // ...
];
```

## 6. Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` and check:

- ✓ All pages load correctly
- ✓ Images display properly
- ✓ Navigation works
- ✓ Contact form appears correctly
- ✓ Responsive design on mobile (resize browser)

## 7. Build & Deploy

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

### Deploy to Vercel:

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
6. Done! ✨

### After Deployment:

1. Add your custom domain in Vercel dashboard
2. Update all URLs in code to your domain
3. Redeploy
4. Submit sitemap to Google Search Console

## 8. SEO Setup (Post-Launch)

1. **Google Search Console**

   - Add and verify your site
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Google Analytics** (Optional)

   - Create account at analytics.google.com
   - Add tracking ID to your site

3. **Social Media**
   - Test how your site looks when shared
   - Use [metatags.io](https://metatags.io) to preview

## Troubleshooting

**Images not showing?**

- Make sure images are in `/public` folder
- Check file names match exactly (case-sensitive)
- Verify image format (jpg, png, webp)

**Build errors?**

- Run `npm install` again
- Delete `.next` folder and rebuild
- Check for TypeScript errors

**Contact form not working?**

- The form is currently client-side only
- To send real emails, integrate with SendGrid or EmailJS
- Or create an API route in `/src/app/api/contact/route.ts`

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

---

**Estimated Total Setup Time: 35-45 minutes**

Once set up, your portfolio will be:

- ✓ Fully responsive
- ✓ SEO optimized
- ✓ Fast loading
- ✓ Professional looking
- ✓ Ready for search engines
