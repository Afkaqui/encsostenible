// Genera lib/proyectos.json a partir de las fichas exportadas de NotebookLM.
//
// Uso:  node scripts/generar-proyectos.mjs [ruta/a/proyectos.md] [--verbose]
// Por defecto lee ../cibs-data/proyectos.md (fuera del repo).
//
// Cada entrada de INICIATIVAS agrupa una o más fichas (por prefijo de título):
// la primera es la ficha principal y el resto se publican como documentos de la
// misma iniciativa, para no repetir proyectos. Las fichas que no coinciden con
// ninguna entrada quedan fuera (planes políticos y fichas de personas naturales,
// hoy excluidos a propósito); el script las lista con --verbose.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = process.argv.slice(2).find((a) => !a.startsWith("--")) ?? path.resolve(ROOT, "../cibs-data/proyectos.md");
const OUT = path.join(ROOT, "lib/proyectos.json");

// Tipos de iniciativa (filtro "Tipo")
const T = {
  hub: "Hub y ecosistema",
  inversion: "Inversión pública",
  startup: "Startup y plataforma",
  territorial: "Proyecto productivo y territorial",
  programa: "Programa y formación",
  convocatoria: "Convocatoria y evento",
  politica: "Política pública y estudio",
};

// { fichas: [prefijos], categoria, tipo, titulo? (corto), regiones? (si la detección no basta) }
const INICIATIVAS = [
  // Ecosistema CIBS Pucallpa
  { fichas: ["Hub de Innovación Sostenible CIBS Pucallpa", "Hub de Innovación Sostenible: CIB Pucallpa"], categoria: "cibs", tipo: T.hub, titulo: "Hub de Innovación Sostenible CIBS Pucallpa", regiones: ["Ucayali", "Junín"] },
  { fichas: ["CIBS Pucallpa Cacao Amazónico"], categoria: "cibs", tipo: T.territorial, regiones: ["Ucayali"] },
  { fichas: ["Optimización de la Cadena de Valor del Cacao Nativo en Pucallpa"], categoria: "cibs", tipo: T.territorial, titulo: "Cacao Nativo Pucallpa: Agricultura de Precisión y Bioeconomía Circular", regiones: ["Ucayali"] },

  // Bioeconomía y Amazonía
  { fichas: ["Bootcamp de Bionegocios de Impacto"], categoria: "bioeconomia", tipo: T.programa },
  { fichas: ["Plataforma Amazónica de MRV Digital"], categoria: "bioeconomia", tipo: T.territorial, titulo: "Plataforma Amazónica de MRV Digital y Gobernanza Territorial Indígena" },
  { fichas: ["Transición Energética Solar"], categoria: "bioeconomia", tipo: T.territorial },
  { fichas: ["Trazabilidad del Cacao Nativo Amazonas"], categoria: "bioeconomia", tipo: T.territorial },
  { fichas: ["Innovaciones tecnológicas en la fabricación de hoja ahumada"], categoria: "bioeconomia", tipo: T.territorial, titulo: "Hoja Ahumada de Caucho Natural — San Martín" },
  { fichas: ["AWA Yanahuara"], categoria: "bioeconomia", tipo: T.territorial },
  { fichas: ["Belleza que Impacta"], categoria: "bioeconomia", tipo: T.startup },
  { fichas: ["Proyecto BioRepelente Moquegua"], categoria: "bioeconomia", tipo: T.territorial, titulo: "BioRepelente Moquegua: Aceites Esenciales contra el Aedes aegypti" },
  { fichas: ["InNature Lab 2025"], categoria: "bioeconomia", tipo: T.convocatoria },
  { fichas: ["ForestTech & Capital 2026"], categoria: "bioeconomia", tipo: T.convocatoria },

  // Agroindustria y transferencia tecnológica
  {
    fichas: [
      "Proyecto de Inversión CUI N.° 2261544: Transferencia Tecnológica",
      "Proyecto de Inversión CUI N.° 2261544: Implementación de Paquetes",
      "Proyecto de Inversión para la Absorción Tecnológica en las Cadenas Productivas de Orégano y Palta",
      'Proyecto de Inversión: "Instalación de servicios tecnológicos en la cadena productiva de uva',
    ],
    categoria: "agro", tipo: T.inversion, titulo: "CITEagroindustrial Moquegua — Orégano, Palta y Uva (CUI 2261544)", regiones: ["Moquegua"],
  },
  {
    fichas: [
      "MEJORAMIENTO DE LOS SERVICIOS TECNOLÓGICOS DEL CENTRO DE INNOVACIÓN TECNOLÓGICA DEL CUERO",
      "Mejoramiento de los servicios tecnológicos del centro de innovación tecnológica del cuero",
      "Absorción de Nuevos Procesos Tecnológicos (Transferencia Tecnológica) – ITP Red CITE",
      "Proyecto de Inversión CUI N.° 2275261: “Mejoramiento de los servicios tecnológicos",
      "Proyecto de Inversión: Mejoramiento de los Servicios Tecnológicos del CITEccal",
      'Proyecto de Inversión "Mejoramiento de los servicios tecnológicos del centro de innovación tecnológica del cue',
      "Proyecto de Inversión CUI N.° 2275261: “Mejoramiento de los Servicios Tecnológicos",
      "Mejoramiento de los servicios tecnológicos del Centro de Innovación Tecnológica del cuero",
    ],
    categoria: "agro", tipo: T.inversion, titulo: "CITEccal Lima — Cuero y Calzado (CUI 2275261)", regiones: ["Lima"],
  },
  { fichas: ["Proyecto de Transformación Productiva Moquegua 5.0"], categoria: "agro", tipo: T.hub },
  { fichas: ["Agroindustria 4.0"], categoria: "agro", tipo: T.territorial },
  { fichas: ["Red Nacional de Biotecnología Agrícola"], categoria: "agro", tipo: T.hub },
  { fichas: ["Portafolio de Agroemprendimientos GANEMOS"], categoria: "agro", tipo: T.territorial },
  { fichas: ["Celdas de Media Tensión"], categoria: "agro", tipo: T.startup },
  { fichas: ["Convocatoria 2026: Cooperación e innovación"], categoria: "agro", tipo: T.convocatoria, titulo: "FONTAGRO — Convocatoria 2026 para Sistemas Agroalimentarios" },

  // Tecnología, datos e IA
  { fichas: ["EYWA DataOps"], categoria: "tecnologia", tipo: T.startup },
  { fichas: ["EYWA Agro"], categoria: "tecnologia", tipo: T.startup, titulo: "EYWA Agro: Pasaportes Digitales por Lote" },
  { fichas: ["LegalShield MYPE"], categoria: "tecnologia", tipo: T.startup },
  { fichas: ["LUCY: Innovación"], categoria: "tecnologia", tipo: T.startup },
  { fichas: ["Programa Navegación en Salud 2026"], categoria: "tecnologia", tipo: T.programa },
  { fichas: ["Startus"], categoria: "tecnologia", tipo: T.startup },
  { fichas: ["Proyecto Piloto Kotosh"], categoria: "tecnologia", tipo: T.territorial },

  // Clima, agua y economía circular
  { fichas: ["Cosechando Niebla"], categoria: "clima", tipo: T.territorial },
  { fichas: ["Proyecto CARANCHO"], categoria: "clima", tipo: T.territorial, regiones: ["Argentina"] },
  { fichas: ["BioCircula Sur"], categoria: "clima", tipo: T.territorial },
  { fichas: ["Hoja de Ruta de Economía Circular en el Sector Turismo"], categoria: "clima", tipo: T.politica },
  { fichas: ["Alianza Global del Hacer"], categoria: "clima", tipo: T.hub },
  { fichas: ["Programa de Soluciones Integrales de Infraestructura y Defensas Ribereñas"], categoria: "clima", tipo: T.inversion },
  { fichas: ["Herramientas de Análisis Sistémico de la Durabilidad"], categoria: "clima", tipo: T.politica },

  // Ecosistemas de innovación
  { fichas: ["ATIDS S.A.C. BIC", "ATIDS Latam"], categoria: "ecosistemas", tipo: T.hub },
  { fichas: ["GENES Perú: Orquestación", "GENES Perú – Gremio Nacional"], categoria: "ecosistemas", tipo: T.hub, titulo: "GENES Perú — Gremio Nacional de Emprendedores Sostenibles" },
  { fichas: ["Hacking the Planet"], categoria: "ecosistemas", tipo: T.programa },
  { fichas: ["Hub de Innovación Abierta y Transferencia Tecnológica - UNHEVAL"], categoria: "ecosistemas", tipo: T.hub },
  { fichas: ["Proyecto Innovandes Cusco", "Dinamismo del Ecosistema Regional InnovaAndes Cusco"], categoria: "ecosistemas", tipo: T.hub, titulo: "InnovaAndes Cusco — Ecosistema Regional de Innovación (DER Cusco)", regiones: ["Cusco"] },
  { fichas: ["Programa Desarrolladores de Negocios de Impacto"], categoria: "ecosistemas", tipo: T.programa },
  { fichas: ["Semana Ambiental Universitaria Piura"], categoria: "ecosistemas", tipo: T.convocatoria },
  { fichas: ["Proyecto Aulas del Futuro"], categoria: "ecosistemas", tipo: T.programa },
  { fichas: ["ARS Lab"], categoria: "ecosistemas", tipo: T.hub },
  { fichas: ["PAD Summit Comercial"], categoria: "ecosistemas", tipo: T.convocatoria },

  // Políticas públicas y desarrollo
  { fichas: ["Proyecto Perú Potencia"], categoria: "politicas", tipo: T.politica, regiones: ["Perú (nacional)"] },
  { fichas: ["Marco de Incentivos Tributarios y Estabilidad Jurídica"], categoria: "politicas", tipo: T.politica, regiones: ["Perú (nacional)"] },
  { fichas: ["Mega Penal Challapalca II"], categoria: "politicas", tipo: T.inversion, regiones: ["Tacna"] },
  { fichas: ["Liderazgo Ciudadano para un Futuro Próspero"], categoria: "politicas", tipo: T.programa, regiones: ["Perú (nacional)"] },
  { fichas: ["Diplomado en Gestión Pública Estratégica"], categoria: "politicas", tipo: T.programa, regiones: ["Perú (nacional)"] },
  { fichas: ["Programa de Aceleración de Empleabilidad (12 Semanas)"], categoria: "politicas", tipo: T.programa, titulo: "Programa de Aceleración de Empleabilidad Ejecutiva", regiones: ["América Latina"] },
];

