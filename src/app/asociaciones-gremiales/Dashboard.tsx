"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ARTICULOS,
  TITULOS,
  ORDEN,
  CHIPS,
  type Articulo,
  type TituloKey,
} from "./data";

const RESUMEN = [
  { badge: "Qué es", title: "Una organización de actividad común", text: "Reúne a personas naturales o jurídicas para promover la racionalización, desarrollo y protección de una profesión, oficio, producción o servicio común. No puede desarrollar actividades políticas ni religiosas." },
  { badge: "Nace", title: "Registro y publicación", text: "Se constituye ante ministro de fe, deposita el acta ante el Ministerio de Economía y obtiene personalidad jurídica al publicar el extracto en el Diario Oficial." },
  { badge: "Manda", title: "Directorio y presidente", text: "La administración está a cargo de un directorio. El presidente del directorio representa judicial y extrajudicialmente a la asociación." },
  { badge: "Dinero", title: "Patrimonio sin reparto", text: "Se financia con cuotas, donaciones, servicios, venta de activos y multas. Sus rentas y excedentes pertenecen a la asociación y no se reparten entre afiliados." },
  { badge: "Control", title: "Libros, balance y fiscalización", text: "Debe llevar libros y balance anual. El Ministerio de Economía puede pedir antecedentes, revisar libros y aplicar sanciones cuando corresponda." },
  { badge: "Crece", title: "Federaciones y confederaciones", text: "Tres o más asociaciones forman una federación; dos o más federaciones forman una confederación. La afiliación se decide con votación secreta y mayoría absoluta." },
];

const KPIS = [
  { ico: "👥", big: "25 / 4", lbl: "Mínimo: personas naturales o jurídicas / solo jurídicas" },
  { ico: "📰", big: "Diario Oficial", lbl: "Publicación que activa la personalidad jurídica" },
  { ico: "⏱️", big: "90 días", lbl: "Plazo del Ministerio para objetar la constitución" },
  { ico: "🤝", big: "3+", lbl: "Asociaciones forman una federación" },
  { ico: "🏛️", big: "2+", lbl: "Federaciones forman una confederación" },
];

const PASOS = [
  { t: "Reúnan el mínimo legal", p: "La ley exige a lo menos 25 personas naturales o jurídicas, o cuatro personas jurídicas." },
  { t: "Celebren la constitución ante ministro de fe", p: "La reunión se realiza ante notario público; en comunas sin notario puede actuar el Oficial del Registro Civil." },
  { t: "Aprueben estatutos y elijan mesa directiva", p: "El acta debe dejar constancia de estatutos, elección de directiva e individualización de quienes concurren." },
  { t: "Depositen el acta ante el Ministerio de Economía", p: "El depósito se realiza en tres ejemplares para su registro." },
  { t: "Publiquen el extracto en el Diario Oficial", p: "Depósito y publicación deben hacerse dentro de 60 días desde el acta. Con la publicación nace la personalidad jurídica." },
  { t: "Gestionen observaciones y mantengan libros al día", p: "El Ministerio puede objetar dentro de 90 días. Si observa, hay 60 días para subsanar; además deben mantenerse libros, contabilidad y balance anual." },
];

const FAQS = [
  { q: "¿La afiliación puede ser obligatoria?", a: "No. La afiliación es voluntaria y personal. Nadie puede ser obligado a afiliarse ni impedido de desafiliarse (Art. 2)." },
  { q: "¿Cuándo nace la personalidad jurídica?", a: "Nace al publicar en el Diario Oficial el extracto del acta, incluyendo el número de registro asignado por el Ministerio de Economía (Art. 4)." },
  { q: "¿Qué pasa si el Ministerio objeta la constitución?", a: "Puede objetar dentro de 90 días desde el depósito. La asociación tiene 60 días para subsanar defectos o ajustar estatutos; si no lo hace, se cancela su personalidad jurídica (Art. 5)." },
  { q: "¿Quién representa legalmente a la asociación?", a: "El presidente del directorio representa judicial y extrajudicialmente a la asociación (Art. 9)." },
  { q: "¿Se pueden repartir excedentes?", a: "No. Las rentas, utilidades, beneficios o excedentes pertenecen a la asociación y no pueden distribuirse entre afiliados ni al disolverse (Art. 11)." },
  { q: "¿Qué obligaciones contables tiene?", a: "Debe llevar libros de actas y contabilidad al día y confeccionar un balance anual firmado por contador, aprobado por la asamblea (Arts. 15 y 16)." },
  { q: "¿Cuándo puede disolverse?", a: "Puede disolverse por acuerdo de la mayoría de afiliados o por cancelación de personalidad jurídica por las causales legales, como incumplimientos graves, baja de socios o receso superior a un año (Art. 18)." },
  { q: "¿Qué pasa con los bienes si se disuelve?", a: "Se aplican a los fines que indiquen los estatutos. Si no es posible o nada dicen, decide el Presidente de la República. No pueden entregarse a quienes eran afiliados (Art. 19)." },
];

