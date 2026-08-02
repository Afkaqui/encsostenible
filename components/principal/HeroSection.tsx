"use client";

import { useCallback } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import VisitCounter from '@/components/VisitCounter';
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

  const carouselImages = [
    { src: back_ground1, alt: "Ecosistema sostenible - Naturaleza y tecnología" },
    { src: back_ground2, alt: "Conferencia sobre sostenibilidad" },
    { src: back_ground3, alt: "Agricultura sostenible en América Latina" },
    { src: back_ground4, alt: "Innovación y tecnología verde" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fondo Carrusel */}
      <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {carouselImages.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                priority={index === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>
      </div>

      {/* Gradiente Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-enc-forest-900/50 via-transparent to-enc-forest-900/70" />

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
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Eyebrow */}
          <p className="text-enc-gold-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-5 drop-shadow">
            Arquitectura de proyectos y ecosistemas de impacto
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] drop-shadow-2xl font-display">
            Convertimos iniciativas sostenibles complejas en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-enc-gold-300 to-enc-gold-500">
              proyectos listos para decisión, financiamiento y ejecución.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-9 leading-relaxed drop-shadow">
            ENC Sust4in4ble es una firma boutique que integra evidencia, modelo económico,
            gobernanza y articulación institucional para preparar proyectos ante comités,
            fondos, empresas y entidades públicas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => onScrollToSection('contacto')}
              size="lg"
              className="w-full sm:w-auto bg-enc-gold-500 hover:bg-enc-gold-600 text-enc-charcoal px-6 sm:px-9 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all duration-300 hover:scale-105 shadow-2xl border-none"
            >
              Solicitar Diagnóstico Ejecutivo
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <button
              onClick={() => onScrollToSection('impacto')}
              className="w-full sm:w-auto px-6 sm:px-9 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white border border-enc-teal-300/50 hover:bg-enc-teal-600/25 hover:border-enc-teal-300 backdrop-blur-sm transition-all duration-300"
            >
              Ver casos documentados
            </button>
          </div>

          <p className="text-white/60 text-xs sm:text-sm mt-6 drop-shadow">
            Evaluación inicial de encaje · Información confidencial · Atención selectiva
          </p>

          {/* Contador de visitas (sutil) */}
          <div className="flex justify-center mt-6">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 text-xs text-white/60">
              <VisitCounter page="/" />
            </div>
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