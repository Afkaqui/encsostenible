"use client";

import { 
  GraduationCap, 
  Building2, 
  Landmark, 
  Users, 
  Leaf, 
  ArrowRight 
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function ModelSection() {
  const helices = [
    {
      title: "Academia",
      icon: GraduationCap,
      description: "Ciencia y conocimiento aplicado para validar soluciones.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "hover:border-blue-500/50"
    },
    {
      title: "Industria",
      icon: Building2,
      description: "Inversión y fuerza de mercado para escalar el impacto.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "hover:border-purple-500/50"
    },
    {
      title: "Gobierno",
      icon: Landmark,
      description: "Política pública y marcos regulatorios que habilitan el cambio.",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "hover:border-orange-500/50"
    },
    {
      title: "Sociedad Civil",
      icon: Users,
      description: "Comunidades empoderadas que lideran la transformación local.",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "hover:border-yellow-500/50"
    },
    {
      title: "Medio Ambiente",
      icon: Leaf,
      description: "El capital natural como base y fin de todo desarrollo regenerativo.",
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "hover:border-green-500/50"
    }
  ];

  return (
    <section id="modelo" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-green-900/10 to-black/0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            La Hélice Quíntuple
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            No basta con conectar puntos; hay que sincronizar sistemas. Mi metodología integra a los <span className="text-green-400 font-semibold">5 actores clave</span> para transformar la sostenibilidad en proyectos rentables y escalables.
          </p>
        </div>

        {/* Diagrama Interactivo de Hélices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          
          {/* Tarjetas de las Hélices */}
          {helices.map((item, index) => (
            <div 
              key={index}
              className={cn(
                "group relative p-8 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl",
                item.bg,
                item.border
              )}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={cn("p-3 rounded-xl bg-black/20", item.color)}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
              
              <p className="text-white/70 leading-relaxed group-hover:text-white transition-colors">
                {item.description}
              </p>

              {/* Decoración de esquina */}
              <div className={cn("absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500")} />
            </div>
          ))}

          {/* Tarjeta de "Sinergia" (La conclusión) */}
          <div className="md:col-span-2 lg:col-span-1 group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm flex flex-col justify-center transition-all duration-500 hover:border-white/30">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              El Resultado <ArrowRight className="text-green-400 group-hover:translate-x-2 transition-transform" />
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Cuando estos 5 elementos giran en sincronía, la burocracia se vuelve ágil, la inversión encuentra retorno y el impacto ambiental se vuelve medible y regenerativo.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}