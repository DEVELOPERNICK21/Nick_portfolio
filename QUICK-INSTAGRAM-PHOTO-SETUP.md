# Quick Setup: Add Your Instagram Photo

## For Photo: https://www.instagram.com/p/DRFhfnpEqmK/

### Step 1: Download the Photo (2 minutes)

**Easiest Method:**
1. Open: https://downloadgram.com/
2. Paste: `https://www.instagram.com/p/DRFhfnpEqmK/`
3. Click "Download"
4. Save the image

**Or:**
1. Open the Instagram post in browser
2. Right-click image → "Save image as..."
3. Save it

### Step 2: Add to Website (1 minute)

1. **Create folder** (if doesn't exist):
   ```
   /public/instagram/
   ```

2. **Save the image** as:
   ```
   /public/instagram/instagram-1.jpg
   ```

3. **Update the code** in `src/components/InstagramFeed.tsx`:

Find this section (around line 25-35):
```typescript
const manualInstagramPosts: InstagramPost[] = [
  // Example - Add your Instagram photos here:
];
```

**Replace with:**
```typescript
const manualInstagramPosts: InstagramPost[] = [
  {
    id: "1",
    media_url: "/instagram/instagram-1.jpg",
    permalink: "https://www.instagram.com/p/DRFhfnpEqmK/",
    caption: "Your photo caption here",
    media_type: "IMAGE",
    timestamp: new Date().toISOString(),
  },
];
```

### Step 3: Done! ✅

The photo will now appear in your Instagram feed section on the homepage!

## Adding More Photos

Just repeat:
1. Download from Instagram
2. Save as `/public/instagram/instagram-2.jpg`, `instagram-3.jpg`, etc.
3. Add to the array:

```typescript
const manualInstagramPosts: InstagramPost[] = [
  {
    id: "1",
    media_url: "/instagram/instagram-1.jpg",
    permalink: "https://www.instagram.com/p/DRFhfnpEqmK/",
    caption: "First photo",
    media_type: "IMAGE",
    timestamp: new Date().toISOString(),
  },
  {
    id: "2",
    media_url: "/instagram/instagram-2.jpg",
    permalink: "https://www.instagram.com/p/YOUR_POST_ID/",
    caption: "Second photo",
    media_type: "IMAGE",
    timestamp: new Date().toISOString(),
  },
  // Add more...
];
```

## Need Help?

Just download the photo and save it to `/public/instagram/instagram-1.jpg`, then tell me and I'll update the code for you! 🚀

