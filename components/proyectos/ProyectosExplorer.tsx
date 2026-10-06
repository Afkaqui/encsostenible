"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search, Users, ArrowUpRight } from "lucide-react";
import { CATEGORIAS, CIBS_URL, type CategoriaId, type Proyecto } from "@/lib/proyectos";
import DatoItem from "./DatoItem";

function normalizar(s: string) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

export function ProyectoCard({ p, enlaceCibs = true }: { p: Proyecto; enlaceCibs?: boolean }) {
  const [abierto, setAbierto] = useState(false);
  const esCibs = p.categoria === "cibs";

  return (
    <article
      id={p.slug}
      className={`flex flex-col rounded-2xl border p-5 sm:p-6 backdrop-blur-sm transition-colors duration-300 ${
        esCibs
          ? "border-enc-gold-500/30 bg-enc-gold-500/[0.05] hover:border-enc-gold-500/50"
          : "border-white/10 bg-white/[0.05] hover:border-enc-teal-300/40"
      }`}
    >
      <p className={`text-[11px] font-semibold uppercase tracking-widest mb-2 ${esCibs ? "text-enc-gold-500" : "text-enc-teal-300"}`}>
        {CATEGORIAS[p.categoria].nombre}
      </p>
      <h3 className="text-lg font-bold text-white leading-snug mb-3 font-display">{p.titulo}</h3>
      <p className={`text-sm text-white/65 leading-relaxed ${abierto ? "" : "line-clamp-4"}`}>{p.resumen}</p>

      {abierto && (
        <div className="mt-5 space-y-5">
          <div>
            <p className="text-xs uppercase tracking-wider text-white/40 mb-3">Datos clave e impacto</p>
            <ul className="space-y-2">
              {p.datos.map((d, i) => (
                <DatoItem key={i} dato={d} accent={esCibs ? "text-enc-gold-500" : "text-enc-teal-300"} />
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-white/40 mb-2 flex items-center gap-1.5">
              <Users size={13} /> Beneficiarios y alcance
            </p>
            <p className="text-sm text-white/65 leading-relaxed">{p.beneficiarios}</p>
          </div>
        </div>
      )}

      <div className="mt-auto pt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setAbierto(!abierto)}
          aria-expanded={abierto}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-enc-gold-500 transition-colors py-2"
        >
          {abierto ? "Ver menos" : "Ver ficha completa"}
          <ChevronDown size={16} className={`transition-transform ${abierto ? "rotate-180" : ""}`} />
        </button>
        {esCibs && enlaceCibs && (
          <a
            href={CIBS_URL}
            className="inline-flex items-center gap-1 text-sm font-semibold text-enc-gold-500 hover:text-enc-gold-300 transition-colors py-2"
          >
            Sitio CIBS <ArrowUpRight size={15} />
          </a>
        )}
      </div>
    </article>
  );
}

export default function ProyectosExplorer({ proyectos }: { proyectos: Proyecto[] }) {
  const [categoria, setCategoria] = useState<CategoriaId | "todas">("todas");
  const [query, setQuery] = useState("");

  const conteo = useMemo(() => {
    const c: Partial<Record<CategoriaId, number>> = {};
    proyectos.forEach((p) => (c[p.categoria] = (c[p.categoria] ?? 0) + 1));
    return c;
  }, [proyectos]);

  const visibles = useMemo(() => {
    const q = normalizar(query.trim());
    return proyectos.filter(
      (p) =>
        (categoria === "todas" || p.categoria === categoria) &&
        (!q || normalizar(`${p.titulo} ${p.resumen} ${p.beneficiarios}`).includes(q))
    );
  }, [proyectos, categoria, query]);

  const chip = (activo: boolean) =>
    `shrink-0 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
      activo
        ? "border-enc-gold-500 bg-enc-gold-500 text-enc-charcoal"
        : "border-white/15 bg-white/[0.04] text-white/75 hover:border-enc-gold-500/50 hover:text-white"
    }`;

  return (
    <div>
      <div className="flex flex-col gap-4 mb-8">
        <label className="relative block max-w-md">
          <span className="sr-only">Buscar proyectos</span>
          <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por tema, región o cadena…"
            className="w-full rounded-full border border-white/15 bg-white/[0.06] py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/40 focus:border-enc-gold-500/60 focus:outline-none"
          />
        </label>

        <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          <button type="button" className={chip(categoria === "todas")} onClick={() => setCategoria("todas")}>
            Todas · {proyectos.length}
          </button>
          {(Object.keys(CATEGORIAS) as CategoriaId[]).map((id) => (
            <button key={id} type="button" className={chip(categoria === id)} onClick={() => setCategoria(id)}>
              {CATEGORIAS[id].nombre} · {conteo[id] ?? 0}
            </button>
          ))}
        </div>

        {categoria !== "todas" && <p className="text-sm text-white/50">{CATEGORIAS[categoria].descripcion}</p>}
      </div>

      {visibles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-start">
          {visibles.map((p) => (
            <ProyectoCard key={p.slug} p={p} />
          ))}
        </div>
      ) : (
        <p className="text-center text-white/50 py-16">No hay proyectos que coincidan con la búsqueda.</p>
      )}
    </div>
  );
}
