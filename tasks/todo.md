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
- [x] Øv fritt som på tavla: fargede bånd, nivåfliser i to kolonner med XP-merke, kort for akkorder, Plasser noten og Rebus/Notepar/Koble
- [x] Dueller-fanen som på tavla: kveldshimmel, tårn med låste øverst, neste motstander med pulserende «Kjemp!», slåtte i grønt med «Slått»
- [x] Navigasjon: ingen skjerm uten vei ut, og tidtakere fra en runde man har forlatt gjør ikke lenger noe
- [x] Melodier-fanen, melodirunden og selve duellen (kast per dyr) som på tavlene
- [ ] Mobilens tilbakeknapp lukker appen i stedet for å gå et steg tilbake (appen bruker ikke nettleserhistorikken). Vurder å legge til
- [x] Klekking og åpning av kister som på tavla
- [x] Egg og dyr: egg, kiste, Mine, samling og nytt merke
- [x] Dialoger: innstillinger, hjelp, omvisning og XP-oversikt
- [x] Barnemodus: hundehus (dag/natt), stell dyret og eventyrkartet
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

## Gjennomgang, steg 5 (Øv fritt, Dueller og navigasjon)
- Øv fritt og Dueller er bygd etter tavlene, med animasjonene: ikonet på Legendarisk svever, «Kjemp!» pulserer, og motstanderen spretter.
- Navigasjon: sjekket 69 skjermer og dialoger med et skript (alle fanene, løypa, intro, møt noten, runder i alle fire modusene med hjelp/noter/resultat/tap, minispill med sluttskjerm, melodi, duell, klekking, dyredetaljer, merker, innstillinger, hjelp, XP-hjul, omvisning, barnemodus med kart, stell og kiste, duell-fanen låst/åpen/alt slått). Alle har en vei ut.
- Fant og rettet en feil som fantes fra før: går man ut av en runde med tidsfrist (eller ut i pausen etter et svar), fortsatte tidtakeren. Startet man en ny runde, ble et «Tiden gikk ut» talt med der. Nå hører tidtakeren til runden sin. Testet: ny runde står på 0, ingen konsollfeil.
- Mer plass nederst, så XP-hjulet ikke dekker de nederste flisene.

## Gjennomgang, steg 6 (Melodier og duellen)
- Melodier: lilla bakgrunn, brikker for vanskelighetsgrad (valgt er gul og hevet, låste har hengelås), infoboks med en liten notelinje, og melodikort med plate. Den første melodien du ikke har spilt, snurrer. Merkene er «Spilt ✓», XP og «NY» som vipper.
- Melodirunden har samme toppfelt som leksjonene. Sluttskjermen har en stor plate som snurrer, med stråler bak.
- Duellen: himmel og gress, motstanderen øverst til høyre (snudd mot deg), livet som 6 biter som blir røde på de to siste, noten i en snakkeboble med stjerner som blinker, og ditt dyr nederst til venstre. Kastene per dyr er som før (testet hjerte fra katten og is fra haren). «Du vant!» har stråler.
- Testet i 375 px: Kjempetreff tar 2 liv (6/6 → 4/6), motstanderens treff tar 1 (6/6 → 5/6), seier gir sluttskjermen. Ingen konsollfeil.

## Gjennomgang, steg 7 (klekking)
- Klekkeskjermen er bygd etter tavla: solnedgang med stråler som snurrer og glød bak egget. Egget vugger av og til, og en hånd viser hvor man skal trykke (den forsvinner etter første trykk). Tre lamper lyser gult for hvert trykk, og teksten («Det knaker!», «Nesten der...») spretter.
- Under vises en rad med dyrene i egget: dyr du har, og «?» for dem du mangler (ingen silhuetter). Når dyret kommer ut, spretter det fram, og det nye dyret får gul ring i raden.
- Kister bruker samme skjerm («Trykk på kisten 3 ganger», «Den knirker!»).
- Testet i 375 px: fugleegg (1 av 7 → 2 av 7) og slagverkkiste. Ingen konsollfeil.

## Gjennomgang, steg 8 (Egg og dyr)
- Varm bakgrunn, fanene som segmentert knapp og XP-pille.
- Egg og kister som kort: grønn «Kjøp» når du har råd, oransje «Klekk egget» som gløder (og egget vugger) når det venter, fremdrift med «N XP igjen», og grå kort med lås og «Låses opp på nivå N».
- Samling: merker som gull-medaljer med glans (tatt) eller ring som viser fremdrift. Hver gruppe har tittel, «N av M», fremdrift (grønn når alt er samlet) og ruter der dyr du mangler bare er «?». Skinnende dyr får gull-ring.
- Nytt merke: egen skjerm 1,4 s etter klekkingen. Medaljen faller ned og snurrer, stråler og konfetti, navnet, dyrene og «N av M merker». «Fortsett» viser neste nye merke hvis det er flere. «Se samlingen» går til Samling.
- På smale skjermer viser nivå-pillen bare stjerne og tall, så fanens navn får plass.
- Testet i 375 px: kjøp/klekk/fremdrift/låst, Samling, Mine, merke-skjermen via en ekte klekking og begge knappene. Ingen konsollfeil.

## Gjennomgang, steg 9 (dialogene)
- Innstillinger: oransje bånd over kortet, lukkeknapp, hvite rader med ikon og 3D-brytere (På/Av med kule som glir), lilla «Spill», Utseende som tre knapper og temafargene som ruter. «Ferdig» er grønn.
- Hjelp: Susi titter over kanten, sidens navn står på et oransje bånd med ikon, og «Skjønner» er grønn.
- Omvisning: steg uten markering er et kort med Susi over, og steg med markering er et ark med ikon, «Du er nå på siden …», «Hopp over» og «Neste» side om side. Prikken for steget du er på er lengre.
- XP-oversikten: stjerne med stråler og stort tall, hvite rader med nivåring, neste mål og dagens utfordring med fremdrift, og streak/samling i to kolonner. «Gå til egg og dyr» er oransje.
- Testet i 375 px, lyst og mørkt: bryterne (lyd av/på), utseende og temafarge virker. Ingen konsollfeil.

## Gjennomgang, steg 10 (barnemodus)
- Hundehuset er en liten verden: dag med sol, skyer som driver og favorittdyret som logrer i døra, natt med måne, stjerner som blinker, lys i døra, Zzz og mørkere dyr. Dyrene står i et kort under, med stjerne for favoritt og rød prikk for sulten.
- Stell dyret: himmel og gress (natt når dyret sover), stort dyr som spretter, snakkeboblen øverst («Jeg er glad!» osv.), mett-stolpe i grønt/oransje/rødt, fargede lekeknapper (Klapp, Kile, Ball), grønn «Gi mat», og navn med oransje «Lagre». Om natta er «Vekk dyret» lilla.
- Eventyrkartet: soner med gradient, oransje skilt, kremfarget sti med skygge og blått toppfelt med «N av 20».
- Testet i 375 px: dag og natt (klokka satt til 22 i testen), lek gir «+5 XP» og hjerter, kartet med slått sjef, kister og «?» for soner du ikke har nådd. Ingen konsollfeil.

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