const GLOSARIO = [
  { t: "Asociación gremial", d: "Organización sin fines de lucro que agrupa a personas de una misma actividad común." },
  { t: "Personalidad jurídica", d: "Capacidad legal de la asociación para tener bienes, contratar y actuar. Se obtiene por el depósito de estatutos y acta." },
  { t: "Estatutos", d: "Reglas internas que rigen la organización, dirección y administración de la asociación." },
  { t: "Asamblea general", d: "Reunión de los socios; autoridad suprema. Puede ser ordinaria o extraordinaria." },
  { t: "Directorio", d: "Órgano que dirige y administra la asociación según los estatutos." },
  { t: "Federación", d: "Unión de tres o más asociaciones gremiales." },
  { t: "Confederación", d: "Unión de tres o más federaciones, o de diez o más asociaciones gremiales." },
  { t: "Culpa leve", d: "Estándar de responsabilidad con que responden los directores en su gestión." },
];

// Paleta segun tema (claro / oscuro)
type Theme = "dark" | "light";
function palette(theme: Theme) {
  const dark = theme === "dark";
  return {
    dark,
    page: dark ? "bg-neutral-950 text-neutral-100" : "bg-neutral-50 text-neutral-900",
    border: dark ? "border-neutral-800" : "border-neutral-200",
    card: dark ? "bg-neutral-900/30" : "bg-white",
    cardHover: dark ? "hover:border-neutral-600" : "hover:border-neutral-400",
    muted: dark ? "text-neutral-400" : "text-neutral-600",
    faint: dark ? "text-neutral-500" : "text-neutral-500",
    accentText: dark ? "text-blue-300" : "text-blue-700",
    accentBorder: dark ? "border-blue-500/30" : "border-blue-300",
    accentBg: dark ? "bg-blue-500/10" : "bg-blue-100/70",
    inner: dark ? "bg-neutral-900/50" : "bg-neutral-100",
    innerExpand: dark ? "bg-neutral-950/60" : "bg-neutral-100/70",
    chipActive: dark
      ? "border-blue-500/40 bg-blue-500/15 text-blue-300"
      : "border-blue-400 bg-blue-100 text-blue-700",
    chipIdle: dark
      ? "border-neutral-800 bg-neutral-900/30 text-neutral-400 hover:border-neutral-600 hover:text-neutral-200"
      : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-900",
    h1: dark
      ? "bg-gradient-to-br from-white to-blue-300/70 bg-clip-text text-transparent"
      : "text-neutral-900",
  };
}
type Pal = ReturnType<typeof palette>;

function Resaltar({ texto, q }: { texto: string; q: string }) {
  const term = q.trim();
  if (!term) return <>{texto}</>;
  // escapa caracteres especiales de regex
  const esc = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const partes = texto.split(new RegExp(`(${esc})`, "gi"));
  return (
    <>
      {partes.map((parte, i) =>
        parte.toLowerCase() === term.toLowerCase() ? (
          <mark
            key={i}
            className="rounded bg-yellow-300/90 px-0.5 font-semibold text-neutral-900"
          >
            {parte}
          </mark>
        ) : (
          <span key={i}>{parte}</span>
        )
      )}
    </>
  );
}

