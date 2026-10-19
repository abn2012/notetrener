# Eventyr-designen (grenen `redesign-eventyr`)

Plan: bygge Eventyr-designen fra canvaset inn i appen, skjerm for skjerm. Bare utseende og bevegelse endres: spillformer, regler, tekster og tall er de samme som i dag. Lagret framgang må virke som før. Grenen slås sammen med `main` først når alt henger sammen.

Avgjort: tre filer (index.html, styles.css, app.js), egen gren, Hjem 1 («én knapp, ett kort») som forside, og fontene Lilita One og Nunito som filer i repoet.

- [x] Del `index.html` i `styles.css` og `app.js` (ingen synlig endring)
- [x] Designsystem i `styles.css`: fonter (woff2), farger, himmelbakgrunn, 3D-knapper, kremkort, piller, bunnmeny. Mørk modus = natthimmel
- [x] Forsiden: Hjem 1 med prioritert kort (streak brutt → nok XP til egg → dagens utfordring → neste mål) og bunnmeny med fem faner
- [ ] Overskriftsraden på fanene (NoteQuest, Nivå, ?, tannhjul) brytes på to linjer på mobil. Ordnes når fanene får ny drakt
- [x] Leksjonsintro, leksjonsrunde, Plasser noten og resultat («Du klarte det!»)
- [x] Øv fritt, Rebus (lange ord), Notepar og Koble notene
- [x] Overskriftsraden på fanene er nå én rad (fanens navn, Nivå, ?, tannhjul)
- [ ] Melodier, Dueller og duell med kast per dyr
- [ ] Egg og dyr: egg, kiste, klekking, samling og nytt merke
- [ ] Dialoger: innstillinger, hjelp, omvisning og XP-oversikt
- [ ] Barnemodus: hundehus (dag/natt), stell dyret og eventyrkartet
- [ ] Sluttest: mobil (375 px), lys/mørk, gammel framgang, ingen konsollfeil. Så slå sammen med `main`

## Gjennomgang, steg 1 (oppdeling)
- `styles.css` og `app.js` er tatt ut byte for byte. Sammensatt igjen gir de nøyaktig den gamle `index.html`.
- Testet på localhost:8765: CSS-en lastes, lagret framgang (`nt1`, 2 leksjoner og katt) leses, Spill! åpner leksjon 3, og leksjonen starter med notetastene. Ingen konsollfeil.

## Gjennomgang, steg 2 (designsystem og forside)
- Testet på localhost:8765 i 375 px, både lyst og mørkt. Ingen konsollfeil.
- Kortet på forsiden er riktig i alle tilstandene: vanlig dag (Dagens utfordring), nok XP (egg), streak brutt (Redd streaken), hele løypa klar (Neste mål, og Spill! går til Øv fritt) og ny spiller (Susi og «Velkommen!»).
- Omvisningen markerer streak-pillen, løype-stripen og dagens utfordring. Arket flytter seg til toppen når det markerte ligger langt nede.
- Fanene, leksjonene og dialogene har fått fonter, farger og 3D-knapper fra designsystemet, men ikke ny layout ennå.

## Gjennomgang, steg 3 (leksjonene)
- Leksjonsintroen er delt i steg: 1) Susi forklarer tipset (med midtlinje-illustrasjon når tipset handler om midtlinja), 2) de nye notene, 3) notene som kommer og start-knappene. Leksjoner uten nye noter har to steg. «Tilbake» fra Møt noten går til steg 3.
- Runden har én rad øverst (tilbake, tittel/hjerter, Noter, Hjelp) og fremdrift med kombo under. Overskriften brytes ikke lenger på mobil.
- Resultatet heter nå «Du klarte det!». Stjernene spretter inn én og én med stråler bak. «Prøv igjen!» er som før.
- Testet i 375 px, lyst og mørkt: intro steg 1–3, riktig/feil svar med forklaring, Plasser noten med grønn Sjekk-knapp, 3 stjerner og tapt leksjon. Ingen konsollfeil.

## Gjennomgang, steg 4 (Øv fritt og minispill)
- Fanene har fått overskrift med fanens navn på én rad.
- Rebus: hele ordet vises som små ruter øverst (lilla ♪ for noter, gul og blinkende for den du skal lese, grønn bokstav når den er klart, vanlige bokstaver som de er), og noten du skal lese vises stor under. Rutene krymper så alt får plass på én rad: HARDINGFELE (11 bokstaver) får 27 px ruter på 375 px. «HA DET GØY» viser mellomrom mellom ordene.
- Notepar: lilla bakside med «?», kremfarget forside som vendes, grønt for par som er funnet.
- Koble notene: kremfargede notekort, lilla bokstavkort, gul ring rundt det som er valgt og grønne streker med prikker i hver ende.
- Nøkkelen kuttes aldri (Astrids ønske): Plasser noten viser nå hele den store nøkkelen, og trykk på notelinja treffer fortsatt riktig (12 av 12 testet). Notepar og Koble notene har fått mer plass over og under. Sjekket med et skript: nøkkelen ligger innenfor både notelinja og kortet i 152 tilfeller (alle Plasser noten-nivåene, notepar, koble, rebus, alle 20 leksjonene og alle nivåene). Skriptet fanget den gamle feilen.
- Testet i 375 px, lyst og mørkt. Ingen konsollfeil.

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
