#!/bin/bash

# Image Optimization Script for Nikhil Kubde Portfolio
# This script optimizes all images in the public folder

echo "🎨 Image Optimization Script"
echo "============================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo -e "${RED}❌ ImageMagick is not installed${NC}"
    echo ""
    echo "Install it with:"
    echo -e "${YELLOW}brew install imagemagick${NC}"
    echo ""
    echo "Or use online tools:"
    echo "  - https://tinypng.com (easiest)"
    echo "  - https://squoosh.app (best quality)"
    exit 1
fi

# Backup original images
echo -e "${YELLOW}📦 Creating backup...${NC}"
mkdir -p originals
cp public/*.jpg originals/ 2>/dev/null || true
cp public/*.png originals/ 2>/dev/null || true
echo -e "${GREEN}✓ Backup created in ./originals/${NC}"
echo ""

# Optimize images
echo -e "${YELLOW}⚡ Optimizing images...${NC}"
echo ""

count=0
total_before=0
total_after=0

for img in public/*.jpg public/*.png; do
    if [ -f "$img" ]; then
        # Get file size before
        size_before=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        size_before_mb=$(echo "scale=2; $size_before / 1048576" | bc)
        
        # Create temp file
        temp_file="${img}.temp"
        
        # Optimize based on file type
        if [[ $img == *.jpg ]]; then
            # JPG: Resize and compress
            convert "$img" -resize '1920x1920>' -quality 85 -strip "$temp_file"
        else
            # PNG: Just compress
            convert "$img" -quality 85 -strip "$temp_file"
        fi
        
        # Replace original if optimization successful
        if [ -f "$temp_file" ]; then
            mv "$temp_file" "$img"
            
            # Get file size after
            size_after=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
            size_after_mb=$(echo "scale=2; $size_after / 1048576" | bc)
            
            # Calculate savings
            savings=$(echo "scale=1; 100 - ($size_after * 100 / $size_before)" | bc)
            
            # Update totals
            total_before=$((total_before + size_before))
            total_after=$((total_after + size_after))
            count=$((count + 1))
            
            # Print result
            filename=$(basename "$img")
            echo -e "  ${GREEN}✓${NC} $filename: ${size_before_mb}MB → ${size_after_mb}MB (${savings}% smaller)"
        fi
    fi
done

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✓ Optimization Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "📊 Results:"
echo "  - Images optimized: $count"
echo "  - Total before: $(echo "scale=2; $total_before / 1048576" | bc)MB"
echo "  - Total after: $(echo "scale=2; $total_after / 1048576" | bc)MB"
echo "  - Total saved: $(echo "scale=1; 100 - ($total_after * 100 / $total_before)" | bc)%"
echo ""
echo "🎉 Your website will now load much faster!"
echo ""
echo "Next steps:"
echo "  1. Restart your dev server: npm run dev"
echo "  2. Test your site: http://localhost:3000"
echo "  3. Check loading speed - it should be fast now!"
echo ""
echo "📦 Original images backed up in: ./originals/"

