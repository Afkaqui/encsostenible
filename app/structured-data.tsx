const SITE_URL = "https://www.encsust4in4ble.earth";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eduardo Noriega Campos",
  jobTitle: "Candidato al Parlamento Andino 2026",
  description:
    "Candidato al Parlamento Andino 2026 por Integridad Democrática. Ingeniero con 26 años articulando finanzas verdes, bioeconomía e innovación empresarial en América Latina.",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.jpg`,
  sameAs: [
    "https://www.linkedin.com/in/ingeduardonoriegaperu/",
  ],
  nationality: {
    "@type": "Country",
    name: "Perú",
  },
  knowsAbout: [
    "Parlamento Andino",
    "Finanzas Verdes",
    "Bioeconomía",
    "Sostenibilidad",
    "Política Pública Ambiental",
    "Economía Circular",
    "Innovación Empresarial",
    "Ley 30309",
    "Desarrollo Sostenible",
    "América Latina",
  ],
  memberOf: {
    "@type": "Organization",
    name: "Integridad Democrática",
    url: SITE_URL,
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Ingeniero de Soluciones Sostenibles",
    occupationLocation: {
      "@type": "Country",
      name: "Perú",
    },
  },
  seeks: {
    "@type": "Role",
    roleName: "Representante ante el Parlamento Andino",
    startDate: "2026",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Integridad Democrática",
  url: SITE_URL,
  description:
    "Partido político comprometido con la integridad, la sostenibilidad y la inclusión en el Perú. Candidato presidencial Wolfgang Grozo.",
  foundingLocation: {
    "@type": "Country",
    name: "Perú",
  },
  member: {
    "@type": "Person",
    name: "Eduardo Noriega Campos",
    jobTitle: "Candidato al Parlamento Andino 2026",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Eduardo Noriega Campos — Parlamento Andino 2026",
  url: SITE_URL,
  description:
    "Sitio oficial de Eduardo Noriega Campos, candidato al Parlamento Andino 2026 por Integridad Democrática.",
  inLanguage: "es-PE",
  publisher: {
    "@type": "Person",
    name: "Eduardo Noriega Campos",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/calculadora-fiscal`,
    },
    "query-input": "Calcular beneficio fiscal Ley 30309",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Quién es Eduardo Noriega Campos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eduardo Noriega Campos es candidato al Parlamento Andino 2026 por el partido Integridad Democrática. Ingeniero con 26 años de experiencia en finanzas sostenibles, bioeconomía e innovación empresarial en América Latina.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la Ley 30309 y cómo funciona la calculadora fiscal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Ley 30309 del Perú permite a las empresas deducir hasta el 240% de sus inversiones en I+D+i del Impuesto a la Renta. La calculadora de Eduardo Noriega permite calcular el ahorro estimado de forma gratuita en menos de 3 minutos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el Parlamento Andino?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Parlamento Andino es el órgano deliberante del Sistema Andino de Integración, conformado por representantes electos de Bolivia, Colombia, Chile, Ecuador y Perú. Las elecciones para el período 2026-2031 se realizan junto con las elecciones generales del Perú.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo contactar a Eduardo Noriega Campos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes contactar a Eduardo Noriega Campos a través de su correo eduardo.noriega@bancasostenible.la, su perfil de LinkedIn linkedin.com/in/ingeduardonoriegaperu/ o agendando una reunión en su sitio web.",
      },
    },
  ],
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
