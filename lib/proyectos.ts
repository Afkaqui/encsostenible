// Iniciativas sintetizadas en NotebookLM.
// lib/proyectos.json se genera con: node scripts/generar-proyectos.mjs
import data from "./proyectos.json";

export const CIBS_URL = "https://cibs.encsust4in4ble.earth";
export const SITE_URL = "https://www.encsust4in4ble.earth";

export type Dato = {
  etiqueta?: string;
  resaltado?: string;
  texto: string;
};

export type Ficha = {
  titulo: string;
  resumen: string;
  datos: Dato[];
  beneficiarios: string;
};

export type CategoriaId = "cibs" | "bioeconomia" | "agro" | "tecnologia" | "clima" | "ecosistemas" | "politicas";

export type Proyecto = Ficha & {
  slug: string;
  categoria: CategoriaId;
  tipo: string;
  regiones: string[];
  // Otras fichas de la misma iniciativa (componentes o versiones del expediente)
  documentos: Ficha[];
};

export const CATEGORIAS: Record<CategoriaId, { nombre: string; descripcion: string }> = {
  cibs: {
    nombre: "Ecosistema CIBS Pucallpa",
    descripcion: "Hub de bioeconomía, trazabilidad y finanzas de innovación en Ucayali.",
  },
  bioeconomia: {
    nombre: "Bioeconomía y Amazonía",
    descripcion: "Bionegocios, cadenas de valor del bosque y gobernanza territorial.",
  },
  agro: {
    nombre: "Agroindustria y transferencia tecnológica",
    descripcion: "Inversión pública, CITE y paquetes tecnológicos para cadenas productivas.",
  },
  tecnologia: {
    nombre: "Tecnología, datos e IA",
    descripcion: "Plataformas SaaS, inteligencia artificial y salud digital.",
  },
  clima: {
    nombre: "Clima, agua y economía circular",
    descripcion: "Resiliencia hídrica, carbono, química verde y residuos.",
  },
  ecosistemas: {
    nombre: "Ecosistemas de innovación",
    descripcion: "Hubs, gremios, programas formativos y alianzas multiactor.",
  },
  politicas: {
    nombre: "Políticas públicas y desarrollo",
    descripcion: "Marcos normativos, gestión pública, formación y desarrollo de capacidades.",
  },
};

export const proyectos = data as Proyecto[];

export const proyectosCibs = proyectos.filter((p) => p.categoria === "cibs");

export function getProyecto(slug: string) {
  return proyectos.find((p) => p.slug === slug);
}

// Valores únicos para los filtros, ordenados alfabéticamente
export const REGIONES = [...new Set(proyectos.flatMap((p) => p.regiones))].sort((a, b) => a.localeCompare(b, "es"));
export const TIPOS = [...new Set(proyectos.map((p) => p.tipo))].sort((a, b) => a.localeCompare(b, "es"));

// Descripción breve para metadatos (≤ 160 caracteres, cortada en palabra)
export function descripcionCorta(texto: string, max = 158) {
  if (texto.length <= max) return texto;
  return texto.slice(0, texto.lastIndexOf(" ", max - 1)).replace(/[,;:.\s]+$/, "") + "…";
}

export const CONTACTO_CIBS =
  "mailto:contacto@encsust4in4ble.earth?subject=" + encodeURIComponent("CIBS Pucallpa — Quiero sumarme");
