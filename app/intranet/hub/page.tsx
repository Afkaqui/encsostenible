"use client";

import Link from "next/link";
import IntranetGuard from "@/components/IntranetGuard";
import IntranetNavbar from "@/components/IntranetNavbar";
import { Video, FileText, Shield, ArrowRight } from "lucide-react";

const sections = [
  {
    href: "/videos",
    title: "Videos",
    description:
      "Material audiovisual de campaña, entrevistas en medios y apariciones públicas.",
    icon: Video,
    accent: "from-red-500/10 to-orange-500/5",
    border: "border-red-400/20 hover:border-red-400/45",
    iconBg: "bg-red-500/15",
    iconColor: "text-red-400",
    tag: "Galería",
  },
  {
    href: "/propuesta-parlamento-andino",
    title: "Propuesta Parlamento Andino",
    description:
      "Documento completo con la propuesta de candidatura al Parlamento Andino por Integridad Democrática.",
    icon: FileText,
    accent: "from-blue-500/10 to-indigo-500/5",
    border: "border-blue-400/20 hover:border-blue-400/45",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    tag: "PDF",
  },
  {
    href: "/integridad-democratica",
    title: "Integridad Democrática",
    description:
      "Presentación oficial del partido, principios fundamentales y posicionamiento político.",
    icon: Shield,
    accent: "from-green-500/10 to-emerald-500/5",
    border: "border-green-400/20 hover:border-green-400/45",
    iconBg: "bg-green-500/15",
    iconColor: "text-green-400",
    tag: "PDF",
  },
];

export default function IntranetHub() {
  return (
    <IntranetGuard>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
        <IntranetNavbar />

        <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

          {/* Cabecera */}
          <div className="mb-10 sm:mb-14">
            <p className="text-white/35 text-xs uppercase tracking-widest font-medium mb-2">
              Área Privada · Integridad Democrática
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Panel de recursos
            </h1>
            <p className="text-white/50 text-sm max-w-xl">
              Acceso exclusivo al material de campaña. Selecciona una sección para continuar.
            </p>
          </div>

          {/* Tarjetas de sección */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sections.map(({ href, title, description, icon: Icon, accent, border, iconBg, iconColor, tag }) => (
              <Link
                key={href}
                href={href}
                className={`group bg-gradient-to-br ${accent} border ${border} rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
              >
                {/* Icono + tag */}
                <div className="flex items-start justify-between">
                  <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center ${iconColor} shrink-0`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 border border-white/15 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                </div>

                {/* Texto */}
                <div className="flex-1 space-y-1.5">
                  <h2 className="text-white font-semibold text-base leading-snug">
                    {title}
                  </h2>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* CTA */}
                <div className={`flex items-center gap-1.5 text-xs font-semibold ${iconColor} opacity-60 group-hover:opacity-100 transition-opacity`}>
                  Abrir
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </main>

        {/* Footer mínimo */}
        <footer className="shrink-0 border-t border-white/8 py-4 px-4 text-center">
          <p className="text-white/20 text-xs">
            Integridad Democrática · Acceso restringido
          </p>
        </footer>
      </div>
    </IntranetGuard>
  );
}
