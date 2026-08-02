"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navigation({ activeSection, onScrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Cada item es un ancla de scroll (id) o una ruta real (href)
  const menu: { id?: string; href?: string; label: string }[] = [
    { id: 'hero', label: 'Inicio' },
    { id: 'modelo', label: 'Metodología' },
    { href: '/soluciones', label: 'Soluciones' },
    { href: '/diagnostico-readiness', label: 'Diagnóstico' },
    { id: 'impacto', label: 'Casos' },
    { id: 'contacto', label: 'Contacto' },
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
            className="cursor-pointer group"
            onClick={() => handleScrollToSection('hero')}
          >
            <p className="text-base sm:text-xl font-bold text-white leading-tight group-hover:text-enc-gold-500 transition-colors font-display">ENC Sust4in4ble</p>
            <p className="text-[10px] sm:text-xs text-white/40 font-medium tracking-widest uppercase hidden sm:block">Arquitectura de impacto bankable</p>
          </div>
          
          {/* Navegación Desktop */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {menu.map((item) =>
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs lg:text-sm font-medium transition-colors hover:text-enc-gold-500 ${
                    pathname === item.href ? 'text-enc-gold-500' : 'text-white/80'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id!)}
                  className={`text-xs lg:text-sm font-medium transition-colors hover:text-enc-gold-500 ${
                    activeSection === item.id ? 'text-enc-gold-500' : 'text-white/80'
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
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
            {menu.map((item) =>
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded transition-colors ${
                    pathname === item.href
                      ? 'text-enc-gold-500 bg-white/10'
                      : 'text-white/80 hover:text-enc-gold-500 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id!)}
                  className={`block w-full text-left px-4 py-3 rounded transition-colors ${
                    activeSection === item.id
                      ? 'text-enc-gold-500 bg-white/10'
                      : 'text-white/80 hover:text-enc-gold-500 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}