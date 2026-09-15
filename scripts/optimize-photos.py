#!/usr/bin/env python3
"""Generate the responsive photo derivatives the museum actually serves.

Source images in assets/photos/ are full-resolution (up to 2480px). Sending
those to a 390px phone is what made the old build slow. This writes WebP and
JPEG variants at the widths the layout really uses, into assets/photos/opt/.

Re-run after adding or replacing a photograph, then commit both the source and
the generated files:

    pip install pillow
    python3 scripts/optimize-photos.py
"""

import os
import pathlib
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow is required:  pip install pillow")

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "photos"
OUT = SRC / "opt"

# base name -> widths to emit, chosen from the CSS that displays each image
PLAN = {
    "photo-1": [640, 1000, 1400],
    "photo-2": [640, 1000, 1400],
    "photo-3": [640, 1000, 1400],
    "photo-4": [640, 1000, 1400],
    "photo-5": [640, 1000, 1400],
    "photo-6": [640, 1000, 1400],
    "baguio-1": [480, 900],
    "baguio-2": [480, 900],
    "baguio-3": [480, 900],
    "life4cuts": [480, 900],
    "hoppers-sticker-1": [400],
    "hoppers-sticker-2": [400],
}

# small crops used as CSS background art on the main gallery wall
THUMBS = {"photo-1": 320, "life4cuts": 320}

WEBP_QUALITY = 78
JPEG_QUALITY = 80


def variants(image, base, width, suffix=""):
    height = round(image.height * width / image.width)
    resized = image.resize((width, height), Image.LANCZOS)
    resized.save(OUT / f"{base}{suffix}-{width}.webp", "WEBP", quality=WEBP_QUALITY, method=6)
    resized.save(OUT / f"{base}{suffix}-{width}.jpg", "JPEG", quality=JPEG_QUALITY,
                 optimize=True, progressive=True)
    return width, height


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    sources = {p.stem: p for p in SRC.iterdir() if p.is_file()}
    written = 0

    for base, widths in PLAN.items():
        if base not in sources:
            print(f"  skip {base}: no source image")
            continue
        image = Image.open(sources[base]).convert("RGB")
        # never upscale: an image narrower than a target gets its own width instead
        targets = [w for w in widths if w <= image.width] or []
        if image.width < max(widths):
            targets.append(image.width)
        for width in sorted(set(targets)):
            w, h = variants(image, base, width)
            print(f"  {base}-{w}  {w}x{h}")
            written += 2

    for base, width in THUMBS.items():
        if base not in sources:
            continue
        image = Image.open(sources[base]).convert("RGB")
        w, h = variants(image, base, width, suffix="-thumb")
        print(f"  {base}-thumb-{w}  {w}x{h}")
        written += 2

    total = sum(f.stat().st_size for f in OUT.glob("*.webp"))
    print(f"\n{written} files written to {OUT.relative_to(ROOT)}  "
          f"({total / 1024 / 1024:.2f} MB of WebP)")


if __name__ == "__main__":
    main()
