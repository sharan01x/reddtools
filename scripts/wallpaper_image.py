#!/usr/bin/env python3
"""Produce one 3840x2400 ReddTools wallpaper with the cheapest pipeline that is
good enough for the theme.

Theme routing (evidence: see references in the skill / commit message):

  nature, animals   -> CLOUD 4K  (Seedream 4.0, native 3840x2400, ~$0.03/image)
                       Local 2048 + AI upscale measurably smears water, fur and
                       mist, so photographic themes pay for native resolution.

  quotes            -> FREE HTML RENDER at 3840x2400 with Inter + IBM Plex Mono.
                       Local diffusion garbles text ("The best wayo pefete ..."),
                       and HTML gives pixel-perfect, correctly spelled type.

  abstract, fractals -> FREE LOCAL (Bonsai 2048 -> local 2x upscale).
                       Structure/geometry survives upscaling essentially intact.

Every cloud step degrades gracefully: if Replicate credits run out, the script
falls back to the local model + local upscale rather than failing the run.

Output contract: exactly 3840x2400 JPEG, quality 85, and a single final line

    WALLPAPER_IMAGE: <abs path> 3840x2400 <size> source=<...> cost=<cloud|free>

Exit code 0 only when that line is produced.
"""

from __future__ import annotations

import argparse
import base64
import json
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

IMAGE37 = Path.home() / "Documents" / "Code" / "Image37"
CHROME = Path("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")

SCRIPTS_DIR = Path(__file__).resolve().parent
FONT_DIR = SCRIPTS_DIR / "assets" / "fonts"

TARGET_W, TARGET_H = 3840, 2400
TARGET_RATIO = TARGET_W / TARGET_H  # 1.6

# 4x-class models only differ in their handling of content; all can be run at a
# 2x output scale, which is the honest 1.875x we actually need.
UPSCALE_MODEL = {
    "nature": "ultrasharp-4x",
    "animals": "ultrasharp-4x",
    "quotes": "digital-art-4x",
    "abstract": "digital-art-4x",
    "fractals": "digital-art-4x",
}

LOCAL_THEMES = {"abstract", "fractals"}
CLOUD_4K_THEMES = {"nature", "animals"}


class PipelineError(RuntimeError):
    pass


def log(msg: str) -> None:
    print(msg, flush=True)


def run(cmd: list[str], timeout: int = 900, cwd: Path | None = None) -> subprocess.CompletedProcess:
    return subprocess.run(cmd, capture_output=True, text=True, timeout=timeout, cwd=cwd)


def image37(prompt: str, provider: str, out: Path, width: int, height: int,
            upscale_model: str | None = None) -> tuple[bool, str, str]:
    """Call the image37 CLI at an exact target size.

    Image37 generates at the provider's native size and runs the local upscaler
    itself when that native size cannot reach the requested box — so this script
    never upscales by hand.

    Returns (ok, output_path_or_error, cli_stdout).
    """
    out.parent.mkdir(parents=True, exist_ok=True)
    cmd = [
        "uv", "run", "cli.py", "prompt", prompt,
        "--aspect-ratio", "custom",
        "--width", str(width), "--height", str(height),
        "--no-enhance",
        "--provider", provider,
        "--output", str(out),
    ]
    if upscale_model:
        cmd += ["--upscale-model", upscale_model]

    proc = run(cmd, timeout=1800, cwd=IMAGE37)
    blob = (proc.stdout or "") + (proc.stderr or "")
    if proc.returncode == 0 and out.exists() and out.stat().st_size > 20_000:
        return True, str(out), blob
    return False, blob.strip()[-600:] or f"exit {proc.returncode}", blob


