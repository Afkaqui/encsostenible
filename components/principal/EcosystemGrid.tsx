"use client"; // Necesario para el estado (useState)

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/src/lib/utils'; // Usamos tu utilidad para mezclar clases si es necesario

import BID_logo from '@/src/images/logos/BID.png';
import Naciones_unidas_logo from '@/src/images/logos/ONU.png';
import GIZ_logo from '@/src/images/logos/GIZ.webp';
import MINAM_logo from '@/src/images/logos/MINAM.jpeg';
import Rep_dominicana_logo from '@/src/images/logos/GOB_DOMINICANA.jpeg';
import Red_impacto_logo from '@/src/images/logos/LOGO_RED.png';
import Andenex_logo from '@/src/images/logos/ANDENEX.jpeg';
import Avaipe_logo from '@/src/images/logos/AVAIPE.jpeg';
import Chantikuy_logo from '@/src/images/logos/CHANTIKUY.jpeg';
import OLI_logo from '@/src/images/logos/LOGO_Oli.png';
import UNAS_logo from '@/src/images/logos/LOGO_UNAS.png';
import UNDAR_logo from '@/src/images/logos/LOGO_UNDAR.png';
import UNHEVAL_logo from '@/src/images/logos/Logo UNHEVAL.png';
import Muni_maynas_logo from '@/src/images/logos/LOGO_MAYNAS.png';


export default function EcosystemGrid() {
  const [isExpanded, setIsExpanded] = useState(false);

  const logos = [
    { src: Naciones_unidas_logo, alt: 'Naciones Unidas' },
    { src: BID_logo, alt: 'BID' },
    { src: GIZ_logo, alt: 'GIZ' },
    { src: MINAM_logo, alt: 'MINAM' },
    { src: Rep_dominicana_logo, alt: 'Gobierno Rep. Dominicana' },
    { src: Red_impacto_logo, alt: 'Red de Impacto Latam' },
    { src: Andenex_logo, alt: 'Andenex' },
    { src: Avaipe_logo, alt: 'Avaipe' },
    { src: Chantikuy_logo, alt: 'Chantikuy' },
    { src: OLI_logo, alt: 'OLI' },
    { src: UNAS_logo, alt: 'UNAS' },
    { src: UNDAR_logo, alt: 'UNDAR' },
    { src: UNHEVAL_logo, alt: 'UNHEVAL' },
    { src: Muni_maynas_logo, alt: 'Municipalidad de Maynas' },
  ];

  // Configuración: Cuántos mostrar al principio (ej: 10 para 2 filas en pantallas grandes)
  const INITIAL_COUNT = 10;
  const visibleLogos = isExpanded ? logos : logos.slice(0, INITIAL_COUNT);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Mi Voz en el Ecosistema Global y Nacional
        </h2>
      </div>
      
      {/* Grid de Aliados */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 justify-items-center items-center transition-all duration-500 ease-in-out">
        {visibleLogos.map((logo, index) => (
          <div 
            key={index} 
            className="group relative animate-fade-in" // Animación suave al aparecer
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-md rounded-full border-2 border-white/20 shadow-md flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-green-400/50 group-hover:shadow-xl group-hover:-translate-y-2">
              <div className="relative w-full h-full p-6"> {/* Ajusté el padding a p-6 para mejor visualización */}
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  className="object-contain filter grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            </div>
            {/* Brillo en hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-green-400/0 via-white/10 to-blue-400/0 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Botón Ver Más / Ver Menos */}
      {logos.length > INITIAL_COUNT && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 hover:border-green-400/50 backdrop-blur-sm text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]"
          >
            <span className="font-medium tracking-wide">
              {isExpanded ? 'Ver menos aliados' : 'Explorar todo el Ecosistema'}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-white/70 group-hover:text-green-400 transition-colors" />
            ) : (
              <ChevronDown className="w-4 h-4 text-white/70 group-hover:text-green-400 transition-colors group-hover:translate-y-0.5" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}