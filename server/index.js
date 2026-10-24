// NoteQuest-lagring: tar vare på framgangen (S fra app.js) i Postgres.
// Det finnes ingen kontoer. Barnet får en hemmelig kode av ord, og koden er hele «innloggingen».
// Vi lagrer bare sha256 av koden, så en kopi av databasen avslører ingen koder.
// Serveren tolker ikke framgangen. Appen gjør om gamle formater selv når den laster dem.
import { sql } from "bun"; // kobler til DATABASE_URL
import { createHash, randomInt } from "node:crypto";
import { WORDS } from "./words.js";

const MAX_BODY = 256 * 1024;

// Databaseendringer, i rekkefølge. Legg bare til nye steg nederst, endre aldri et steg som har kjørt.
// Ved oppstart kjøres stegene databasen mangler, i én transaksjon. Låsen hindrer at to servere gjør det samtidig.
const MIGRATIONS = [
  `create table saves(
    id text primary key,
    data jsonb not null,
    rev int not null default 1,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now())`,
];
await sql.begin(async tx => {
  await tx`select pg_advisory_xact_lock(7001)`;
  await tx`create table if not exists schema_version(v int not null)`;
  const [row] = await tx`select v from schema_version`;
  const v = row ? row.v : 0;
  if (!row) await tx`insert into schema_version values (0)`;
  for (let i = v; i < MIGRATIONS.length; i++) await tx.unsafe(MIGRATIONS[i]);
  if (v < MIGRATIONS.length) await tx`update schema_version set v = ${MIGRATIONS.length}`;
});

// «tiger-fiolin-sol-42»: 4 ord av ~250 og et tall gir omtrent 38 bit, nok når gjetting sperres.
const newCode = () => [0, 1, 2, 3].map(() => WORDS[randomInt(WORDS.length)]).join("-") + "-" + randomInt(10, 100);
// Store bokstaver, mellomrom og andre skilletegn skal ikke gjøre koden feil.
const clean = c => (c || "").toLowerCase().trim().split(/[^a-z0-9]+/).filter(Boolean).join("-");
const hash = c => createHash("sha256").update(c).digest("hex");

// Sperre per IP: for mange feil koder eller nye koder på kort tid gir 429. Holdes i minnet.
const hits = new Map();
const WINDOW = 10 * 60 * 1000;
function limited(ip, kind, max) {
  const k = kind + ip, now = Date.now(), h = hits.get(k);
  if (!h || now - h.t > WINDOW) { hits.set(k, { t: now, n: 0 }); return false }
  return h.n >= max;
}
function count(ip, kind) { const h = hits.get(kind + ip); if (h) h.n++ }
setInterval(() => { const now = Date.now(); for (const [k, h] of hits) if (now - h.t > WINDOW) hits.delete(k) }, WINDOW);

// Traefik i Coolify setter klientens IP først i X-Forwarded-For.
const ipOf = (req, server) => (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || server.requestIP(req)?.address || "?";
const json = (body, status = 200) => Response.json(body, { status, headers: { "cache-control": "no-store" } });
const isSave = d => d && typeof d === "object" && !Array.isArray(d);

async function body(req) {
  try { return await req.json() } catch { return null }
}

Bun.serve({
  port: Number(process.env.PORT) || 3000,
  maxRequestBodySize: MAX_BODY,
  async fetch(req, server) {
    const url = new URL(req.url), ip = ipOf(req, server);
    if (url.pathname === "/api/health") return json({ ok: true });
    if (url.pathname !== "/api/save") return json({ error: "ukjent" }, 404);

    // Ny kode: lagrer den første framgangen og gir koden tilbake.
    if (req.method === "POST") {
      if (limited(ip, "new", 10)) return json({ error: "for mange" }, 429);
      const b = await body(req);
      if (!isSave(b?.data)) return json({ error: "mangler data" }, 400);
      count(ip, "new");
      const code = newCode();
      await sql`insert into saves (id, data) values (${hash(code)}, ${b.data})`;
      return json({ code, rev: 1 });
    }

    const code = clean((req.headers.get("authorization") || "").replace(/^Bearer\s+/i, ""));
    if (!code) return json({ error: "mangler kode" }, 401);
    if (limited(ip, "bad", 20)) return json({ error: "for mange" }, 429);
    const id = hash(code);

    if (req.method === "GET") {
      const [row] = await sql`select data, rev from saves where id = ${id}`;
      if (!row) { count(ip, "bad"); return json({ error: "fant ikke koden" }, 404) }
      return json({ code, rev: row.rev, data: row.data });
    }

    // Oppdatering virker bare hvis appen har siste versjon (rev). Ellers får den serverens versjon tilbake (409).
    if (req.method === "PUT") {
      const b = await body(req);
      if (!isSave(b?.data) || !Number.isInteger(b.rev)) return json({ error: "mangler data" }, 400);
      const [row] = await sql`update saves set data = ${b.data}, rev = rev + 1, updated_at = now()
        where id = ${id} and rev = ${b.rev} returning rev`;
      if (row) return json({ rev: row.rev });
      const [cur] = await sql`select data, rev from saves where id = ${id}`;
      if (!cur) { count(ip, "bad"); return json({ error: "fant ikke koden" }, 404) }
      return json({ rev: cur.rev, data: cur.data }, 409);
    }

    return json({ error: "ukjent" }, 405);
  },
});
console.log("NoteQuest-lagring kjører");
