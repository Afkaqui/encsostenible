"use client";

import { useEffect, useMemo, useState } from "react";
import IntranetGuard from "@/components/IntranetGuard";
import IntranetNavbar from "@/components/IntranetNavbar";
import {
  Search,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  X,
  Award,
  SlidersHorizontal,
  Users,
  Building2,
} from "lucide-react";

type Proyecto = {
  ranking: number | null;
  id: string;
  proyecto: string;
  categoria: string;
  pais: string;
  ciudad: string;
  tipo: string;
  participante: string;
  organizacion: string;
  email: string;
  telefono: string;
  descripcion: string;
  resumen_ejecutivo: string;
  url_ficha: string;
  foto: string;
};

type DataDoc = {
  fuente: { nombre: string; url: string; capturado: string };
  total: number;
  filtros: { categorias: string[]; paises: string[]; tipos: string[] };
  conteo: { por_categoria: Record<string, number>; por_pais: Record<string, number> };
  proyectos: Proyecto[];
};

const PAGE_SIZE = 24;

// Color por categoría (acento de la tarjeta)
const CAT_COLORS: Record<string, string> = {
  "Economía circular": "bg-emerald-500/80",
  "Desarrollo humano": "bg-amber-500/80",
  "Ecosistemas terrestres": "bg-green-600/80",
  "Agricultura y producción de alimentos": "bg-lime-500/80",
  "Ciudades y comunidades resilientes": "bg-orange-500/80",
  "Green Tech": "bg-cyan-500/80",
  "Agua Dulce": "bg-sky-500/80",
  "Ecosistemas marinos": "bg-blue-500/80",
  "Energía": "bg-yellow-500/80",
  "Finanzas": "bg-violet-500/80",
};

function catColor(cat: string) {
  return CAT_COLORS[cat] ?? "bg-white/25";
}

