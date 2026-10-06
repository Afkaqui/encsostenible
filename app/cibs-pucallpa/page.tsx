import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ArrowRight,
  ArrowUpRight,
  Sun,
  QrCode,
  Recycle,
  Landmark,
  MapPin,
  Mail,
  Users,
} from "lucide-react";
import CibsHeader from "@/components/cibs/CibsHeader";
import CibsFooter from "@/components/cibs/CibsFooter";
import { ProyectoCard } from "@/components/proyectos/ProyectosExplorer";
import {
  CATEGORIAS,
  CONTACTO_CIBS as CONTACTO,
  SITE_URL,
  proyectos,
  proyectosCibs,
  type CategoriaId,
} from "@/lib/proyectos";
import ImageRender from "@/src/images/proyectos/008_cibs_energy.png";

const conteoPorCategoria = (Object.keys(CATEGORIAS) as CategoriaId[]).map((id) => ({
  id,
  ...CATEGORIAS[id],
  total: proyectos.filter((p) => p.categoria === id).length,
}));

const cifras = [
  { valor: "200", unidad: "familias", texto: "productoras beneficiadas directamente" },
  { valor: "+1,000", unidad: "personas", texto: "alcanzadas de forma indirecta" },
  { valor: "+15%", unidad: "precio", texto: "comercial proyectado por lote trazable" },
  { valor: "+25%", unidad: "margen", texto: "neto proyectado para las familias" },
  { valor: "240%", unidad: "deducción", texto: "tributaria en I+D+i vía Ley 30309" },
  { valor: "88.07", unidad: "/ 100", texto: "calificación técnica en Premios Verdes 2026" },
];

const pilares = [
  {
    icon: Sun,
    titulo: "Poscosecha estandarizada",
    texto:
      "Protocolo de 11 actividades desde la cosecha en parcelas agroforestales hasta el despacho. Secado solar en marquesinas protegidas con indicadores de humedad para evitar rehumectación y mezcla de lotes.",
  },
  {
    icon: QrCode,
    titulo: "Pasaporte digital por lote",
    texto:
      "Cada lote recibe un pasaporte QR georreferenciado emitido desde la plataforma EYWA, con captura offline-first para zonas sin conectividad y evidencia de origen libre de deforestación (EUDR).",
  },
  {
    icon: Recycle,
    titulo: "Bioeconomía circular",
    texto:
      "La cáscara, el mucílago y otros residuos se transforman en biochar, compost y biomateriales. Cada piloto proyecta remover 50 t de CO₂e al año y reducir 40% el uso de agroquímicos.",
  },
  {
    icon: Landmark,
    titulo: "Ingeniería financiera para I+D+i",
    texto:
      "El escudo fiscal de la Ley 30309 (deducción de 240%) reduce hasta 70% el costo real del riesgo privado en innovación. El modelo proyecta una TIR de 27% y un VAN de S/ 2.24 millones.",
  },
];

const beneficiarios = [
  "Pequeños y medianos productores",
  "Asociaciones y cooperativas cacaoteras",
  "Comunidades nativas",
  "Mujeres y jóvenes rurales",
  "Compradores de cacao fino de aroma",
  "Inversionistas y empresas que innovan con Ley 30309",
];

