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
  { badge: "Qué es", title: "Personas jurídicas sin fines de lucro", text: "El Código Civil reconoce dos especies: la corporación (unión de personas en torno a un fin común) y la fundación (un patrimonio afectado a un fin de interés general). Algunas tienen ambos caracteres." },
  { badge: "Nace", title: "Acta, municipio y Registro Civil", text: "Se constituye ante un ministro de fe, se deposita el acta en la secretaría municipal y la personalidad jurídica se perfecciona al inscribirse en el Registro Nacional de Personas Jurídicas Sin Fines de Lucro." },
  { badge: "Manda", title: "Directorio y asamblea", text: "La asociación se administra por un directorio de al menos tres miembros; su presidente la representa. La asamblea de asociados es el órgano que reúne a los miembros y adopta los acuerdos principales." },
  { badge: "Dinero", title: "Patrimonio que no se reparte", text: "Pueden recibir cuotas, donaciones y herencias y realizar actividades económicas, pero las rentas deben destinarse a sus fines: nunca se distribuyen entre los asociados." },
  { badge: "Control", title: "Fiscaliza el Ministerio de Justicia", text: "El Ministerio de Justicia y Derechos Humanos fiscaliza estas entidades. Deben llevar contabilidad y aprobar cada año una memoria y un balance." },
  { badge: "Ley 20.500", title: "Participación ciudadana", text: "La Ley 20.500 (2011) simplificó la creación de estas organizaciones, creó el Registro Nacional y reguló las organizaciones de interés público, el voluntariado y la participación en la gestión pública." },
];

const KPIS = [
  { ico: "🏛️", big: "2", lbl: "Especies: corporación y fundación" },
  { ico: "🏤", big: "30 días", lbl: "Plazo para depositar el acta en la municipalidad" },
  { ico: "🪪", big: "Registro Civil", lbl: "Donde nace la personalidad jurídica" },
  { ico: "🪑", big: "3+", lbl: "Miembros mínimos del directorio" },
  { ico: "⚖️", big: "Min. Justicia", lbl: "Organismo que fiscaliza" },
];

const PASOS = [
  { t: "Redacten el acta constitutiva y los estatutos", p: "El acto se otorga por escritura pública o privada suscrita ante notario, oficial del Registro Civil o funcionario municipal autorizado. Debe aprobar los estatutos y designar a las primeras autoridades." },
  { t: "Definan nombre, fines y patrimonio", p: "Los estatutos deben señalar nombre, domicilio, duración (si no es indefinida), fines, patrimonio inicial y los órganos de administración. El nombre no puede confundirse con el de otra entidad." },
  { t: "Depositen el acta en la secretaría municipal", p: "Una copia autorizada se deposita en la municipalidad del domicilio dentro de los 30 días siguientes al acto constitutivo." },
  { t: "Esperen la revisión del secretario municipal", p: "Dentro de 30 días el secretario municipal puede objetar por incumplimientos. Si los hay, la organización tiene un plazo para subsanarlos." },
  { t: "Inscríbanse en el Registro Nacional", p: "Sin objeciones (o ya subsanadas), los antecedentes se remiten al Servicio de Registro Civil, que inscribe la entidad. Con la inscripción nace la personalidad jurídica." },
  { t: "Operen y rindan cuentas", p: "Constituyan el directorio, lleven contabilidad y aprueben anualmente la memoria y el balance, quedando sujetas a la fiscalización del Ministerio de Justicia." },
];

