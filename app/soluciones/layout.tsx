import type { Metadata } from "next";

const SITE_URL = "https://www.encsust4in4ble.earth";

const TITLE = "Soluciones — Estructuración de proyectos de impacto bankable";
const DESC =
  "Cuatro servicios productizados para convertir una iniciativa sostenible en un proyecto defendible: Diagnóstico de Readiness, Clínica Proyecto Bankable, Arquitectura Integral y Advisory.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE_URL}/soluciones` },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: `${SITE_URL}/soluciones`,
    title: TITLE,
    description: DESC,
    siteName: "ENC Sust4in4ble",
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "Soluciones ENC Sust4in4ble" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/opengraph-image.jpg"],
  },
};

export default function SolucionesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
