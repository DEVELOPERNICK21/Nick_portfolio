#!/bin/bash

# Copy extra photos into the public folder
# Usage (from repo root): bash scripts/copy-extra-photos.sh

set -euo pipefail
cd "$(dirname "$0")/.."

SOURCE_DIR="src/assets/ExtraPhotos"
DEST_DIR="public"

echo "Copying extra photos to public folder..."

files=(
  "nikhil-kubde-extra-01.jpg"
  "nikhil-kubde-extra-02.jpg"
  "nikhil-kubde-extra-03.jpg"
  "nikhil-kubde-extra-04.jpg"
  "nikhil-kubde-extra-05.jpg"
  "nikhil-kubde-extra-06.jpg"
  "nikhil-kubde-extra-07.jpg"
  "nikhil-kubde-extra-08.jpg"
  "nikhil-kubde-extra-09.jpg"
  "nikhil-kubde-extra-10.jpg"
  "nikhil-kubde-extra-11.jpg"
  "nikhil-kubde-extra-12.jpg"
  "nikhil-kubde-extra-13.jpg"
  "nikhil-kubde-extra-14.jpg"
  "nikhil-kubde-extra-15.jpg"
)

count=0
for file in "${files[@]}"; do
  if [ -f "$SOURCE_DIR/$file" ]; then
    cp "$SOURCE_DIR/$file" "$DEST_DIR/" && echo "✓ Copied $file" && count=$((count + 1))
  else
    echo "✗ Not found: $file"
  fi
done

echo ""
echo "Successfully copied $count out of ${#files[@]} files to $DEST_DIR/"
