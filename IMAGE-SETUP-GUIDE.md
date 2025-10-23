# Image Setup Guide for Nikhil Kubde's Portfolio

## 🎯 Current Image Location

Your images are currently in: `/src/assets/images/`

However, **Next.js Image component works best with images in the `/public` folder**.

## 📁 Quick Fix: Move Images to Public Folder

### Option 1: Move All Images (Recommended)

```bash
# Move all images from src/assets/images to public folder
mv src/assets/images/* public/
```

### Option 2: Copy Images (Keep Both)

```bash
# Copy images to public folder
cp src/assets/images/* public/
```

## 🖼️ Required Images for Your Portfolio

Place these images in the `/public` folder:

### Hero & Main Pages

- `hero-image.jpg` - Your main banner image (1920x1080px or larger)
- `about-image.jpg` - Photo for About page (1200x1600px)
- `profile.jpg` - Profile picture for SEO

### Social Media

- `og-image.jpg` - Social media preview (MUST be 1200x630px)

### Homepage Gallery (6 images)

- `gallery-1.jpg`
- `gallery-2.jpg`
- `gallery-3.jpg`
- `gallery-4.jpg`
- `gallery-5.jpg`
- `gallery-6.jpg`

### Portfolio Page (12 images)

- `portfolio-1.jpg` through `portfolio-12.jpg`

### Icons

- `icon-192.png` (192x192px)
- `icon-512.png` (512x512px)

## 💡 Using Your Existing Photos

I saw you have a photo named `nikhil kubde14046.jpg`. Here's how to use it:

### Option A: Rename to Match Template

```bash
# In the public folder
mv "nikhil kubde14046.jpg" hero-image.jpg
```

### Option B: Update Code to Use Your Filename

In `src/components/Hero.tsx`, change line 32:

```typescript
// From:
src = "/hero-image.jpg";

// To:
src = "/nikhil kubde14046.jpg";
```

## 🎨 Image Naming Best Practices

1. **No spaces** - Use hyphens instead

   - ❌ `nikhil kubde14046.jpg`
   - ✅ `nikhil-kubde-14046.jpg`

2. **Lowercase** - Easier to remember and type

   - ✅ `hero-image.jpg`

3. **Descriptive names** - Helps with SEO
   - ✅ `nikhil-kubde-fashion-week-2024.jpg`

## 🚀 Quick Setup Steps

1. **Move/Copy images to public folder:**

   ```bash
   mv src/assets/images/* public/
   ```

2. **Rename files to match the template:**

   ```bash
   cd public
   mv "nikhil kubde14046.jpg" hero-image.jpg
   # Repeat for other images
   ```

3. **Or update the code** to use your filenames

4. **Make sure all file extensions are lowercase:**
   - Use `.jpg` not `.JPG`
   - Use `.png` not `.PNG`

## 📝 Current Files Using Images

These files reference images:

1. `src/components/Hero.tsx` - `/hero-image.jpg`
2. `src/app/about/page.tsx` - `/about-image.jpg`
3. `src/components/Gallery.tsx` - `/gallery-1.jpg` through `/gallery-6.jpg`
4. `src/components/PortfolioGrid.tsx` - `/portfolio-1.jpg` through `/portfolio-12.jpg`

## ⚡ Quick Test

After moving images, run:

```bash
npm run dev
```

Visit `http://localhost:3000` and check if images load properly.

## 🔧 Troubleshooting

### Images Not Showing?

1. **Check file location:** Images must be in `/public` folder
2. **Check file names:** Must match exactly (case-sensitive)
3. **Check file extensions:** Use lowercase (.jpg not .JPG)
4. **Restart dev server:** Stop and run `npm run dev` again

### Getting 404 Errors?

```bash
# Verify image is in public folder
ls public/hero-image.jpg

# If not found, move it there
mv "src/assets/images/your-image.jpg" "public/hero-image.jpg"
```

## 💡 Pro Tip

For the best experience:

1. Use JPG for photos (smaller file size)
2. Keep images under 500KB each
3. Use proper dimensions (see list above)
4. Optimize images with tools like:
   - https://tinypng.com
   - https://squoosh.app

---

Need help? Check the main README.md for more details!
