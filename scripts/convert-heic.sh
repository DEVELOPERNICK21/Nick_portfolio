#!/bin/bash

# Convert HEIC files to JPG in src/assets/ExtraPhotos/
# Usage (from repo root): bash scripts/convert-heic.sh

set -euo pipefail
cd "$(dirname "$0")/.."

PHOTOS_DIR="src/assets/ExtraPhotos"

echo "🖼️  Converting HEIC files to JPG..."
echo ""

if [ ! -d "$PHOTOS_DIR" ]; then
  echo "❌ Directory not found: $PHOTOS_DIR"
  exit 1
fi

cd "$PHOTOS_DIR"

converted=0
failed=0

shopt -s nullglob
for file in *.heic *.HEIC; do
  filename="${file%.*}"
  output="${filename}.jpg"

  echo "Converting: $file"

  if sips -s format jpeg "$file" --out "$output" > /dev/null 2>&1 && [ -f "$output" ]; then
    echo "  ✅ Created: $output"
    converted=$((converted + 1))
  else
    echo "  ❌ Failed: $file"
    failed=$((failed + 1))
  fi
  echo ""
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Conversion complete!"
echo "  ✅ Converted: $converted files"
if [ "$failed" -gt 0 ]; then
  echo "  ❌ Failed: $failed files"
fi
echo ""
echo "📁 Converted JPG files are in: $PHOTOS_DIR"
