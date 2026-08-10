from __future__ import annotations

import re
from pathlib import Path

from PIL import Image, JpegImagePlugin  # noqa: F401 - registers Pillow PDF/JPEG support
from pypdf import PdfReader


OUT_DIR = Path(__file__).resolve().parent
RENDER_DIR = OUT_DIR / "render-check"
PDF_PATH = OUT_DIR / "interview-deck.pdf"


def slide_number(path: Path) -> int:
    match = re.search(r"\d+", path.stem)
    if not match:
        raise ValueError(f"Slide PNG has no number: {path.name}")
    return int(match.group())


def main():
    files = sorted(
        [path for path in RENDER_DIR.glob("*.PNG") if path.stem.startswith("슬라이드")],
        key=slide_number,
    )
    if len(files) != 7:
        raise RuntimeError(f"Expected 7 slide PNGs, found {len(files)}")

    images = [Image.open(path).convert("RGB") for path in files]
    images[0].save(PDF_PATH, save_all=True, append_images=images[1:], resolution=144.0)

    page_count = len(PdfReader(str(PDF_PATH)).pages)
    if page_count != 7:
        raise RuntimeError(f"Expected 7 PDF pages, found {page_count}")

    print(f"pdf={PDF_PATH}")
    print(f"pages={page_count}")
    print(f"bytes={PDF_PATH.stat().st_size}")


if __name__ == "__main__":
    main()
