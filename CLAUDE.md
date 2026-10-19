# CLAUDE.md

## Om prosjektet

NoteQuest er en app for å lære å lese noter. Det er **Astrid sin første app laget med Claude Code**. Forklar endringer med enkle ord, og hold koden så lett å forstå som mulig.

## Oppbygning

- Appen ligger i tre filer ved siden av hverandre:
  - `index.html`: bare rammen. Den må hete `index.html` fordi appen publiseres med GitHub Pages fra `main`, på https://abn2012.github.io/notetrener/. Alt som pushes til `main` blir synlig der.
  - `styles.css`: all CSS, også designsystemet (farger, knapper, kort og animasjoner).
  - `app.js`: all JavaScript. Det er et vanlig skript (ikke en modul), så funksjonene kan brukes fra `onclick` i HTML-en.
- Ingen build-steg, ingen avhengigheter og ingen skript eller fonter fra andre nettsteder. Alt ligger i repoet. Appikonene (`icon-*.png`) og `manifest.webmanifest` ligger ved siden av. Ikke del opp i flere filer med mindre Astrid ber om det.
- Når du endrer `styles.css` eller `app.js`, øk tallet i `?v=` der fila lenkes inn i `index.html`. Ellers kan nettleseren bruke en gammel versjon av fila sammen med en ny versjon av den andre.
- Notene tegnes som inline SVG. Lyden lages med Web Audio (`AudioContext`).
- Framgang (XP, streak, dyr, instrumenter og innstillinger) lagres i `localStorage`. Endres formatet på lagrede data, må gammel framgang fortsatt fungere.
- Farger er CSS-variabler på `:root`, med egne verdier for mørk modus. Nye farger legges til på samme måte.
- Layouten er laget for mobil først (`#app` har maks bredde 480px).

## Språk og musikk

- All tekst i appen er på norsk (bokmål).
- Notene heter C, D, E, F, G, A og **H**, etter norsk skikk. Bruk aldri B for H.

## Testing

Åpne `index.html` i en nettleser og prøv endringen. Det finnes ingen automatiske tester.

## Commit og push

Etter hver endring skal du committe og pushe til `main` uten å spørre først. Det betyr at endringen havner på nettsiden med en gang, så test i nettleseren før du committer. Skriv commit-meldingen på norsk, og forklar hva som er endret.

Unntak: Den nye Eventyr-designen bygges på grenen `redesign-eventyr`. Commit og push dit underveis, og slå den sammen med `main` først når hele designen henger sammen.
