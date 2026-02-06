"use client";

import { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import back_ground1 from '@/src/images/photos_background/001img_PORTADA_NOR.jpeg';
import back_ground2 from '@/src/images/photos_background/002img_PORTADA_NOR.jpeg';
import back_ground3 from '@/src/images/photos_background/003img_PORTADA_NOR.png';
import back_ground4 from '@/src/images/photos_background/004img_PORTADA_NOR.jpeg';

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ onScrollToSection }: HeroSectionProps) {
  // Configuración del carrusel
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // IMÁGENES DE PRUEBA (Reemplázalas luego por tus imports locales)
  const carouselImages = [
    {
      url: back_ground1.src,
      alt: "Ecosistema sostenible - Naturaleza y tecnología"
    },
    {
      url: back_ground2.src,
      alt: "Conferencia sobre sostenibilidad"
    },
    {
      url: back_ground3.src,
      alt: "Agricultura sostenible en América Latina"
    },
    {
      url: back_ground4.src,
      alt: "Innovación y tecnología verde"
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fondo Carrusel */}
      <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {carouselImages.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${image.url}')` }}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>
      </div>

      {/* Gradiente Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-blue-600/30" />

      {/* Controles Carrusel */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-2 sm:p-3 transition-all duration-300 group"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-2 sm:p-3 transition-all duration-300 group"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Contenido Principal */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight drop-shadow-2xl">
            Nací hace 45 años para una razón: <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">construir un futuro regenerativo.</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button
              onClick={() => onScrollToSection('modelo')}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-sm border-none"
            >
              Descubre el Modelo de la Hélice Quíntuple
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-300"
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="text-white/60" size={32} />
      </div>
    </section>
  );
}