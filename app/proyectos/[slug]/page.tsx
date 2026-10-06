import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronDown, FileText, Mail, MapPin, Tag, Users } from "lucide-react";
import CibsHeader from "@/components/cibs/CibsHeader";
import CibsFooter from "@/components/cibs/CibsFooter";
import DatoItem from "@/components/proyectos/DatoItem";
import { ProyectoCard } from "@/components/proyectos/ProyectosExplorer";
import {
  CATEGORIAS,
  CIBS_URL,
  SITE_URL,
  descripcionCorta,
  getProyecto,
  proyectos,
} from "@/lib/proyectos";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProyecto((await params).slug);
  if (!p) return {};
  const url = `/proyectos/${p.slug}`;
  const description = descripcionCorta(p.resumen);
  return {
    metadataBase: new URL(CIBS_URL),
    title: { absolute: `${p.titulo} | CIBS Pucallpa` },
    description,
    keywords: [CATEGORIAS[p.categoria].nombre, p.tipo, ...p.regiones, "bioeconomía", "innovación", "Perú"],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "es_PE",
      url,
      title: p.titulo,
      description,
      siteName: "CIBS Pucallpa · ENC Sust4in4ble",
      section: CATEGORIAS[p.categoria].nombre,
      tags: [p.tipo, ...p.regiones],
    },
    twitter: { card: "summary_large_image", title: p.titulo, description },
  };
}

export default async function ProyectoPage({ params }: Props) {
  const p = getProyecto((await params).slug);
  if (!p) notFound();

  const categoria = CATEGORIAS[p.categoria];
  const relacionados = proyectos.filter((x) => x.categoria === p.categoria && x.slug !== p.slug).slice(0, 3);
  const url = `${CIBS_URL}/proyectos/${p.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": url,
      url,
      name: p.titulo,
      headline: p.titulo,
      abstract: p.resumen,
      description: descripcionCorta(p.resumen),
      genre: p.tipo,
      about: categoria.nombre,
      keywords: [categoria.nombre, p.tipo, ...p.regiones].join(", "),
      spatialCoverage: p.regiones.map((r) => ({ "@type": "Place", name: r })),
      audience: { "@type": "Audience", audienceType: p.beneficiarios },
      inLanguage: "es",
      isPartOf: { "@type": "CollectionPage", url: `${CIBS_URL}/proyectos` },
      publisher: { "@type": "Organization", name: "ENC Sust4in4ble", url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "CIBS Pucallpa", item: CIBS_URL },
        { "@type": "ListItem", position: 2, name: "Proyectos", item: `${CIBS_URL}/proyectos` },
        { "@type": "ListItem", position: 3, name: p.titulo, item: url },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-enc-forest-900 via-enc-charcoal to-enc-forest-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CibsHeader />

      <main className="pt-24 sm:pt-28">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <nav aria-label="Ruta" className="mb-6 text-sm">
            <Link
              href={`/proyectos?categoria=${p.categoria}`}
              className="inline-flex items-center gap-1.5 text-white/55 hover:text-enc-gold-500 transition-colors"
            >
              <ArrowLeft size={15} /> Proyectos · {categoria.nombre}
            </Link>
          </nav>

          <div className="flex flex-wrap gap-2 mb-5 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-enc-gold-500/15 text-enc-gold-500 px-3 py-1.5 font-semibold">
              <Tag size={12} /> {categoria.nombre}
            </span>
            <Link
              href={`/proyectos?tipo=${encodeURIComponent(p.tipo)}`}
              className="rounded-full border border-white/15 px-3 py-1.5 text-white/75 hover:border-enc-gold-500/50 transition-colors"
            >
              {p.tipo}
            </Link>
            {p.regiones.map((r) => (
              <Link
                key={r}
                href={`/proyectos?region=${encodeURIComponent(r)}`}
                className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1.5 text-white/75 hover:border-enc-gold-500/50 transition-colors"
              >
                <MapPin size={12} /> {r}
              </Link>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 font-display">
            {p.titulo}
          </h1>
          <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-10">{p.resumen}</p>

          <div className="grid md:grid-cols-5 gap-5">
            <section className="md:col-span-3 rounded-2xl border border-white/10 bg-white/[0.05] p-6">
              <h2 className="text-xs uppercase tracking-widest text-enc-gold-500 font-semibold mb-4">
                Datos clave e impacto
              </h2>
              <ul className="space-y-3">
                {p.datos.map((d, i) => (
                  <DatoItem key={i} dato={d} accent="text-enc-gold-500" />
                ))}
              </ul>
            </section>
            <section className="md:col-span-2 rounded-2xl border border-enc-teal-300/25 bg-enc-teal-600/10 p-6">
              <h2 className="text-xs uppercase tracking-widest text-enc-teal-300 font-semibold mb-4 flex items-center gap-1.5">
                <Users size={14} /> Beneficiarios y alcance
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">{p.beneficiarios}</p>
            </section>
          </div>

          {p.documentos.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
                Componentes y documentos del expediente
              </h2>
              <p className="text-sm text-white/50 mb-5">
                {p.documentos.length} fichas adicionales de esta misma iniciativa.
              </p>
              <div className="space-y-3">
                {p.documentos.map((d, i) => (
                  <details key={i} className="group rounded-2xl border border-white/10 bg-white/[0.04] open:bg-white/[0.06]">
                    <summary className="flex cursor-pointer list-none items-start gap-3 p-5 [&::-webkit-details-marker]:hidden">
                      <FileText size={18} className="text-enc-teal-300 shrink-0 mt-0.5" />
                      <span className="flex-1 font-semibold text-white/90 leading-snug">{d.titulo}</span>
                      <ChevronDown size={18} className="text-white/50 shrink-0 mt-0.5 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-5 pb-5 space-y-4">
                      <p className="text-sm text-white/65 leading-relaxed">{d.resumen}</p>
                      <ul className="space-y-2">
                        {d.datos.map((dato, j) => (
                          <DatoItem key={j} dato={dato} />
                        ))}
                      </ul>
                      <p className="text-sm text-white/55 leading-relaxed">
                        <strong className="text-white/75">Beneficiarios y alcance: </strong>
                        {d.beneficiarios}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 rounded-2xl border border-enc-gold-500/30 bg-enc-gold-500/[0.06] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
            <div>
              <p className="text-white font-bold text-lg font-display">¿Te interesa esta iniciativa?</p>
              <p className="text-sm text-white/60 mt-1">Conversemos sobre alianzas, financiamiento o réplica en tu territorio.</p>
            </div>
            <a
              href={`mailto:contacto@encsust4in4ble.earth?subject=${encodeURIComponent(p.titulo)}`}
              className="inline-flex items-center justify-center gap-2 bg-enc-gold-500 hover:bg-enc-gold-600 text-enc-charcoal px-6 py-3 rounded-full font-bold transition-colors shrink-0"
            >
              <Mail size={17} /> Escribir
            </a>
          </div>
        </article>

        {relacionados.length > 0 && (
          <section className="border-t border-white/10 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 font-display">Más en {categoria.nombre}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relacionados.map((r) => (
                  <ProyectoCard key={r.slug} p={r} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <CibsFooter />
    </div>
  );
}
