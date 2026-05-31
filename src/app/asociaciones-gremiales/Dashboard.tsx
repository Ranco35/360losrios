"use client";

import { useMemo, useState } from "react";
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

function ArticuloItem({
  a,
  open,
  onToggle,
}: {
  a: Articulo;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-neutral-800 border-b-0 bg-neutral-900/30 first:rounded-t-xl last:rounded-b-xl last:border-b overflow-hidden">
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-neutral-900/70"
      >
        <span className="w-20 shrink-0 rounded-md border border-blue-500/30 bg-blue-500/10 py-1.5 text-center text-xs font-bold text-blue-300">
          {a.n}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold text-neutral-100">
            {a.h}
          </span>
          <span
            className={`block text-xs text-neutral-400 ${
              open ? "" : "truncate"
            }`}
          >
            {a.p}
          </span>
        </span>
        <span
          className={`shrink-0 text-xs text-blue-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      {open && (
        <div className="bg-neutral-950/60 px-4 pb-4 text-sm leading-relaxed text-neutral-300">
          <p className="m-0">
            <b className="text-neutral-100">En simple:</b> {a.p}
          </p>
          <p className="mt-3 rounded-lg border border-neutral-800 border-l-2 border-l-blue-400 bg-neutral-900/50 px-4 py-3 text-[13px] text-neutral-400">
            <b className="text-blue-200">Texto legal:</b> {a.legal}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  const [filtro, setFiltro] = useState<"todos" | TituloKey>("todos");
  const [query, setQuery] = useState("");
  const [abiertos, setAbiertos] = useState<Set<string>>(new Set());

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
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <Link
          href="/"
          className="text-sm text-neutral-500 transition-colors hover:text-neutral-200"
        >
          ← Volver al inicio
        </Link>

        {/* Hero */}
        <header className="mt-8">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-neutral-500">
            360 Los Ríos · Guía legal
          </p>
          <h1 className="bg-gradient-to-br from-white to-blue-300/70 bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent sm:text-5xl">
            Asociaciones Gremiales en Chile
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-400">
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
                className="rounded-lg border border-neutral-800 bg-neutral-900/50 px-3 py-1.5 text-xs text-neutral-300"
              >
                {m}
              </span>
            ))}
          </div>
        </header>

        {/* KPIs */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {KPIS.map((k) => (
            <div
              key={k.lbl}
              className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-4"
            >
              <div className="text-xl">{k.ico}</div>
              <div className="mt-1 text-lg font-extrabold leading-tight text-blue-300">
                {k.big}
              </div>
              <div className="mt-1.5 text-xs leading-snug text-neutral-400">
                {k.lbl}
              </div>
            </div>
          ))}
        </div>

        {/* RESUMEN */}
        <section className="mt-14">
          <h2 className="border-b border-neutral-800 pb-2 text-xl font-semibold">
            ✨ Lo esencial en un minuto
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Las ideas clave del DL 2.757 vigente, sin tecnicismos.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {RESUMEN.map((r) => (
              <div
                key={r.title}
                className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-5 transition-colors hover:border-neutral-600"
              >
                <span className="inline-block rounded-md border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-blue-300">
                  {r.badge}
                </span>
                <h3 className="mt-3 text-base font-semibold">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-500/25 bg-amber-500/5 px-5 py-4 text-sm leading-relaxed text-amber-200/90">
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
          <h2 className="border-b border-neutral-800 pb-2 text-xl font-semibold">
            🧭 Cómo crear una asociación gremial
          </h2>
          <p className="mt-2 text-sm text-neutral-400">La ruta práctica, paso a paso.</p>
          <div className="mt-5 grid gap-3">
            {PASOS.map((s, i) => (
              <div
                key={s.t}
                className="relative rounded-xl border border-neutral-800 bg-neutral-900/30 py-4 pl-14 pr-5"
              >
                <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/15 text-sm font-bold text-blue-300">
                  {i + 1}
                </span>
                <h4 className="text-sm font-semibold">{s.t}</h4>
                <p className="mt-1 text-sm leading-relaxed text-neutral-400">{s.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ARTICULADO */}
        <section className="mt-14">
          <h2 className="border-b border-neutral-800 pb-2 text-xl font-semibold">
            📚 El articulado vigente, artículo por artículo
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Toca un artículo para ver el resumen simple y una lectura práctica. Filtra
            por tema o busca una palabra.
          </p>

          <div className="mt-4 flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/30 px-3 py-2.5">
            <span>🔎</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar: 'directorio', 'disolución', 'cuotas', 'federación'..."
              className="flex-1 bg-transparent text-sm text-neutral-100 outline-none placeholder:text-neutral-600"
            />
            <span className="whitespace-nowrap text-xs text-neutral-500">
              {lista.length} de {ARTICULOS.length}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {CHIPS.map((c) => (
              <button
                key={c.key}
                onClick={() => setFiltro(c.key)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  filtro === c.key
                    ? "border-blue-500/40 bg-blue-500/15 text-blue-300"
                    : "border-neutral-800 bg-neutral-900/30 text-neutral-400 hover:border-neutral-600 hover:text-neutral-200"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {lista.length === 0 && (
            <p className="py-8 text-center text-sm text-neutral-500">
              Sin resultados. Prueba con otra palabra. 🤔
            </p>
          )}

          <div className="mt-5">
            {filtro === "todos"
              ? grupos.map((g) => (
                  <div key={g.titulo} className="mb-6">
                    <div className="mb-2 flex items-center gap-3 border-b border-neutral-800 pb-1.5">
                      <span className="text-xs font-bold uppercase tracking-wide text-blue-300">
                        {TITULOS[g.titulo]}
                      </span>
                      <span className="ml-auto rounded-full border border-neutral-800 bg-neutral-900/50 px-2.5 py-0.5 text-[11px] text-neutral-500">
                        {g.items.length} art.
                      </span>
                    </div>
                    <div className="flex flex-col">
                      {g.items.map((a) => (
                        <ArticuloItem
                          key={a.n}
                          a={a}
                          open={abiertos.has(a.n)}
                          onToggle={() => toggle(a.n)}
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
                        open={abiertos.has(a.n)}
                        onToggle={() => toggle(a.n)}
                      />
                    ))}
                  </div>
                )}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="border-b border-neutral-800 pb-2 text-xl font-semibold">
            ❓ Preguntas frecuentes de los socios
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Respuestas rápidas a las dudas más comunes.
          </p>
          <div className="mt-5 grid gap-2.5">
            {FAQS.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="group rounded-xl border border-neutral-800 bg-neutral-900/30 px-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold marker:hidden">
                  {f.q}
                  <span className="text-lg text-blue-400 group-open:hidden">+</span>
                  <span className="hidden text-lg text-blue-400 group-open:inline">
                    –
                  </span>
                </summary>
                <p className="mb-4 text-sm leading-relaxed text-neutral-400">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* GLOSARIO */}
        <section className="mt-14">
          <h2 className="border-b border-neutral-800 pb-2 text-xl font-semibold">
            📖 Glosario rápido
          </h2>
          <p className="mt-2 text-sm text-neutral-400">Términos que aparecen en la ley.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {GLOSARIO.map((g) => (
              <div
                key={g.t}
                className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-4"
              >
                <b className="text-blue-300">{g.t}</b>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">{g.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 border-t border-neutral-800 pt-6 text-sm leading-relaxed text-neutral-500">
          <b className="text-neutral-300">Decreto Ley N° 2.757</b> — Establece normas
          sobre asociaciones gremiales · Ministerio del Trabajo y Previsión Social ·
          Última versión vigente desde el 14-03-2019.
          <br />
          Fuente oficial:{" "}
          <a
            href="https://www.bcn.cl/leychile/navegar?idNorma=6992"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            Biblioteca del Congreso Nacional (BCN) — Ley Chile
          </a>
          .
          <p className="mt-3 text-neutral-600">
            Este documento es un resumen práctico con fines informativos y no reemplaza al
            texto legal ni constituye asesoría jurídica.
          </p>
        </footer>
      </main>
    </div>
  );
}
