"use client";

import { 
  Network, 
  TrendingUp, 
  Lightbulb, 
  ArrowUpRight 
} from 'lucide-react';

export default function SolutionsSection() {
  const soluciones = [
    {
      icon: Network,
      title: "Arquitectura de Ecosistemas",
      description: "No ofrezco consultoría tradicional. Diseño la 'ingeniería invisible' que conecta a productores, academia y gobierno para que los proyectos no mueran en el papel.",
      features: ["Mapeo de actores clave", "Diseño de gobernanza", "Alianzas estratégicas"]
    },
    {
      icon: TrendingUp,
      title: "Ingeniería Financiera Verde",
      description: "Transformo buenas intenciones ambientales en modelos de negocio bancables. Conecto proyectos regenerativos con fondos de inversión de impacto y banca multilateral.",
      features: ["Estructuración de fondos", "Análisis de riesgo climático", "Levantamiento de capital"]
    },
    {
      icon: Lightbulb,
      title: "Innovación & Política Pública",
      description: "Traduzco la innovación técnica al lenguaje de los tomadores de decisiones para desbloquear normativas y acelerar la implementación de soluciones bioeconómicas.",
      features: ["Advocacy regulatorio", "Diseño de hojas de ruta", "Gestión de stakeholders"]
    }
  ];

  return (
    <section id="soluciones" className="py-16 sm:py-24 bg-black/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Soluciones para la Brecha de Implementación
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Mi trabajo es traducir idiomas distintos: hablo financiero, hablo político y hablo técnico. Aquí es donde aporto valor.
          </p>
        </div>

        {/* Grid de Soluciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {soluciones.map((solucion, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            >
              {/* Gradiente sutil en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-transparent to-blue-500/0 group-hover:from-green-500/10 group-hover:to-blue-500/10 transition-all duration-500" />

              {/* Contenido */}
              <div className="relative z-10">
                {/* Icono */}
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-green-400">
                  <solucion.icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {solucion.title}
                </h3>
                
                <p className="text-white/70 mb-8 leading-relaxed min-h-[80px]">
                  {solucion.description}
                </p>

                {/* Lista de características (Features) */}
                <ul className="space-y-3 border-t border-white/10 pt-6">
                  {solucion.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-white/60">
                      <ArrowUpRight className="w-4 h-4 mr-2 text-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}