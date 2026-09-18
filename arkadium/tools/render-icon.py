#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Vyrenderuje ikony aplikácie (icons/icon-192.png, icon-512.png).

Ikona je napísaná ako HTML — monogram **A** v písme Syne na značkovom gradiente,
teda z tých istých farieb a písma ako wordmark v aplikácii. Renderuje sa cez
headless Chrome, takže vyzerá presne tak, ako ju kreslí prehliadač.

Kreslí sa ako *maskable*: pozadie ide do krajov a monogram sa zmestí do
bezpečného kruhu (80 % strany), takže ho Android ani iOS pri orezaní na kruh
či na zaoblený štvorec neodreže.

Použitie
--------
    python tools/render-icon.py                 # prepíše obe ikony
    python tools/render-icon.py --letter K      # iný monogram
"""
import argparse, os, shutil, subprocess, sys, tempfile, threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SIZES = (192, 512)

BROWSERS = [
    r'C:\Program Files\Google\Chrome\Application\chrome.exe',
    r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
    os.path.expandvars(r'%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe'),
    r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
    r'C:\Program Files\Microsoft\Edge\Application\msedge.exe',
    '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
]

PAGE = """<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  /* Syne si berie z priecinka fonts/ — ani tento nastroj nechodi na internet */
  @font-face{font-family:'Syne';font-style:normal;font-weight:400 800;
    src:url(syne.woff2) format('woff2');}
  html,body{margin:0;padding:0;overflow:hidden;background:#0a0a14;}
  .ic{
    width:%(s)dpx;height:%(s)dpx;position:relative;display:flex;
    align-items:center;justify-content:center;
    background:radial-gradient(ellipse 130%% 105%% at 28%% -5%%, #35279c 0%%, #1b1440 42%%, #0b0a16 100%%);
  }
  /* rovnaká diagonálna textúra ako na kartičkách hier */
  .ic::after{
    content:'';position:absolute;inset:0;
    background:repeating-linear-gradient(-45deg,transparent,transparent %(t).2fpx,
      rgba(255,255,255,.035) %(t).2fpx,rgba(255,255,255,.035) %(t2).2fpx);
  }
  .a{
    position:relative;z-index:2;
    font-family:'Syne',system-ui,sans-serif;font-weight:800;
    font-size:%(f).1fpx;line-height:1;letter-spacing:-.05em;
    background:linear-gradient(140deg,#ffffff 18%%,#a08cff 100%%);
    -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
    transform:translateY(-%(o).1fpx);
  }
</style></head>
<body><div class="ic"><div class="a">%(letter)s</div></div></body></html>
"""


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


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--letter', default='A')
    ap.add_argument('--browser', default='')
    args = ap.parse_args()

    browser = find_browser(args.browser)
    tmp = Path(tempfile.mkdtemp(prefix='arkadium-icon-'))
    shutil.copyfile(ROOT / 'fonts' / 'syne-var-latin.woff2', tmp / 'syne.woff2')

    class Handler(SimpleHTTPRequestHandler):
        def __init__(self, *a, **kw):
            super().__init__(*a, directory=str(tmp), **kw)

        def log_message(self, *a):
            pass

    srv = ThreadingHTTPServer(('127.0.0.1', 0), Handler)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    port = srv.server_address[1]

    for s in SIZES:
        html = PAGE % {'s': s, 't': s * 0.016, 't2': s * 0.032,
                       'f': s * 0.60, 'o': s * 0.005, 'letter': args.letter}
        (tmp / ('icon-%d.html' % s)).write_text(html, encoding='utf-8')
        out = ROOT / 'icons' / ('icon-%d.png' % s)
        for attempt in range(4):
            subprocess.run([browser, '--headless=new', '--disable-gpu', '--hide-scrollbars',
                            '--force-device-scale-factor=1', '--no-first-run',
                            '--no-default-browser-check',
                            '--user-data-dir=%s' % (tmp / ('p%d' % attempt)),
                            '--window-size=%d,%d' % (s, s),
                            '--virtual-time-budget=2500',
                            '--screenshot=%s' % out,
                            'http://127.0.0.1:%d/icon-%d.html' % (port, s)],
                           stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            if out.exists() and out.stat().st_size > 500:
                break
        else:
            sys.exit('Ikonu %dx%d sa nepodarilo vyrenderovať.' % (s, s))
        print('hotovo: %s (%d B)' % (out, out.stat().st_size))

    srv.shutdown()
    shutil.rmtree(tmp, ignore_errors=True)


if __name__ == '__main__':
    main()
