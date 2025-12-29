#!/bin/bash

# Convert HEIC files to JPG
# This script converts all HEIC files in src/assets/ExtraPhotos/ to JPG format

echo "🖼️  Converting HEIC files to JPG..."
echo ""

cd src/assets/ExtraPhotos

converted=0
failed=0

for file in *.heic *.HEIC; do
  if [ -f "$file" ]; then
    filename="${file%.*}"
    output="${filename}.jpg"
    
    echo "Converting: $file"
    
    # Use sips to convert
    sips -s format jpeg "$file" --out "$output" > /dev/null 2>&1
    
    if [ $? -eq 0 ] && [ -f "$output" ]; then
      echo "  ✅ Created: $output"
      converted=$((converted + 1))
    else
      echo "  ❌ Failed: $file"
      failed=$((failed + 1))
    fi
    echo ""
  fi
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Conversion complete!"
echo "  ✅ Converted: $converted files"
if [ $failed -gt 0 ]; then
  echo "  ❌ Failed: $failed files"
fi
echo ""
echo "📁 Converted JPG files are in: src/assets/ExtraPhotos/"
echo ""
echo "Next steps:"
echo "1. Review the converted JPG files"
echo "2. Move the ones you want to use to the public/ folder"
echo "3. Rename them appropriately (e.g., nikhil-kubde-extra-16.jpg)"
echo "4. Update your components to use the new images"