def finish(src: Path, out: Path, quality: int = 85) -> None:
    """Normalise to exactly TARGET_W x TARGET_H and encode JPEG."""
    out.parent.mkdir(parents=True, exist_ok=True)
    proc = run([
        "magick", str(src),
        "-resize", f"{TARGET_W}x{TARGET_H}^",
        "-gravity", "center", "-extent", f"{TARGET_W}x{TARGET_H}",
        "-strip", "-interlace", "Plane", "-sampling-factor", "4:2:0",
        "-quality", str(quality), str(out),
    ], timeout=600)
    if not out.exists():
        raise PipelineError(f"encode failed: {(proc.stderr or proc.stdout)[-300:]}")


def verify(out: Path) -> tuple[int, int, int]:
    proc = run(["sips", "-g", "pixelWidth", "-g", "pixelHeight", str(out)])
    dims = {}
    for line in (proc.stdout or "").splitlines():
        if "pixelWidth:" in line:
            dims["w"] = int(line.split(":")[1])
        if "pixelHeight:" in line:
            dims["h"] = int(line.split(":")[1])
    w, h = dims.get("w", 0), dims.get("h", 0)
    if (w, h) != (TARGET_W, TARGET_H):
        raise PipelineError(f"dimension check failed: got {w}x{h}, want {TARGET_W}x{TARGET_H}")
    return w, h, out.stat().st_size


# ── quote renderer ────────────────────────────────────────────────────────────

QUOTE_HTML = """<!doctype html>
<html><head><meta charset="utf-8"><style>
@font-face {{
  font-family: 'Inter'; font-weight: 600; font-style: normal;
  src: url(data:font/woff2;base64,{inter}) format('woff2');
}}
@font-face {{
  font-family: 'IBM Plex Mono'; font-weight: 400; font-style: normal;
  src: url(data:font/woff2;base64,{plex}) format('woff2');
}}
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
html, body {{ width: {w}px; height: {h}px; overflow: hidden; }}
body {{
  background: #14161a;
  background-image: radial-gradient(ellipse 62% 52% at 50% 46%, #2b313b 0%, #1a1e25 46%, #14161a 78%);
  display: flex; align-items: center; justify-content: center;
  font-kerning: normal; -webkit-font-smoothing: antialiased;
}}
.frame {{ width: {frame}px; text-align: center; }}
.quote {{
  font-family: 'Inter', sans-serif; font-weight: 600;
  font-size: {size}px; line-height: 1.32; letter-spacing: -0.018em;
  color: #f2f0eb; text-wrap: balance;
}}
.author {{
  font-family: 'IBM Plex Mono', monospace; font-weight: 400;
  font-size: 50px; letter-spacing: 0.1em; text-transform: uppercase;
  color: #98a1ae; margin-top: 96px;
}}
</style></head><body>
  <div class="frame">
    <div class="quote">{quote}</div>
    <div class="author">{author}</div>
  </div>
</body></html>
"""


def render_quote(quote: str, author: str, out: Path, work: Path) -> None:
    """Render typographic wallpaper with headless Chrome. Free and exact."""
    if not CHROME.exists():
        raise PipelineError("Google Chrome not found")
    inter = base64.b64encode((FONT_DIR / "inter-600-latin.woff2").read_bytes()).decode()
    plex = base64.b64encode((FONT_DIR / "ibmplexmono-400-latin.woff2").read_bytes()).decode()

    # Type size scales down with quote length so long quotes keep generous margins.
    n = len(quote)
    size = 176 if n <= 60 else 158 if n <= 95 else 140 if n <= 140 else 122

    html = QUOTE_HTML.format(
        inter=inter, plex=plex, w=TARGET_W, h=TARGET_H,
        frame=int(TARGET_W * 0.76), size=size,
        quote=quote.replace("&", "&amp;").replace("<", "&lt;"),
        author=author.replace("&", "&amp;").replace("<", "&lt;"),
    )
    html_path = work / "quote.html"
    html_path.write_text(html, encoding="utf-8")
    shot = work / "quote.png"
    proc = run([
        str(CHROME), "--headless=new", "--disable-gpu", "--hide-scrollbars",
        "--force-device-scale-factor=1", "--default-background-color=00000000",
        f"--window-size={TARGET_W},{TARGET_H}",
        f"--screenshot={shot}", f"file://{html_path}",
    ], timeout=180)
    if not shot.exists() or shot.stat().st_size < 10_000:
        raise PipelineError(f"chrome screenshot failed: {(proc.stderr or proc.stdout)[-300:]}")
    finish(shot, out)


