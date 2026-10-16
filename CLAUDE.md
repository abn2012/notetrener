# CLAUDE.md

## Om prosjektet

NoteQuest er en app for å lære å lese noter. Det er **Astrid sin første app laget med Claude Code**. Forklar endringer med enkle ord, og hold koden så lett å forstå som mulig.

## Oppbygning

- Hele appen ligger i én fil: `index.html`, med HTML, CSS og JavaScript. Fila må hete `index.html` fordi appen publiseres med GitHub Pages fra `main`, på https://abn2012.github.io/notetrener/. Alt som pushes til `main` blir synlig der. Ingen build-steg, ingen avhengigheter og ingen eksterne skript. Behold det sånn med mindre Astrid ber om noe annet.
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
