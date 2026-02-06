"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navigation({ activeSection, onScrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'credibilidad', label: 'Credibilidad' },
    { id: 'manifiesto', label: 'Mi Manifiesto' },
    { id: 'modelo', label: 'Mi Modelo' },
    { id: 'soluciones', label: 'Soluciones' },
    { id: 'impacto', label: 'Impacto' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const handleScrollToSection = (sectionId: string) => {
    onScrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo / Nombre */}
          <div 
            className="text-lg sm:text-2xl font-bold text-white cursor-pointer"
            onClick={() => handleScrollToSection('hero')}
          >
            Eduardo Noriega Campos
          </div>
          
          {/* Navegación Desktop */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navigationItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleScrollToSection(id)}
                className={`text-xs lg:text-sm font-medium transition-colors hover:text-green-400 ${
                  activeSection === id ? 'text-green-400' : 'text-white/80'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:bg-white/10"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 absolute w-full">
          <div className="px-4 py-2 space-y-2">
            {navigationItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleScrollToSection(id)}
                className={`block w-full text-left px-4 py-3 rounded transition-colors ${
                   activeSection === id 
                     ? 'text-green-400 bg-white/10' 
                     : 'text-white/80 hover:text-green-400 hover:bg-white/5'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}