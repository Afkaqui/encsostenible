"use client";

import { useRouter } from 'next/navigation';
import { Calculator, ArrowRight, CheckCircle2, Sparkles, BarChart3 } from 'lucide-react';

export default function ContactForm() {
  const router = useRouter();

  return (
    <section className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Encabezado */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/30 rounded-full px-4 py-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-green-400" />
            <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">Análisis Gratuito con IA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Descubre cuánto dinero puedes recuperar<br className="hidden sm:block" /> de tus impuestos innovando.
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Dos herramientas para optimizar tu carga fiscal bajo la Ley 30309. Elige la que mejor se adapte a tu momento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* Calculadora Diagnóstica */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-green-500/40 transition-all duration-300 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/15 border border-green-400/30 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Calculadora Diagnóstica</h3>
                <p className="text-white/45 text-xs">Guiada · 3 pasos · Resultado personalizado</p>
              </div>
            </div>

            <ul className="space-y-3 flex-1">
              {[
                { label: "Tu categoría fiscal", desc: "MIPYME o Gran Empresa según la Ley 30309." },
                { label: "Tu recuperación estimada", desc: "Cuánto puedes ahorrar en Impuesto a la Renta (S/)." },
                { label: "Semáforo de viabilidad", desc: "Si tu proyecto califica ante CONCYTEC/SUNAT." },
                { label: "Tu capa estratégica", desc: "I+D+i o Venturing: cuál es tu mejor ruta." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                    <p className="text-white/55 text-xs">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={() => router.push('/calculadora-fiscal')}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              <ArrowRight className="w-4 h-4" />
              Iniciar Diagnóstico
            </button>

            <p className="text-white/25 text-xs text-center -mt-3">Sin registro · Sin tarjeta · 100% confidencial</p>
          </div>

          {/* Simulador CONCYTEC */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-blue-500/40 transition-all duration-300 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Simulador CONCYTEC</h3>
                <p className="text-white/45 text-xs">Tiempo real · Ley 30309 · Actualización instantánea</p>
              </div>
            </div>

            <ul className="space-y-3 flex-1">
              {[
                { label: "Escudo Total", desc: "IR que se elimina por la deducción amplificada (190–240%)." },
                { label: "Escudo Adicional", desc: "Beneficio extra exclusivo de la Ley 30309 vs. deducción normal." },
                { label: "Costo Neto de la inversión", desc: "Lo que realmente pagas después del subsidio tributario." },
                { label: "Comparativo SIN vs CON beneficio", desc: "Tabla fiscal lado a lado con tu impacto real en IR." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                    <p className="text-white/55 text-xs">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={() => router.push('/calculadora-fiscal?tab=simulador')}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              <ArrowRight className="w-4 h-4" />
              Abrir Simulador
            </button>

            <p className="text-white/25 text-xs text-center -mt-3">Sin registro · Sin tarjeta · 100% confidencial</p>
          </div>

        </div>
      </div>
    </section>
  );
}
