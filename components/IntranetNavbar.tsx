"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { LayoutGrid, Video, FileText, Shield, LogOut, Menu, X, ChevronLeft } from "lucide-react";
import { revokeAccess } from "@/lib/intranet-auth";

const navItems = [
  { href: "/intranet/hub", label: "Inicio",                      icon: LayoutGrid },
  { href: "/videos",                  label: "Videos",                        icon: Video     },
  { href: "/propuesta-parlamento-andino", label: "Propuesta Parlamento",      icon: FileText  },
  { href: "/integridad-democratica",  label: "Integridad Democrática",        icon: Shield    },
];

interface IntranetNavbarProps {
  /** Título opcional que aparece centrado en la barra (útil en las páginas de PDF). */
  title?: string;
}

export default function IntranetNavbar({ title }: IntranetNavbarProps) {
  const pathname = usePathname();
  const router   = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    revokeAccess();
    router.push("/");
  };

  return (
    <header className="shrink-0 bg-black/40 backdrop-blur-md border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 sm:py-3 gap-3">

          {/* Izquierda: volver al sitio público */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/"
              className="flex items-center gap-1 text-white/45 hover:text-white/80 transition-colors text-xs"
              title="Volver al sitio"
            >
              <ChevronLeft size={14} />
              <span className="hidden sm:inline">Sitio</span>
            </Link>
            <span className="text-white/15 hidden sm:inline">·</span>
            <span className="text-white/50 text-xs font-bold uppercase tracking-widest hidden sm:inline">
              Área Privada
            </span>
          </div>

          {/* Centro: título de página (opcional) o navegación desktop */}
          {title ? (
            <h1 className="text-white text-xs sm:text-sm font-semibold truncate text-center flex-1 px-4">
              {title}
            </h1>
          ) : (
            <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
              {navItems.map(({ href, label, icon: Icon }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                      active
                        ? "bg-green-500/20 text-green-400 border border-green-400/25"
                        : "text-white/55 hover:text-white hover:bg-white/8"
                    }`}
                  >
                    <Icon size={12} />
                    <span>{label}</span>
                  </Link>
                );
              })}
            </nav>
          )}

          {/* Derecha: logout + hamburger */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={handleLogout}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-white/35 hover:text-white/70 hover:bg-white/8 transition-all"
              title="Cerrar sesión"
            >
              <LogOut size={13} />
              <span>Salir</span>
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-white/55 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden bg-black/85 backdrop-blur-xl border-t border-white/10 absolute w-full left-0 shadow-2xl">
          <div className="px-3 py-2 space-y-1">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                    active
                      ? "bg-green-500/15 text-green-400 border border-green-400/20"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={15} />
                  {label}
                </Link>
              );
            })}

            <div className="border-t border-white/10 pt-2 mt-1">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-white/40 hover:text-white/70 hover:bg-white/5 transition-all"
              >
                <LogOut size={15} />
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
