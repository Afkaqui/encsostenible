"use client";

import { useState, useEffect } from 'react';
import Navigation from '@/components/principal/Navigation';
import HeroSection from '@/components/principal/HeroSection';
import Footer from '@/components/principal/Footer';
import IntegrationShowcase from '@/components/principal/IntegrationShowcase';
import EcosystemGrid from '@/components/principal/EcosystemGrid';
import ManifestoSection from '@/components/principal/ManifestoSection';
import ModelSection from '@/components/principal/ModelSection';
import SolutionsSection from '@/components/principal/SolutionsSection';
import ImpactSection from '@/components/principal/ImpactSection';
import ContactSection from '@/components/principal/ContactSection';

// IMPORTAREMOS ESTOS A MEDIDA QUE LOS CREEMOS:
// import CredibilitySection from '@/components/sections/CredibilitySection';
// import ManifestoSection from '@/components/sections/ManifestoSection';
// import ModelSection from '@/components/sections/ModelSection';
// import SolutionsSection from '@/components/sections/SolutionsSection';
// import ImpactSection from '@/components/sections/ImpactSection';
// import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  // Lógica de Scroll Spy (Detectar sección activa)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'credibilidad', 'manifiesto', 'modelo', 'soluciones', 'impacto', 'contacto'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Ajustamos la detección para que sea más natural
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Navegacion */}
      <Navigation activeSection={activeSection} onScrollToSection={scrollToSection} />
      
      <HeroSection onScrollToSection={scrollToSection} />
      <IntegrationShowcase />
      <EcosystemGrid />
      <ManifestoSection />
      <ModelSection />
      <SolutionsSection />
      <ImpactSection />
      <ContactSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}