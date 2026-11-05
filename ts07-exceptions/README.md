# TypeScript konzolová aplikace (šablona PSLIB)

Šablona pro **konzolovou aplikaci v TypeScriptu** – připravené skripty, hot-reload přes `tsx`, Prettier a ladění ve VS Code.

> Repozitář obsahuje [AGENTS.md](AGENTS.md) – instrukce pro AI coding agenty, aby studentům při cvičení jen radili a nepsali za ně řešení.

---

## Jak založit nový projekt

> Potřebujete **Node.js 18+**.

### Doporučený způsob vytvoření projektu
```
npm create @pslib/ts-console@latest moje-app
```
nebo pro automatickou instalaci závislostí
```
npm create @pslib/ts-console@latest moje-app -- --install
```
### První spuštění
```
cd moje-app
npm install
npm run dev
```

## Běžné příkazy

### Vývoj (hot-reload v terminálu)
```
npm run dev
```
> ⚠️ **Hot-reload (`tsx watch`) nefunguje pro aplikace, které čtou vstup z klávesnice** (např. přes `readline-sync`). `tsx watch` sleduje stdin kvůli funkci "stiskni Enter pro restart", takže i běžný text napsaný do promptu appku restartuje dřív, než se vstup zpracuje. Jde o [známé omezení tsx](https://github.com/privatenumber/tsx/issues/456). Jakmile appka začne číst klávesnicový vstup, přepněte na `npm run start:input` (viz níže) nebo appku spouštějte přes VS Code F5.

### Spuštění bez hot-reloadu (nutné pro klávesnicový vstup)
```
npm run start:input
```
Spustí `.ts` soubor přímo, bez watch režimu – appka se sama nerestartuje, takže vstup z klávesnice funguje spolehlivě. Stejně spolehlivě funguje i spuštění přes VS Code F5 (konfigurace "Run (ts-node)" / "Run (compiled JS)", viz sekce Ladění níže).

### Jednorázové spuštění testů
```
npm test
```
### Spuštění testů s watch režimem
```
npm run test:watch
```
### Formátování (Prettier)
```
npm run format
```
## Překlad do Javascriptu 

Překlad proběhne do složky *dist/*
```
npm run build
```
Následné spuštění přeložené verze
```
npm start
```

## Ladění ve VS Code

### Hot-Reload
1. V terminálu spustíme *npm run dev:debug* (spustí app s Node inspectorem na portu 9229)
2. Ve VS Code stiskněte F5 a vyberte Attach (tsx).

> ⚠️ Stejně jako `npm run dev`, i `dev:debug` běží přes `tsx watch`, takže **tento režim nefunguje pro appky s klávesnicovým vstupem** (viz varování výše). Pro ladění kódu, který čte vstup z klávesnice, použijte místo Hot-Reloadu "Jednorázové spuštění" níže.

### Jednorázové spuštění
1. F5 a vybereme jednu z předpřipravených konfigurací:
    - Run (ts-node) – spouští přímo .ts.
    - Run (compiled JS) – před spuštěním přeloží do dist/ a pustí .js.
Breakpointy fungují v obou režimech.

