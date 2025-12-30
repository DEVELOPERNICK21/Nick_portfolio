# How to Use Instagram Photos on Your Website

## ❌ Problem: Can't Use Instagram URLs Directly

Instagram post URLs like `https://www.instagram.com/p/DRFhfnpEqmK/` **cannot be used directly** as image sources because:

- Instagram blocks hotlinking (direct image embedding)
- Post URLs are not image URLs
- Instagram protects their content

## ✅ Solution: Extract & Download the Image

### Method 1: Download from Instagram (Easiest)

1. **Open the Instagram post** in your browser: https://www.instagram.com/p/DRFhfnpEqmK/
2. **Right-click on the image**
3. **Select "Open image in new tab"** or "Inspect"
4. **Copy the image URL** (will look like: `https://instagram.com/.../s640x640/...`)
5. **Download the image**:
   - Right-click the image → "Save image as..."
   - Or use browser extensions like "Download Image"
6. **Save it** to your `/public` folder with a good name like `instagram-photo-1.jpg`

### Method 2: Use Online Tools (Fast)

1. **Go to**: https://downloadgram.com/ or https://instadownloader.co/
2. **Paste your Instagram post URL**: `https://www.instagram.com/p/DRFhfnpEqmK/`
3. **Click "Download"**
4. **Save the image** to your `/public` folder

### Method 3: Extract Image URL (Advanced)

1. Open Instagram post in browser
2. Press `F12` (or right-click → Inspect)
3. Go to "Network" tab
4. Refresh the page
5. Look for files with `.jpg` extension
6. Right-click → "Open in new tab"
7. Copy the URL and download

## 📁 Where to Put the Image

Once downloaded, place it in your `/public` folder:

```
/public/
  ├── instagram-photo-1.jpg  ← Your downloaded Instagram photo
  ├── hero-image.jpg
  ├── about-image.jpg
  └── ...
```

## 💻 How to Use It in Your Website

### Option A: Replace Existing Image

If you want to use it as your about page image:

1. **Rename the downloaded file** to `about-image.jpg`
2. **Replace** the existing `/public/about-image.jpg`
3. **Done!** It will automatically show on your About page

### Option B: Add to Gallery

If you want to add it to your gallery:

1. **Save as** `gallery-7.jpg` (or next available number)
2. **Add to** `/public/gallery-7.jpg`
3. **Update** `src/components/HomeGallery.tsx` to include it:

```typescript
const galleryItems: GalleryItem[] = [
  // ... existing items
  {
    src: "/gallery-7.jpg",
    alt: "Instagram photo - Nikhil Kubde",
    category: "Lifestyle",
    height: "medium",
  },
];
```

### Option C: Use in Instagram Feed Component

You can manually add Instagram photos to the feed:

1. **Download** multiple Instagram photos
2. **Save them** as `instagram-1.jpg`, `instagram-2.jpg`, etc. in `/public`
3. **Update** `src/components/InstagramFeed.tsx`:

```typescript
// Add manual Instagram photos
const manualInstagramPosts = [
  {
    id: "1",
    media_url: "/instagram-1.jpg",
    permalink: "https://www.instagram.com/p/DRFhfnpEqmK/",
    caption: "Your caption here",
  },
  // Add more...
];
```

## 🎯 Quick Steps for Your Photo

For the photo at `https://www.instagram.com/p/DRFhfnpEqmK/`:

1. **Download it** using Method 1 or 2 above
2. **Save as** `/public/instagram-featured.jpg`
3. **Tell me where you want to use it** and I'll update the code!

## 📝 Best Practices

1. **Rename files** - Use descriptive names (not random Instagram IDs)
2. **Optimize images** - Compress before uploading (use TinyPNG.com)
3. **Use proper sizes**:
   - Hero images: 1920x1080px
   - Gallery: 900x1200px
   - About page: 1200x1600px
4. **Keep originals** - Save original Instagram photos in a backup folder

## 🚀 Quick Command (If Using Terminal)

```bash
# After downloading, move to public folder
mv ~/Downloads/instagram-photo.jpg public/instagram-featured.jpg
```

## ⚠️ Important Notes

- **Always credit** if required (check Instagram's terms)
- **Use your own photos** - Don't use others' photos without permission
- **Respect copyright** - Only use photos you own or have rights to
- **Optimize images** - Large Instagram images can slow down your site

## 💡 Pro Tip

Create a folder structure:

```
/public/
  ├── instagram/
  │   ├── instagram-1.jpg
  │   ├── instagram-2.jpg
  │   └── ...
```

Then reference as: `/instagram/instagram-1.jpg`

---

**Need help?** Just download the image and tell me where you want to use it, and I'll update the code for you! 🎨
