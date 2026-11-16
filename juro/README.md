# Juro – nástroje pre právnikov

Statická PWA (HTML, CSS a JS bez buildu, rovnaká technológia ako `math/`), len po slovensky.
Používateľ si vyberie zaradenie právnika a zobrazia sa mu aplikácie pre toto zaradenie.

- **Vyšší súdny úradník → Kalkulačka VSÚ**: lehoty so sviatkami SR (§ 121 CSP, § 122 OZ),
  úroky a poplatok z omeškania podľa sadzieb ECB, súdny poplatok podľa položky 1 Sadzobníka a jeho vrátenie (§ 11).

## Spustenie

Z koreňa repozitára spustite `python -m http.server 8000` a otvorte `http://localhost:8000/juro/`.

## Testy výpočtov

```
node tools/test.js
```

## Štruktúra

| Súbor | Obsah |
|---|---|
| `js/pravo.js` | právne údaje: sadzby ECB, úroky, súdne poplatky, sviatky, predvoľby lehôt |
| `js/vypocty.js` | výpočty bez práce s DOM (dajú sa spustiť aj v Node) |
| `js/zaradenia.js` | zaradenia a ich aplikácie |
| `js/app.js` | smerovanie, úvodná stránka, vzhľad, inštalácia |
| `js/aplikacie/kalkulacka-vsu.js` | formuláre a výsledky Kalkulačky VSÚ |

## Aktualizácia právnych údajov

1. Upravte `js/pravo.js`: novú sadzbu ECB pridajte na koniec poľa `ECB`, pri zmene zákona upravte sadzby alebo `dniPokoja`.
2. Nastavte `OVERENE` na dátum overenia.
3. Spustite `node tools/test.js`.
4. V `sw.js` zvýšte verziu `CACHE`, inak používatelia uvidia staré údaje.

## Pridanie aplikácie

Pridajte položku do `js/zaradenia.js` (`stav: 'hotova'`) a súbor do `js/aplikacie/`, ktorý sa zaregistruje
cez `APP.registruj('<zaradenie>', '<id>', render)`. Súbor pridajte do `index.html` a do `ASSETS` v `sw.js`.