// Palabra clave en el texto → región (se buscan como palabra completa)
const REGIONES = [
  ["Ucayali", "Ucayali"], ["Pucallpa", "Ucayali"],
  ["Moquegua", "Moquegua"], ["Ilo", "Moquegua"],
  ["Lima", "Lima"], ["Rímac", "Lima"], ["Independencia", "Lima"], ["Pueblo Libre", "Lima"],
  ["Cusco", "Cusco"], ["La Convención", "Cusco"],
  ["Madre de Dios", "Madre de Dios"], ["Tambopata", "Madre de Dios"],
  ["San Martín", "San Martín"], ["Amazonas", "Amazonas"],
  ["Junín", "Junín"], ["Chanchamayo", "Junín"],
  ["Piura", "Piura"], ["Huánuco", "Huánuco"], ["Kotosh", "Huánuco"],
  ["Ica", "Ica"], ["Chincha", "Ica"], ["Arequipa", "Arequipa"], ["Yanahuara", "Arequipa"],
  ["Loreto", "Loreto"], ["Puno", "Puno"], ["Tacna", "Tacna"], ["Cajamarca", "Cajamarca"],
  ["Lambayeque", "Lambayeque"], ["La Libertad", "La Libertad"], ["Ayacucho", "Ayacucho"],
  ["Apurímac", "Apurímac"], ["Áncash", "Áncash"], ["Pasco", "Pasco"], ["Tumbes", "Tumbes"],
  ["Argentina", "Argentina"],
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
      const datos = seccion(b, "Datos Claves e Impacto")
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
        titulo: limpiar(titulo),
        resumen: limpiar(seccion(b, "Resumen del Proyecto")),
        datos,
        beneficiarios: limpiar(seccion(b, "Beneficiarios y Alcance")),
      };
    });
}

