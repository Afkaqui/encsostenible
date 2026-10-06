import CibsHeader from "@/components/cibs/CibsHeader";
import CibsFooter from "@/components/cibs/CibsFooter";
import ProyectosExplorer from "@/components/proyectos/ProyectosExplorer";
import { CATEGORIAS, CIBS_URL, REGIONES, TIPOS, proyectos } from "@/lib/proyectos";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portafolio de proyectos e iniciativas de impacto",
  url: `${CIBS_URL}/proyectos`,
  inLanguage: "es",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: proyectos.length,
    itemListElement: proyectos.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${CIBS_URL}/proyectos/${p.slug}`,
      name: p.titulo,
    })),
  },
};

export default function ProyectosPage() {
  const totalFichas = proyectos.reduce((n, p) => n + 1 + p.documentos.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-enc-forest-900 via-enc-charcoal to-enc-forest-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CibsHeader />

      <main className="pt-24 sm:pt-28">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-10 sm:pb-14">
          <p className="text-enc-gold-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Portafolio
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight font-display">
            Proyectos e iniciativas que convierten biodiversidad, tecnología y territorio en impacto
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {proyectos.length} iniciativas y {totalFichas} fichas técnicas en {Object.keys(CATEGORIAS).length} líneas
            de trabajo, {REGIONES.length} territorios y {TIPOS.length} tipos de intervención.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <ProyectosExplorer proyectos={proyectos} regiones={REGIONES} tipos={TIPOS} />

          <p className="text-white/35 text-xs text-center mt-12 max-w-2xl mx-auto leading-relaxed">
            Fichas sintetizadas a partir de expedientes, propuestas técnicas y documentos de trabajo de cada
            iniciativa. Las cifras corresponden a lo reportado o proyectado en dichos documentos.
          </p>
        </section>
      </main>

      <CibsFooter />
    </div>
  );
}
