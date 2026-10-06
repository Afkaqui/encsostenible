// Genera lib/proyectos.json a partir de las fichas exportadas de NotebookLM.
//
// Uso:  node scripts/generar-proyectos.mjs [ruta/a/proyectos.md]
// Por defecto lee ../cibs-data/proyectos.md (fuera del repo).
//
// Solo se publican las fichas listadas en CURADURIA (por prefijo de título).
// Las fichas políticas, de personas naturales, duplicadas o de programas de
// terceros se omiten a propósito; el script lista lo que quedó fuera.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = process.argv.slice(2).find((a) => !a.startsWith("--")) ?? path.resolve(ROOT, "../cibs-data/proyectos.md");
const OUT = path.join(ROOT, "lib/proyectos.json");

// [prefijo del título, categoría, título corto opcional]
// Si hay duplicados en el .md, gana la primera ficha que coincide.
const CURADURIA = [
  // Ecosistema CIBS Pucallpa (alimentan también cibs.encsust4in4ble.earth)
  ["Hub de Innovación Sostenible CIBS Pucallpa", "cibs", "Hub de Innovación Sostenible CIBS Pucallpa"],
  ["Hub de Innovación Sostenible: CIB Pucallpa", "cibs", "CIBS Pucallpa: Ingeniería Financiera y Ley 30309"],
  ["CIBS Pucallpa Cacao Amazónico", "cibs"],
  ["Optimización de la Cadena de Valor del Cacao Nativo en Pucallpa", "cibs", "Cacao Nativo Pucallpa: Agricultura de Precisión y Bioeconomía Circular"],

  // Bioeconomía y Amazonía
  ["Bootcamp de Bionegocios de Impacto", "bioeconomia"],
  ["Plataforma Amazónica de MRV Digital", "bioeconomia", "Plataforma Amazónica de MRV Digital y Gobernanza Territorial Indígena"],
  ["Transición Energética Solar", "bioeconomia"],
  ["Trazabilidad del Cacao Nativo Amazonas", "bioeconomia"],
  ["Innovaciones tecnológicas en la fabricación de hoja ahumada", "bioeconomia", "Hoja Ahumada de Caucho Natural — San Martín"],
  ["AWA Yanahuara", "bioeconomia"],
  ["Belleza que Impacta", "bioeconomia"],
  ["Proyecto BioRepelente Moquegua", "bioeconomia", "BioRepelente Moquegua: Aceites Esenciales contra el Aedes aegypti"],

  // Agroindustria y transferencia tecnológica
  ["Proyecto de Inversión CUI N.° 2261544: Transferencia Tecnológica", "agro", "CITEagroindustrial Moquegua — Orégano y Palta (CUI 2261544)"],
  ["MEJORAMIENTO DE LOS SERVICIOS TECNOLÓGICOS DEL CENTRO DE INNOVACIÓN TECNOLÓGICA DEL CUERO", "agro", "CITEccal Lima — Cuero y Calzado (CUI 2275261)"],
  ["Proyecto de Transformación Productiva Moquegua 5.0", "agro"],
  ["Agroindustria 4.0", "agro"],
  ["Red Nacional de Biotecnología Agrícola", "agro"],
  ["Portafolio de Agroemprendimientos GANEMOS", "agro"],
  ["Celdas de Media Tensión", "agro"],

  // Tecnología, datos e IA
  ["EYWA DataOps", "tecnologia"],
  ["EYWA Agro", "tecnologia", "EYWA Agro: Pasaportes Digitales por Lote"],
  ["LegalShield MYPE", "tecnologia"],
  ["LUCY: Innovación", "tecnologia"],
  ["Programa Navegación en Salud 2026", "tecnologia"],
  ["Startus", "tecnologia"],
  ["Proyecto Piloto Kotosh", "tecnologia"],

  // Clima, agua y economía circular
  ["Cosechando Niebla", "clima"],
  ["Proyecto CARANCHO", "clima"],
  ["BioCircula Sur", "clima"],
  ["Hoja de Ruta de Economía Circular en el Sector Turismo", "clima"],
  ["Alianza Global del Hacer", "clima"],
  ["Programa de Soluciones Integrales de Infraestructura y Defensas Ribereñas", "clima"],

  // Ecosistemas de innovación y alianzas
  ["ATIDS S.A.C. BIC", "ecosistemas"],
  ["GENES Perú: Orquestación", "ecosistemas"],
  ["Hacking the Planet", "ecosistemas"],
  ["Hub de Innovación Abierta y Transferencia Tecnológica - UNHEVAL", "ecosistemas"],
  ["Proyecto Innovandes Cusco", "ecosistemas"],
  ["Programa Desarrolladores de Negocios de Impacto", "ecosistemas"],
  ["Semana Ambiental Universitaria Piura", "ecosistemas"],
  ["Proyecto Aulas del Futuro", "ecosistemas"],
];

