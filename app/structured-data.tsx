const SITE_URL = "https://www.encsust4in4ble.earth";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eduardo Noriega Campos",
  jobTitle: "Consultor en Finanzas Sostenibles e Innovación",
  description:
    "Ingeniero con 26 años articulando finanzas verdes, bioeconomía e innovación empresarial en América Latina.",
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
    "Finanzas Verdes",
    "Bioeconomía",
    "Sostenibilidad",
    "Política Pública Ambiental",
    "Economía Circular",
    "Innovación Empresarial",
    "Ley 30309",
    "Desarrollo Sostenible",
    "América Latina",
    "Hélice Quíntuple",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Consultor en Finanzas Sostenibles e Innovación",
    occupationLocation: {
      "@type": "Country",
      name: "Perú",
    },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Eduardo Noriega Campos — Finanzas Sostenibles y Bioeconomía",
  url: SITE_URL,
  description:
    "Sitio oficial de Eduardo Noriega Campos. Finanzas verdes, bioeconomía e innovación empresarial en América Latina.",
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
        text: "Eduardo Noriega Campos es un ingeniero con 26 años de experiencia en finanzas sostenibles, bioeconomía e innovación empresarial en América Latina. Trabaja articulando academia, industria, gobierno y sociedad civil bajo la metodología de la Hélice Quíntuple.",
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
      name: "¿Qué es la Hélice Quíntuple?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Hélice Quíntuple es una metodología que integra cinco actores clave — Academia, Industria, Gobierno, Sociedad Civil y Medio Ambiente — para transformar la sostenibilidad en proyectos bankables y escalables con impacto medible.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo contactar a Eduardo Noriega Campos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes contactar a Eduardo Noriega Campos a través de su correo eduardo.noriega@bancasostenible.la, su perfil de LinkedIn linkedin.com/in/ingeduardonoriegaperu/ o agendando una reunión directamente en su sitio web.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
