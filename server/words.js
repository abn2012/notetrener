// Ord til de hemmelige kodene. Korte, snille ord uten æ, ø og å, så de er lette å skrive.
export const WORDS = `
katt hund hest ku gris sau geit hane kanin mus ugle ravn ekorn rev ulv bjorn elg hjort
gaupe oter sel hval delfin hai laks torsk krabbe hummer blekksprut tiger loeve sebra giraff
elefant flodhest neshorn kamel apekatt panda koala kenguru pingvin isbjorn hvalross papegoye
flamingo struts pelikan skilpadde slange krokodille frosk padde snegle sommerfugl bie humle
maur marihone edderkopp drage enhjorning troll nisse
sol maane stjerne komet planet himmel sky regn sno vind storm torden lyn regnbue
fjell dal elv bekk sjo hav strand bolge skog tre blad blomst rose tulipan solsikke kaktus gress
mose stein sand is frost vulkan oy ode kyst fjord foss eng aaker hage
eple pere banan appelsin sitron drue jordbaer blabaer bringebaer kirsebaer melon ananas plomme
gulrot potet tomat agurk mais ert bonne nott kake bolle vaffel pannekake brod ost smor honning
sjokolade godteri is saft melk te suppe pizza taco
piano gitar fiolin cello harpe floyte tromme trompet tuba saksofon klarinett xylofon triangel
orgel lur bass kor sang dans takt tone note melodi rytme
rod bla gul gronn lilla rosa oransje hvit svart brun gull solv
ball sykkel drage ballong bat tog buss bil fly rakett ubat traktor
hus slott hytte telt tarn bro port vindu dor trapp stige
bok blyant pensel maling saks lim papir kart kompass lykt nokkel krone ring perle skatt
hatt lue skjerf vott sokk sko stovel genser jakke
modig glad snill rask sterk lur klok stille vill tam myk hard varm kald stor liten lang kort
rund spiss lys mork blank fin rar morsom
`.split(/\s+/).filter(w => /^[a-z]+$/.test(w)).filter((w, i, a) => a.indexOf(w) === i);
