# 📋 Quick Reference Card

Keep this handy while working on your portfolio.

## ⚡ Essential Commands

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
# Then visit: http://localhost:3000

# Build for production
npm run build

# Run production build locally
npm start

# Check for code issues
npm run lint
```

## 📁 File Locations

### Must Edit

- `src/app/layout.tsx` - Site metadata, title, SEO
- `src/app/about/page.tsx` - Your story, measurements
- `src/app/contact/page.tsx` - Contact info, email
- `src/components/Navbar.tsx` - Site name/logo
- `src/components/Hero.tsx` - Homepage hero text
- `src/components/Stats.tsx` - Your statistics
- `src/app/page.tsx` - JSON-LD structured data

### Images Location

- All images go in: `/public` folder
- Access in code as: `/image-name.jpg`

### Style Customization

- `tailwind.config.ts` - Colors, fonts
- `src/app/globals.css` - Global styles

## 🔍 Search & Replace

Open your editor's search (Cmd/Ctrl + Shift + F) and replace:

| Search For                | Replace With             |
| ------------------------- | ------------------------ |
| `Your Name`               | Your actual name         |
| `yourhandle`              | Your social media handle |
| `yourportfolio.com`       | Your actual domain       |
| `hello@yourportfolio.com` | Your actual email        |
| `yourprofile`             | Your LinkedIn username   |

## 📸 Required Images Checklist

Place in `/public` folder:

- [ ] `hero-image.jpg` (1920x1080px+)
- [ ] `about-image.jpg` (1200x1600px)
- [ ] `og-image.jpg` (1200x630px - EXACT)
- [ ] `profile.jpg` (your headshot)
- [ ] `gallery-1.jpg` through `gallery-6.jpg`
- [ ] `portfolio-1.jpg` through `portfolio-12.jpg`
- [ ] `icon-192.png` (192x192px)
- [ ] `icon-512.png` (512x512px)

## 🎨 Color Variables

Edit in `tailwind.config.ts`:

```typescript
primary: "#1a1a1a"; // Dark (navbar, text)
secondary: "#f5f5f5"; // Light (backgrounds)
accent: "#c9a86a"; // Gold (highlights)
```

## 🚀 Deployment Steps

### To Vercel (Recommended - Free)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Click "Deploy"
6. Done! 🎉

### Add Custom Domain (Vercel)

1. Go to project settings
2. Click "Domains"
3. Add your domain
4. Update DNS records (Vercel shows you how)
5. Wait for DNS (up to 48 hours)

## 🔧 Customization Quick Tips

### Change Portfolio Categories

`src/components/PortfolioGrid.tsx` line 7:

```typescript
const categories = ["All", "Editorial", "Fashion", ...];
```

### Update Stats Numbers

`src/components/Stats.tsx` line 4:

```typescript
const stats = [
  { number: "10+", label: "Years Experience" },
  ...
];
```

### Change Fonts

`src/app/layout.tsx` line 7-8:

```typescript
import { YourFont, AnotherFont } from "next/font/google";
```

### Add Google Analytics

1. Get tracking ID from analytics.google.com
2. Add to `src/app/layout.tsx` in `<head>`

## 📊 SEO Quick Wins

### After Deployment

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your website
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### Test Your SEO

- Speed: [pagespeed.web.dev](https://pagespeed.web.dev)
- Mobile: [search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)
- Schema: [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- Social: [metatags.io](https://metatags.io)

## 🐛 Troubleshooting

| Problem                  | Solution                           |
| ------------------------ | ---------------------------------- |
| Can't find module errors | Run `npm install`                  |
| Images not showing       | Check file names (case-sensitive)  |
| Port 3000 already in use | Kill process or use different port |
| Build fails              | Delete `.next` folder, rebuild     |
| Slow loading             | Compress images (< 500KB)          |

## 💡 Key URLs

After deployment, check these work:

- `https://yourdomain.com` - Homepage
- `https://yourdomain.com/about` - About
- `https://yourdomain.com/portfolio` - Portfolio
- `https://yourdomain.com/contact` - Contact
- `https://yourdomain.com/sitemap.xml` - Sitemap
- `https://yourdomain.com/robots.txt` - Robots

## 📱 Testing Checklist

Before launching:

- [ ] Test on Chrome
- [ ] Test on Safari
- [ ] Test on phone
- [ ] Test on tablet
- [ ] All links work
- [ ] All images load
- [ ] Forms work
- [ ] Social links work
- [ ] Site loads fast (<3s)
- [ ] No console errors

## 🔐 Environment Variables

If you need to add secrets (API keys, etc.):

1. Create `.env.local` file in root
2. Add variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   EMAIL_API_KEY=your_secret_key
   ```
3. Access in code: `process.env.NEXT_PUBLIC_SITE_URL`
4. Never commit `.env.local` to Git!

## 📞 Important Links

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **React Icons**: https://react-icons.github.io/react-icons

## ✅ Pre-Launch Checklist

- [ ] All text personalized
- [ ] All images added
- [ ] All social links updated
- [ ] Contact info correct
- [ ] Test build passes
- [ ] Mobile responsive
- [ ] Fast loading
- [ ] SEO meta tags updated
- [ ] Domain connected
- [ ] HTTPS enabled
- [ ] Google Search Console set up

## 🎯 Post-Launch Tasks

**Week 1:**

- [ ] Submit to Google Search Console
- [ ] Share on all social media
- [ ] Add to Instagram bio

**Month 1:**

- [ ] Check analytics
- [ ] Update with new work
- [ ] Fix any issues

**Ongoing:**

- [ ] Add new photos monthly
- [ ] Update bio annually
- [ ] Monitor SEO performance

---

## 🆘 Quick Help

**Something broken?**

1. Check this guide
2. Read error messages
3. Google the error
4. Check Next.js docs

**Need to start over?**

```bash
rm -rf node_modules .next
npm install
npm run dev
```

---

Keep this reference handy! 📌

For detailed guides, see:

- `GETTING-STARTED.md` - Start here
- `SETUP.md` - Full setup guide
- `CHECKLIST.md` - Complete checklist
- `SEO-GUIDE.md` - SEO best practices
- `README.md` - Technical docs
