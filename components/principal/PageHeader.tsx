"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/diagnostico-readiness", label: "Diagnóstico" },
  { href: "/#impacto", label: "Casos" },
  { href: "/#contacto", label: "Contacto" },
];

export default function PageHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-enc-forest-900/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link href="/" className="group">
            <p className="text-base sm:text-xl font-bold text-white leading-tight group-hover:text-enc-gold-500 transition-colors font-display">
              ENC Sust4in4ble
            </p>
            <p className="text-[10px] sm:text-xs text-white/40 font-medium tracking-widest uppercase hidden sm:block">
              Arquitectura de impacto bankable
            </p>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-xs lg:text-sm font-medium transition-colors hover:text-enc-gold-500 ${
                  pathname === href ? "text-enc-gold-500" : "text-white/80"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-enc-forest-900/95 backdrop-blur-xl border-b border-white/10 absolute w-full left-0 shadow-2xl">
          <div className="px-4 py-2 space-y-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded transition-colors ${
                  pathname === href
                    ? "text-enc-gold-500 bg-white/10"
                    : "text-white/80 hover:text-enc-gold-500 hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
