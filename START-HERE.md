# 🚀 START HERE - Nikhil Kubde

## Welcome to Your New Dark Theme Portfolio!

Your portfolio has been transformed with a **creative dark theme** featuring cyan and gold accents, with your CastYou agency profile fully integrated.

## ⚡ Quick Start (5 Minutes)

### Step 1: Move Your Images (2 min)

```bash
# Move images from src/assets/images to public folder
mv src/assets/images/* public/

# Or if you want to keep a copy
cp src/assets/images/* public/
```

### Step 2: Install Dependencies (2 min)

```bash
npm install
```

### Step 3: Start Dev Server (1 min)

```bash
npm run dev
```

Then open: **http://localhost:3000**

## 🎨 What's New?

### Dark Creative Theme

- **Background**: Deep black (#050505)
- **Accents**: Electric cyan (#00d4ff) & gold (#ffd700)
- **Effects**: Glowing text, gradient buttons, smooth animations

### Your Information

- ✅ Name: **Nikhil Kubde**
- ✅ Agency: **CastYou** with link to your profile
- ✅ Agency URL: https://castyou.in/nikhil-kubde/
- ✅ Location: India
- ✅ Male model measurements

### CastYou Integration

Your agency appears in:

1. Hero section - "Represented by CastYou Agency"
2. Footer - Direct link to profile
3. About page - In your journey
4. Contact page - Under representation
5. Navigation - CastYou Profile link

## ⚠️ Important: Update These

### 1. Add Your Social Media Links

Find and replace in these files:

**Your Instagram:**

- `src/app/layout.tsx` → Line 84
- `src/components/Footer.tsx` → Line 73
- `src/app/contact/page.tsx` → Line 79
- `src/app/page.tsx` → Line 26

**Your Twitter:**

- Same files, different lines

**Your LinkedIn:**

- Same files, different lines

### 2. Update Your Email

Replace `nikhilkubde@example.com` with your real email:

- `src/app/contact/page.tsx` → Line 45

### 3. Add Your Website URL

Replace `https://yourportfolio.com` with your domain:

- `src/app/layout.tsx`
- `src/app/sitemap.ts`
- `src/app/robots.ts`

## 📸 About Your Images

I saw you have `nikhil kubde14046.jpg` in `src/assets/images/`.

**Quick fix:**

```bash
# Move to public and rename
mv "src/assets/images/nikhil kubde14046.jpg" public/hero-image.jpg
```

**Or use your filename as-is:**
In `src/components/Hero.tsx`, change:

```typescript
src = "/hero-image.jpg";
// to
src = "/nikhil kubde14046.jpg";
```

See **IMAGE-SETUP-GUIDE.md** for full details.

## 🎯 Files You Might Want to Edit

### Update Your Story

`src/app/about/page.tsx` - Lines 43-61

- Add your personal journey
- When you started modeling
- Your achievements

### Update Stats

`src/components/Stats.tsx` - Lines 2-7

- Years of experience
- Number of projects
- Collaborations
- Shows

## 📚 Documentation

1. **DARK-THEME-SUMMARY.md** ⭐ - See all changes made
2. **IMAGE-SETUP-GUIDE.md** - How to add your photos
3. **GETTING-STARTED.md** - Complete setup guide
4. **QUICK-REFERENCE.md** - Command reference

## 🔥 Theme Features

### Glowing Effects

- Your name glows with cyan light
- Buttons have glow on hover
- Cards glow when you hover over them

### Gradients

- Cyan to gold button gradients
- Text gradients on titles
- Smooth color transitions

### Animations

- Smooth 300-500ms transitions
- Scale effects on interaction
- Image zoom in portfolio

## ✅ Checklist Before Launch

- [ ] Move images to `/public` folder
- [ ] Update social media links
- [ ] Update email address
- [ ] Update website URL
- [ ] Edit your story in About page
- [ ] Update stats with your numbers
- [ ] Test on mobile
- [ ] Run `npm run build` successfully

## 🚀 Deploy When Ready

```bash
# Build production version
npm run build

# Test it locally
npm start

# Then deploy to Vercel
# (See GETTING-STARTED.md for deployment steps)
```

## 💡 Pro Tips

1. **Image Names**: Use lowercase with hyphens

   - Good: `nikhil-kubde-fashion.jpg`
   - Bad: `Nikhil Kubde Fashion.JPG`

2. **File Size**: Keep images under 500KB

   - Use https://tinypng.com to compress

3. **Dimensions**:
   - Hero: 1920x1080px or larger
   - Portfolio: 1200x1600px (3:4 ratio)
   - OG Image: Exactly 1200x630px

## 🆘 Troubleshooting

### Images not showing?

```bash
# Make sure images are in public folder
ls public/

# Check if hero-image.jpg exists
ls public/hero-image.jpg
```

### Build errors?

```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### Port already in use?

```bash
# Kill the process and restart
npm run dev
```

## 🎨 Want Different Colors?

Edit `tailwind.config.ts`:

```typescript
colors: {
  accent: "#00d4ff",      // Your main accent color
  accentGold: "#ffd700",  // Your secondary accent
  primary: "#0a0a0a",     // Your dark color
}
```

Try these combinations:

- **Purple & Pink**: `#9333ea` & `#ec4899`
- **Green & Teal**: `#10b981` & `#14b8a6`
- **Red & Orange**: `#ef4444` & `#f97316`

## 📞 Your Agency

**CastYou Profile**: https://castyou.in/nikhil-kubde/

This link appears throughout your portfolio to drive bookings through your agency.

---

## 🎉 That's It!

Your portfolio is ready. Just:

1. Move your images
2. Update your links
3. Run `npm run dev`
4. Enjoy your dark, creative portfolio!

**Questions?** Check the other guides in this folder.

**Ready to launch?** See GETTING-STARTED.md for deployment.

---

Made with 💙 for Nikhil Kubde | CastYou Agency
