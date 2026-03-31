import type { Metadata } from "next";

const SITE_URL = "https://www.encsust4in4ble.earth";

export const metadata: Metadata = {
  title: "Plan de Gobierno 2026-2031 | Integridad Democrática",
  description:
    "Plan de Gobierno del Partido Político Integridad Democrática para el período 2026-2031. Propuestas para un Perú íntegro, sostenible e inclusivo.",
  keywords: [
    "Integridad Democrática",
    "Plan de Gobierno",
    "Perú 2026",
    "Elecciones Perú",
    "Partido Político",
    "Eduardo Noriega Campos",
    "Gobierno 2026-2031",
  ],
  alternates: {
    canonical: `${SITE_URL}/integridad-democratica`,
  },
  openGraph: {
    type: "article",
    locale: "es_PE",
    url: `${SITE_URL}/integridad-democratica`,
    title: "Plan de Gobierno 2026-2031 | Integridad Democrática",
    description:
      "Conoce el Plan de Gobierno del Partido Político Integridad Democrática. Propuestas para un Perú íntegro, sostenible e inclusivo.",
    siteName: "Eduardo Noriega Campos",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Integridad Democrática - Plan de Gobierno 2026-2031",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan de Gobierno 2026-2031 | Integridad Democrática",
    description:
      "Propuestas para un Perú íntegro, sostenible e inclusivo.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function IntegridadDemocraticaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