const FAQS = [
  { q: "¿Cuál es la diferencia entre corporación y fundación?", a: "La corporación es una unión de personas que persiguen un fin común (su base son los socios); la fundación es un conjunto de bienes destinados a un fin de interés general (su base es el patrimonio). Una misma entidad puede tener ambos caracteres (Art. 545 CC)." },
  { q: "¿Cuándo nace la personalidad jurídica?", a: "Cuando el Servicio de Registro Civil inscribe a la entidad en el Registro Nacional de Personas Jurídicas Sin Fines de Lucro, tras el depósito del acta en la municipalidad y superada la etapa de objeciones (Art. 548 CC y Ley 20.500)." },
  { q: "¿Qué pasa si el secretario municipal objeta el acta?", a: "Puede objetar dentro de 30 días desde el depósito. La organización dispone de un plazo para subsanar las observaciones; si no lo hace, no se perfecciona el registro (Art. 548 CC)." },
  { q: "¿Quién representa legalmente a la entidad?", a: "El presidente del directorio la representa judicial y extrajudicialmente, con las atribuciones que fijen los estatutos (Art. 551 CC)." },
  { q: "¿Los miembros responden con su patrimonio personal?", a: "No. Lo que pertenece a la persona jurídica no pertenece a sus miembros, y de sus obligaciones responde solo su patrimonio, salvo que alguien se haya obligado expresamente (Art. 549 CC)." },
  { q: "¿Pueden hacer actividades económicas o repartir excedentes?", a: "Pueden realizar actividades económicas relacionadas con sus fines e invertir sus recursos, pero las rentas deben destinarse a sus fines y no pueden distribuirse entre los asociados (Art. 557-2 CC)." },
  { q: "¿Quién las fiscaliza y qué deben informar?", a: "El Ministerio de Justicia y Derechos Humanos. Deben llevar contabilidad y aprobar cada año una memoria y un balance, y entregar los antecedentes que se les requieran (Arts. 557 y 557-1 CC)." },
  { q: "¿Qué pasa con los bienes si se disuelve?", a: "Se destinan a lo que digan los estatutos. Si nada dicen, pasan al Estado con la obligación de emplearlos en fines análogos, según lo determine el Presidente de la República (Art. 561 CC)." },
];

const GLOSARIO = [
  { t: "Persona jurídica", d: "Ente ficticio capaz de tener derechos y obligaciones y de ser representado. Es distinto de las personas que lo integran." },
  { t: "Corporación", d: "Persona jurídica formada por una unión de personas en torno a fines de interés común." },
  { t: "Fundación", d: "Persona jurídica formada por la afectación de bienes a un fin determinado de interés general." },
  { t: "Estatutos", d: "Reglas internas que fijan nombre, fines, patrimonio y órganos de la entidad." },
  { t: "Directorio", d: "Órgano de al menos tres miembros que dirige y administra la asociación." },
  { t: "Asamblea", d: "Reunión de los asociados; adopta los acuerdos principales por mayoría." },
  { t: "Registro Nacional", d: "Registro de Personas Jurídicas Sin Fines de Lucro, a cargo del Servicio de Registro Civil, donde se inscriben estas entidades." },
  { t: "Organización de interés público", d: "Entidad sin fines de lucro cuya finalidad es promover el interés general; puede acceder a beneficios y fondos (Ley 20.500)." },
];