function ArticuloItem({
  a,
  open,
  onToggle,
  q,
  c,
}: {
  a: Articulo;
  open: boolean;
  onToggle: () => void;
  q: string;
  c: Pal;
}) {
  return (
    <div
      className={`border ${c.border} border-b-0 ${c.card} first:rounded-t-xl last:rounded-b-xl last:border-b overflow-hidden`}
    >
      <button
        onClick={onToggle}
        className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${
          c.dark ? "hover:bg-neutral-900/70" : "hover:bg-neutral-100"
        }`}
      >
        <span
          className={`w-20 shrink-0 rounded-md border ${c.accentBorder} ${c.accentBg} py-1.5 text-center text-xs font-bold ${c.accentText}`}
        >
          {a.n}
        </span>
        <span className="min-w-0 flex-1">
          <span
            className={`block text-sm font-semibold ${
              c.dark ? "text-neutral-100" : "text-neutral-900"
            }`}
          >
            <Resaltar texto={a.h} q={q} />
          </span>
          <span className={`block text-xs ${c.muted} ${open ? "" : "truncate"}`}>
            <Resaltar texto={a.p} q={q} />
          </span>
        </span>
        <span
          className={`shrink-0 text-xs ${
            c.dark ? "text-blue-400" : "text-blue-600"
          } transition-transform ${open ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>
      {open && (
        <div className={`${c.innerExpand} px-4 pb-4 text-sm leading-relaxed ${c.muted}`}>
          <p className="m-0">
            <b className={c.dark ? "text-neutral-100" : "text-neutral-900"}>En simple:</b>{" "}
            <Resaltar texto={a.p} q={q} />
          </p>
          <p
            className={`mt-3 rounded-lg border ${c.border} border-l-2 border-l-blue-400 ${c.inner} px-4 py-3 text-[13px] ${c.muted}`}
          >
            <b className={c.dark ? "text-blue-200" : "text-blue-700"}>Texto legal:</b>{" "}
            <Resaltar texto={a.legal} q={q} />
          </p>
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [filtro, setFiltro] = useState<"todos" | TituloKey>("todos");
  const [query, setQuery] = useState("");
  const [abiertos, setAbiertos] = useState<Set<string>>(new Set());

  const c = palette(theme);

  // Recupera la preferencia guardada al cargar
  useEffect(() => {
    const guardado = localStorage.getItem("tema-360");
    if (guardado === "light" || guardado === "dark") setTheme(guardado);
  }, []);

  // Guarda la preferencia cada vez que cambia
  useEffect(() => {
    localStorage.setItem("tema-360", theme);
  }, [theme]);

  const lista = useMemo(() => {
    const q = query.toLowerCase().trim();
    let l = ARTICULOS;
    if (filtro !== "todos") l = l.filter((a) => a.t === filtro);
    if (q)
      l = l.filter((a) =>
        (a.n + " " + a.h + " " + a.p + " " + a.legal + " " + TITULOS[a.t])
          .toLowerCase()
          .includes(q)
      );
    return l;
  }, [filtro, query]);

  const grupos = useMemo(() => {
    if (filtro !== "todos") return [];
    return ORDEN.map((t) => ({
      titulo: t,
      items: lista.filter((a) => a.t === t),
    })).filter((g) => g.items.length > 0);
  }, [lista, filtro]);

  const toggle = (n: string) =>
    setAbiertos((prev) => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });

  return (
    <div className={`min-h-screen transition-colors ${c.page}`}>
      {/* Botón destacado: cambiar fondo claro / oscuro */}
      <button
        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        aria-label="Cambiar entre fondo claro y oscuro"
        className={`fixed right-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border-2 px-4 py-2.5 text-sm font-bold shadow-lg transition-all hover:scale-105 ${
          c.dark
            ? "border-amber-400/60 bg-amber-400/15 text-amber-200 shadow-amber-500/10 hover:bg-amber-400/25"
            : "border-neutral-800 bg-neutral-900 text-white shadow-neutral-900/20 hover:bg-neutral-800"
        }`}
      >
        {c.dark ? "☀️ Ver fondo claro" : "🌙 Ver fondo oscuro"}
      </button>

      <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <Link
          href="/"
          className={`text-sm transition-colors ${c.faint} ${
            c.dark ? "hover:text-neutral-200" : "hover:text-neutral-900"
          }`}
        >
          ← Volver al inicio
        </Link>

        {/* Hero */}
        <header className="mt-8">
          <p className={`mb-2 text-xs font-medium uppercase tracking-widest ${c.faint}`}>
            360 Los Ríos · Guía legal
          </p>
          <h1 className={`text-4xl font-bold leading-tight tracking-tight sm:text-5xl ${c.h1}`}>
            Asociaciones Gremiales en Chile
          </h1>
          <p className={`mt-4 max-w-2xl text-lg leading-relaxed ${c.muted}`}>
            Todo lo que un socio necesita saber sobre el Decreto Ley N° 2.757:
            constitución, registro, directorio, patrimonio, fiscalización y
            disolución, explicado de forma clara y navegable.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "📄 Decreto Ley N° 2.757",
              "📅 Publicado: 04-07-1979",
              "🔄 Última versión: 14-03-2019",
              "🏛️ Min. del Trabajo y Previsión Social",
            ].map((m) => (
              <span
                key={m}
                className={`rounded-lg border ${c.border} ${c.card} px-3 py-1.5 text-xs ${
                  c.dark ? "text-neutral-300" : "text-neutral-700"
                }`}
              >
                {m}
              </span>
            ))}
          </div>
        </header>

        {/* KPIs */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {KPIS.map((k) => (
            <div key={k.lbl} className={`rounded-xl border ${c.border} ${c.card} p-4`}>
              <div className="text-xl">{k.ico}</div>
              <div className={`mt-1 text-lg font-extrabold leading-tight ${c.accentText}`}>
                {k.big}
              </div>
              <div className={`mt-1.5 text-xs leading-snug ${c.muted}`}>{k.lbl}</div>
            </div>
          ))}
        </div>

        {/* RESUMEN */}
        <section className="mt-14">
          <h2 className={`border-b ${c.border} pb-2 text-xl font-semibold`}>
            ✨ Lo esencial en un minuto
          </h2>
          <p className={`mt-2 text-sm ${c.muted}`}>
            Las ideas clave del DL 2.757 vigente, sin tecnicismos.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {RESUMEN.map((r) => (
              <div
                key={r.title}
                className={`rounded-xl border ${c.border} ${c.card} p-5 transition-colors ${c.cardHover}`}
              >
                <span
                  className={`inline-block rounded-md border ${c.accentBorder} ${c.accentBg} px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${c.accentText}`}
                >
                  {r.badge}
                </span>
                <h3 className="mt-3 text-base font-semibold">{r.title}</h3>
                <p className={`mt-1.5 text-sm leading-relaxed ${c.muted}`}>{r.text}</p>
              </div>
            ))}
          </div>
          <div
            className={`mt-4 flex items-start gap-3 rounded-xl border px-5 py-4 text-sm leading-relaxed ${
              c.dark
                ? "border-amber-500/25 bg-amber-500/5 text-amber-200/90"
                : "border-amber-400/50 bg-amber-50 text-amber-800"
            }`}
          >
            <span className="text-xl">💡</span>
            <div>
              <b>Dato útil:</b> los estatutos son la herramienta práctica más
              importante de la organización: definen fines, órganos, categorías de
              socios, derechos, obligaciones y destino de los bienes.
            </div>
          </div>
        </section>

        {/* RUTA */}
        <section className="mt-14">
          <h2 className={`border-b ${c.border} pb-2 text-xl font-semibold`}>
            🧭 Cómo crear una asociación gremial
          </h2>
          <p className={`mt-2 text-sm ${c.muted}`}>La ruta práctica, paso a paso.</p>
          <div className="mt-5 grid gap-3">
            {PASOS.map((s, i) => (
              <div
                key={s.t}
                className={`relative rounded-xl border ${c.border} ${c.card} py-4 pl-14 pr-5`}
              >
                <span
                  className={`absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border ${c.accentBorder} ${c.accentBg} text-sm font-bold ${c.accentText}`}
                >
                  {i + 1}
                </span>
                <h4 className="text-sm font-semibold">{s.t}</h4>
                <p className={`mt-1 text-sm leading-relaxed ${c.muted}`}>{s.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ARTICULADO */}
        <section className="mt-14">
          <h2 className={`border-b ${c.border} pb-2 text-xl font-semibold`}>
            📚 El articulado vigente, artículo por artículo
          </h2>
          <p className={`mt-2 text-sm ${c.muted}`}>
            Toca un artículo para ver el resumen simple y una lectura práctica. Filtra
            por tema o busca una palabra.
          </p>

          <div
            className={`mt-4 flex items-center gap-3 rounded-xl border-2 px-4 py-3.5 shadow-lg transition-colors ${
              c.dark
                ? "border-blue-500/40 bg-blue-500/5 shadow-blue-500/5 focus-within:border-blue-400 focus-within:bg-blue-500/10"
                : "border-blue-400 bg-blue-50 shadow-blue-500/5 focus-within:border-blue-500 focus-within:bg-blue-100"
            }`}
          >
            <span className="text-lg">🔎</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por palabra clave: directorio, disolución, cuotas, multa…"
              className={`flex-1 bg-transparent text-base outline-none ${
                c.dark
                  ? "text-neutral-100 placeholder:text-neutral-500"
                  : "text-neutral-900 placeholder:text-neutral-400"
              }`}
            />
            {query ? (
              <button
                onClick={() => setQuery("")}
                aria-label="Limpiar búsqueda"
                className={`rounded-full px-2 py-0.5 text-xs transition-colors ${
                  c.dark
                    ? "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                    : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
                }`}
              >
                ✕
              </button>
            ) : null}
            <span
              className={`hidden whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold sm:inline ${c.accentBg} ${c.accentText}`}
            >
              {lista.length} de {ARTICULOS.length}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {CHIPS.map((ch) => (
              <button
                key={ch.key}
                onClick={() => setFiltro(ch.key)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  filtro === ch.key ? c.chipActive : c.chipIdle
                }`}
              >
                {ch.label}
              </button>
            ))}
          </div>

          {lista.length === 0 && (
            <p className={`py-8 text-center text-sm ${c.faint}`}>
              Sin resultados. Prueba con otra palabra. 🤔
            </p>
          )}

          <div className="mt-5">
            {filtro === "todos"
              ? grupos.map((g) => (
                  <div key={g.titulo} className="mb-6">
                    <div className={`mb-2 flex items-center gap-3 border-b ${c.border} pb-1.5`}>
                      <span className={`text-xs font-bold uppercase tracking-wide ${c.accentText}`}>
                        {TITULOS[g.titulo]}
                      </span>
                      <span
                        className={`ml-auto rounded-full border ${c.border} ${c.inner} px-2.5 py-0.5 text-[11px] ${c.faint}`}
                      >
                        {g.items.length} art.
                      </span>
                    </div>
                    <div className="flex flex-col">
                      {g.items.map((a) => (
                        <ArticuloItem
                          key={a.n}
                          a={a}
                          open={abiertos.has(a.n) || query.trim() !== ""}
                          onToggle={() => toggle(a.n)}
                          q={query}
                          c={c}
                        />
                      ))}
                    </div>
                  </div>
                ))
              : lista.length > 0 && (
                  <div className="flex flex-col">
                    {lista.map((a) => (
                      <ArticuloItem
                        key={a.n}
                        a={a}
                        open={abiertos.has(a.n) || query.trim() !== ""}
                        onToggle={() => toggle(a.n)}
                        q={query}
                        c={c}
                      />
                    ))}
                  </div>
                )}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className={`border-b ${c.border} pb-2 text-xl font-semibold`}>
            ❓ Preguntas frecuentes de los socios
          </h2>
          <p className={`mt-2 text-sm ${c.muted}`}>
            Respuestas rápidas a las dudas más comunes.
          </p>
          <div className="mt-5 grid gap-2.5">
            {FAQS.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className={`group rounded-xl border ${c.border} ${c.card} px-5`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold marker:hidden">
                  {f.q}
                  <span
                    className={`text-lg group-open:hidden ${
                      c.dark ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    +
                  </span>
                  <span
                    className={`hidden text-lg group-open:inline ${
                      c.dark ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    –
                  </span>
                </summary>
                <p className={`mb-4 text-sm leading-relaxed ${c.muted}`}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* GLOSARIO */}
        <section className="mt-14">
          <h2 className={`border-b ${c.border} pb-2 text-xl font-semibold`}>
            📖 Glosario rápido
          </h2>
          <p className={`mt-2 text-sm ${c.muted}`}>Términos que aparecen en la ley.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {GLOSARIO.map((g) => (
              <div key={g.t} className={`rounded-xl border ${c.border} ${c.card} p-4`}>
                <b className={c.accentText}>{g.t}</b>
                <p className={`mt-1.5 text-sm leading-relaxed ${c.muted}`}>{g.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className={`mt-14 border-t ${c.border} pt-6 text-sm leading-relaxed ${c.faint}`}>
          <b className={c.dark ? "text-neutral-300" : "text-neutral-800"}>
            Decreto Ley N° 2.757
          </b>{" "}
          — Establece normas sobre asociaciones gremiales · Ministerio del Trabajo y
          Previsión Social · Última versión vigente desde el 14-03-2019.
          <br />
          Fuente oficial:{" "}
          <a
            href="https://www.bcn.cl/leychile/navegar?idNorma=6992"
            target="_blank"
            rel="noopener noreferrer"
            className={c.dark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}
          >
            Biblioteca del Congreso Nacional (BCN) — Ley Chile
          </a>
          .
          <p className={`mt-3 ${c.dark ? "text-neutral-600" : "text-neutral-500"}`}>
            Este documento es un resumen práctico con fines informativos y no reemplaza al
            texto legal ni constituye asesoría jurídica.
          </p>
        </footer>
      </main>
    </div>
  );
}
