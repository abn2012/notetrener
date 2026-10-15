# CLAUDE.md

## Om prosjektet

Notetrener er en app for å lære å lese noter. Det er **Astrid sin første app laget med Claude Code**. Forklar endringer med enkle ord, og hold koden så lett å forstå som mulig.

## Oppbygning

- Hele appen ligger i én fil: `Notetrener.html`, med HTML, CSS og JavaScript. Ingen build-steg, ingen avhengigheter og ingen eksterne skript. Behold det sånn med mindre Astrid ber om noe annet.
- Notene tegnes som inline SVG. Lyden lages med Web Audio (`AudioContext`).
- Framgang (XP, streak, dyr, instrumenter og innstillinger) lagres i `localStorage`. Endres formatet på lagrede data, må gammel framgang fortsatt fungere.
- Farger er CSS-variabler på `:root`, med egne verdier for mørk modus. Nye farger legges til på samme måte.
- Layouten er laget for mobil først (`#app` har maks bredde 480px).

## Språk og musikk

- All tekst i appen er på norsk (bokmål).
- Notene heter C, D, E, F, G, A og **H**, etter norsk skikk. Bruk aldri B for H.

## Testing

Åpne `Notetrener.html` i en nettleser og prøv endringen. Det finnes ingen automatiske tester.