function Resaltar({ texto, q }: { texto: string; q: string }) {
  const term = q.trim();
  if (!term) return <>{texto}</>;
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
}: {
  a: Articulo;
  open: boolean;
  onToggle: () => void;
  q: string;
}) {
  return (
    <div className="border border-neutral-800 border-b-0 bg-neutral-900/30 first:rounded-t-xl last:rounded-b-xl last:border-b overflow-hidden">
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-neutral-900/70"
      >
        <span className="w-24 shrink-0 rounded-md border border-blue-500/30 bg-blue-500/10 py-1.5 text-center text-xs font-bold text-blue-300">
          {a.n}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold text-neutral-100">
            <Resaltar texto={a.h} q={q} />
          </span>
          <span
            className={`block text-xs text-neutral-400 ${
              open ? "" : "truncate"
            }`}
          >
            <Resaltar texto={a.p} q={q} />
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
            <b className="text-neutral-100">En simple:</b>{" "}
            <Resaltar texto={a.p} q={q} />
          </p>
          <p className="mt-3 rounded-lg border border-neutral-800 border-l-2 border-l-blue-400 bg-neutral-900/50 px-4 py-3 text-[13px] text-neutral-400">
            <b className="text-blue-200">Lectura legal:</b>{" "}
            <Resaltar texto={a.legal} q={q} />
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

  const toggle = (key: string) =>
    setAbiertos((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
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
            Corporaciones y Fundaciones
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Guía práctica de las personas jurídicas sin fines de lucro en Chile:
            qué son, cómo se constituyen y registran, cómo se gobiernan y cómo se
            disuelven, según el Código Civil y la Ley 20.500.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "📘 Código Civil, Título XXXIII (arts. 545-564)",
              "📄 Ley N° 20.500 (2011)",
              "🪪 Registro Civil e Identificación",
              "⚖️ Min. de Justicia y Derechos Humanos",
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
            Las ideas clave del régimen de corporaciones y fundaciones, sin
            tecnicismos.
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
              <b>Dato útil:</b> elegir entre corporación y fundación depende de qué
              prima en tu proyecto: si lo central son las personas que se reúnen,
              es una corporación; si lo central es un patrimonio destinado a un
              fin, es una fundación.
            </div>
          </div>
        </section>

        {/* RUTA */}
        <section className="mt-14">
          <h2 className="border-b border-neutral-800 pb-2 text-xl font-semibold">
            🧭 Cómo crear una corporación o fundación
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
            📚 El articulado, artículo por artículo
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Toca un artículo para ver el resumen simple y la lectura legal. Filtra
            por tema o busca una palabra.
          </p>

          <div className="mt-4 flex items-center gap-3 rounded-xl border-2 border-blue-500/40 bg-blue-500/5 px-4 py-3.5 shadow-lg shadow-blue-500/5 transition-colors focus-within:border-blue-400 focus-within:bg-blue-500/10">
            <span className="text-lg">🔎</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por palabra clave: directorio, registro, donaciones, disolución…"
              className="flex-1 bg-transparent text-base text-neutral-100 outline-none placeholder:text-neutral-500"
            />
            {query ? (
              <button
                onClick={() => setQuery("")}
                aria-label="Limpiar búsqueda"
                className="rounded-full bg-neutral-800 px-2 py-0.5 text-xs text-neutral-300 transition-colors hover:bg-neutral-700"
              >
                ✕
              </button>
            ) : null}
            <span className="hidden whitespace-nowrap rounded-full bg-blue-500/15 px-2.5 py-1 text-xs font-semibold text-blue-300 sm:inline">
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
                      {g.items.map((a, idx) => (
                        <ArticuloItem
                          key={a.n + idx}
                          a={a}
                          open={abiertos.has(a.n + idx) || query.trim() !== ""}
                          onToggle={() => toggle(a.n + idx)}
                          q={query}
                        />
                      ))}
                    </div>
                  </div>
                ))
              : lista.length > 0 && (
                  <div className="flex flex-col">
                    {lista.map((a, idx) => (
                      <ArticuloItem
                        key={a.n + idx}
                        a={a}
                        open={abiertos.has(a.n + idx) || query.trim() !== ""}
                        onToggle={() => toggle(a.n + idx)}
                        q={query}
                      />
                    ))}
                  </div>
                )}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="border-b border-neutral-800 pb-2 text-xl font-semibold">
            ❓ Preguntas frecuentes
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
          <b className="text-neutral-300">Corporaciones y fundaciones</b> — Código
          Civil, Título XXXIII «De las personas jurídicas» (arts. 545 a 564),
          modificado por la Ley N° 20.500 sobre Asociaciones y Participación
          Ciudadana en la Gestión Pública.
          <br />
          Fuentes oficiales:{" "}
          <a
            href="https://www.bcn.cl/leychile/navegar?idNorma=1023143"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            Ley 20.500 (BCN)
          </a>{" "}
          ·{" "}
          <a
            href="https://www.bcn.cl/leychile/navegar?idNorma=172986"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            Código Civil (BCN)
          </a>
          .
          <p className="mt-3 text-neutral-600">
            Este documento es un resumen práctico con fines informativos y no
            reemplaza al texto legal ni constituye asesoría jurídica.
          </p>
        </footer>
      </main>
    </div>
  );
}
