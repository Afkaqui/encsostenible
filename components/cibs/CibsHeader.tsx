"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { CONTACTO_CIBS } from "@/lib/proyectos";

// Rutas relativas al subdominio cibs.encsust4in4ble.earth ("/" es la landing CIBS)
const links = [
  { href: "/#modelo", label: "Modelo" },
  { href: "/#territorio", label: "Territorio" },
  { href: "/proyectos", label: "Proyectos" },
];

export default function CibsHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-enc-forest-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-4">
        <Link href="/" className="group">
          <p className="text-base sm:text-xl font-bold text-white leading-tight font-display group-hover:text-enc-gold-500 transition-colors">
            CIBS Pucallpa
          </p>
          <p className="text-[10px] sm:text-xs text-white/40 font-medium tracking-widest uppercase hidden sm:block">
            Centro de Innovación de Biodiversidad Sostenible
          </p>
        </Link>

        <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hidden md:inline transition-colors hover:text-enc-gold-500 ${
                pathname.startsWith(href) && href !== "/" ? "text-enc-gold-500" : "text-white/80"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href={CONTACTO_CIBS}
            className="inline-flex items-center bg-enc-gold-500 hover:bg-enc-gold-600 text-enc-charcoal px-4 py-2 rounded-full font-bold transition-colors"
          >
            Sumarme
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="md:hidden bg-enc-forest-900/95 border-b border-white/10 px-4 py-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded text-white/80 hover:text-enc-gold-500 hover:bg-white/5 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
