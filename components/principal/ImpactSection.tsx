"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Zap, CheckCircle, ExternalLink } from 'lucide-react';
import Image from 'next/image';

// Importación de imágenes locales (Optimizado)
import ImageCard001 from '@/src/images/proyectos/001_Fundo.jpeg';
import ImageCard002 from '@/src/images/proyectos/002_Eywa.jpg';
import ImageCard003 from '@/src/images/proyectos/003_Randy.jpeg';
import ImageCard004 from '@/src/images/proyectos/004_Richard.jpeg';
import ImageCard005 from '@/src/images/proyectos/005_Chantikuy.jpeg';
import ImageCard006 from '@/src/images/proyectos/006_Erick.png';


export default function ImpactSection() {
  const casosEstudio = [
    {
      titulo: "Fundo San Rocco - La Sinergia Agroindustrial",
      reto: "Evitar la fuga de valor de vainilla amazónica, impulsando una bioeconomía circular.",
      solucion: "Cadena de valor integrada con agrotecnología (AGRIPRES, IA), procesamiento avanzado (CO2, liofilización) y conocimiento.",
      resultado: "Modelo triple impacto, escalable y regenerativo. Valoriza biodiversidad.",
      image: ImageCard001, // Pasamos el objeto importado directamente
      desarrollo_nombre: "Russell Lorenzo Pujay",
      desarrollo_enlace: "https://www.linkedin.com/in/russellpuj/",
      contacto: "https://www.linkedin.com/pulse/cibs-fundo-san-rocco-la-sinergia-agroindustrial-que-valora-vainilla-boile"
    },
    {
      titulo: "EYWA - La Sinergia Territorial",
      reto: "La falta de confianza y el greenwashing impiden que el capital privado fluya hacia proyectos de impacto climático.",
      solucion: "EYWA es el sistema operativo del impacto que usa inteligencia artificial y tecnología de trazabilidad para convertir la sostenibilidad en evidencia auditable.",
      resultado: "Seleccionados para preincubación de Incuval Ventures, validando nuestro modelo para acelerar la transición al mercado.",
      image: ImageCard002,
      desarrollo_nombre: "Angel Francisco Kaqui Aquino",
      desarrollo_enlace: "https://www.linkedin.com/in/afkaqui/",
      contacto: "https://www.linkedin.com/pulse/eywa-la-sinergia-territorial-que-inspira-nuevas-generaciones-jvrje"
    },
    {
      titulo: "Andenex – Asociatividad para la Agroexportación",
      reto: "¿Cómo potenciar la competitividad comercial en cooperativas agrícolas para atraer inversores y exportar directamente?",
      solucion: "Reestructurar la planificación organizacional para diseñar oferta exportable junto a inversores comerciales, soportado por trazabilidad e IA.",
      resultado: "Cooperativas comercialmente competitivas y articuladas con inversores para generar proyectos de exportación integrales.",
      image: ImageCard003,
      desarrollo_nombre: "Randy Rivas Mori",
      desarrollo_enlace: "https://www.linkedin.com/in/randy-rivas-06a94b1a6/",
      contacto: "https://www.linkedin.com/pulse/andenex-asociatividad-para-la-agroexportaci%25C3%25B3n-atidslatam-yqsne"
    },
    {
      titulo: "Fotoclean – Arcillas Fotocatalíticas",
      reto: "¿Cómo reducir los contaminantes y costos del tratamiento de aguas residuales en la minería garantizando sostenibilidad?",
      solucion: "Aplicar pellets y sistemas flotantes con arcillas fotocatalíticas que degradan metales pesados usando luz solar, disminuyendo lodos y costos.",
      resultado: "Procesos mineros con aguas tratadas eficientemente, reducción de contaminantes y menor huella de carbono.",
      image: ImageCard004,
      desarrollo_nombre: "Richard Lenin Lopez Benites",
      desarrollo_enlace: "https://www.linkedin.com/in/richard-lenin-lopez-benites-8b22b9236/",
      contacto: "https://www.linkedin.com/pulse/fotoclean-arcillas-fotocatal%C3%ADticas-para-aguas-residuales-genesperu-xljse"
    },
    {
      titulo: "Chantikuy: Experiencias que transforman",
      reto: "Transformar una operadora turística tradicional en una empresa comprometida con la sostenibilidad sin perder competitividad.",
      solucion: "Reorientación estratégica incorporando prácticas sostenibles, fortaleciendo el compromiso con el turismo regenerativo.",
      resultado: "Consolidación como operadora de turismo regenerativo, reconocida por ofrecer experiencias auténticas de valor compartido.",
      image: ImageCard005,
      desarrollo_nombre: "Wilson Lipa Fernandez",
      desarrollo_enlace: "https://www.linkedin.com/in/wilson-lipa-fernandez-67412a297/",
      contacto: "https://www.linkedin.com/pulse/chantikuy-turismo-comunitario-que-conecta-respeta-y-transforma-u1pge"
    },
    {
      titulo: "AVAIPE – Bosquenegocios Amazónicos",
      reto: "La Amazonía pierde valor y bosques por cadenas extractivas y monocultivos poco inclusivos.",
      solucion: "Impulsar bosquenegocios que integren vainilla, cacao y cúrcuma con bioinsumos propios y trazabilidad blockchain.",
      resultado: "Productores fortalecidos y bosques conservados mediante un modelo de triple impacto.",
      image: ImageCard006,
      desarrollo_nombre: "Erick Jimmy Rivas",
      desarrollo_enlace: "https://www.linkedin.com/in/erickrivasmori/",
      contacto: "https://www.linkedin.com/pulse/avaipe-bosquenegocios-amaz%25C3%25B3nicos-sostenibles-genesperu-0zgve"
    }
  ];

  return (
    <section id="impacto" className="py-16 sm:py-24 bg-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Esto no es Teoría. Son Resultados.
          </h2>
        </div>
        
        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casosEstudio.map((caso, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden group flex flex-col">
              
              {/* Imagen */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={caso.image} 
                  alt={caso.titulo}
                  fill
                  placeholder="blur" // ¡Efecto de carga borroso automático!
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-white text-lg sm:text-xl line-clamp-2 min-h-[3.5rem]">
                  {caso.titulo}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 flex-grow flex flex-col">
                <div className="space-y-3 flex-grow">
                  <div>
                    <h4 className="text-red-400 font-semibold text-xs uppercase tracking-wider mb-1 flex items-center">
                      <Target className="w-3 h-3 mr-1.5" /> El Reto
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                      {caso.reto}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-blue-400 font-semibold text-xs uppercase tracking-wider mb-1 flex items-center">
                      <Zap className="w-3 h-3 mr-1.5" /> Solución
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                      {caso.solucion}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-green-400 font-semibold text-xs uppercase tracking-wider mb-1 flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1.5" /> Resultado
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                      {caso.resultado}
                    </p>
                  </div>
                </div>

                {/* Footer de la tarjeta */}
                <div className="pt-4 mt-2 border-t border-white/10 space-y-3">
                  <a 
                    href={caso.desarrollo_enlace} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-300 hover:text-blue-200 text-sm font-medium transition-colors"
                  >
                    Liderado por: {caso.desarrollo_nombre}
                  </a>

                  <a 
                    href={caso.contacto} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center px-4 py-2 bg-white/5 hover:bg-green-500/20 text-white rounded-lg text-sm font-medium transition-all duration-300 border border-white/10 hover:border-green-500/50 group/btn"
                  >
                    Ver caso completo
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}