const SITE_URL = "https://www.encsust4in4ble.earth";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eduardo Noriega Campos",
  jobTitle: "Ingeniero de Soluciones Sostenibles",
  description:
    "Articulador de ecosistemas sostenibles en América Latina. Especialista en la Hélice Quíntuple, finanzas verdes, política pública y bioeconomía regenerativa.",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.jpg`,
  sameAs: [
    "https://www.linkedin.com/in/eduardo-noriega-campos",
  ],
  knowsAbout: [
    "Sostenibilidad",
    "Hélice Quíntuple",
    "Bioeconomía",
    "Finanzas Verdes",
    "Política Pública Ambiental",
    "Economía Circular",
    "Parlamento Andino",
    "Desarrollo Sostenible",
  ],
  nationality: {
    "@type": "Country",
    name: "Perú",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "PoliticalParty",
  name: "Integridad Democrática",
  url: SITE_URL,
  description:
    "Partido político comprometido con la integridad, sostenibilidad e inclusión en el Perú.",
  foundingLocation: {
    "@type": "Country",
    name: "Perú",
  },
  member: {
    "@type": "Person",
    name: "Eduardo Noriega Campos",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Eduardo Noriega Campos",
  url: SITE_URL,
  description:
    "Articulador de ecosistemas sostenibles en América Latina.",
  inLanguage: "es",
  publisher: {
    "@type": "Person",
    name: "Eduardo Noriega Campos",
  },
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
    </>
  );
}
