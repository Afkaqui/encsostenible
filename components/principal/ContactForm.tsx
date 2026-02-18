"use client";

import { useRouter } from 'next/navigation';
import { Calculator, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactForm() {
  const router = useRouter();

  return (
    <section className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

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
            Responde 9 preguntas simples y nuestra IA calcula tu beneficio fiscal bajo la Ley 30309 en segundos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

          {/* Columna Izquierda: Beneficios */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-green-500/30 transition-colors duration-300 space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold text-white">¿Qué vas a descubrir?</h3>
            <ul className="space-y-4">
              {[
                { label: "Tu categoría fiscal", desc: "MIPYME o Gran Empresa según la Ley 30309." },
                { label: "Tu recuperación estimada", desc: "Cuánto puedes ahorrar en Impuesto a la Renta (S/)." },
                { label: "Semáforo de viabilidad", desc: "Si tu proyecto califica ante CONCYTEC/SUNAT." },
                { label: "Tu capa estratégica", desc: "I+D+i o Venturing: cuál es tu mejor ruta." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                    <p className="text-white/60 text-xs">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-white/30 text-xs pt-1">Sin registro · Sin tarjeta · 100% confidencial</p>
          </div>

          {/* Columna Derecha: CTA */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 text-center flex flex-col justify-center gap-6 hover:border-green-500/30 transition-colors duration-300">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500/15 border border-green-400/30 mx-auto">
              <Calculator className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Calcula tu beneficio fiscal</h3>
              <p className="text-white/60 text-sm">
                Basado en la <strong className="text-white">Arquitectura Fiscal 3 Capas V4</strong>. Resultado inmediato, sin tecnicismos.
              </p>
            </div>
            <Button
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-green-500/20 hover:-translate-y-1 transition-all duration-300"
              onClick={() => router.push('/calculadora-fiscal')}
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Iniciar Calculadora
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}