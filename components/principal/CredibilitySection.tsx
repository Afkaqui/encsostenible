import IntegrationShowcase from '@/components/principal/IntegrationShowcase';
import EcosystemGrid from '@/components/principal/EcosystemGrid';

export default function CredibilitySection() {
  return (
    <section id="credibilidad" className="py-12 sm:py-16 bg-white/5 border-y border-white/10 relative z-10">
      {/* Módulo 1: Video de Integración */}
      <IntegrationShowcase />

      {/* Módulo 2: Grid de Aliados */}
      <EcosystemGrid />
    </section>
  );
}