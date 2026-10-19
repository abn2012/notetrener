# Eventyr-designen (grenen `redesign-eventyr`)

Plan: bygge Eventyr-designen fra canvaset inn i appen, skjerm for skjerm. Bare utseende og bevegelse endres: spillformer, regler, tekster og tall er de samme som i dag. Lagret framgang må virke som før. Grenen slås sammen med `main` først når alt henger sammen.

Avgjort: tre filer (index.html, styles.css, app.js), egen gren, Hjem 1 («én knapp, ett kort») som forside, og fontene Lilita One og Nunito som filer i repoet.

- [x] Del `index.html` i `styles.css` og `app.js` (ingen synlig endring)
- [ ] Designsystem i `styles.css`: fonter (woff2), farger, himmelbakgrunn, 3D-knapper, kremkort med bånd, piller, bunnmeny og animasjoner. Avgjør hvordan mørk modus skal se ut
- [ ] Forsiden: Hjem 1 med prioritert kort (streak brutt → nok XP til egg → dagens utfordring → neste mål) og bunnmeny med fem faner
- [ ] Leksjonsintro, leksjonsrunde, Plasser noten og resultat («Du klarte det!»)
- [ ] Øv fritt, Rebus (lange ord), Notepar og Koble notene
- [ ] Melodier, Dueller og duell med kast per dyr
- [ ] Egg og dyr: egg, kiste, klekking, samling og nytt merke
- [ ] Dialoger: innstillinger, hjelp, omvisning og XP-oversikt
- [ ] Barnemodus: hundehus (dag/natt), stell dyret og eventyrkartet
- [ ] Sluttest: mobil (375 px), lys/mørk, gammel framgang, ingen konsollfeil. Så slå sammen med `main`

## Gjennomgang, steg 1 (oppdeling)
- `styles.css` og `app.js` er tatt ut byte for byte. Sammensatt igjen gir de nøyaktig den gamle `index.html`.
- Testet på localhost:8765: CSS-en lastes, lagret framgang (`nt1`, 2 leksjoner og katt) leses, Spill! åpner leksjon 3, og leksjonen starter med notetastene. Ingen konsollfeil.

---

# Astrids endringsønsker (runde 1)

Plan: én fil (`index.html`), lokale endringer, commit + push til slutt.

- [x] Lyd virker på iPhone/iPad (lydløs-bryter, `audioSession`, resume ved trykk, `beep` via `pf`)
- [x] «Lekse» → «leksjon» overalt (knappen «Neste leksjon»)
- [x] Forsiden: øvelser først, egg/zoo nederst
- [x] Nye nivåer: Mester (stokkede bokstaver, flere hjelpelinjer) og Legendarisk (kortere tid, gehør med referansetone, akkorder)
- [x] Spillmodus «Plasser noten» (diskant og bass)
- [x] Læringsløypa: ingen tidspress, mykere bassdel, plasseringsleksjon på slutten av hver nøkkel, migrering av gammel framgang
- [x] Fugleegg (billigst) og overraskelsesegg
- [x] Én kiste per instrumentkategori
- [x] Gjenopprette streak med XP, økende pris
- [x] Merker: Bonde, Paleontolog, Fuglekikker, Eggstraordinær
- [x] Alle dyr kan danse og snurre (fortsatt 3-krav)
- [x] Nye tegninger satt inn og sjekket
- [x] Omvisning og README oppdatert
- [x] Testet i nettleser (desktop + 375px, lyst/mørkt, migrering)
- [x] Ekstra (ønsket underveis): lys/mørk/auto i innstillingene
- [x] Ekstra (ønsket underveis): kulere regnbue som spretter inn, gløder og fader ut

## Gjennomgang
- Testet i Chromium-panelet med en gammel lagret tilstand (`pv:4`). Framgangen i læringsløypa ble flyttet riktig, `anim:true` ble til `'own'`, to uåpnede gamle kister ga 500 XP tilbake, og Bonde-merket ble satt uten feiring.
- Redd streaken: 200 → 200 → 400 → 800 XP. Streaken ble gjenopprettet.
- Legendarisk: ca. 20 % gehør og 20 % akkorder over 200 trekk. Bokstavene stokkes.
- En plasseringsleksjon er spilt helt gjennom (10/10, 3 stjerner). Riktig og feil plassering vises med grønt og rødt.
- Klekking av siste fugl ga merket Fuglekikker med feiring.
- Ingen konsollfeil.
- **Ikke testet:** lyd på ekte iPhone/iPad med lydløs-bryteren på. Det må Astrid prøve når Pages er oppe.
- Kjent begrensning: nye instrumenter bruker en felles plassering i potene, ikke egen justering per dyr.