# ── paths ─────────────────────────────────────────────────────────────────────

def produce(theme: str, prompt: str, out: Path, quote: str | None, author: str | None) -> tuple[str, str]:
    """Returns (source, cost)."""
    work = Path(tempfile.mkdtemp(prefix="wallpaper-"))
    model = UPSCALE_MODEL.get(theme, "ultrasharp-4x")
    try:
        if theme == "quotes" and quote and author:
            log(f"[quotes] free HTML render at {TARGET_W}x{TARGET_H}")
            render_quote(quote, author, out, work)
            return "html", "free"

        if theme in CLOUD_4K_THEMES:
            log(f"[{theme}] cloud 4K: seedream-4 @ {TARGET_W}x{TARGET_H}")
            ok, detail, _ = image37(prompt, "replicate_seedream", work / "cloud.jpg",
                                    TARGET_W, TARGET_H, model)
            if ok:
                finish(Path(detail), out)
                return "seedream", "cloud"
            log(f"[{theme}] seedream failed -> local fallback: {detail[-240:]}")

        if theme in LOCAL_THEMES or theme in CLOUD_4K_THEMES:
            log(f"[{theme}] local: bonsai @ {TARGET_W}x{TARGET_H} (Image37 upscales)")
            ok, detail, blob = image37(prompt, "local_bonsai", work / "local.jpg",
                                       TARGET_W, TARGET_H, model)
            if not ok:
                log(f"[{theme}] bonsai failed, trying ERNIE: {detail[-240:]}")
                ok, detail, blob = image37(prompt, "replicate_ernie", work / "ernie.jpg",
                                           TARGET_W, TARGET_H, model)
                if not ok:
                    raise PipelineError(f"local and ERNIE both failed: {detail[-300:]}")
                finish(Path(detail), out)
                return "ernie+upscale", "cloud"
            finish(Path(detail), out)
            return ("bonsai+upscale" if "Upscaler" in blob else "bonsai"), "free"

        raise PipelineError(f"unknown theme '{theme}'")
    finally:
        shutil.rmtree(work, ignore_errors=True)


def main() -> int:
    ap = argparse.ArgumentParser(description="Produce one 3840x2400 ReddTools wallpaper.")
    ap.add_argument("--theme", required=True,
                    choices=["nature", "animals", "quotes", "abstract", "fractals"])
    ap.add_argument("--prompt", default="", help="art-direction prompt (cloud/local themes)")
    ap.add_argument("--quote", default=None, help="quote text (quotes theme)")
    ap.add_argument("--author", default=None, help="attribution (quotes theme)")
    ap.add_argument("--out", required=True, help="output JPEG path")
    args = ap.parse_args()

    if args.theme == "quotes" and not (args.quote and args.author):
        log("ERROR: quotes theme needs --quote and --author (HTML render path)")
        return 2
    if args.theme != "quotes" and not args.prompt:
        log("ERROR: --prompt is required for non-quote themes")
        return 2

    out = Path(args.out).expanduser().resolve()
    try:
        source, cost = produce(args.theme, args.prompt, out, args.quote, args.author)
        w, h, size = verify(out)
    except PipelineError as exc:
        log(f"WALLPAPER_IMAGE: FAILED {exc}")
        return 1

    log(f"WALLPAPER_IMAGE: {out} {w}x{h} {size/1024/1024:.2f}MB source={source} cost={cost}")
    if size > 4_000_000:
        log(f"WARN: {size/1024/1024:.2f}MB exceeds the 4MB shipping budget")
    return 0


if __name__ == "__main__":
    sys.exit(main())
