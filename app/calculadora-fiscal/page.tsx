"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
    ArrowLeft,
    ArrowRight,
    Calculator,
    CheckCircle2,
    AlertTriangle,
    Sparkles,
    Building2,
    Lightbulb,
    ClipboardList,
    ChevronRight,
    Lock,
    TrendingUp,
    ShieldCheck,
    XCircle,
    BarChart3,
    Info,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormData {
    ingresos: string;
    renta: string;
    sector: string;
    nombreProyecto: string;
    problemaTecnico: string;
    estadoTRL: string;
    presupuesto: string;
    equipoTecnico: string;
    modalidad: string;
}

const UIT = 5350;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function parseMoney(val: string): number {
    return parseFloat(val.replace(/[^0-9.]/g, "")) || 0;
}

function formatMoney(n: number): string {
    return n.toLocaleString("es-PE", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function calcularBeneficio(data: FormData) {
    const ingresos = parseMoney(data.ingresos);
    const renta = parseMoney(data.renta);
    const presupuesto = parseMoney(data.presupuesto);

    const esMIPYME = ingresos <= 2300 * UIT;
    const factorAdicional = esMIPYME ? 1.40 : 0.90;
    const deduccionAdicional = presupuesto * factorAdicional;
    const ahorroIR = (presupuesto + deduccionAdicional) * 0.295;
    const excede = ahorroIR > renta * 0.295;
    const ratioPorSol = presupuesto > 0 ? ahorroIR / presupuesto : 0;

    const trlRiesgoAlto = data.estadoTRL === "idea" || data.estadoTRL === "listo";
    const trlViable = data.estadoTRL === "pruebas" || data.estadoTRL === "prototipo";
    const sinEquipo = data.equipoTecnico === "no_buscar";
    const capa = trlViable ? "CAPA 2 (I+D+i)" : "CAPA 3 (Venturing)";

    return {
        esMIPYME,
        ahorroIR,
        ratioPorSol,
        excede,
        trlRiesgoAlto,
        sinEquipo,
        capa,
        deduccionPct: esMIPYME ? "240%" : "190%",
    };
}

// ─── Wizard Step Components ───────────────────────────────────────────────────

function MoneyInput({
    label, help, value, onChange,
}: {
    label: string; help: string; value: string; onChange: (v: string) => void;
}) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        onChange(raw ? `S/. ${parseInt(raw).toLocaleString("es-PE")}` : "");
    };
    return (
        <div className="space-y-2">
            <label className="block text-sm font-semibold text-white/90">{label}</label>
            <p className="text-xs text-white/50 italic">{help}</p>
            <input
                type="text"
                inputMode="numeric"
                value={value}
                onChange={handleChange}
                placeholder="S/. 0"
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-green-400/60 focus:bg-white/10 transition-all duration-200 text-lg font-mono"
            />
        </div>
    );
}

function RadioCard({
    value, selected, label, onSelect,
}: {
    value: string; selected: boolean; label: string; onSelect: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onSelect}
            className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 text-sm font-medium flex items-center gap-3 ${selected
                ? "border-green-400/70 bg-green-500/15 text-white"
                : "border-white/10 bg-white/5 text-white/60 hover:border-white/25 hover:text-white/80"
            }`}
        >
            <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all ${selected ? "border-green-400 bg-green-400" : "border-white/30"}`} />
            {label}
        </button>
    );
}

// ─── Result Block ─────────────────────────────────────────────────────────────

