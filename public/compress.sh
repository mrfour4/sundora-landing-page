#!/bin/bash

mkdir -p images_avif

for file in ./images/*; do
  if [[ "$file" == *.png || "$file" == *.jpg || "$file" == *.jpeg ]]; then
    filename=$(basename "$file")
    name="${filename%.*}"
    avifenc "$file" "images_avif/${name}.avif"
  fi
done
