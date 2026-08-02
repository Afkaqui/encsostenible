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
          <div className="inline-flex items-center gap-2 bg-enc-gold-500/10 border border-enc-gold-500/30 rounded-full px-4 py-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-enc-gold-500" />
            <span className="text-enc-gold-500 text-xs font-semibold uppercase tracking-widest">Herramienta gratuita</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Estima el beneficio tributario<br className="hidden sm:block" /> de innovar bajo la Ley 30309.
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Dos herramientas para estimar tu deducción por I+D+i. Elige la que mejor se adapte a tu momento. La estimación es referencial y no constituye asesoría tributaria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* Calculadora Diagnóstica */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-enc-gold-500/40 transition-all duration-300 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-enc-gold-500/15 border border-enc-gold-500/30 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-enc-gold-500" />
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
                  <CheckCircle2 className="w-4 h-4 text-enc-gold-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                    <p className="text-white/55 text-xs">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={() => router.push('/calculadora-fiscal')}
              className="w-full flex items-center justify-center gap-2 bg-enc-gold-500 hover:bg-enc-gold-600 text-enc-charcoal py-3.5 rounded-xl font-bold text-sm shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <ArrowRight className="w-4 h-4" />
              Iniciar Diagnóstico
            </button>

            <p className="text-white/25 text-xs text-center -mt-3">Sin registro · Sin tarjeta · 100% confidencial</p>
          </div>

          {/* Simulador CONCYTEC */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-enc-teal-300/40 transition-all duration-300 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-enc-teal-600/20 border border-enc-teal-300/30 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-enc-teal-300" />
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
                  <CheckCircle2 className="w-4 h-4 text-enc-teal-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                    <p className="text-white/55 text-xs">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={() => router.push('/calculadora-fiscal?tab=simulador')}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-enc-teal-600 to-enc-forest-700 hover:from-enc-teal-500 hover:to-enc-forest-700 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg hover:-translate-y-0.5 transition-all duration-300"
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
