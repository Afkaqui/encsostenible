import Link from "next/link";
import PageHeader from "@/components/principal/PageHeader";
import Footer from "@/components/principal/Footer";
import {
  Gauge,
  Stethoscope,
  Building2,
  Presentation,
  ArrowRight,
  Check,
} from "lucide-react";

const ofertas = [
  {
    icon: Gauge,
    nombre: "Diagnóstico Ejecutivo de Readiness",
    paraQuien: "Iniciativa activa con brechas aún no priorizadas.",
    duracion: "7 días",
    entregables: [
      "Entrevista de diagnóstico",
      "Scorecard de 10 dimensiones",
      "Semáforo y mapa de evidencia",
      "Recomendación go / no-go",
      "Hoja de ruta a 90 días",
    ],
    cta: { label: "Solicitar evaluación", href: "/diagnostico-readiness" },
    destacado: true,
  },
  {
    icon: Stethoscope,
    nombre: "Clínica Proyecto Bankable",
    paraQuien: "Proyecto formulado que se presentará a un fondo, jurado o comité.",
    duracion: "4 – 6 semanas",
    entregables: [
      "Propuesta de valor y modelo económico",
      "Teoría de cambio y evidencia",
      "Gobernanza y responsables",
      "Manejo de objeciones",
      "Pitch y dossier de decisión",
    ],
    cta: { label: "Preparar mi proyecto", href: "/#contacto" },
  },
  {
    icon: Building2,
    nombre: "Arquitectura Integral de Impacto",
    paraQuien: "Iniciativa multiactor o territorial de alta complejidad.",
    duracion: "8 – 12 semanas",
    entregables: [
      "Diagnóstico y modelo económico",
      "Estructura financiera",
      "KPI / MRV y trazabilidad",
      "Data room y dossier de inversión",
      "Preparación de comité",
    ],
    cta: { label: "Solicitar alcance", href: "/#contacto" },
  },
  {
    icon: Presentation,
    nombre: "Advisory, Research & Workshops",
    paraQuien: "Fondos, empresas, cooperación, gobiernos y universidades.",
    duracion: "Retainer o por proyecto",
    entregables: [
      "Comités y mapeos de actores",
      "Policy briefs e investigación aplicada",
      "Diseño de programas",
      "Workshops ejecutivos",
      "Facilitación estratégica",
    ],
    cta: { label: "Conversar", href: "/#contacto" },
  },
];

const criterios = [
  "Existe un problema o decisión concreta.",
  "Hay un sponsor interno con capacidad de respuesta.",
  "La organización entregará información y evidencia.",
  "Existe presupuesto para consultoría.",
  "El calendario permite un trabajo riguroso.",
  "No se busca maquillar impacto ni eludir requisitos.",
];

export default function SolucionesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-enc-forest-900 via-enc-charcoal to-enc-forest-900">
      <PageHeader />

      <main className="pt-24 sm:pt-28">
        {/* Cabecera */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12 sm:pb-16">
          <p className="text-enc-gold-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Soluciones
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight font-display">
            Cuatro formas de convertir una iniciativa en un proyecto defendible
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Cada servicio tiene una audiencia, una duración y entregables definidos. Elige según
            el momento de tu proyecto; si no estás seguro, empieza por el diagnóstico.
          </p>
        </section>

        {/* Ofertas */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ofertas.map((o) => (
              <div
                key={o.nombre}
                className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                  o.destacado
                    ? "border-enc-gold-500/40 bg-enc-gold-500/[0.06] hover:border-enc-gold-500/60"
                    : "border-white/10 bg-white/[0.05] hover:border-enc-teal-300/40"
                }`}
              >
                {o.destacado && (
                  <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-widest text-enc-gold-500 border border-enc-gold-500/40 rounded-full px-2 py-0.5">
                    Punto de entrada
                  </span>
                )}

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    o.destacado ? "bg-enc-gold-500/15 text-enc-gold-500" : "bg-white/10 text-enc-teal-300"
                  }`}
                >
                  <o.icon size={24} />
                </div>

                <h2 className="text-xl font-bold text-white mb-2 font-display">{o.nombre}</h2>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">{o.paraQuien}</p>

                <p className="text-xs uppercase tracking-wider text-white/40 mb-3">
                  Duración · <span className="text-white/70">{o.duracion}</span>
                </p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {o.entregables.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-sm text-white/70">
                      <Check
                        size={15}
                        className={`shrink-0 mt-0.5 ${o.destacado ? "text-enc-gold-500" : "text-enc-teal-300"}`}
                      />
                      {e}
                    </li>
                  ))}
                </ul>

                <Link
                  href={o.cta.href}
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                    o.destacado
                      ? "bg-enc-gold-500 hover:bg-enc-gold-600 text-enc-charcoal"
                      : "bg-white/5 hover:bg-enc-teal-600/25 text-white border border-white/15 hover:border-enc-teal-300/50"
                  }`}
                >
                  {o.cta.label}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <p className="text-white/35 text-xs text-center mt-6 max-w-2xl mx-auto">
            La inversión de cada servicio se define en función del alcance y se comparte durante la
            evaluación de encaje.
          </p>
        </section>

        {/* Criterios de admisión */}
        <section className="border-t border-white/8 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
            <div className="text-center mb-10">
              <p className="text-enc-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">
                Trabajo selectivo
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Criterios de admisión
              </h2>
              <p className="text-white/60 text-sm mt-3 max-w-xl mx-auto">
                Trabajamos con un número limitado de iniciativas. Estos son los criterios para que
                una colaboración tenga sentido.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {criterios.map((c) => (
                <div
                  key={c}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <Check size={16} className="text-enc-teal-300 shrink-0 mt-0.5" />
                  <span className="text-white/75 text-sm">{c}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/diagnostico-readiness"
                className="inline-flex items-center gap-2 bg-enc-gold-500 hover:bg-enc-gold-600 text-enc-charcoal px-7 py-3.5 rounded-full font-bold transition-all duration-300 hover:scale-105"
              >
                Solicitar Diagnóstico Ejecutivo
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
