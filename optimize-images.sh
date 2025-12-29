#!/bin/bash

# Image Optimization Script
# Optimizes all JPG images in the public folder for web use

echo "🖼️  Starting image optimization..."
echo ""

PUBLIC_DIR="public"
TEMP_DIR="temp_optimized"

# Create temp directory
mkdir -p "$TEMP_DIR"

# Function to optimize image using sips (macOS built-in)
optimize_with_sips() {
    local input_file=$1
    local output_file=$2
    local filename=$(basename "$input_file")
    
    echo "Optimizing: $filename"
    
    # Get original size
    original_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file" 2>/dev/null)
    
    # Use sips to optimize (macOS)
    if command -v sips &> /dev/null; then
        # Copy to temp
        cp "$input_file" "$output_file"
        
        # Resize if larger than 1920px width (maintains aspect ratio)
        # This prevents oversized images from being served
        sips -Z 1920 "$output_file" > /dev/null 2>&1
        
        # Set quality to 75% (optimal balance: great quality, much smaller files)
        # For web use, 75% is perfect - almost no visible difference from 100%
        sips -s format jpeg -s formatOptions 75 "$output_file" > /dev/null 2>&1
        
        # Additional optimization: strip metadata to reduce file size
        sips --deleteColorManagementProperties "$output_file" > /dev/null 2>&1
        
        # Get new size
        new_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null)
        
        # Calculate reduction
        if [ "$original_size" -gt 0 ]; then
            reduction=$((100 - (new_size * 100 / original_size)))
            echo "  ✓ Reduced by ~${reduction}% (${original_size} → ${new_size} bytes)"
        fi
    else
        echo "  ⚠ sips not available, skipping optimization"
        cp "$input_file" "$output_file"
    fi
}

# Count images
total_images=$(find "$PUBLIC_DIR" -maxdepth 1 -name "*.jpg" -o -name "*.JPG" | wc -l | tr -d ' ')
echo "Found $total_images images to optimize"
echo ""

# Optimize each image
count=0
for img in "$PUBLIC_DIR"/*.jpg "$PUBLIC_DIR"/*.JPG; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        optimize_with_sips "$img" "$TEMP_DIR/$filename"
        count=$((count + 1))
        echo ""
    fi
done

# Backup originals and replace with optimized
if [ "$count" -gt 0 ]; then
    echo "📦 Creating backup of originals..."
    mkdir -p "${PUBLIC_DIR}_backup_$(date +%Y%m%d_%H%M%S)"
    backup_dir="${PUBLIC_DIR}_backup_$(date +%Y%m%d_%H%M%S)"
    
    echo "📝 Replacing with optimized versions..."
    for img in "$TEMP_DIR"/*.jpg "$TEMP_DIR"/*.JPG; do
        if [ -f "$img" ]; then
            filename=$(basename "$img")
            # Backup original
            cp "$PUBLIC_DIR/$filename" "$backup_dir/$filename" 2>/dev/null || true
            # Replace with optimized
            cp "$img" "$PUBLIC_DIR/$filename"
        fi
    done
    
    echo ""
    echo "✅ Optimization complete!"
    echo "📁 Originals backed up to: $backup_dir"
    echo "🚀 Images are now optimized for faster loading!"
else
    echo "❌ No images found to optimize"
fi

# Cleanup
rm -rf "$TEMP_DIR"
