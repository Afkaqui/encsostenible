import PageHeader from "@/components/principal/PageHeader";
import Footer from "@/components/principal/Footer";
import ProyectosExplorer from "@/components/proyectos/ProyectosExplorer";
import { CATEGORIAS, proyectos } from "@/lib/proyectos";

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-enc-forest-900 via-enc-charcoal to-enc-forest-900">
      <PageHeader />

      <main className="pt-24 sm:pt-28">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-10 sm:pb-14">
          <p className="text-enc-gold-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Portafolio
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight font-display">
            Proyectos que convierten biodiversidad, tecnología y territorio en impacto medible
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {proyectos.length} iniciativas en {Object.keys(CATEGORIAS).length} líneas de trabajo: desde
            bionegocios amazónicos y transferencia tecnológica hasta plataformas de trazabilidad e IA.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <ProyectosExplorer proyectos={proyectos} />

          <p className="text-white/35 text-xs text-center mt-12 max-w-2xl mx-auto leading-relaxed">
            Fichas sintetizadas a partir de expedientes, propuestas técnicas y documentos de trabajo de cada
            iniciativa. Las cifras corresponden a lo reportado o proyectado en dichos documentos.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
