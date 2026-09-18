#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Vyrenderuje promo.html do skutočného videa (promo.mp4).

Ako to funguje
--------------
`promo.html` má pevnú 24-sekundovú časovú os a rozumie parametru `?t=<sekundy>`:
pri ňom sa všetky animácie posunú presne na daný čas a zastavia. Každý snímok
sa teda dá vyrenderovať samostatne a deterministicky.

Skript spustí pre každý snímok headless Chrome (viac naraz, aby to netrvalo
večnosť), poskladá PNG snímky a zakóduje ich cez ffmpeg do H.264.

Požiadavky
----------
* Chrome alebo Edge (hľadá sa na obvyklých miestach, dá sa určiť cez --browser)
* ffmpeg — buď v PATH, alebo `pip install imageio-ffmpeg`

Použitie
--------
    python tools/render-promo.py                    # 1920x1080, 25 sn./s
    python tools/render-promo.py --vertical         # 1080x1920 pre reels
    python tools/render-promo.py --lang en          # anglická verzia
    python tools/render-promo.py --fps 30 --out promo-30.mp4
"""
import argparse, os, shutil, subprocess, sys, tempfile, threading
from concurrent.futures import ThreadPoolExecutor
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent          # priečinok aplikácie
DURATION = 24.0                                        # dĺžka časovej osi v promo.html

BROWSERS = [
    r'C:\Program Files\Google\Chrome\Application\chrome.exe',
    r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
    os.path.expandvars(r'%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe'),
    r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
    r'C:\Program Files\Microsoft\Edge\Application\msedge.exe',
    '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
]


def find_browser(explicit=None):
    if explicit:
        return explicit
    for b in BROWSERS:
        if b and os.path.exists(b):
            return b
    found = shutil.which('chrome') or shutil.which('chromium') or shutil.which('msedge')
    if found:
        return found
    sys.exit('Nenašiel som Chrome ani Edge — použi --browser <cesta>.')


def find_ffmpeg(explicit=None):
    if explicit:
        return explicit
    found = shutil.which('ffmpeg')
    if found:
        return found
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except Exception:
        sys.exit('Nenašiel som ffmpeg — nainštaluj ho, alebo: pip install imageio-ffmpeg')


def serve(directory):
    """Lokálny server: promo.html musí bežať cez http, nie cez file://."""
    class Handler(SimpleHTTPRequestHandler):
        def __init__(self, *a, **kw):
            super().__init__(*a, directory=str(directory), **kw)

        def log_message(self, *a):
            pass

    srv = ThreadingHTTPServer(('127.0.0.1', 0), Handler)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv, srv.server_address[1]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--fps', type=int, default=25)
    ap.add_argument('--width', type=int, default=0)
    ap.add_argument('--height', type=int, default=0)
    ap.add_argument('--vertical', action='store_true', help='formát 9:16 pre reels')
    ap.add_argument('--lang', default='sk', choices=['sk', 'en'])
    ap.add_argument('--out', default='')
    ap.add_argument('--jobs', type=int, default=8, help='koľko snímkov naraz')
    ap.add_argument('--browser', default='')
    ap.add_argument('--ffmpeg', default='')
    ap.add_argument('--keep-frames', action='store_true')
    args = ap.parse_args()

    w = args.width or (1080 if args.vertical else 1920)
    h = args.height or (1920 if args.vertical else 1080)
    out = Path(args.out or ('promo-vertical.mp4' if args.vertical else 'promo.mp4'))
    if not out.is_absolute():
        out = ROOT / out

    browser = find_browser(args.browser)
    ffmpeg = find_ffmpeg(args.ffmpeg)
    frames = int(round(DURATION * args.fps))
    tmp = Path(tempfile.mkdtemp(prefix='arkadium-promo-'))
    srv, port = serve(ROOT)

    print('prehliadač :', browser)
    print('ffmpeg     :', ffmpeg)
    print('rozmer     : %dx%d, %d sn./s, %d snímkov' % (w, h, args.fps, frames))
    print('snímky     :', tmp)

    def render(i):
        # Chrome sa raz za cas nepodari spustit (zdielany profil, docasny subor),
        # tak to skusim viackrat - inak by vo videu chybal snimok
        t = i / args.fps
        url = ('http://127.0.0.1:%d/promo.html?t=%.4f&lang=%s%s'
               % (port, t, args.lang, '&v=1' if args.vertical else ''))
        png = tmp / ('f%05d.png' % i)
        for attempt in range(4):
            profile = tmp / ('p%d_%d' % (i % args.jobs, attempt))
            cmd = [browser, '--headless=new', '--disable-gpu', '--hide-scrollbars',
                   '--force-device-scale-factor=1', '--no-first-run', '--no-default-browser-check',
                   '--user-data-dir=%s' % profile,
                   '--window-size=%d,%d' % (w, h),
                   '--virtual-time-budget=2500',
                   '--screenshot=%s' % png, url]
            subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            if png.exists() and png.stat().st_size > 1000:
                return True
        return False

    done = 0
    with ThreadPoolExecutor(max_workers=args.jobs) as pool:
        for ok in pool.map(render, range(frames)):
            done += 1
            if done % 25 == 0 or done == frames:
                print('  %d/%d' % (done, frames), flush=True)

    missing = [i for i in range(frames) if not (tmp / ('f%05d.png' % i)).exists()]
    if missing:
        sys.exit('Chýbajú snímky: %s' % missing[:10])

    srv.shutdown()
    subprocess.run([ffmpeg, '-y', '-loglevel', 'error',
                    '-framerate', str(args.fps), '-i', str(tmp / 'f%05d.png'),
                    '-c:v', 'libx264', '-preset', 'slow', '-crf', '20',
                    '-pix_fmt', 'yuv420p', '-movflags', '+faststart', str(out)], check=True)

    if not args.keep_frames:
        shutil.rmtree(tmp, ignore_errors=True)
    print('hotovo:', out, '(%.1f MB)' % (out.stat().st_size / 1048576))


if __name__ == '__main__':
    main()
