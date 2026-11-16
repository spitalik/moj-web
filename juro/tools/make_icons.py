"""Vygeneruje PNG ikony aplikácie z loga icons/logo.svg.

Spustenie (z koreňa projektu juro):  python tools/make_icons.py
Potrebuje: Google Chrome alebo Microsoft Edge (headless vykreslenie SVG) a Pillow (zmenšenie).

Vytvorí v icons/:
  icon-512.png           logo (zaoblená dlaždica), priehľadné rohy (purpose "any")
  icon-192.png           to isté zmenšené
  icon-maskable-512.png  plné tmavomodré pozadie, logo v bezpečnej zóne (purpose "maskable" – Android si tvar oreže sám)
  apple-touch-icon.png   180 px z maskable verzie (iOS priehľadné rohy vyplní čiernou)
"""
import os
import shutil
import subprocess
import tempfile

from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
ICONS = os.path.join(ROOT, 'icons')
BROWSERS = [
    r'C:\Program Files\Google\Chrome\Application\chrome.exe',
    r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
    'google-chrome', 'chromium', 'microsoft-edge',
]

# logo už má vlastnú zaoblenú dlaždicu, ikona "any" je teda logo na celú plochu s priehľadnými rohmi;
# maskable verzia má plné tmavomodré pozadie a logo v bezpečnej zóne (Android si tvar oreže sám)
ANY = ('<!doctype html><style>html,body{margin:0;width:100vw;height:100vh;background:transparent}'
       'img{display:block;width:100vw;height:100vh}</style><img src="logo.svg">')
MASKABLE = ('<!doctype html><style>html,body{margin:0;width:100vw;height:100vh;'
            'background:#1d4590;display:flex;align-items:center;justify-content:center}'
            'img{width:76vw;height:76vw}</style><img src="logo.svg">')


def browser():
    for b in BROWSERS:
        if os.path.isfile(b) or shutil.which(b):
            return b
    raise SystemExit('Nenašiel sa Chrome ani Edge.')


def shot(exe, tmp, html, out):
    page = os.path.join(tmp, 'page.html')
    with open(page, 'w', encoding='utf-8') as f:
        f.write(html)
    # vždy 512 px: headless prehliadač má minimálnu šírku okna, menšie veľkosti sa robia zmenšením
    subprocess.run([exe, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--default-background-color=00000000',
                    '--window-size=512,512', f'--user-data-dir={os.path.join(tmp, "profile")}',
                    f'--screenshot={out}', 'file:///' + page.replace('\\', '/')], check=True, timeout=60)


def main():
    exe = browser()
    with tempfile.TemporaryDirectory() as tmp:
        shutil.copy(os.path.join(ICONS, 'logo.svg'), tmp)
        any_png, mask_png = os.path.join(tmp, 'any.png'), os.path.join(tmp, 'mask.png')
        shot(exe, tmp, ANY, any_png)
        shot(exe, tmp, MASKABLE, mask_png)
        im = Image.open(any_png).convert('RGBA')
        im.save(os.path.join(ICONS, 'icon-512.png'), optimize=True)
        im.resize((192, 192), Image.LANCZOS).save(os.path.join(ICONS, 'icon-192.png'), optimize=True)
        mask = Image.open(mask_png).convert('RGB')
        mask.save(os.path.join(ICONS, 'icon-maskable-512.png'), optimize=True)
        mask.resize((180, 180), Image.LANCZOS).save(os.path.join(ICONS, 'apple-touch-icon.png'), optimize=True)
    print('Ikony vygenerované do', os.path.abspath(ICONS))


if __name__ == '__main__':
    main()
