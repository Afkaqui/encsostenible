import type { Metadata } from "next";

const SITE_URL = "https://www.encsust4in4ble.earth";

export const metadata: Metadata = {
  title: "Propuesta Parlamento Andino",
  description:
    "El Legado como Métrica, No como Promesa. Innovación y Sostenibilidad para la Gestión Pública. Propuesta del Mag. Ing. Eduardo Noriega para el Parlamento Andino.",
  keywords: [
    "Parlamento Andino",
    "Eduardo Noriega Campos",
    "Sostenibilidad",
    "Gestión Pública",
    "Innovación",
    "Perú",
    "Comunidad Andina",
  ],
  alternates: {
    canonical: `${SITE_URL}/propuesta-parlamento-andino`,
  },
  openGraph: {
    type: "article",
    locale: "es_PE",
    url: `${SITE_URL}/propuesta-parlamento-andino`,
    title: "Propuesta Parlamento Andino | Eduardo Noriega Campos",
    description:
      "El Legado como Métrica, No como Promesa. Innovación y Sostenibilidad para la Gestión Pública.",
    siteName: "Eduardo Noriega Campos",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Propuesta Parlamento Andino - Eduardo Noriega Campos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propuesta Parlamento Andino | Eduardo Noriega Campos",
    description:
      "Innovación y Sostenibilidad para la Gestión Pública.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function PropuestaParlamentoAndinoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
