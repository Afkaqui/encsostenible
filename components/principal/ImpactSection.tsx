"use client";

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Zap, CheckCircle, ExternalLink } from 'lucide-react';
import Image from 'next/image';

import ImageCard001 from '@/src/images/proyectos/001_Fundo.jpeg';
import ImageCard002 from '@/src/images/proyectos/002_Eywa.jpg';
import ImageCard003 from '@/src/images/proyectos/003_Randy.jpeg';
import ImageCard004 from '@/src/images/proyectos/004_Richard.jpeg';
import ImageCard005 from '@/src/images/proyectos/005_Chantikuy.jpeg';
import ImageCard006 from '@/src/images/proyectos/006_Erick.png';

type Categoria = 'todos' | 'cibs' | 'coautoria';

type Proyecto = {
  titulo: string;
  reto: string;
  solucion: string;
  resultado: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  categoria: 'cibs' | 'coautoria';
  tags: string[];
  fecha: string;
  desarrolloLabel: string;
  desarrollo_nombre: string;
  desarrollo_enlace: string;
  contacto: string;
};

const casosEstudio: Proyecto[] = [
  // ── Ecosistema CIBS ──────────────────────────────────────────────────────
  {
    titulo: "Fundo San Rocco — La Sinergia Agroindustrial",
    reto: "Evitar la fuga de valor de vainilla amazónica, impulsando una bioeconomía circular.",
    solucion: "Cadena de valor integrada con agrotecnología (AGRIPRES, IA), procesamiento avanzado (CO₂, liofilización) y conocimiento.",
    resultado: "Modelo de triple impacto, escalable y regenerativo. Valoriza la biodiversidad amazónica.",
    image: ImageCard001,
    categoria: 'cibs',
    tags: ["Bioeconomía", "Vainilla", "Agrotecnología", "Triple Impacto"],
    fecha: "2024",
    desarrolloLabel: "Liderado por",
    desarrollo_nombre: "Russell Lorenzo Pujay",
    desarrollo_enlace: "https://www.linkedin.com/in/russellpuj/",
    contacto: "https://www.linkedin.com/pulse/cibs-fundo-san-rocco-la-sinergia-agroindustrial-que-valora-vainilla-boile"
  },
  {
    titulo: "EYWA — La Sinergia Territorial",
    reto: "La falta de confianza y el greenwashing impiden que el capital privado fluya hacia proyectos de impacto climático.",
    solucion: "EYWA usa IA y trazabilidad para convertir la sostenibilidad en evidencia auditable y bankable.",
    resultado: "Seleccionados para preincubación de Incuval Ventures, validando el modelo de aceleración al mercado.",
    image: ImageCard002,
    categoria: 'cibs',
    tags: ["IA", "Trazabilidad", "Impacto Climático", "Finanzas Verdes"],
    fecha: "2024",
    desarrolloLabel: "Liderado por",
    desarrollo_nombre: "Angel Francisco Kaqui Aquino",
    desarrollo_enlace: "https://www.linkedin.com/in/afkaqui/",
    contacto: "https://www.linkedin.com/pulse/eywa-la-sinergia-territorial-que-inspira-nuevas-generaciones-jvrje"
  },
  {
    titulo: "Andenex — Asociatividad para la Agroexportación",
    reto: "¿Cómo potenciar la competitividad comercial en cooperativas agrícolas para atraer inversores y exportar directamente?",
    solucion: "Reestructuración organizacional para diseñar oferta exportable con trazabilidad e IA junto a inversores comerciales.",
    resultado: "Cooperativas comercialmente competitivas, articuladas con inversores para proyectos de exportación integrales.",
    image: ImageCard003,
    categoria: 'cibs',
    tags: ["Agroexportación", "Cooperativas", "Blockchain", "IA"],
    fecha: "2024",
    desarrolloLabel: "Liderado por",
    desarrollo_nombre: "Randy Rivas Mori",
    desarrollo_enlace: "https://www.linkedin.com/in/randy-rivas-06a94b1a6/",
    contacto: "https://www.linkedin.com/pulse/andenex-asociatividad-para-la-agroexportaci%25C3%25B3n-atidslatam-yqsne"
  },
  {
    titulo: "Fotoclean — Arcillas Fotocatalíticas",
    reto: "¿Cómo reducir contaminantes y costos del tratamiento de aguas residuales en minería garantizando sostenibilidad?",
    solucion: "Pellets y sistemas flotantes con arcillas fotocatalíticas que degradan metales pesados usando luz solar.",
    resultado: "Aguas tratadas eficientemente, reducción de contaminantes y menor huella de carbono en procesos mineros.",
    image: ImageCard004,
    categoria: 'cibs',
    tags: ["Agua", "Minería Sostenible", "Fotocatálisis", "Economía Circular"],
    fecha: "2024",
    desarrolloLabel: "Liderado por",
    desarrollo_nombre: "Richard Lenin Lopez Benites",
    desarrollo_enlace: "https://www.linkedin.com/in/richard-lenin-lopez-benites-8b22b9236/",
    contacto: "https://www.linkedin.com/pulse/fotoclean-arcillas-fotocatal%C3%ADticas-para-aguas-residuales-genesperu-xljse"
  },
  {
    titulo: "Chantikuy — Experiencias que Transforman",
    reto: "Transformar una operadora turística tradicional en una empresa comprometida con la sostenibilidad sin perder competitividad.",
    solucion: "Reorientación estratégica incorporando prácticas sostenibles y fortaleciendo el turismo regenerativo.",
    resultado: "Consolidación como operadora de turismo regenerativo, reconocida por experiencias auténticas de valor compartido.",
    image: ImageCard005,
    categoria: 'cibs',
    tags: ["Turismo Regenerativo", "Sostenibilidad", "Comunidades"],
    fecha: "2024",
    desarrolloLabel: "Liderado por",
    desarrollo_nombre: "Wilson Lipa Fernandez",
    desarrollo_enlace: "https://www.linkedin.com/in/wilson-lipa-fernandez-67412a297/",
    contacto: "https://www.linkedin.com/pulse/chantikuy-turismo-comunitario-que-conecta-respeta-y-transforma-u1pge"
  },
  {
    titulo: "AVAIPE — Bosquenegocios Amazónicos",
    reto: "La Amazonía pierde valor y bosques por cadenas extractivas y monocultivos poco inclusivos.",
    solucion: "Bosquenegocios con vainilla, cacao y cúrcuma, bioinsumos propios y trazabilidad blockchain.",
    resultado: "Productores fortalecidos y bosques conservados mediante un modelo de triple impacto.",
    image: ImageCard006,
    categoria: 'cibs',
    tags: ["Amazonía", "Bosquenegocios", "Blockchain", "Triple Impacto"],
    fecha: "2024",
    desarrolloLabel: "Liderado por",
    desarrollo_nombre: "Erick Jimmy Rivas",
    desarrollo_enlace: "https://www.linkedin.com/in/erickrivasmori/",
    contacto: "https://www.linkedin.com/pulse/avaipe-bosquenegocios-amaz%25C3%25B3nicos-sostenibles-genesperu-0zgve"
  },

  // ── Coautoría con Russell Lorenzo Pujay — Fundo San Rocco ────────────────
  {
    titulo: "Big Data y Analítica: Fundo San Rocco",
    reto: "Los cultivos de vainilla generaban datos dispersos sin capacidad analítica para optimizar decisiones agrícolas en tiempo real.",
    solucion: "Arquitectura Big Data con sensores IoT en campo y modelos de Machine Learning para análisis predictivo de cosechas y sanidad vegetal.",
    resultado: "Dashboard operacional que incrementó la precisión de cosecha y redujo pérdidas por factores climáticos imprevistos.",
    image: ImageCard001,
    categoria: 'coautoria',
    tags: ["Big Data", "IoT", "Machine Learning", "Vainilla Planifolia"],
    fecha: "Mar 2025",
    desarrolloLabel: "Coautoría con",
    desarrollo_nombre: "Russell Lorenzo Pujay",
    desarrollo_enlace: "https://www.linkedin.com/in/russellpuj/",
    contacto: "https://russellfelixlorenzopujay.netlify.app/sections/projects"
  },
  {
    titulo: "SIG y Agricultura de Precisión: Fundo San Rocco",
    reto: "La gestión de parcelas sin información geoespacial limitaba la eficiencia en riego, fertilización y control fitosanitario.",
    solucion: "Implementación de Sistemas de Información Geográfica (SIG) para mapeo preciso de parcelas y zonas de manejo diferenciado.",
    resultado: "Reducción del uso de insumos agrícolas y trazabilidad geoespacial completa del cultivo de vainilla.",
    image: ImageCard003,
    categoria: 'coautoria',
    tags: ["GIS", "Agricultura de Precisión", "Transformación Digital", "Vainilla"],
    fecha: "Mar 2025",
    desarrolloLabel: "Coautoría con",
    desarrollo_nombre: "Russell Lorenzo Pujay",
    desarrollo_enlace: "https://www.linkedin.com/in/russellpuj/",
    contacto: "https://russellfelixlorenzopujay.netlify.app/sections/projects"
  },
  {
    titulo: "Agricultura de Precisión 4.0: Fundo San Rocco",
    reto: "El riego manual y fertilización empírica generaban costos elevados y alta variabilidad en la calidad del producto final.",
    solucion: "Sistemas IoT con automatización de riego inteligente, sensores de humedad de suelo y actuadores controlados remotamente.",
    resultado: "Reducción significativa en consumo de agua y mejora en la homogeneidad del cultivo de vainilla planifolia.",
    image: ImageCard004,
    categoria: 'coautoria',
    tags: ["IoT", "Automatización", "Riego Inteligente", "Vainilla Planifolia"],
    fecha: "May 2024",
    desarrolloLabel: "Coautoría con",
    desarrollo_nombre: "Russell Lorenzo Pujay",
    desarrollo_enlace: "https://www.linkedin.com/in/russellpuj/",
    contacto: "https://russellfelixlorenzopujay.netlify.app/sections/projects"
  },
  {
    titulo: "Inteligencia Artificial Agrícola: Fundo San Rocco",
    reto: "La detección de enfermedades en vainilla dependía de inspecciones manuales lentas, con alto riesgo de propagación.",
    solucion: "Modelos de visión computacional para detección temprana de patologías en hojas y vainas, con alertas automáticas al equipo agronómico.",
    resultado: "Detección de enfermedades con hasta 5 días de anticipación respecto al método manual, reduciendo pérdidas de cosecha.",
    image: ImageCard005,
    categoria: 'coautoria',
    tags: ["Machine Learning", "Visión Computacional", "IA Agrícola", "Vainilla Sostenible"],
    fecha: "May 2024",
    desarrolloLabel: "Coautoría con",
    desarrollo_nombre: "Russell Lorenzo Pujay",
    desarrollo_enlace: "https://www.linkedin.com/in/russellpuj/",
    contacto: "https://russellfelixlorenzopujay.netlify.app/sections/projects"
  },
  {
    titulo: "Data Room Optimizado: Gestión para MYPES",
    reto: "Las MYPES peruanas no accedían a financiamiento por falta de documentación estructurada que generara confianza en inversores.",
    solucion: "Data Room digital estandarizado con categorías financieras, legales y operativas, adaptado a la realidad de micro y pequeñas empresas.",
    resultado: "Mayor acceso a capital privado y crédito formal, con procesos de due diligence simplificados para inversores interesados.",
    image: ImageCard002,
    categoria: 'coautoria',
    tags: ["Gestión Documental", "Formalización", "Transparencia", "MYPES"],
    fecha: "May 2024",
    desarrolloLabel: "Coautoría con",
    desarrollo_nombre: "Russell Lorenzo Pujay",
    desarrollo_enlace: "https://www.linkedin.com/in/russellpuj/",
    contacto: "https://russellfelixlorenzopujay.netlify.app/sections/projects"
  },
  {
    titulo: "Centro de Extracción CO₂ Supercrítico: San Rocco",
    reto: "La vainilla procesada de forma artesanal perdía compuestos aromáticos de alto valor y generaba residuos sin aprovechar.",
    solucion: "Diseño de un centro de extracción con tecnología CO₂ supercrítico para capturar oleorresinas y principios activos de máxima pureza.",
    resultado: "Productos con mayor concentración de vainillina y subproductos integrados en un circuito de bioeconomía circular.",
    image: ImageCard006,
    categoria: 'coautoria',
    tags: ["CO₂ Supercrítico", "Bioeconomía", "Economía Circular", "Vainilla Planifolia"],
    fecha: "May 2024",
    desarrolloLabel: "Coautoría con",
    desarrollo_nombre: "Russell Lorenzo Pujay",
    desarrollo_enlace: "https://www.linkedin.com/in/russellpuj/",
    contacto: "https://russellfelixlorenzopujay.netlify.app/sections/projects"
  },
];

