const SITE_URL = "https://www.encsust4in4ble.earth";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ENC Sust4in4ble",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.jpg`,
  description:
    "Firma boutique de arquitectura de impacto bankable: estructura iniciativas sostenibles para que puedan evaluarse, financiarse y ejecutarse.",
  areaServed: {
    "@type": "Place",
    name: "América Latina y el Caribe",
  },
  slogan: "Innovamos juntos, multiplicamos valor",
  knowsAbout: [
    "Inversión de impacto",
    "Finanzas sostenibles",
    "Bioeconomía",
    "Economía circular",
    "Estructuración de proyectos",
    "Gobernanza multiactor",
    "Ley 30309",
    "Hélice Quíntuple",
  ],
  founder: {
    "@type": "Person",
    name: "Eduardo José Noriega Campos",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eduardo José Noriega Campos",
  jobTitle: "Arquitecto de proyectos y ecosistemas de impacto",
  description:
    "Más de 20 años de trayectoria en finanzas, inversión, sostenibilidad e innovación en América Latina.",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.jpg`,
  sameAs: ["https://www.linkedin.com/in/ingeduardonoriegaperu/"],
  nationality: {
    "@type": "Country",
    name: "Perú",
  },
  worksFor: {
    "@type": "Organization",
    name: "ENC Sust4in4ble",
    url: SITE_URL,
  },
  knowsAbout: [
    "Inversión de impacto",
    "Finanzas sostenibles",
    "Bioeconomía",
    "Economía circular",
    "Gobernanza",
    "Ley 30309",
    "Hélice Quíntuple",
    "América Latina",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ENC Sust4in4ble",
  url: SITE_URL,
  description:
    "Firma boutique que convierte iniciativas sostenibles complejas en proyectos listos para decisión, financiamiento y ejecución.",
  inLanguage: "es-PE",
  publisher: {
    "@type": "Organization",
    name: "ENC Sust4in4ble",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/diagnostico-readiness`,
    },
    "query-input": "Diagnóstico de readiness para inversión de impacto",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es ENC Sust4in4ble?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ENC Sust4in4ble es una firma boutique de arquitectura de impacto bankable. Integra evidencia, modelo económico, gobernanza y articulación institucional para preparar proyectos sostenibles ante comités, fondos, empresas y entidades públicas. Está liderada por Eduardo José Noriega Campos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el Diagnóstico Ejecutivo de Readiness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es una evaluación que identifica en pocos días qué está listo en un proyecto, qué falta demostrar y cuál es el siguiente movimiento antes de presentarlo a un comité, fondo o aliado estratégico. Incluye un scorecard de diez dimensiones, un semáforo de brechas y una hoja de ruta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la Hélice Quíntuple?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es una metodología que integra cinco actores clave — Academia, Industria, Gobierno, Sociedad Civil y Medio Ambiente — para transformar la sostenibilidad en proyectos bankables y escalables con impacto medible.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo contactar a ENC Sust4in4ble?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El canal oficial es el correo contacto@encsust4in4ble.earth. También es posible solicitar una evaluación de encaje desde el sitio web.",
      },
    },
  ],
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
