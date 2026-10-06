// Fichas de proyectos sintetizadas en NotebookLM.
// lib/proyectos.json se genera con: node scripts/generar-proyectos.mjs
import data from "./proyectos.json";

export type Dato = {
  etiqueta?: string;
  resaltado?: string;
  texto: string;
};

export type CategoriaId = "cibs" | "bioeconomia" | "agro" | "tecnologia" | "clima" | "ecosistemas";

export type Proyecto = {
  slug: string;
  categoria: CategoriaId;
  titulo: string;
  resumen: string;
  datos: Dato[];
  beneficiarios: string;
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
};

export const proyectos = data as Proyecto[];

export const proyectosCibs = proyectos.filter((p) => p.categoria === "cibs");

export const CIBS_URL = "https://cibs.encsust4in4ble.earth";
export const SITE_URL = "https://www.encsust4in4ble.earth";
