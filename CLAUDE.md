# CLAUDE.md

## Om prosjektet

NoteQuest er en app for å lære å lese noter. Det er **Astrid sin første app laget med Claude Code**. Forklar endringer med enkle ord, og hold koden så lett å forstå som mulig.

## Oppbygning

- Appen ligger i tre filer ved siden av hverandre:
  - `index.html`: bare rammen. Den må hete `index.html` fordi nginx viser den som forsiden. Appen kjører på Coolify fra `docker-compose.yml`, og alt som pushes til `main` blir synlig der.
  - `styles.css`: all CSS, også designsystemet (farger, knapper, kort og animasjoner).
  - `app.js`: all JavaScript. Det er et vanlig skript (ikke en modul), så funksjonene kan brukes fra `onclick` i HTML-en.
- Før du lager en ny CSS-klasse, søk etter navnet i `styles.css` og `app.js`. To ulike ting med samme klassenavn arver hverandres stil (det skjedde med `.rib`, som både var båndet med leksjonsnavnet og båndene på medaljen). Gi nye deler et eget, beskrivende navn.
- Ingen build-steg, ingen avhengigheter og ingen skript eller fonter fra andre nettsteder. Alt ligger i repoet. Appikonene (`icon-*.png`) og `manifest.webmanifest` ligger ved siden av. Ikke del opp i flere filer med mindre Astrid ber om det.
- Når du endrer `styles.css` eller `app.js`, øk tallet i `?v=` der fila lenkes inn i `index.html`. Ellers kan nettleseren bruke en gammel versjon av fila sammen med en ny versjon av den andre.
- Notene tegnes som inline SVG. Nøkkelen og notene må alltid vises helt, aldri kuttet verken i høyden eller bredden. Når du beskjærer `viewBox` eller legger notelinja i et kort med `overflow:hidden`, sjekk i nettleseren at nøkkelen og de høyeste og laveste notene (med hjelpelinjer) får plass. Lyden lages med Web Audio (`AudioContext`).
- Framgang (XP, streak, dyr, instrumenter og innstillinger) lagres i `localStorage`. Endres formatet på lagrede data, må gammel framgang fortsatt fungere.
- Framgangen kan også lagres på nettet med en hemmelig kode (`SY` og `sync*`-funksjonene i `app.js`). Serveren ligger i `server/` (Bun, ingen avhengigheter) og lagrer hele `S` som JSON i Postgres uten å se inni den. Derfor trengs ingen databaseendring når formatet på `S` endres. Oppryddingen øverst i `app.js` gjør jobben også for framgang som kommer fra serveren.
- Databaseendringer (nye tabeller og kolonner) legges til nederst i `MIGRATIONS` i `server/index.js`. Endre aldri et steg som allerede har kjørt.
- `nginx.conf` sender `/api/` videre til tjenesten `api`. Appen må virke uten den (uten nett, eller hvis serveren er nede).
- Farger er CSS-variabler på `:root`, med egne verdier for mørk modus. Nye farger legges til på samme måte.
- Layouten er laget for mobil først (`#app` har maks bredde 480px).

## Språk og musikk

- All tekst i appen er på norsk (bokmål).
- Notene heter C, D, E, F, G, A og **H**, etter norsk skikk. Bruk aldri B for H.

## Testing

Åpne `index.html` i en nettleser og prøv endringen. Det finnes ingen automatiske tester.

For å teste lagring på nettet: `docker compose -f docker-compose.yml -f docker-compose.local.yml up --build` (med egen Postgres), og åpne http://localhost:8080.

## Commit og push

Etter hver endring skal du committe og pushe til `main` uten å spørre først. Det betyr at endringen havner på nettsiden med en gang, så test i nettleseren før du committer. Skriv commit-meldingen på norsk, og forklar hva som er endret.
