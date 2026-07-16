# Converting HEIC Images to JPG

Your portfolio contains HEIC format images that need to be converted to JPG format for web use, as browsers don't support HEIC files.

## HEIC Files Found

These HEIC files are in `src/assets/ExtraPhotos/`:

- FullSizeRender.HEIC
- IMG_1700.heic
- IMG_3279.heic
- IMG_3311.heic
- IMG_4872.heic
- IMG_5125.heic
- IMG_5514.HEIC
- IMG_5798.heic
- IMG_5802.heic
- IMG_6415.heic
- IMG_6427.heic
- IMG_8198.HEIC

## Conversion Methods

### Method 1: Using macOS Built-in Tool (Recommended on Mac)

If you're on macOS, use the built-in `sips` command:

```bash
# Navigate to the ExtraPhotos folder
cd src/assets/ExtraPhotos

# Convert all HEIC files to JPG
for file in *.heic *.HEIC; do
  if [ -f "$file" ]; then
    filename="${file%.*}"
    sips -s format jpeg "$file" --out "${filename}.jpg"
    echo "Converted: $file → ${filename}.jpg"
  fi
done
```

### Method 2: Using ImageMagick (if installed)

```bash
cd src/assets/ExtraPhotos

for file in *.heic *.HEIC; do
  if [ -f "$file" ]; then
    filename="${file%.*}"
    convert "$file" "${filename}.jpg"
    echo "Converted: $file → ${filename}.jpg"
  fi
done
```

### Method 3: Online Conversion Tools

1. Visit https://cloudconvert.com/heic-to-jpg
2. Upload your HEIC files
3. Download the converted JPG files
4. Move them to the `public` folder with appropriate names

### Method 4: Using Preview App (macOS)

1. Open HEIC file in Preview
2. Go to File → Export
3. Choose Format: JPEG
4. Save to `public` folder

## After Conversion

1. **Move converted JPG files** from `src/assets/ExtraPhotos/` to the `public/` folder
2. **Rename them** to match your naming convention (e.g., `nikhil-kubde-extra-16.jpg`, `nikhil-kubde-extra-17.jpg`, etc.)
3. **Update your components** to include the new images if you want to use them

## Current Image Status

✅ **Working images** (already in JPG format in `public/`):

- gallery-1.jpg through gallery-6.jpg
- portfolio-1.jpg through portfolio-12.jpg
- nikhil-kubde-extra-01.jpg through nikhil-kubde-extra-15.jpg
- hero-image.jpg
- about-image.jpg
- og-image.jpg
- profile.jpg

❌ **HEIC files** (need conversion before use):

- All files in `src/assets/ExtraPhotos/` with .heic/.HEIC extension

## Quick Convert Script

Save this script as `convert-heic.sh` in the project root:

```bash
#!/bin/bash
cd src/assets/ExtraPhotos

for file in *.heic *.HEIC; do
  if [ -f "$file" ]; then
    filename="${file%.*}"
    echo "Converting: $file"
    sips -s format jpeg "$file" --out "${filename}.jpg" > /dev/null 2>&1
    if [ $? -eq 0 ]; then
      echo "✅ Converted: ${filename}.jpg"
    else
      echo "❌ Failed: $file"
    fi
  fi
done

echo "Done! Converted JPG files are in src/assets/ExtraPhotos/"
echo "Move them to public/ folder and rename as needed."
```

Make it executable and run:

```bash
chmod +x convert-heic.sh
./convert-heic.sh
```