function detectarRegiones(fichas) {
  const texto = fichas.map((f) => `${f.titulo} ${f.resumen} ${f.beneficiarios}`).join(" ");
  const encontradas = new Set();
  for (const [clave, region] of REGIONES) {
    if (new RegExp(`(^|[^\\p{L}])${clave}([^\\p{L}]|$)`, "u").test(texto)) encontradas.add(region);
  }
  if (encontradas.size) return [...encontradas];
  if (/Am[ée]rica Latina|Latinoam[ée]rica|LATAM|regi[óo]n andin/i.test(texto)) return ["América Latina"];
  return ["Perú (nacional)"];
}

const fichas = parsear(fs.readFileSync(SRC, "utf8"));
const usadas = new Set();
const proyectos = [];

for (const ini of INICIATIVAS) {
  const grupo = [];
  for (const prefijo of ini.fichas) {
    const i = fichas.findIndex((f, idx) => !usadas.has(idx) && f.titulo.startsWith(limpiar(prefijo)));
    if (i === -1) {
      console.warn(`⚠  Sin coincidencia para: "${prefijo}"`);
      continue;
    }
    usadas.add(i);
    grupo.push(fichas[i]);
  }
  if (!grupo.length) continue;

  const [principal, ...documentos] = grupo;
  const titulo = limpiar(ini.titulo ?? principal.titulo);
  proyectos.push({
    slug: slugify(titulo),
    categoria: ini.categoria,
    tipo: ini.tipo,
    regiones: ini.regiones ?? detectarRegiones(grupo),
    ...principal,
    titulo,
    documentos,
  });
}

fs.writeFileSync(OUT, JSON.stringify(proyectos, null, 2) + "\n");

const omitidas = fichas.filter((_, i) => !usadas.has(i)).map((f) => f.titulo);
console.log(`✓ ${proyectos.length} iniciativas (${usadas.size} fichas) → ${path.relative(ROOT, OUT)}`);
console.log(`  ${omitidas.length} fichas sin publicar.`);
if (process.argv.includes("--verbose")) omitidas.forEach((t) => console.log("   – " + t));