export default function PremiosVerdesPage() {
  const [data, setData] = useState<DataDoc | null>(null);
  const [error, setError] = useState(false);

  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("");
  const [pais, setPais] = useState("");
  const [tipo, setTipo] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [detalle, setDetalle] = useState<Proyecto | null>(null);

  useEffect(() => {
    fetch("/data/premios-verdes-500.json")
      .then((r) => {
        if (!r.ok) throw new Error("fetch");
        return r.json();
      })
      .then((d: DataDoc) => setData(d))
      .catch(() => setError(true));
  }, []);

  const filtrados = useMemo(() => {
    if (!data) return [];
    const q = query.trim().toLowerCase();
    return data.proyectos.filter((p) => {
      if (categoria && p.categoria !== categoria) return false;
      if (pais && p.pais !== pais) return false;
      if (tipo && p.tipo !== tipo) return false;
      if (q) {
        const hay = `${p.proyecto} ${p.participante} ${p.organizacion} ${p.pais} ${p.ciudad} ${p.descripcion}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [data, query, categoria, pais, tipo]);

  // Reinicia la paginación cuando cambian los filtros
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [query, categoria, pais, tipo]);

  const hayFiltros = query || categoria || pais || tipo;
  const limpiar = () => {
    setQuery("");
    setCategoria("");
    setPais("");
    setTipo("");
  };

  return (
    <IntranetGuard>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
        <IntranetNavbar />

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

          {/* Cabecera */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-9 h-9 rounded-xl bg-green-500/15 flex items-center justify-center text-green-400">
                <Award size={18} />
              </div>
              <p className="text-white/35 text-xs uppercase tracking-widest font-medium">
                Premios Verdes · 500 Mejores Proyectos 2026
              </p>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Base de proyectos socioambientales
            </h1>
            <p className="text-white/50 text-sm max-w-2xl">
              Los proyectos de Latinoamérica y el Caribe reconocidos en la edición 2026.
              Filtra por categoría, país o tipo de participante, o busca por nombre.
            </p>
          </div>

          {/* Estados de carga / error */}
          {error && (
            <div className="rounded-2xl border border-red-400/25 bg-red-500/5 p-6 text-red-300 text-sm">
              No se pudo cargar la base de datos de proyectos.
            </div>
          )}
          {!data && !error && (
            <div className="text-white/40 text-sm py-16 text-center">Cargando proyectos…</div>
          )}

          {data && (
            <>
              {/* Panel de filtros */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 mb-6 space-y-4">
                {/* Búsqueda */}
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar por proyecto, participante, ciudad…"
                    className="w-full bg-slate-900/60 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-green-400/40 transition-colors"
                  />
                </div>

                {/* Selects */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <FilterSelect
                    label="Categoría"
                    value={categoria}
                    onChange={setCategoria}
                    options={data.filtros.categorias}
                    counts={data.conteo.por_categoria}
                  />
                  <FilterSelect
                    label="País"
                    value={pais}
                    onChange={setPais}
                    options={data.filtros.paises}
                    counts={data.conteo.por_pais}
                  />
                  <FilterSelect
                    label="Tipo"
                    value={tipo}
                    onChange={setTipo}
                    options={data.filtros.tipos}
                  />
                </div>

                {/* Resumen + limpiar */}
                <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
                  <p className="text-white/45 text-xs flex items-center gap-1.5">
                    <SlidersHorizontal size={12} />
                    <span className="text-green-400 font-semibold">{filtrados.length}</span>
                    {" "}de {data.total} proyectos
                  </p>
                  {hayFiltros && (
                    <button
                      onClick={limpiar}
                      className="flex items-center gap-1 text-xs text-white/45 hover:text-white/80 transition-colors"
                    >
                      <X size={12} /> Limpiar filtros
                    </button>
                  )}
                </div>
              </div>

              {/* Chips rápidos de categoría */}
              <div className="flex gap-2 overflow-x-auto pb-3 mb-4 -mx-1 px-1">
                <button
                  onClick={() => setCategoria("")}
                  className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    categoria === ""
                      ? "bg-green-500/20 text-green-400 border border-green-400/30"
                      : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  Todas
                </button>
                {data.filtros.categorias.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategoria(categoria === c ? "" : c)}
                    className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                      categoria === c
                        ? "bg-green-500/20 text-green-400 border border-green-400/30"
                        : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {c}
                    <span className="ml-1.5 text-white/30">{data.conteo.por_categoria[c]}</span>
                  </button>
                ))}
              </div>

              {/* Grid de tarjetas */}
              {filtrados.length === 0 ? (
                <div className="text-center py-16 text-white/40 text-sm">
                  No hay proyectos que coincidan con los filtros.
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {filtrados.slice(0, visible).map((p) => (
                      <ProyectoCard key={p.id} p={p} onOpen={() => setDetalle(p)} />
                    ))}
                  </div>

                  {visible < filtrados.length && (
                    <div className="text-center mt-8">
                      <button
                        onClick={() => setVisible((v) => v + PAGE_SIZE)}
                        className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-green-400/40 text-white/80 text-sm font-medium transition-all"
                      >
                        Ver más ({filtrados.length - visible} restantes)
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </main>

        <footer className="shrink-0 border-t border-white/8 py-4 px-4 text-center">
          <p className="text-white/20 text-xs">Área restringida · Datos de fuente pública (premiosverdes.org)</p>
        </footer>
      </div>

      {/* Modal de detalle */}
      {detalle && <DetalleModal p={detalle} onClose={() => setDetalle(null)} />}
    </IntranetGuard>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
  counts,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  counts?: Record<string, number>;
}) {
  return (
    <label className="block">
      <span className="text-white/40 text-[11px] uppercase tracking-wider font-medium mb-1 block">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-green-400/40 transition-colors appearance-none cursor-pointer"
      >
        <option value="" className="bg-slate-800">
          Todos
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-slate-800">
            {o}
            {counts ? ` (${counts[o] ?? 0})` : ""}
          </option>
        ))}
      </select>
    </label>
  );
}

function ProyectoCard({ p, onOpen }: { p: Proyecto; onOpen: () => void }) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <div className="group bg-white/[0.06] border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-green-400/30 hover:bg-white/[0.09] transition-all duration-300">
      {/* Imagen */}
      <button
        onClick={onOpen}
        className="relative h-40 w-full overflow-hidden bg-slate-800 text-left"
        aria-label={`Ver detalle de ${p.proyecto}`}
      >
        {imgOk && p.foto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={p.foto}
            alt={p.proyecto}
            loading="lazy"
            onError={() => setImgOk(false)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/15">
            <Award size={40} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        <span
          className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-semibold text-white ${catColor(p.categoria)}`}
        >
          {p.categoria}
        </span>
        {p.ranking != null && (
          <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] bg-black/55 text-white/80 border border-white/10">
            #{p.ranking}
          </span>
        )}
      </button>

      {/* Cuerpo */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-white text-sm font-semibold leading-snug line-clamp-2 mb-1.5 min-h-[2.5rem]">
          {p.proyecto}
        </h3>

        <p className="text-white/40 text-xs flex items-center gap-1 mb-2">
          <MapPin size={11} className="shrink-0" />
          {p.pais}
          {p.ciudad ? ` · ${p.ciudad}` : ""}
        </p>

        <p className="text-white/55 text-xs leading-relaxed line-clamp-3 flex-grow">
          {p.descripcion}
        </p>

        <p className="text-white/35 text-[11px] mt-3 flex items-center gap-1 truncate">
          {p.tipo === "ORGANIZACIONAL" ? <Building2 size={11} /> : <Users size={11} />}
          <span className="truncate">{p.organizacion || p.participante}</span>
        </p>

        {/* Acciones */}
        <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-white/8">
          <button
            onClick={onOpen}
            className="flex-1 text-center text-xs font-medium text-green-400 hover:text-green-300 py-1.5 rounded-lg hover:bg-green-500/10 transition-all"
          >
            Ver detalle
          </button>
          {p.email && (
            <a
              href={`mailto:${p.email}`}
              title={p.email}
              className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all"
            >
              <Mail size={14} />
            </a>
          )}
          {p.url_ficha && (
            <a
              href={p.url_ficha}
              target="_blank"
              rel="noopener noreferrer"
              title="Ficha oficial"
              className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function DetalleModal({ p, onClose }: { p: Proyecto; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 border border-white/15 rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera con imagen */}
        <div className="relative h-48 bg-slate-900">
          {p.foto && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.foto} alt={p.proyecto} className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/30 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/70 transition-all"
            aria-label="Cerrar"
          >
            <X size={16} />
          </button>
          <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold text-white ${catColor(p.categoria)}`}>
              {p.categoria}
            </span>
            {p.ranking != null && (
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-black/55 text-white/80 border border-white/10">
                Ranking #{p.ranking}
              </span>
            )}
          </div>
        </div>

        {/* Contenido */}
        <div className="p-5 sm:p-6 space-y-4">
          <h2 className="text-white text-lg font-bold leading-snug">{p.proyecto}</h2>

          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-white/55">
            <span className="flex items-center gap-1">
              <MapPin size={12} /> {p.pais}{p.ciudad ? ` · ${p.ciudad}` : ""}
            </span>
            <span className="flex items-center gap-1">
              {p.tipo === "ORGANIZACIONAL" ? <Building2 size={12} /> : <Users size={12} />}
              {p.participante}
            </span>
          </div>

          {p.organizacion && (
            <p className="text-white/50 text-xs">
              <span className="text-white/35">Organización:</span> {p.organizacion}
            </p>
          )}

          {p.descripcion && (
            <div>
              <h4 className="text-green-400 text-xs font-semibold uppercase tracking-wider mb-1">
                Descripción del proyecto
              </h4>
              <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">{p.descripcion}</p>
            </div>
          )}

          {p.resumen_ejecutivo && p.resumen_ejecutivo !== p.descripcion && (
            <div>
              <h4 className="text-green-400 text-xs font-semibold uppercase tracking-wider mb-1">
                Resumen ejecutivo
              </h4>
              <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">{p.resumen_ejecutivo}</p>
            </div>
          )}

          {/* Contacto */}
          <div className="border-t border-white/10 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {p.email && (
              <a href={`mailto:${p.email}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-green-400 transition-colors">
                <Mail size={14} className="shrink-0" /> <span className="truncate">{p.email}</span>
              </a>
            )}
            {p.telefono && (
              <span className="flex items-center gap-2 text-sm text-white/70">
                <Phone size={14} className="shrink-0" /> {p.telefono}
              </span>
            )}
          </div>

          {p.url_ficha && (
            <a
              href={p.url_ficha}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-green-400 hover:text-green-300 transition-colors"
            >
              Ver ficha oficial en premiosverdes.org
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