function ResultBlock({ data }: { data: FormData }) {
    const r = calcularBeneficio(data);
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/30 rounded-full px-4 py-1.5 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400 text-xs font-bold uppercase tracking-widest">Vista Previa Gratuita</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Tu Auditoría Fiscal Predictiva</h2>
                <p className="text-white/50 text-sm">Basada en Ley 30309 · Arquitectura Fiscal V4</p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-blue-600/10 border border-green-400/20 rounded-2xl p-6 space-y-4">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" /> Tesis Fiscal
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Calificación</p>
                        <p className="text-white font-bold text-lg">{r.esMIPYME ? "MIPYME" : "GRAN EMPRESA"}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Recuperación Estimada</p>
                        <p className="text-green-400 font-extrabold text-2xl">S/ {formatMoney(r.ahorroIR)}</p>
                        <p className="text-white/40 text-xs">vía Impuesto a la Renta</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Deducción Activada</p>
                        <p className="text-blue-400 font-extrabold text-2xl">{r.deduccionPct}</p>
                        <p className="text-white/40 text-xs">sobre tu inversión</p>
                    </div>
                </div>

                {r.excede && (
                    <div className="flex items-start gap-3 bg-yellow-500/10 border border-yellow-400/30 rounded-xl p-4">
                        <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <p className="text-yellow-300 text-sm">
                            <strong>Advertencia:</strong> El escudo fiscal calculado excede tu renta estimada. Ajusta el presupuesto del proyecto para optimizar el beneficio real.
                        </p>
                    </div>
                )}

                <p className="text-white/60 text-sm">
                    Por cada <strong className="text-white">S/ 1.00</strong> invertido, el Estado subsidia indirectamente{" "}
                    <strong className="text-green-400">S/ {r.ratioPorSol.toFixed(2)}</strong>.
                </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-blue-400" /> Semáforo de Viabilidad
                </h3>
                <div className="space-y-3">
                    {r.trlRiesgoAlto && (
                        <div className="flex items-start gap-3 bg-red-500/10 border border-red-400/20 rounded-xl p-4">
                            <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-red-300 font-semibold text-sm">Riesgo Detectado — Estado TRL</p>
                                <p className="text-white/60 text-xs mt-1">
                                    {data.estadoTRL === "idea"
                                        ? "Un proyecto en fase de idea (TRL 1-2) tiene alta probabilidad de rechazo CONCYTEC. Necesitas avanzar a pruebas de concepto antes de presentar."
                                        : "Un proyecto ya comercializado (TRL 8-9) no califica como I+D+i. Considera un spin-off de mejora tecnológica."}
                                </p>
                            </div>
                        </div>
                    )}
                    {!r.trlRiesgoAlto && (
                        <div className="flex items-start gap-3 bg-green-500/10 border border-green-400/20 rounded-xl p-4">
                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-green-300 font-semibold text-sm">TRL Viable — {r.capa}</p>
                                <p className="text-white/60 text-xs mt-1">
                                    Tu estado de desarrollo es compatible con los criterios de elegibilidad CONCYTEC/ProInnóvate.
                                </p>
                            </div>
                        </div>
                    )}
                    {r.sinEquipo && (
                        <div className="flex items-start gap-3 bg-red-500/10 border border-red-400/20 rounded-xl p-4">
                            <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-red-300 font-semibold text-sm">Riesgo Detectado — Equipo Técnico</p>
                                <p className="text-white/60 text-xs mt-1">
                                    Sin equipo técnico calificado, el proyecto es NO GO. Es obligatorio contratar un Centro de Investigación o fichar un PhD/MSc.
                                </p>
                            </div>
                        </div>
                    )}
                    <div className="flex items-start gap-3 bg-blue-500/10 border border-blue-400/20 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-blue-300 font-semibold text-sm">Oportunidad Identificada — {data.sector}</p>
                            <p className="text-white/60 text-xs mt-1">
                                El proyecto <strong className="text-white">"{data.nombreProyecto}"</strong> en el sector{" "}
                                <strong className="text-white">{data.sector}</strong> es candidato para{" "}
                                <strong className="text-blue-300">{r.capa}</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 rounded-2xl p-6 text-center space-y-2">
                <p className="text-white/70 text-sm leading-relaxed">
                    Tu proyecto es candidato para{" "}
                    <strong className="text-green-400">{r.capa}</strong>. Para ver la estrategia de defensa ante SUNAT, el desglose técnico completo y la Matriz de Elegibilidad de Gastos:
                </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 backdrop-blur-sm bg-slate-900/80 z-10 flex flex-col items-center justify-center gap-4 p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500/20 to-blue-600/20 border border-green-400/30 flex items-center justify-center">
                        <Lock className="w-7 h-7 text-green-400" />
                    </div>
                    <div>
                        <p className="text-white font-bold text-lg">Propuesta Técnica Detallada</p>
                        <p className="text-white/50 text-sm mt-1">
                            Desbloquea la Arquitectura Fiscal 3 Capas completa con estrategia de defensa SUNAT, cronograma y mapa de riesgos.
                        </p>
                    </div>
                    <a
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Desbloquear Propuesta Completa
                        <ChevronRight className="w-4 h-4" />
                    </a>
                    <p className="text-white/30 text-xs">Validación de equipo técnico incluida</p>
                </div>
                <div className="p-6 space-y-3 select-none pointer-events-none opacity-30">
                    <p className="text-white font-bold">1. ESTRUCTURACIÓN DEL PROYECTO</p>
                    <p className="text-white/60 text-sm">Título Técnico Sugerido: Desarrollo de sistema de ...</p>
                    <p className="text-white/60 text-sm">Incertidumbre Tecnológica: Hipótesis nula: No es posible...</p>
                    <p className="text-white font-bold mt-4">2. MATRIZ DE ELEGIBILIDAD DE GASTOS</p>
                    <div className="grid grid-cols-4 gap-2 text-xs text-white/60">
                        <span>RRHH</span><span>35%</span><span>S/ ██████</span><span>Solo planilla</span>
                        <span>Equipos</span><span>15%</span><span>S/ ██████</span><span>Depreciación</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Simulador Input ─────────────────────────────────────────────────────────

function SimInput({
    label, hint, value, onChange,
}: {
    label: string; hint: string; value: string; onChange: (v: string) => void;
}) {
    const display = Number(value.replace(/[^0-9]/g, "") || "0").toLocaleString("es-PE");
    return (
        <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-white/90">{label}</label>
            {hint && <p className="text-xs text-white/45 italic">{hint}</p>}
            <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 text-sm font-mono select-none">S/</span>
                <input
                    type="text"
                    inputMode="numeric"
                    value={display}
                    onChange={(e) => {
                        const r = e.target.value.replace(/[^0-9]/g, "");
                        onChange(r || "0");
                    }}
                    className="w-full bg-white/5 border border-white/15 rounded-xl pl-9 pr-4 py-3 text-white focus:outline-none focus:border-green-400/60 focus:bg-white/10 transition-all duration-200 font-mono"
                />
            </div>
        </div>
    );
}

// ─── Simulador CONCYTEC ───────────────────────────────────────────────────────

function SimuladorCONCYTEC() {
    const [inversion, setInversion] = useState("1000000");
    const [ventas, setVentas] = useState("3000000");
    const [costos, setCostos] = useState("1200000");
    const [gcaf, setGcaf] = useState("600000");
    const [deduccion, setDeduccion] = useState<"240" | "190">("240");

    const raw = (v: string) => parseFloat(v.replace(/[^0-9.]/g, "")) || 0;
    const inv = raw(inversion);
    const ven = raw(ventas);
    const cos = raw(costos);
    const gaf = raw(gcaf);
    const factor = deduccion === "240" ? 2.40 : 1.90;

    // Theoretical escudo (matches ARS calculator formula)
    const escudoTotal = inv * factor * 0.295;
    const escudoAdicional = inv * (factor - 1) * 0.295;
    const costoNeto = inv - escudoTotal;

    // Comparison table (actual fiscal impact)
    const utilidadSIN = ven - cos - gaf - inv;
    const utilidadCON = ven - cos - gaf - inv * factor;
    const irSIN = Math.max(0, utilidadSIN) * 0.295;
    const irCON = Math.max(0, utilidadCON) * 0.295;
    const ahorro = irSIN - irCON;

    const tableRows = [
        { label: "Ventas Netas", sin: ven, con: ven, type: "income" },
        { label: "(-) Costo de Ventas", sin: cos, con: cos, type: "cost" },
        { label: "(-) GCAF", sin: gaf, con: gaf, type: "cost" },
        { label: `(-) I+D+i (${deduccion}%)`, sin: inv, con: inv * factor, type: "deduction" },
        { label: "Utilidad Imponible", sin: utilidadSIN, con: utilidadCON, type: "subtotal" },
        { label: "IR 29.5%", sin: irSIN, con: irCON, type: "tax" },
    ];

    function fmtCell(val: number, type: string) {
        if (type === "income") return `S/ ${formatMoney(val)}`;
        if (type === "cost" || type === "deduction") return `(${formatMoney(val)})`;
        if (type === "subtotal") return val < 0 ? `(${formatMoney(-val)})` : `S/ ${formatMoney(val)}`;
        if (type === "tax") return val === 0 ? "S/ 0" : `(${formatMoney(val)})`;
        return `S/ ${formatMoney(val)}`;
    }

    function cellColor(type: string, isCon: boolean, val: number) {
        if (type === "income") return "text-white/80";
        if (type === "cost") return "text-white/60";
        if (type === "deduction") return isCon ? "text-blue-300" : "text-white/60";
        if (type === "subtotal") return isCon && val >= 0 ? "text-green-400 font-bold" : isCon && val < 0 ? "text-green-400 font-bold" : "text-white font-bold";
        if (type === "tax") return isCon ? "text-green-400 font-semibold" : "text-red-300/80";
        return "text-white/70";
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Simulador Ley 30309 / 32539</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    Calcula tu escudo fiscal{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                        en tiempo real.
                    </span>
                </h2>
                <p className="text-white/50 text-sm">Tasa IR 29.5% · UIT S/ 5,350 · Actualización instantánea</p>
            </div>

            {/* Inputs + Table */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Inputs */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-5">
                    <h3 className="text-white font-bold text-base flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-blue-400" />
                        Datos de tu empresa
                    </h3>

                    <SimInput
                        label="Inversión en I+D+i"
                        hint="Monto total que invertirás en investigación y desarrollo."
                        value={inversion}
                        onChange={setInversion}
                    />
                    <SimInput
                        label="Ventas Netas"
                        hint="Ingresos netos del ejercicio fiscal."
                        value={ventas}
                        onChange={setVentas}
                    />
                    <SimInput
                        label="Costo de Ventas"
                        hint="Costo directo de producción o prestación del servicio."
                        value={costos}
                        onChange={setCostos}
                    />
                    <SimInput
                        label="Gastos Adm. y Financieros (GCAF)"
                        hint="Gastos operativos y financieros del periodo."
                        value={gcaf}
                        onChange={setGcaf}
                    />

                    <div className="space-y-1.5">
                        <label className="block text-sm font-semibold text-white/90">Tipo de empresa</label>
                        <p className="text-xs text-white/45 italic">Determina el porcentaje de deducción aplicable</p>
                        <select
                            value={deduccion}
                            onChange={(e) => setDeduccion(e.target.value as "240" | "190")}
                            className="w-full bg-slate-800 border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400/60 transition-all duration-200 cursor-pointer"
                        >
                            <option value="240">MIPYME — Deducción 240% (≤ S/ 12.3M ventas)</option>
                            <option value="190">Gran Empresa — Deducción 190% (&gt; S/ 12.3M ventas)</option>
                        </select>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-4">
                    <h3 className="text-white font-bold text-base flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-green-400" />
                        Comparativo fiscal
                    </h3>

                    <div className="overflow-x-auto -mx-1">
                        <table className="w-full text-sm min-w-[280px]">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left text-white/40 text-xs pb-2 pr-3 font-medium w-1/2">Concepto</th>
                                    <th className="text-right text-red-300/70 text-xs pb-2 pr-3 font-bold">SIN beneficio</th>
                                    <th className="text-right text-green-300/80 text-xs pb-2 font-bold">CON beneficio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableRows.map((row, i) => (
                                    <tr
                                        key={i}
                                        className={`${row.type === "subtotal" || row.type === "tax" ? "border-t border-white/10" : ""}`}
                                    >
                                        <td className={`py-1.5 pr-3 text-xs leading-snug ${
                                            row.type === "subtotal" ? "text-white font-semibold pt-2" :
                                            row.type === "tax" ? "text-white/70 font-medium" : "text-white/55"
                                        }`}>
                                            {row.label}
                                        </td>
                                        <td className={`py-1.5 pr-3 text-right text-xs font-mono ${
                                            row.type === "subtotal" ? "text-white font-bold pt-2" :
                                            row.type === "tax" ? "text-red-300/80" : "text-white/65"
                                        }`}>
                                            {fmtCell(row.sin, row.type)}
                                        </td>
                                        <td className={`py-1.5 text-right text-xs font-mono ${
                                            row.type === "subtotal" ? "pt-2" : ""
                                        } ${cellColor(row.type, true, row.con)}`}>
                                            {fmtCell(row.con, row.type)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Ahorro row */}
                    <div className="bg-green-500/10 border border-green-400/25 rounded-xl p-3 flex justify-between items-center">
                        <span className="text-green-300 text-xs font-bold uppercase tracking-wide">Ahorro en IR</span>
                        <span className="text-green-400 font-extrabold text-base font-mono">
                            S/ {formatMoney(ahorro)}
                        </span>
                    </div>

                    {utilidadSIN < inv * factor && inv > 0 && (
                        <div className="flex items-start gap-2 bg-yellow-500/10 border border-yellow-400/20 rounded-xl p-3">
                            <Info className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <p className="text-yellow-300/80 text-xs leading-relaxed">
                                Los ingresos no absorben la deducción completa. El exceso genera pérdida tributaria arrastrable hasta 4 ejercicios.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Escudo Total */}
                <div className="bg-gradient-to-br from-green-500/15 to-emerald-600/10 border border-green-400/25 rounded-2xl p-5 text-center space-y-2">
                    <p className="text-white/50 text-xs uppercase tracking-widest font-medium">Escudo Total</p>
                    <p className="text-green-400 font-extrabold text-2xl sm:text-3xl">
                        S/ {formatMoney(escudoTotal)}
                    </p>
                    <p className="text-white/45 text-xs">
                        {inv > 0 ? `${((escudoTotal / inv) * 100).toFixed(1)}% de la inversión` : "—"}
                    </p>
                    <p className="text-white/25 text-xs font-mono">
                        {inv > 0 ? `${formatMoney(inv)} × ${factor.toFixed(2)} × 29.5%` : ""}
                    </p>
                </div>

                {/* Escudo Adicional */}
                <div className="bg-gradient-to-br from-blue-500/15 to-indigo-600/10 border border-blue-400/25 rounded-2xl p-5 text-center space-y-2">
                    <p className="text-white/50 text-xs uppercase tracking-widest font-medium">Escudo Adicional</p>
                    <p className="text-blue-400 font-extrabold text-2xl sm:text-3xl">
                        S/ {formatMoney(escudoAdicional)}
                    </p>
                    <p className="text-white/45 text-xs">
                        {inv > 0 ? `${((escudoAdicional / inv) * 100).toFixed(1)}% de la inversión` : "—"}
                    </p>
                    <p className="text-white/25 text-xs font-mono">
                        {inv > 0 ? `${formatMoney(inv)} × ${(factor - 1).toFixed(2)} × 29.5%` : ""}
                    </p>
                </div>

                {/* Costo Neto */}
                <div className="bg-gradient-to-br from-purple-500/15 to-pink-600/10 border border-purple-400/25 rounded-2xl p-5 text-center space-y-2">
                    <p className="text-white/50 text-xs uppercase tracking-widest font-medium">Costo Neto</p>
                    <p className={`font-extrabold text-2xl sm:text-3xl ${costoNeto <= 0 ? "text-green-400" : "text-purple-400"}`}>
                        {costoNeto <= 0 ? "+" : ""}S/ {formatMoney(Math.abs(costoNeto))}
                    </p>
                    <p className="text-white/45 text-xs">
                        {inv > 0 ? `${((Math.abs(costoNeto) / inv) * 100).toFixed(1)}% de la inversión` : "—"}
                        {costoNeto <= 0 ? " (ganancia neta)" : ""}
                    </p>
                    <p className="text-white/25 text-xs font-mono">
                        {inv > 0 ? `${formatMoney(inv)} − Escudo Total` : ""}
                    </p>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-3 bg-white/3 border border-white/8 rounded-xl p-4">
                <Info className="w-4 h-4 text-white/30 flex-shrink-0 mt-0.5" />
                <p className="text-white/30 text-xs leading-relaxed">
                    Los resultados son estimados orientativos con fines informativos basados en Ley 30309 (modificada por Ley 32539). El beneficio real depende de la renta imponible del ejercicio, la calificación del proyecto por CONCYTEC/ProInnóvate y la verificación de SUNAT. Los activos fijos (maquinaria, equipos) no son deducibles bajo este beneficio salvo los gastos de depreciación directamente asociados al proyecto. No constituye asesoría legal ni tributaria.
                </p>
            </div>
        </div>
    );
}

// ─── Wizard Steps ─────────────────────────────────────────────────────────────

const STEPS = [
    { id: 1, label: "Tu Tamaño", icon: Building2 },
    { id: 2, label: "Tu Idea", icon: Lightbulb },
    { id: 3, label: "Tu Plan", icon: ClipboardList },
];

const INITIAL: FormData = {
    ingresos: "",
    renta: "",
    sector: "",
    nombreProyecto: "",
    problemaTecnico: "",
    estadoTRL: "",
    presupuesto: "",
    equipoTecnico: "",
    modalidad: "",
};

// ─── Main Page ────────────────────────────────────────────────────────────────

function CalculadoraFiscalInner() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState<"calculadora" | "simulador">(
        searchParams.get("tab") === "simulador" ? "simulador" : "calculadora"
    );

    // Wizard state
    const [step, setStep] = useState(1);
    const [data, setData] = useState<FormData>(INITIAL);
    const [showResult, setShowResult] = useState(false);

    const set = (key: keyof FormData) => (val: string) =>
        setData((prev) => ({ ...prev, [key]: val }));

    const canNext = () => {
        if (step === 1) return data.ingresos && data.renta && data.sector.trim();
        if (step === 2) return data.nombreProyecto.trim() && data.problemaTecnico.trim() && data.estadoTRL;
        if (step === 3) return data.presupuesto && data.equipoTecnico && data.modalidad;
        return false;
    };

    const handleNext = () => {
        if (step < 3) setStep((s) => s + 1);
        else setShowResult(true);
    };

    const progress = showResult ? 100 : ((step - 1) / 3) * 100;

    const isSimulador = activeTab === "simulador";

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-950 to-slate-900 py-10 px-4">
            {/* Back */}
            <button
                onClick={() => {
                    if (isSimulador) return router.back();
                    if (showResult) setShowResult(false);
                    else if (step > 1) setStep((s) => s - 1);
                    else router.back();
                }}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-6 ml-2 sm:ml-0 max-w-5xl mx-auto w-full"
            >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">
                    {isSimulador ? "Volver" : showResult ? "Editar respuestas" : step > 1 ? "Paso anterior" : "Volver"}
                </span>
            </button>

            <div className="max-w-5xl mx-auto space-y-8">
                {/* Tab Switcher */}
                <div className="flex justify-center">
                    <div className="flex bg-white/5 border border-white/10 rounded-2xl p-1.5 gap-1.5">
                        <button
                            onClick={() => setActiveTab("calculadora")}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                                activeTab === "calculadora"
                                    ? "bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg"
                                    : "text-white/50 hover:text-white/80"
                            }`}
                        >
                            <Calculator className="w-4 h-4" />
                            <span className="hidden sm:inline">Calculadora Diagnóstica</span>
                            <span className="sm:hidden">Diagnóstica</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("simulador")}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                                activeTab === "simulador"
                                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                                    : "text-white/50 hover:text-white/80"
                            }`}
                        >
                            <BarChart3 className="w-4 h-4" />
                            <span className="hidden sm:inline">Simulador CONCYTEC</span>
                            <span className="sm:hidden">Simulador</span>
                        </button>
                    </div>
                </div>

                {/* ── TAB: SIMULADOR ── */}
                {activeTab === "simulador" && (
                    <SimuladorCONCYTEC />
                )}

                {/* ── TAB: CALCULADORA DIAGNÓSTICA ── */}
                {activeTab === "calculadora" && (
                    <div className="max-w-2xl mx-auto space-y-8">
                        {/* Header */}
                        {!showResult && (
                            <div className="text-center space-y-3">
                                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/30 rounded-full px-4 py-1.5">
                                    <Calculator className="w-3.5 h-3.5 text-green-400" />
                                    <span className="text-green-400 text-xs font-bold uppercase tracking-widest">Calculadora Fiscal IA</span>
                                </div>
                                <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                                    Descubre cuánto dinero puedes recuperar<br />
                                    <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                                        de tus impuestos innovando.
                                    </span>
                                </h1>
                                <p className="text-white/50 text-sm">Ley 30309 · CONCYTEC · SUNAT · Sin tecnicismos</p>
                            </div>
                        )}

                        {/* Progress bar */}
                        {!showResult && (
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    {STEPS.map((s) => {
                                        const Icon = s.icon;
                                        const active = s.id === step;
                                        const done = s.id < step;
                                        return (
                                            <div key={s.id} className="flex flex-col items-center gap-1 flex-1">
                                                <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${done ? "bg-green-500 border-green-500" : active ? "bg-green-500/20 border-green-400" : "bg-white/5 border-white/15"}`}>
                                                    {done ? (
                                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                                    ) : (
                                                        <Icon className={`w-4 h-4 ${active ? "text-green-400" : "text-white/30"}`} />
                                                    )}
                                                </div>
                                                <span className={`text-xs font-medium hidden sm:block ${active ? "text-white" : "text-white/40"}`}>
                                                    {s.label}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-500"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                                <p className="text-right text-xs text-white/40">
                                    Paso {step} de 3 — {STEPS[step - 1].label}
                                </p>
                            </div>
                        )}

                        {/* Card */}
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
                            {showResult ? (
                                <ResultBlock data={data} />
                            ) : (
                                <div className="space-y-6">
                                    {/* PASO 1 */}
                                    {step === 1 && (
                                        <>
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-400/40 flex items-center justify-center">
                                                    <Building2 className="w-4 h-4 text-green-400" />
                                                </div>
                                                <div>
                                                    <h2 className="text-white font-bold text-lg">Paso 1: Tu Tamaño</h2>
                                                    <p className="text-white/40 text-xs">Para saber cuánto te devuelve SUNAT</p>
                                                </div>
                                            </div>
                                            <MoneyInput label="1. ¿Cuánto vendió tu empresa el año pasado (aprox)? *" help="El monto total de tus ventas netas." value={data.ingresos} onChange={set("ingresos")} />
                                            <MoneyInput label="2. ¿Cuánta utilidad (ganancia) calculas tener este año? *" help="Es el monto sobre el cual pagarías impuesto a la renta." value={data.renta} onChange={set("renta")} />
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-white/90">3. ¿A qué se dedica tu negocio principalmente? *</label>
                                                <input type="text" value={data.sector} onChange={(e) => set("sector")(e.target.value)} placeholder="Ej: Vendo arándanos, Hago software, Transporte" className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-green-400/60 focus:bg-white/10 transition-all duration-200" />
                                            </div>
                                        </>
                                    )}

                                    {/* PASO 2 */}
                                    {step === 2 && (
                                        <>
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center">
                                                    <Lightbulb className="w-4 h-4 text-blue-400" />
                                                </div>
                                                <div>
                                                    <h2 className="text-white font-bold text-lg">Paso 2: Tu Idea</h2>
                                                    <p className="text-white/40 text-xs">Para saber si CONCYTEC lo aprueba</p>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-white/90">4. Ponle un nombre a tu idea o proyecto *</label>
                                                <input type="text" value={data.nombreProyecto} onChange={(e) => set("nombreProyecto")(e.target.value)} placeholder="Ej: Sistema de riego inteligente con IA" className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-green-400/60 focus:bg-white/10 transition-all duration-200" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-white/90">5. ¿Cuál es el problema más difícil que te impide lograrlo hoy? *</label>
                                                <p className="text-xs text-white/50 italic">No me digas que falta dinero. Dime qué parte técnica no funciona o es muy difícil de hacer.</p>
                                                <textarea value={data.problemaTecnico} onChange={(e) => set("problemaTecnico")(e.target.value)} placeholder="Ej: No existe un sensor lo suficientemente preciso para medir la humedad del suelo en tiempo real a bajo costo..." rows={4} className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-green-400/60 focus:bg-white/10 transition-all duration-200 resize-none" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-white/90">6. ¿En qué estado está tu idea hoy? *</label>
                                                <div className="space-y-2">
                                                    {[
                                                        { value: "idea", label: "Es solo una idea en mi cabeza o papel." },
                                                        { value: "pruebas", label: "Ya hice pruebas pequeñas o de laboratorio." },
                                                        { value: "prototipo", label: "Tengo un prototipo que funciona (aunque sea feo)." },
                                                        { value: "listo", label: "Ya está listo y vendiéndose (quiero mejorarlo)." },
                                                    ].map((opt) => (
                                                        <RadioCard key={opt.value} value={opt.value} label={opt.label} selected={data.estadoTRL === opt.value} onSelect={() => set("estadoTRL")(opt.value)} />
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {/* PASO 3 */}
                                    {step === 3 && (
                                        <>
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center">
                                                    <ClipboardList className="w-4 h-4 text-purple-400" />
                                                </div>
                                                <div>
                                                    <h2 className="text-white font-bold text-lg">Paso 3: Tu Plan</h2>
                                                    <p className="text-white/40 text-xs">Para saber si es viable</p>
                                                </div>
                                            </div>
                                            <MoneyInput label="7. ¿Cuánto planeas invertir en total en este proyecto? *" help="Presupuesto total estimado para el proyecto de I+D+i." value={data.presupuesto} onChange={set("presupuesto")} />
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-white/90">8. ¿Tienes expertos técnicos (ingenieros o científicos) en tu equipo hoy? *</label>
                                                <div className="space-y-2">
                                                    {[
                                                        { value: "si_planilla", label: "Sí, tengo personal calificado en planilla." },
                                                        { value: "no_contratar", label: "No, pero pienso contratar o subcontratar." },
                                                        { value: "no_buscar", label: "No tengo y no sé a quién buscar." },
                                                    ].map((opt) => (
                                                        <RadioCard key={opt.value} value={opt.value} label={opt.label} selected={data.equipoTecnico === opt.value} onSelect={() => set("equipoTecnico")(opt.value)} />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-white/90">9. ¿Cómo lo vas a ejecutar? *</label>
                                                <div className="space-y-2">
                                                    {[
                                                        { value: "interno", label: "Lo haremos nosotros mismos (Interno)." },
                                                        { value: "externo", label: "Contrataré a una Universidad o Startup experta." },
                                                        { value: "mixto", label: "Una mezcla de ambos." },
                                                    ].map((opt) => (
                                                        <RadioCard key={opt.value} value={opt.value} label={opt.label} selected={data.modalidad === opt.value} onSelect={() => set("modalidad")(opt.value)} />
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {/* Nav buttons */}
                                    <div className="flex gap-3 pt-2">
                                        {step > 1 && (
                                            <button onClick={() => setStep((s) => s - 1)} className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all duration-200 text-sm font-medium">
                                                <ArrowLeft className="w-4 h-4" />
                                                Anterior
                                            </button>
                                        )}
                                        <button
                                            onClick={handleNext}
                                            disabled={!canNext()}
                                            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-green-500/20 hover:-translate-y-0.5 disabled:translate-y-0 transition-all duration-300"
                                        >
                                            {step === 3 ? (
                                                <><Sparkles className="w-4 h-4" /> Calcular mi Beneficio Fiscal</>
                                            ) : (
                                                <>Siguiente <ArrowRight className="w-4 h-4" /></>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer note */}
                        <p className="text-center text-white/25 text-xs pb-6">
                            Los cálculos son estimados orientativos basados en Ley 30309 (UIT S/ 5,350). No constituyen asesoría legal ni tributaria.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function CalculadoraFiscal() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-950 to-slate-900" />}>
            <CalculadoraFiscalInner />
        </Suspense>
    );
}
