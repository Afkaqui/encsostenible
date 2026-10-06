"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Search, X } from "lucide-react";
import { CATEGORIAS, type CategoriaId, type Proyecto } from "@/lib/proyectos";

function normalizar(s: string) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

export function ProyectoCard({ p }: { p: Proyecto }) {
  const esCibs = p.categoria === "cibs";
  return (
    <Link
      href={`/proyectos/${p.slug}`}
      className={`group flex flex-col rounded-2xl border p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 ${
        esCibs
          ? "border-enc-gold-500/30 bg-enc-gold-500/[0.05] hover:border-enc-gold-500/60"
          : "border-white/10 bg-white/[0.05] hover:border-enc-teal-300/50"
      }`}
    >
      <p className={`text-[11px] font-semibold uppercase tracking-widest mb-2 ${esCibs ? "text-enc-gold-500" : "text-enc-teal-300"}`}>
        {CATEGORIAS[p.categoria].nombre}
      </p>
      <h3 className="text-lg font-bold text-white leading-snug mb-3 font-display group-hover:text-enc-gold-300 transition-colors">
        {p.titulo}
      </h3>
      <p className="text-sm text-white/65 leading-relaxed line-clamp-3 mb-4">{p.resumen}</p>

      <div className="mt-auto flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full border border-white/15 px-2.5 py-1 text-white/70">{p.tipo}</span>
        <span className="inline-flex items-center gap-1 text-white/50">
          <MapPin size={12} />
          {p.regiones.slice(0, 2).join(" · ")}
          {p.regiones.length > 2 && ` +${p.regiones.length - 2}`}
        </span>
      </div>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 group-hover:text-enc-gold-500 transition-colors">
        Ver proyecto <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

type Filtros = { categoria: CategoriaId | ""; region: string; tipo: string; q: string };
const VACIO: Filtros = { categoria: "", region: "", tipo: "", q: "" };

export default function ProyectosExplorer({
  proyectos,
  regiones,
  tipos,
}: {
  proyectos: Proyecto[];
  regiones: string[];
  tipos: string[];
}) {
  const [f, setF] = useState<Filtros>(VACIO);

  // Los filtros viven en la URL (?categoria=&region=&tipo=&q=) para poder compartir una vista
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const categoria = sp.get("categoria") ?? "";
    setF({
      categoria: categoria in CATEGORIAS ? (categoria as CategoriaId) : "",
      region: sp.get("region") ?? "",
      tipo: sp.get("tipo") ?? "",
      q: sp.get("q") ?? "",
    });
  }, []);

  const actualizar = (cambio: Partial<Filtros>) => {
    const nuevo = { ...f, ...cambio };
    setF(nuevo);
    const sp = new URLSearchParams();
    (Object.keys(nuevo) as (keyof Filtros)[]).forEach((k) => nuevo[k] && sp.set(k, nuevo[k]));
    const qs = sp.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  };

  const visibles = useMemo(() => {
    const q = normalizar(f.q.trim());
    return proyectos.filter(
      (p) =>
        (!f.categoria || p.categoria === f.categoria) &&
        (!f.region || p.regiones.includes(f.region)) &&
        (!f.tipo || p.tipo === f.tipo) &&
        (!q || normalizar(`${p.titulo} ${p.resumen} ${p.beneficiarios} ${p.regiones.join(" ")} ${p.tipo}`).includes(q))
    );
  }, [proyectos, f]);

  const conteo = useMemo(() => {
    const c: Partial<Record<CategoriaId, number>> = {};
    proyectos.forEach((p) => (c[p.categoria] = (c[p.categoria] ?? 0) + 1));
    return c;
  }, [proyectos]);

  const hayFiltros = Boolean(f.categoria || f.region || f.tipo || f.q);

  const chip = (activo: boolean) =>
    `shrink-0 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
      activo
        ? "border-enc-gold-500 bg-enc-gold-500 text-enc-charcoal"
        : "border-white/15 bg-white/[0.04] text-white/75 hover:border-enc-gold-500/50 hover:text-white"
    }`;
  const select =
    "w-full rounded-full border border-white/15 bg-enc-forest-900 py-3 pl-4 pr-10 text-sm text-white focus:border-enc-gold-500/60 focus:outline-none";

  return (
    <div>
      <div className="flex flex-col gap-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-3">
          <label className="relative block">
            <span className="sr-only">Buscar proyectos</span>
            <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="search"
              value={f.q}
              onChange={(e) => actualizar({ q: e.target.value })}
              placeholder="Buscar por tema, cadena, región o aliado…"
              className="w-full rounded-full border border-white/15 bg-white/[0.06] py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/40 focus:border-enc-gold-500/60 focus:outline-none"
            />
          </label>
          <label className="block md:w-56">
            <span className="sr-only">Filtrar por región</span>
            <select value={f.region} onChange={(e) => actualizar({ region: e.target.value })} className={select}>
              <option value="">Todas las regiones</option>
              {regiones.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </label>
          <label className="block md:w-64">
            <span className="sr-only">Filtrar por tipo de iniciativa</span>
            <select value={f.tipo} onChange={(e) => actualizar({ tipo: e.target.value })} className={select}>
              <option value="">Todos los tipos</option>
              {tipos.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          <button type="button" className={chip(!f.categoria)} onClick={() => actualizar({ categoria: "" })}>
            Todas · {proyectos.length}
          </button>
          {(Object.keys(CATEGORIAS) as CategoriaId[]).map((id) => (
            <button key={id} type="button" className={chip(f.categoria === id)} onClick={() => actualizar({ categoria: id })}>
              {CATEGORIAS[id].nombre} · {conteo[id] ?? 0}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-white/50">
          <p aria-live="polite">
            {visibles.length === proyectos.length
              ? `${proyectos.length} iniciativas`
              : `${visibles.length} de ${proyectos.length} iniciativas`}
            {f.categoria && ` · ${CATEGORIAS[f.categoria].descripcion}`}
          </p>
          {hayFiltros && (
            <button
              type="button"
              onClick={() => actualizar(VACIO)}
              className="inline-flex items-center gap-1 text-white/70 hover:text-enc-gold-500 transition-colors"
            >
              <X size={14} /> Limpiar filtros
            </button>
          )}
        </div>
      </div>

      {visibles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {visibles.map((p) => (
            <ProyectoCard key={p.slug} p={p} />
          ))}
        </div>
      ) : (
        <p className="text-center text-white/50 py-16">No hay proyectos que coincidan con los filtros.</p>
      )}
    </div>
  );
}
