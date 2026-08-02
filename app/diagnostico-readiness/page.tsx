"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/principal/PageHeader";
import Footer from "@/components/principal/Footer";
import {
  ArrowRight,
  ClipboardList,
  Gauge,
  ListChecks,
  Map,
  ShieldAlert,
  Check,
  X,
} from "lucide-react";

const CONTACT_EMAIL = "contacto@encsust4in4ble.earth";

const dimensiones = [
  { n: 1, label: "Claridad del problema y decisión", peso: 10 },
  { n: 2, label: "Validación de la solución", peso: 10 },
  { n: 3, label: "Mercado, pagador y demanda", peso: 10 },
  { n: 4, label: "Equipo y sponsor", peso: 10 },
  { n: 5, label: "Gobernanza", peso: 10 },
  { n: 6, label: "Evidencia y data room", peso: 10 },
  { n: 7, label: "Modelo financiero", peso: 15 },
  { n: 8, label: "Impacto y MRV", peso: 10 },
  { n: 9, label: "Riesgos y cumplimiento", peso: 10 },
  { n: 10, label: "Urgencia y ventana de oportunidad", peso: 5 },
];

const recibe = [
  { icon: Gauge, t: "Scorecard de 10 dimensiones", d: "Puntaje por dimensión con lectura ejecutiva." },
  { icon: ListChecks, t: "Semáforo de brechas", d: "Qué está listo, qué falta y qué es crítico." },
  { icon: ShieldAlert, t: "Mapa de riesgos", d: "Los riesgos que un comité o fondo señalaría primero." },
  { icon: Map, t: "Hoja de ruta a 90 días", d: "El siguiente movimiento, priorizado y accionable." },
];

const noIncluye = [
  "Formulación completa del proyecto.",
  "Captación de fondos o intermediación de capital.",
  "Garantía de aprobación ante un comité o convocatoria.",
];

const etapas = [
  "Concepto", "Diseño", "Formulado", "Postulado", "Seleccionado", "Piloto", "Implementado",
];