// ── Animated counter ──────────────────────────────────────────────────────────

function AnimatedCounter({ target, suffix = '', active }: {
  target: number;
  suffix?: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, active]);

  return <>{count}{suffix}</>;
}

// ── Component ─────────────────────────────────────────────────────────────────

const TABS: { key: Categoria; label: string }[] = [
  { key: 'todos',     label: 'Todos' },
  { key: 'cibs',      label: 'Ecosistema CIBS' },
  { key: 'coautoria', label: 'Coautoría San Rocco' },
];

const STATS = [
  { value: 12, suffix: '',  label: 'Proyectos' },
  { value: 8,  suffix: '+', label: 'Alianzas' },
  { value: 3,  suffix: '',  label: 'Países' },
  { value: 26, suffix: '',  label: 'Años de experiencia' },
];

export default function ImpactSection() {
  const [categoria, setCategoria]       = useState<Categoria>('todos');
  const [sectionVisible, setSectionVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const opts = { threshold: 0.05 } as IntersectionObserverInit;
    const sectionObs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setSectionVisible(true);
    }, opts);
    const statsObs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setStatsVisible(true);
    }, { threshold: 0.3 });

    if (sectionRef.current) sectionObs.observe(sectionRef.current);
    if (statsRef.current)   statsObs.observe(statsRef.current);

    return () => { sectionObs.disconnect(); statsObs.disconnect(); };
  }, []);

  const proyectosFiltrados =
    categoria === 'todos'
      ? casosEstudio
      : casosEstudio.filter(p => p.categoria === categoria);

  return (
    <section
      ref={sectionRef}
      id="impacto"
      className="py-16 sm:py-24 bg-white/5 relative overflow-hidden"
    >
      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-green-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Encabezado ── */}
        <div
          className="text-center mb-12 sm:mb-16"
          style={{
            opacity:    sectionVisible ? 1 : 0,
            transform:  sectionVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <span className="inline-block text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Portafolio de Impacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Proyectos con impacto demostrado
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            Cada caso representa una articulación real entre actores, capital e innovación. No propuestas — implementaciones.
          </p>
        </div>

        {/* ── Stats ── */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 hover:bg-white/8 transition-all duration-300"
              style={{
                opacity:    statsVisible ? 1 : 0,
                transform:  statsVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} active={statsVisible} />
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ── Filtros ── */}
        <div
          className="flex justify-center gap-2 mb-10 flex-wrap"
          style={{
            opacity:    sectionVisible ? 1 : 0,
            transform:  sectionVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}
        >
          {TABS.map(tab => {
            const count =
              tab.key === 'todos'
                ? casosEstudio.length
                : casosEstudio.filter(p => p.categoria === tab.key).length;
            const active = categoria === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setCategoria(tab.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg shadow-green-500/25 scale-105'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white hover:scale-105'
                }`}
              >
                {tab.label}
                <span
                  className={`ml-2 text-xs rounded-full px-1.5 py-0.5 ${
                    active ? 'bg-white/20' : 'bg-white/10'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Grid de proyectos ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectosFiltrados.map((caso, index) => (
            <div
              key={caso.titulo}
              className={sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}
              style={{ animationDelay: sectionVisible ? `${index * 0.07}s` : '0s' }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 hover:border-green-500/30 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 overflow-hidden group flex flex-col h-full">

                {/* Imagen */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={caso.image}
                    alt={caso.titulo}
                    fill
                    placeholder="blur"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        caso.categoria === 'cibs'
                          ? 'bg-green-500/80 text-white'
                          : 'bg-blue-500/80 text-white'
                      }`}
                    >
                      {caso.categoria === 'cibs' ? 'CIBS' : 'Coautoría'}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 rounded-full text-xs bg-black/50 text-white/80 backdrop-blur-sm border border-white/10">
                      {caso.fecha}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-lg line-clamp-2 min-h-[3.5rem] group-hover:text-green-300 transition-colors duration-300">
                    {caso.titulo}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 flex-grow flex flex-col pt-0">
                  <div className="space-y-3 flex-grow">
                    <div>
                      <h4 className="text-red-400 font-semibold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Target className="w-3 h-3" /> El Reto
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                        {caso.reto}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-blue-400 font-semibold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Zap className="w-3 h-3" /> Solución
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                        {caso.solucion}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-green-400 font-semibold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3" /> Resultado
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                        {caso.resultado}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {caso.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-white/10 rounded-full text-xs text-white/50 border border-white/10 hover:border-green-500/40 hover:text-white/70 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer de la tarjeta */}
                  <div className="pt-4 mt-2 border-t border-white/10 space-y-3">
                    <a
                      href={caso.desarrollo_enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-300 hover:text-blue-200 text-sm font-medium transition-colors"
                    >
                      {caso.desarrolloLabel}: {caso.desarrollo_nombre}
                    </a>

                    <a
                      href={caso.contacto}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center px-4 py-2 bg-white/5 hover:bg-green-500/20 text-white rounded-lg text-sm font-medium transition-all duration-300 border border-white/10 hover:border-green-500/50 group/btn"
                    >
                      Ver caso completo
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