export default function CibsPucallpaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-enc-forest-900 via-enc-charcoal to-enc-forest-900">
      <CibsHeader />

      <main id="inicio">
        {/* Hero */}
        <section className="pt-28 sm:pt-32 pb-14 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-enc-gold-500/40 bg-enc-gold-500/10 px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-enc-gold-500 mb-6">
                <Award size={14} />
                Top 500 · Premios Verdes 2026 · Green Tech
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-display">
                El bosque en pie, convertido en el mejor negocio de la Amazonía
              </h1>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                CIBS Pucallpa es un hub Green Tech de bioeconomía en Ucayali que integra agricultura de
                precisión, trazabilidad digital por lote y valorización de biomasa para que el cacao y los
                bioactivos amazónicos lleguen a mercados B2B de alto valor con evidencia verificable.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#modelo"
                  className="inline-flex items-center justify-center gap-2 bg-enc-gold-500 hover:bg-enc-gold-600 text-enc-charcoal px-6 py-3.5 rounded-full font-bold transition-colors"
                >
                  Conocer el modelo <ArrowRight size={18} />
                </a>
                <a
                  href={CONTACTO}
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-enc-teal-300/60 text-white px-6 py-3.5 rounded-full font-semibold transition-colors"
                >
                  <Mail size={17} /> Conversemos
                </a>
              </div>
            </div>

            <figure className="relative">
              <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src={ImageRender}
                  alt="Render conceptual del centro CIBS con biodigestor, paneles solares y acopio de biomasa"
                  fill
                  priority
                  placeholder="blur"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[50%_40%]"
                />
              </div>
              <figcaption className="mt-3 text-xs text-white/40 text-center lg:text-left">
                Render conceptual del centro: energía renovable a partir de residuos agrícolas.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Cifras */}
        <section aria-label="Cifras clave" className="border-y border-white/10 bg-white/[0.03]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {cifras.map((c) => (
              <div key={c.texto}>
                <p className="text-3xl sm:text-4xl font-bold text-white font-display tabular-nums">
                  {c.valor}
                  <span className="text-base sm:text-lg text-enc-gold-500 font-semibold ml-1">{c.unidad}</span>
                </p>
                <p className="text-xs sm:text-sm text-white/55 mt-1.5 leading-snug">{c.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reto y respuesta */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-enc-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">El reto</p>
            <h2 className="text-2xl font-bold text-white mb-4 font-display">Deforestar todavía parece más rentable</h2>
            <p className="text-white/65 leading-relaxed">
              Sin evidencia de origen, con poscosecha empírica y calidad variable, el productor amazónico vende
              barato y pierde acceso a mercados que hoy exigen cero deforestación. Las innovaciones que
              cambiarían esto se quedan en el “valle de la muerte” por falta de financiamiento.
            </p>
          </div>
          <div className="rounded-2xl border border-enc-teal-300/30 bg-enc-teal-600/10 p-6 sm:p-8">
            <p className="text-enc-teal-300 text-xs font-semibold uppercase tracking-widest mb-3">Nuestra respuesta</p>
            <h2 className="text-2xl font-bold text-white mb-4 font-display">Un nodo territorial que demuestra lo contrario</h2>
            <p className="text-white/65 leading-relaxed">
              CIBS articula protocolos de calidad, pasaportes digitales por lote, biochar y el escudo fiscal de la
              Ley 30309 con capital privado. El objetivo: demostrar que el bosque en pie es financieramente
              superior al bosque deforestado, y escalar startups de impacto sobre esa base.
            </p>
          </div>
        </section>

        {/* Modelo */}
        <section id="modelo" className="scroll-mt-24 border-t border-white/10 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-enc-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">Modelo</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">Cuatro líneas de trabajo integradas</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pilares.map((p) => (
                <div key={p.titulo} className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                  <div className="w-11 h-11 rounded-xl bg-enc-gold-500/15 text-enc-gold-500 flex items-center justify-center mb-5">
                    <p.icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 font-display">{p.titulo}</h3>
                  <p className="text-sm text-white/65 leading-relaxed">{p.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Territorio y beneficiarios */}
        <section id="territorio" className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-enc-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">Territorio</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-display">Desde Ucayali, replicable en toda la Amazonía</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={20} className="text-enc-gold-500 shrink-0 mt-0.5" />
                <p className="text-white/70 leading-relaxed">
                  <strong className="text-white">Nodo central en Pucallpa, Ucayali</strong>, con foco inicial en el
                  corredor productivo Irazola – San Alejandro.
                </p>
              </li>
              <li className="flex gap-3">
                <MapPin size={20} className="text-enc-teal-300 shrink-0 mt-0.5" />
                <p className="text-white/70 leading-relaxed">
                  <strong className="text-white">Nodo de expansión en San Ramón, Chanchamayo (Junín)</strong>,
                  bajo una arquitectura modular pensada para replicarse en otras cuencas amazónicas.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-enc-gold-500 text-xs font-semibold uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Users size={14} /> Para quién
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-display">Beneficiarios y aliados</h2>
            <div className="flex flex-wrap gap-2">
              {beneficiarios.map((b) => (
                <span key={b} className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm text-white/80">
                  {b}
                </span>
              ))}
            </div>
            <p className="text-sm text-white/50 mt-6 leading-relaxed">
              El modelo genera empleo calificado con enfoque de género (17 empleos directos, 60% mujeres) y
              proyecta capacitar a 600 personas de comunidades rurales.
            </p>
          </div>
        </section>

        {/* Proyectos CIBS */}
        <section id="fichas" className="scroll-mt-24 border-t border-white/10 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-enc-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">Fichas técnicas</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">Los proyectos que componen CIBS</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {proyectosCibs.map((p) => (
                <ProyectoCard key={p.slug} p={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Portafolio */}
        <section id="portafolio" className="scroll-mt-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <p className="text-enc-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">Portafolio</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {proyectos.length} iniciativas del ecosistema
                </h2>
                <p className="text-white/60 mt-3 leading-relaxed">
                  CIBS es parte de un portafolio más amplio de proyectos en bioeconomía, agroindustria, tecnología,
                  clima y ecosistemas de innovación en Perú y América Latina.
                </p>
              </div>
              <Link
                href="/proyectos"
                className="inline-flex items-center justify-center gap-2 bg-enc-gold-500 hover:bg-enc-gold-600 text-enc-charcoal px-6 py-3 rounded-full font-bold transition-colors shrink-0"
              >
                Ver todos los proyectos <ArrowRight size={17} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {conteoPorCategoria.map((c) => (
                <Link
                  key={c.id}
                  href={`/proyectos?categoria=${c.id}`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:border-enc-gold-500/50 transition-colors"
                >
                  <p className="text-3xl font-bold text-white font-display tabular-nums">{c.total}</p>
                  <p className="text-sm font-semibold text-white/85 mt-1 group-hover:text-enc-gold-500 transition-colors">
                    {c.nombre}
                  </p>
                  <p className="text-xs text-white/50 mt-1.5 leading-relaxed">{c.descripcion}</p>
                </Link>
              ))}
            </div>
            <p className="text-white/35 text-xs text-center mt-10 max-w-2xl mx-auto leading-relaxed">
              Fichas sintetizadas de los expedientes de cada proyecto. Las cifras económicas y ambientales son
              proyecciones de dichos documentos.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-5 font-display">
            ¿Productor, comprador o inversionista?
          </h2>
          <p className="text-white/65 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Buscamos organizaciones productoras, compradores de cacao fino de aroma y empresas que quieran
            canalizar su inversión en I+D+i con beneficio tributario hacia la Amazonía.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CONTACTO}
              className="inline-flex items-center justify-center gap-2 bg-enc-gold-500 hover:bg-enc-gold-600 text-enc-charcoal px-7 py-3.5 rounded-full font-bold transition-colors"
            >
              <Mail size={18} /> Escribir a CIBS
            </a>
            <a
              href={`${SITE_URL}/calculadora-fiscal?tab=simulador`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-enc-teal-300/60 text-white px-7 py-3.5 rounded-full font-semibold transition-colors"
            >
              Simular beneficio Ley 30309 <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <CibsFooter />
    </div>
  );
}