export default function DiagnosticoReadinessPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    cargoOrg: "",
    pais: "",
    sector: "",
    etapa: "",
    problema: "",
    decision: "",
    sponsor: "",
    presupuesto: "",
    enlace: "",
    consent: false,
  });

  const update = (k: keyof typeof form, v: string | boolean) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Nombre: ${form.nombre}`,
      `Cargo y organización: ${form.cargoOrg}`,
      `País: ${form.pais}`,
      `Sector: ${form.sector}`,
      `Etapa del proyecto: ${form.etapa}`,
      `Sponsor interno: ${form.sponsor}`,
      `Presupuesto de consultoría: ${form.presupuesto}`,
      `Enlace a documentación: ${form.enlace || "—"}`,
      ``,
      `Problema / decisión prioritaria:`,
      form.problema,
      ``,
      `Decisión y fecha límite: ${form.decision}`,
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Solicitud de evaluación de encaje — ${form.nombre}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  };

  const inputCls =
    "w-full bg-enc-forest-900/60 border border-white/12 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-enc-gold-500/50 transition-colors";
  const labelCls = "block text-white/70 text-xs font-medium mb-1.5";

  return (
    <div className="min-h-screen bg-gradient-to-br from-enc-forest-900 via-enc-charcoal to-enc-forest-900">
      <PageHeader />

      <main className="pt-24 sm:pt-28">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-14">
          <p className="text-enc-gold-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Diagnóstico Ejecutivo de Readiness
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-[1.12] font-display">
            ¿Su proyecto está realmente listo para un comité, fondo o aliado estratégico?
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            En siete días identificamos qué está listo, qué falta demostrar y cuál es el siguiente
            movimiento que evita perder tiempo, reputación y capital.
          </p>
          <a
            href="#aplicar"
            className="inline-flex items-center gap-2 bg-enc-gold-500 hover:bg-enc-gold-600 text-enc-charcoal px-7 py-3.5 rounded-full font-bold transition-all duration-300 hover:scale-105"
          >
            Solicitar el diagnóstico
            <ArrowRight size={18} />
          </a>
        </section>

        {/* Qué evalúa */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-white/8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
              Diez dimensiones de readiness
            </h2>
            <p className="text-white/60 text-sm max-w-xl mx-auto">
              Evaluamos el proyecto con el mismo lente que aplicaría un comité de inversión o un fondo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {dimensiones.map((d) => (
              <div
                key={d.n}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
              >
                <span className="shrink-0 w-8 h-8 rounded-lg bg-enc-gold-500/15 text-enc-gold-500 font-bold text-sm flex items-center justify-center">
                  {d.n}
                </span>
                <span className="text-white/80 text-sm flex-grow">{d.label}</span>
                <span className="shrink-0 text-white/35 text-xs">peso {d.peso}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Qué recibe */}
        <section className="bg-white/[0.02] border-y border-white/8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-10 text-center">
              Qué recibe
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {recibe.map((r) => (
                <div key={r.t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="w-11 h-11 rounded-xl bg-enc-teal-600/20 text-enc-teal-300 flex items-center justify-center mb-4">
                    <r.icon size={22} />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1.5">{r.t}</h3>
                  <p className="text-white/55 text-xs leading-relaxed">{r.d}</p>
                </div>
              ))}
            </div>

            {/* Cómo funciona */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm text-white/60">
              {["Formulario de aplicación", "Sesión de 90 minutos", "Análisis", "Devolución"].map(
                (paso, i, arr) => (
                  <span key={paso} className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-2">
                      <ClipboardList size={15} className="text-enc-gold-500" />
                      {paso}
                    </span>
                    {i < arr.length - 1 && <ArrowRight size={14} className="text-white/25" />}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* Qué NO incluye */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white mb-4">Qué no incluye</h2>
            <ul className="space-y-2.5">
              {noIncluye.map((n) => (
                <li key={n} className="flex items-start gap-3 text-white/65 text-sm">
                  <X size={16} className="text-white/30 shrink-0 mt-0.5" />
                  {n}
                </li>
              ))}
            </ul>
            <p className="text-white/40 text-xs mt-5">
              El diagnóstico orienta la decisión; no sustituye el criterio profesional ni permite
              avanzar sin sponsor, presupuesto y disposición para compartir información.
            </p>
          </div>
        </section>

        {/* Formulario */}
        <section id="aplicar" className="bg-white/[0.02] border-t border-white/8 scroll-mt-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
            <div className="text-center mb-8">
              <p className="text-enc-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">
                Evaluación de encaje
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Solicite su diagnóstico
              </h2>
              <p className="text-white/60 text-sm mt-3">
                Trabajamos con un número limitado de iniciativas. Cuéntenos su caso y le
                confirmamos si hay encaje.
              </p>
            </div>

            {sent ? (
              <div className="rounded-2xl border border-enc-gold-500/30 bg-enc-gold-500/[0.06] p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-enc-gold-500/20 text-enc-gold-500 flex items-center justify-center mx-auto mb-4">
                  <Check size={24} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Casi listo</h3>
                <p className="text-white/65 text-sm">
                  Se abrió su cliente de correo con la solicitud lista para enviar a{" "}
                  <span className="text-enc-gold-500">{CONTACT_EMAIL}</span>. Si no se abrió,
                  escríbanos directamente a esa dirección.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Nombre y apellido *</label>
                    <input required className={inputCls} value={form.nombre}
                      onChange={(e) => update("nombre", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Cargo y organización *</label>
                    <input required className={inputCls} value={form.cargoOrg}
                      onChange={(e) => update("cargoOrg", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>País *</label>
                    <input required className={inputCls} value={form.pais}
                      onChange={(e) => update("pais", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Sector *</label>
                    <input required className={inputCls} value={form.sector}
                      onChange={(e) => update("sector", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Etapa del proyecto *</label>
                    <select required className={`${inputCls} cursor-pointer`} value={form.etapa}
                      onChange={(e) => update("etapa", e.target.value)}>
                      <option value="" className="bg-slate-800">Seleccionar…</option>
                      {etapas.map((et) => (
                        <option key={et} value={et} className="bg-slate-800">{et}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>¿Hay sponsor interno? *</label>
                    <select required className={`${inputCls} cursor-pointer`} value={form.sponsor}
                      onChange={(e) => update("sponsor", e.target.value)}>
                      <option value="" className="bg-slate-800">Seleccionar…</option>
                      <option value="Sí" className="bg-slate-800">Sí</option>
                      <option value="No" className="bg-slate-800">No</option>
                      <option value="En definición" className="bg-slate-800">En definición</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Problema o decisión prioritaria *</label>
                  <textarea required rows={4} className={inputCls} value={form.problema}
                    onChange={(e) => update("problema", e.target.value)}
                    placeholder="¿Qué necesita destrabar o demostrar?" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Decisión y fecha límite *</label>
                    <input required className={inputCls} value={form.decision}
                      onChange={(e) => update("decision", e.target.value)}
                      placeholder="Ej.: comité en octubre" />
                  </div>
                  <div>
                    <label className={labelCls}>Presupuesto de consultoría *</label>
                    <select required className={`${inputCls} cursor-pointer`} value={form.presupuesto}
                      onChange={(e) => update("presupuesto", e.target.value)}>
                      <option value="" className="bg-slate-800">Seleccionar…</option>
                      <option value="Asignado" className="bg-slate-800">Asignado</option>
                      <option value="En evaluación" className="bg-slate-800">En evaluación</option>
                      <option value="Aún no" className="bg-slate-800">Aún no</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Enlace a documentación (opcional)</label>
                  <input type="url" className={inputCls} value={form.enlace}
                    onChange={(e) => update("enlace", e.target.value)}
                    placeholder="https://…" />
                </div>

                <label className="flex items-start gap-3 text-white/60 text-xs cursor-pointer pt-1">
                  <input type="checkbox" required checked={form.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                    className="mt-0.5 accent-enc-gold-500" />
                  Autorizo el tratamiento de estos datos para evaluar el encaje de mi solicitud y ser
                  contactado por ENC Sust4in4ble.
                </label>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-enc-gold-500 hover:bg-enc-gold-600 text-enc-charcoal py-3.5 rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5"
                >
                  Enviar solicitud
                  <ArrowRight size={18} />
                </button>
                <p className="text-white/30 text-xs text-center">
                  Información confidencial · Atención selectiva
                </p>
              </form>
            )}

            <p className="text-center text-white/40 text-xs mt-8">
              ¿Prefiere ver primero las opciones?{" "}
              <Link href="/soluciones" className="text-enc-teal-300 hover:text-white transition-colors">
                Ver soluciones
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