function limpiar(texto) {
  return texto
    .replace(/\\\\\(\\ge\\\\\)/g, "≥")
    .replace(/\\\(\\ge\\\)/g, "≥")
    .replace(/\\\$/g, "$")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/(^|[^*])\*([^*\s][^*]*?)\*/g, "$1$2")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(s) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 70)
    .replace(/-$/, "");
}

// Devuelve el texto entre "**Etiqueta:**" y la siguiente etiqueta en negrita de sección.
function seccion(bloque, etiqueta) {
  const re = new RegExp(`\\*\\*${etiqueta}:?\\*\\*:?([\\s\\S]*?)(?=\\n\\s*\\*\\*[^*\\n]+:\\*\\*|\\n---|$)`);
  const m = bloque.match(re);
  return m ? m[1].trim() : "";
}

function parsear(md) {
  return md
    .replace(/\r/g, "")
    .split(/^## /m)
    .slice(1)
    .map((b) => {
      const titulo = b.split("\n")[0].trim();
      const datosRaw = seccion(b, "Datos Claves e Impacto");
      const datos = datosRaw
        .split("\n")
        .filter((l) => /^\s*[*-]\s+/.test(l))
        .map((l) => {
          const linea = l.replace(/^\s*[*-]\s+/, "");
          const m = linea.match(/^\*\*(.+?)\*\*(:?)\s*(.*)$/);
          if (!m) return { texto: limpiar(linea) };
          // "**Etiqueta:** texto" → etiqueta; "**7 bionegocios** y evaluados…" → inicio resaltado
          if (m[1].trim().endsWith(":") || m[2]) {
            return { etiqueta: limpiar(m[1]).replace(/:$/, ""), texto: limpiar(m[3]) };
          }
          return { resaltado: limpiar(m[1]), texto: limpiar(m[3]) };
        });
      return {
        titulo,
        resumen: limpiar(seccion(b, "Resumen del Proyecto")),
        datos,
        beneficiarios: limpiar(seccion(b, "Beneficiarios y Alcance")),
      };
    });
}

const fichas = parsear(fs.readFileSync(SRC, "utf8"));
const usadas = new Set();
const proyectos = [];

for (const [prefijo, categoria, tituloCorto] of CURADURIA) {
  const i = fichas.findIndex((f, idx) => !usadas.has(idx) && f.titulo.startsWith(prefijo));
  if (i === -1) {
    console.warn(`⚠  Sin coincidencia para: "${prefijo}"`);
    continue;
  }
  usadas.add(i);
  const f = fichas[i];
  const titulo = limpiar(tituloCorto ?? f.titulo);
  proyectos.push({ slug: slugify(titulo), categoria, ...f, titulo });
}

fs.writeFileSync(OUT, JSON.stringify(proyectos, null, 2) + "\n");

const omitidas = fichas.filter((_, i) => !usadas.has(i)).map((f) => f.titulo);
console.log(`✓ ${proyectos.length} proyectos publicados → ${path.relative(ROOT, OUT)}`);
console.log(`  ${omitidas.length} fichas omitidas (políticas, personales, duplicadas o de terceros).`);
if (process.argv.includes("--verbose")) omitidas.forEach((t) => console.log("   – " + t));
